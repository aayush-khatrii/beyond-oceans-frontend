'use client'
import PackageBreadcrumb from './PackageBreadcrumb'
import { usePathname } from "next/navigation";

export default function layout({children}) {
  const pathName = usePathname();
  const nonBreadcrumbPages = ["/packages/checkout"]

  return (
        <div>
            { !nonBreadcrumbPages.includes(pathName) ? <PackageBreadcrumb /> : null }
            {children}
        </div>
  )
}
