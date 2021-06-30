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


        


       

}