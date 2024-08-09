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

const grids = Array.from({ length: 4 }, (v, i) => (
  <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
    <Card shadow="xl" className="relative " padding="xs" radius="sm">
      <Card.Section className="relative">
        <Skeleton height={"160px"} className="mb-5" radius="xs" />
      </Card.Section>

      <Skeleton height={"30px"} radius="xs" />
      <Divider my="md" color="Color2" variant="dashed" />
      <Skeleton height={"120px"} radius="xs" />
      <Divider my="md" color="Color2" variant="dashed" />
      {/* <Card.Section className="relative"> */}
      <Button radius="xs" variant="filled" color="Color4">
        {i}تفاصيل دراسة الجدوى
      </Button>
      {/* </Card.Section> */}
    </Card>
  </Grid.Col>
));

export default function LoadingStudies() {
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
