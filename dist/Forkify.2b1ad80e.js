const s=document.querySelector(".recipe");!async function(){try{let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),i=await e.json();console.log("Respuesta HTTP (resp):",e),console.log("Datos convertidos a JSON (data):",i);let c=i.data.recipe;c={id:c.id,title:c.title,publisher:c.publisher,sourceUrl:c.source_url,image:c.image_url,servings:c.servings,cookTime:c.cooking_time,ingredients:c.ingredients},console.log("Receta extraída:",c),console.log(c.image,c.title,c.publisher);let n=` <figure class="recipe__fig">
      <img src="${c.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${c.title}</span>
      </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${c.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${c.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${c.ingredients.map(s=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${s.quantity??""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${s.unit??""}</span>
                ${s.description}
              </div>
            </li>
            `).join("")}
      </ul>
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${c.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${c.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
      </div>
      `;s.innerHTML="",s.insertAdjacentHTML("afterbegin",n)}catch(s){alert("Error: "+s.message)}}();
//# sourceMappingURL=Forkify.2b1ad80e.js.map
