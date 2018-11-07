let goIn = $("#goIn");
let goOut = $("#goOut");
let hideContent = $(".hideContent");
let login = $("#login");
let close = $(".close");
let loginBox = $("#loginBox");
let cancelBtn = $(".cancelBtn");
let register = $(".register");
let registerBox = $("#registerBox");
let modal = $(".modal");

goIn.click(function () {
    hideContent.hide();
});

goOut.click( function () {
    window.location.href = 'https://www.imdb.com'
});

login.click( function () {
    loginBox.css("display", "block");
});

register.click( function () {
    loginBox.hide();
    registerBox.css("display", "block");
})

close.click( function () {
    modal.hide();
});

cancelBtn.click( function () {
    modal.hide();
});

if ()
    $(document).click(function (Event) {
        if (Event.target == loginBox) {
            loginBox.hide();
        }
    });

