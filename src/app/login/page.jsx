import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./Login.module.css";

export default function Login() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        اهلا وسهلا!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        ليس لديك حساب لدينا?{" "}
        <Anchor size="sm" component="button">
          انشاء حساب جديد
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="الايميل" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="كلمه المرور"
          placeholder="كلمه المرور"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="تذكرني" />
          <Anchor component="button" size="sm">
            نسيت كلمه المرور?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          تسجيل دخول
        </Button>
      </Paper>
    </Container>
  );
}
