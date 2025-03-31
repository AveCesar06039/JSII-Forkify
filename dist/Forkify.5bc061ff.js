const t=async function(t){try{let e=fetch(t),n=await Promise.race([e,new Promise((t,e)=>setTimeout(()=>e(Error("Request took too long! Timeout after 5 seconds")),5e3))]),r=await n.json();if(!n.ok)throw Error(`${r.message} (${n.status})`);return r}catch(t){throw t}},e={recipe:{}},n=async function(n){try{let{recipe:r}=(await t(`https://forkify-api.herokuapp.com/api/v2/recipes/${n}`)).data;e.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookTime:r.cooking_time,ingredients:r.ingredients},console.log("Receta cargada:",e.recipe)}catch(t){throw console.log(`${t} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),t}};(Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(i=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},o=function(t,e){if(!e)return Math.round(t);var n=Math.pow(10,e);return Math.round(t*n)/n},function(){if(i(this.denominator)){var t=o(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}if(i(this.numerator)){var t=o(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),this.denominator*=e}var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return(r.forEach(function(t){var e=i.indexOf(t);e>=0&&(n.push(t),i.splice(e,1))}),0===n.length)?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},a=Fraction;class r{#t=document.querySelector(".recipe");#e;render(t){this.#e=t,this.#n();let e=this.#r();this.#t.insertAdjacentHTML("afterbegin",e)}#n(){this.#t.innerHTML=""}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${{}}#icon-loader"></use>
        </svg>
      </div>
    `;this.#n(),this.#t.insertAdjacentHTML("afterbegin",t)}#r(){return`
      <figure class="recipe__fig">
        <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />
        <h1 class="recipe__title"><span>${this.#e.title}</span></h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data">${this.#e.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-users"></use>
          </svg>
          <span class="recipe__info-data">${this.#e.servings}</span>
          <span class="recipe__info-text">servings</span>
        </div>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this.#e.ingredients.map(t=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${{}}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity?new a(t.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit??""}</span>
                ${t.description}
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    `}}var i,o,a,s=new r;const c=async function(){try{let t=window.location.hash.slice(1);if(!t)return;s.renderSpinner(),await n(t),s.render(e.recipe)}catch(t){alert("Error al cargar la receta")}};["hashchange","load"].forEach(t=>window.addEventListener(t,c));
//# sourceMappingURL=Forkify.5bc061ff.js.map
