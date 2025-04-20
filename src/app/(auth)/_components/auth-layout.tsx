import { Box, Button, Heading } from '@chakra-ui/react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Image from 'next/image';
import LogoutButton from '@/features/login/_components/logout-button';
import { Toaster } from '@/components/ui/toaster';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box
        as='header'
        width='full'
        position='fixed'
        display='flex'
        top='0'
        paddingY='1'
        paddingX='3'
        justifyContent='space-between'
        alignItems='center'
        borderBottomWidth='1px'
        zIndex='10'
        backgroundColor="white"
      >
        <Heading
          as='h1'
          fontWeight='bold'
          fontSize='lg'
        >
          Comi
        </Heading>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button minWidth='20px' >
              <Image src={'/menu.svg'} alt='menu' width={20} height={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle fontWeight="bold">Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <LogoutButton />
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
      <Box
        as='main'
        paddingTop='12'
      >
        <Box
          padding='3'
          md={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {children}
        </Box>
        <Toaster />
      </Box>
    </>
  );
}
