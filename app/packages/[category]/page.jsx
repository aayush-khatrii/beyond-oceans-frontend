import { notFound } from 'next/navigation'
import styles from './Category.module.css'

export default function page({params}) {
    if(params.category !== "family-packages"){
        notFound()
    }


    return (
        <div>
            Hello
        </div>
    )
}
