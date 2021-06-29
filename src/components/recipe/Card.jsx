import styled from 'styled-components';
import {useState} from 'react';

export const StyledImageRecipe = styled.img`
  height: 340px;
  width: 500px;
`;

export const StepsRecipe = styled.p`
 text-align:justify;
 width:30rem;
 color:#fff;
`;


export const RecipeTitle = styled.h2`
 font-size:25px;
 color:#fff;
 padding:20px;
`;

export const IngredientsRecipe = styled.p`
font-size: 1.1rem;
padding: 5px;
text-align:justify;
color:#fff;
`;

export const CardRecipeContainer = styled.div`
background-color: #ffffff18;
  width: 500px;
  padding:40px;
  border-radius:5%;
  margin:40px;


h4{
    color:#ffffffea;
    font-size:1.3rem;
    padding:10px;
}

.isFavorite{
  width: 40px;
  height: 40px;
  background-image: url("https://image.flaticon.com/icons/png/512/833/833472.png");
  background-size: 100%;
  margin-top: 40px;
}

.notFavorite{
  width: 40px;
  height: 40px;
  background-image: url("https://image.flaticon.com/icons/png/512/833/833300.png");
  background-size: 100%;
  margin-top: 40px;
}
`;


export default function Card({title, image, ingredients, steps1, steps2, steps3, steps4, steps5}){
    const [favorite, setFavorite] = useState(false)

    const HandleClickFavorite = () =>{
        setFavorite(!favorite);

    }

    return(
    <CardRecipeContainer>
    <RecipeTitle>{title}</RecipeTitle>
    <StyledImageRecipe src={image} alt={title} />
    <h4>ingredients</h4>
    <IngredientsRecipe>{ingredients}</IngredientsRecipe>
    <h4>Steps: </h4>
    <StepsRecipe>{steps1}</StepsRecipe>
    <StepsRecipe>{steps2}</StepsRecipe>
    <StepsRecipe>{steps3}</StepsRecipe>
    <StepsRecipe>{steps4}</StepsRecipe>
    <StepsRecipe>{steps5}</StepsRecipe>
    <div id="favorite" value={favorite} onClick={HandleClickFavorite} className={favorite ? "isFavorite" : "notFavorite"}></div>
       </CardRecipeContainer>
)
}