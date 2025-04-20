'use server';

import { z } from 'zod'
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export type State = {
  message?: string | null;
  errors?: {
    email?: string[];
    password?: string[];
  };
  input?: {
    email?: string;
    password: string;
  }
}

const Credentials = z.object({
  email: z
    .string({
      required_error: "Emailは必須です。",
      invalid_type_error: "Emailには文字列を使用してください。",
    })
    .email({
      message: "Emailアドレスは正しく入力してください。"
    }),
  password: z
    .string({
      required_error: "Passwordは必須です。",
      invalid_type_error: "Passwordには文字列を使用してください。",
    })
    .min(8, {
      message: "Passwordは8文字以上で指定してください。"
    })
})

export async function login(state: State, formData: FormData) {
  const supabase = await createClient()

  const inputEmail = formData.get('email') as string;
  const inputPassword = formData.get('password') as string;

  const result = Credentials.safeParse({
    email: inputEmail,
    password: inputPassword
  })

  if (!result.success) {
    return {
      message: '入力内容を確認してください。',
      errors: result.error.flatten().fieldErrors,
      input: {
        email: inputEmail,
        password: inputPassword
      }
    } as State;
  }

  const { error } = await supabase.auth.signInWithPassword(result.data);

  if(error) {
    return { 
      message: 'ログインに失敗しました。',
      input: {
        email: result.data.email,
        password: result.data.password
      }
    } as State;
  }
  
  redirect('/roasts')
}

export async function signup(tate: State, formData: FormData) {
  const supabase = await createClient()

  const inputEmail = formData.get('email') as string;
  const inputPassword = formData.get('password') as string;

  const result = Credentials.safeParse({
    email: inputEmail,
    password: inputPassword
  })

  if (!result.success) {
    return {
      message: '入力内容を確認してください。',
      errors: result.error.flatten().fieldErrors,
      input: {
        email: inputEmail,
        password: inputPassword
      }
    } as State;
  }

  const { error } = await supabase.auth.signUp(result.data)

  if(error) {
    return { 
      message: 'アカウントの作成に失敗しました。',
      input: {
        email: result.data.email,
        password: result.data.password
      }
    } as State;
  }

  redirect('/login')
}