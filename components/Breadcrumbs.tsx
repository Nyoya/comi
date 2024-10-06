"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";

const Breadcrumbs = () => {
  let path = '';
  const pathname = usePathname();
  const splitPathName = pathname.split("/").filter(name => { if(name) return name });

  return (
    <div className="flex px-2">
      <Breadcrumb>
        <BreadcrumbList>
          {splitPathName.map((name, i) => {
            path += `/${name}`;
            return (
              name && (
                <span className="flex gap-2" key={name}>
                  <BreadcrumbItem>
                    <BreadcrumbLink className={`text-base ${pathname === path ? 'text-black' : ''}`} href={path}>{name}</BreadcrumbLink>
                  </BreadcrumbItem>
                  {splitPathName[i + 1] && <span className="text-base">/</span>}
                </span>
              )
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
  </div>
  )
}

export default Breadcrumbs