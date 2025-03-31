function e(e){return e&&e.__esModule?e.default:e}const r="https://forkify-api.herokuapp.com/api/v2/recipes/",t=async function(e){try{let r=fetch(e),t=await Promise.race([r,new Promise((e,r)=>setTimeout(()=>r(Error("Request took too long! Timeout after 5 seconds")),5e3))]),a=await t.json();if(!t.ok)throw Error(`${a.message} (${t.status})`);return a}catch(e){throw e}},a={recipe:{},search:{query:"",results:[]}},s=async function(e){try{let{recipe:s}=(await t(`${r}${e}`)).data;a.recipe={id:s.id,title:s.title,publisher:s.publisher,sourceUrl:s.source_url,image:s.image_url,servings:s.servings,cookTime:s.cooking_time,ingredients:s.ingredients}}catch(e){throw e}},i=async function(e){try{a.search.query=e;let s=await t(`${r}?search=${e}`);a.search.results=s.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}};var n={};n=import.meta.resolve("eyyUD");class l{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
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
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class c extends l{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Recipe was successfully loaded!";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <p>${this._data.publisher}</p>
      </div>`}}var d=new c;class u{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}}var o=new u;class h extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
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
      </li>`}}var p=new h;const _=async function(){try{let e=window.location.hash.slice(1);if(!e)return;d.renderSpinner(),await s(e),d.render(a.recipe)}catch(e){d.renderError()}},g=async function(){try{let e=o.getQuery();if(!e)return;p.renderSpinner(),await i(e),p.render(a.search.results)}catch(e){console.error("❌ Error en la búsqueda:",e)}};d.addHandlerRender(_),o.addHandlerSearch(g);
//# sourceMappingURL=Forkify.47e60fd4.js.map
