import React from "react"
import { Svgs } from "../../../assets"
import './styles.scss'

const CardSkills = () => {
   return (
      <div className="card_container_skills">
         <div className="card_container_skills_item  pattern-dots-md">
            <div className="card_container_skills_item_content"  >
               <div className="card_container_skills_item_content_img">
                  <img src={Svgs.react} />
               </div>
               <div className="card_container_skills_item_content_description">
                  <h2 className="card_container_skills_item_content_description_name ">React native</h2>
                  <p className="card_container_skills_item_content_description_detail ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default CardSkills