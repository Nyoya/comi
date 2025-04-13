import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"

export default async function Login() {
  return (
    <Stack 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="dvh"
    >
      <Fieldset.Root size="lg" maxW="11/12" md={{ maxWidth: "sm" }}>
        <Stack>
          <Fieldset.Legend
            fontWeight="bold"
            fontSize="xl"
          >
            comi Login
          </Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input name="email" border="1px solid" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input name="password" type="password" border="1px solid" />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-end" backgroundColor="#D89323" color="white" paddingX="4" marginTop="6">
          Submit
        </Button>
      </Fieldset.Root>
    </Stack>
  )
}