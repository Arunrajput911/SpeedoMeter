var cartButtons = $('.cart-plus-minus').find('button');
var total = parseInt($("#amount-1").val());
$("#total").val(total);
$(cartButtons).on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var target = $this.parent().data('target');
  var target = $('#' + target);
  var current = parseFloat($(target).val());
  if ($this.hasClass('cart-plus-1'))
    target.val(current + 1);
  else {
    (current < 2) ? null: target.val(current - 1);
  }
  total = parseInt($("#amount-1").val());
  $("#total").val(total);
  setSpeedValue(speed,total);
});
 
const  speed=document.querySelector(".speedometer");

 function setSpeedValue(speedometer,total){
    if(total<0 || total>100)
    {
        return;
    }
    speedometer.querySelector(".speedometer_fill").style.transform=`rotate(${total/200}turn)`;
    speedometer.querySelector(".speedometer_cover").textContent=`${Math.round(total)}km/h`;
}




