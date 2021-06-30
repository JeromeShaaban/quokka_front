import styled from 'styled-components';
import Card from './Card';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { FormControl, Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const RecipeWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
  flex-wrap:wrap;
`;


export const TitleRecipePage = styled.h1`
margin:0;
color:#fff;
padding:50px;
margin-left: auto;
margin-right: auto;
width: 16em;
font-size: 4rem;

`;



export const Form = styled.form`
margin:0;
background-color:#ffffff1c;
padding:50px;
margin-left: auto;
margin-right: auto;
width: 16em;
font-size: 4rem;
border-radius:5px;
color:#ffffff;
`;

export const InputLabel = styled.label`
color:#fff;
font-size:1rem;
`;

export default function Recipe(){

        const [recipes, setRecipes] = useState([])
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(true)
        const [datas, setDatas] = useState({  title:'Greek salad', image:'', ingredients:"", steps1:'', steps2:'', steps3:"",steps4:"",
        steps5:"", isfavorite:'false', name: '', price: ''})

        useEffect(() => {
            const getRecipes= async () => {
              try {
                const recipes = await axios.get('https://twenty-five.herokuapp.com/recipes')
                setRecipes(recipes.data)
              } catch(err) {
                setError(err)
              } finally {
                setLoading(false)
              }
            }
            getRecipes()
          }, [])
        
          if(loading) return <div>loading...</div>

          const handleSubmit = async (e) => {
            e.preventDefault()
        
            try {
              setLoading(true)
              await axios.post(
                'https://twenty-five.herokuapp.com/recipes',
                {...datas}
              )
              toast.success('La recette à bien été rajouté !')
              } catch(err) {
                console.log(err);
                toast.error(`${err.message}`)
              } finally {
                setLoading(false)
              }
          }


          const onChangeDatas = (e) => {
            setDatas({
              ...datas,
              [e.target.name] : e.target.value
            })
          }

          return(
              <>
            <div>
    
                <TitleRecipePage>A healthy mind in a healthy body</TitleRecipePage>
                <RecipeWrapper>
            {recipes.map((recipe) => {
                return(
                <Card {...recipe}/>
                )
            }
         )
        }
                </RecipeWrapper>
        </div>
            <Form onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="my-input">Title</InputLabel>
              <Input
                name="title"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Image</InputLabel>
              <Input
                name="image"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Ingredients</InputLabel>
              <Input
                name="ingredients"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">steps1</InputLabel>
              <Input
                name="steps1"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">steps2</InputLabel>
              <Input
                name="steps2"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">steps3</InputLabel>
              <Input
                name="steps3"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">steps4</InputLabel>
              <Input
                name="steps4"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">steps5</InputLabel>
              <Input
                name="steps5"
                onChange={onChangeDatas}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <div>
            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            </div>
            </Form>




            
        </>

        )   


        


       
/*

    const recipes = [
        {
           
            title:'Salmon pie',
            image:'https://cdn.pixabay.com/photo/2020/03/03/16/18/tarte-flambee-4899104_960_720.jpg',
            ingredients:'1 flamenkuche paste(or a pizza paste),200g cottage cheese 0%, 5tbsp. fresh cream, 200g sliced ​​onions, 150g smoked salmon, freshly ground pepper ',
            steps1:" 1. 🔪 🐟 Cut the salmon into strips",
            steps2:'2. 🥣 In a bowl, combine the cottage cheese, sour cream and pepper.',
            steps3:'3. 🫓 Spread the dough on a baking sheet. Spread the cream mixture on top and distribute the onions and the slices of salmon.',
            steps4: '4. ✨ Bake at 220 ° C for 15 minutes',
            isfavorite:'false'
        },
        {
            
            title:'Greek salad',
            image:'https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            ingredients:"200g Feta, 3 Tomatoes, 2 Green peppers, 2 shallots, 100g black olives, Olive oil 1 tsp. teaspoon Balsamic vinegar, 1 tsp. 1 teaspoon of Provencal herbs (store-bought mix)",
            steps1:' 1. 🔪 🍅 Cut the tomatoes into small cubes and put them in a salad bowl.',
            steps2:'2. 🥒 🫑 🫒 Add the cucumber,green pepper and olives.',
            steps3:"3. 🧅 Mix with half of the onion and diced feta",
            steps4:"4. 🍋 Add the lemon zest and juice, season with oil and oregano, salt and pepper.",
            steps5:"5. 🥗 Mix gently and serve.",
            isfavorite:'false'
        },
        {
            
            title:'Vegetarian burger',
            image:'https://cdn.pixabay.com/photo/2017/08/04/11/35/burger-2579902_960_720.jpg',
            ingredients:"4 salad leaves, 4 slices toastinette, hamburger buns, tomatoes slices, pickles, mustard, corn (200 g), peas (200 g), spices (salt, pepper, paprika, cumin, curry ...) one egg",
            steps1:' 1. 🌽 🥚 🧅 Blend the peas, corn, onion (cut into 4) and egg in a blender.',
            steps2:"2. 🫓 🧂 🌶️ Then add the spices, flour and breadcrumbs to the mixture until you have a thick dough (so you can form a crepe",
            steps3:"3. 🍳 Form crepes in a hot pan with a little oil. Leave to cook for about 15 minutes over medium heat. Before removing them from the heat, add the cheese slices so that they melt a little. ",
            steps4:"4. 🍅 🫓 🥬 You can then compose your burgers with bread, salads, tomatoes slices, sauces and pancake. ",
            steps5:"5. 🍔 It's ready! Bon appétit !",
            isfavorite:'false'
        },
    ]

    return(
        <div>

            <TitleRecipePage>A healthy mind in a healthy body</TitleRecipePage>
            <RecipeWrapper>
        {recipes.map((recipe) => {
            return(
            <Card {...recipe}/>
            )
        }
     )
    }
            </RecipeWrapper>
    </div>

    ) */
}