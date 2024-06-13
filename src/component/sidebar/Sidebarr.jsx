import React, { useState } from 'react'
import './sidebar.scss'
import Link from './link/Link'
import ToggleButton from './ToggleButton/ToggleButton'
import { delay, motion, px } from 'framer-motion'
function Sidebarr() {
 const [open, setOpen]=useState(false)

    const variants={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20
            },
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.1,
                type:"spring",
               stiffness:400,
               dumping:40,            
            }
        },
    }
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
          <Link />
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}


export default Sidebarr