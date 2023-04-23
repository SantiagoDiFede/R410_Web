$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();


        var username = $('#username').val();
        var password = $('#password').val();


        $.ajax({
            url: $(this).attr('action'),
            type: 'post',
            data: {
                username: username,
                password: password
            },
            success: function (response) {

                console.log(response);
            },
            error: function () {

                console.log('Une erreur est survenue');
            }
        });
    });

    $('input[type="text"], input[type="password"]').on('input', function () {

        if ($(this).val() === '') {

            $(this).css('border-color', 'red');
        } else {

            $(this).css('border-color', '');
        }


        if ($(this).val().length > 255) {

            $(this).css('border-color', 'red');
        }
    });
});
