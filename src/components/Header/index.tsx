import IonIcon from "@reacticons/ionicons";
import { Drawer } from 'antd';
import React, { useState } from "react";
import { DataMenu } from "../../constant/DataMenu";
import "./styles.scss";

const Header = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className="header_portfolio">
         <div className="header_portfolio_content">
            <div>ThuyTien</div>
            <div className="header_portfolio_content_menu">
               {DataMenu.map((item) => (
                  <a
                     key={item.title}
                     href={item.href}
                  >
                     {item.title}
                  </a>
               ))}
            </div>
            <button
               onClick={() => setOpen(true)}
               className="header_portfolio_content_iconMenu">
               <IonIcon name="menu" />
            </button>
         </div>
         <Drawer
            width={300}
            title="Menu"
            placement={'left'}
            closable={false}
            onClose={() => setOpen(false)}
            open={open}>
            <div className="header_portfolio_menu_drawer" >
               {DataMenu.map((item) => (
                  <a
                     onClick={() => setOpen(false)}
                     key={item.title}
                     href={item.href}
                  >
                     {item.title}
                  </a>
               ))}
            </div>
         </Drawer>
      </div>
   )
}

export default Header