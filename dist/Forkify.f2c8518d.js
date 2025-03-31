document.querySelector(".recipe"),async function(){try{let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),a=await e.json();console.log("Respuesta HTTP (resp):",e),console.log("Datos convertidos a JSON (data):",a);let o=a.data;console.log("Receta extraída:",o)}catch(e){alert("Error: "+e.message)}}();
//# sourceMappingURL=Forkify.f2c8518d.js.map
