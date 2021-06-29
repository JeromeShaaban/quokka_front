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
  margin: 30px auto;
`;

export const MemberPhoto = styled.img `
max-width: 380px;
`

export const MemberName = styled.h1 `
  font-size: 3rem;
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