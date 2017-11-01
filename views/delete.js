$(document).ready(function () {

    $.getJSON('/data', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/data', 
            {name: $('#term').val(),
            info: $('#defined').val()}, 
            printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('.one').empty();
    $.each(terms, function () {
        $('<dt>').text(this.name).appendTo('body>dl');

        $('<dd>').text(this.info).appendTo('body>dl');
    });



    $('dt').off('dblclick').dblclick(
        function() {
        $.ajax({
            url: '/data/'
             + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
