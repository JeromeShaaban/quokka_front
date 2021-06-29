import React from "react";
import MemberCard from "./MemberCard";

export default function AboutUs() {
  const { open } = useContext(MenuContext);
  const members = [
    {
      photo: '../../assets/quokka_5.png',
      firstname: 'Violaine'
    },
  
    {
      photo: '../../assets/quokka_4.png',
      firstname: 'Pierre'
    },
  
    {
      photo: '../../assets/quokka_3.png',
      firstname: 'Sophie'
    },
  
    {
      photo: '../../assets/quokka_2.png',
      firstname: 'Jérôme'
    },
  
    {
      photo: '../../assets/quokka_1.png',
      firstname: 'Marie-Anne'
    },
  ]
  return (
    <>
        <div className="CardDeck" 
        style={{
          display: "flex", 
          flexDirection: "row", 
          width: "100%", 
          justifyContent: "center", 
          alignItems: "center"
        }}>
          {members.map((member) => {
            return(
              <MemberCard key={member.firstname} photo={member.photo} firstname={member.firstname}/>
            )
          })
          }
        </div>
    </>
  );
}