import styles from './ActivityHighlights.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp';

export default function ActivityHighlights({activityId}) {

    const highlightMdxURLAWS = `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${activityId}/activity_highlight.mdx`
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.title}>
                <span>Activity Highlights</span>
            </div>
            <div className={styles.mainContent}>
                <MDXComp source={highlightMdxURLAWS} />
            </div>
        </div>
    )
}
