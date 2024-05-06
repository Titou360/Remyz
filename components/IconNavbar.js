"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {FacebookIcon, LinkedinIcon} from './Icons'

const IconNavbar = () => {

  return (
    <nav className="flex items-center justify-center flex-nowrap">
      <motion.a
        tabIndex="0"
        aria-label="Join me on Facebook"
        href="https://www.facebook.com/remyzauxverts/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 ml-3"
      >
        <FacebookIcon />
      </motion.a>

      {/* <motion.a
        tabIndex="0"
        aria-label="Join me on Linkedin"
        href="#"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 ml-3"
      >
        <LinkedinIcon />
      </motion.a> */}
    </nav>
  );
};

export default IconNavbar
