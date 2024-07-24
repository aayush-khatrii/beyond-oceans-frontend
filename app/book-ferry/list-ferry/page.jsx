"use client"

import { Suspense } from "react"
import SuspanceCont from "./suspanceCont"


export default function page() {
    return (
        <Suspense>
            <SuspanceCont />
        </Suspense>
  )
}
