/*!
* phone-codes/phone-ru.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("../inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        phoneru: {
            alias: "abstractphone",
            countrycode: "7",
            phoneCodes: [ {
                mask: "+7(301)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3012)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0423\u043b\u0430\u043d-\u0423\u0434\u044d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: [ "\u041d\u0438\u0436\u043d\u0435\u0430\u043d\u0433\u0430\u0440\u0441\u043a", "\u0421\u0435\u0432\u0435\u0440\u043e\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(30131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0430\u0440\u0433\u0443\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0430\u043a\u0441\u0438\u043c\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0438\u0447\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e-\u041e\u0437\u0451\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0417\u0430\u0438\u0433\u0440\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0417\u0430\u043a\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0430\u0431\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0418\u0432\u043e\u043b\u0433\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0438\u0436\u0438\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u044f\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041c\u0443\u0445\u043e\u0440\u0448\u0438\u0431\u0438\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0443\u0440\u0443\u043d\u0442\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0413\u0443\u0441\u0438\u043d\u043e\u043e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0430\u0440\u0431\u0430\u0433\u0430\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u044b\u0440\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0425\u043e\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0443\u0440\u0443\u043c\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041e\u0440\u043b\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0430\u0433\u0434\u0430\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(302)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3022)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0438\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0427\u0438\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0440\u0437\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u044b\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u044b\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a-\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0438\u043b\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u043b\u0451\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0433\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0433\u043e\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0440\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0440\u0438\u0430\u0440\u0433\u0443\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0438\u043b\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u043a\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0440\u0435\u0442\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u0437\u0438\u043c\u0443\u0440\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0440\u0447\u0438\u043d\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0426\u0430\u0441\u0443\u0447\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043b\u043e\u0432\u044f\u043d\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0433\u043e\u0439\u0442\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0443\u043b\u044c\u0434\u0443\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u041a\u0430\u043b\u0430\u0440", "\u0427\u0430\u0440\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(30262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0445-\u0423\u0441\u0443\u0433\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u044b\u0448\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(30266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0435\u043b\u043e\u043f\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(341)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3412)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0436\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34126)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0417\u0430\u0432\u044c\u044f\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0423\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0430\u0440\u0430\u043a\u0443\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0438\u044f\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u0440\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041c\u0430\u043b\u0430\u044f \u041f\u0443\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041c\u043e\u0436\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u043b\u0430\u0437\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u043e\u0442\u043a\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0430\u0440\u0430\u043f\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u043b\u043d\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0414\u0435\u0431\u0451\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u044e\u043c\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0430\u043c\u0431\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0438\u0437\u043d\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u0430\u0432\u043e\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0435\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0435\u043b\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042e\u043a\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042f\u043a\u0448\u0443\u0440-\u0411\u043e\u0434\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0440\u0430\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0411\u0430\u043b\u0435\u0437\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(342)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(342)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(342)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3424)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u0434\u044b\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0439\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0432\u0438\u0448\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u043e\u043b\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u0439\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042e\u0441\u044c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0443\u0431\u0430\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u044b\u0441\u044c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0440\u0435\u043c\u044f\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0438\u0448\u0435\u0440\u0442\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u0438\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0435\u0449\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0437\u0435\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u0441\u043e\u0432\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0421\u043e\u0441\u043d\u043e\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0440\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34260)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0434\u044b\u043c\u043a\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u0443\u0448\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0435\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0432\u0451\u0437\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u043e\u0431\u0440\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0441\u0442\u044b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34269)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u043d\u0433\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u044b\u0442\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0443\u043a\u0441\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34277)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0438\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34278)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0447\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34279)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0445\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34291)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34292)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0440\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34293)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0447\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34294)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042e\u0440\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34296)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34297)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0433\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34298)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(343)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(343)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(343)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0447\u043a\u0430\u043d\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34342)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u044f\u044f \u0422\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34342)3-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(34342)5-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u�~Q��~���?���a[W�/N`��e%�"��`�u_r�Lr��	�bԧ��^$��	��A��}?���$e�"p���'�2��,��6�^6n�sU��_9(��[kV�����e7R�w@��-��_�.�)
�&�~1�� M4�Iy��������Ħ"�H^f�:�llo-3J���c��4�ۨnb4���t9�<����T9�d�R�Irع{v�3�^�٦zBmF��3�fӧ��^�U8j��c�S݌�p��(�͝}s*4����0k��}����\��������S��p�<T�#��O�O:c�e�:}- �Bc�f ���PL��B�������w�{(`������>G���|S�D��pD�,�����*ÑJX��'� x��
K�T�`�d��qΦ$�R�:�;E0�R�CՎrG����n�O�^_�U���B�2����L��I]`��v��5�lRQ����G��>���cY��m��x�� �!3���rL�I��t��d��ٳ;;fSk���H�ު�ӵ���\{�2˞/T�\��$g/��
b��B�hpW��=��"��`G�d�&�H���;
���;V�Ҫ�ī�k]أ�0�g��h����Ej(�!e�R@*%�Q���X�))�s���
�v� �Om�hiD�,���e#U 4p{)�3n\�$�D~d`��R��8�c����O%N��<���[�R:�,߬ȵ�s�H����@+�
_��M��2�Y2dX����' DۧRQ�?ȸt�����V��V�DU
���aD��4k
@�w)���܂�^�rhj�O[E1��q�,h�'&���1i��?x��/�����dG�Rļ�mm��n���Q�)y/��;ps��t�P:�q�|c�C1N�e*Єv4RmF2�s�}0e�R� -7��6#d+�E�(����<4؞� 6���\ۏ�P��\1m����-X�# �ّ�5l=%߱��8u����2�{�P� �4ڔ��t�\/K���ʢ���?�	E�^b�ޡ(Xt��,0Мϝ����kFW��x��\H��o� ;eT�+�齱6�(0&h1�2��A�}(8dh#�������'^Tq�R~Ni��J[�F�B(�@�jb��eE�T]Xk1j���?��n�1�B��߿�,?|�h�M�g1b�"W��}q��Go�ȣ���-کO?��G��m�l&k�rGw<S.@T�dm�אKي��!�4�l�q/o^��.�꟢/iN�by�=yv�4;�ߖ�����D(f���&�q��@,�1uP������'� �QR.݄�RF5ż�{��'ߛR1������z]���e�~��;"D��j��P� ��3K^�)-��!�WZ2j�b��,�]���|����-�W��C��1��J�,���0G�Q������I��^���3�K�4�͈�	��bޒDD���F�t�����tCl�7��^����a�|)"���7�"[e_�PY�	�}�F���z'b�
D���y?d�'� ߞŒ�9�f���j;p����g_�����nV�D�B���_N�֒�p��\��Ðbᗭj|��HO���q��-��5��
����k��3h�A���L�uEs�U�)���J^8yw�_KOX<�G4�\��9S���;W�
��� 'M#
x�E�X��� u�q�֠��;!�&��)# �AW����_���NJ����A�H,Ax�r�PG ^ہ鹧�Yiτ(�p��H
TӪ<�?�w��}QAGO�,|C[���*E��R��(,�$j7�\��v�#��ȷ[���-Ц���i�� x~E=���y�dO~����"��y{�Rtw1�"2Kc_�pOq�8b�"%���}��[z�������X� P��(����8���9K�Ğ>� >�Ip`��14L�̯�I��iY�(N���{�!<|�GkSm�����1Յ�N����F<M=^"��
n���_�"���t�U7^��E����6h?B-*%<,R
_Ӌy�0gM�߲�x��������Dw&����UB�6�Y��xga�U�"�@��%K�N�z9P ��l��$xi�\�W�������í⇽�bU�MϜ�MT/w�o[��%ɬk���(27t݃"�&8(���7>	Y��n}�tFI�\B���E�D���.0{�i����X��dMA���U�KI�x4���C"h@�jT^�4�.>-����	�.����:�
&K�V�)6�p�`Y[��Z����T���!�حg�G�k'�&�$Yˉ�25���y;�!�LE89��%�6*���Q�����&`}�[<�5�#�2z�W+7�	�PyDm��f��Dy�����
-��	��?�-H&?�KF�`9��÷Sb��2��mA�� �2��C��6��}(H���ƾxV
7
��߇]X�
���XC���NkC/�\�V�	�ڒK!�u��qv�=mrA��$�F�ε���m�T�����F�"o��U&��q,����I��B/bv^�y(Xk�q^ֿ��c1ZJ����o�+�0�σ��(�h��T:��A8���49�í+[��!��j"�|��� �As�����H�]�5B5'��ж��!�@��r�
n���5�R�ۀw�Q��Gåi�X�%�E$ T��I�F�N�ZIؿIŃ�>�-
��f���P��F���S��O����ĵ�����ל�	�/d<!�V���^���a��9Q�"F�j�c�il[��r]�\R$7�$d�<q��QSf��I#����T��7�e�Dj��>kM%�6�N�Pfz�ꦄ8���R)��mV��}$�@&�W��z(�A��fpW�{?$���w�H]�?
�wc��<�ju�����=��f$5&9u������r�r��A��M'�zt�{q*��W��E�39�E�t�')։\���]�硄@�y�~0�i�O�e��Y[0��W�����f5�bV��q���'��f&�o���r�	7A��I���B������5*
��\|j����~̴ɻ���*ܬCp%M_0aT̝��P��~1n�,|�HC�>`!�q�?��i�X
��M��P��}x�n-#��rG�@�?#w��Vza	b�%�Zxb����eV�&�r.I��ߋ���y����ٔ�;�8� ļ�o��`�p�%.rq�47���p��*B��yi;#�(P��wG���-Y��\�D��w�c�\~>R�����'�`ׅFN�̶EѐN�̹���*����"䑕���z!x�����	���'t�9ꑇ�E4����p�t�vr���#��>O�F�Юy��)��ω̆g��z�{9
,���`/v�)!֢�OX�GR����RK�o�]����[���+'a!ku �<��w���\��Q2�`d>��	Rǒ��t���9U�t���Cк���R��y�q�Uo��F���h��̟��6ɻ�	ZE�A2ǾlI�9���084���5��3�)�뚇��E�nҀ��S�I������j{��v_�j~�oD�a\f<�'�����؉Uށ{ �M��N��P� Ja��+|�S����	'�5J`RT�!yi�wJV�X��h_��l����,�=�]aH�h�u���j_rV�YO܍R�
�����Fp!h���u��3	E��Y�v�C���2kLv�ju�0(�	C�}E3�q'�-��Q�h.l���7/gPJ��������4�RS8vG�IT����B��K���<�uř�M!k�fW�zC�*?20���¼RLlۘN��5ԣ��4��
��?`�
.���֦u^��!�j�n�/���C[�4T�j�ة� 3��5��醜���r��°�'s��nl�\T���!�L9i��0�jRPB����`���[@��E
Ձ%�rx_w
1E��8\�\Kaz�Q茌�Vͣ�	�0r)��`k�[Df�:E�= CFz#5�������o"m��-��xomvk����+�%;��} گ1E�D���L�K�9L�2[�`����ʕ5֭9�\�s	)�$a�������Ͳ��35��(퐒:I
�a%��G��d������O��B�\UK�:<����@�]�2:���\�d��0q�N�ĝ�Q+����3(���a�N];���"~�Ba��Z����6#����X�W4�D�oU0��N�z�4_�	�c՟4^�P�;��Gz�EAR�/�F�9;��H����HH���j�̂)W�Ճ\)8��9,��N��O�����%cɦMz3Dw���2Qm�<-xK'��#�O2Zn���T	zݮmZ
�s̝�A���iYMb�
\4���������Ͼ�uF�lU�Y6`ޏ�G�+�'�����E}��N]5��CڑE���	����ȫOGkF�7���v�ǂu�h��Y��|���*�>$�n��=�(x�]e�ݙ��� ����M���s�4��{b_�X���ڻ����%��@�`f^�) Z�D}�Xy��h�	�8Tz��p��Fd:�J����]NM�D�����O:��H޴or�Yō,�v��ve���H��$Ѕ��� 7p�O�䨟~r��JȪrq^tϖ�g�K��a��G��ӌ�4�%#N2β�|'�MZ8��ECW�!�QTsӽ'O|�",��
��?B���7(�$⸩t���D�{���
z�6#���3<(�� ������)�Qvu��&����u�U�ի�"g�K6�0n�-�z��7�����_��A��Cz�n�����a6�����zc�蒧�0-�Cd �f>XrA��EF��N*�APQ'��~�n�Fv#� �bOJZ�Y��
��2
�p�+o��ܒ!u���/R܆N{�_��ԧ�8�H{���0��C�ܰƂ��B�������i��x�$h�@@�z��bW	\Qb�v:��ov��/L��Yu�����QTl<��q���v����?�
㎇�x�c�z `8�+�����D���0Ԗ���R��
7���{��w1[Q�^�:]`|}Z�$79�
��a�NuI��^��-(!-w���D�7�L*�����ە&�y��C��´�nۑ�%��]�=$LwV0V�*�4�2�����+'7Q�U�7�<3`j-"ΐ d�C���f����Q����ZRv��%�%���,��Ѐ�@�Qu@�X�]س|������K������j������H�Zh;ϛ���V[G�&=�D�Qd�g���N)��E�I��7ˈj��,��<��Ւ.K�c�ܨ���W�j�����%���\��N`��~M��d̀x-�ӐM�#�:�a��A��Um�~X��Q���6�K�4\�C�
�2�I}�/���m��H��$Ӛ񳑺����57��{[3��.]���^P�K�y��K0��<<���Kǩ����4"GS�T`���+��fU�r��1�����P0A%	�Jf���"
��Q@$(����d��C�)��<t���n7�CV^@W;�D����g�;���x�j8���!�=9D��#`��4(wE���RphM�I���
�w��KۃE�o���l�5���9�n��� ��SV�7��(�5����Q�ܖ[���mh���7�T��K�m����@�����oD����a��+��}D<qN��sY�n��9LTm~��	���4����N��0��7"W��r%�F�
v�O��Ԅȹg~��8�M���Cq�f��@� �j�X�{+�\�w� :������6�<s%G4 7�����>E[�q
��d���3VB ׋�g�ě)�d��
1�&M�L�2�[%5�Br���V��
,�J;��hh��吼���~��̣dI��\�r���������@�o���{�z�����M\�j��I'��b����^:�U7�.`|�ўքe���O
R����ssyL.��ԇ�V��GF�dDr<ݺ�`����p�a)�`�
B_dʁm���ĸ����X�`�V��»FepW��*��s�r�es䑩��Rϴx,�w�`,�b����:� '��1I�����4 �,�o�S�=3�L�^Ҥ)�oa�T��>�{	B���P��͔����8#�uD�V��3�[�g"�O3�2��:n����<mbl���Uur�X�R�v;�\�_-�kE�+�� (�BW���	{�g�6Ha&Au�����Hh��l$IQ6j�q0��4Whz�=-V��H]	�����f��� ��{囒�7'm�I�9|1b�/�t~�I��$�y��\y��4�|v	0�ny>,fa�s�N<��B�˦������=5z)V% ��b��x{o�Ж�P�!k���ߖ�`��j9v�H��aMZ����;:�XΓ�?js�.��@�J_)����O�pkR�V�w��/1{޻/��{��lx�6.t�p��3�>�z�.bv�M�E��v\�|<5��N�A�V�;^AS�;@
��jn�܊��UD� ���uX@GT׹R�u�&=0}=�~�{%� p��Բ��e_b����+����O^x)ĤU`���M|{JO�72�	o��I�V��#4��L��;!��������-�H����&ՊS��x�zOuĘ>gyl�ʼ4�!>)ZǤ[�̱�4:���UC\Ҧy?O������y5�k+5E�p���Bv�� �%dt�D�Xo��p,7����d#ZEN��fH:t��ai�x�m����L·���W���ExUv_��f�O'8��L��<3�)A�[JxF��J	��|�l[(�S[4
���a��H��y-՞�"�%�3Gr*L�_A��k�F[�A�h꘷w�e���P|9$ snᐂw`��!]Y
�/�(��+d`�k��F�d ��>�̗�?j��Z�7uJ9f��ֳ�R�A2x�-���vm_�]?���u8���w�G�U
%pd���˕���Lc1D��U�>/g�VV�6&+����?,��W���(5Ky/�Z�0_4U��v�מ/�bn��������>B�e�bP�t�'����fOK�i>]�Ѫ�F��F�O�� )W���$��@0�T����a���H�P��1�{(?f�Y4-{��TW�_Y%8N�-)'�I/
i�ȡC#�d ���M^�IB
��A�ݠ,�{�X3]x���wOWH3�;��8����G��6d�C�Mg�		��lIv{Ӓ��V َ]<�z*B�e�����_����`
�Z�@���Tc����:�2`@)1��Č����ўu����gQ���W���G�|��Sx,�>���9���MU���+mx	����,`6EWH{xy�PI���
��`����u��8į ��j��?�ўr�V�7Vyt����_)̣���� ��H�`��WB�z���{���k��e�,��H�,�<bx�/���.�S�d�Uw}>m�[J�KH���.w+�����z�[cƋ��6�K>��kM�l�WcYnGt`Y�na;�5�������`�-�慫��C��y >��0�a�����(6��eH��:�G�ͽ��k~ۀ��|�a��L������v��i2�Z��%�ULS@��&���h����eʥ�W�8�N\d���r��0�&i�C^� �x$�TTy�z���
���)\]|��� d&ܿ1o�
�}}��
������hg�!29�S5	6�҇����{�+��G��u���;ȈS��}�*˵!!�8AG��m���Lkq<hw����iэr�
��3LN��n�H�}
;JA�Α�J��^����s��w`VsK�B4��WIВ->���"?�,eڴ�������<KbT�*QK˳^�	nq�&ɂ��e��s�3�^Fk�g?���ܾ�eY��5ia�m��8ag̲��motg
:�ur6!bi�ћDBۋ-+L�#���i�<Wqu#�%|�ۣFD3�߿��~���S/9�h��V�	������4�!}��LT�9
�K�o&Ղ2	�/��&�h.������5�q�2b��9�cn�@Ɲ���&'��,��C�ȅ��P!  �y�Lh�\g=�r�[C�P���U����)rx���V��ʾ͟
�cʒ��{mCn|b�[Ƕ!����� ��
�-Z_��O�o���[6���� lY�'詯U��Tb��b�U���� ���� y�A�d
5\%ת/�h�D�k��8��DJ�\��=�釓�� ;x���H��@,�*E�s�'��YZˬӛ�ɍ�U��(�=�x�"'d�;E���}Zאo�b���������*B�'�)5�Bs7!�$�Y�)Z#�� �����k�O�B*Y��?����zf��@@эiJ���� �~ ���=�`2��hS�%��;��39�-���!p>�[}�.�{&2TJ��Y��gxc�@�Bpj{�ݒޣQ=�}�j��+�@�`UM�o*yI:~��q��$�-���A@��
��F��I��/�D�
���I��*|�$(g�*\��8܍R�9���������=��dm�l���;�
܃$������
���!�����j�NQ�p����u��+\pNSO�ٜ\Ό=X�&�3F�i�Ǎ��V\���;mr�4|���Y��oG �ͫC��$��Jp�1�0�&�耟�%�b���R]�|.g4���ח|�i�
��xI�|�K�!;�P�!�`��i�ޓ����~jK< ��Q&,��C"�:�Yc3�OA�����>@����V1_��C=}��PVn�	Rk�xE~�
B8h�+��@ݏ߉�F�3��@���q]���&�	��?%���]�s�n�]^�((���69<�('���U<�h ��A<�[��U�au�x"%��t�Sr��%ё�`�*����wO�@�C�LS�}���M����O(d��}l�$�*q6΢��OQ����A�w��_C�7y��VD���^�Sz�A�:ܓ]�4=�1w����6��Q�iO$����
&MK�*��n� � �
3095�HO��֯��9
4��Gd���
��H�Q%�Fw���U�kQ�����>�8��#�EX4�L�P��	�p?��Y�۔}�B����䏔
Ћ���#�6��~��[�h�#�f�Q41^v>(���:ִ�}�u��h���H+8A��l���֏B�4R ��tz*��LJ[CL�(
�����/j���<V� p�}��� }��T!�O�
$8h���ΰ�!c�v^�jY3˅����vE8s�k��4	�<�.���v+*2\��}�N��4+ϱ	Rs	�Y���}l�.r���U��j� ���n⍊6��Ǜ��h��4�8���fc
��g����R���õ:"��	n�{��1��B�Fb����`9r�2��������1�Įgv�V��:9S�Wl�㾨c?=4�;��tT��i�����u�.*���������H��4p�*�g͖����έC�r@E*�U���g�<	�2��3�b���
�J#a)$�嶎��6����C�ސAJ����)�NR�3��اr����ø�$uVIJ�on���__C��	
V��R0`H�F��K�=So�xS���Y�n�x�8��Љ�4��
�o*�)�mȈ�ą�x�U4D�d�a���+
D�	pn@��c���Z�p�A��A��Kϻv:��H빙�$�Ƙ<�fb"P�mfܲ�'R7/=.7&9��
}�E��4N��C"�Oq
H<
胝��(���\r��!��Y̴��D<+���te}���d�?"��6��yrJ��=[�dx��=��tO!ӭE��l��s���)u��*��IF̵ӯjW/�p�ӿ~k��H�?�qP��?�n#�&�\���5M��n/1�W��,��
w6�9^e��E]h�};���V�ۄ��3� �T�h��iZΒ��
Ǫ9Ԏ}b�!e�3����_4I�O8pb �hC�V	����8G��=�~cq[Hr,�[m[�,a��ǆ���v�N��|�.)t���S�H����O�5$����0s�h�LM9��Ӌ}��JNMJ���T�Ҁ�0���)+w��I�)��s������G��kSݽ��!��z�^�Q��b��94`���5 e=M``�-^�u���r���26 �,�������Fbtv��jЏeYXakzǹI}�i���o��`�}9��}�R)�i� R`I�����q���"�~�����zeĘgP���b+3<y%�wla��Q�,q�\eF����:�w�h�����og��G��lYU�H�O�~[��BR��Ŏ Y:��&Yp˲L�ڗ��z�~�s��F�T�:�[yl���P����D�,!��i�վb�x���!X��*�n�
y��hz# 1�\Ԥw7�(������{d�IW5����Ȁs�l�Zǚ�^6�a�/G���p3��k��-��1/h��oP�xBO���"��v�/�NI��t��.:Cǟ?�< }�����C`����@b���˄�����)�3��V$�5p��"�?ui�D[NM��2���<癇 1A���K��,����@�6�]J6���}Z���?:2�C�{���\Ye*O��c�1Q�4����ԇ����
�����	ڶ��a��}�;kUN#q2�;v3j�O}�|��(x	��J~ᮯ !����^A��<s?:>��
>�h���<b����H���Kolc�f�N�4j���:��|�Ļ��>3!�l��auc�j����1�Wt��K���R����s=U��]�a
#bzY�9]{]K�N3�����t,��I6Nߢ��!�,�Á����\
ă�H�G��	� ��l����O�R9�JSb�Ѫ|w�BX/hE{.p�j]i�ri �LS�N��Ӿ�
�S� Y	��=\w�U���w��O��x%����{�hQ;��|��n��t��h�;�`9��/c9��/&A�5���	E��ѲN�@|����u^�WKy��z,UB�����X������\m�@��_�ϸ�LU}͔�x���k���p���uQ������S��ZW|l��ݤ
���H&�:���'�J�L;�ـ�7��S��+R�ř�⋀Z05`Ք�n�F���&��|`�U�1�=�gJ�>+	I{
��툾;ȝ�%����[�O�O<ڧ���/	׭��}��s��s��h$b�4�X��S���ʥ�,DV�����������a�VAm
T�Ic9~n!���=���� � �`�N��@TT���i��hKX��⌧Z�̨JYR�~��@��}�K�tu�t� S=%�[����/�d̼q�?�jlαR"|L�FXy��~�-*�R5��{�*����"`��Y�Z�߮��@��C�|k^���?�z��a�I$Cď^KӃ�,w6f��u������e?���h���1�V�S ��0�4�~�%t1v5ʲ��l�������Ks�zB#�`*�ũ����c6�K�oώ�j]tҧ8 ���%L�^X/�,���t�5@�Ȝ1j����^�7c5�
�Mc���	OK�ɝ�ɶ5��T�LoV�/�s��%TT�����g��F��m(�n?�\R�1��-��4t����B>�S����6�<�Ƙ(�I��t�RY���*�BR�:6�;�ky��	{�.�J�$�L�,�ZmXL��f���Q�D3�|������zsZ�����ח�s��Fr$�W.��t��A6*v���ao`+��#�IG�Gv8��%�v#c��r<~��iYw�����׍��q+���a���m ���$���괎�F"L3,������1�yK�[��[4O՞٨�'�r|A��nsM-���
,����W� u����Ȫ�����a5�V���x�,c 6���3!����HH�l������������aŷ&���f%2�c����0�93���=0��w8�4�C�KH����/�\@"�����:�����h�������7
�[�;`���F9(EN3�e�Rf��]H�~kms8�v���x�lX�7�p�n����XG���6�(�����*?�"A��)
R>ū�'=ڳ��=B,
Q`���.)����2u�pϒs�ɱbUtg[���wA�c6��t� +�o=�<�q��Y��gn:���52k�\�%ڹ��2yṞR,��Ӏ����~�onԳƔr<o�@����|d?PW�������Y#lG�"J��=��}�7�I{��e�8$S�J%?�\f+A���W#�z��A�����4 ���YF,F�A�^;��Aa�9�̌S���I݇�#˺�ǧ����G�t����
N*�4{��e<u'�U�V]��-�\#P��J�ɱ����UE��hf��[י���Q�Z�7�&�xg�n��\�����D�yIw�҉s=0/ҳpb~�Rv�n��,2�ˎRK]9,���F�cNm�gG�S<�Ͳ6*l����k�����
Ӡ��X�$e��e�ܕ˚c>�6��{(�ۊk޽�x��� )GKj�35��5�����V��^�ۋG����et�r7����ͷ����mI^c��gZ�����)=0�)�ܚ�?�AUT~����������.,ҽɋ���A��?+M�8Ip�ۂ�9��f��<�2�Lp��{��;)��w����Gk��k��N��	���%*�@_e.)�t���7�ߡ� ���݃�{z���~�a��F�j����[8�D��q��{�M�$�}��{Ix�������J^\.������,�(��9�05�.�z��^I��f�K2I�����Z|^?�V@wq��4�z_�3���!�G8��>D��℮�]�
��lFN�F��t���*Py'7d$���9ZH������"t�ї �&�]
��uJ;�=������+��I�#�آ
O�.��
�"�+K^�<ϖ�e����i����:р_���*��Ԗ�F�*��
��d}o��@���&����EM�,%4Bb���CR�d+ñJ_�jG;���aG)�z�8�Z����ʣ�8~M��B7z��tç��xg[����.����f�r��aC:⒁t�1�a/�A���+{?�Ġ ��Dя�j��4KpJ����^�H�7%σ�OI�ߘs�8$ ��i�3�{@M��{A�'|�;�}�5�(
���ݧ)�w�����?KC�=�D�h��_f�WR-V$��RG��
=��������K�4{����8߮?�9�+e�u4��E��X���0\�8iֈ�29�3��<Oz~�r��8rw�f�.{���,󱌘7��K�=�8NI��$C/��\AF@�rǲ�>љe��4e�nӄ����2���ݖ����dfn��<Bcq�Yϕ��u^�_�0g�XYi
��a&�K	.>�'� #P�M�pJ�q:���X�Ri$�,2���
dP�y�"����5&��мs/7�U欫e�#EO�7��ΜX��n���|u�ڊN:n\�t��r��B�A, �¤�|x�������sgV)�~�M_I���v"����l`xpE6�k v,:�D�y���G�s������l�����j@�;��ݴ[���GMD:[�|,M�i��u&�&��GZD���ql��a�&��n~"C��
A���d�T��'�Z���V��E��]hCh��?��JN�?e�F�� u*�:����v���˷�z:��h��-�q���ҳZ�8���ou�AH�]B�.��@O��y�3���M��=/:*Wt�ԛ�`��C5�
�����υޚqx�fN,��e:}�򛯬���2��~���C�B
���M��S�`k��	��a�O�P*Db���i婖��/�Mxu/�tOu�!��=�Ck�%�Fg*�pk���I��Ne���‶�	�͛e#��ƺ�;�x(��P=Qĭ^;Fb8+jW�����7ɔn�	7h}
ⵣ���e�ĩ����խ���`;ځ�~A)Y@O�e��Wyꞃ�3VYӰ��%/m�y	UX�b&� V�4�/n���m
���=z
2�2/7�z���}a���k\�EXw���To�%z���:�J5��8�� O=�!(��˔P��c��2_��'��EN���PK�Qk�U��zu�O4��0] ^�io
������Ǳ�Rg����D��1��$S�}���t5à�U�ʣ!�i�jHh�6�c��ў�W�����<�N�\Ê�r�|T00���<���/�	��m����s�+�@+e�j�;)�y#�Q���u��.��b��K��Q��NENC�(� 2iⅣ��_XS&�~}�'�Y!.#R�2�ݜ�����:��Hzz�w������S
�1�q�KH�8%,^��Q��pe�m�F�Ҹ�5�]B�i��li��.W��ܧ#�~LZ�ڲ'��y��_�v���ozx8�kY�*Ⱦ�͙l�7x40r�
a����G�F��ȝ-rCf�La���C���n�{��;!|w���x�����'A�=E08Vp��fv��uM�z��5�8|2�4�o�Ӻb`/���Б�Ks�d�BL�ɒ�Ù��a�Z�m�iUr:˼��$������/���d�;;]�Ig ��S�8l�O��{D�fRt[�]�t�I�θd7#zH�qХ�h�(��V�����=n��e�7�~�(��§���xcZ�i�#)?�&����L��:fq5'�)�~3�Bҙ�4����y;��y� �W\�F�*�w4���&g4!7�`�v��V�x7�`*#��Mgˎ�;�)�
�F��vL9�dΑ��'��^R>y�n]�'���y"h'�{��)_ l�z�΋T�aX�
��UJ\��\K�Ģ��ڸ`'Z����U�NA��Eƨ݌,��0J_ά�w�Zq��[E׼�"�n�̷�
*��5kA~�8��;tR��9#Z������*� F�D��9ѹ��B�E�v��	�JqPN�c���4T�;)+-�:�GB��(��f�T2x��AhR�Ҏ�U6٢c^5�����+�H�CGЦ<6�,�x1�%����u�!��֝�S
ڱVUtY����(d��k����{\"�X� ���g�f�/��V)k��
�_��dY/+1qT֯�%�0��\�Ih�h��	~Bh��D}@��[z��
o5���C�����O�Ӄ�e���Y~���?��հ�P��c�!U�'@q
�U4�#�lc��a)f�j��=+ �K�K�oY&T�y.�[�HzK�]���� �L�Itv�:\;�K�o��(��|�O��e���y3ֲ �|Z2Vyک�1,.�|=N`��)\���~�<ެ�4�2l��sy�lZ����$'t�����?$�D��ܴ*��(������ő�5tb,�,g�i4��
!�p��yL���}ƒ�wC�Ǧ�0�F��945/wq�X^�ڪ�s�W1��=�E�{%�?X���,��ǵ�!�a,z�n3)6ӏ�$��F-�-	�S�F��Me��Z
�
�[{��a0�E�ӵ����}��|�r���9���1�:��^0oǤ���(H�ՒL�V6}Wt�n��@���P�
��mm��r�svɐ��
��8^œ��J�u��[����o�� ��P�u�Lԗ��˜[iw��R�B��B�x�Z&��EL�ݼ7Y����yw��}lc��p�
�l𓯻���34����:�PD	{�����"���9r���m-���3.�+Kv��
~����fm#�鎹��u
�$a���i�;���f���f�8&�=QC��I�#>�s�p��^�G)!#�*wVKGr��T
,ȂU^�]O��� Xz�A�럀?��̅�]m��AǚR����Z�j��:��vA���;���n	��u���2W���V����XT�S^�B�����U�� #�)�������fy�y H��)��Um�/�&0[ n^mv��{�ш��#_�;V|�=n�)y��9�K��J_��U�)=p�i�&Q�����q�';(uR�h��2#	� �=EWnp�ЪT��s
">p��~��m﷖�n�ݯ�8~�>����6(����
�DN������_&t1��TبR)�v�g�ڂ �y���K����#�U�
�
J��X8�a�Kj�,{�M��U�.ƖΆcw0�0�&��q,K� ̝���Ӫi�]]-+w�N f9�AK��q���ѫE����ն�z���N
�<u�3�������Q�c�/������C�Z�uƄ�Ժ#G���ǳx��v)�]�/[�+��UeBV�܄��]Z�jG&��kd����q/A��l�_�;@��ˊ��k�����l����U���p�#攷�P�<
��R�(w��Ǝ0�,��-��
�[�
�Q��D@�V/���\?Z�6���MW��U	?ʭn��mP�/}t9i#��Z�<2�	���*���w��U�a����g� ����*����Ԁ�r:=r�a������̮�[v����Yk�N��v�U������ J�ن]\���&���ȩ.{;V�X�p/a
S
����Y��ͱi8��Q��X̞�FI�h��_�;��X�u�A�.�
�&��0��	w�
��3X6�!��R�/��}Õ������U/�<	�.��XC< �1���&�I�Y���X�վ���W��-����0¿�fiVI���"���A'T3$���w�_X�����NH��R~U6;�薖��Y��0;�/����4=n>����a}f�.ȶ�W�r����  K���IO$���t
�z����;9�G��������T|T�%��qn#|���� �]��\K�H��M'���hGJAS���RU�3ԲW������UKܒ��b�aS|0�p
C���[c�I���ê�+� GZ����&33�Ma��|Ǫ�'k=2F����0��X�Ji����R����u����_������k���,���Ⱦ��s]��C��g�z��e}ߖ��m�ص�=>QX��!�D�Vr���j�ð��>E+�����+8='`�T��~�s�C�w)v��"�h������ى_��������Z�֘'����1�Q�Q�-���YB�k2�|�:���H饀(8U~��E���F�޲��l���6�Em4�`HP|�Y���?��Mkc�~~�F$����s�����y�D�(~�[�On/NREna�q�����I�9�'��٢�k,m��u~�p�I��ށ�H�S�ϪZ��mgw�caÑ9b����6ŏH�1�Qi�I?4����izw6�Y���IP��m�<΂o^tV�GlP^:�o֚���ݑ``�Bt�kpE��F�B���s�ɍ~k�ܣ�IDM�d<!���f�`*g�IA��NI�}k��mÜ�2r7��޻+FQH�6�P��#Js�R�u�
��< :D�d�PZ{�x-��?��.z�E�����)�΍G�[$Lj�3��v���m0�|�����Pf��x��u��r�>����z�\��o��ʸ����R���%��3X*>&�
��	I�h�v��ɅE(�" "�#x�:3���v�	
�oA!�X,����w���$��SxY�J���Ɩ/q.x��k���o��	�f�gw�7�'����o��y!�#�TO�$o�`W8�O^���'�������rǰ�.g���ݙ'���ݴKOP(�#�}��d��˔����@	F���_x��ӭ�
F�|����/܄�(o�4ɜ*ꄋ�5���^,�^��X�4g١�I7O}ӭ�&�)j[��&7rש��!Z��_vz�b�X4�dQπ��U�E��Yjɘ�h ���V��{GsXJf��Z� !X����k�P����L���h�:]ē��Ո��)� �!B�(�_&�s�N=<�����Q/^��96�lK.���}����
҈��~��x�nc=&�"#1��nW*g�oO�o����Z���Ģ��̤�u��������~�w���W�SH>��څz��n�Y*36Vi*pAj��1��]Tƒ��j���C	@�Qi]�E�c1��9s��r<g����!4��-Ü%�J&Qwh��H��f�q��R�� ��;$���[�!(�Iŝ�	~=䘎�Er}F�L��m}?J��6�l��t)�Ҙ��X0�E`O~���=���
hd��������_�۰������$���Ȭ[il���H[�Rz�N�vdV�`�T��C}������IF�[Ř0�Q&��\1�8��Ynj[��������(���Í{ۏD��	K1���Ȝ:W�R���1��='�m2�P����JX�W��~�׬�4�Y�7m�f
�ǳ/%��%>����������&T�%�t���&d��r�H��GO���1k,�ƕ�̏d�1�s�X�
��o�||�/��F{�GNѭ�e�&h?0e
p��a::�i}9X�����'����b9���[)�=�� KKN�%0�p�ݴ�}!�5���x?SC(I�%'! rg�
�� D��V�<;�y�v�Y5tcL��B7��
�[�ym����!x�;qV���S�䙨),�y�!�WؐN
h��X� F�Dx5�-�5���E���7�{ɼW���r��s�oΘ
%`�D�$#�1~�Wd�S��-�r6�I�/-zcL3��(�j�P��c��*[�,'
�������ef��>�i�K
j��s 6"zU��g�^�����0�C���ݵ��so��
��N�zN\nC01T��3b�8zZys��������IjC� ����'!G�CywH
��_Z\���ؙS��}V���3��C}�N[���������T���[vu�v=Y쬢 OM�(��^o��ۯ�W���B��.MB��]t*+�;k���i�N�ئ'���АX�mq�1�����g\S���g�L�I��ܿM�#}v��BQ�a��s�@���)��h6�f�G���.��(^U���ږN%Gş�-
W	Մ��Q�r���N-f���@D���O��ǿ1��&p�1��	Ȟ|�/����bk�`Ϗ�T�Q2��0Ȇs(��5���|�k�V�λB�طz�=)�
�-ڞ��|aÅɤ�#�C�������g�}������_���f�#|O;��R����� Tan�Z�@�$�y�S�+��c�;=�W� ��|8[���XSm�9�{Q��LT�:!V��
+M4eS�����7Z�G)9�~��:��lzUi,�fQ�?���fgBg��܁�v\]3��~;��PV��Tq��Vpv)�R���ɛ�#�5�L�u2��s�˥6&�rv�'袖�S��&XB煉�3�X�$�T8:K03�::��o+�uX9^�p6�K���<Y�3$Tj�U�S8��
��O��֑0Ӽ"����T,^�hZ��)����2�} �#$��&����׎=<̨��ʙ~����.��1�k@ȏ2�d`��g��jj�vȇ,1��'R^=�JJ��N 8$�O|pu_IeG[tZ{��|�x}躢�X�դ�	F�&���P�nEg#ݚ�P{�S���q:Tn�s�[%.���e��ޥ������-0@��ޗl�y%J�o�pG���B��@L�s�f��B�׼�9%��~LX��E�f � ��gF�9�Z���
�E/�*T�S���Hw��}n;����蠚�Z����u7p:a�ݪ>˿k���`İ�ٮ�}J����ٴ ��iθq̦��d�ʮ(=���p��o��proɵ��2��q&%l2�ۤ����X
�(_�s����dY�jt��s
��hx
p�g3�G1
�W/��њK����9��5hQ��%��>aJ"8��F��׃��Wa݌����Ga�d-����q)�(z�*��c@�y���|j�[�	�}���|�?{�_��
ԧ�걨�b�Pm�^Z�2�r^X;��"p�ٍ'�\ݧ����.�P�b�B�\	��R����lO�P>"X/@m
�Ht�+��
?�jO�# s�\#߿L&UW��$O�	~+�T�����#B�T*�oo���-�&�kB���}Eז�#��_G��wG�Ӻ�{L[jn[ d��)Tn+_WL�]�F&� "1����R��a�2rCC�
ϞN��Vn�\
\i呄֬*yT��<R�+��\�K�6�	�)UfI��-�W�+���z�oa ��ʅC��X�G��]�^�(]+��}s�����f#|1� [W���5{�e|���Q}$2�o#��rX�|=^P:^˼,ٸr��x�73�|��+b�?Ѡ9�aБ�-���W�t��VƝ�'L� �'icw�հ��U6����b�\��n��,�R`)yН?�6�oY!�޿)�L�����""�U���a&�):U��-��g���nxh�a�U��T�4�f��F��|>�޻T��؂4N��Ϲ.j̲y��D[n1Q��e��E�C���{�}��H�%���l��nu�Ĺ,R�$��Q�� :��a6ktn���~ �r�D8A�?�9`�z�v��ֺ�6���
Yx��]{(3Q,
@f��e�� o�`�3{iNePg�)ě<F��6O~��W�<˚�P�b�a���y	�W��n�=6f��Z6db����~\#D�Vc�w==�֞����x�*y��<,���rt�_p� DG"B癧����1J�̜�O�U��gkRW
wqҮ!�7�(�]��*�
~\{���j�"
��7��{r�d�͓�Y.^�'v�����d������'�8��_qm[Ĩ8�P
�������'�ׅ@%�Fԣ�¬�'���a�.g��dļ�͟_z��|�k/�5a��z�}��<��)����"��e��"��!�._�e3"dZ W�Ȇ�Q�	�� �J��� M}�zl�}ʰ��}�\W.��@���&P�Q��plA����ӟ�yd>me*���v��`ܙ��:b� W����s���0s-��]ub�����:R�*\�;�,{�>�ZPIS��Y`Sy�2�O�B��yYp�d1����b�;���_,L�������>�eC(����Q�Ιe��M|]{zȸ�z�O�����5DO1�Rw�́�\v�(��cw����SC�A}Mb]P��`4�N	(q�usCV	<Q=d��[[�(��a��Cj*m�l�K�c���wlQګ�Lˉ�i�d4��ѱ������X�Z_�ᬒ�̎���Q�&��Y�A�ۑ������$��j��=n��貽�}��g$����t��Z�,7���c��Wz!5���OMt=�9ݜQV{�F�P�~��nY��
�@�hm�=��_��&�f�i���So���k�Uܞd�|D������j���sG$�S_�ZX���M��f�S��g#�d�~�
9��֔��c#Mq�|�
�=ɟt�G͊4�� �R���H�Yo��=�͜�y;!�Z �`�IR(}D�ܑ48d�}�`�a}3X��?}}�	���It�wi���n��-:
�vJ��U��,��1�}QZ|~Ѱ�*=���(��sp�!5fɟ {[�kM�%��<��m���i��
>���n8'�c�@,����m��_����`��`�yCRt���Y�U�,�[��m�:N��E�*�h�:"��Yx/c���	�w���:n}���w)7CZ�����&�Ű'��2 l�^KM��Fx���Hz] j�y��X�v'�N3J�� ���e�_�mح��1+wtX�ġ���P*���Y����l_@F�K�K�X &F���&1UW��*��Wj �!�T��I�Q;�GF���\��1z����Ѱ���\p��"C�nr/�|?�Q�H�;�@��:�/��o ���!pa��2��DiS�!�I�!)��#��LE�G
�Ѿ�%4��S_��rA�S��N%�����XvHV^��Y=�_i	l������z��S((h������h��n2N�ٮ��X.e{��t1��	���d*��4��PLV��:�/��-�G]��c�ߍaX⭹��b+��
M-57�[4B��rC=uq;�!2L�ۇ��6����EAp4ol�Z�d������Sғ�aq��(������z�jD�@z��gj�����j���v��B.ܰf6�G����C1M��g�X��� P��2[�a�.�]b��z��n8<Ͽ!"c=,��q���M�"m�6j���6�p���$k���>��1>o�C$K'U��8��o�J��3W�o#A�(�ñ4��wa�_r0�A)��R?.���>`

yI��0ޮG]a, ������q�M�!�4.���2x�ʾ�s����������W��c�\�\r�Ć���p�}�7R6#4�D�B��_����d�!�mn01��ʯ� ~M����/���*����i�A��\SE�V���6���9H�x����	CD��b̅�+��G� !�3�]���|�Ғ����@%I*Ť�K�J)�k��pY��3�$*~�� ���`��˃ʃ�e֤��x_��oi ����o+ڱ�q{&Ɔ(�3Ƚ��zS6~{&������/��·�K���Dw�.:]EH��H6����`�kG�qZI���f�%)K����$�H0%r����D�lw���2��*.��TX��O���9{�O����O0:�0�p�Y �$]$h ��J��pw&�·!�}��Cu܀ϗ��QE�L������"�1Z��)_�߂�������� %������2[癝,�Y)9J��E�p����A�x�P��3�Ŋ%���43��Xag�Q���M�����h���k��E��z��l(���6&/����������|q�?ڒ,�22&c���t��	��;x��
�ﰟ��B�	�6��Q�5�&�&w`��U�4ߔ����"0�aQ�*�
W�3�̛̹�<�?��H�9V}����5�@Hwz6:�K[r�*`hҴ�
�����Ɖ��m�s&x5͵��a����]���I�l�/G�V����h��tW/��CN֢��z��G�?�l_8������xI#R�l{���0 	�l[�� �F)j��ț�o�Sw��X�U�"q������fI�ɝU ��0��3-��q���y+>��U@�&�,	)���M�Y��O`��\�D�D�X���m3�9KiV�q�۪E���v���xF�;?���|��$� �K�K�)[#X���M�1���tE%���ș璫��y��\>_pK�d��8�����2nu��vj5���㩓Ȃ���r�D�LH�Z����׾�~���|�]]Vo���K3�s���'�!� 
T���S�t  �4bE�n»3�'(��=?axo�h�m�?��!�;����:���%�q�O�&8�W78���꬘.��~�'ɰ
�بg{S&5��0XN���1�{����C���Za�Bi�7�>y��iǼ�ZFJMb@���m���'E!ɐ
>=��,�^<�/ĥ�YP]�X��A|��
������Vk�e)P��
�8�@��zu�/�����/���)j��R���v�~��ӆ\�M��B ?x΋�s㩽5�E��%�A��\"M�FY���x���4b( �̸x�8�R�γ�9����� ��S�Q_P$�������x�/"ic\�,~屆�#Bo�*zAt!N�Mh�Q G��v��z�JƂ�H�-�&��t'��աAԌn,3ׅ`KTI��! �0^f&�~�a��c�v`|�釳����4��m�Rd*�����?�b�{<TS�H�����:�����H�X�������ϛ}<�ʬZ�uS^�"�2����
l��mei���&by���!GQ��a�����{��G>��΍)��n��?�����*bD�I7
X��b5
 �x�bY��4 �L�TH��:>w�%�K�V��N�z<I9�j�0&'U��|H�<(����`
l����y]��'���T��T�maΓ'���?S��h���^�l�3Z��$�r�4�}ǻ�\�x}�|%���D��N�ဥ7���)1H��P1��;30k,�p�d���eҗ)�M��=�S��lf����uɴ#(k�n�Y�
	�He1��g�2�� Ƈ♵�Y�^.��~D�'�p4�_#wC~/y��s���#O��|WI�����S��I�݁�V�_ߢ�l3��Av��*�_�I��qId�hf[m���W��6>�g}��`M��p�.�^
�9x��PQ�s�oEe% ��T��C�����ő�j.��6~���Oe�I9������ͤtq{i9@_����D��QT�ZR
c5�4��(�t�W��"OGR�s�6��&UN�\^C�X���Y�^k-M��e�&� �šͣs��C����Ԕ 3�Ca�r��0��z�Us'm�r�f2bWX������sH^�7ԣ�-���^w5F	�=��K��jf��|����B耘Կ�2R*A�����?�1����s����V}�,�py|��x@�(�L������}
��_�=�ę����E	���r�#[�=;��r.O\x�D7�7��rFr� k9a�L�}�:Y�;q�{F��߲4Q*�HZT�S����
<�� �����V� �U�ڊE�=Y3�X������ܷm�(g=�-�)��D���J�K��#Hi0��(ۑ>[���Tn�<�����{h�s�7^V"��X��80M!K�Sk�V�b�(o�]���Ť����w'p	ey	1��t '}�Y�'��Ts��/�ܽ�}�-x�t��d���p6
n�~��{�v'�
w�������:&�P�z����V�Y�����tp\_\�5C��y
5o��ސ�O��4��OE���(9�J��0���͏���v���������4�N\g
Ձ���0�#Ϊ�Mt���3Un-�ԳH��_�,=���������h- �r���g�~��;:����r�@���?.4�s�S���y��'+���W�� Q�I�Uw̞�e-V'\`*3y��y�[*��|�ξ�U�L'�Rl�G�B�ޢ6+W��,����y��ŪK����i��6���H<O����x0� �k��`sz5�2�(%
�˙0`QJ��	��OVC\�j0g7FՖ!V��4����O{��;��=�����Z��]s��A�5�MZ��w ����G:��`᩶�I�/^�)p!�0'����<���e:�Ὤ� ��u�c��^��'�p4��
o;F�-*I"3wo�����i�ty�~��1�(?-�S動��V	�å?�B�g����It4OL��w �+��cI����&,+Q����.�H_N;�S��W�kn
�u���*�Zv/����M0G��1h_��n=����?��+���Vh�t�T��ǡ�([7ٸ�����
d��To
}t�%d#�DO���%.��NtuE���U|,)�k�.o�`E��t&��K�O:�����G�o4<��\k�oWR��R�V�ar<"�x���n,y,By��o���)�"���O�ƝȄ�$I7��
⩨ӡ��S��h��3�����W�
7�t؝�i�e9N��r
x��+�;r�b�G�MO_��SS�F$����REÅ	N����F5$Ң�1cq׏3�Mݚgm��21KӉP^�Q����,"^
/62hӍc��o�dhv�qŶxU��f�R�:E���jtj��8!�����}�N��Y��\5b�
i�~3Ӕ�^�lЧ�j�8��l����G�M��r�;�J
7�㫵����/��^ۮO�r���]�{q���x;� ��j�I�G���_��X�.��� `Y��2̏�/��F���8�7�ތƿB7$����[��[�G��Ƃ��l��lS�^X��M�������?d;�3�pظ3�慨�f���]ac��0{�tD<�v��	�|�-g�}�A^��W�u���Uj�O	���n�����C
f�j���@%f���lJ�e��;�c��>���f���s� �YoU+�LǤ �ǰ
�]<��9�P/�e%���CRbx͌S3�K���p���t��_)?���D�ya���]�Os��@V�㙛��6$<����*Ok�-I�=)m�3�懢�,��� <�`9�:�*�zm�����p�|F;HՋOve��E��	�;u�C_f�K&ӻ���L�h�^���:S�ށ��/������1��X]Ij�ߐOs�}�1���uo7��mx6u���j��i ��6\@Ѹ[[.���EP8���t|D�U��U��vtR(є��}zz��|	���-�`�fx�c�,,[�╡���{������V��������b�W��}L6���l����t������d�W�AP�(p2k\��R}C+j	�
�6E�(�&���^��B�Ûp/8wmazc ���� �b)�����2c(,�Nѕm� R�R� ���kfk�W%��E���V�T�"��>V;��j��ӄܣ��W�����?��vD%�ύj4'!J��
��'�F�`�V%�h�ҏ?���!�A�� M
D�K��W�mw+,�]�GPԫ.`ÛF˗�|����O_��"i�~�)nI�1f�q�\��r��cם� �[pܙ3�@��C��o{��t��w�-	⪎]���B�t<E^���MIg�7k!VD�.��QM�7����u�j������
�2@����M
��mG���ɬ�q�'�?jX��N�k�i%�&�\q){i�Y�޿�H�P����`/V�hΉ>x�TI *� ��]��x�������#�v{��5�jC?��0����Ϯz$�hNŶgQm8M|U%yޏE[�B���2L�K�`�?5��H>��|׷&UN�E�t-���]�O��ɗ�*\���H����HeV�層j���u�}DZ���iO��'H.�1bNU�3�~��I�L���7+[8�R�y�{^�,�У�,���G�XҞ]љO�.�FL���b͠'?�%Sj�I� ��������z���=�hm��cEsV
�e���F�	3I41���W�T�	���T�'$��ρ>�Aa<�N��ȸ���K��62���@&�:�ߚ^��QLf��-/�78�S
��6Z+	iVSJ�@��4�}���F�r�~�.ꌰ[��!��Z-�nU���o�����vk�"��W��7�-�+�c�r�t7G�o��r��NNu���T7���\Hm�O�*Os@^?�d�#uJ��>^�d�n1��&�Ҳ�s=٥�Z�
��8��We2�m����I�T#��#��2x�n/��u�6pcB~��Vn%U�G�#�˰�.<	
:��8c'i��oO��C3u�eOAE=\K4�{]z?�����<
�_&:����Y|���L��S�8�U�J"�$��˗��=2]�$t��a��j�1d�U�Ub5{�c�R.�{��"����F}/l�������z��5�����.��&��E{DT9��J�b���1(ո��Rr� ��ջP�\SOڮ�d��j��V�R���lE��.:��N|�����?���Q�<*��xj؍��x�z:���*�H�c��C��2�
��W��{^�;h��tF��4��
��t�%��|�Hz�H���Q�n��I�
'3��}4D��iO78R�r��X^���=XB�V��!�����@��
�.�����7�����F�ƅ�X3B�aÃ�<K@����_��������r;��t��o�_��yfX�����^x��˞B6(�3�E?_�4���'���<#������go��/��L_Rh��?��ez�s��$t��հ+���#Ɨ}_H��l�]`�h�/��^�e�@q���׎F��l�\���[ل~���l6�Ao����1�ڥ�������?���;�N􍔾,3�dr�$)�CԄV�K1�9j�����]���x�̤C�������\Mo��E��K�љ���+�wѫ��P�2f:�����%�}��H�#�� 2��W�k
�q������^�k�d5���c\�K����c$��7�OG%9+E�Lr� �[���`�i?�2�'���=�O�$Q�7a�~���q���.f��<�2���}B�<oNvC��`X��u�9R��.���!�`N������M^e�_��j�0�Fێ��c�|J?䊜��s����2��y�(`��W�;�^��:���
I�,'��(�x���;�ǽ����c������;^��_BN�䢋�cU����mv�bu��QSRn�%q���&Ba���Ç����)�����j<Qij�@���mm���	�ZF�Ზ�(�A�����H�+N#EX��3K��v��ɻW(o,K�6t��*�9-���.�Ο�4v`�4�����c/o�6Y�,����3�䢋��X0��Bk�����J1�m�u��^f!���R���|r0��>���Y
�;_�F�}��ɝ�d����ߤ���IG_�W�q�a��1�#��wb�
x����E����Ĭ33 �Iq� G���}x�唌�`��L�!ՠk��kÄ�+�C�K��z8��=*䎕4��	M\o�e�E�1�d�oE[��
%����o��S7�l��z�ƒ��R�Rf���F�P�Yc/��D����Њ-Q�ÿMD%xz�⦈H_�22�8�mh�zp��Hw���\���������* ��5.�Q��X�d��RB�_��f�f (���1Z5���I�q�VP0�7���@�y퍻[���ZI�ŲҪ�G��Ӵ�4�m��Û����Y�����+�E^	�ܱ���8c=e�D�g*�I�]!��=F!��Me�ܙ�k��z�Q�-�86�	]�����	��rk�*�۫�ێ\@9UPC�
��(�� g�ޔRS�+��4hFʥ�7JR���6��$��E�c����1*�	8/����g mz�����iN���ë'�Dq՟=~�
�o`�:H6�e-@b�K�L�NJ5ȏ��I3!?=�Ϭ�2���*f�j�~/O�ی̣�F!"�B�{��C��V;�e��
�����U�b&��QrV��/���`FM�U5�iN�s��Gδ
;��!fj�
t���^�&EMJvF���1�*&uA���-�����q>j��v����n��0aT˧^��p%�[��f#p������yU�z �
]����F���GB�
?�'"(D�j���D��@[/1u�O�{����oW�MSp_����چPJo�{�f2
q�u������ܼP�Ի�Bj;o�/MG%�R
�����<�h�{�;KǾC�קm\.b��fS�`y��J w:�w;R3����T|-�~2�[\ MlN��Xe�D�?�	�[�}�,ď�5@N���z'qW��XGIY�X�����*����6�,�fE����G�����p6��)vEm0E1��.�'����-c�.1/ɹ��W���$��Ϫ^��N��g7F��\�=���`�� Y�!��M�O	���a��Nu}5�{�*��6��N1i�WHe/*�=2�j,�[ q<��B�y�bФ�(A�����C���Heh�w�V�Xl��j�YQ�l�遂�x�����W�;E���tBLs����:�x��<;��Kbʉ;�!9����!6�͖�gZ^Nn�J���y� D�A��
���=B~�j¹fbV�4�X�B��l/,ڈ�
@˄�hB3ζu��,���ރόtL׾D��%�A;�5���o�צn;����s���NkGM ��k�0���
��a73�^b#aX�>G
�OmP��\��,[�oU%\���=rl9.�qx�3u���T&v���]Cxc�P�/���� ʋ�5P���L�,��P�v�r�T�ɔ��ڣ���
�#� �7z��@�a�fVNX@�yѿ2��Y����M�ֆ�V�ҼW����Q�'��ڤO.	v��0�K���Z_���3=���b��1Դy��1��t*���5�����}Z�k���D{��ONodE���/���_�93��ý \*?O{5q�l���P��m�]��@~w͔x5�a���<����M���ή(Ș�%�yn@�70�2MF�:���'lZ�{��_����*�9;��3�j�m�5�&w���`"�^V-)$��" ��?T��WD��,Vc�utE0M��|(�a��VC�6��E=����y�G����bnI_[�!n4|yc� xm��0H�`�U��2΍�3P����+�c�o6+�S �%��v�騉�{O�kt�T���er��F��B��/[��0��c]Pb�0�7LR����=+�%�6���hWC��lVZ�/3�����}!��$`�I�P��"f�	�?��Ŋ��{�TS;hXn�EP|*VL�kճ0"��s7�8��U���d��#��Y�"��O9Tv�]w}�'���t�[�ؘ�SK%_�t0�ڼ�V���ԍ��LnuJ�4;�	�؆EX/�bCl�J�K^��<��>�Y�:ˏ�)?R);|R.�|1�v���H�"U��ip3l��E����whR��G��nB�]���H�p��-|�i�1<�[���+�,;^���:9��k�H]�.�j�v"�ᬓ����h���:������[�����zL�y��4HϏ�AJU���&�ǒ��yѶ�@�
������D��/v�Q��#+%
����F3�j�x�$��L��	|f��z�)r���}��pd�1�=�/��r�-W�km��?�~�݋f�:Kq��Sν>�&y�D�߻\���0�
�����x�3��j�/�C�Ϋ�.�M�n�?s��[��+����ls�&f$���u�(�,���_��1�i$�c� ��Ǘ/�Q��2˾W{����N��Q���Pnt�@�|/t���"�o��~Bhd2�
l�$Xx�T��P��y��7%�ti�\p���cUqU_]W֣��%1EEM�RFF����yٴq��_�-�T_Xe\tI�"�D�o��R�bn�pFg�'�ȥvX&��[�� w��\%��k�3��D}9f�T$���R@t�&����Cn#��<�)��lj*���F�
H�~~b�!��1��m��
����rv�HK��W:)��n�ƽ7��:;�׬;W]v�w��qS��&��=�X��b�|\��M߫�rj(���Ž������%��Z ���j��UŸ�7{$�{�qt���>��I<�ڥ��h/~1X2r�۔Hb�{Gc	f��.�PN��Z4~7wL)4������i�<7�A�g�y�3������1��LϽl1����w�;g�`�'�Z��ľs8M�H�Kv�]���d*�m�. �Nl'T��s��1�5�̃S�
��^D��c�ho�Rc'�N�I��j��h|����j�f4!Ov�q`�V=��*}#R��غ�	�RN�s���':�_i�<��2����f�.Zx;��fKR��������D��dV�@��\���9,[{�x9�ݷ����b�'�5��_*a��OR0�2B8$��B����λ�Q���?֢p�6s+��mN�;��["w�$
�I��w�8��PwG1������V�[w�˼3L`�1��l6�Aԯf��o*J�O�ŉ���v*Sס�4
��ϏAi�VC}�� ��\���=���[O��myf��2�(��8k秛�u����'�~��E6�/�����b�:=��C6�{�(���ȶ���7�<�d{�]��V�1���pͣ�y�p�8d $���,�����e�W�}����]o�qUk��Izw�Y6�yF����n-���'è�����l""MN�tq��æK�|��+��P������U[�njH��4�S^��bc��~���e����+?^�����%ֶݗ��J��u��G�����ē�H����
�O�|ڥB���I��dh��bU�N���}:�h�k�]��YjO�l�,�q������oXTv�A�k�Z=:��͝#B^��+-w1*�	�?�lF%X�`0eg6�X�/���2�l���q�X��-�n��� 3�P�R���T�S����'��{�p�t�c"�,�OU�YO�翆�2��'�4����2�Y�̰m��z�����cr�qLt7RW�3;/�����y/�on��'Ç�ۧXrs�<�aЗN�Q^g�(�2ã�3TT9�D���c|��ei���� KVń~���0}�<L��>O�?�E[��{G�]r|����C[��^96�a� �&PnL�6x���F���u��������L�s"
�r\N�Z��E�v�K�8�q*���p�E��/>U�v�a��m��cX��W�
�l���]���yoR�6��+�A(��ةDrU�Z/�|,��k�;2�x��d��xѻ�AK���Y��AKlJT��mm/
�q�j�suD�l��y�̝+�!�a�K4��)�(?̉�-��	�mZ ����/�1�Z��n�r���6�̭�\��ۙN%"[�zT�zA	�"�?+�1��܎���zr��G��2	V��̱�d�f�,���e:���+(�D��W�;R���z/!��Mk
<�z^������HsI�`a��EcV�k"�L,�� �|#˭B����l[���ۚ�8��Խ"�K��
���K��]��������	*�9��+� G�|��x�@��_�܄�M@%t&���#Q������D�%�A��{y�]�����+��+LjH�֓E�+��IZ⌜\�b�uِ? ?TR�b��6o�sC.�T����+�����9:�\�MN�`��/�N�iqHÒ�2n��Wk�V��9Z��]�i�EWz�����		$M�z��2�|Ȕ�g���ޱi�&0
�����n��óVI�f��	vCE�����<��\�B��9Nmzj�#U��n�(���tx�ڞz׮V�(>*��(,c?k,zuî��� ��UrЫy�gr�*��Ir�{�H�"0�mg
&�W�����	�o�J-FAi�'͔��}-�Q*���JJw��NWlߌ�>��B�r)�tSݩ�8�;�I3��������N">�5}�@ƴ�1D�C�ycpK��������Q���������Mf_�x暥Y%(1����
L{B������"
�M��<����o����\�~G�'������$�)ܚ�ʆͺ�� [��4�=�g���BǓJ�]e���=c�	��'��G�EŰ�QS�}�Y�c$\����L��!^;���K=[fb�Lf>�f}!��O*�Y�K���!b��+\�v���'4�v��\�T��d�!��HC���)��@�X��Ǖ����莻�巯�dL97��ò=���d�%�'[��;�4�,ג�K�Cm��*!ȕ:���}	�)�����(jG	u�t�R�H#p�-(#��p������3?X�j�LI|!cV���߸+�h��[ͶP�@�X�;j�����U"�XT]E%Ĭw5&U��SE������gOɴ�t�֛��eKT,�RV��z�$\��>ӈ��wD=q"��$V��X�#Z�ʢ`p�b��1��d�e���~k[t��?��B�T��y�,$<�y �>��9� i��jH�r��^ܞB��B�U���ёv������� �]��.��3���uC�i4ߙ���D��!�o3u�~�����O����C�&0G݂�J�r��yyzn	�M�<NT��}�~����	�жZ
술i��X����)��tCr\ْVݻvH��
�
0
_��:+�lJޙ���5�ܜ�4��r,,��"�}$N�G;� �{g����䇎����+h���]謖Vz��q֌�Й柂�gG�
2$��<�6�O@���	-�/jH�\�H�v���V �Y<���k8`3�/��(|�ǿ� 
�IL �!h�f�,�p
�,^`$aӼg"���h�͔h������>�d��-H�emSJ4�\V:��?c�FV���G��y{��`�SD�iR�a�O�B�o�x�OF�ޝZ�d�
�v.�u��� ^�A���l���9x���
pPGrY�"��n�/䕴���#�eMoy툠xzЧeP�-��T��Xt��P4�nf�=�s0�����;((�"lYIQ���\><D�!W�,%��I7=���xZ���&��e��b��u���X��,	䙌����X����w�+n���ȯǫg>т
/�`s�Z�y!ѧ�I�b�|VR���ZEhZ�ܿ��*
��a���=r��ּP����r��sT��L��}�qp�!�0�.7Ct�U��m]���}����ww-k;M��1&�)��	�ή���&�aI4%�o�p�wW�I$l�~��%���Y����(]+N�7i)(?71����':������?�=~�zn�vm?N�Nh��~��%��m*w���|	��A=�:�3�w�W�kJ��<v�����
t,S�]ب�dÂ6:j��?8���q�xeT�w�}�-���	Д�g�j�Q�[�b(}(F�;��c@}��8na��cPI��_[S�R�(U_sM��������J]��R�����iRʓ��V�3����I�2�x��_��~W�qP��Iؐ� ���n�����r%��T��v����p�r
�!#ا1p'
pN>�`��o����.����7#��B�OZmR["؅}n�2Ԭ\�{|߿��g�4ѩ���C�R���b���"��"`�q�}ہ
'F���]9�ƈ6��_B�-�^����9JC½�	�NJ�u���T��3>���G˛��(���I0Xk�Aq�q|�y��dֽ%��m�i���Ԝi\���<��F	���'*�*�详��%j_�N9�p��1�M�:,��j�r�;�]�7!T3�צ������]^C,�9vV���C��%�d4货xD�Z ����U�9Fߕ����zJ
�� ��+0��_oI0q���~B�R�	C1��u�?Fb��U�LA�U�����������؄�c��O+�[$8M��~��x�6b0�l߇����>���9c%�C�/��Zv�e'r�/�E���8��<��ꮱ�}V�mMWe�>{K�<���Q�q\Su^�f��"u�o�ԕA������Ѡせ崕x>	C�Fi���?O� B>H҄*L�_�u���Q���i��%�|]�Z�b-�9ţ�dp�n�����D]q&�ٺ%�w���Ч�p��vG�F���h��Q��~��YƐ�￲��+[|��H[Y�(��P�}}�f��Ss��9������+)�����ž���$��*�k�0�F���a	�=�N�v}~�4r+�i��Cz"���F	_�O��"*��-��f���?<,��l���=��0۝�-��
��S���!��*h򉣊�mЬ���g���w[c�H7��g Y���IɈ2�2�k9��'��
�Z�� ���C���^��$�N>�,���Nǲ�����p؂UTt�j"���h�^:����D�҇�
s�f�����(u~#�{��W��I�ʱ��ΘpH�Q��,6H���"���SN�g6oWܹ��������ŻX^b�cH�Q�y�J�w/�Y�s<�L)-˪3�J�C��e�%�Uu��~T弶f7|D�8��ux�7
0�"��P���Z��I��.Ъ�
۱Qi��Fm���Tr�KEy��5=��3�e�ˈ�h�d@KFa3i��_߯�L�~Y`X�Ad�h�A!v�z>G���|�2$�zf 9+��u�E%�L{�	Ĕ����+�R�3d��o��<��>�er�f2� kܐ���v���y" @��ѽ�ܚ����<�\vZ��V�ct*�w�)Jr�+�@Y�[*���)=��h����\nTiѺ !|Z���g�����+�
��8N�	��nyb��/öf��"wp��0d^�Pq��(������E��*?Ƅ��[oZuV�K<�̨;�>�Sba�Ə�Ŭ�X�+ �)f�P�9���ۀ��S!x�,W��7��Q	�y�T0lYG��|������Ta`!V]��W��!��97\u�kFu8�<� �΀|��n,),9#7���'D����±�g��m��v����8:�x���ͧ#����<D44c>-�`$(�{C�X#��|^�	0Q�&��c���i��a�(�n��H��Ny7.D�+|9a�##)]�j��(c������ab����~/��0�c@9$�b<!�R3(��s���@y��{�@��"�j?�. ��9V���gj;%�tz$�P�1t/#���}����4�O�����_b�8�j3?� (�)F�ꀕ�^4,�y�ŝa΂Y�q���t�0H�
��1���ÍyO� ��o2�%s��OV����f���$h$
Ϗ�����(N�z�rwÃfP�;uc~�p5)��)�(M��V.CL��{�X���')\WD�Qw��K}��y�M�ث�pQy3/�?�Y���&]�$I|
�*|��Q�W��gm�n'�:C���[ӈ�zR���	����L�@S�%$���C������pk�{j�~##T�^%��D�I7�Ļ"dCTY6:N�L{��3�H������V�l�zH�f�>-��=��/��$�wp�6w��Xږy���"N��?6�1��n�
�=+$��!��f���N���!Ԛ?R����0=�H�4Z���Y����['vZSh@Q��~�ٵ�;˫�����VP�>�2��6 "��č��pe�,xb@9]dĝ�����G���W\Xs�$����fIj��̊NG�IOszxw�n��ڝcY�c?%T�1j��T�c�>WZ��C)\�170�G�'�iQm�o�!õI�3
�F;/j@֋u��7�(�j���>�>�w����
7Yy�:�K5�'2�����P��@�[E�)�����0��U����y�~=�ŗ�$�<�Nӂ�l� \n�e�r[I��� 	�1~̨
"�ǒ�ԁ�L��OV�j���,�9jqfDU-AF|���i��&y�5������}������Oo�*8��+���>R��	O�7L#F!m�b
"�s��gs	���eh�]$��C
t��^.�9�ëe$F��F�f6Dx�q�i�����l����OOJ�Y� p� &�X'�T��!@G� F��yt;pJQ����7���q5�h�����<8��Swr �~c�\K�h��-fEVAS꼕O�*0��GЎٚ�J��\�d$=c���
���D�݁��0=89�@]*��:h2�گ�^�����)c�Ka��g�CY��}����~8 a~S�c��R~�Q�����\�X��P�1`g�b����_��1��~8�g ��!�M����7�L[)
�65[tz�E1�}Y�����<ϩ�	u����޳^Yu�	�<���D�a�ن�=�]����>�9�|_�VE���m�����,�ڳըe0�`F4j#ZBk��E�
�^\��*�F`�V��UL��9��_n�� y?fnz.3Jrx�TU�d=uܽ�l�N���&u�q��c��p~�0�Ch�H�S��I��0ܔ�<�ė����65R���Д��-i�L��|B=�@c�R��̨��ݳCq���˦��bS�z(��%;�%��ԃ���jj鞒�|~�3�릷�CO��5m,������k��uqf�X���!�ѵ�O���+	���B�Gi7���Cr���X��bSH��$�n୬�BR��uv��,	�0
���o<�#`�&`�`�~-�yr��[:�B	�����RV�E �E��l�0�M>!B>t%B��dk��G���$���w�Pb=�ivE�[YS��p��%UN�� 9�jum���.
����=���u��w�CR���c?C�O�������wƃec���^ .��ԣF�z�zW�(U�p[.d]~є��g7�G��Ҹ��.��W��ty���I���'?6-�0�2F@8t0��1*��"� �|?�2T�Ҿ��(o����+���Ȁ?e:��!y(@W�	2���i3Z��$ml,��X�h�yo�t�"�3�&H\�:2�B�ڔ��ӛ�BҦN�mx�|W����bA�;��/��R$�F���8OUHQ�m�к��v��Dg���ԧܜ�����-F!L��q	�_�ֻ����� �+\toqeo`�������$y0K�VH�xN{o,��A��p��k�xj�8�|�h .�'��**,�krO��ٹ.=���pqq�&w|5���P?Q�A�H��R1XiI t���b���:��x��;��[X��7��3�1mJ�j�I�\�w���uS_!�`���^v*�����7F*<��P�ŋ,�%K��C��L�W�'��|�����5J�eƳ����+����B�DcC�%�*��@��ݯ��4�2�� ����զ6 T�)kY'_�2H��^+�ω�7�����΋�\�ǚ1�B�x�a����ޔ�l�n�| ��,��3��ط�\�A��� 	aCJ����?�:�y+���Z]�V>	��V
Dr����c6��?Yi{�,x�-R�=��!m]�BGe01I����f��|���Z��kγEaU��kW��|��W�d��Q?2�џ'V�z��㓘0�R��ذ&;}��a�rK��G �_a+��@�T����QiF�DG@��*�6�4@�G"R��.�'=ٶ̶���\�>�@��WMH�}a���)�
�'��_���R�r�]��'֨���q�Y���E %��@o�T[���Z�9,��?O4��ʿ�l�V���'�)+Ke�L�ې`^�,V�J::���z�ş��#�`y�A����,)6#�h�AYu!%�ܤn����
�{�QlBg&�ظ�SgN.t��J������kڤ9���ij�����<����r��X*�����.�w�������)͢6��+1���v;�9`*��� ��#|K(�?�!ٷP,���]]��e"��\B0˝��D�]�7h�AT;~�O�]���RUz;lZS<��	�§�8nR�h��]�"�-:����k������hg۩�R�)jK'�qO
20��rR����h�&K�:$�@�y�p�"�2�
�_}�}���0u�iV~4�Q���B����	��������4XCS��bs���)��Tp�
��=��lJ�⢲�c��ۀ⺺thS�t�;
/K܉���G��"��½������!�;벼%�
eE/��=4�셺E�:��������>�=,7���sS�����?��|^`9/�K�ܤ5	BňP*�쨂 �]����$��t��R�1",e�-&��,��5��
�x"]��y�wbW=���U��M-`z�f����	�Ϭx!y�ԾEj��]1i
�L=uXz�]��Ϳ��0�@5�o̭ms�#�H2��'~�):���E']o����O�]K���e`��5�������z�:(^�W�<P8���H��@��>��R�wd{�5H�������
|�B���'2V67��w���H��f}cXj(5�V4>D��������
��v�5)y�ς��� #f%���ݦCȘ>&?U�+˞.��"���V�o�}����`�[��(��\��T	t�Mɴ���&E�J[��_��=�-��8���lB5Y���
���  lJ����gЙ���%BH��Lżeqrw)Q�z-�����Sz�q�]��_��'��5�`1�U
���$uJ���_�r>!��� �/"I�-��<��f��<p��o��<
Sp�!/�j^9�>4
��LmϦqW��8h��HI��J��#�	]�V1�q�
������#� ���Ab�Zfcb�D.�r���df�}�=.�>3�5�K�B9BP!f���Ci|9�!]����D��l�(M�"�~�˿��(��/KyU��s�Z�Nz�c��-?:$@�^��{PW�{�U�������GO������<��	��겋QFi�b���h?n"NE��-�� M�S�	�=3g���kj)��D�7:�A��a
p�;s�D}v3�)��ɻ!���;�׾d��{�PBF	s�G�P���^j�F
f6��)���Z͌��-ܯ����XOE��K1Γ���,V�<&��Z���%;=�<�o��
D~�/��ȝ�iR=�u���GX�Dr�$��S���X�r����V1��@��uD�f;T���_�Z�@P,s����;=L
                operator: "",
                desc: ""
            }, {
                mask: "+7(35235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0443\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0443\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u044f\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u043e\u0432\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u044f\u0434\u044f\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0432\u0435\u0440\u0438\u043d\u043e\u0433\u043e\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0435\u043b\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u044c\u043c\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0444\u0430\u043a\u0443\u043b\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0443\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u043c\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u0433\u0430\u043c\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0442\u0430\u043c\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0434\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u043f\u043e\u043b\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(353)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3532)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043a\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044e\u043b\u044c\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u043a\u0442\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044f\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043a\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u044c-\u0418\u043b\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0432\u043e\u043b\u043e\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u0440\u0433\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u043c\u0430\u043d\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0437\u0443\u043b\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0430\u0447\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u0435\u0448\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0440\u043e\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0448\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0435\u043a\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0433\u0443\u0440\u0443\u0441\u043b\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0431\u0434\u0443\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0442\u0432\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u043e\u043c\u0430\u0440\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u043b\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0432\u0430\u043d\u0434\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0432\u0430\u0440\u043a\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0434\u0430\u043c\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043c\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0441\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3537)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3537)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3537)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3537)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0442\u0440\u043e\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(35379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(381)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3812)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0418\u0448\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0432\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0432\u0430\u0440\u0448\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0432\u0440\u0438\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u041f\u043e\u043b\u044f\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u044c\u043a\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043e\u043c\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0434\u0435\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0437\u044b\u0432\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0423\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u044f\u044f \u041e\u043c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u043e\u043d\u0435\u0448\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0443\u0442\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u044c\u044f\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0435\u0440\u0435\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u043c\u0438\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0433\u0440\u0430\u0434\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0438\u043b\u044c\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0441\u043a\u0430\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044e\u043a\u0430\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u0440\u0431\u0430\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0433\u0430\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(382)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3822)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3823)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u044b\u0440\u044f\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0433\u0443\u043b\u044c\u0434\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043a\u0447\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u0434\u0440\u043e\u0432\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0438\u0432\u043e\u0448\u0435\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0430\u0431\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u0441\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043f\u0430\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043b\u0447\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0433\u043e\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u0435\u0436\u0435\u0432\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(383)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0433\u0443\u0447\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u043a\u0438\u0442\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043f\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0441\u043b\u044f\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u043e\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0447\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044b\u0432\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0430\u0441\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0447\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0437\u0435\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043f\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0434\u044b\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0431\u044b\u0448\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0431\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0438\u0441\u0442\u043e\u043e\u0437\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043d\u0433\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u044b\u0448\u0442\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0422\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(384)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3842)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3843)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0437\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u0438\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445-\u0427\u0435\u0431\u0443\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u043f\u0438\u0432\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u0441\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0439\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044f\u0436\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0436\u0435\u0440\u043e-\u0421\u0443\u0434\u0436\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043f\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a-\u041a\u0443\u0437\u043d\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38459)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0436\u043c\u043e\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3846)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043a\u043e\u043f\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0441\u0435\u043b\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38471)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0438\u043d\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0448\u0442\u0430\u0433\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u044b\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0436\u0434\u0443\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(385)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3852)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0440\u043d\u0430\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0441\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0430\u043b\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u0442\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0445-\u0421\u0443\u0435\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u043b\u044c\u0431\u0448\u0442\u0430\u0434\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3854)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0438\u043f\u0443\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u043c\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u043e\u043f\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0427\u0430\u0440\u044b\u0448\u0441\u043a\u0430\u044f \u041f\u0440\u0438\u0441\u0442\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u0438\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u0441\u043f\u0435\u043b\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u0443\u0431\u0446\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0435\u043b\u0430\u0431\u043e\u043b\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u0430\u043b\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0432\u044c\u044f\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u043e\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043e\u043b\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u043b\u0443\u043d\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u0431\u0443\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0431\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38570)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38571)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0418\u0441\u0442\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38572)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0443\u0440\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38573)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38574)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0440\u044b\u0448\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38575)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0449\u0435\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38576)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38577)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u043e\u043a\u0443\u0440\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38578)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043b\u044e\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38579)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0433\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38580)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u043d\u043a\u0440\u0443\u0448\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38581)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38582)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u0435\u0431\u0440\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38583)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0430\u043c\u043e\u043d\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38584)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u044c-\u043d\u0430-\u041e\u0431\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38585)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38586)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38587)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u043c\u0435\u0438\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38588)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u044e\u043c\u0435\u043d\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38589)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0443\u0442\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38590)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u044b\u0442\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38591)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u043b\u044c\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u043b\u0435\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u044c\u0446\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38594)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u043e\u043d\u0435\u0448\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38596)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0426\u0435\u043b\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38597)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u043e\u0433\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38598)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38599)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043b\u043c\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(388)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3882)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u043e-\u0410\u043b\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38840)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0427\u043e\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38841)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0427\u0435\u043c\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38842)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041a\u043e\u0448-\u0410\u0433\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38843)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0422\u0443\u0440\u043e\u0447\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38844)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041c\u0430\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38845)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041e\u043d\u0433\u0443\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38846)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0410\u043a\u0442\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38847)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38848)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u043e\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(38849)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0428\u0435\u0431\u0430\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(390)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3902)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0431\u0430\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39031)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39032)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u0410\u0431\u0430\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39033)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0421\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39034)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39035)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0428\u0438\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39036)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u041a\u043e\u043f\u044c\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39041)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u0435\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39042)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0421\u0430\u044f\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39044)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u0435\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39045)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0441\u043a\u0438\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39046)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0422\u0430\u0448\u0442\u044b\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39047)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0431\u0430\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(391)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(391)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043d\u0443\u0441\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043c\u0435\u043b\u044c\u044f\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0442\u0443\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0434\u0440\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0442\u0443\u0437\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0440\u043c\u0430\u043a\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0443\u0448\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0440\u0442\u0438\u0437\u0430\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0442\u044b\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0433\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u0432\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0441\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u044f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u043b\u0430\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0430\u043b\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0431\u0438\u0440\u0438\u043b\u044e\u0441\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u043a\u0441\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0430\u0440\u044b\u043f\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0437\u0443\u043b\u044c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0430\u0437\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0436\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u043e\u0442\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u044e\u0445\u0442\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0423\u043b\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e-\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u0443\u0447\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0431\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u0441\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u043e\u0437\u0435\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0438\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0440\u043e\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0418\u043d\u0433\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0433\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043b\u0430\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0440\u0431\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0442\u0430\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0430\u043d\u0430\u0432\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0439\u043a\u0438\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3919)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3919)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39190)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0440\u0443\u0445\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0443\u0434\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043d\u0435\u0436\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0437\u0430\u0447\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39197)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39198)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u041c\u0443\u0440\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39199)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0443\u0445\u043e\u0431\u0443\u0437\u0438\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(394)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3942)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041a\u044b\u0437\u044b\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0430\u0440\u044b\u0433-\u0421\u0435\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0410\u043a-\u0414\u043e\u0432\u0443\u0440\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0427\u0430\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u0443\u0440\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0428\u0430\u0433\u043e\u043d\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0411\u0430\u0439-\u0425\u0430\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0430\u043c\u0430\u0433\u0430\u043b\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u042d\u0440\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041a\u044b\u0437\u044b\u043b-\u041c\u0430\u0436\u0430\u043b\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u044d\u044d\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0425\u0430\u043d\u0434\u0430\u0433\u0430\u0439\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0443\u0433-\u0410\u043a\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u043e\u043e\u0440\u0430-\u0425\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041c\u0443\u0433\u0443\u0440-\u0410\u043a\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(395)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3952)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3953)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0440\u0430\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u043b\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0418\u043b\u0438\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0442\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u044f\u043d\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0445\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0447\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041e\u0440\u0434\u044b\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u043e\u043b\u044c\u0435-\u0421\u0438\u0431\u0438\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u044e\u0434\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0423\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043c\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0433\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043d\u0443\u043a\u0443\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(3955)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0433\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043b\u0435\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0433\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043b\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0438\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0435\u0443\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0430\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0431\u043e\u0433\u0430\u0447\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0434\u0430\u0439\u0431\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0437\u0430\u0447\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0439\u0448\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0442\u0443\u043b\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0443\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a-\u0418\u043b\u0438\u043c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(39569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(401)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4012)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044f\u0445\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0441\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0441\u0442\u0435\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u0440\u0430\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u043e\u043d\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0440\u0430\u0442\u0438\u043e\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0430\u0432\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u0435\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u0430\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(40164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0437\u043d\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(411)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4112)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u042f\u043a\u0443\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0435\u0440\u0434\u0438\u0433\u0435\u0441\u0442\u044f\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0412\u0438\u043b\u044e\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0412\u0435\u0440\u0445\u043d\u0435\u0432\u0438\u043b\u044e\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u044e\u0440\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0443\u043d\u0442\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041c\u0438\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041b\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041e\u043b\u0451\u043a\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u041c\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0410\u043c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041c\u0430\u0439\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0410\u043b\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u0435\u0440\u044e\u043d\u0433\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0425\u043e\u043d\u0443\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u0443\u0440\u0430\u043f\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u042b\u0442\u044b\u043a-\u041a\u044e\u0451\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0425\u0430\u043d\u0434\u044b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u041d\u0435\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0417\u044b\u0440\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0440\u0435\u0434\u043d\u0435\u043a\u043e\u043b\u044b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u043e\u043a\u0443\u0440\u0434\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0435\u043b\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0430\u0442\u0430\u0433\u0430\u0439-\u0410\u043b\u044b\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u043e\u0440\u043e\u0433\u043e\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u0430\u043c\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0430\u043d\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0416\u0438\u0433\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0430\u0442\u0430\u0433\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0414\u0435\u043f\u0443\u0442\u0430\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0422\u0438\u043a\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0430\u0441\u043a\u044b\u043b\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041e\u043b\u0435\u043d\u0451\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(413)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4132)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0433\u043e\u0434\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041e\u043c\u0447\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0441\u0443\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0441\u0443\u043a\u0447\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0439\u043c\u0447\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u0432\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(415)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4152)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u0438\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0411\u043e\u043b\u044c\u0448\u0435\u0440\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043b\u044c\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0438\u043b\u044e\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0431\u043e\u043b\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u0433\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0438\u043b\u044e\u0447\u0438\u043d\u0441\u043a-3",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0425\u0430\u0439\u0440\u044e\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043b\u044e\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042d\u0441\u0441\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u043b\u0430\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u043b\u0438\u0447\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0441\u0441\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0437\u044b\u0440\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(416)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4162)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a", "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(41631)2-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(41632)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(41633)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0439\u0447\u0438\u0445\u0438\u043d\u0441\u043a",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(41634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0440\u0435\u0439\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41641)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0433\u043e\u0440\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41642)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u044b\u0448\u0435\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0437\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u043d\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0435\u043c\u0434\u0436\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0439\u0447\u0438\u0445\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0445\u0430\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41649)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043c\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0433\u0434\u0430\u0433\u0430\u0447\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0435\u043c\u0434\u0436\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044b\u043d\u0434\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u0439\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(421)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4212)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a-\u043d\u0430-\u0410\u043c\u0443\u0440\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0430\u044f \u0413\u0430\u0432\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0445\u043e\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043c\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u043c\u0438\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0438\u043c. \u041f\u043e\u043b\u0438\u043d\u044b \u041e\u0441\u0438\u043f\u0435\u043d\u043a\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u044f\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0433\u0434\u043e\u043c\u044b\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u044f\u0437\u0435\u043c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0438\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4217)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a-\u043d\u0430-\u0410\u043c\u0443\u0440\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(423)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0412\u043e\u043b\u044c\u043d\u043e-\u041d\u0430\u0434\u0435\u0436\u0434\u0438\u043d\u0441\u043a\u043e\u0435", "\u0420\u0430\u0437\u0434\u043e\u043b\u044c\u043d\u043e\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(42335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u041a\u0430\u043c\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0442\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0424\u043e\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4234)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u043e\u0440\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u044c-\u0420\u044b\u0431\u043e\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a-\u0414\u0430\u043b\u044c\u043d\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0441\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0443\u0447\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u043e\u043a\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4236)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u041d\u0430\u0445\u043e\u0434\u043a\u0430", "\u041f\u043e\u0440\u0442 \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(42361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0441\u0435\u043d\u044c\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043d\u0443\u0447\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0440\u0442\u0438\u0437\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e-\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042f\u043a\u043e\u0432\u043b\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u0433\u0443\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0435\u0440\u043d\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0432\u0430\u043b\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043b\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0437\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(424)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4242)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u043d\u043e-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0440\u043e\u043d\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u043b\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0441\u0430\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0438\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0430\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0433\u043b\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043c\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044b\u043c\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u0438\u0440\u043d\u044b\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e-\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u043d\u043e-\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(426)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42622)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u0438\u0434\u043e\u0432\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043c\u0443\u0440\u0437\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043b\u0443\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(427)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42722)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0410\u043d\u0430\u0434\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u041a\u043e\u043f\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0435\u0440\u0438\u043d\u0433\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u042d\u0433\u0432\u0435\u043a\u0438\u043d\u043e\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041f\u0440\u043e\u0432\u0438\u0434\u0435\u043d\u0438\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041b\u0430\u0432\u0440\u0435\u043d\u0442\u0438\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041f\u0435\u0432\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0438\u043b\u0438\u0431\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(42739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041c\u044b\u0441 \u0428\u043c\u0438\u0434\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(471)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4712)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0447\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0443\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u0448\u0435\u0447\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0441\u0442\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u044b\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u043e\u043b\u0434\u0430\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043c\u0443\u0442\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044c\u0433\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043e\u044f\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u044f\u043c\u0438\u0446\u044b\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0430\u0442\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0438\u0433\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u0432\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432-\u041b\u044c\u0433\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043e\u043b\u043e\u0442\u0443\u0445\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u043d\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043d\u0442\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u044b\u0448\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0441\u0442\u043e\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0448\u0435\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043c\u0438\u0441\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(472)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4722)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u043e\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0439 \u041e\u0441\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u043a\u043e\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u043b\u0443\u0439\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0439\u0434\u0435\u043b\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0432\u0435\u043d\u044c\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0431\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u0445\u043e\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043a\u0438\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u0431\u0435\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4725)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u044b\u0439 \u041e\u0441\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0430\u0439\u0432\u043e\u0440\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u042f\u0440\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(473)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u043e\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u0430\u044f \u0423\u0441\u043c\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0425\u0430\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u0440\u0442\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0438\u0431\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0431\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043b\u043e\u0432\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0445\u043e\u043f\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0433\u043b\u0435\u0431\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041c\u0430\u043c\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u0431\u044c\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0442\u0443\u0440\u043b\u0438\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0432\u043e\u0440\u043e\u043d\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u0443\u0447\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043d\u0442\u0435\u043c\u0438\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0435\u0434\u0435\u0432\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u0445\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0421\u0435\u043c\u0438\u043b\u0443\u043a\u0438", "\u0421\u0435\u043c\u0438\u043b\u0443\u043a\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(47374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u043f\u044c\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0433\u043e\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0432\u043e\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47391)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47394)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0433\u043e\u0440\u0435\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47395)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u0432\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0441\u043e\u0448\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(474)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4742)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043f\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47461)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u044f\u0437\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47462)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0431\u0440\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0431\u0440\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47465)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47466)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u0435\u0434\u044f\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47467)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47468)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0433\u043e\u0440\u0443\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47469)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47471)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0434\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u043c\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u0431\u0443\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043f\u043b\u044b\u0433\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47476)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u043d\u043e\u0432\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47477)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043b\u0435\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47478)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0437\u043c\u0430\u043b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(475)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4752)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0431\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u0448\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043d\u0434\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u0440\u0434\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0441\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u044e\u0440\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0447\u0443\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0447\u043a\u0430\u043f\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432\u043a\u0430 \u0412\u0442\u043e\u0440\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043d\u0436\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0447\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0436\u0430\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0442\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043a\u0430\u0440\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0432\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(47559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043c\u0451\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(481)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4812)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0447\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0437\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u043c\u044f\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0433\u0430\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0451\u043c\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0434\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c-\u0416\u0438\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0438\u0441\u043b\u0430\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0434\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0444\u043e\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0440\u043e\u0433\u043e\u0431\u0443\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u044c\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u043c\u0438\u0434\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043d\u0430\u0441\u0442\u044b\u0440\u0449\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0438\u043d\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0448\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0445\u043e\u0432\u0449\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0434\u044b\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(482)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4822)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0432\u0435\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0436\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0436\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0448\u043d\u0438\u0439 \u0412\u043e\u043b\u043e\u0447\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0430\u0448\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043c\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0425\u043e\u043b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u043e\u0433\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0438\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u0435\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043d\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u044f\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0440\u0436\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0441\u0430\u0442\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0434\u043e\u043c\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0432\u0448\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0435\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0445\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0443\u0431\u0446\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0441\u044c\u0435\u0433\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0414\u0432\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043b\u0438\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48267)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0434\u0440\u0435\u0430\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0440\u043e\u043f\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48269)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0438\u0436\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043d\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u0441\u043e\u0432\u0430 \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043b\u043e\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0438\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(483)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4832)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u0440\u044f\u043d\u0441\u043a", "\u0421\u0435\u043b\u044c\u0446\u043e", "\u0411\u0435\u043b\u044b\u0435 \u0411\u0435\u0440\u0435\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(48330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u0430\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0433\u043d\u0435\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0414\u044f\u0442\u044c\u043a\u043e\u0432\u043e", "\u0424\u043e\u043a\u0438\u043d\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(48334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0443\u043a\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0430\u0447\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0435\u0442\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0433\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u0434\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0433\u043e\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0432\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0437\u044b\u0431\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0440\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0435\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u0434\u0443\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043d\u0435\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u0443\u0431\u0447\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0435\u043c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043a\u043e\u0442\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043c\u0430\u0440\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043b\u044b\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(484)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4842)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043e\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0443\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u044b\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0434\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0443\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0445\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0435\u0440\u0437\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48438)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0431\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48438)4-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48438)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0431\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u043c\u044b\u0448\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0437\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0434\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0437\u0434\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0449\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u043c\u0438\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0431\u044b\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0437\u043d\u043e\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0445\u0438\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0441\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u0430\u0441\u0442\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441-\u0414\u0435\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0442\u043b\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(485)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4852)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043a\u0440\u0430\u0441\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0442\u0430\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432 \u042f\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0441\u043b\u0430\u0432\u043b\u044c-\u0417\u0430\u043b\u0435\u0441\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u0438\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0433\u043b\u0435\u0431\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u0435\u043b\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u044b\u0448\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0440\u0435\u0439\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0448\u0435\u0445\u043e\u043d\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0439 \u041d\u0435\u043a\u043e\u0443\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0435\u0447\u0438\u0441\u0442\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4855)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(486)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4862)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041e\u0440\u0451\u043b", "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(48640)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48642)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u0442\u044b\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u043e\u043c\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0431\u043b\u044b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043c\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0446\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u044b\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043b\u0435\u0433\u043e\u0449\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48649)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "\u041c\u0422\u0421",
                desc: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0441 \u0437\u043e\u043d\u043e\u0432\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438"
            }, {
                mask: "+7(48662)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0417\u0430\u0440\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u043e\u0441\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0441\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48672)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0433\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48673)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48674)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043f\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48675)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0430\u0437\u0443\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48676)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0432\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48677)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0432\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48678)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043c\u0443\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48679)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043e\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(487)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4872)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0437\u043b\u043e\u0432\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0441\u0435\u043d\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043e\u043a\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043c\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0434\u043e\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0444\u0440\u0435\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043d\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043d\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48751)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0435\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48752)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u0430\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48753)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48754)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0435\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48755)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0451\u043f\u043b\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48756)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48761)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48762)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48763)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0432\u043e\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48766)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48767)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(48768)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(491)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4912)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0420\u044f\u0437\u0430\u043d\u044c", "\u0421\u043e\u043b\u043e\u0442\u0447\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(49130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0441\u0438\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044f\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a-\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u0431\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0447\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043c\u0438\u0447\u0443\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441-\u041a\u043b\u0435\u043f\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0430\u0431\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u043c\u0438\u0448\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0442\u0435\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0442\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u0436\u0438\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043f\u043e\u0436\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0445\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0445\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043a\u043e\u043f\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e-\u041d\u0435\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(492)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4922)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0434\u0430\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u043e\u0433\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0413\u043e\u0440\u0431\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0436\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0445\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0441\u044c-\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0431\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49243)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0443\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49243)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044c\u0447\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u0435\u0432-\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0434\u0443\u0436\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(493)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4932)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u0448\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u0435\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0434\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u0435\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0432\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0443\u0440\u043c\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0439\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0447\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u044f\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041b\u0430\u043d\u0434\u0435\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u043e\u0435-\u0425\u043e\u0432\u0430\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0438\u0447\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0436\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(494)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(4942)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49430)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0442\u0440\u043e\u043f\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0440\u0435\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435-\u043d\u0430-\u0412\u043e\u043b\u0433\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u0438\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0441\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u0438\u0433\u0430\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49440)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0444\u0435\u043d\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0445\u043b\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u0433\u0440\u0438\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0430\u0440\u044c\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043d\u0442\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0435\u043e\u0440\u0433\u0438\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u0430\u0437\u044b\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0445\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0432\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u044b\u0449\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(49453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(495)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(495)323-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)323-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)338-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u0440\u0435\u043d\u0442\u0433\u0435\u043d",
                operator: "\u041c\u0413\u0422\u0421",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+7(495)339-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u0440\u0435\u043d\u0442\u0433\u0435\u043d",
                operator: "\u041c\u0413\u0422\u0421",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+7(495)355-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430",
                operator: "\u041e\u0410\u041e \xab\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0441\u0432\u044f\u0437\u044c\xbb",
                desc: ""
            }, {
                mask: "+7(495)408-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)439-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+7(495)50#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044e\u0431\u0435\u0440\u0446\u044b",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)500-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)51#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041a\u043e\u0440\u043e\u043b\u0451\u0432", "\u042e\u0431\u0438\u043b\u0435\u0439\u043d\u044b\u0439" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)52#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430", "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0439", "\u0420\u0435\u0443\u0442\u043e\u0432" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)541-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)542-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)543-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)544-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)545-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)546-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)546-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)546-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430" ],
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)546-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0441\u043e\u0432\u0445\u043e\u0437\u0430 \u0438\u043c. \u041b\u0435\u043d\u0438\u043d\u0430",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0441\u043e\u0432\u0445\u043e\u0437\u0430 \u0438\u043c. \u041b\u0435\u043d\u0438\u043d\u0430", "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u043e\u0433\u043e", "\u0413\u043e\u0440\u043a\u0438 \u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0435" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u043e\u0433\u043e", "\u0413\u043e\u0440\u043a\u0438 \u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0435" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)548-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: "\u043f\u0440\u043e\u043c\u0437\u043e\u043d\u0430"
            }, {
                mask: "+7(495)549-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439", "\u043f\u043e\u0441. \u041d\u043e\u0432\u043e-\u0414\u0440\u043e\u0436\u0436\u0438\u043d\u043e", "\u043f\u043e\u0441. \u0418\u0437\u043c\u0430\u0439\u043b\u043e\u0432\u043e", "\u043f\u043e\u0441. \u0411\u0443\u043b\u0430\u0442\u043d\u0438\u043a\u043e\u0432\u043e", "\u043f\u043e\u0441. \u0414\u0443\u0431\u0440\u043e\u0432\u0441\u043a\u0438\u0439", "\u043f\u043e\u0441. \u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0430 \u0421\u0430\u0434\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)55#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044e\u0431\u0435\u0440\u0446\u044b",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)552-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044b\u0442\u043a\u0430\u0440\u0438\u043d\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)555-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044b\u0442\u043a\u0430\u0440\u0438\u043d\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)56#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)57#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041a\u043e\u0440\u043e\u043b\u0451\u0432", "\u041c\u044b\u0442\u0438\u0449\u0438", "\u042e\u0431\u0438\u043b\u0435\u0439\u043d\u044b\u0439" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)573-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0425\u0438\u043c\u043a\u0438",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)576-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)577-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u043e\u0431\u043d\u044f",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)578-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041b\u043e\u0431\u043d\u044f", "\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \xab\u0428\u0435\u0440\u0435\u043c\u0435\u0442\u044c\u0435\u0432\u043e\xbb" ],
                operator: "\u041f\u043e\u0440\u0442-\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)579-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439", "\u041b\u043e\u0431\u043d\u044f" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(495)58#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0425\u0438\u043c\u043a\u0438",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)585-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)589-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+7(495)59#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041e\u0434\u0438\u043d\u0446\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(495)597-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444", "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c" ],
                desc: ""
            }, {
                mask: "+7(496)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)20#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043b\u0434\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)21#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)22#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)25#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0451\u043b\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)26#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)28#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0442\u043e\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)30#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0410\u041e \u041a\u0430\u043b\u0438\u0442\u0430-\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)31#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0442\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)34#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u043e-\u0424\u043e\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)36#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u043a\u043e\u043b\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)37#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)38#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0436\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)40#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)41#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0417\u0443\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)42#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0417\u0443\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)43#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)44#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)45#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)46#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)51#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0433\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)52#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)53#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)54#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)55#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)56#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0435\u043b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)57#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0442\u0430\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)61#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u043c\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)63#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0445\u043e\u0432\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)64#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0443\u043f\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)66#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0440\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)67#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0435 \u041f\u0440\u0443\u0434\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)69#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)70#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)72#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)73#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)75#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)76#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)77#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(496)79#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)48#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0416\u0443\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)54#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+7(498)617-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: [ "\u0413\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434", "\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u043a\u0430" ],
                operator: "\u0417\u0410\u041e \xab\u0413\u0430\u0437\u0442\u0435\u043b\u0435\u043a\u043e\u043c\xbb",
                desc: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d"
            }, {
                mask: "+7(498)657-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430",
                operator: "\u041e\u041e\u041e \xab\u0413\u0430\u0437\u043f\u0440\u043e\u043c \u0441\u0432\u044f\u0437\u044c\xbb",
                desc: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d"
            }, {
                mask: "+7(498)664-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)68#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u041b\u043e\u0431\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)713-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(498)744-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(499)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(499)39#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: ""
            }, {
                mask: "+7(499)50#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444",
                desc: ""
            }, {
                mask: "+7(499)755-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: ""
            }, {
                mask: "+7(811)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8112)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0441\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0434\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u0443\u0433\u0438 \u041a\u0440\u0430\u0441\u043d\u044b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u044e\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0440\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0434\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043f\u043e\u0447\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043a\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0431\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0436\u0430\u043d\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0441\u0442\u043e\u0448\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0440\u0436\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u043e\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0448\u043a\u0438\u043d\u0441\u043a\u0438\u0435 \u0413\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u044b\u0442\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0447\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043d\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0432\u044f\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0435 \u041b\u0443\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(812)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(813)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0441\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u0440\u043e\u0432\u0441\u043a", "\u0428\u043b\u0438\u0441\u0441\u0435\u043b\u044c\u0431\u0443\u0440\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u043e\u043b\u0445\u043e\u0432", "\u041d\u043e\u0432\u0430\u044f \u041b\u0430\u0434\u043e\u0433\u0430", "\u0421\u044f\u0441\u044c\u0441\u0442\u0440\u043e\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0434\u0435\u0439\u043d\u043e\u0435 \u041f\u043e\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u043e\u043a\u0441\u0438\u0442\u043e\u0433\u043e\u0440\u0441\u043a", "\u041f\u0438\u043a\u0430\u043b\u0451\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u0445\u0432\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u0440\u0438\u0448\u0438", "\u0411\u0443\u0434\u043e\u0433\u043e\u0449\u044c" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439 \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u0441\u0435\u0432\u043e\u043b\u043e\u0436\u0441\u043a", "\u0422\u043e\u043a\u0441\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0413\u0430\u0442\u0447\u0438\u043d\u0430", "\u0412\u044b\u0440\u0438\u0446\u0430", "\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u0430\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u043d\u0433\u0438\u0441\u0435\u043f\u043f", "\u0418\u0432\u0430\u043d\u0433\u043e\u0440\u043e\u0434" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u044b\u0431\u043e\u0440\u0433", "\u0412\u044b\u0441\u043e\u0446\u043a", "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a", "\u0421\u0432\u0435\u0442\u043e\u0433\u043e\u0440\u0441\u043a" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(814)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8142)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u0440\u0442\u0430\u0432\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u044f\u0440\u0442\u0441\u0438\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0425\u0435\u043b\u044e\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0443\u0441\u043a\u0435\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0439\u043a\u043a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0425\u0430\u0430\u043f\u0430\u043b\u0430\u043c\u043f\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u0430\u043b\u0430\u043c\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81430)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0417\u0430\u043e\u0437\u0451\u0440\u043d\u044b\u0439", "\u041b\u0430\u043c\u0431\u0435\u0440\u0433", "\u0421\u043e\u0440\u0442\u0430\u0432\u0430\u043b\u0430", "\u0425\u044e\u043c\u043f\u0435\u043b\u044f" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0435\u0433\u0435\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0447\u043a\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041e\u043b\u0435\u043d\u0438\u0439", "\u041f\u0435\u0440\u0442\u043e\u0437\u0435\u0440\u043e", "\u0427\u0435\u0440\u043d\u044b\u0439 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0430\u043b\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u0434\u043e\u0437\u0435\u0440\u043e", "\u0418\u0434\u0435\u043b\u044c", "\u041a\u044f\u0440\u0433\u043e\u0437\u0435\u0440\u043e", "\u041f\u043e\u043f\u043e\u0432 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u043b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81431)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041d\u0430\u0434\u0432\u043e\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0438\u0442\u043a\u044f\u0440\u0430\u043d\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81433)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u044f\u0441\u043a\u0435\u043b\u044f", "\u0420\u0430\u0443\u0442\u0430\u043b\u0430\u0445\u0442\u0438", "\u0425\u0430\u0440\u043b\u0443", "\u0425\u0438\u0439\u0434\u0435\u043d\u0441\u0435\u043b\u044c\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81433)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0420\u044f\u0439\u043c\u044f\u043b\u044f", "\u0421\u0430\u043b\u043c\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81433)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0418\u043c\u043f\u0438\u043b\u0430\u0445\u0442\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81433)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u0435\u043f\u043f\u044f\u0441\u0438\u043b\u0442\u0430", "\u0423\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0435\u0434\u0432\u0435\u0436\u044c\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u043e\u043b\u0432\u0443\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u0443\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u043b\u0438\u043a\u0430\u044f \u0413\u0443\u0431\u0430", "\u0412\u0435\u043b\u0438\u043a\u0430\u044f \u041d\u0438\u0432\u0430", "\u041a\u0438\u0436\u0438", "\u041a\u043e\u0441\u043c\u043e\u0437\u0435\u0440\u043e", "\u041b\u0430\u043c\u0431\u0430\u0441\u0440\u0443\u0447\u0435\u0439", "\u0421\u0435\u043d\u043d\u0430\u044f \u0413\u0443\u0431\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0443\u043c\u0441\u0430", "\u041b\u0430\u0432\u0430\u0441 \u0413\u0443\u0431\u0430", "\u041b\u0443\u043c\u0431\u0443\u0448\u0438", "\u0427\u0435\u0431\u0438\u043d\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u043e\u0437\u0435\u0440\u043e", "\u0413\u0430\u0431\u0441\u0435\u043b\u044c\u0433\u0430", "\u0421\u043e\u0441\u043d\u043e\u0432\u043a\u0430", "\u0427\u0435\u043b\u043c\u0443\u0436\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)4-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041e\u0433\u043e\u0440\u0435\u043b\u044b\u0448\u0438", "\u0421\u0435\u0440\u0433\u0438\u0435\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)4-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0432\u0435\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)4-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0438\u043d\u0434\u0443\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81434)4-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0430\u0434\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041e\u043b\u043e\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041e\u043b\u043e\u043d\u0435\u0446", "\u041a\u043e\u0432\u0435\u0440\u0430", "\u0420\u0435\u0447\u043d\u0430\u044f \u0421\u0435\u043b\u044c\u0433\u0430", "\u0421\u044f\u043d\u0434\u0435\u0431\u0430", "\u0422\u0443\u043b\u043e\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u043b\u0435\u043a\u0441\u0430\u043b\u0430", "\u041c\u0435\u0433\u0440\u0435\u0433\u0430", "\u0420\u044b\u043f\u0443\u0448\u043a\u0430\u043b\u0438\u0446\u0430", "\u0422\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0438\u0434\u043b\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0442\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81436)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0443\u0439\u0442\u0435\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0435\u043b\u043e\u043c\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043c\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0417\u043e\u043b\u043e\u0442\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u043e\u043b\u0435\u0436\u043c\u0430", "\u041b\u0430\u043f\u0438\u043d\u043e", "\u041b\u0435\u0445\u0442\u0430", "\u041c\u0430\u043b\u0435\u043d\u044c\u0433\u0430", "\u041d\u043e\u0432\u043e\u0435 \u041c\u0430\u0448\u043e\u0437\u0435\u0440\u043e", "\u041d\u044e\u0445\u0447\u0430", "\u0422\u0443\u043d\u0433\u0443\u0437\u0430", "\u0425\u0432\u043e\u0439\u043d\u044b\u0439", "\u0428\u0443\u0435\u0440\u0435\u0446\u043a\u043e\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u0441\u043e\u0431\u0438\u0440\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0438\u0440\u0430\u043d\u0434\u043e\u0437\u0435\u0440\u043e", "\u041b\u0435\u0442\u043d\u0435\u0440\u0435\u0447\u0435\u043d\u0441\u043a\u0438\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81437)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0448\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u043e\u0443\u0445\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u0441\u0442\u0435\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0421\u043e\u0444\u043f\u043e\u0440\u043e\u0433", "\u0422\u0443\u043d\u0433\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u044f\u043e\u0437\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u043c\u0431\u0430\u0440\u043d\u044b\u0439", "\u041f\u043b\u043e\u0442\u0438\u043d\u0430", "\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439", "\u042d\u043d\u0433\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)4-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u0443\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)4-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u043a\u0430\u043b\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81439)45#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u044d\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0430\u0445\u0434\u0435\u043d\u043f\u043e\u0445\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81450)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0418\u0445\u0430\u043b\u0430", "\u041c\u0438\u0439\u043d\u0430\u043b\u0430", "\u042f\u043a\u043a\u0438\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81450)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0443\u0440\u043a\u0438\u0451\u043a\u0438", "\u0425\u0438\u0439\u0442\u043e\u043b\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81450)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u042d\u043b\u0438\u0441\u0435\u043d\u0432\u0430\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0434\u043e\u043f\u043e\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u0434\u0440\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0413\u0438\u0440\u0432\u0430\u0441", "\u0422\u0438\u0432\u0434\u0438\u044f", "\u042d\u043b\u044c\u043c\u0443\u0441" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a\u0430\u044f \u0413\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0438\u0432\u0430\u0447", "\u041d\u043e\u0432\u0438\u043d\u043a\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u044f\u043f\u0435\u0441\u0435\u043b\u044c\u0433\u0430", "\u041d\u0435\u043b\u0433\u043e\u043c\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0447\u0435\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81451)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0421\u0443\u043d\u0430", "\u042f\u043d\u0438\u0448\u043f\u043e\u043b\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0434\u043e\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0411\u043e\u0447\u0438\u043b\u043e\u0432\u043e", "\u041a\u0430\u0440\u0448\u0435\u0432\u043e", "\u041a\u043e\u043b\u043e\u0432\u043e", "\u041a\u043e\u043b\u043e\u0434\u043e\u0437\u0435\u0440\u043e", "\u0421\u0435\u043c\u0451\u043d\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u0434\u043b\u0430", "\u041a\u0443\u0431\u043e\u0432\u043e", "\u041e\u043d\u0435\u0436\u0441\u043a\u0438\u0439", "\u0420\u0430\u0433\u043d\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0440\u0438\u0432\u0446\u044b", "\u041f\u0440\u0438\u0440\u0435\u0447\u043d\u044b\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0410\u0432\u0434\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81452)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u044f\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043b\u0435\u0432\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81454)5-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81454)5-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u042e\u0448\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81454)5-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u0439\u043d\u0438\u0446\u0430", "\u041a\u0443\u0443\u0441\u0438\u043d\u0438\u0435\u043c\u0438", "\u041b\u0443\u0443\u0441\u0430\u043b\u043c\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0443\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u0438\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0435\u0431\u043e\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0438\u0433\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u043e\u043c\u0430", "\u041f\u0435\u043d\u0438\u043d\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043a\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u0434\u043c\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81455)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u043d\u0434\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0440\u044f\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0438\u043b\u043b\u0430 \u0413\u043e\u0440\u0430", "\u0421\u043e\u0434\u0434\u0435\u0440", "\u0421\u044f\u043f\u0441\u044f", "\u042d\u0441\u0441\u043e\u0439\u043b\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0434\u043b\u043e\u0437\u0435\u0440\u043e", "\u041a\u0438\u043d\u0435\u043b\u0430\u0445\u0442\u0430", "\u041a\u043e\u0439\u0432\u0443\u0441\u0435\u043b\u044c\u0433\u0430", "\u041a\u043e\u043b\u0430\u0442\u0441\u0435\u043b\u044c\u0433\u0430", "\u0421\u0430\u0432\u0438\u043d\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u0430\u043b\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0430\u0442\u0440\u043e\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0435 \u0412\u0430\u0436\u0438\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0440\u043e\u0448\u043d\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81456)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0432\u044f\u0442\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043e\u044f\u0440\u0432\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0430\u0445\u043a\u043e\u043b\u0430\u043c\u0431\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0440\u043e\u0441\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041d\u0430\u0439\u0441\u0442\u0435\u043d\u044c\u044f\u0440\u0432\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0433\u0430\u0440\u0443\u0441", "\u0421\u0443\u043e\u0451\u043a\u0438", "\u0422\u043e\u0439\u0432\u043e\u043b\u0430", "\u0425\u0430\u0443\u0442\u043e\u0432\u0430\u0430\u0440\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0448\u043a\u0435\u043b\u0438\u0446\u0430", "\u041b\u043e\u0439\u043c\u043e\u043b\u0430", "\u041f\u0438\u0439\u0442\u0441\u0438\u0451\u043a\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u0435\u043f\u043f\u044f\u0441\u044e\u0440\u044c\u044f", "\u0420\u0430\u0439\u043a\u043e\u043d\u043a\u043e\u0441\u043a\u0438", "\u0421\u0443\u0439\u0441\u0442\u0430\u043c\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81457)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u043f\u043f\u044f\u043d\u0438\u0435\u043c\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043b\u0433\u0430\u043b\u0430\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041f\u0430\u043d\u043e\u0437\u0435\u0440\u043e", "\u041f\u043e\u043d\u044c\u0433\u043e\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u0432\u043d\u0435\u043f\u043e\u0440\u043e\u0433", "\u041a\u0440\u0438\u0432\u043e\u0439 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0430\u0431\u043e\u0447\u0435\u043e\u0441\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u043e\u043c\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0443\u0437\u0435\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0430\u0431-\u0413\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81458)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81459)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0441\u0442\u043e\u043c\u0443\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81459)9-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0442\u043e\u043a\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81459)9-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u043e\u043a\u043d\u0430\u0432\u043e\u043b\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(815)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8152)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043d\u0435\u0436\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u044f\u0440\u043d\u044b\u0435 \u0417\u043e\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043d\u0434\u0430\u043b\u0430\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0434\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043d\u0447\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e\u043c\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0432\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0434\u0436\u0438\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u044f\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0435\u043d\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0417\u0430\u043f\u043e\u043b\u044f\u0440\u043d\u044b\u0439", "\u041d\u0438\u043a\u0435\u043b\u044c" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(81555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043f\u0430\u0442\u0438\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043c\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(816)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8162)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81650)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0444\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u043c\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u0420\u0443\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0448\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u044c\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81657)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0443\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0434\u043e\u0440\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81659)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0435\u0441\u0442\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81660)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u0430\u044f \u0412\u0438\u0448\u0435\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0442\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81662)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u043b\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u043e\u0439\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81668)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u044b\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81669)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(817)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8172)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0433\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0430\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044e\u0436\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0439 \u0423\u0441\u0442\u044e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0442\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81740)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0447\u043c\u0435\u043d\u0433\u0441\u043a\u0438\u0439 \u0413\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u0433\u043e\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0431\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0436\u0435\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u043e \u0438\u043c\u0435\u043d\u0438 \u0411\u0430\u0431\u0443\u0448\u043a\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0442\u0435\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81747)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u044e\u043a\u0441\u0435\u043d\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81748)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u043d\u043e\u0433\u0441\u043a\u0438\u0439 \u0413\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81749)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81751)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043a\u0441\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81752)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044f\u043c\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81753)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81754)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81755)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u044f\u0437\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81756)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81757)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0438\u043b\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81758)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043f\u0438\u043d \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81759)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0432\u0430\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(818)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81830)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0425\u043e\u043b\u043c\u043e\u0433\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81831)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81832)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041f\u043b\u0435\u0441\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81833)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041b\u0435\u0448\u0443\u043a\u043e\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81834)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041c\u0438\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81835)9-0#-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0421\u043e\u043b\u043e\u0432\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81836)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0412\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81837)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u0442\u043b\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81838)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u044f\u043d\u0434\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81839)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041e\u043d\u0435\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81840)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81841)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0430\u0440\u0433\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81842)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0421\u0435\u0432\u0435\u0440\u043e\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81843)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u043e-\u041f\u043e\u0434\u043e\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81848)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041c\u0435\u0437\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81850)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u0440\u044f\u0436\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81851)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0428\u0435\u043d\u043a\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81852)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u043e\u0432\u043e\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81853)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u0430\u0440\u044c\u044f\u043d-\u041c\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81854)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0422\u043e\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81855)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81856)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0430\u0440\u043f\u043e\u0433\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81858)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u043d\u043e\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(81859)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u042f\u0440\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(820)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8202)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043f\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(821)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8212)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0421\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u044b\u043b\u044c\u0433\u043e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u0438\u0437\u0438\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041a\u043e\u0439\u0433\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041e\u0431\u044a\u044f\u0447\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0410\u0439\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041a\u043e\u0440\u0442\u043a\u0435\u0440\u043e\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0443\u043b\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e-\u041f\u0435\u0447\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0415\u043c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0418\u0436\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0442\u044c-\u0426\u0438\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041f\u0435\u0447\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0418\u043d\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u0443\u043a\u0442\u044b\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0421\u043e\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(82151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u043e\u0440\u043a\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8216)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(831)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8313)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0438\u0432\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043a\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0411\u043e\u043b\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0445\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0437\u0430\u043c\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0432\u043e\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044b\u0441\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0442\u043b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043d\u0448\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u0443\u043d\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043d\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u0430\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u0411\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0435\u0440\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0440\u043d\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u043a\u0430\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043c\u0451\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u0442\u044b\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043d\u044f\u0433\u0438\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u041c\u0443\u0440\u0430\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0435 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u043e\u043b\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041f\u0430\u0432\u043b\u043e\u0432\u043e", "\u0412\u043e\u0440\u0441\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(83172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0442\u0443\u0440\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0432\u0430\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043b\u0435\u0431\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0434\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83190)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83192)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u043b\u044c\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0447\u0435\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83194)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0430\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u043a\u043e\u044f\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83197)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0438\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(833)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8332)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0431\u0430\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0444\u0430\u043d\u0430\u0441\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0430\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0442\u0441\u043a\u0438\u0435 \u041f\u043e\u043b\u044f\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0448\u0438\u0436\u0435\u043c\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u0440\u043e\u0432\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0443\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043b\u044c\u043c\u0435\u0437\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043a\u043d\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u0435\u043b\u044c\u043d\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043c\u0435\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u044f\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043c\u044b\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u0441\u0438\u043d\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0443\u0442\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043f\u0430\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0436\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043d\u0447\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432\u043e-\u0427\u0435\u043f\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0436\u0443\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f \u0425\u043e\u043b\u0443\u043d\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(834)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8342)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0421\u0430\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0440\u0434\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0421\u0442\u0430\u0440\u043e\u0435 \u0428\u0430\u0439\u0433\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0435\u043c\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0442\u044f\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0427\u0430\u043c\u0437\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0420\u043e\u043c\u043e\u0434\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u043e\u0447\u043a\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041b\u044f\u043c\u0431\u0438\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0418\u0433\u043d\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0441\u043b\u043e\u0431\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0415\u043b\u044c\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u0435\u043c\u043d\u0438\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u0435\u043d\u044c\u0433\u0443\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0414\u0443\u0431\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0430\u0434\u043e\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0418\u043d\u0441\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0420\u0443\u0437\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u043e\u0432\u044b\u043b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0442\u044e\u0440\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u043e\u0440\u0431\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u042f\u0432\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0417\u0443\u0431\u043e\u0432\u0430 \u041f\u043e\u043b\u044f\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(835)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8352)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8352)7#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041d\u043e\u0432\u043e\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0410\u043b\u0430\u0442\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0411\u0430\u0442\u044b\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0430\u043d\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u043e\u0437\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0410\u043b\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0428\u0443\u043c\u0435\u0440\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0412\u0443\u0440\u043d\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0418\u0431\u0440\u0435\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0443\u0433\u0435\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041c\u043e\u0440\u0433\u0430\u0443\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041c\u0430\u0440\u0438\u0438\u043d\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041f\u043e\u0440\u0435\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0423\u0440\u043c\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0426\u0438\u0432\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0428\u0435\u043c\u0443\u0440\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u0434\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u043d\u0442\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u043b\u044c\u0447\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u0427\u0435\u0442\u0430\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(836)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8362)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0419\u043e\u0448\u043a\u0430\u0440-\u041e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83631)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u043e\u0437\u044c\u043c\u043e\u0434\u0435\u043c\u044c\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83633)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0421\u0435\u0440\u043d\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041c\u0430\u0440\u0438-\u0422\u0443\u0440\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041c\u043e\u0440\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041d\u043e\u0432\u044b\u0439 \u0422\u043e\u0440\u044a\u044f\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u0443\u0436\u0435\u043d\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041f\u0430\u0440\u0430\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83641)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041e\u0440\u0448\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u0438\u043b\u0435\u043c\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u042e\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(83645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0417\u0432\u0435\u043d\u0438\u0433\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)22#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0421\u0443\u0445\u0443\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)23#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0430\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0443\u0434\u0430\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)25#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u041e\u0447\u0430\u043c\u0447\u044b\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)26#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0422\u043a\u0443\u0430\u0440\u0447\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0443\u043b\u0440\u044b\u043f\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(840)28#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(841)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8412)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u043d\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0441\u0441\u043e\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0448\u043c\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u041a\u0430\u043c\u0435\u0448\u043a\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044b\u0448\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0434\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043f\u0430\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043a\u0448\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0447\u0435\u043b\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u041b\u043e\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u043c\u0435\u0442\u0447\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0437\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0438\u0449\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043c\u044b\u0448\u0435\u0439\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u0430\u044f \u0421\u0435\u0440\u0434\u043e\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u043e\u0432\u0447\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u0440\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0434\u043e\u0431\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(842)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8422)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041c\u0430\u0439\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0434\u0430\u043a\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u0430\u044f \u041c\u0430\u043b\u044b\u043a\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043d\u0433\u0438\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u0435\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0438\u043c\u0438\u0442\u0440\u043e\u0432\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0437\u043e\u0432\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u043f\u0430\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0434\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0439 \u0421\u044b\u0437\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043d\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0448\u043a\u0430\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0439\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u041d\u0430\u0433\u0430\u0442\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0441\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041a\u0443\u043b\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0448\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(843)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0437\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0427\u0438\u0441\u0442\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0441\u0443\u0431\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0443\u0440\u043b\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0435 \u041c\u0430\u0442\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u0448\u0435\u0448\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0422\u044e\u043b\u044f\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0420\u044b\u0431\u043d\u0430\u044f \u0421\u043b\u043e\u0431\u043e\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u0433\u0430\u0442\u044b\u0435 \u0421\u0430\u0431\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u043a\u043c\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041f\u0435\u0441\u0442\u0440\u0435\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u043b\u0442\u0430\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0410\u0442\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u041a\u0430\u0439\u0431\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0422\u0435\u0442\u044e\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0430\u0440\u043e\u0435 \u0414\u0440\u043e\u0436\u0436\u0430\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043f\u0430\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u043c\u0441\u043a\u043e\u0435 \u0423\u0441\u0442\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041b\u0430\u0438\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0423\u0441\u043b\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0427\u0435\u0440\u0435\u043c\u0448\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(844)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(844)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(844)70#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8443)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u044e\u043f\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0445\u0430\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0430\u043d\u043d\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0434\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0440\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0448\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84461)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u0438\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84462)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043c\u044b\u043b\u0436\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0430\u0444\u0438\u043c\u043e\u0432\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84465)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0440\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84466)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0435\u0442\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84467)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u043e\u0432\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84468)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0438\u0449\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u043e\u0432\u0438\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044b\u0448\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84476)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84477)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84478)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84479)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0410\u0445\u0442\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84492)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u043b\u0430\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84493)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041f\u043e\u043b\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84494)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84495)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u044b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(845)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8452)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)5#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)7#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8453)9#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0442\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u043a\u0430\u0434\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0440\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0448\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u043e\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044b\u0441\u044b\u0435 \u0413\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0442\u043a\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0435 \u0411\u0443\u0440\u0430\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0442\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u041a\u0443\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0442\u0435\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0443\u0437\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0440\u0433\u0430\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0448\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043a\u0440\u043e\u0443\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0435\u043f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u043a\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84573)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0445\u043e\u0432\u043d\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84574)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0433\u0430\u0447\u0451\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84575)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u043b\u044e\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84576)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0438\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84577)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84578)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432 \u0413\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84579)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u0442\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84591)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0439 \u041a\u0430\u0440\u0430\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u0430\u043b\u044b\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84596)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)300-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)302-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)303-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)309-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)31#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)33#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)34#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)37#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(846)9##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84630)5-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a\u0438\u0439 \u0423\u0442\u0451\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0439\u0431\u044b\u0448\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043f\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8464)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8464)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8464)9#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0432\u043e\u043b\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u0433\u043e\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84650)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u043b\u043d\u043e-\u0412\u0435\u0440\u0448\u0438\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043d\u0442\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u044f\u0432\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0430\u043a\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0445\u0432\u0438\u0441\u0442\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84657)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0445\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84660)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u043b\u044c-\u0427\u0435\u0440\u043a\u0430\u0441\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0442\u0440\u0430\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0448\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u0430\u0442\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84670)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0444\u0442\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84671)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84672)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84673)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0413\u043b\u0443\u0448\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84674)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u0440\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84675)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84676)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0437\u0435\u043d\u0447\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84677)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u043e\u0440\u043e\u0441\u0442\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(847)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84722)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042d\u043b\u0438\u0441\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0413\u043e\u0440\u043e\u0434\u043e\u0432\u0438\u043a\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0418\u043a\u0438-\u0411\u0443\u0440\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041b\u0430\u0433\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041c\u0430\u043b\u044b\u0435 \u0414\u0435\u0440\u0431\u0435\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041a\u0435\u0442\u0447\u0435\u043d\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041f\u0440\u0438\u044e\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0421\u0430\u0434\u043e\u0432\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0426\u0430\u0433\u0430\u043d \u0410\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042f\u0448\u0430\u043b\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042f\u0448\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84747)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0426\u0430\u0440\u044b\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(848)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8482)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(84862)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0433\u0443\u043b\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(851)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8512)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0445\u0442\u0443\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043d\u043e\u0442\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043a\u0440\u044f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0437\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0430\u0440\u0430\u0431\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0451\u0440\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u0438\u043c\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0447\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(855)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8552)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8553)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043b\u044c\u043c\u0435\u0442\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u043d\u0434\u0435\u043b\u0435\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8555)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0438\u0436\u043d\u0435\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8555)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0438\u0436\u043d\u0435\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0433\u0440\u044b\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0442\u0430\u043d\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u043d\u0437\u0435\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0443\u0441\u043b\u044e\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0415\u043b\u0430\u0431\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0417\u0430\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0421\u0430\u0440\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u043c\u0430\u0434\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0432\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8557)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8557)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0437\u043d\u0430\u043a\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0423\u0440\u0443\u0441\u0441\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85594)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0433\u0443\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(85595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041b\u0435\u043d\u0438\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(861)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u043c\u0430\u0448\u0451\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u044b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043d\u0430\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041b\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u043c\u0430\u0432\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u043e\u043f\u043e\u0442\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u043f\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0435\u043b\u0435\u043d\u0434\u0436\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0440\u0435\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u043e-\u0410\u0445\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0442\u0440\u0430\u0434\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a-\u043d\u0430-\u041a\u0443\u0431\u0430\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0433\u0430\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0435\u043c\u0440\u044e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u0449\u0435\u0440\u0431\u0438\u043d\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043f\u0448\u0435\u0440\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u043c\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u0430\u044f \u0413\u043b\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0440\u044e\u0445\u043e\u0432\u0435\u0446\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u044b\u0441\u0435\u043b\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0431\u0438\u043b\u0438\u0441\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u044f\u0447\u0438\u0439 \u041a\u043b\u044e\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0443\u043b\u044c\u043a\u0435\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u044b\u043b\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043d\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u043b\u0442\u0430\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0435\u0432\u0435\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0430\u043f\u0441\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0449\u0451\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8617)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86192)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0432\u043a\u0430\u0437\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0431\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u0445\u043e\u0440\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(862)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0410\u0448\u0435", "\u0412\u0430\u0440\u0434\u0430\u043d\u0435", "\u0413\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0430", "\u0413\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0430", "\u0421\u043e\u0447\u0438", "\u0425\u043e\u0441\u0442\u0430" ],
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)23#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "\u041c\u0422\u0421",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0434\u043b\u0435\u0440",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)247-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0434\u0435\u043f\u0441\u0442\u0430",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)252-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0414\u0430\u0433\u043e\u043c\u044b\u0441", "\u041b\u043e\u043e" ],
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0437\u0430\u0440\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(862)295-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+7(863)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(863)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(863)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8634)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8634)43-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8634)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0434\u0438\u043e\u043d\u043e\u0432\u043e-\u041d\u0435\u0441\u0432\u0435\u0442\u0430\u0439\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0442\u0432\u0435\u0435\u0432-\u041a\u0443\u0440\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0437\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0446\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0431\u044b\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043b\u0442\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8635)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0447\u0435\u0440\u043a\u0430\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043a\u0441\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0414\u043e\u043d\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0451\u0448\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0432\u0435\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043c\u0438\u043a\u0430\u0440\u0430\u043a\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0430\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0441\u0451\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u0440\u043d\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8636)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043e\u043b\u043e\u043c\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0437\u0430\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a-\u0428\u0430\u0445\u0442\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0421\u0443\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0448\u0430\u0445\u0442\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0433\u043e\u0440\u043b\u044b\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0435\u043b\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0447\u0430\u043d\u043e\u043a\u043e\u043f\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043b\u0435\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0438\u043c\u043e\u0432\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0435\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u043c\u043e\u043d\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86382)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043a\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86383)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f \u041a\u0430\u043b\u0438\u0442\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86384)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86385)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u043b\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86386)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0430\u0441\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86387)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0442\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86388)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86389)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u044e\u0442\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8639)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0434\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86391)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0438\u043c\u043b\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86393)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86394)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86395)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u041c\u0430\u0440\u0442\u044b\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043b\u0438\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86397)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0446\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(865)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8652)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0440\u0430\u0447\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043f\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0432\u043e\u043a\u0443\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0437\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u043e\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0447\u0443\u0431\u0435\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0432\u0438\u043d\u043d\u043e\u043c\u044b\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0441\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0444\u0442\u0435\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0443\u0434\u0435\u043d\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0437\u0433\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0435\u043f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0442\u043d\u044f\u044f \u0421\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(866)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8662)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041d\u0430\u043b\u044c\u0447\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86630)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0427\u0435\u0433\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86631)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0422\u0435\u0440\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86633)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0411\u0430\u043a\u0441\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041d\u0430\u0440\u0442\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041a\u0430\u0448\u0445\u0430\u0442\u0430\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0417\u0430\u043b\u0443\u043a\u043e\u043a\u043e\u0430\u0436\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0422\u044b\u0440\u043d\u044b\u0430\u0443\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(867)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8672)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0412\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u043b\u0430\u0433\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u0440\u0434\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0414\u0438\u0433\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0427\u0438\u043a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u042d\u043b\u044c\u0445\u043e\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u041c\u043e\u0437\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0411\u0435\u0441\u043b\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(86739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u0440\u0445\u043e\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(871)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8712)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0440\u043e\u0437\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u0435\u0434\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u0442\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0435\u043b\u043a\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u0447\u0445\u043e\u0439-\u041c\u0430\u0440\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041d\u0430\u0443\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0423\u0440\u0443\u0441-\u041c\u0430\u0440\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u0440\u0433\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041d\u043e\u0436\u0430\u0439-\u042e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0443\u0434\u0435\u0440\u043c\u0435\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0435\u0440\u043d\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0443\u0440\u0447\u0430\u043b\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: [ "\u0422\u043e\u043b\u0441\u0442\u043e\u0439-\u042e\u0440\u0442", "\u0421\u0442\u0430\u0440\u044b\u0435 \u0410\u0442\u0430\u0433\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(87164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0442\u0443\u043c-\u041a\u0430\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(872)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8722)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0421\u0435\u0440\u0433\u043e\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0430\u0441\u0430\u0432\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0440\u0430\u0431\u0443\u0434\u0430\u0445\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0443\u043d\u0437\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0438\u0437\u0438\u043b\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0433\u0430\u0440\u0430\u043c\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0441\u0443\u043c\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0439\u043d\u0430\u043a\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0434\u0436\u0430\u043b\u0438\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0438\u0437\u043b\u044f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u0435\u0440\u0431\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u043b\u0430\u043a\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: [ "\u0422\u043f\u0438\u0433", "\u0410\u0433\u0443\u043b" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(87244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0438\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0418\u0437\u0431\u0435\u0440\u0431\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0441\u043f\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0431\u0430\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u043a\u0430\u044f\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0443\u0447\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041b\u0435\u0432\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0423\u0440\u043a\u0430\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0413\u0435\u0440\u0433\u0435\u0431\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u0435\u0440\u0435\u043a\u043b\u0438-\u041c\u0435\u043a\u0442\u0435\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0423\u043d\u0446\u0443\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0413\u0443\u043d\u0438\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0435\u0431\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87260)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0443\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u0430\u0440\u0443\u043c\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u0445\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0420\u0443\u0442\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u043b\u044f\u0440\u0430\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0426\u0443\u0440\u0438\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87267)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u043c\u0443\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0412\u0430\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u0442\u043b\u0438\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u0445\u0435\u043b\u044c\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u0433\u0432\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0435\u0436\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u041e\u0433\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u042e\u0436\u043d\u043e-\u0421\u0443\u0445\u043e\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87279)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u044b\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(873)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8732)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041d\u0430\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041e\u0440\u0434\u0436\u043e\u043d\u0438\u043a\u0438\u0434\u0437\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041c\u0430\u043b\u0433\u043e\u0431\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u0414\u0436\u0435\u0439\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041a\u0430\u0440\u0430\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041c\u0430\u0433\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+7(877)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8772)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041c\u0430\u0439\u043a\u043e\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87770)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041a\u043e\u0448\u0435\u0445\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87771)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0422\u0430\u0445\u0442\u0430\u043c\u0443\u043a\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87772)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0410\u0434\u044b\u0433\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87773)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0425\u0430\u043a\u0443\u0440\u0438\u043d\u043e\u0445\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87777)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0422\u0443\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87778)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87779)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0413\u0438\u0430\u0433\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(878)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8782)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87870)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0410\u0434\u044b\u0433\u0435-\u0425\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87872)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: [ "\u0422\u0435\u0431\u0435\u0440\u0434\u0430", "\u0414\u043e\u043c\u0431\u0430\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+7(87873)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0425\u0430\u0431\u0435\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87874)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041a\u0430\u0432\u043a\u0430\u0437\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87875)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u0414\u0436\u0435\u0433\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87876)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041f\u0440\u0435\u0433\u0440\u0430\u0434\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87877)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0423\u0447\u043a\u0435\u043a\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87878)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0417\u0435\u043b\u0435\u043d\u0447\u0443\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87879)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(879)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87922)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0412\u043e\u0434\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+7(8793)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u044f\u0442\u0438\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87932)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87934)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0441\u0441\u0435\u043d\u0442\u0443\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87935)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0440\u043c\u043e\u043d\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87937)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0441\u043b\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87938)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87951)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0435\u043e\u0440\u0433\u0438\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87961)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0441\u0441\u0435\u043d\u0442\u0443\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(87964)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+7(9##)###-##-##",
                cc: "RU",
                cd: "Russia",
                type: "mobile"
            } ]
        }
    }), Inputmask;
});