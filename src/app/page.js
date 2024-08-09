"use client";
import cx from "clsx";
import { Title, Text, Container, Button, Overlay, Image } from "@mantine/core";
import classes from "./Home.module.css";
import { useRouter } from "next/navigation";
import imageTable from "../../public/table.png";
import FeatuersServiceHome from "@/containers/FeaturesServiceHome/FeatuersServiceHome";
import { StatsHome } from "@/containers/StatsHome/StatsHome";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.5} zIndex={1} />

        <div className={classes.inner}>
          <Title size="h1" className={classes.title}>
            من هنا تبدأ رحلتك الاستثمارية نحو استثمار آمن ومربح
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              تحمل “البراك” منذ بدأت رسالة خدمة رواد الأعمال والارتقاء بمستوى
              الاقتصاد على الصعيد العربي، فنحن نعمل بفريقنا المتميز ذوي الخبرة
              على تقديم كافة خدمات الأعمال التي تساند المستثمرين على تجاوز وتخطي
              عراقيل الاستثمار وإيجاد حلول وتوفير البدائل الملائمة لمتطلبات
              السوق ولحاجة المشروع، لتحقيق الهدف من المشروع على أسس علمية، فعالة
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              onClick={(event) => {
                event.preventDefault();
                router.push(`/studies`);
              }}
              color="Color4"
              size="xl"
              className={classes.control}
              mt={40}
            >
              خدماتنا
            </Button>
          </div>
        </div>
      </div>
      <FeatuersServiceHome />
      <StatsHome />
      <Container className="py-20">
        <Title c="Color3" size="h1" className="text-9xl text-center">
          مراحل الدراسة
        </Title>
        {/* <Spacer></Spacer> */}
        <Image src={imageTable.src} alt="منصة البراك لدرا��ات الجدوى" />
      </Container>
    </>
  );
}
