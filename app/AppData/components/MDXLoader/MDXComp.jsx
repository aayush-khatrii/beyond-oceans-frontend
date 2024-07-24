"use client"
import { getMdx } from "@/app/AppData/http/mdxfatcher";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import MDXLoader from "./MDXLoader";
import styles from './MDXComponent.module.css'


export default function MDXComp({source}) {
  const [mdxData, setMdxData] = useState()


    useEffect(() =>{
        getMdx(source).then(({data}) => {
            serialize(data).then((rawdata) =>{
            setMdxData(rawdata)
            })
        })
    },[])


  return (
    <>
        {!mdxData && <MDXLoader />}
        {mdxData && <div className={styles.mainMDX}><MDXRemote {...mdxData} lazy /></div>}  
    </>
  )
}

