import { Drawer, Menu, Loader } from "@mantine/core";
import classes from "./MinMenu.module.css";
import { useRouter } from "next/navigation";
import links from "../Header/links.json"; // Import the links data
import { useCate } from "../../libs/hooks/cats"; // Import the useCate hook
import Link from "next/link";
const MinMenu = ({ opened, toggle, data, isLoading }) => {
  const router = useRouter();

  // const query = {
  //   method: "GET",
  //   path: "tsnyf-drasat-aljdwies",
  //   query: {
  //     populate: "*",
  //   },
  // };
  // const { data, isLoading, error } = useCate(query);

  const items = MenuItems(router, isLoading, data, toggle);

  return (
    <Drawer
      opened={opened}
      onClose={toggle}
      position="bottom"
      className="z-[999999]"
      // offset={8}
      size="xs"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      withCloseButton={false}
    >
      {items}
    </Drawer>
  );
};

function MenuItems(router, isLoading, data, close) {
  return links.map((link) => {
    if (link.link == "/studies") {
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
              onClick={(event) => {
                event.preventDefault();
                close();
                router.push(`${link.link}`);
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
                  onClick={(event) => {
                    event.preventDefault();
                    close();
                    router.push(
                      `/studies/${cat.id}/${decodeURIComponent(
                        cat.attributes.title
                      )}`
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
          onClick={(event) => {
            event.preventDefault();
            close();
            router.push(`${link.link}`);
          }}
        >
          {link.label}
        </Link>
      );
    }
  });
}

export default MinMenu;
