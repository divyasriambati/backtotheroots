import { useState,react } from "react";
import './Gallery.css'
import BTTR_celeb1 from '../../assets/celebraty_gallery/BTTR_celeb1.jpg'
import BTTR_celeb2 from '../../assets/celebraty_gallery/BTTR_celeb2.jpg'
import BTTR_celeb3 from '../../assets/celebraty_gallery/BTTR_celeb3.JPG'
import BTTR_celeb4 from '../../assets/celebraty_gallery/BTTR_celeb4.JPG'
import BTTR_celeb5 from '../../assets/celebraty_gallery/BTTR_celeb5.JPG'
import BTTR_celeb6 from '../../assets/celebraty_gallery/BTTR_celeb6.JPG'
import BTTR_celeb7 from '../../assets/celebraty_gallery/BTTR_celeb7.jpg'
import BTTR_celeb8 from '../../assets/celebraty_gallery/BTTR_celeb8.jpg'
import BTTR_celeb9 from '../../assets/celebraty_gallery/BTTR_celeb9.JPG'
import BTTR_celeb10 from '../../assets/celebraty_gallery/BTTR_celeb10.jpeg'
import BTTR_celeb11 from '../../assets/celebraty_gallery/BTTR_celeb11.JPG'
import BTTR_celeb12 from '../../assets/celebraty_gallery/BTTR_celeb12.JPG'
import BTTR_celeb13 from '../../assets/celebraty_gallery/BTTR_celeb13.JPG'
import BTTR_celeb14 from '../../assets/celebraty_gallery/BTTR_celeb14.JPG'
import BTTR_celeb15 from '../../assets/celebraty_gallery/BTTR_celeb15.JPG'
import BTTR_celeb16 from '../../assets/celebraty_gallery/BTTR_celeb16.JPG'
import BTTR_celeb17 from '../../assets/celebraty_gallery/BTTR_celeb17.jpg'
import BTTR_celeb18 from '../../assets/celebraty_gallery/BTTR_celeb18.jpg'
import BTTR_celeb19 from '../../assets/celebraty_gallery/BTTR_celeb19.jpg'
import BTTR_celeb20 from '../../assets/celebraty_gallery/BTTR_celeb20.jpg'
import BTTR_celeb21 from '../../assets/celebraty_gallery/BTTR_celeb21.jpeg'
import BTTR_celeb22 from '../../assets/celebraty_gallery/BTTR_celeb22.JPG'
import BTTR_celeb23 from '../../assets/celebraty_gallery/BTTR_celeb23.JPG'
import BTTR_celeb24 from '../../assets/celebraty_gallery/BTTR_celeb24.JPG'
import BTTR_celeb25 from '../../assets/celebraty_gallery/BTTR_celeb25.JPG'
import BTTR_celeb26 from '../../assets/celebraty_gallery/BTTR_celeb26.JPG'

import BTTR_SA1 from '../../assets/service_activities/BTTR_SA1.JPG'
import BTTR_SA2 from '../../assets/service_activities/BTTR_SA2.JPG'
import BTTR_SA3 from '../../assets/service_activities/BTTR_SA3.JPG'
import BTTR_SA4 from '../../assets/service_activities/BTTR_SA4.JPG'
import BTTR_SA5 from '../../assets/service_activities/BTTR_SA5.jpeg'
import BTTR_SA6 from '../../assets/service_activities/BTTR_SA6.jpeg'
import BTTR_SA7 from '../../assets/service_activities/BTTR_SA7.jpeg'
import BTTR_SA8 from '../../assets/service_activities/BTTR_SA8.JPG'
import BTTR_SA9 from '../../assets/service_activities/BTTR_SA9.JPG'
import BTTR_SA10 from '../../assets/service_activities/BTTR_SA10.JPG'
import BTTR_SA11 from '../../assets/service_activities/BTTR_SA11.JPG'
import BTTR_SA12 from '../../assets/service_activities/BTTR_SA12.JPG'
import BTTR_SA13 from '../../assets/service_activities/BTTR_SA13.JPG'
import BTTR_SA14 from '../../assets/service_activities/BTTR_SA14.JPG'

