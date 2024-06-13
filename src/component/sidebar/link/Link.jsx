import React from 'react'
import { motion } from 'framer-motion'
const variants={
    open:{
        transition:{
            staggerChidren:0.1,
        },
    },
    closed:{
        transition:{
          staggerChidren:0.05,
          staggerDirection:-1,
        },
    },
}
const itemvariants={
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
    },
}
function Link() {
        const items=[
            "Homepage",
            "Services",
            "portfolio",
            "Contact",
            "About",
        ]
  return (
    <motion.div className='link' variants={variants}>
        {items.map((all=>{
            return(
                <motion.a href={`#${all}`} key={all} variants={itemvariants}
                 whileHover={{scale:1.1}} whileTop={{scale:0.95}}>
            {all}</motion.a>
            )
        
    }))}</motion.div>
  );
};

export default Link