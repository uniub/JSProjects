// KeyBoardInput
// Removing the hassle from detecting keyboard input :D
//
// Version 1.0
// Made by Jobi#8313
//
// Feel free to modify, edit, and use!

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