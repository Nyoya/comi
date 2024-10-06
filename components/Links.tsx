'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Recipe, Taste, Setting } from "@/components/ui/icons";
import type { Dispatch, SetStateAction } from "react";

const Links = ({ props }: { props?: { setIsOpen: Dispatch<SetStateAction<boolean>> }}) => {
  const pathname = usePathname();
  const features = [
    {
      name: 'dashboard',
      href: '/dashboard',
      icon: <Home />
    },
    {
      name: 'recipes',
      href: '/dashboard/recipes',
      icon: <Recipe />
    },
    {
      name: 'tastes',
      href: '/dashboard/tastes',
      icon: <Taste />
    },
    {
      name: 'setting',
      href: 'dashboard/setting',
      icon: <Setting />
    }
  ]

  return (
    <>
      {features.map((feature) => {
        if(props) {
          return (
            <div key={feature.name}>
              <Link
                href={feature.href}
                className={`flex items-center gap-2 rounded px-4 py-2 text-sm font-medium hover:bg-[#E98025] hover:text-white ${pathname === feature.href ? 'bg-[#E98025] text-white' : '' }`}
                onClick={() => props.setIsOpen(false)}
              >
                {feature.icon}
                {feature.name}
              </Link>
            </div>
          );
        }

        return (
          <div key={feature.name}>
            <Link
              href={feature.href}
              className={`flex items-center gap-2 rounded px-4 py-2 text-sm font-medium hover:bg-[#E98025] hover:text-white ${pathname === feature.href ? 'bg-[#E98025] text-white' : '' }`}
            >
              {feature.icon}
              {feature.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Links;