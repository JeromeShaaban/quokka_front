import Card from './Card';


export default function Recipe(){

    const recipes = [
        {
           
            title:'Tarte flambée saumon ',
            image:'https://cdn.pixabay.com/photo/2018/05/11/18/07/tarte-flambee-3391213_960_720.jpg',
            ingredients:'1Pâte à Flammekueche(ou à défaut une pâte à pizza), 200g Fromage blanc 0%, 5cuil. à soupe Crème fraîche, 200g Oignons émincés, 150g Saumon fumé, poivre du moulin ',
            steps1:' 1. Couper le saumon en lamelles.',
            steps2:'2. Dans un bol, mélanger le fromage blanc, la crème fraiche et le poivre.',
            steps3:'2. Dans un bol, mélanger le fromage blanc, la crème fraiche et le poivre.'
        },
        {
            
            title:'Salade grec',
            image:'https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            ingredients:"200g Feta, 3 Tomates 2 Poivrons vert 2 échalotes100g Olives noires Huile d'olive 1 cuil. à café Vinaigre balsamique 1 cuil. à café Herbes de provence(mélange du commerce)",
            steps:'faire ceci et faire cela'
        },
    ]

    return(
        <div>
            <h1>blablabla</h1>
            <div>
        {recipes.map((recipe) => {
            return(
            <Card {...recipe}/>
        )})}
        </div>
        <p>gnagnagna</p>
        </div>
    )
}