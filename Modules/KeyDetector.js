// KeyBoardInput
// Removing the hassle from detecting keyboard input :D
//
// Version 1.0
// Made by Jobi#8313
//
// Feel free to modify, edit, and use!

//To use, add it to your HTML file and (in either this file or in another) do something similar to these lines of code
//EXAMPLES:
//keyDetector.isKeyDown("a"); //returns true if user is holding a or A anything else itll return false works with any key.
//keyDetector.isKeyUp("a"); //returns false if user is holding a or A anything else itll return true works with any key.

const keyDetector = {

    keydown: '',
    
    init: function(){
        document.addEventListener("keydown", function(event){
            keyDetector.keydown = event.key
        })
        document.addEventListener("keyup", function(event){
            keyDetector.keydown = ''
        })
    },

    isKeyDown: function(input){
        if (input == this.keydown){
            return true
        }
        return false
    },

    isKeyUp: function(input){
        if (input != this.keydown){
            return true
        }
        return false
    }
}

keyDetector.init();
