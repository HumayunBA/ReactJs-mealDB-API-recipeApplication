import { useEffect, useState } from "react";
import Axios from "axios";
import RecipeCard from "./Components/RecipeCard";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [listOfRecipes, setListOfRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getRecipes = async() => {
    try {
      const response = await Axios.get(url + searchWord);
      setListOfRecipes(response.data.meals);
      console.log(response.data.meals)
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {

    getRecipes();

  }, []);
  
  
  if (isLoading) return "Loading...";
  if (error) return error;


  const searchQuerry = (event) => {
    if(event.key==="Enter")

    event.preventDefault();

    getRecipes();

  }


  return (

    <div style={{display: 'flex', flexDirection: 'column', displayContent: 'justified', alignItems: 'center', marginLeft: '90px'}}>
     
     <div style={{display: 'flex', flexDirection: 'row'}}>
      <TextField
      label="Search"
      onChange= {(event)=> setSearchWord(event.target.value)}
      onKeyPress={searchQuerry}
      />
      <Button variant="outlined" onClick={searchQuerry}>Search</Button>
      </div>

      <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
        {listOfRecipes.map((idMeal) => {
          return (
            <RecipeCard
              name={idMeal.strMeal}
              mealimg={idMeal.strMealThumb}
              area={idMeal.strArea}
              sourceText={idMeal.strSource}
              
            />
          );
        })}
      </div>
    </div>

  );
  
}

export default App;