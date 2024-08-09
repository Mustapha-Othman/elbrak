import { Center, Container, Flex, Loader, Text } from "@mantine/core";
import classes from "./loaders.module.css";
const Loaders = () => {
  return (
    <>
      <Container fluid className={classes.conatiner + ` pb-32`}>
        <Container size="xl" className="min-h-[20rem] pt-40">
          <Center>
            <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Loader color="Color4" size="xl" />

              <Text
                fw={500}
                // c="Color3"
                ta="center"
                size="xl"
                variant="gradient"
                gradient={{ from: "Color4", to: "Color3", deg: 90 }}
              >
                جاري التحميل
              </Text>
            </Flex>
          </Center>
        </Container>
      </Container>
    </>
  );
};

export default Loaders;
