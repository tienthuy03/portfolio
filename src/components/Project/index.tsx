import React from "react"
import { Images } from "../../assets";
import IonIcon from "@reacticons/ionicons";
import "./styles.scss"
const Project = () => {
   return (
      <div className="container_project" id="project">
         <h1 className="container_project_h1 ">Project</h1>
         <div className="container_project_content">
            {[1, 2, 3, 4].map(() => {
               return (
                  <article
                     className="container_project_content_card group">
                     <div className="container_project_content_card_content group">
                        <img className="container_project_content_card_content_img"
                           src="https://i.pinimg.com/736x/6a/6b/29/6a6b29806662e0d61ce2c2fb7c1e0aca.jpg" />
                        <a className="container_project_content_card_content_watch"
                           href="https://www.tiktok.com/@_12.04.03/video/7393013270489173264?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                           watch the article
                           <IonIcon name="videocam-outline" className="container_project_content_card_content_watch_icon" />
                        </a>
                     </div>
                     <div className="container_project_content_card_desc">
                        <div className="container_project_content_card_desc_item ">
                           <div className="container_project_content_card_desc_item_img">
                              <img className="container_project_content_card_desc_item_img_background"
                                 src={Images.images_one}
                                 alt="" />
                           </div>
                           <div className="container_project_content_card_desc_information">
                              <div className="">
                                 <p className="container_project_content_card_desc_information_thuytien">ThuyTien12</p>
                                 <p className="container_project_content_card_desc_information_publish">Published on 19/03/2024</p>
                              </div>
                           </div>
                        </div>

                     </div>
                     <h3 className="container_project_content_card_h3">
                        <a href=""
                           className="container_project_content_card_h3_content">
                           Let's see my results. Thanks for your time
                        </a>
                     </h3>
                     <div>
                     </div>
                  </article>
               )
            })}
         </div>
      </div>
   )
}

export default Project