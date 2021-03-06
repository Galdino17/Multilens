




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

    // Fim da navbar

    // Modal
    $(".show-modal").click(function () {
        $(this).children(".modal").toggleClass("is-active");
    });
    // Fim do modal

    // Notificações
    $(".notification > button.delete").click(function () {
        $(this).parent().remove()
    })


    $('[inputmode="numeric"]').keyup(function () {
        tamanho = $(this).val().length
        if (tamanho===0){$(this).val("0,00")}
        tamanho = $(this).val().length
        $(this)[0].setSelectionRange(tamanho,tamanho)


        options = {
            prefix: '',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            autoCompleteDecimal: true
          };
          

        SimpleMaskMoney.setMask(this, options)


    });


});


