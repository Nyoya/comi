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
import { MAIN_COLOR } from '@/styles/theme';

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
        shadow='xs'
        backgroundColor={MAIN_COLOR}
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
            <Button variant="outline" size="md">
              <Image src={'/menu.svg'} alt='menu' width={20} height={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent backgroundColor={MAIN_COLOR}>
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
          paddingY='3'
          paddingX='2'
          display='grid'
          gridTemplateColumns='1fr'
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
