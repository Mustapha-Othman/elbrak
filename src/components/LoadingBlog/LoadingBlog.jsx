"use client";
import {
  Card,
  Container,
  Grid,
  Button,
  Divider,
  Skeleton,
  Center,
  Overlay,
} from "@mantine/core";
import classes from "./page.module.css";

const grids = Array.from({ length: 3 }, (v, i) => (
  <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }} key={i}>
    <Card shadow="xl" className="!relative !p-0" radius="sm">
      <Skeleton height={"300px"} w={"100%"} radius="xs" />
    </Card>
  </Grid.Col>
));

export default function LoadingBlog() {
  return (
    <>
      <Container fluid size="xl" className={classes.titleBody}>
        <Overlay color="#000" opacity={0.8} zIndex={1} />
        <Center>
          <Skeleton
            height={"40px"}
            width={"200px"}
            className="mb-[40px]"
            radius="xs"
          />
        </Center>
      </Container>

      <Container size="xl" className="pt-16 pb-16">
        <Grid gutter="lg" justify="center" align="flex-start">
          {grids}
        </Grid>
      </Container>
    </>
  );
}
