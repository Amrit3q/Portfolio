'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Node.js",
];

export default function LinetTwo(){
    const [index, setIndex]  = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prev)=> (prev+1)% techStack.length);
        }, 2500);
        return ()=> clearInterval(interval)
    },[])
    return(
        <>
            <div className="text-lg text-gray-600 mb-8">
                <span className="relative inline-flex h-[1.4em] min-w-[150px] overflow-hidden align-middle">
                Software Engineer building web apps with 
                </span>
                <span>  </span>
                <span className="relative inline-flex h-[1.4em] min-w-[150px] overflow-hidden align-middle">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 whitespace-nowrap"
          >
            {techStack[index]}
          </motion.span>
        </AnimatePresence>
      </span>
            </div>
        </>
    )
}