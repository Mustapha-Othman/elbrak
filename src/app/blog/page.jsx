"use client";
import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import {
  Container,
  Card,
  Text,
  Group,
  Center,
  rem,
  Grid,
  Title,
  Space,
  Pagination,
  Overlay,
} from "@mantine/core";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import classes from "./blog.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useApi } from "@/libs/hooks/global";
import LoadingBlog from "@/components/LoadingBlog/LoadingBlog";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(1);

  // print a random number from 100 to 1000
  const getRandomNumber = () => Math.floor(Math.random() * 900) + 100;

  const [query, setQuery] = useState({
    method: "GET",
    path: "blogs",
    query: {
      populate: "*",
      sort: "createdAt",
      pagination: { page: page, pageSize: 6 },
      sort: "createdAt:desc",
    },
  });

  const { data, error, isLoading } = useApi(query);

  const total = data?.meta && Math.ceil(data.meta.pagination.total / 6);

  useEffect(() => {
    setTotalPage(total);
    setQuery({
      method: "GET",
      path: "blogs",
      query: {
        populate: "*",
        pagination: { page: page, pageSize: 6 },
        sort: "createdAt:desc",
      },
    });
  }, [data?.meta, total, page]);

  function pageinationOnChange(e) {
    setPage(e);
  }

  if (isLoading) {
    return <LoadingBlog />;
  }
  if (error) {
    return <ErrorPage content={error.message} />;
  }

  return (
    <>
      <Container fluid size="xl" className={classes.titleBody}>
        <Overlay color="#000" opacity={0.8} zIndex={1} />
        <Title
          order={1}
          size="h1"
          textWrap="pretty"
          className={classes.Blogtitle}
        >
          {"المدونة"}
        </Title>
      </Container>
      <Container size="xl" className="pt-16 pb-16">
        <Grid gutter="lg" justify="center" align="flex-start">
          {data?.data &&
            data.data.map((blog, i) => {
              return (
                <Grid.Col
                  span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}
                  key={i}
                >
                  <Link
                    href={`/blog/${blog.id}/${decodeURIComponent(
                      blog.attributes.title
                    )}`}
                  >
                    <Card
                      p="lg"
                      shadow="lg"
                      className={classes.card}
                      radius="md"
                    >
                      <div
                        className={classes.image}
                        style={{
                          backgroundImage: `url(${
                            blog.attributes.media.data[0] !== null
                              ? blog.attributes.media.data[0].attributes.url
                              : "https://placehold.co/600x400?text=no+image"
                          })`,
                        }}
                      />
                      <div className={classes.overlay} />

                      <div className={classes.content}>
                        <div>
                          <Title
                            order={1}
                            size="h4"
                            className={classes.title}
                            lineClamp={2}
                          >
                            {blog.attributes.title}
                          </Title>

                          <Group justify="space-between" gap="xs">
                            <Text size="sm" className={classes.author}>
                              Ahmed Ahmed
                            </Text>

                            <Group gap="lg">
                              <Center>
                                <IconEye
                                  style={{ width: rem(16), height: rem(16) }}
                                  stroke={1.5}
                                  color="white"
                                />
                                <Space w="2px" />
                                <Text size="sm" className={classes.bodyText}>
                                  {getRandomNumber()}
                                </Text>
                              </Center>
                              <Center>
                                <IconMessageCircle
                                  style={{ width: rem(16), height: rem(16) }}
                                  stroke={1.5}
                                  color="gray"
                                />
                                <Space w="2px" />
                                <Text size="sm" className={classes.bodyText}>
                                  {" 0"}
                                </Text>
                              </Center>
                            </Group>
                          </Group>
                        </div>
                      </div>
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

export default Blog;
