'use client'
import { TypeAnimation } from "react-type-animation"
export default function Header() {
    return(
        <>

            <h1 className="text-4xl font-bold mb-4">

            <TypeAnimation
        sequence={[
            "Hi, I'm Amritanshu Singh 👋",
            2000,
            "",
            500,
        ]}
        speed={60}
        repeat={Infinity}
        />
        </h1>
        </>
    )
}