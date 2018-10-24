$(document).ready(function(){
  var buttonClicked = false;
  
  $('button').hover(function(){
    var buttonValue = $(this).attr('value')
    
    $('.background-image').css('background-image', `url("images/${buttonValue}.jpg")`).css('background-repeat', 'no-repeat').css('background-size', '100% 100%')
  },
  function(){
    if(!buttonClicked){
    $('.background-image').css('background-image', 'none')
  }})



  $('button').click(function(){
    var buttonValue = $(this).attr('value')
    buttonClicked = true;
    
    $('.background-image').css('background-image', `url("images/${buttonValue}.jpg")`).css('background-repeat', 'no-repeat').css('background-size', '100% 100%')
    $('button').hide();
    $('h1').text('Character Select')
    $('.button-container').html('<select class="player-one"> <option>Select Ninja</option><option value="donny">Donatello</option><option value="raphael">Rapheal</option><option value="leo">Leonardo</option><option value="mikey">Michealangelo</option></select> <select class="player-two"> <option>Select Ninja</option><option value="donny">Donatello</option><option value="raphael">Rapheal</option><option value="leo">Leonardo</option><option value="mikey">Michealangelo</option></select>')
  })

  $('.button-container').on('change', '.player-one', function(){
    var playerOneFighter = $(this).val()
    $('.player-one-ninja').html(`<img src="/images/${playerOneFighter}.png">`)
  })

  $('.button-container').on('change', '.player-two', function () {
    var playerTwoFighter = $(this).val()
    $('.player-two-ninja').html(`<img src="/images/${playerTwoFighter}.png">`)
  })


})