'use strict';

(function () {
    var ctrlAlias = SECApp.controllers.regForm;

    ctrlAlias.show = regFormShow;
    ctrlAlias.hide = regFormHide;
    ctrlAlias.toggle = regFormToggle;

    SECApp.wrappers.$regFormCloseBtn.on('click', ctrlAlias.hide);
    SECApp.wrappers.$headerRegBtn.on('mouseup', ctrlAlias.toggle);
    SECApp.wrappers.$aspotRegBtn.on('click', ctrlAlias.show);

    function regFormShow() {
        SECApp.wrappers.$regFormContainer
            .stop(true, true)
            .slideDown()
            .removeClass('hidden')
            .trigger(SECApp.constants.eventRegFormShown);
    }

    function regFormHide() {
        SECApp.wrappers.$regFormContainer
            .stop(true, true)
            .slideUp()
            .addClass('hidden')
            .trigger(SECApp.constants.eventRegFormHidden);
    }

    function regFormToggle() {
        if (SECApp.wrappers.$regFormContainer.hasClass('hidden')) {
            ctrlAlias.show();
        } else {
            ctrlAlias.hide();
        }
    }
}());
