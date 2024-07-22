document.querySelector('button').addEventListener('click', getDrink)
const hideHeadings = document.querySelector('h3')   

function getDrink(){
    let drink = document.querySelector('input').value
    hideHeadings.classList.toggle('hidden')
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
                
                console.log(data.drinks)

                for(let prop in data.drinks){

                    document.querySelector('h2').innerText = data.drinks[prop].strDrink
                    document.querySelector('.cocktailPic').src = data.drinks[prop].strDrinkThumb
                    document.querySelector('.drinkInstructions').innerText = data.drinks[prop].strInstructions
                    document.querySelector('#ingredients1').innerText = data.drinks[prop].strIngredient1 
                    document.querySelector('#ingredients2').innerText = data.drinks[prop].strIngredient2
                    document.querySelector('#ingredients3').innerText = data.drinks[prop].strIngredient3
                    document.querySelector('#ingredients4').innerText = data.drinks[prop].strIngredient4
                    document.querySelector('#ingredients5').innerText = data.drinks[prop].strIngredient5
                    document.querySelector('#ingredients6').innerText = data.drinks[prop].strIngredient6
                  //   document.querySelector('#ingredients7').innerText = data.drinks[i].strIngredient7
                  //   document.querySelector('#ingredients8').innerText = data.drinks[i].strIngredient8
                }

              
                
                

            // });
                })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

}