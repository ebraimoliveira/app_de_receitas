import React from 'react';
import PropTypes from 'prop-types';

function RecipeComponent({ recipeInProgress }) {
  const ingredientList = Object.entries(recipeInProgress)
    .filter((item) => item[0].includes('strIngredient') && item[1] !== '')
    .filter((item) => item[1] !== null)
    .filter((item) => item[1] !== undefined)
    .map((ingredient) => ingredient[1]);
  const measureList = Object.entries(recipeInProgress)
    .filter((item) => item[0].includes('strMeasure'))
    .filter((item) => item[1] !== ' ')
    .filter((item) => item[1] !== null)
    .filter((item) => item[1] !== undefined)
    .map((measure) => measure[1]);
  return (
    <>
      <h1>Meal In progress</h1>
      <p data-testid="recipe-title">
        {recipeInProgress.strMeal || recipeInProgress.strDrink}
      </p>
      <img
        width="100px"
        data-testid="recipe-photo"
        src={ recipeInProgress.strMealThumb || recipeInProgress.strDrinkThumb }
        alt={ recipeInProgress.strMeal || recipeInProgress.strDrink }
      />
      <button
        type="button"
        data-testid="share-btn"
      >
        share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        favorite
      </button>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        finish
      </button>
      <p data-testid="recipe-category">
        {recipeInProgress.strCategory}
      </p>
      <p data-testid="instructions">
        {recipeInProgress.strInstructions}
      </p>
      {
        ingredientList?.map(
          (ingredient, index) => (
            <div
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${measureList[index] || ''} ${ingredient}`}

              <input
                type="checkbox"
              />
            </div>
          ),
        )
      }

    </>
  );
}

RecipeComponent.propTypes = {
  recipeInProgress: PropTypes.arrayOf(),
}.isRequired;

export default RecipeComponent;
