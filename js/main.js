

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
         console.log(data.drinks)
        
            // data.drinks.forEach(obj => console.log(obj.name))
            document.querySelector('h3').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('span').innerText = data.drinks[0].strInstructions
            document.querySelector('ul').innerText = data.drinks[0].strIngredient1
        
          
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        
}
