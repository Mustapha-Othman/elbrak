"use client";
import classes from "./GlobalError.module.css";
import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Center,
} from "@mantine/core";
import image from "../../../public/image-404.svg";
import { useRouter } from "next/navigation";

const GlobalError = ({ content }) => {
  const router = useRouter();
  return (
    <>
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
                {content ? content : "هناك خطآ ما..."}
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
                الصفحة الرئيسية
              </Button>
            </div>
          </SimpleGrid>
        </Center>
      </Container>
    </>
  );
};

export default GlobalError;
