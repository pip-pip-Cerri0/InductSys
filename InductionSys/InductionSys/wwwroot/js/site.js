// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(function () {
    var $landingPage = $('#landing');
    var $formGuest = $('#guest-form');
    var $formLogin = $('#login-form');
    var $formLost = $('#lost-form');
    var $formRegister = $('#register-form');
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;

    $("form").submit(function () {
        switch (this.id) {
            case "login-form":
                var $lg_username = $('#login_username').val();
                var $lg_password = $('#login_password').val();
                if ($lg_username == "ERROR") {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
                } else {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
                }
                return false;
                break;
            case "lost-form":
                var $ls_email = $('#lost_email').val();
                if ($ls_email == "ERROR") {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");
                } else {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send OK");
                }
                return false;
                break;
            case "register-form":
                var $rg_username = $('#register_username').val();
                var $rg_email = $('#register_email').val();
                var $rg_password = $('#register_password').val();
                if ($rg_username == "ERROR") {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
                } else {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
                }
                return false;
            case "guest-form":
                var $gu_firstname = $('#login_firstname').val();
                var $gu_lastname = $('#login_lastname').val();
                //put check for company name. aka search database.
                var $gu_company = $('#login_company').val();
                if ($gu_firstname == "ERROR" || $gu_lastname == "ERROR") {
                    msgChange($('#div-guest-msg'), $('#icon-guest-msg'), $('#text-guest-msg'), "error", "glyphicon-remove", "Guest error");
                } else {
                    msgChange($('#div-guest-msg'), $('#icon-guest-msg'), $('#text-guest-msg'), "success", "glyphicon-ok", "Guest OK");
                }
                return false;
                break;
            default:
                return false;
        }
        return false;
    });

    $('#login_register_btn').click(function () { modalAnimate($formLogin, $formRegister) });
    $('#login_lost_btn').click(function () { modalAnimate($formLogin, $formLost); });
    $('#login_guest_btn').click(function () { modalAnimate($formLogin, $formGuest) });

    $('#register_login_btn').click(function () { modalAnimate($formRegister, $formLogin); });
    $('#register_lost_btn').click(function () { modalAnimate($formRegister, $formLost); });
    $('#register_guest_btn').click(function () { modalAnimate($formRegister, $formGuest); });

    $('#lost_login_btn').click(function () { modalAnimate($formLost, $formLogin); });
    $('#lost_register_btn').click(function () { modalAnimate($formLost, $formRegister); });
    $('#lost_guest_btn').click(function () { modalAnimate($formLost, $formGuest); });

    $('#guest_login_btn').click(function () { modalAnimate($formGuest, $formLogin) });
    $('#guest_register_btn').click(function () { modalAnimate($formGuest, $formRegister); });
    $('#guest_lost_btn').click(function () { modalAnimate($formGuest, $formLost); });

    $('#landing').click(function () { window.location.replace('Induction')});


    function modalAnimate($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height", $oldH);
        $oldForm.fadeToggle($modalAnimateTime, function () {
            $divForms.animate({ height: $newH }, $modalAnimateTime, function () {
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }

    function msgFade($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function () {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }

    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function () {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
        }, $msgShowTime);
    }

    var images = [
        "/images/gallery/1.JPG",
        "/images/gallery/2.JPG",
        "/images/gallery/3.JPG",
        "/images/gallery/4.JPG",
        "/images/gallery/5.JPG",
        "/images/gallery/6.JPG"
    ];

    var myNumber = Math.floor((Math.random() * 10) + 1);

    $(document).ready(function () {
        $("#backgroundImage").attr('url', images[myNumber])
    });
});