import React from "react"
import { Images } from "../../assets"
import "./styles.scss"

const About = () => {
   return (
      <div className="container_about" id="about">
         <div className="container_about_content">
            <div className="container_about_content_wrapper">
               <div className="md:5/12 lg:w-5/12">
                  <img src={Images.images_one} alt="image" loading="lazy" className="md:h-[80vh] rounded-lg" />
               </div>
               <div className="md:7/12 lg:w-6/12">
                  <h1 className="container_about_content_wrapper_text-about">About</h1>
                  <h2 className="container_about_content_wrapper_name ">Le Thi Thuy Tien</h2>
                  <p className="container_about_content_wrapper_description" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                  <p className="container_about_content_wrapper_description"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
               </div>
            </div>
         </div>
      </div >
   )
}
export default About