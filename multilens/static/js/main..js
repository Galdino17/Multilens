$(document).ready(function () {
    // Atualiza os elementos para o tamanho correto
    var $width = $(window).width();

    if ($width < 1007) {
        $("#bt-logout").removeClass("button").addClass("navbar-item");
    } else {
        $("#bt-logout").removeClass("navbar-item").addClass("button");
    }

    $(window).resize(function () {
        var $width = $(window).width();

        if ($width < 1007) {
            $("#bt-logout").removeClass("button").addClass("navbar-item");
        } else {
            $("#bt-logout").removeClass("navbar-item").addClass("button");
        }
    }
    )

    // Navbar
    $(".navbar-burger").click(function () {

        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $("button").click(function () {
        $(this).parent().parent().remove()
    });

    // Fim da navbar
});
