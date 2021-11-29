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
          cost =0;
        break;
        case "small":
           cost = 400;
         break;
         case "medium":
           cost = 600;
         break;
         case "large":
           cost = 800;
       }
       switch(pizzaCrust){
          case "0":
            costOfCrust = "0";
          break;
          case "Crispy":
            costOfCrust = 250;
          break;
          case "Stuffed":
            costOfCrust = 200;
          break;
          case "Gluten-free":
            costOfCrust = 300;
          break;
        }
        let toppingValue = pizzaTopping.length*100;
    
        if((pizzaSize == "0") && (pizzaCrust == "0")){
          alert("Please select pizza size and crust"); 
        }
    
        total = cost + costOfCrust + toppingValue;
        let checkoutTotal =0;
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
          switch(pizzaSize){
            case "0":
              cost =0;
            break;
            case "small":
               cost = 400;
             break;
             case "medium":
               cost = 600;
             break;
             case "large":
               cost = 800;
           }
           switch(pizzaCrust){
              case "0":
                costOfCrust = 0;
              break;
              case "Crispy":
                costOfCrust = 250;
              break;
              case "Stuffed":
                costOfCrust = 200;
              break;
              case "Gluten-free":
                costOfCrust = 300;
              break;
            }
            let toppingValue = pizzaTopping.length*100;
        
            total = cost + costOfCrust + toppingValue;
        
            checkoutTotal += total;

            let addpizzaorder = new orderpizza(pizzaName, pizzaSize, pizzaCrust,pizzaTopping,total);

            $("#ordersmade").html('<tr><td id="pizzaname">'+addpizzaorder.name +'</td><td id="pizzasize">' + addpizzaorder.size + '</td><td id="pizzacrust">'+addpizzaorder.crust + '</td><td id="pizzatopping">'+addpizzaorder.topping+'</td><td id="totalcost">'+addpizzaorder.total+'</td></tr>');
        });

        $("button#checktotals").click(function(){ 
            $("#pizzatotal").html("Amount is ksh. "+checkoutTotal);
          });

          $("button.deliver").click(function(){
            let deliveryCharges= checkoutTotal+200;
            $("#totalbill").html("Your  total bill plus delivery fee is @ksh 200: "+deliveryCharges);
          });

          $("button#deliver").click(function(event){
            event.preventDefault();
      
            
            let deliveryCharges= checkoutTotal+200;
            
            $(document).on("click","#deliver",function(){
                let customerLocation = prompt("Enter your location")
            if(!customerLocation){
                alert("Please enter your location")
            }else{
                alert("Dear customer, your order has been received and will be delivered at "+ customerLocation +". Total cost is kshs "+ deliveryCharges )
            }   
            });
          });
    event.preventDefault();
    });
  });
      





