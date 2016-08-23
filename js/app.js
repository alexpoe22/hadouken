$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' }, 500, function() {
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.ryu-still').hide();
        })
    $("body").keydown(function(event) {
    if (event.which == 88) {
        event.preventDefault()
        playHard();

            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }
    });
    $("body").keyup(function(event) {
        $('#cool')[0].pause();
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();


    });
    

    $('#cool')[0].volume = 0.5;
    $('#cool')[0].load();
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
});

function playHadouken() {
    $('#hadouken-sound')[0].play();
}

function playHard() {
    $('#cool')[0].play();
}

// function doIntro(){
//     $('#theme-song')[0].volume=0.3;
//     $('#theme-song')[0].play();
//     $('.sf-logo').fadeIn(3500, function() {
//         $('.sf-logo').fadeOut(1000, function(){
//             $('.brought-by').fadeIn(1500, function(){
//                 $('.brought-by').fadeOut(1000, function(){
//                     $('.jquery-logo').fadeIn(1500, function(){
//                         $('.jquery-logo').fadeOut(1000, function(){
//                             $('.how-to').fadeIn(1000);
//                         });
//                     });
//                   });
//                });
//             });
//          }); 
// }          

