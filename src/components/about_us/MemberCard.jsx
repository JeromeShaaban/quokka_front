import styled from 'styled-components';
import React from 'react';
import icon from "../../assets/linkedin_icon.png"

export const CardMemberContainer = styled.div `
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 30px auto;
`;

export const MemberPhoto = styled.img `
max-width: 350px;
height: 300px;
`

export const MemberName = styled.h1 `
  font-size: 2rem;
  color: white;
`;

export const LinkedIn = styled.img `
  width: 20px;
  height: 20px;
  margin-top: 1rem;
`;



const MemberCard = ({photo, firstname, github, linkedin}) => {
  return (
    <CardMemberContainer>
      <a href={github} target="_blank" rel="noreferrer" title="Go see my GitHub !"><MemberPhoto src={photo} /></a>
      <MemberName>{firstname}</MemberName>
      <a href={linkedin} target="_blank" rel="noreferrer" title="Contact me on Linkedin !"><LinkedIn src={icon}/></a>
    </CardMemberContainer>
  );
};

export default MemberCard;