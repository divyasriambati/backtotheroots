import { useState,react } from "react";

import './Gallery.css'

import image from '../../assets/homecard1.png'
import image1 from '../../assets/homecard1.png'
import image2 from '../../assets/homecard1.png'
import image3 from '../../assets/homecard1.png'
import image4 from '../../assets/homecard1.png'

export default function Gallery() {
    const tab1 = [image]
    const tab2 = [image,image1]
    const tab3 = [image,image2,image3]
    const tab4 = [image,image2,image3,image4]
    const tab5 = [image,image1,image2,image3,image4]
    const [tabData, setTabData] = useState({
      title: "Accomplishment",
      images: tab5
    });
    const tabsData = [
      {
        tabnumbers: 1,
        title: "Education",
        images: tab1
      },
      {
        tabnumbers: 2,
        title: "Temples",
        images: tab2
      },
      {
        tabnumbers: 3,
        title: "Accomplishments",
        images: tab3
      },
      {
        tabnumbers: 4,
        title: "Happy souls",
        images: tab4
      },
      {
        tabnumbers: 5,
        title: "Accomplishment",
        images: tab5
      }
    ];
    return (
      <div className="Gallery_section">
        <div  className="Gallery_tab_headings">
          {tabsData.map((Tab, id) => {
              const isActive = Tab.title === tabData.title;
              return (
                  <div className={`Gallery_tab_title ${isActive ? 'active' : ''}`} onClick={() => { setTabData({ title: Tab.title, images: Tab.images }); }}>
                      {Tab.title}
                  </div>
              );
          })}
        </div>
        <div className="Gallery_tab_content">
          {tabData.images.map((Image, id) => {
            return (
              <div className="Gallery_tab_element">
              <img src={Image} alt="Gallery" className="Gallery_tab_image"></img>
              </div>
            );
          })}
        </div>
      </div>
    );
}
