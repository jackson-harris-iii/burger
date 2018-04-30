$(document).ready( () => {
console.log('we ready')    
    
    //create new burger to be eaten
    $('#addBurgerBtn').on("click", (event) => {
        event.preventDefault();
        
        var newBurger = $('#newBurger').val().trim()
        console.log(newBurger)
        var data = {
            burger_name: newBurger, 
            devoured: false
        };

        $.post("/", data).then( (result) => {
            console.log(result)
            $('#newBurger').empty()
            location.reload();
        })
    })

    //devour a burger
    $('.eat-burger').on('click', (event) => {
        
        event.preventDefault();

        var eaten = {
            devoured: true
        };

        var id = event.target.id
        console.log(id)

        $.ajax('/' + id, {
            type: "PUT",
            data: eaten
        }).then( (result) => {
            console.log(result)
            console.log('Burger ' + id + ' was devoured')
            location.reload()
        }
        )
    });

});