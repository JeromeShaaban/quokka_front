import styled from 'styled-components';
import React from 'react';
import { Icon } from 'semantic-ui-react';

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
  font-size: 2.5rem;
  color: white;
`;

export const LinkedIn = styled.div `
  color: white;
`;



const MemberCard = ({photo, firstname, github, linkedin}) => {
  return (
    <CardMemberContainer>
      <a href={github} target="_blank" rel="noreferrer" title="Go to my GitHub !"><MemberPhoto src={photo} /></a>
      <MemberName>{firstname}</MemberName>
      <a href={linkedin} target="_blank" rel="noreferrer" title="Here is my Linkedin !"><LinkedIn>
        <Icon name="linkedin" size="big"/>
      </LinkedIn></a>
    </CardMemberContainer>
  );
};

export default MemberCard;