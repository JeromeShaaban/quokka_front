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
      firstname: 'Violaine'
    },
  
    {
      photo: quokka4,
      firstname: 'Pierre'
    },
  
    {
      photo: quokka3,
      firstname: 'Sophie'
    },
  
    {
      photo: quokka2,
      firstname: 'Jérôme'
    },
  
    {
      photo: quokka1,
      firstname: 'Marie-Anne'
    },
  ]
  return (
    <>
        <div className="CardDeck" 
        style={{
          display: "flex", 
          flexFlow: "row wrap", 
          width: "100%", 
          justifyContent: "space-evenly", 
          alignItems: "center"
        }}>
          {members.map((member) => {
            return(
              <Quokkanim rotation={5} timing={150}>
                <MemberCard key={member.firstname} photo={member.photo} firstname={member.firstname}/>
              </Quokkanim>
            )
          })
          }
        </div>
    </>
  );
}