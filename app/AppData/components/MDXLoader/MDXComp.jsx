"use client"
import { getMdx } from "@/app/AppData/http/mdxfatcher";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import MDXLoader from "./MDXLoader";


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
        {mdxData && <MDXRemote {...mdxData} lazy />}  
    </>
  )
}

