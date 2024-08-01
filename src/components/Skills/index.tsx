import React from "react"
import CardSkills from "./CardSkills"
import "./styles.scss"

const Skills = () => {
   return (
      <section className="container_skill" id="skills">
         <div className="container_skill_content">
            <div className="container_skill_content_description">
               <h1 className="container_skill_content_description_title">Skills</h1>
               <p className="container_skill_content_description_detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
               <div className="container_skill_content_description_hr">
                  <div className="container_skill_content_description_hr_line"></div>
               </div>
            </div>
            <div className="container_skill_content_list">
               {[1, 2, 3].map(() => {
                  return (
                     <CardSkills />
                  )
               })}
            </div>
         </div>
      </section>

   )
}
export default Skills