        //Set the variables//

        var psy = -1;
        var human = 1;
        var remainGuess = 4;
      
    
        
        
        //Random Computer choice using the position of the array//
            function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
        }  
        var Letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
        function computer(){
         getRandomInt(26)
         return Math.floor(Math.random() * Math.floor(26));
        }  
          
        function azar(){
           return Letter[computer()]
        }
        
        
        
        var computerChoice = Letter[computer()]
        
        console.log(computerChoice)
    
    
    
        
        
        //Pressing key option
    
        
        
        document.onkeyup = function(event) {
          var userChoice = event.key;
          
          var regexp = /[a-z]/gi;
            if (!regexp.test(userChoice)) {
              console.log("Please!");
            }
            else {
              console.log(userChoice);
            }
        
            if (remainGuess<=0){psy++;
            console.log('You Loose! Try again!');
            document.getElementById("psy").innerHTML = psy+1;
            var computerChoice = console.log(azar());remainGuess=5;
            }
            //I don't know why this command doesn't work I swear I tried everything! It's so frustating 
             if (computerChoice === userChoice){
            console.log('You won!');
            document.getElementById("human").innerHTML = human++;
            var computerChoice = console.log(azar());remainGuess=5;
            }  else {
             console.log('Try again!');
             document.getElementById("remainGuess").innerHTML = remainGuess--;}
            }