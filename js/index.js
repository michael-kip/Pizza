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
     switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "small":
           price = 400;
        //    console.log(price);
         break;
         case "medium":
           price = 600;
        //    console.log("The price is "+price);
         break;
         case "large":
           price = 800;
        //    console.log(price);
        //  default:
        //    console.log("error"); 
       }
       switch(pizzaCrust){
          case "0":
            crust_price = "0";
          break;
          case "Crispy":
            crust_price = 250;
          break;
          case "Stuffed":
            crust_price = 200;
          break;
          case "Gluten-free":
            crust_price = 300;
          break;
        //   default:
            // console.log("No price"); 
        }
        let toppingValue = pizzaTopping.length*100;
        // console.log("toppings value" + toppingValue);
    
        if((pizzaSize == "0") && (pizzaCrust == "0")){
        //   console.log("nothing selected");
        //   $("button.proceed").show();
        //   $("#information").show();
        //   $("div.choice").hide();
          alert("Please select pizza size and crust"); 
        }
        // else{
        //   $("button.proceed").hide();
        //   $("#information").hide();
        //   $("div.choice").slideDown(1000);
        // }
    
        total = price + crust_price + toppingValue;
        // console.log(total);
        let checkoutTotal =0;
        // checkoutTotal = checkoutTotal + total;
        checkoutTotal += total;
    
        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html( $("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(pizzaTopping.join(", "));
        $("#totalcost").html(total);
        
        $("button.anotherOrder").click(function(){
          let pizzaName = $(".name option:selected").val();
          let pizzaSize = $("#size option:selected").val();
          let pizzaCrust = $("#crust option:selected").val();
          let pizzaTopping = [];
          $.each($("input[name='toppings']:checked"), function(){            
              pizzaTopping.push($(this).val());
          });
        //   console.log(ptopping.join(", "));
          switch(pizzaSize){
            case "0":
              price =0;
            break;
            case "small":
               price = 400;
            //    console.log(price);
             break;
             case "medium":
               price = 600;
            //    console.log("The price is "+price);
             break;
             case "large":
               price = 800;
            //    console.log(price);
            //  default:
            //    console.log("error"); 
           }
           switch(pizzaCrust){
              case "0":
                crust_price = 0;
              break;
              case "Crispy":
                crust_price = 250;
              break;
              case "Stuffed":
                crust_price = 200;
              break;
              case "Gluten-free":
                crust_price = 300;
              break;
            //   default:
                // console.log("No price"); 
            }
            let toppingValue = pizzaTopping.length*100;
        // console.log(" value" + toppingValue);
            total = price + crust_price + toppingValue;
        // console.log(total);

            checkoutTotal += total;

            let addpizzaorder = new orderpizza(pizzaName, pizzaSize, pizzaCrust,pizzaTopping,total);

            $("#ordersmade").html('<tr><td id="pizzaname">'+addpizzaorder.name +'</td><td id="pizzasize">' + addpizzaorder.size + '</td><td id="pizzacrust">'+addpizzaorder.crust + '</td><td id="pizzatopping">'+addpizzaorder.topping+'</td><td id="totalcost">'+addpizzaorder.total+'</td></tr>');
        });

        $("button#checktotals").click(function(){ 
            // $("button#checkout").hide();
            // $("button.addPizza").hide();
            // $("button.deliver").slideDown(1000);
            // $("#addedprice").slideDown(1000);
            // ("Your total bills is sh. "+checkoutTotal);
            $("#pizzatotal").html("Amount is sh. "+checkoutTotal);
          });

          $("button.deliver").click(function(){
            // $(".pizzatable").hide();
            // $(".choice h2").hide();
            // $(".delivery").slideDown(1000);
            // $("#addedprice").hide();
            // $("button.deliver").hide();
            // $("#pizzatotal").hide();
            let deliveryCharges= checkoutTotal+200;
            // console.log("You will pay a total of . "+deliveryCharges+" on delivery");
            $("#totalbill").html("Your  total bill plus delivery fee is: "+deliveryCharges);
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