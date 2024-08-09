"use client";
import config from "@/config";
import dataSearch from "./dataSearch.json";
import { useEffect, useState } from "react";
import {
  Container,
  Group,
  Burger,
  Button,
  Menu,
  Image,
  Loader,
  Space,
  Center,
  Text,
  Badge,
  Kbd,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo.svg";
import NextImage from "next/image";
import { useCate } from "../../libs/hooks/cats";
import MinMenu from "../MinMenu/MinMenu";
import { IconSearch } from "@tabler/icons-react";

import { Spotlight, spotlight } from "@mantine/spotlight";
import links from "./links.json";
import { useSearch } from "@/libs/hooks/search";
import htmlToString from "@/app/_utils/htmlToString";

export function Header() {
  const [sdata, setSdata] = useState(dataSearch);

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const router = useRouter();
  const pathname = usePathname();

  const [squery, setSquery] = useState("");

  const [searchQ, setSearchQ] = useState({
    method: "GET",
    path: "fuzzy-search/search",
    query: {
      query: squery,
    },
  });

  const {
    data: search,
    isLoading: sloading,
    error: serror,
  } = useSearch(searchQ);

  useEffect(() => {
    setSearchQ({
      method: "GET",
      path: "fuzzy-search/search",
      query: {
        query: squery,
      },
    });
    if (search && search["drasat-aljdwies"]) {
      if (search["drasat-aljdwies"].length > 0) {
        AppendSearchResult(search, setSdata);
      }
      if (squery.length == 0) {
        setSdata(dataSearch);
      }
    }
  }, [squery]);

  const sitems = sdata
    .filter((item) =>
      item.title.toLowerCase().includes(squery.toLowerCase().trim())
    )
    .map((item) => (
      <Spotlight.Action
        w="100%"
        className="p-10"
        key={item.title}
        onClick={(event) => {
          event.preventDefault();
          router.push(`${item.link}`);
          setActive(item.link);
        }}
      >
        <Group wrap="nowrap" w="100%">
          <div style={{ flex: 1 }}>
            <Title order={1} size={"h6"}>
              {item.title}
            </Title>

            {item.description && (
              <Text opacity={0.5} size="xs">
                {item.description}
              </Text>
            )}
          </div>

          {item.new && <Badge variant="default">جديد</Badge>}
        </Group>
      </Spotlight.Action>
    ));

  const query = {
    method: "GET",
    path: "tsnyf-drasat-aljdwies",
    query: {
      populate: "*",
    },
  };
  const { data, isLoading, error } = useCate(query);

  const items = MenuItems(pathname, router, setActive, isLoading, data);

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Group>
            <Link href="/">
              <Image
                src={logo}
                component={NextImage}
                w={0}
                h={0}
                width={0}
                height={0}
                // fit="100%"
                alt="logo"
                priority={true}
                className="!w-[100px] !h-auto"
              />
            </Link>
          </Group>
          <Group gap={8} visibleFrom="sm">
            {items}
          </Group>
          <Group gap={5} visibleFrom="sm">
            <Button
              variant="outline"
              color="Color3"
              className="!px-1"
              onClick={spotlight.open}
            >
              <IconSearch size={12} />
              <Space w={"10px"} />
              بحث
              <Space w={"20px"} />
              <div dir="ltr" className={classes.search}>
                <Kbd>Shift</Kbd> + <Kbd>K</Kbd>
              </div>
            </Button>
          </Group>

          <Group hiddenFrom="sm">
            <Button variant="outline" color="Color3" onClick={spotlight.open}>
              <IconSearch size={12} />
              <Space w={"10px"} />
              بحث
            </Button>
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Container>
      </header>
      <MinMenu
        opened={opened}
        toggle={toggle}
        data={data}
        isloading={isLoading}
      />

      <Spotlight.Root
        shortcut="shift + K"
        query={squery}
        scrollable
        onQueryChange={setSquery}
      >
        <Spotlight.Search
          placeholder={"بحث ..."}
          leftSection={<IconSearch stroke={1.5} />}
        />
        <Spotlight.ActionsList>
          {sitems.length > 0 ? (
            sitems
          ) : (
            <Spotlight.Empty>
              لم نجد نتيجه مطابقه لبحثك حاول مره اخري!
            </Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
function MenuItems(pathname, router, setActive, isLoading, data) {
  return links.map((link) => {
    if (link.link == "/studies") {
      // console.log(pathname.substring(0, 8));
      return (
        <Menu
          key={link.label}
          // width={200}
          shadow="md"
          position="bottom-end"
          offset={7}
          withArrow={true}
          arrowPosition="center"
          zIndex="999999"
          transitionProps={{ transition: "fade-up", duration: 150 }}
          trigger="click-hover"
        >
          <Menu.Target>
            <Link
              href="#"
              color="Color4"
              className={classes.link}
              data-link={link.link}
              data-active={
                pathname.substring(0, 8) == link.link ||
                pathname.substring(0, 7) == "/studie"
                  ? true
                  : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                router.push(`${link.link}`);
                setActive(link.link);
              }}
            >
              {link.label}
            </Link>
          </Menu.Target>

          <Menu.Dropdown>
            {isLoading ? (
              <Loader color="Color4" size="md" />
            ) : (
              data?.data &&
              data?.data.map((cat, i) => (
                <Menu.Item
                  key={i}
                  color="Color3"
                  className={classes.link}
                  data-active={
                    pathname ==
                    `/studies/${cat.id}/${decodeURIComponent(
                      cat.attributes.title
                    )}`
                      ? true
                      : undefined
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    router.push(
                      `/studies/${cat.id}/${decodeURIComponent(
                        cat.attributes.title
                      )}`
                    );
                    setActive(
                      `/studies/cat.id/decodeURIComponent(cat.attributes.title)`
                    );
                  }}
                  component="a"
                  href={`/studies/${cat.id}/${decodeURIComponent(
                    cat.attributes.title
                  )}`}
                >
                  {cat.attributes.title}
                </Menu.Item>
              ))
            )}
          </Menu.Dropdown>
        </Menu>
      );
    } else {
      return (
        <Link
          key={link.label}
          color="Color4"
          href={link.link}
          className={classes.link}
          data-active={pathname == link.link ? true : undefined}
          onClick={(event) => {
            event.preventDefault();
            router.push(`${link.link}`);
            setActive(link.link);
          }}
        >
          {link.label}
        </Link>
      );
    }
  });
}

function AppendSearchResult(search, setSdata) {
  const newArray = search["drasat-aljdwies"].map((item) => ({
    link: `/studie/${item.id}/${encodeURIComponent(item.title)}`,
    title: item.title,
    description: htmlToString(item.content),
    new: false,
  }));
  setSdata(newArray);
}
