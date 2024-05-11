document.querySelector('button').addEventListener('click', getDrink)
const hideHeadings = document.querySelector('h3')    

function getDrink(){
    let drink = document.querySelector('input').value
    hideHeadings.classList.toggle('hidden')
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
           console.log(data.drinks)
           document.querySelector('h2').innerText = data.drinks[0].strDrink
           document.querySelector('#newUserInput').src = data.drinks[0].strDrinkThumb
           document.querySelector('p').innerText = data.drinks[0].strInstructions
           document.querySelector('#ingredients1').innerText = data.drinks[0].strIngredient1
           document.querySelector('#ingredients2').innerText = data.drinks[0].strIngredient2
           document.querySelector('#ingredients3').innerText = data.drinks[0].strIngredient3
           document.querySelector('#ingredients4').innerText = data.drinks[0].strIngredient4
           document.querySelector('#ingredients5').innerText = data.drinks[0].strIngredient5
           document.querySelector('#ingredients6').innerText = data.drinks[0].strIngredient6
           document.querySelector('#ingredients7').innerText = data.drinks[0].strIngredient7
           document.querySelector('#ingredients8').innerText = data.drinks[0].strIngredient8
           
            // data.drinks.forEach(obj => {
            // document.querySelector('h4').innerText = obj.strDrink (this needs work)
            // })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

}


    

