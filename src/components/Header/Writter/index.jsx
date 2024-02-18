import { useEffect, useState } from "react"

export function Writter(){
    const text = "Hello There, i'm Victor Palha!"
    const [writter, setWritter] = useState('')

    function write(text, counter = 0){
        if(counter < text.length){
            setWritter(text.slice(0, counter + 1))

            setTimeout(() => write(text, counter + 1), 100)
        }
    }

    useEffect(()=>{
        write(text)
    }, [])
    return(
        <p>{writter}</p>
    )
}