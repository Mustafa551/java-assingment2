var food = ["biryani","korma","karai","roll"]
var  extrafood = ["lassi","cold drink","dessrt"]
console.log(extrafood.length)
var userInput =  prompt("Enter your food : ")
var indexof = food.indexOf(userInput);
document.write('<h1>Restaurant</h1>')
if(indexof!==-1){
   document.write("<b>" + userInput + "</b>"+ " available <br> ")

   document.write("You can also try this <br> ")
    for(i=0; i<extrafood.length; i++){
       document.write(extrafood[i] + "<br>  ")
    }
}
else{

   document.write("<b>" + userInput + "</b>" + " is not avaible but you can try another food <br> ")
    for(i=0; i<food.length; i++){
       document.write(food[i] + "<br>")
    }

}