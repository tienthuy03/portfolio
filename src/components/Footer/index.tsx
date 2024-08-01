import React from "react"
import './styles.scss'

const Footer = () => {
   return (
      <footer className="footer footer-center  w-full p-4 text-gray-800 border-t-2">
         <div className="text-center">
            <span className="font-playfair">“ <span className="text-primary font-playfair font-bold">Discipline</span> will take you where it is <span className="font-playfair font-bold text-primary">Motivation</span> not realized”</span>
            <p className="font-playfair">

               Copyright © 2024 -
               <a className="font-semibold font-playfair" href="mailto:1204thuytien@gmail.com"
               >ThuyTien</a
               >
               . All Right Reversed.
            </p>
         </div>
      </footer>
   )
}

export default Footer