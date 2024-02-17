document.addEventListener('DOMContentLoaded', function ()
{
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

// Funkcja sprawdzająca, czy plik cookie z zgodą istnieje
function checkCookie() {
    const cookiesAccepted = getCookie("aminiCookies");
    if (cookiesAccepted !== "true") {
        cookieContainer.style.display = "flex";
    }
}

// Funkcja do pobierania wartości pliku cookie o podanej nazwie
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Obsługa przycisku "Akceptuj" cookie
const cookieContainer = document.getElementById("cookieContainer");
const cookieAccept = document.getElementById("cookieAccept");

cookieAccept.addEventListener("click", () => {
    cookieContainer.style.display = "none";

    // Ustawienie pliku cookie na 30 dni
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = "aminiCookies=true; expires=" + expirationDate.toUTCString();
});

// Sprawdź, czy plik cookie został już zaakceptowany po załadowaniu strony
window.addEventListener("load", checkCookie);

function scrollFunction()
{
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    if(window.screen.width > 1449)
    {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            document.getElementById("navbar").style.transition = "padding 0.8s";
            document.getElementById("navbar").style.padding = "5px 80px";
            document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
            document.getElementById("logo").style.width = "15vw";
            document.getElementById("logo").style.height = "100%";
        }
        else
        {
            document.getElementById("navbar").style.transition = "padding 0.8s";
            document.getElementById("navbar").style.padding = "5px 80px";
            document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
            document.getElementById("logo").style.width = "20vw";
            document.getElementById("logo").style.height = "105%";
        }
    }
    else if(window.screen.width > 599)
    {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            document.getElementById("navbar").style.transition = "padding 0.8s";
            document.getElementById("navbar").style.padding = "5px 60px";
            document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
            document.getElementById("logo").style.width = "14vw";
            document.getElementById("logo").style.height = "100%";
        }
        else
        {
            document.getElementById("navbar").style.transition = "padding 0.8s";
            document.getElementById("navbar").style.padding = "5px 60px";
            document.getElementById("logo").style.transition = "width 0.8s, height 0.8s";
            document.getElementById("logo").style.width = "16vw";
            document.getElementById("logo").style.height = "105%";
        }
    }
    else
    {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
        {
            document.getElementById("data").style.display = "none";
            document.getElementById("brand").style.width = "70%";
        }
        else
        {
            document.getElementById("data").style.display = "block";
            document.getElementById("brand").style.width = "80%";
        }
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

// Funkcja do wyświetlania pełnego zdjęcia w overlay
function showImage(imageUrl, altText) {
        window.open(imageUrl, '_blank');
}