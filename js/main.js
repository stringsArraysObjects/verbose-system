//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drinks = document.querySelector('input').value.replace(/\s/g, "")
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data.drinks[0])
          document.querySelector('h2').innerText = data.drinks[0].strDrink
          document.querySelector('img').src = data.drinks[0].strDrinkThumb
          document.querySelector('ul').innerText = data.drinks[0].strInstructions
          document.querySelector('.olLi').innerText = data.drinks[0].strIngredient1
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        
}
// fetch(`https://connect.secure.wellsfargo.com/accounts/start?p1=yes&_xa=05809af4-8068-4f67-a8c5-e25ee7e38628&SAMLart=AAQCtOoEQCR14WDgSxaU4QNGCHpGcoS1BLBcjhxXBNFx7xbIAwEGcmzUhWE%3D#/accounts/home/accountdetails${drink}`)