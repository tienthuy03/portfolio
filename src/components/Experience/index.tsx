import React from "react"
import './styles.scss'

const Experience = () => {
   return (
      <>
         <h1 className="experience_h1">Experience</h1>
         <div className="container_experience" id="experience">
            <div className="container-experience-card">
               {[1, 2, 3, 4].map(() => {
                  return (
                     <div className="space-y-6 border-l-2 border-dashed">
                        <div className="container_experience_card_item">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute _top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primary">
                              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                           </svg>
                           <div className="container_experience_card_item_content">
                              <h4 className="container_experience_card_item_content_h4">Frontend Development - (04/04/2023-09/10/2024)</h4>
                              {[1, 2, 3, 4, 5].map(() => {
                                 return (
                                    <p className="container_experience_card_item_content_h4_p"> - MaeceMaecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                                 )
                              })}
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </>

   )
}
export default Experience