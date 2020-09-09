const foods= {'Beef Burgers':51.99, 'Elk Burgers':150.00, 'Turkey Burgers':85.00, 'Veggie Burgers':45.00, 'Bison Burgers':55.00, 'Black bean Burgers':66.00}
const drinks = {'Coke':15.00, 'Fanta':12.00, 'Milkshake':25.00, 'Smoothies':35.00, 'Sprite':15.00, 'Apple tiser':25.00}
let bill = 0;

function myFood(){
    let string= '';
    for(let food in foods){
        string +=(food + ':R' + foods[food] + '\n');
    }
    let choice = prompt(string);
    bill+= foods[choice];
}

function myDrink(){
    let string = '';
    for(let drink in drinks){
        string += (drink + ':R' + drinks[drink] + '\n');
    }
    let choice = prompt(string);
    bill+=drinks[choice];

}

function Bill(){
    alert("Your bill is R" + bill )
}
