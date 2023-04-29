import Link from "next/link"
import {AnimatePresence}from 'framer-motion'
import Home from '../Component/Home'
export default function index() {
   
  return (
   <AnimatePresence>
       <Home></Home>
   </AnimatePresence>
  )
}
