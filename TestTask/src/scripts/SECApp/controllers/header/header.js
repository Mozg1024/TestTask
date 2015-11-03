'use strict';

(function () {
    var wrpAlias = SECApp.wrappers.$regFormContainer;

    wrpAlias.on(SECApp.constants.eventRegFormShown, setIconArrowDown);
    wrpAlias.on(SECApp.constants.eventRegFormHidden, setIconArrowRight);

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
