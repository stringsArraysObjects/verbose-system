document.querySelector('button').addEventListener('click', getDrink)
// const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

// // Constructor to create an instance of Carousel
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   touch: true, //passed arguements
// })     

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
           console.log(data.drinks)
           document.querySelector('h3').innerText = data.drinks[0].strDrink
           document.querySelector('#newUserInput').src = data.drinks[0].strDrinkThumb
           document.querySelector('span').innerText = data.drinks[0].strInstructions
           document.querySelector('#ingredients1').innerText = data.drinks[0].strIngredient1
           document.querySelector('#ingredients2').innerText = data.drinks[0].strIngredient2
           document.querySelector('#ingredients3').innerText = data.drinks[0].strIngredient3
           document.querySelector('#ingredients4').innerText = data.drinks[0].strIngredient4
           document.querySelector('#ingredients5').innerText = data.drinks[0].strIngredient5
           document.querySelector('#ingredients6').innerText = data.drinks[0].strIngredient6
           document.querySelector('#ingredients7').innerText = data.drinks[0].strIngredient7
           document.querySelector('#ingredients8').innerText = data.drinks[0].strIngredient8
           
           data.drinks.forEach(obj => {
                console.log(obj.strDrink)
            })
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

}


    

