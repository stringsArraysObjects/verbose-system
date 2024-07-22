document.querySelector('button').addEventListener('click', getDrink)
const hideHeadings = document.querySelector('h3')    

function getDrink(){
    let drink = document.querySelector('input').value
    hideHeadings.classList.toggle('hidden')
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
            // data.drinks.forEach(data.drinks => {
                
                console.log(data.drinks)
                //document.querySelector('.drinkNames').innerText += data.drinks[i].strDrink + ',  '

                for(let i = 0; i < data.drinks.length; i++ ){
                    document.querySelector('h2').innerText = data.drinks[i].strDrink
                    document.querySelector('#newUserInput').src = data.drinks[i].strDrinkThumb
                    document.querySelector('p').innerText = data.drinks[i].strInstructions
                    document.querySelector('ol').innerText += data.drinks[i].strIngredient1
                    // document.querySelector('#ingredients2').innerText = data.drinks[i].strIngredient2
                    // document.querySelector('#ingredients3').innerText = data.drinks[i].strIngredient3
                    // document.querySelector('#ingredients4').innerText = data.drinks[i].strIngredient4
                    // document.querySelector('#ingredients5').innerText = data.drinks[i].strIngredient5
                    // document.querySelector('#ingredients6').innerText = data.drinks[i].strIngredient6
                    // document.querySelector('#ingredients7').innerText = data.drinks[i].strIngredient7
                    // document.querySelector('#ingredients8').innerText = data.drinks[i].strIngredient8
                
                }

            // });
           
            // data.drinks.forEach(data.drinks => {
            // document.querySelector('h4').innerText = data.drinks.strDrink (this needs work)
            // })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

}