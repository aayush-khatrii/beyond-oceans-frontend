"use client"
import { Fragment } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.css'
import IconList from '../AppData/components/IconComponent/IconList'

export default function PackageBreadcrumb() {

    const paths = usePathname() 
    const pathNames = paths.split('/').filter( path => path )

  return (
    <div className={styles.breadcrumb}>
        <div className={styles.breadWrap}>
            <div className={styles.left}>
                <Link href="/">Home</Link>
                <IconList Icon="BreadIcon" />
                {
                    pathNames.map((link, index) => {
                        //below line check that forth portion and if the index is at 3(4 th position) then dont make loop
                        // this is to avoid package uuid to render into the breadcrumb
                        if (index === pathNames.length - 1) return null;

                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemLink = link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

                        // below code check pathNames index position is 3rd or not if the index is at 2(3rd position) then the
                        // href contain 3 and 4 both so that slug contain the package id and if any one click on the slug that 
                        // redirect to the main package
                        if (index === pathNames.length - 2){
                            href = `/${pathNames.slice(0, index + 1).join('/')}`
                        }

                        return(
                            <Fragment key={index}>
                                <Link href={href}>{itemLink}</Link>
                                {pathNames.length !== index + 1 && <IconList Icon="BreadIcon" />}
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
