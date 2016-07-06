$(document).ready(function(){
  // function diviThree(number){
  //   var fizz = number % 3;
  //   if (fizz === 0){
  //     $("body").append("fizz");
  //   }
  // }
  //
  // function diviFive(number){
  //   var buzz = number % 5;
  //   if(buzz === 0){
  //     $("body").append("buzz");
  //   }
  // }

  function fizzBuzz(){
    var number;

    for(number = 1;number <= 100; number++){
      var fizz = number % 3;
      var buzz = number % 5;
      // console.log(fizz);
      if (fizz === 0 && buzz === 0){
        $("body").append("fizz buzz</br>");
      }
      else if(buzz === 0){
        $("body").append("buzz</br>");
      }
      else if(fizz === 0){
        $("body").append("fizz</br>");
      }
      else{
        $("body").append(number + "</br>");
      }
    }
  }

  fizzBuzz();
});
