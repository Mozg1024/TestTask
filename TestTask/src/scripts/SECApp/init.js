/*global SECApp:true*/

'use strict';

var SECApp = {};

(function () {
    SECApp.constants = {
        carouselDelay: 5000,
        eventRegFormShown: 'SECApp.regForm.shown',
        eventRegFormHidden: 'SECApp.regForm.hidden'
    };

    SECApp.wrappers = {
        $headerRegBtn: $('#header-reg-btn'),
        $regFormContainer: $('#reg-form-container'),
        $regFormCloseBtn: $('#reg-form-close-btn'),
        $secCarousel: $('#sec-carousel'),
        $aspotRegBtn: $('#aspot-reg-button'),
        $secSpeakers: $('#sec-speakers'),
        $secSpeakersStage1: $('#sec-speakers-stage1'),
        $secSpeakersStage2: $('#sec-speakers-stage2')
    };

    SECApp.controllers = {
        regForm: {},
        carousel: {},
        speakers: {}
    };
}());
