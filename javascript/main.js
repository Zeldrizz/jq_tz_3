$('.ask').on('click', function (e) {
    e.preventDefault(); // отключает основное действие ссылки
    $(this).toggleClass('active').next().stop().slideToggle(500);
    // slideToggle(500) плавное сворачивание или разворачивание элемента
    $('.ask').not($(this)).removeClass('active'); // удаляет у всех класс кроме того на кого нажали
    $('.answer').not($(this).next()).slideUp(500);
    // сделали так что при нажати на следующий блок у всех остальных задвигается на верх
})

$('button[data-filter]').click(function () {
    let attr = $(this).attr('data-filter');
    if (attr === 'all') {
        $('div[data-filter]').stop().slideDown(500)
    } else {
        $('div[data-filter]').stop().slideUp(500)
    }
    $(`div[data-filter=${attr}]`).stop().slideDown(500)
})

function typing(element) {
    let inner = element.html();
    span = document.querySelector('.span');
    fullText = '';
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 200);
}
typing($('h1'))

$('.read-more').click(function () {
    if ($('.text-hidden').hasClass('hidden')) {
        $('.text-hidden').removeClass('hidden').toggleClass('visible');
        $('.read-more').html('Hide it!');
    } else if ($('.text-hidden').hasClass('visible')) {
        $('.text-hidden').removeClass('visible').toggleClass('hidden');
        $('.read-more').html('Show it!');
    }
})