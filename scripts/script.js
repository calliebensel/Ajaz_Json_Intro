var garage = [];

$( document ).ready(function(){
  $( '#addCar' ).on( 'click', function(){
    // get user input and place in an object
    var newCar = {
      year: $( '#year' ).val(),
      make: $( '#make' ).val(),
      model: $( '#model' ).val(),
      description: $( '#description' ).val(),
      imgUrl: $( '#imgUrl' ).val()
    }; // end newCar
    // push car into garage
    garage.push( newCar );
    // show garage
    console.log( garage );
    // for loop through garage
    var displayText ="";
    for (var i = 0; i < garage.length; i++) {
      displayText += '<p>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + '<p>';
      displayText += '<p>' + garage[i].description + '<p>';
      displayText += '<img src ="' + garage[i].imgUrl + '" />';
    }
    // print displayText using .html
    $( '#output' ).html( displayText );
    // clear input fields
      $( '#year' ).val("");
      $( '#make' ).val("");
      $( '#model' ).val("");
      $( '#description' ).val("");
      $( '#imgUrl' ).val("");
    // end clear input fields
}); // end addCar
var getMoreCars = function(){
  console.log("Get more cars");
    // ajax call to a URL
};


}); // end doc ready
