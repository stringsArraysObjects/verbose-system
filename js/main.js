

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            
         console.log(data.drinks)
           let drinkID = data.drinks[0].idDrink
        //    let lastThreeNumsOfDrinkID = drinkID.slice(2)
            console.log(drinkID)
            // data.drinks.forEach(obj => console.log(obj.name))
            document.querySelector('h3').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('span').innerText = data.drinks[0].strInstructions
           
       
            const DRINKINGREDIENTS_URL = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${drinkID}`)
            
            fetch(DRINKINGREDIENTS_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.querySelector('.ingredients').innerText
         
             })
            
          
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

    }
     

    

