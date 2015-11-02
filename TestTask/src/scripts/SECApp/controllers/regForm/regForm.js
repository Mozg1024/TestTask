'use strict';

(function () {
    SECApp.controllers.regForm.show = regFormShow;
    SECApp.controllers.regForm.hide = regFormHide;
    SECApp.controllers.regForm.toggle = regFormToggle;

    SECApp.wrappers.$regFormCloseBtn.on('click', SECApp.controllers.regForm.hide);
    SECApp.wrappers.$headerRegBtn.on('mouseup', SECApp.controllers.regForm.toggle);
    SECApp.wrappers.$aspotRegBtn.on('click', SECApp.controllers.regForm.show);

    function regFormShow() {
        SECApp.wrappers.$regFormContainer
            .stop(true, true)
            .slideDown()
            .removeClass('hidden')
            .trigger('SECApp.regForm.shown');
    }

    function regFormHide() {
        SECApp.wrappers.$regFormContainer
            .stop(true, true)
            .slideUp()
            .addClass('hidden')
            .trigger('SECApp.regForm.hidden');
    }

    function regFormToggle() {
        if (SECApp.wrappers.$regFormContainer.hasClass('hidden')) {
            SECApp.controllers.regForm.show();
        } else {
            SECApp.controllers.regForm.hide();
        }
    }
}());
