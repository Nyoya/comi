'use client';

import { login, signup, State } from "@/features/login/lib/action"
import {
  Button,
  chakra,
  Field,
  Fieldset,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useActionState } from 'react';

const Form = chakra('form');

export default function Login() {
  const initialState: State = { message: null, errors: {} }
  const [loginState, loginFormAction] = useActionState(login, initialState);
  const [signupState, signupFormAction] = useActionState(signup, initialState);

  // login, sign upのエラーメッセージを適切に出すための処理
  let state = loginState.message ? loginState : initialState;
  state = signupState.message ? signupState : state

  return (
    <Stack 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="dvh"
    >
      <Form width="full" maxW="11/12" md={{ maxWidth: "sm" }}>
        <Fieldset.Root size="lg" invalid={state.message ? true : false}>
          <Stack>
            <Fieldset.Legend
              fontWeight="bold"
              fontSize="xl"
            >
              comi
            </Fieldset.Legend>
            {
              state.message && (
                <Fieldset.ErrorText>
                  {state.message}
                </Fieldset.ErrorText>
              )
            }
          </Stack>

          <Fieldset.Content>
            <Field.Root invalid={state.errors?.email ? true : false}>
              <Field.Label>Email</Field.Label>
              <Input name="email" border="1px solid" borderColor={state.errors?.email && 'red.500'} />
              {
                state.errors?.email?.map((error, i) => (
                  <Fieldset.ErrorText key={i}>
                    {error}
                  </Fieldset.ErrorText>
                ))
              }
            </Field.Root>

            <Field.Root invalid={state.errors?.password ? true : false}>
              <Field.Label>Password</Field.Label>
              <Input name="password" type="password" border="1px solid" borderColor={state.errors?.password && 'red.500'} />
              {
                state.errors?.password?.map((error, i) => (
                  <Fieldset.ErrorText key={i}>
                    {error}
                  </Fieldset.ErrorText>
                ))
              }
            </Field.Root>
          </Fieldset.Content>

          <HStack justifyContent="flex-end">
            <Button formAction={loginFormAction} type="submit" alignSelf="flex-end" backgroundColor="#D89323" color="white" paddingX="4" marginTop="6">
              Log in
            </Button>
            <Button formAction={signupFormAction} type="submit" alignSelf="flex-end" backgroundColor="#D89323" color="white" paddingX="4" marginTop="6">
              Sign Up
            </Button>
          </HStack>
        </Fieldset.Root>
      </Form>
    </Stack>
  )
}