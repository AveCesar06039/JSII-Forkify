import View from './View.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';

  addHandlerRender(handler) {
    console.log('addHandlerRender ejecutado'); 
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
  _generateMarkup() {
    return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <p class="recipe__publisher">Published by: ${this._data.publisher}</p>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(ing => `<li class="recipe__ingredient">${ing.quantity} ${ing.unit} ${ing.description}</li>`).join('')}
        </ul>
      </div>
    `;
  }

}




export default new RecipeView();