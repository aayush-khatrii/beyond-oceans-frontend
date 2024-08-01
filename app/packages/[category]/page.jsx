import { notFound } from 'next/navigation'
import styles from './Category.module.css'
import PackageBreadcrumb from '../PackageBreadcrumb'

export default function page({params}) {
    if(params.category !== "family-packages"){
        notFound()
    }


    return (
        <div>
            <PackageBreadcrumb />
            Hello
        </div>
    )
}
