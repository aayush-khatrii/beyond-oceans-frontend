"use client"
import { useState } from 'react';
import styles from './Itinerary.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp';
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function Itinerary({ activityId, hightlighSrc }) {


    function awsUrlGen(mdxSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${activityId}/${mdxSrc}`
    }

    return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Activity Highlights</span>
        </div>
        <div className={styles.overviewContent}>
            {   
                (activityId && hightlighSrc) ?
                <MDXComp source={awsUrlGen(hightlighSrc)} />
                : <>Loading ...</>
            }
        </div>
    </div>
  )
}
