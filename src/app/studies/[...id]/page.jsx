"use client";
import Loaders from "@/components/Loaders/loaders";
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
} from "@mantine/core";
import Link from "next/link";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import htmlToString from "@/app/_utils/htmlToString";
import { useScrollIntoView } from "@mantine/hooks";
import classes from "./page.module.css";
import LoadingStudies from "@/components/LoadingStudies/LoadingStudies";

const Studie = ({ params }) => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(1);

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 10,
    axis: "y",
    duration: 1000,
    // easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2),
  });

  const [query, setQuery] = useState({
    method: "GET",
    path: "drasat-aljdwies",
    query: {
      populate: "*",
      filters: { tsnyf_drasat_aljdwy: params.id[0] },
      pagination: { page: page, pageSize: 8 },
      sort: "createdAt:desc",
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
        filters: { tsnyf_drasat_aljdwy: params.id[0] },
        pagination: { page: page, pageSize: 8 },
        sort: "createdAt:desc",
      },
    });
  }, [data?.meta, total, page, params.id]);

  function pageinationOnChange(e) {
    setPage(e);
  }

  if (isLoading) {
    return <LoadingStudies />;
  }
  if (error) {
    return <ErrorPage content={error.message} />;
  }
  return (
    <>
      <Container fluid size="xl" className={classes.titleBody}>
        <Overlay color="#000" opacity={0.8} zIndex={1} />
        <Title order={1} size="h1" textWrap="pretty" className={classes.title}>
          {decodeURIComponent(params.id[1])}
        </Title>
        <Center>
          <Text fw={900} size="xl" c="Color4" className="z-10">
            دراسات
          </Text>
        </Center>
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
                      <Card.Section>
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
                      <Button variant="filled" color="Color4">
                        تفاصيل دراسة الجدوى
                      </Button>
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
            radius="md"
            color="Color4"
          />
        </Center>
      </Container>
    </>
  );
};

export default Studie;
