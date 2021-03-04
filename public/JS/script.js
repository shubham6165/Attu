
/* color array */
var color = ["grey", "blue", "red", "lightgreen", "yellow"];

/* set slideindex at grey (0) */
var slideindex = 0;

/* initial color of body background */
document.body.style.backgroundColor = color[slideindex];

/* onclick buttons */
    function plusindex(n) { slideindex += n; 
    if(slideindex < 0){ slideindex = color.length -1 ; }
    if(slideindex >= color.length) { slideindex = 0 ; }
    document.body.style.backgroundColor = color[slideindex];
    }