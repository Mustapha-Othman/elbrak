"use client";
import { useStudies } from "@/libs/hooks/studie";
import {
  Card,
  Container,
  Image,
  Text,
  Title,
  Grid,
  Button,
  Divider,
  Pagination,
  Center,
  Overlay,
  Badge,
} from "@mantine/core";
import Link from "next/link";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import htmlToString from "@/app/_utils/htmlToString";
import { useScrollIntoView } from "@mantine/hooks";
import classes from "./[...id]/page.module.css";
import LoadingStudies from "@/components/LoadingStudies/LoadingStudies";

export default function Studies() {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(1);

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: -1000,
    axis: "y",
    duration: 1000,
    // easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2),
  });

  const [query, setQuery] = useState({
    method: "GET",
    path: "drasat-aljdwies",
    query: {
      populate: "*",
      pagination: { page: page, pageSize: 8 },
      sort: { 0: "createdAt:desc", 1: "id:desc" },
    },
  });

  const { data, error, isLoading } = useStudies(query);

  const total = data?.meta && Math.ceil(data.meta.pagination.total / 8);

  useEffect(() => {
    setTotalPage(total);
    setQuery({
      method: "GET",
      path: "drasat-aljdwies",
      query: {
        populate: "*",
        pagination: { page: page, pageSize: 8 },
        sort: { 0: "createdAt:desc" },
      },
    });
  }, [data?.meta, total, page]);

  function pageinationOnChange(e) {
    setPage(e);
  }

  console.log(data?.data ? data?.data : null);

  if (isLoading) {
    return <LoadingStudies />;
  } else if (error) {
    return <ErrorPage content={error.message} />;
  } else {
    return (
      <>
        <head>
          <title>My Blog</title>
        </head>
        <Container fluid size="xl" className={classes.titleBody}>
          <Overlay color="#000" opacity={0.8} zIndex={1} />
          <Title
            order={1}
            size="h1"
            textWrap="pretty"
            className={classes.title}
          >
            {"دراسات الجدوي"}
          </Title>
        </Container>

        <div ref={targetRef}></div>
        <Container size="xl" className="pt-16 pb-16">
          <Grid gutter="lg" justify="center" align="flex-start">
            {data?.data &&
              data.data.map((stud, i) => {
                return (
                  <Grid.Col
                    span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 3 }}
                    key={i}
                  >
                    <Link
                      href={`/studie/${stud.id}/${decodeURIComponent(
                        stud.attributes.title
                      )}`}
                    >
                      <Card
                        shadow="xl"
                        className="relative "
                        padding="xs"
                        radius="sm"
                      >
                        <Card.Section className="relative">
                          <Image
                            src={
                              stud.attributes.media.data !== null
                                ? stud.attributes.media.data.attributes.url
                                : "https://placehold.co/600x400?text=no+image"
                            }
                            // src={studimage}
                            h={160}
                            alt={stud.attributes.title}
                          />
                          <Badge
                            color="Color1"
                            c="black"
                            size="md"
                            radius="xs"
                            className="absolute top-8 right-3"
                          >
                            {
                              stud.attributes.tsnyf_drasat_aljdwy.data
                                .attributes.title
                            }
                          </Badge>
                        </Card.Section>

                        <Title
                          order={1}
                          size="h4"
                          textWrap="pretty"
                          className="pt-3 text-center min-h-[70px]"
                          lineClamp={2}
                        >
                          {stud.attributes.title}
                        </Title>
                        <Divider my="md" color="Color2" variant="dashed" />
                        <Text c="black" fw={200} size="xs" lineClamp={5}>
                          {htmlToString(stud.attributes.content)}
                        </Text>
                        <Divider my="md" color="Color2" variant="dashed" />
                        {/* <Card.Section className="relative"> */}
                        <Button radius="xs" variant="filled" color="Color4">
                          تفاصيل دراسة الجدوى
                        </Button>
                        {/* </Card.Section> */}
                      </Card>
                    </Link>
                  </Grid.Col>
                );
              })}
          </Grid>
        </Container>
        <Container className="pb-16">
          <Center>
            <Pagination
              total={totalpage}
              value={page}
              onClick={() =>
                scrollIntoView({
                  alignment: "center",
                })
              }
              onChange={(e) => pageinationOnChange(e)}
              radius="xl"
              color="Color4"
            />
          </Center>
        </Container>
      </>
    );
  }
}
