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
import { BASE_COLOR } from '@/styles/theme';

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
        backgroundColor={BASE_COLOR}
        borderBottomWidth='1px'
        zIndex='10'
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
          <DrawerContent backgroundColor={BASE_COLOR}>
            <DrawerHeader>
              <DrawerTitle>menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
