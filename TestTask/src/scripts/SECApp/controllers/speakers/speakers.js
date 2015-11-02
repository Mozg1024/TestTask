'use strict';

(function () {
    SECApp.controllers.speakers.showStage1 = showStage1;
    SECApp.controllers.speakers.showStage2 = showStage2;
    SECApp.controllers.speakers.toggleStages = toggleStages;

    SECApp.wrappers.$secSpeakers.on('mouseup', SECApp.controllers.speakers.toggleStages);

    function showStage1() {
        SECApp.wrappers.$secSpeakersStage1
            .stop(true, true)
            .slideDown()
            .removeClass('hidden');
        SECApp.wrappers.$secSpeakersStage2
            .stop(true, true)
            .slideUp()
            .addClass('hidden');
    }

    function showStage2() {
        SECApp.wrappers.$secSpeakersStage2
            .stop(true, true)
            .slideDown()
            .removeClass('hidden');
        SECApp.wrappers.$secSpeakersStage1
            .stop(true, true)
            .slideUp()
            .addClass('hidden');
    }

    function toggleStages() {
        if (SECApp.wrappers.$secSpeakersStage1.hasClass('hidden')) {
            SECApp.controllers.speakers.showStage1();
        } else {
            SECApp.controllers.speakers.showStage2();
        }
    }
}());
