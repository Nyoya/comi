'use client'

import { Button } from '@chakra-ui/react';
import { createClient } from "@/lib/supabase/client";
import { toaster } from "@/components/ui/toaster"
import { redirect } from 'next/navigation';

export default function LogoutButton() {
  const supabase = createClient();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if(error) return toaster.create({ title: 'ログアウトに失敗しました。', type: 'error'})

    redirect('/login')
  }

  return <Button onClick={signOut}>Logout</Button>
}