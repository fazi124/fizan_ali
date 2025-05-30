import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';

function Test() {
    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i)=>({ 
           opacity: 1, 
          x:100,
        transition:{delay:i*0.3},
        }),
        hidden:{opacity:0},
    };

    const items = ['item1', 'item2', 'item3', 'item4'];

    return (
        <div className='course'>
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((all,i) => {
                    console.log({ all });
                    return <motion.li key={all} variants={variants} custom={i}>{all}</motion.li>;  
                })}
            </motion.ul>
        </div>
    );
}

export default Test;
