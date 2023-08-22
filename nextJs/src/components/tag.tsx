"use client"
import Script from "next/script"

interface Props{
    docId: string
    script: string
}
const Tag = ({docId,script}:Props) => {

    return (
        <div id={docId}>
            <Script id={`scrId_${docId}`}>{script}</Script>
        </div>
        
    )
}

export default Tag