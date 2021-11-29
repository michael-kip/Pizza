class orderpizza {
    constructor(name, size, crust,topping, total){
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.total = total;
    }
}
$(document).ready(function(){
    $("button#proceed").click(function(event){
     let pizzaName = $("#name option:selected").val();
     let pizzaSize = $("#size option:selected").val();
     let pizzaCrust = $("#crust option:selected").val();
     let pizzaTopping = [];
     $.each($("input[name='toppings']:checked"), function(){            
         pizzaTopping.push($(this).val());
     });



// //business logc
// function pizzaFlavor(name){
//     this.firstFlavor = name
// }
// pizzaFlavor.prototype.pizzaName=function(){
//     return this.firstFlavor;
// }

// function sizeselected(name){
//     this.firstSize=name
// }
// sizeselected.prototype.pizzaSize=function(){
//     return this.firstSize;
// }

// function crustselected(name){
//     this.firstCrust=name
// }
// crustselected.prototype.pizzaCrust=function(){
//     return this.firstCrust;
// }

// function toppingsselected(){
//     this.firstTopping=name
// }
// toppingsselected.prototype.pizzaTopping=function(){
//     return this.firstTopping;
// }

// //ui logic
// $(document).ready(function(){
//     $(document).on("click","#btn",function(event){
//         event.preventDefault();

//         let flavorOfPizza = $("#flavor option: selected").text()
//         let sizeOfPizza = $("#size option: selected").text()
//         let crustOfPizza = $("#crust option: selected").text()
//         let toppingsForPizza = $("#toppings option:selected").text()
        
//         let valueOfSize = parseInt$($("#size option:selected").val());
//         let valueOfCrust = parseInt($("#crust option:selected").val());
//         let valueOfToppings = parseInt($("#toppings option:selected").val());
//         let numberOrdered = $("#numberoforders").val();
//         alert(valueOfToppings + valueOfCrust)

//         let totalCost =(valueOfSize+valueOfCrust+valueOfToppings)*numberOrdered

//         let flavor= new pizzaFlavor(flavorOfPizza)
//         let size = new sizeselected(sizeOfPizza)
//         let crust = new crustselected(crustOfPizza)
//         let topping = new toppingsselected(toppingsForPizza)

//         $("totalcostincurred").append("<div>" +"Pizza name: " + flavor.pizzaName()+ "</div>")
//     })
// })