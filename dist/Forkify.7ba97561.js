function e(e){return e&&e.__esModule?e.default:e}const r="https://forkify-api.herokuapp.com/api/v2/recipes",t=async function(e){try{let r=fetch(e),t=await Promise.race([r,new Promise(function(e,r){setTimeout(()=>{r(Error("Request took too long! Timeout after 5 second"))},5e3)})]),a=await t.json();if(!t.ok)throw Error(`${a.message} (${t.status})`);return a}catch(e){throw e}},a={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},s=async function(e){console.log("Loading recipe");try{let s=await t(`${r}/${e}`);console.log(s),a.recipe={id:s.data.recipe.id,title:s.data.recipe.title,publisher:s.data.recipe.publisher,sourceUrl:s.data.recipe.source_url,image:s.data.recipe.image_url,servings:s.data.recipe.servings,cookingTime:s.data.recipe.cooking_time,ingredients:s.data.recipe.ingredients},console.log("finish recipe")}catch(e){throw e}},n=async function(e){try{a.search.query=e;let s=await t(`${r}/?search=${e}`);a.search.results=s.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}},i=function(e=a.search.page){a.search.page=e;let r=(e-1)*a.search.resultsPerPage,t=e*a.search.resultsPerPage;return a.search.results.slice(r,t)};var c={};c=import.meta.resolve("eyyUD");class l{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
      <div class="spinner">
        <svg>
          <use href="${e(c)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(c)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${e(c)}#icon-smile"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class o extends l{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){console.log("addHandlerRender ejecutado"),["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
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
          ${this._data.ingredients.map(e=>`<li class="recipe__ingredient">${e.quantity} ${e.unit} ${e.description}</li>`).join("")}
        </ul>
      </div>
    `}}var d=new o;class u{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(r){r.preventDefault(),e()})}}var p=new u;class g extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>`}}var h=new g;class _ extends l{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let r=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===r&&t>1?`
        <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:r===t&&t>1?`
        <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>
      `:r<t?`
        <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>
        <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var v=new _;const f=async function(){try{console.log("controlRecipes");let e=window.location.hash.slice(1);if(!e)return;console.log(e),d.renderSpinner(),await s(e),console.log("Receta cargada:",a.recipe),d.render(a.recipe)}catch(e){console.error("Error en controlRecipes:",e),d.renderError()}},m=async function(){try{let e=p.getQuery();if(!e)return;h.renderSpinner(),await n(e),h.render(i(1)),v.render(a.search)}catch(e){h.renderError()}};console.log("Starting "),d.addHandlerRender(f),p.addHandlerSearch(m),v.addHandlerClick(function(e){h.render(i(e)),v.render(a.search)});
//# sourceMappingURL=Forkify.7ba97561.js.map
