window.addEventListener('scroll', function(){
    let progressbar = document.querySelector('#prgsBar2');

    let siteHeight = document.documentElement.scrollHeight
    let monitorY = document.documentElement.clientHeight

    let w = window.pageYOffset / (siteHeight - monitorY) * 100

    prgsBar2.style.width = w + "%"
});

wikievents.addEventListener('click', function () {
    window.location.href = 'events';
})

wikibanlist.addEventListener('click', function () {
    window.location.href = 'banlist';
})

wikistaff.addEventListener('click', function () {
    window.location.href = 'staff';
})

wikiqq.addEventListener('click', function () {
    window.location.href = 'faq';
})
wikiqg.addEventListener('click', function () {
    window.location.href = 'crafts';
})
wikiqs.addEventListener('click', function () {
    window.location.href = 'balance';
})
