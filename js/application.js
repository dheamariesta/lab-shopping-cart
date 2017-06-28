$(document).ready(function(){
  var subtotal = function(price, quantity, index) {
    var subtotal = $(".subtotal");
    $(subtotal[index]).text("$" + (price * quantity).toFixed(2));
  }

  var totalPrice = function(){
    var productPrice = $(".productPrice");
    var productQuantity = $(".quantity");
    var productPriceArrayLength = productPrice.length;
    var totalPrice = 0;
    for (var i = 0; i < productPriceArrayLength; i++){
      var itemPrice = parseFloat($(productPrice[i]).text().replace("$",""));
      var itemQuantity = parseFloat(productQuantity[i].value);
      subtotal(itemPrice, itemQuantity, i);
      totalPrice += itemPrice * itemQuantity;
    }
    $("#total-price").text("$"+totalPrice.toFixed(2))
  };

  // var createItem=function(){
  //   var itemName=$("#new-item-name").val();
  //   var itemUnitPrice=$("#new-item-unit-price").val();
  //   if($.isNumeric(itemUnitPrice)==false){
  //     alert("Unit price must be a number")
  //   }else if(itemName==""){
  //     alert("Item name cannot be empty")
  //   }else{
  //     itemUnitPrice=Number(itemUnitPrice).toFixed(2);
  //     var newItem='<div class="item row" style="display:none;"><div class="item-name col-xs-4">'+itemName+'</div><div class="item-price col-xs-3">$'+itemUnitPrice+'</div><div class="item-qty col-xs-3"><label>QTY</label><input class="quantity" value="0"><button class="cancel">Cancel</button></div><div class="item-subtotal col-xs-2">$0.00</div></div>';
  //
  //     $(newItem).prependTo($("#items-list")).slideDown("slow")
  //   }
  // };

  $("#calculatePriceButton").click(function(){
    totalPrice();
  });
  $(document).delegate(".quantity","focusout",function(){
    totalPrice();
  });


});
