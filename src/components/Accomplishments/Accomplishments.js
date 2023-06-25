import React from 'react';
import Slider from 'react-slick'
import './Accomplishments.css';
import missionBg from '../../assets/missionpageBg.svg'
import homecard2 from '../../assets/homecard2.png'
import { Outlet, Link } from "react-router-dom";

import archika_training from '../../assets/archika_training.png'
import balavikasaKendra from '../../assets/balavikasaKendra.png'
import dharmaPracharam from '../../assets/d2d-dharma-pracharam.png'
import idolDonation from '../../assets/idol_donation.png'
import organicFarming from '../../assets/organic_farming.png'
import harathi from '../../assets/samohika_harathi.png'
import templeConstruction from '../../assets/temple_construction.png'
import YLTPTraining from '../../assets/YLTP_training.png'
import dummyImg from '../../assets/dummyImage.png'

export default function Accomplishments() {
    
    const sliderSettings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      initialSlide: 1,
       responsive: [
        {
        breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };
    
  return (
    <div>
      {/* Section 1 */}
      <div className='accPageSection1'>
        <img src={missionBg} className='accPageBg' />
        <div className='accPageHeading'>Our Accomplishments</div>
      </div>
    
    {/* Section 2 */}
    <div className='accPageSection2'>
        <div className='accPageSectionHeading'>Current Projects</div>
        <div className='accPageSectionContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ulabore et dolore 
          magna aliqua. Ut enim ad minim</div>
        <div className='accPageSection2Container'>
            <div className='accPageSection2Card'>
                <div className='accPageSection2CardHeading'>Under Samarasata Sewa Foundation (SSF) Banner</div>
                <ol className='accPageSection2CardContent'>
                    <a href='#'><li>Construction of temples  in Sc/St/fisherman villages</li></a>
                    <a href='#'><li>Running balaviksa kendras in temples(traditonal and cultural education)</li></a>
                    <a href='#'><li>Samohika Arathi in temples on fullmoon days</li></a>
                    <a href='#'><li>Maintaining Demography</li></a>
                    <a href='#'><li>Archaka sikshana(temple priest Training)</li></a>
                    <a href='#'><li>Door-door campaigning about dharma</li></a>
                    <a href='#'><li>Door-door Stickering</li></a>
                </ol>
                <button className='accPageBtn'>Read More</button>
            </div>
            <div className='accPageSection2Card'>
                <div className='accPageSection2CardHeading'>Under Back To The Roots (BTTR) Banner</div>
                <ol className='accPageSection2CardContent'>
                    <a href='#'><li>Youth Leadership Training Program (YLTP)</li></a>
                    <a href='#'><li>Tuition center in newly constructed temples.</li></a>
                    <a href='#'><li>Supporting higher education of deserving village children and children of our  dharma pracharaks.(30 students)</li></a>
                    <a href='#'><li>Training farmers on zero budget natural farming (Organic Farming)</li></a>
                    <a href='#'><li>Donation of vigrahams in weaker section of the society</li></a>
                    <a href='#'><li>Skills training in collaboration with SSRDP</li></a>
                    <a href='#'><li>Adopt a village Program.</li></a>
                </ol>
                <button className='accPageBtn'>Read More</button>
            </div>
        </div>
    </div>

    {/* Section 3 */}

    <div className='accPageSection3'>
        <div className='accPageSectionHeading'>Key Accomplishments in the Past</div>
        <div className='accPageSectionContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ulabore et dolore 
          magna aliqua. Ut enim ad minim</div>
          <div>
            <Slider {...sliderSettings}>
                <div className='slider_card' >
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 1 </div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
                <div className='slider_card'>
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 2</div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
                <div className='slider_card'>
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 3</div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
                <div className='slider_card'>
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 4</div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
                <div className='slider_card'>
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 5</div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
                <div className='slider_card'>
                     <img className='slider_card_img' src={homecard2} alt="Donations at work"></img>
                     <div className='slider_card_title'>Temples 6</div>
                     <div className='slider_card_description'>Build temples in villages</div>
                     <button className='slider_button'>Read More</button>
                </div>
            </Slider>
          </div>
    </div>

    {/* Section 4 */}

    <div className='accPageSection4'>
        <div className='accPageSection4Header'>Under Samarasata Sewa Foundation (SSF) Banner</div>
        <div className='accPageSection4Heading'>1. Construction of temples  in Sc/St/fisherman villages</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            <b>Title:</b> Revitalizing Communities through Sacred Spaces/Empowering Communities through 500 New Temples<br />
            The state of S.C. in India has undertaken a remarkable initiative to empower marginalized communities by constructing
            500 new temples in S.C., S.T., and fishermen villages. These temples symbolize social integration, cultural 
            celebration, and religious harmony. They provide dedicated spaces for worship, communal gatherings, and cultural 
            activities, fostering community unity and progress. The initiative showcases the state's commitment to inclusivity, 
            recognizing the cultural heritage and contributions of underrepresented communities.
            </div>
            <div className='accPageImage'><img src={templeConstruction} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>2. Running balaviksa kendras in temples(traditonal and cultural education)</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={balavikasaKendra} className='missionPageImages'/></div>
            <div className='accPageContent'>
                <b>Title: </b> Nurturing Traditional and Cultural Education/Balaviksa Kendras Enriching Traditional and Cultural Education<br />
                The establishment of Balaviksa Kendras within traditional temples is a remarkable initiative aimed at preserving 
                and promoting cultural education. These centers impart knowledge about ancient traditions and arts to the younger
                generation, ensuring the transmission of our cultural heritage. By integrating education within sacred spaces, 
                the project fosters respect for traditions, provides immersive learning experiences, and encourages the development 
                of skills and talents. It promotes collaboration between generations, preserving traditional art forms and 
                instilling a sense of pride in our cultural heritage.
            </div>
        </div>
        <div className='accPageSection4Heading'>3. Samohika Arathi in temples on fullmoon days</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
              <b>Title:</b>Enhancing Spiritual Bonding through Samohika Arathi on Full Moon Days<br />
              The project aims to promote Samohika Arathi, a collective ritual of offering prayers and lighting lamps in temples 
              on full moon days. It seeks to foster community engagement and spiritual connection by organizing monthly events 
              across different regions. The synchronized lighting of lamps symbolizes the dispelling of darkness and the 
              illumination of knowledge. The project aims to deepen individuals' connection with their faith, spirituality, and 
              the temple as a sacred space through regular participation in Samohika Arathi.
            </div>
            <div className='accPageImage'><img src={harathi} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>4. Maintaining Demography</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
                <b>Title: </b>Maintaining Demographic Equilibrium for Sustainable Communities<br />
                The "Maintaining Demography" project addresses population decline and demographic imbalances through strategies
                 and interventions. It focuses on promoting family-friendly policies, enhancing healthcare, supporting working 
                 parents, and providing affordable housing. Education and awareness campaigns are utilized to shift societal 
                 attitudes and emphasize the importance of balanced demography and the benefits of diverse and inclusive societies. 
                 The project aims to ensure sustainable development and vitality in the target region or community.
            </div>
        </div>

        <div className='accPageSection4Heading'>5. Archaka sikshana(temple priest Training)</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
              <b>Title:</b>Archaka Sikshana for Traditional Excellence<br />
              The "Archaka Sikshana" project provides comprehensive training and education for aspiring temple priests, focusing 
              on enhancing their knowledge, skills, and professionalism. The structured program covers religious scriptures, 
              rituals, customs, and philosophical aspects, along with essential skills such as communication and temple 
              management. The project aims to produce well-rounded archakas who can perform religious duties, engage with the 
              community, and contribute to the welfare of the temple. Inclusivity and cultural sensitivity are prioritized, 
              respecting the diverse religious practices within the community.
            </div>
            <div className='accPageImage'><img src={archika_training} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>6. Door-door campaigning about dharma</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dharmaPracharam} className='missionPageImages'/></div>
            <div className='accPageContent'>
                <b>Title: </b>Transforming Lives through Dharma Outreach at Homes<br />
                The project conducts a door-to-door campaign to raise awareness and promote understanding of Dharma within 
                communities. Trained volunteers visit households, engaging in meaningful conversations, addressing questions, 
                and sharing insights about Dharma's principles and relevance. The project encourages dialogue, respects 
                residents' perspectives, and aims to clarify misconceptions. Success will be measured through engagement levels 
                and positive impact on residents' perception of Dharma, with regular feedback and assessments for improvement.
            </div>
        </div>
        <div className='accPageSection4Heading'>7. Door-door Stickering</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
                <b>Title: </b>Enriching Cultural Understanding through the Campaign.<br />
                A door-to-door campaign has been launched to celebrate tribal history, tradition, and culture. Brochures with 
                compelling stories, visuals, and historical facts are distributed, along with stickers featuring tribal deities. 
                The campaign aims to increase knowledge, foster pride, and preserve tribal heritage. It improves cultural 
                awareness, challenges misconceptions, and promotes acceptance in society.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
    </div>

    {/* Section 5 */}
    <div className='accPageSection4'>
        <div className='accPageSection4Header'>Under Back To The Roots (BTTR) Banner</div>
        <div className='accPageSection4Heading'>1. Youth Leadership Training Program (YLTP)</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
                Eight youth participated in a 9-day Youth Leadership Training Program in Vizag, focusing on leadership, 
                team-building, discipline, time management, and responsibility. The program facilitated personal growth and 
                development, equipping the participants with essential skills for success in various areas of life. 
                They gained confidence and emerged as capable leaders, ready to make a positive impact in their communities.
            </div>
            <div className='accPageImage'><img src={YLTPTraining} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>2. Tuition center in newly constructed temples.</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
                Tuition centers integrated within newly constructed temples offer additional academic support and a 
                harmonious learning environment for students. Qualified tutors provide personalized attention, addressing 
                academic challenges and promoting holistic development. The integration of values-based teachings and community 
                engagement enhances the educational experience within temple premises, bridging education and spirituality.
            </div>
        </div>
        <div className='accPageSection4Heading'>3. Supporting higher education of deserving village children and children of our  dharma pracharaks.(30 students)</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            The scholarship program supports both average and merit students, with a focus on deserving village children and 
            children of dharma pracharaks. It offers financial assistance and guidance for various academic paths, empowering 
            students to pursue their passions and succeed in their chosen fields. The program also emphasizes supporting school 
            students, promoting gender equality, and ensuring access to education for all. Its goal is to provide resources for 
            students to complete their degrees, secure job opportunities, and build successful careers.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>4. Training farmers on zero budget natural farming(Organic Farming)</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={organicFarming} className='missionPageImages'/></div>
            <div className='accPageContent'>
                The Zero Budget Chemical Free Farming Workshops, also known as Rishi Krishi, train and empower farmers in the 
                practice of organic farming. Through practical training sessions, farmers learn about natural inputs, soil health,
                pest management, and water conservation. These workshops promote sustainable agriculture, protect the environment,
                and provide healthier food choices. As a result, more farmers are transitioning to chemical-free farming methods,
                leading to a resilient and sustainable agricultural sector.
            </div>
        </div>

        <div className='accPageSection4Heading'>5. Donation of vigrahams in weaker section of the society</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
                The donation of vigrahams, or idols, to the weaker sections of society is a noble initiative that brings 
                spiritual solace and uplifts the lives of economically disadvantaged individuals. These donations foster 
                devotion, provide a source of faith and hope, and promote unity and cultural traditions within the community. 
                This act of philanthropy inspires compassion and encourages others to make a positive difference in the lives 
                of those in need.
            </div>
            <div className='accPageImage'><img src={idolDonation} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>6. Skills training in collaboration with SSRDP</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
                Skills training in collaboration with SSRDP (Sri Sri Rural Development Program) empowers individuals in rural 
                areas by providing them with essential skills for personal and professional growth. The program focuses on 
                specific needs, tailors training modules accordingly, and covers a wide range of vocational skills. By enhancing 
                employability and fostering entrepreneurship, the program contributes to rural development and creates a 
                multiplier effect of progress within communities.
            </div>
        </div>
        <div className='accPageSection4Heading'>7. Adopt a village Program.</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
                The "Adopt a Village" initiative aims to transform the lives of individuals in underprivileged rural communities 
                by addressing socio-economic challenges and uplifting living standards. It encompasses various interventions 
                such as education, healthcare, infrastructure, livelihood opportunities, and social empowerment. The program 
                focuses on the specific needs of the village, tailors interventions accordingly, and aims to create sustainable 
                and inclusive growth. Education and healthcare are key areas of emphasis to provide access to quality education 
                and improve overall well-being.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
    </div>

    {/* Section 6 */}
    <div className='accPageSection4'>
        <div className='accPageSection4Header'>Key Accomplishments in the Past</div>
        <div className='accPageSection4Heading'>1. Ayurveda Medical Camps and their Impact on Health/Ayurveda Medical Camp Benefits 25 Families:</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            An Ayurveda medical camp was conducted, bringing valuable healthcare services to a community in need. This camp 
            served as a platform for promoting the principles of Ayurveda and providing holistic healthcare solutions to 
            individuals and families. Through this initiative, 25 families had the opportunity to receive medical consultations, 
            diagnosis, and treatment from qualified Ayurvedic practitioners. The camp aimed to address various health concerns 
            and provide personalized care based on the principles of Ayurveda, focusing on natural remedies, lifestyle 
            modifications, and preventive measures.    
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>2. Development of a Village Mineral Water Plant:</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
            In an effort to provide clean and safe drinking water to the entire village, a mineral water plant with a capacity 
            of 1,000 liters per hour is set to be constructed in the first half of the year. This initiative aims to ensure that 
            the villagers have access to high-quality drinking water at affordable costs, where the nominal charges collected 
            will be utilized to cover the maintenance expenses of the plant. Geology tests were conducted on January 10th, 2018, 
            to determine the most suitable location for drilling a bore well, which will serve as the water source for the plant. 
            After careful analysis and planning, the construction work is scheduled to commence in the fourth week of February. 
            Once operational, the mineral water plant will significantly improve the villagers' access to safe drinking water, 
            promoting better health and well-being throughout the community.
            </div>
        </div>
        <div className='accPageSection4Heading'>3. Building Soaking Pits in Telangana Villages</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            Inkudu Gunthalu, also known as Soaking Pits, are playing a crucial role in preserving water levels in villages.The 
            Telangana State Government has undertaken a commendable initiative to construct 140 soak pits alongside the 
            installation of 259 toilets, with thousands more in the pipeline, all funded by the government. This project aims to 
            address the pressing issue of water conservation and promote sustainable practices in rural areas.the establishment 
            of Inkudu Gunthalu (Soaking Pits) in villages, supported by government funding and the active involvement of BTTR 
            youth leader trainees, is a commendable initiative by the Telangana State Government. This project aims to preserve 
            water levels, promote sustainable water management practices, and address the challenges of water scarcity. Through 
            the combined efforts of various stakeholders, this project has the potential to create a positive impact on water 
            conservation, environmental sustainability, and the overall well-being of the communities involved.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>4. Volunteers Aid Hudhud Cyclone Victims</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
            In the wake of the destructive Hudhud Cyclone, a display of remarkable solidarity and compassion was witnessed as 
            300 dedicated volunteers selflessly rallied together to provide assistance and support to the affected communities. 
            Recognizing the urgency of the situation, these compassionate individuals pooled their resources and contributed a 
            substantial amount of Rs.15 lakhs to aid in the relief efforts. With a primary focus on addressing the basic needs 
            of the people and their cattle, the volunteers worked tirelessly to ensure that food was provided to those who had 
            been displaced or stranded as a result of the cyclone. Their unwavering dedication ensured that both individuals and 
            animals had access to nourishing meals, offering solace and sustenance during this challenging period. Through their 
            selfless actions, these volunteers exemplified the true spirit of humanity, demonstrating the power of collective 
            action in times of adversity.
            </div>
        </div>

        <div className='accPageSection4Heading'>5. Village Voices Heard: BTTR Team Engages with Astanagurthy Residents during Padayatra</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            The Back to the Roots (BTTR) team, along with Sudhakar Garu, Chaitanya Kishore Garu, and a group of foreigners, 
            visited Astanagurthy village. They conducted a padayatra and engaged with the villagers to understand their needs. 
            The event witnessed a historic gathering of 500 people from diverse backgrounds. The villagers highlighted the 
            importance of improving farming, health and hygiene, youth development, access to clean drinking water, and 
            value-based education. The BTTR team aims to address these areas and transform Astanagurthy into a model village 
            with the support of village leaders and the community.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>6. Improving Educational Standards through 200 Evening Schools</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
            The establishment of 200 evening schools was a significant initiative aimed at improving the educational standards of 
            children from economically disadvantaged backgrounds and instilling the values of Samskara in them. These schools 
            provided additional learning opportunities to bridge the educational gap among marginalized children, helping them 
            catch up and excel academically. Moreover, the curriculum incorporated the values of Samskara, fostering character 
            development and social responsibility. The evening schools created a nurturing environment with smaller class sizes, 
            personalized instruction, and community collaborations. The initiative aimed to empower children, break the cycle of 
            poverty, and contribute to the overall development of society.
            </div>
        </div>
        <div className='accPageSection4Heading'>7. Empowering Education: 8,000 Children Thriving in Evening Schools</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            The evening schools have had a profound impact on the lives of approximately 8,000 children who attend them daily, 
            bringing happiness to their parents and caregivers. These schools have filled educational gaps and provided a safe 
            and supportive environment for children from marginalized communities. The high attendance reflects the commitment 
            of parents to ensure their children have access to quality education and better opportunities. The children's 
            enthusiasm to learn demonstrates their determination to overcome their circumstances and invest in their futures. 
            The positive influence of their education extends beyond themselves, contributing to the progress and well-being of 
            their communities.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
        <div className='accPageSection4Heading'>8. Empowering 5000 Individuals through Aawasa Bhajan Sikshana</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
            <div className='accPageContent'>
            The successful accomplishment of Aawasa Bhajan Sikshana for 5000 people represents a significant achievement in 
            promoting spiritual and cultural enrichment. The program provided a residential setting for participants to immerse 
            themselves in devotional training and bhajan singing. Through rigorous training and holistic experiences, participants
             gained musical skills, deepened their spiritual connection, and developed a profound understanding of devotional 
             practices. The impact of the program likely extended beyond the training itself, positively influencing the lives 
             of participants and enabling them to share the joy and teachings of bhajan singing with their communities.
            </div>
        </div>
        <div className='accPageSection4Heading'>9. Embracing Ancestral Faith</div>
        <div className='accPageSectionContentContainer'>
            <div className='accPageContent'>
            The organization SSF has implemented a vigorous Ghar Wapasi Programme, resulting in 7,000 individuals returning to 
            the Hindu fold. The initiative aims to reintegrate individuals who had previously embraced religions other than 
            Hinduism back into the Hindu community. The success of the programme reflects a strong commitment to preserving 
            Hindu traditions and values. Through guidance and support, individuals willingly choose to reconnect with their 
            ancestral roots and embrace their Hindu identity. The Ghar Wapasi Programme contributes to the preservation of Hindu 
            culture, revitalizes traditions, and fosters unity within the community. It is essential to ensure that the programme
            is implemented respectfully and inclusively, with individuals making their decisions freely and without coercion.
            </div>
            <div className='accPageImage'><img src={dummyImg} className='missionPageImages'/></div>
        </div>
    </div>




    </div>
  )
}
