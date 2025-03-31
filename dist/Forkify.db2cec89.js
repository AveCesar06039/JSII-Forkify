function e(e){return e&&e.__esModule?e.default:e}const r="https://forkify-api.herokuapp.com/api/v2/recipes/",t=async function(e){try{let r=fetch(e),t=await Promise.race([r,new Promise(function(e,r){setTimeout(()=>{r(Error("Request took too long! Timeout after 5 second"))},5e3)})]),i=await t.json();if(!t.ok)throw Error(`${i.message} (${t.status})`);return i}catch(e){throw e}},i={recipe:{},search:{query:"",results:[]}},a=async function(e){try{let a=await t(`${r}/${e}`);i.recipe={id:a.recipe.id,title:a.recipe.title,publisher:a.recipe.publisher,sourceUrl:a.recipe.source_url,image:a.recipe.image_url,servings:a.recipe.servings,cookingTime:a.recipe.cooking_time,ingredients:a.recipe.ingredients}}catch(e){throw e}},s=async function(e){try{i.search.query=e;let a=await t(`${r}/?search=${e}`);i.search.results=a.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}};var n={};n=import.meta.resolve("eyyUD");class c{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
      <div class="spinner">
        <svg>
          <use href="${e(n)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(n)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${e(n)}#icon-smile"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class l extends c{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}}var o=new l;class d{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(r){r.preventDefault(),e()})}}var u=new d;class p extends c{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
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
      </li>`}}var h=new p;const _=async function(){try{let e=window.location.hash.slice(1);if(!e)return;o.renderSpinner(),await a(e),o.render(i.recipe)}catch(e){o.renderError()}},g=async function(){try{let e=u.getQuery();if(!e)return;h.renderSpinner(),await s(e),h.render(i.search.results)}catch(e){h.renderError()}};o.addHandlerRender(_),u.addHandlerSearch(g);
//# sourceMappingURL=Forkify.db2cec89.js.map
