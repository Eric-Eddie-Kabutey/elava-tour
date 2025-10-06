'use client';
import { HeadCircuit, WhatsappLogo } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function FloatingButton() {
    const icons = [<Phone key="phone" />, <HeadCircuit key="ai" size={30} />, <WhatsappLogo size={35} key="whatsapp" />, <Mail key="mail" />];
    const [currentIcon, setCurrentIcon] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) return; 
        const interval = setInterval(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length);
        }, 2000);
        console.log("Hello floating")
        return () => clearInterval(interval);
    }, [open]);
  return (
    <div className='fixed bottom-16  z-[50]'
        style={{ right: "50px", bottom: "50px", }}
    >
        <AnimatePresence>
            {open && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="w-[300px] rale mb-3 bg-white text-black rounded-lg shadow-lg p-4 relative"
            >
                <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white rotate-45"></div>

                <div className="space-y-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="p-2 bg-yellow-500 rounded-full"
                            style={{ backgroundColor: "#eab308" }}
                        >
                        <HeadCircuit className="text-white" size={25} />
                        </div>
                        <span className="font-extralight text-[16px]">Talk to Enyo AI.</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="p-2 bg-blue-500 rounded-full"
                            style={{ backgroundColor: "#3b82f6" }}
                        >
                        <Phone className="text-white" size={25} />
                        </div>
                        <span className="font-extralight text-[16px]">Call Us Now.</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className=" bg-[#1ebea5] rounded-full text-white">
                        <WhatsappLogo size={45}  color='#1ebea5'/>
                        </div>
                        <span className="font-extralight text-[16px]">Talk to us on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="p-2 bg-orange-500 rounded-full text-white"
                            style={{ backgroundColor: "#f97316" }}
                        >
                            <Mail className="text-white  " size={25} />
                        </div>
                        <span className="font-extralight text-[16px]">Send us An Email</span>
                    </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white z-[99]"
            style={{ backgroundColor: "#22c55e", width: "50px", height: "50px"}}
            onClick={() => setOpen(!open)}
        >
            <AnimatePresence mode="wait">
            <motion.div
                key={open ? "close" : currentIcon}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >
                {open ? <X size={28} /> : icons[currentIcon]}
            </motion.div>
            </AnimatePresence>
        </motion.button>
    </div>
  )
}

export default FloatingButton