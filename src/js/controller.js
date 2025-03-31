import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/PaginationView.js';


const controlRecipes = async function () {
  try {
    console.log("controlRecipes");
    const id = window.location.hash.slice(1);
    if (!id) return;

    console.log(id)
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    console.log('Receta cargada:', model.state.recipe);
    recipeView.render(model.state.recipe);
   
  } catch (err) {
    console.error('Error en controlRecipes:', err);
    recipeView.renderError();
  }
};

// const controlSearchResults = async function () {
//   try {
//     const query = searchView.getQuery();
//     if (!query) return;

//     resultsView.renderSpinner();

//     await model.loadSearchResults(query);
    
//     resultsView.render(model.state.search.results);
//   } catch (err) {
//     resultsView.renderError();
//   }
// };
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    
    resultsView.render(model.getSearchResultsPage(1));
    
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const init = function () {
  console.log("Starting ");
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();


// import '../sass/main.scss';
// import icons from '../img/icons.svg'

// const recipeContainer = document.querySelector('.recipe');
 
// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// async function showRecipe() {
//   try {

//       const id = window.location.hash.slice(1); // 🔍 Obtener el ID sin el #
//       if (!id) return; // 🚫 Si no hay ID, salir de la función
//       console.log("ID de la receta:", id);
//       renderSpinner(recipeContainer);
//       const resp = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");

      
//       const data = await resp.json();

     
//       console.log("Respuesta HTTP (resp):", resp);
//       console.log("Datos convertidos a JSON (data):", data);

      
//       let recipe = data.data.recipe;

//       recipe = {
//         id: recipe.id,
//         title: recipe.title,
//         publisher: recipe.publisher,
//         sourceUrl: recipe.source_url,
//         image: recipe.image_url,
//         servings: recipe.servings,
//         cookTime: recipe.cooking_time,
//         ingredients: recipe.ingredients,
//         }

//       console.log("Receta extraída:", recipe);
//       console.log(recipe.image, recipe.title, recipe.publisher)
      
//   const markup=` <figure class="recipe__fig">
//       <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
//       <h1 class="recipe__title">
//         <span>${recipe.title}</span>
//       </h1>
//       </figure>

//       <div class="recipe__details">
//       <div class="recipe__info">
//         <svg class="recipe__info-icon">
//           <use href="${icons}#icon-clock"></use>
//         </svg>
//         <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
//         <span class="recipe__info-text">minutes</span>
//       </div>
//       <div class="recipe__info">
//         <svg class="recipe__info-icon">
//           <use href="${icons}#icon-users"></use>
//         </svg>
//         <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
//         <span class="recipe__info-text">servings</span>

//         <div class="recipe__info-buttons">
//           <button class="btn--tiny btn--increase-servings">
//             <svg>
//               <use href="${icons}#icon-minus-circle"></use>
//             </svg>
//           </button>
//           <button class="btn--tiny btn--increase-servings">
//             <svg>
//               <use href="${icons}#icon-plus-circle"></use>
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div class="recipe__user-generated">
//         <svg>
//           <use href="${icons}#icon-user"></use>
//         </svg>
//       </div>
//       <button class="btn--round">
//         <svg class="">
//           <use href="${icons}#icon-bookmark-fill"></use>
//         </svg>
//       </button>
//       </div>

//       <div class="recipe__ingredients">
//       <h2 class="heading--2">Recipe ingredients</h2>
//       <ul class="recipe__ingredient-list">
//         ${recipe.ingredients
//           .map(ing => {
//             return `
//             <li class="recipe__ingredient">
//               <svg class="recipe__icon">
//                 <use href="${icons}#icon-check"></use>
//               </svg>
//               <div class="recipe__quantity">${ing.quantity ?? ''}</div>
//               <div class="recipe__description">
//                 <span class="recipe__unit">${ing.unit ?? ''}</span>
//                 ${ing.description}
//               </div>
//             </li>
//             `;
//           })
//           .join('')}
//       </ul>
//       </div>

//       <div class="recipe__directions">
//       <h2 class="heading--2">How to cook it</h2>
//       <p class="recipe__directions-text">
//         This recipe was carefully designed and tested by
//         <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
//         directions at their website.
//       </p>
//       <a
//         class="btn--small recipe__btn"
//         href="${recipe.sourceUrl}"
//         target="_blank"
//       >
//         <span>Directions</span>
//         <svg class="search__icon">
//           <use href="${icons}#icon-arrow-right"></use>
//         </svg>
//       </a>
//       </div>
//       `
//     recipeContainer.innerHTML="";
    
//     recipeContainer.insertAdjacentHTML('afterbegin',markup);
//           console.log(icons)

//   } catch (error) {
     
//       alert("Error: " + error.message);
//   }
// }
// function renderSpinner(parentEl) {
//   console.log("SpinerTime");
//   const markup = `
//     <div class="spinner">
//       <svg>
//         <use href="${icons}#icon-loader"></use>
//       </svg>
//     </div>
//   `;

//   parentEl.innerHTML = ""; // Borra el contenido anterior
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// }
// // e. Invocar la función
// //showRecipe();
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
// // https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
