import { Container, Text, Title, Divider, Image, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./about.module.css";
import { NextImage } from "next/image";
import about from "../../../public/about.svg";
const About = () => {
  return (
    <>
      <Container fluid className={classes.aboutContainer}>
        <Title
          order={1}
          textWrap="balance"
          size="h1"
          className={classes.aboutTitle}
        >
          من نحن
        </Title>
      </Container>
      <Container fluid className={classes.about}>
        <Container>
          <Divider
            my="md"
            color="Color2"
            variant="dashed"
            labelPosition="center"
            label={
              <>
                <IconSearch size={12} />
              </>
            }
          />

          <Flex
            mih={50}
            // bg="rgba(0, 0, 0, .3)"
            gap={{ base: "md", sm: "lg" }}
            justify={{ md: "center", sm: "center" }}
            align="flex-end"
            direction={{ md: "row", sm: "column", xs: "column" }}
            wrap={{ base: "nowrap", sm: "wrap" }}
          >
            <Text
              size="lg"
              fw={900}
              variant="gradient"
              gradient={{ from: "Color3", to: "Color4", deg: 180 }}
            >
              مؤسسة البراك لدراسات الجدوى والاستشارات هي متخصصة في إعداد دراسات
              الجدوى التفصيلية الشاملة لتقديم رؤية جديدة لدى رواد الأعمال
              والمستثمرين بالوطن العربي لنساعدهم على بناء مشاريع استثمارية واعدة
              تسهم في تحقيق النمو الاقتصادي، يأتي هذا من منطلق حرصًا الدائم على
              أن نقدم للمستثمرين وراد الأعمال دراسة تفصيلية شاملة (مالية، فنية،
              تسويقية) بجانب حلول التمويل وخطوط الإنتاج وعروض الأسعار كما أننا
              نسهم في تقديم دراسة متكاملة للسوق المستهدفة وتحليل المنافسين، فنحن
              نسعى بأن نكون الخيار الأول لدى عملائنا في الشرق الأوسط والخليج
              العربي وذلك إيمانًا بقدرتنا على أن نقدم حلولًا رفيعة المستوى
              وخدمات احترافية مبنية على أسس علمية دقيقة وتحت إشراف مستشارين ذوي
              خبرة في مجال قطاع الأعمال.
            </Text>
            <Image
              h={250}
              w={250}
              component={NextImage}
              src={about.src}
              alt="about"
              fit="contain"
            />
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default About;
