import { Button } from '@chakra-ui/react';
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

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className='w-full fixed top-0 py-1 px-3 flex justify-between items-center shadow bg-[#EADDD3]'>
        <h1 className='font-bold text-lg'>Comi</h1>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="md">
              <Image src={'/menu.svg'} alt='menu' width={20} height={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent backgroundColor={'#EADDD3'}>
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
      </header>
      <main className='p-2 pt-12'>{children}</main>
    </>
  );
}
