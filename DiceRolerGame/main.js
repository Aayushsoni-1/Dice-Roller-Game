function rollDice(){
    const image = document.getElementById("image-wrapper")
    const dice_number = document.getElementById("no_displayer").value

    image.innerHTML = ""; // Clears previous dice images

    for(let i=0; i<dice_number; i++){
        const value = Math.floor(Math.random()*6 +1)
        image.innerHTML += `<img src="images/bx-dice-${value}.svg" alt="dice ${value}">`
    }

    }