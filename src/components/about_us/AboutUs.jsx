import React from "react";
import MemberCard from "./MemberCard";
import Quokkanim from "./Quokkanim";
import quokka1 from "../../assets/quokka_01.png";
import quokka2 from "../../assets/quokka_02.png";
import quokka3 from "../../assets/quokka_03.png";
import quokka4 from "../../assets/quokka_04.png";
import quokka5 from "../../assets/quokka_05.png";

export default function AboutUs() {
  const members = [
    {
      photo: quokka5,
      firstname: 'Violaine',
      github: 'https://github.com/vio9',
      linkedin: 'https://www.linkedin.com/in/violaine-ernotte/',
    },
  
    {
      photo: quokka4,
      firstname: 'Pierre',
      github: 'https://github.com/pierrehouot',
      linkedin: 'https://www.linkedin.com/in/pierre-houot/',
    },
  
    {
      photo: quokka3,
      firstname: 'Sophie',
      github: 'https://github.com/SophieTopart',
      linkedin: 'https://www.linkedin.com/in/sophie-topart-59a0b893/',
    },
  
    {
      photo: quokka2,
      firstname: 'Jérôme',
      github: 'https://github.com/JeromeShaaban',
      linkedin: 'https://www.linkedin.com/in/jeromeshaaban/',
    },
  
    {
      photo: quokka1,
      firstname: 'Marie-Anne',
      github: 'https://github.com/Sseven-lab',
      linkedin: 'https://www.linkedin.com/in/marie-anne-duvieu-088695133/',
    },
  ]
  return (
    <>
        <div className="CardDeck" 
        style={{
          display: "flex", 
          flexFlow: "row wrap", 
          justifyContent: "space-evenly", 
          alignItems: "center",
          marginTop: "3rem",
          marginBottom: "1rem",
        }}>
          {members.map((member) => {
            return(
              <Quokkanim rotation={5} timing={150}>
                <MemberCard key={member.firstname} photo={member.photo} firstname={member.firstname} github={member.github} linkedin={member.linkedin}/>
              </Quokkanim>
            )
          })
          }
        </div>
    </>
  );
}