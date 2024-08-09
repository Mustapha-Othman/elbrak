import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
  Container,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons-react";
import classes from "./FeatuersServiceHome.module.css";
import featuresImage from "../../../public/undraw_working.svg";

import Image from "next/image";

const features = [
  {
    icon: IconFileCode,
    title: "دراسات جدوى اقتصادية",
    description:
      "من الخدمات المميزة المُقدمة للمستثمرين ورواد الأعـمــــــال لـــتحــقـق الأربــــاح الــمـاليــة.",
  },
  {
    icon: IconFileCode,
    title: "استشارات إدارية ومالية",
    description:
      "نسـاعد على تطويـر خطط الأعمـال المــالـــيـــة والإدارية وتحديد الفرص الاستثمارية المتاحة.",
  },
  {
    icon: IconFileCode,
    title: "خدمات نموذج الـ Pitch Deck",
    description:
      "نساعدك في الحصول على عـــــرض تقـــديمي مقنع للمستثمرين لإيصــال الفكرة بجــــاذبيــــة.",
  },
  {
    icon: IconFileCode,
    title: "دراسة وأبحاث السوق",
    description:
      "نـعمـل عـلـى جــمــع وتــحــلــيــل مــعلومـات عن السـوق وتـحـديد حجـم الطلب للخـدمـات.",
  },
  {
    icon: IconFileCode,
    title: "وضع الخطة التسويقية",
    description:
      "نساعدك على وضع استراتيجيات تسويق فعالة وتحقيق أهداف الشــركة وتــــطــويرها باستمـــرار.",
  },
  {
    icon: IconFileCode,
    title: "دراسة وتحليل المنافسين",
    description:
      "نساعدك لوضع استراتيجية قوية لدخول السوق المستهدف بناءً على تحليل شامـل للمنافسيــن.",
  },
];
const FeatuersServiceHome = () => {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "Color3", to: "Color2" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text c="Color3" fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="black" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <>
      <Container fluid className={classes.wrapper}>
        <Grid gutter={50}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title className={classes.title} order={2}>
              خدمات الاستشارات الاقتصادية
            </Title>
            <Image
              src={featuresImage.src}
              alt="خدمات الاستشارات الاقتصادية"
              height={250}
              width={300}
            />

            <Text c="dimmed">
              نقدم لك دراسات جدوى تفصيلية مبنية على أسس علمية مدروسة لإتخاذ قرار
              استثماري بعناية وحرص، وأيضا الدراسة معتمدة ومطابقة لكافة شروط
              الدعم التمويل
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, md: 3, xs: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default FeatuersServiceHome;
