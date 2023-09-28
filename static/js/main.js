document.addEventListener('DOMContentLoaded', function ()
{

    // dodaje cień do nawigacji
    // const nav = document.querySelector('.navbar')

    // function addShadow() {
    //     if (window.scrollY >= 200) {
    //         nav.classList.add('shadow-bg')
    //     } else {
    //         nav.classList.remove('shadow-bg')
    //     }
    // }
    // window.addEventListener('scroll', addShadow)


    // skrypt naprawiający nawigację (zamyka się po kliknięciu w cokolwiek na mobilce)
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.getElementById("navbar").style.transition = "padding 0.8s";
    document.getElementById("navbar").style.padding = "5px 80px";
    document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.height = "80px";
  }
  else
  {
    document.getElementById("navbar").style.transition = "padding 0.8s";
    document.getElementById("navbar").style.padding = "5px 80px";
    document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
    document.getElementById("logo").style.width = "300px";
    document.getElementById("logo").style.height = "100px";
  }
}


    // slickJS
    $('.team-carousel').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

    $('.gallery-carousel').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
});