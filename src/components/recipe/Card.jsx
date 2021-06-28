import styled from 'styled-components';

export const StyledImageRecipe = styled.img`
  height: 440px;
  width: 600px;
`;

export const StepsRecipe = styled.p`
 font-family:'Roboto', sans-serif;
`;


export const RecipeTitle = styled.h2`
 font-size:25px;
`;

export const IngredientsRecipe = styled.p`
 font-size:14px;
  width: 300px;
`;

export const CardRecipeContainer = styled.p`
 background-color: #535353;
  width: 700px;
`;



export default function Card({title, image, ingredients, steps1, steps2, steps3}){
return(
    <CardRecipeContainer>
    <RecipeTitle>{title}</RecipeTitle>
    <StyledImageRecipe src={image} alt={title} />
    <IngredientsRecipe>{ingredients}</IngredientsRecipe>
    <StepsRecipe>{steps1}</StepsRecipe>
    <StepsRecipe>{steps2}</StepsRecipe>
    <StepsRecipe>{steps3}</StepsRecipe>
    </CardRecipeContainer>
)
}