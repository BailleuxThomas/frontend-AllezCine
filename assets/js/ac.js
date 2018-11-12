let goIn = $("#goIn");
let goOut = $("#goOut");
let hideContent = $(".hideContent");
let login = $(".login");
let close = $(".close");
let loginBox = $("#loginBox");
let cancelBtn = $(".cancelBtn");
let register = $(".register");
let registerBox = $("#registerBox");
let modal = $(".modal");
let cookieInfo = $('.cookieInfo');
let cookieBtn = $(".cookieBtn");

goIn.click(function () {
    hideContent.hide();
});

goOut.click( function () {
    window.location.href = 'https://www.imdb.com'
});

cookieBtn.click( function () {
    cookieInfo.hide();
})

login.click( function () {
    loginBox.show();
});

register.click( function () {
    loginBox.hide();
    registerBox.show();
})

close.click( function () {
    modal.hide();
});

cancelBtn.click( function () {
    modal.hide();
});


modal.click(function (e) {
    if (e.target == this) {
        if (modal.is(':visible'))
        modal.hide();
    }
});