import BTTR_TC1 from '../../assets/temple_construction/BTTR_TC1.JPG'
import BTTR_TC2 from '../../assets/temple_construction/BTTR_TC2.JPG'
import BTTR_TC3 from '../../assets/temple_construction/BTTR_TC3.JPG'
import BTTR_TC4 from '../../assets/temple_construction/BTTR_TC4.JPG'

import BTTR_YLTP1 from '../../assets/YLTP/BTTR_YLTP1.jpg'
import BTTR_YLTP2 from '../../assets/YLTP/BTTR_YLTP2.JPG'
import BTTR_YLTP3 from '../../assets/YLTP/BTTR_YLTP3.JPG'
import BTTR_YLTP4 from '../../assets/YLTP/BTTR_YLTP4.JPG'
import BTTR_YLTP5 from '../../assets/YLTP/BTTR_YLTP5.JPG'
import BTTR_YLTP6 from '../../assets/YLTP/BTTR_YLTP6.JPG'
import BTTR_YLTP7 from '../../assets/YLTP/BTTR_YLTP7.JPG'
import BTTR_YLTP8 from '../../assets/YLTP/BTTR_YLTP8.JPG'
import BTTR_YLTP9 from '../../assets/YLTP/BTTR_YLTP9.JPG'
import BTTR_YLTP10 from '../../assets/YLTP/BTTR_YLTP10.JPG'

import BTTR_PY1 from '../../assets/padayatra/BTTR_PY1.JPG'
import BTTR_PY2 from '../../assets/padayatra/BTTR_PY2.JPG'
import padayatra from '../../assets/padayatra.png'


import missionBg from '../../assets/missionpageBg.svg'

export default function Gallery() {
    const tab1 = [BTTR_celeb1,BTTR_celeb2,BTTR_celeb3,BTTR_celeb4,BTTR_celeb5,BTTR_celeb6,BTTR_celeb7,BTTR_celeb8,BTTR_celeb9,BTTR_celeb10,
                  BTTR_celeb11,BTTR_celeb12,BTTR_celeb13,BTTR_celeb14,BTTR_celeb15,BTTR_celeb16,BTTR_celeb17,BTTR_celeb18,BTTR_celeb19,BTTR_celeb20,
                  BTTR_celeb21,BTTR_celeb22,BTTR_celeb23,BTTR_celeb24,BTTR_celeb25,BTTR_celeb26]
    const tab2 = [BTTR_TC1,BTTR_TC2,BTTR_TC3,BTTR_TC4]
    const tab3 = [BTTR_PY1,BTTR_PY2,padayatra]
    const tab4 = [BTTR_YLTP1,BTTR_YLTP2,BTTR_YLTP3,BTTR_YLTP4,BTTR_YLTP5,BTTR_YLTP6,BTTR_YLTP7,BTTR_YLTP8,BTTR_YLTP9,BTTR_YLTP10]
    const tab5 = [BTTR_SA1,BTTR_SA2,BTTR_SA3,BTTR_SA4,BTTR_SA5,BTTR_SA6,BTTR_SA7,BTTR_SA8,BTTR_SA9,BTTR_SA10,BTTR_SA11,BTTR_SA12,BTTR_SA13,BTTR_SA14]
    const [tabData, setTabData] = useState({
      title: "celebrities",
      images: tab1
    });
    const tabsData = [
      {
        tabnumbers: 1,
        title: "celebrities",
        images: tab1
      },
      {
        tabnumbers: 2,
        title: "Temples Construction",
        images: tab2
      },
      {
        tabnumbers: 3,
        title: "Padayatra",
        images: tab3
      },
      {
        tabnumbers: 4,
        title: "YLTP",
        images: tab4
      },
      {
        tabnumbers: 5,
        title: "Service Activities",
        images: tab5
      }
    ];
    return (
      <div className="Gallery_section">
        {/* Section 1 */}
      <div className='collabPageSection1'>
        <img src={missionBg} className='collabPageBg' />
        <div className='collabPageHeading'>Our Gallery</div>
      </div>
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
