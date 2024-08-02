import { notFound } from 'next/navigation'
import styles from './Category.module.css'
import PackageBreadcrumb from '../PackageBreadcrumb'

export default function page({params}) {

    const categorys = ["family-package", "honeymoon", "budget-tours", "best-sellers", "offbeat"]

    if(!categorys.includes(params.category)){
        notFound()
    }

    return (
        <div>
            <PackageBreadcrumb />
            Loading...
        </div>
    )
}
