$(function(){
    //declare some global vars for mathing...
    var index = 0; //starter image
    var counter = $('div.img-wrapper > img').length;
    var imgWidth = $('div.img-wrapper > img')[0].width; //slide width
    var imgBuffer = 5; //this is in pixels, it helps with fudging alignment

    //add navigation dots with classes dynamically
    for (var i = 0; i < counter; i++) {
        $('#navigation-dots').append('<span class='+i+'></span>');
    }

    //change the color on click and slide
    $('#navigation-dots').on('click', 'span', function() {
        //get the index number from the classname
        index = parseInt($(this).attr('class'));
        //slide the appropriate amount
        sliderMargin();
    });

    function sliderMargin () {
        //make all of the dots grey
        $('#navigation-dots span').css({
            'background-color': '#AAA'
        });
        // make the active dot blue
        $('#navigation-dots span.'+index).css({
            'background-color': '#006fff'
        });
        //animate the appropriate amount of pixels to center the proper image
        $('div.img-wrapper').animate({
            'margin-left': (imgWidth +imgBuffer) * -1 *(index) +'px'
        }, '0.5');
    }


});












