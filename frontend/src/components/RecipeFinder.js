import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Loading from "./Loading";
import "./RecipeFinder.css"; // Assuming this includes your CSS

const RecipeFinder = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [healthLabel, setHealthLabel] = useState("vegetarian");
    const [isLoading, setIsLoading] = useState(false);

    const YOUR_APP_ID = "0f4ce4f6";
    const YOUR_APP_KEY = "b24d17009f68464b4101694f129c61bd";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

    const getRecipeInfo = async () => {
        setIsLoading(true);
        try {
            let result = await axios.get(url);
            setRecipes(result.data.hits);
            console.log(result.data.hits);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipeInfo();
    };

    return (
        <>
            <div className="register">
                <Navbar message="Recipe Finder" />
                <div className="container">
                    <form className="form-container" onSubmit={onSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Type the Ingredient"
                                autoComplete="off"
                                className="form-control"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                             required />
                        </div>
                        <div className="input-group">
                            <select
                                className="form-select"
                                onChange={(e) => setHealthLabel(e.target.value)}
                            >
                                <option value="">Select Health Label</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="paleo">Paleo</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-btn">
                            Search
                        </button>
                    </form>
                    <div className="flex">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            recipes.map((recipe, index) => (
                                <Recipe key={index} recipe={recipe} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeFinder;