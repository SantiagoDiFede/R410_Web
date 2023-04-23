$(document).ready(function() {

    for (var i = 1; i <= 3; i++) {

        $.ajax({
            url: 'https://dummyjson.com/products/' + i,
            type: 'get',
            dataType: 'json',
            success: function(response) {

                var newProduct = $('.product-template').clone();


                newProduct.removeClass('product-template');


                newProduct.addClass('product-' + i);


                newProduct.find('.img').attr('src', response.image);
                newProduct.find('.img').attr('alt', response.name);
                newProduct.find('.title').text(response.name);
                newProduct.find('.brand').text(response.brand);
                newProduct.find('.price').text(response.price);
                newProduct.find('.old-price').text(response.old_price);
                newProduct.find('.stock').text(response.stock);

                $('body').append(newProduct);
            },
            error: function() {
                console.log('Erreur lors de la récupération des données');
            }
        });
    }


    var numProducts = 0;


    function generateID() {
        return Math.floor(Math.random() * 100) + 1;
    }


    function productExists(id) {
        return $('.product').filter(function() {
            return $(this).data('id') == id;
        }).length > 0;
    }


    function addProduct() {

        if (numProducts >= 100) {
            $('#generate-button').prop('disabled', true);
            return;
        }


        var id = generateID();
        while (productExists(id)) {
            id = generateID();
        }


        $.ajax({
            url: 'https://dummyjson.com/products/' + id,
            type: 'get',
            dataType: 'json',
            success: function(response) {

                var newProduct = $('.product-template').clone();


                newProduct.removeClass('product-template');


                newProduct.addClass('product');
                newProduct.data('id', id);


                newProduct.find('.img').attr('src', response.image);
                newProduct.find('.img').attr('alt', response.name);
                newProduct.find('.title').text(response.name);
                newProduct.find('.brand').text(response.brand);
                newProduct.find('.price').text(response.price);
                newProduct.find('.old-price').text(response.old_price);
                newProduct.find('.stock').text(response.stock);


                $('body').append(newProduct);


                numProducts++;
            },
            error: function() {
                console.log('Erreur lors de la récupération des données');
            }
        });
    }


    $('#generate-button').on('click', function() {
        addProduct();
    });
});
