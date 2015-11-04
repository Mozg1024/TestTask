'use strict';

(function () {
    var regForm = SECApp.controllers.regForm,
        $regFormContainer = SECApp.wrappers.$regFormContainer;

    regForm.show = regFormShow;
    regForm.hide = regFormHide;
    regForm.toggle = regFormToggle;

    SECApp.wrappers.$regFormCloseBtn.on('click', regForm.hide);
    SECApp.wrappers.$headerRegBtn.on('mouseup', regForm.toggle);
    SECApp.wrappers.$aspotRegBtn.on('click', regForm.show);

    function regFormShow() {
        $regFormContainer
            .stop(true, true)
            .slideDown()
            .removeClass('hidden')
            .trigger(SECApp.constants.eventRegFormShown);
    }

    function regFormHide() {
        $regFormContainer
            .stop(true, true)
            .slideUp()
            .addClass('hidden')
            .trigger(SECApp.constants.eventRegFormHidden);
    }

    function regFormToggle() {
        if ($regFormContainer.hasClass('hidden')) {
            regForm.show();
        } else {
            regForm.hide();
        }
    }
}());
