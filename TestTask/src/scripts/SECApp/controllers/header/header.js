'use strict';

(function () {
    var header = SECApp.controllers.header,
        $headerMenu = SECApp.wrappers.$headerMenu,
        $headerMenuIcon = SECApp.wrappers.$headerMenuIcon,
        $regFormContainer = SECApp.wrappers.$regFormContainer;

    header.menuShow = headerMenuShow;
    header.menuHide = headerMenuHide;
    header.menuToggle = headerMenuToggle;

    $regFormContainer.on(SECApp.constants.eventRegFormShown, setIconArrowDown);
    $regFormContainer.on(SECApp.constants.eventRegFormHidden, setIconArrowRight);
    $headerMenu.on(SECApp.constants.eventHeaderMenuShown, setIconClose);
    $headerMenu.on(SECApp.constants.eventHeaderMenuHidden, setIconBars);
    $headerMenuIcon.on('click', header.menuToggle);

    function setIconArrowDown() {
        var $icon = SECApp.wrappers.$headerRegBtn.find('.icon');

        $icon.removeClass('arrow-right');
        $icon.addClass('arrow-down');
    }

    function setIconArrowRight() {
        var $icon = SECApp.wrappers.$headerRegBtn.find('.icon');

        $icon.removeClass('arrow-down');
        $icon.addClass('arrow-right');
    }

    function setIconBars() {
        $headerMenuIcon.removeClass('fa-close');
        $headerMenuIcon.addClass('fa-bars');
    }

    function setIconClose() {
        $headerMenuIcon.removeClass('fa-bars');
        $headerMenuIcon.addClass('fa-close');
    }

    function headerMenuShow() {
        $headerMenu
            .stop(true, true)
            .slideDown({
                complete: function () {
                    $headerMenu.removeClass('hidden');
                    $headerMenu.css('display', '');
                }
            })
            .trigger(SECApp.constants.eventHeaderMenuShown);
    }

    function headerMenuHide() {
        $headerMenu
            .stop(true, true)
            .slideUp({
                complete: function () {
                    $headerMenu.addClass('hidden');
                    $headerMenu.css('display', '');
                }
            })
            .trigger(SECApp.constants.eventHeaderMenuHidden);
    }

    function headerMenuToggle() {
        if ($headerMenu.hasClass('hidden')) {
            header.menuShow();
        } else {
            header.menuHide();
        }
    }
}());
