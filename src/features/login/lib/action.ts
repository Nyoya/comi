'use server';

import { z } from 'zod'
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export type State = {
  message?: string | null;
  errors?: {
    email?: string[];
    password?: string[];
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

  const result = Credentials.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  })

  if (!result.success) {
    return {
      message: '入力内容を確認してください。',
      errors: result.error.flatten().fieldErrors,
    } as State;
  }

  const { error } = await supabase.auth.signInWithPassword(result.data);

  if(error) return { message: 'ログインに失敗しました。' } as State;
  
  redirect('/roasts')
}

export async function signup(tate: State, formData: FormData) {
  const supabase = await createClient()

  const result = Credentials.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  })

  if (!result.success) {
    return {
      message: '入力内容を確認してください。',
      errors: result.error.flatten().fieldErrors,
    } as State;
  }

  const { error } = await supabase.auth.signUp(result.data)

  if(error) return { message: 'アカウントの作成に失敗しました。' } as State;

  redirect('/login')
}