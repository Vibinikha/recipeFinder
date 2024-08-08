import React from "react";
import "./Recipe.css"; // Assuming this includes your CSS

const Recipe = ({ recipe }) => {
    return (
        <div className="card card-style mt-4">
            <img src={recipe.recipe.image} alt="" className="card-img-top" />
            <div className="card-body">
                <p className="card-title">Name: {recipe.recipe.label}</p>
                <p className="card-text">
                    Type: <span>{recipe.recipe.mealType}</span>
                </p>
                <a
                    href={recipe.recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Read the Recipe
                </a>
            </div>
        </div>
    );
};

export default Recipe;