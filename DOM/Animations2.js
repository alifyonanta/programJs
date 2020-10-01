//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
     var right = true;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 150)
            right = false;
        else if (pos <= 0)
            right = true;
        if (!right) {
            pos -= 1;
            box.style.left = pos+'px';
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};
