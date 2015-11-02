'use strict';

(function () {
    SECApp.wrappers.$regFormCloseBtn.on('click', SECApp.controllers.regForm.hide);
    SECApp.wrappers.$headerRegBtn.on('click', SECApp.controllers.regForm.toggle);
    SECApp.wrappers.$aspotRegBtn.on('click', SECApp.controllers.regForm.show);
}());
