'use strict';

(function () {
    SECApp.wrappers.$regFormContainer.on('SECApp.regForm.shown', setIconArrowDown);
    SECApp.wrappers.$regFormContainer.on('SECApp.regForm.hidden', setIconArrowRight);

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
}());
