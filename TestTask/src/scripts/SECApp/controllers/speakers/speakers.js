'use strict';

(function () {
    var speakers = SECApp.controllers.speakers,
        $secSpeakersStage1 = SECApp.wrappers.$secSpeakersStage1,
        $secSpeakersStage2 = SECApp.wrappers.$secSpeakersStage2;

    speakers.showStage1 = showStage1;
    speakers.showStage2 = showStage2;
    speakers.toggleStages = toggleStages;

    SECApp.wrappers.$secSpeakers.on('mouseup', speakers.toggleStages);

    function showStage1() {
        $secSpeakersStage1
            .stop(true, true)
            .slideDown()
            .removeClass('hidden');
        $secSpeakersStage2
            .stop(true, true)
            .slideUp()
            .addClass('hidden');
    }

    function showStage2() {
        $secSpeakersStage2
            .stop(true, true)
            .slideDown()
            .removeClass('hidden');
        $secSpeakersStage1
            .stop(true, true)
            .slideUp()
            .addClass('hidden');
    }

    function toggleStages() {
        if ($secSpeakersStage1.hasClass('hidden')) {
            speakers.showStage1();
        } else {
            speakers.showStage2();
        }
    }
}());
