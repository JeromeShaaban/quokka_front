import styled from 'styled-components';
import React from 'react';


export const CardMemberContainer = styled.div `
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  background-color: rgba(255, 255, 255, .05);
  margin: 30px auto;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  -webkit-box-shadow: 0px 4px 7px 2px rgba(0,0,0,0.09); 
  box-shadow: 0px 4px 7px 2px rgba(0,0,0,0.09);
`;

export const MemberPhoto = styled.img `
max-width: 380px;
`

export const MemberName = styled.h1 `
  font-size: 2rem;
  color: white;
`;



const MemberCard = ({photo, firstname}) => {
  return (
    <CardMemberContainer>
      <MemberPhoto src={photo} />
      <MemberName>{firstname}</MemberName>
    </CardMemberContainer>
  );
};

export default MemberCard;