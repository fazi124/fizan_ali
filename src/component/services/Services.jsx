import React from 'react'
import './services.scss'
import { useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'

const variants={
    initial:{
        x: -500,
        y:100,
        opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1,
        straggerChildren:0.1,
      }
    }
}

function Services() {
    const ref=useRef()

    const isInView=useInView(ref,{margin:"-100px"})

  return (
    <motion.div className='services'
     variants={variants} 
     initial="initial"
    animate={ "animate"}
    ref={ref}
      >
        <motion.div className='textContainer'>
         <p>I focus on helping your brand grew
            <br /> and move forward 
            </p>
            <hr />
        </motion.div>
        <motion.div className='tittleContainer' variants={variants}>
            <div className='tittle'>
                <img src='people.webp' alt=''/>
                <div className='text'>
                <h1> 
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b>
                    ideas
                </h1> 
                <div className='textbtn'>
                <h1 >  
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b>
                    Business.
                </h1>
                <button>WHAT WE DO?</button>
                </div>
                </div>
            </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
            <motion.div className='box' whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reprehenderit 
                     molestias, dolor amet blanditiis pariatur nemo 
                     sit ab cupiditate accusamus id commodi
                     eveniet sequi animi maiores tempore velit obcaecati.
                     </p>

                <button>Go</button>
            </motion.div>
            <motion.div className='box' whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reprehenderit 
                     molestias, dolor amet blanditiis pariatur nemo 
                     sit ab cupiditate accusamus id commodi
                     eveniet sequi animi maiores tempore velit obcaecati.
                     </p>

                <button >Go</button>
            </motion.div>
        
            <motion.div className='box' whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reprehenderit 
                     molestias, dolor amet blanditiis pariatur nemo 
                     sit ab cupiditate accusamus id commodi
                     eveniet sequi animi maiores tempore velit obcaecati.
                     </p>

                <button>Go</button>
            </motion.div>
            <motion.div className='box' whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reprehenderit 
                     molestias, dolor amet blanditiis pariatur nemo 
                     sit ab cupiditate accusamus id commodi
                     eveniet sequi animi maiores tempore velit obcaecati.
                     </p>

                <button >Go</button>
            </motion.div>
            </motion.div>
    </motion.div>
  )
}

export default Services