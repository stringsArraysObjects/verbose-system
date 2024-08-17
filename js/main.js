const skeleton =  document.querySelector('.skeleton')
const hideHeadings = document.querySelector('section') 

document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "loading") {
            document.body.style = "background-color: #b6e72e"
          initLoader();
        } else if (event.target.readyState === "complete") {
            skeleton.remove()
             getData()
            hideHeadings.classList.toggle('hidden')
        }
});

document.querySelector('button').addEventListener('click', getDrink)
async function getDrink() {
    let drink = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      for(let element in data.drinks){
                    
        document.querySelector('h2').innerText = data.drinks[element].strDrink 
        document.querySelector('.cocktailPic').src = data.drinks[element].strDrinkThumb
        document.querySelector('.drinkInstructions').innerText = data.drinks[element].strInstructions
        document.querySelector('#ingredients1').innerText = data.drinks[element].strIngredient1 
        document.querySelector('#ingredients2').innerText = data.drinks[element].strIngredient2
        document.querySelector('#ingredients3').innerText = data.drinks[element].strIngredient3
        document.querySelector('#ingredients4').innerText = data.drinks[element].strIngredient4
        document.querySelector('#ingredients5').innerText = data.drinks[element].strIngredient5
        document.querySelector('#ingredients6').innerText = data.drinks[element].strIngredient6
       document.querySelector('#ingredients7').innerText = data.drinks[element].strIngredient7
       document.querySelector('#ingredients8').innerText = data.drinks[element].strIngredient8
}
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }  


async function getData() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      document.querySelector('h2').innerText = data.drinks[0].strDrink 
      document.querySelector('.cocktailPic').src = data.drinks[0].strDrinkThumb
      document.querySelector('.drinkInstructions').innerText = data.drinks[0].strInstructions
        document.querySelector('#ingredients1').innerText = data.drinks[0].strIngredient1 
        document.querySelector('#ingredients2').innerText = data.drinks[0].strIngredient2
        document.querySelector('#ingredients3').innerText = data.drinks[0].strIngredient3
        document.querySelector('#ingredients4').innerText = data.drinks[0].strIngredient4
        document.querySelector('#ingredients5').innerText = data.drinks[0].strIngredient5
        document.querySelector('#ingredients6').innerText = data.drinks[0].strIngredient6
       document.querySelector('#ingredients7').innerText = data.drinks[0].strIngredient7
       document.querySelector('#ingredients8').innerText = data.drinks[0].strIngredient8
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }