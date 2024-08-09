"use client";
import {
  Text,
  Title,
  Container,
  ActionIcon,
  Group,
  rem,
  Button,
  Affix,
  Transition,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

import { useDisclosure } from "@mantine/hooks";

const data = [
  {
    title: "خدماتنا",
    links: [
      { label: "القطاع الخدمي", link: "#" },
      { label: "القطاع الصناعي", link: "#" },
      { label: "القطاع الزراعي", link: "#" },
      { label: "القطاع السياحي", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Project2",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
];

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const [scroll, scrollTo] = useWindowScroll();

  const [loading, { toggle }] = useDisclosure();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid className={classes.inner}>
        <div className={classes.logo}>
          <Image src={logo.src} width={100} height={50} alt="logo" />
          {/* <MantineLogo size={30} /> */}
          <Title
            textWrap="balance"
            order={1}
            size="h2"
            c="Color1"
            className={classes.description}
          >
            مؤسسة البراك لدراسات الجدوى
          </Title>
          <Text size="md" c="Color2" className={classes.description}>
            العنوان : المملكة العربية السعودية – جازان – أبوعريش.
          </Text>
          <Text size="md" c="Color2" className={classes.description}>
            العنوان : جمهورية مصر العربية –بني سويف الجديدة شرق النيل – الحي
            الأول .
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          كل الحقوق محفوظه {year} .
        </Text>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.facebook.com/elbrak1/"
            target="_blank"
          >
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://x.com/lbrk170781"
            target="_blank"
          >
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.instagram.com/elbrak378/"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D9%83-%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%89-9227222b3"
          >
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>

        <Affix position={{ bottom: 20, left: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftSection={
                  <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
                }
                color="Color3"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                الي فوق
              </Button>
            )}
          </Transition>
        </Affix>
      </Container>
    </footer>
  );
}
