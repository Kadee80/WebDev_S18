$(function(){
    var index = 0;
    var counter= $('div.img-wrapper > img').length-1;
    var imgWidth= $('div.img-wrapper > img')[0].width;
    var imgBuffer= 5; //in pixels, helps with aligning images to the center of the slideshow

    //add navigation dots dynamically
    for (var i=0; i< counter; i++) {
        $('#navigation-dots').append('<span class='+i+'></span>');
    }

    $('#navigation-dots').on('click', 'span', function() {
        //get index from class name
        index = parseInt($(this).attr('class'));
        //slide to the appropriate amount
        sliderMargin();
    })

    function sliderMargin() {
        //make all the dots grey
        $('#navigation-dots span').css({
            'background-color':'#AAA'
        });
        //make the active dot blue
        $('#navigation-dots span.' + index).css ({
            'background-color':'#006fff'
        })
        //animate/slide the appropriate amount of pixels to center the new image
        $('div.img-wrapper').animate(
            //css properties to animate
        {
            'margin-left': (imgWidth + imgBuffer) * (-1) * (index) +'px'
        }, '0.5');




    }


});







