

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s&=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            
         console.log(data.drinks)
           let drinkID = data.drinks.idDrink
        //    let lastThreeNumsOfDrinkID = drinkID.slice(2)
            console.log(drinkID)
            // data.drinks.forEach(obj => console.log(obj.name))
            document.querySelector('h3').innerText = data.drinks.strDrink
            document.querySelector('img').src = data.drinks.strDrinkThumb
            document.querySelector('span').innerText = data.drinks.strInstructions
            let drinkIngredients = document.querySelector('.ingredients').innerText
            for(let key in data.drinks.strIngredients){
                drinkIngredients.value += strIngredients[key]
                    console.log(drinkIngredients[key])
            }
       
            // const DRINKINGREDIENTS_URL = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${drinkID}`)
            
            // fetch(DRINKINGREDIENTS_URL)
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     document.querySelector('.ingredients').innerText
         
            //  })
            
          
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

    }
     

    

