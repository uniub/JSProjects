//Importing Module(s)
import { keyDetector } from "./KeyDetector";
keyDetector.init();
// Real Code

setInterval(function(){
    if (keyDetector.isKeyDown("a")){
        console.log("a is pressed :D")
    }
}, 1)