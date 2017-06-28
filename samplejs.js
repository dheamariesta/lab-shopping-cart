$(document).ready(function(){
    var returnSubtotalPrice=function(price,quantity,i){
        var itemSubtotalPrices=$(".item-subtotal");
        $(itemSubtotalPrices[i]).text("$"+(price*quantity).toFixed(2))
    };

    var returnTotalPrice=function(){
        var itemPrices=$(".item-price");
        var itemQuantities=$(".quantity");
        var itemLength=itemPrices.length;
        var totalPrice=0;
        for(var i=0;i<itemLength;i++){
            var price=$(itemPrices[i]).text().replace("$","");
            if($.isNumeric(itemQuantities[i].value)){
                var quantity=itemQuantities[i].value;
                $(itemQuantities[i]).css("color","black")
            } else{
                var quantity=0;
                $("#total-price").after("");
                $(itemQuantities[i]).css("color","red")
            }
            returnSubtotalPrice(price,quantity,i);
            totalPrice+=price*quantity
        }
        $("#total-price").text("$"+totalPrice.toFixed(2))
    };

    var createItem=function(){
      var itemName=$("#new-item-name").val();
      var itemUnitPrice=$("#new-item-unit-price").val();
      if($.isNumeric(itemUnitPrice)==false){
        alert("Unit price must be a number")
      }else if(itemName==""){
        alert("Item name cannot be empty")
      }else{
        itemUnitPrice=Number(itemUnitPrice).toFixed(2);
        var newItem='<div class="item row" style="display:none;"><div class="item-name col-xs-4">'+itemName+'</div><div class="item-price col-xs-3">$'+itemUnitPrice+'</div><div class="item-qty col-xs-3"><label>QTY</label><input class="quantity" value="0"><button class="cancel">Cancel</button></div><div class="item-subtotal col-xs-2">$0.00</div></div>';

        $(newItem).prependTo($("#items-list")).slideDown("slow")
      }
    };

    $("#calc-prices-button").click(function(){
      returnTotalPrice()
    });

    $(document).delegate(".quantity","focusout",function(){
      returnTotalPrice()
    });

    $("#new-item-create").click(function(){
      createItem()
    });

    $(document).delegate(".cancel","click",function(){
      $(this).parent().parent().fadeOut("slow",function(){
        $(this).html("");returnTotalPrice()
      })
    })
  });
