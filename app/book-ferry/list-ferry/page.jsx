"use client"

import { Suspense } from "react"
import SuspanceCont from "./SuspanceCont"


export default function page() {
    return (
        <Suspense>
            <SuspanceCont />
        </Suspense>
  )
}
