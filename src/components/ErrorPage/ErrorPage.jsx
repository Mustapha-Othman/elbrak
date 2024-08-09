"use client";
import classes from "./ErrorPage.module.css";
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

const Custom404 = ({ content }) => {
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
              <Text c="gray.7" size="md">
                الصفحة التي تحاول فتحها غير موجودة. ربما أخطأت في كتابة العنوان،
                أو تم نقل الصفحة إلى عنوان آخر. إذا كنت تعتقد أن هذا خطأ، فاتصل
                بالدعم الفني للموقع.
              </Text>
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
                onClick={() => router.push("/")}
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

export default Custom404;
