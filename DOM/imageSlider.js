window.onload = function() {

    var slider = {
        _images:[
           "http://www.sololearn.com/uploads/slider/1.jpg", 
           "http://www.sololearn.com/uploads/slider/2.jpg", 
           "http://www.sololearn.com/uploads/slider/3.jpg"
        ],
        _current:0,
        next:function(){
            if(++slider._current == slider._images.length) {
                slider._current = 0;
            }
            document.getElementById("slider").src = slider._images[slider._current];
        },
        prev:function(){
            if(--slider._current < 0){
                slider._current = slider._images.length - 1;
            }
            document.getElementById("slider").src = slider._images[slider._current];
        }
        
    };
    
    document.getElementById("next").addEventListener("click", slider.next);
    document.getElementById("prev").addEventListener("click", slider.prev);

}
