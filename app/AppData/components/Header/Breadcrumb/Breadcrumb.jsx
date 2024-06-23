"use client"
import { useEffect, useState } from 'react';
import styles from './Breadcrumb.module.css'
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
	const [pathLight, setPathLigh] = useState(false)
	const [pageTitle, setPageTitle] = useState()

	const pathName = usePathname();
	const isUpdate = pathName === "/privacy-policy"
	let NavPathName

	NavPathName = pathName.replace(/^\//, '').replace(/\//g, ' > ').replace(/-(\w)/g, ' $1')
	if(pathName === "/terms-conditions"){
		NavPathName = pathName.replace(/^\//, '').replace(/\//g, ' > ').replace(/-/g, ' & ')
	}
	if(pathName === "/cancellation-refund"){
		NavPathName = pageTitle
	}

	useEffect(() => {
		setPathLigh(pathName.match(/\//g).length > 1)
		setPageTitle(document.title)
	}, [])

	const homeTag = "Home >"

    return (
		<div className={styles.mainWrapepr}>
			<div className={styles.subWrapper}>
				<div className={`${styles.navigation} ${pathLight ? styles.navLight : ''}`}>{homeTag} <span className={`${styles.navSpan} ${pathLight ? styles.navSpanLigh : ''}`}>{NavPathName}</span></div>
				{ isUpdate ? <div className={styles.right}>The Beyond Oceans privacy policy was last updated on April 01, 2024</div> : null}
			</div>
		</div>
  )
}
