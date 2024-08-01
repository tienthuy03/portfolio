import React from "react"
import './styles.scss'
import { Images, Svgs } from "../../assets"
import IonIcon from "@reacticons/ionicons"

const Home = () => {
   return (
      <section className="container_home" id="home">
         <div className="container_home_bg">
            <img className="container_home_bg_image object-cover object-center" src={Images.bg_header} alt="img_portfolio_thuytien" />
         </div>
         <div className="container_home_content">
            <div className="container_home_content_wrapper">
               <div className="container_home_content_wrapper_introduce">
                  <span className="container_home_content_wrapper_introduce_portfolio">Portfolio</span>
                  <h1 className="container_home_content_wrapper_introduce_name">Hi, <br /><span className="container_home_content_wrapper_introduce_name_thuytien"> I'm Thuy Tien</span> <br />Mobile Developer </h1>
                  <div className="container_home_content_wrapper_introduce_contact">
                     <button className="container_home_content_wrapper_introduce_contact_btn">
                        <IonIcon name="mail" />
                        <span className="container_home_content_wrapper_introduce_contact_btn_text">1204thuytien@gmail.com</span>
                     </button>
                     <button className="container_home_content_wrapper_introduce_contact_btn">
                        <IonIcon name="call" />
                        <span className="container_home_content_wrapper_introduce_contact_btn_text">0971761090</span>
                     </button>
                  </div>
               </div>
               <div className="container_home_content_wrapper_social">
                  <IonIcon name="logo-linkedin" className="container_home_content_wrapper_social_icon" />
                  <IonIcon name="logo-github" className="container_home_content_wrapper_social_icon" />
                  <IonIcon name="logo-facebook" className="container_home_content_wrapper_social_icon" />
                  <IonIcon name="logo-instagram" className="container_home_content_wrapper_social_icon" />
               </div>
            </div>
         </div>
      </section>


   )
}
export default Home