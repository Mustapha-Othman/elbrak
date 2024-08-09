"use client"; // Error components must be Client Components

import { useEffect } from "react";

import classes from "../../../components/GlobalError/GlobalError.module.css";
import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Center,
} from "@mantine/core";
import image from "../../../../public/image-404.svg";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container size="lg" className={classes.root}>
      <Center>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          {/* <Image src={image} className={classes.mobileImage} /> */}
          <Image
            src={image.src}
            alt="Not Found"
            className={classes.desktopImage}
          />
          <div className="pt-12">
            <Title textWrap="balance" className={classes.title}>
              {error.message ? error.message : "هناك خطآ ما..."}
            </Title>

            <Button
              size="md"
              variant="filled"
              color="Color3"
              mt="xl"
              className={classes.control + ` ml-10`}
              onClick={() => router.back()}
            >
              الرجوع للخلف
            </Button>
            <Button
              size="md"
              variant="filled"
              color="Color4"
              mt="xl"
              className={classes.control}
              onClick={() => reset()}
            >
              آعد المحاولة؟
            </Button>
          </div>
        </SimpleGrid>
      </Center>
    </Container>
  );
}
