'use client'

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
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

  return (
    <Dialog.Root size="xs">
      <Dialog.Trigger asChild>
        <Button>
          Logout
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner paddingX="2">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontWeight="bold">ログアウトしますか？</Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button size="sm" border="1px solid" borderColor="gray.300" padding="2" fontWeight="medium">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={signOut} size="sm" backgroundColor="#33362F" color="white" padding="2" fontWeight="medium">Logout</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}