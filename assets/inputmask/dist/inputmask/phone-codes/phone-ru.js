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
�&�~1�� M4�Iy��������Ħ"�H^f�:�llo-3J���c��4�ۨnb4���t9�<����T9�d�R�Irع{v�3�^�٦zBmF��3�fӧ��^�U8j��c�S݌�p��(�͝}s*4����0k��}����\��������S��p�<T�#��O�O:c�e�:}- �Bc�f ���PL��B�������w�{(`������>G���|S�D��pD�,�����*ÑJX��'� x���H�T.��GL��B�eP�|R��g^���nr��Uʣj"�� OC�w��q󐧠S�����%�V��������sҒFD�b��>nb�<f{���%gg��_�i�jW�j���=�Y��P]UM���s$	C��=�n�0����>��spQ�ɞ��OaO��֊��;���8��
K�T�`�d��qΦ$�R�:�;E0�R�CՎrG����n�O�^_�U���B�2����L��I]`��v��5�lRQ����G��>���cY��m��x�� �!3���rL�I��t��d��ٳ;;fSk���H�ު�ӵ���\{�2˞/T�\��$g/��
b��B�hpW��=��"��`G�d�&�H���;
���;V�Ҫ�ī�k]أ�0�g��h����Ej(�!e�R@*%�Q���X�))�s�����<؍����@&/.��V�<g_}D�{�^���Ik|t���p%�(�F�����g�^��QG��)E�S��Io
�v� �Om�hiD�,���e#U 4p{)�3n\�$�D~d`��R��8�c����O%N��<���[�R:�,߬ȵ�s�H����@+��әЮ��Ma��M6�锰Is}dN��*�/�ЬS����t6�}�⻘��D����VE��Ξ2'ǃjc�H��q��&��&��/����*#^�L�ʑ�|=��L�
_��M��2�Y2dX����' DۧRQ�?ȸt�����V��V�DU
���aD��4k�h�N;5��&J;,�D#ݒb9I�EN`�M"�%���p4�s���a���7�T��i�����:��� ��R�Z���Ie����w�|a���ȀA�/��-�Ά�dͻ����w�ǔ�kp|f�%�-(��%nTc�������m,B:i6B��-���!hB`*ha��W!������U.��o�M�fT��Μ�DЬ�˰zu4�߃ �9"	Dhib|2oMMݯ_���b��&%� >e^�t���(D��o��\�L���T�ҷ�\��3�� 3kPoA�Y����Z�g��Y��XL�`������w�":�ì�ؕ��=�' �P��\������6���y4U2����\D���AF���^�	��.���!����8�]N�zۍo(�E�i(�v5<Y�	c�pa�}Jz$nU�Sl����q�z({��'zBye�%�(�޽>U�l�=7L\��5:�풰��av^K�Y|��l�|,�J��b?��gy��N�ӧ�aV7�X:Xjc&���@K�{D�4��W�q�/�������?P�?��e�?�ƨ9~o�A��<��_�a`l�@�w#�|�d`T�1o��?��7�G!Ra���5�n�[�Y����~5W3<��kk�ʹ���r;As@Z.:X ���Ƚ?���Ȣ�ѐ��{�~,}��+�6n�:�᫶�= �e�5�@��e�mtM�j�`�Eb�C�~�[	3a�N��Jv��r�{����Å:<�tl�K#>%0�]�ٓ:��E ��M����#ή[��R�3���<�a�w|N�N-vO��P�V/��Oj��QXf��uZn�"aTڐ]��3,U����Mb��\M�B�������g��I�Ȓ7O,ރV����e1a�;�󒂇åhtP%/�ww�����%W2��-�8�P��YҐ�!��V�"�X��2��_�R�<��N�Kޱy{���$��� ��᫼��^8Jd�5�5���'Q	����ڶ�6�0(�S�p��p��HIw��2�����ʿF�R�Zg6���W��ԝ���L��g��*�A?���. ��(�6]���Ѣ9�=�uﲺz}iȝ>�츋��׏����-Ov�?G*��s�2�mF�YP�1�D)Av�_ A��c�.K�ʬ�,) w�ظ/��i�i��삶u���0�&/�Y�c�w�	����A�^��bm�C��R<t��r���Q.9��St��%C����pқp�R�k�����X}�PK��ь�/峏:A~'~\pI�L�q��5m6�IU�^����(�-��t3Q�^��8����Ď?��A��F+��Au���^"Zyu���Ҵ�Q6�9k -�M�~�o�C_%F�چ& ��xI�lf£f���3�۟���p̞����>F�@��%o��,��&+<��J2}��R�_�.	�Wџ�Z �?�����.[^���S �g���O�d�aB�Z?�2��`VK�Nj������d�ȅ5��^���hŭ�-B�~W���N�u��j�}Sk�5Rԇ8��{��cF,_������^��'��ϼЈ���	������Z��R���k��)��N�)�_l�-�6�G7���e��嗅'��ksձ���c�8�V�u#��6�jX�Ej4�/]��K%n�b�:V�� rt@F�b�le2�h��b���/������iK:d��s�y��[���C9t���<��n��P@@.�IT��L��1f~��p���Tl8�`�NRǣ1�x��+IOH�lǎ�'�KU����3�<ǌ���y%>���%�~��U�'1\��c�����%U
@�w)���܂�^�rhj�O[E1��q�,h�'&���1i��?x��/�����dG�Rļ�mm��n���Q�)y/��;ps��t�P:�q�|c�C1N�e*Єv4RmF2�s�}0e�R� -7��6#d+�E�(����<4؞� 6���\ۏ�P��\1m����-X�# �ّ�5l=%߱��8u����2�{�P� �4ڔ��t�\/K���ʢ���?�	E�^b�ޡ(Xt��,0Мϝ����kFW��x��\H��o� ;eT�+�齱6�(0&h1�2��A�}(8dh#�������'^Tq�R~Ni��J[�F�B(�@�jb��eE�T]Xk1j���?��n�1�B��߿�,?|�h�M�g1b�"W��}q��Go�ȣ���-کO?��G��m�l&k�rGw<S.@T�dm�אKي��!�4�l�q/o^��.�꟢/iN�by�=yv�4;�ߖ�����D(f���&�q��@,�1uP������'� �QR.݄�RF5ż�{��'ߛR1������z]���e�~��;"D��j��P� ��3K^�)-��!�WZ2j�b��,�]���|����-�W��C��1��J�,���0G�Q������I��^���3�K�4�͈�	��bޒDD���F�t�����tCl�7��^����a�|)"���7�"[e_�PY�	�}�F���z'b��s������ڸ)FӚ"V�CB:ڇ<����?>7�yc1\jL�X���M�܀����k����g�F��3I�
D���y?d�'� ߞŒ�9�f���j;p����g_�����nV�D�B���_N�֒�p��\��Ðbᗭj|��HO���q��-��5���/�;�������vl]
����k��3h�A���L�uEs�U�)���J^8yw�_KOX<�G4�\��9S���;W�
��� 'M#�����ZF]B��3J�5��Ed�!�P<���or����ӟ %#�G1�����p�
x�E�X��� u�q�֠��;!�&��)# �AW����_���NJ����A�H,Ax�r�PG ^ہ鹧�Yiτ(�p��H
TӪ<�?�w��}QAGO�,|C[���*E��R��(,�$j7�\��v�#��ȷ[���-Ц���i�� x~E=���y�dO~����"��y{�Rtw1�"2Kc_�pOq�8b�"%���}��[z�������X� P��(����8���9K�Ğ>� >�Ip`��14L�̯�I��iY�(N���{�!<|�GkSm�����1Յ�N����F<M=^"��
n���_�"���t�U7^��E����6h?B-*%<,R��G�r��B$g�	\�8/pR_�	��c7޼�h�)h	��Ѩ-��F��[$�{�
_Ӌy�0gM�߲�x��������Dw&����UB�6�Y��xga�U�"�@��%K�N�z9P ��l��$xi�\�W�������í⇽�bU�MϜ�MT/w�o[��%ɬk���(27t݃"�&8(���7>	Y��n}�tFI�\B���E�D���.0{�i����X��dMA���U�KI�x4���C"h@�jT^�4�.>-����	�.����:���U=�)�M�X3��x��GZc-y��d~fEV��Roq ��g��sD�ݐu�1^�ݨH48�[o�]�4�. ��_b������8��͵��C;
&K�V�)6�p�`Y[��Z����T���!�حg�G�k'�&�$Yˉ�25���y;�!�LE89��%�6*���Q�����&`}�[<�5�#�2z�W+7�	�PyDm��f��Dy�����
-��	��?�-H&?�KF�`9��÷Sb��2��mA�� �2��C��6��}(H���ƾxV�@'p�K!8�ӄ��U.߼���������M�e\��l&��_�����,G����wS;n��;���ғ�KF	��ӓ!Ӣ�p��K���:l��1%,�~��Y!#',����ƫ'in�1U��[ W�|�~>�W�T��9���4���}�):��t�Br�ش;pf�����2����Y�&y� ���BV�Ȑ�[/Z�KN���`�M��D��~ՠ��5�#��������i�IV{��`:�?��2o=�M���^a�8�����2iu�Br�!o�'��wNŷ��o�X����Z"k�4-f�x�\��hQ;'g��"�)c��� %=a��} r¶�.?��')w�΃iߗ.$&)�����g�m���M#�*�'��
7
��߇]X�
���XC���NkC/�\�V�	�ڒK!�u��qv�=mrA��$�F�ε���m�T�����F�"o��U&��q,����I��B/bv^�y(Xk�q^ֿ��c1ZJ����o�+�0�σ��(�h��T:��A8���49�í+[��!��j"�|��� �As�����H�]�5B5'��ж��!�@��r��3u�vL���w/T$T"zw�xC�֍�7sH ̑w�#��}T0-�EjP�n�������H����!�yrsNײxs�MOT���'���E^���,�]�<ʚ���o;�0��Z�s��r$��a6&Ixu�n�!@'�B%�r��qY�(����)-�GU��������IW��rj�����u}D
n���5�R�ۀw�Q��Gåi�X�%�E$ T��I�F�N�ZIؿIŃ�>�-
��f���P��F���S��O����ĵ�����ל�	�/d<!�V���^���a��9Q�"F�j�c�il[��r]�\R$7�$d�<q��QSf��I#����T��7�e�Dj��>kM%�6�N�Pfz�ꦄ8���R)��mV��}$�@&�W��z(�A��fpW�{?$���w�H]�?��u�-��צ�(j�$_��(��6 G��{�H�ыvKO��jje���M�&��\���^t� 4?��7`����F !��ퟁ��ۊ����}<��L��|G��>�L��;,Ѧ3�� �sw,M�ķf��fmx+��X$���Ǧ Y�o(91�&5�Q����=;50$��]�����H�[ �Hs��ZT;!@��O�)������=\Q�x�7 ��R�Б����������"�� K`G
�wc��<�ju�����=��f$5&9u������r�r��A��M'�zt�{q*��W��E�39�E�t�')։\���]�硄@�y�~0�i�O�e��Y[0��W�����f5�bV��q���'��f&�o���r�	7A��I���B������5*
��\|j����~̴ɻ���*ܬCp%M_0aT̝��P��~1n�,|�HC�>`!�q�?��i�X
��M��P��}x�n-#��rG�@�?#w��Vza	b�%�Zxb����eV�&�r.I��ߋ���y����ٔ�;�8� ļ�o��`�p�%.rq�47���p��*B��yi;#�(P��wG���-Y��\�D��w�c�\~>R�����'�`ׅFN�̶EѐN�̹���*����"䑕���z!x�����	���'t�9ꑇ�E4����p�t�vr���#��>O�F�Юy��)��ω̆g��z�{9
,���`/v�)!֢�OX�GR����RK�o�]����[���+'a!ku �<��w���\��Q2�`d>��	Rǒ��t���9U�t���Cк���R��y�q�Uo��F���h��̟��6ɻ�	ZE�A2ǾlI�9���084���5��3�)�뚇��E�nҀ��S�I������j{��v_�j~�oD�a\f<�'�����؉Uށ{ �M��N��P� Ja��+|�S����	'�5J`RT�!yi�wJV�X��h_��l����,�=�]aH�h�u���j_rV�YO܍R�j@#�=�s+ ���J��RÎʾY:މ5��Y^�V�=כ����<'gz(�G!�	"�����Ş����/4���7���`Ux�L��3S���dԄ��|7�3/k�/5�o�Vu�q�����lwj�Pj�R�g��eL����(����X����Ӭ�
�����Fp!h���u��3	E��Y�v�C���2kLv�ju�0(�	C�}E3�q'�-��Q�h.l���7/gPJ��������4�RS8vG�IT����B��K���<�uř�M!k�fW�zC�*?20���¼RLlۘN��5ԣ��4���LT�Z���{�f�����uFD�9��U�t����H��B��q�� ]B�n_�S˒�X�P���a'�B�O\�O�=1kJ��ݞ�s��`e3�����o{PM�7�h���	��t��P.���O��8��I:#��ۈ�W�lFe?T��]�Dv�sA�gk�=Hق��q��Ē=k�(��݌q�p��ࡽ}Ό3溛ҲH���j��V���d[���I����g���D!�Fs @���U�lS�������8#�R�x�hںc�:� 2o���A҆�Gz&�>�t\�k�f�Դ��Ap�!d;o�]\Y	6���yO'�!�4e���A逮� F���^*�f@���A��uI�{��(���/��lN�I�c&R[�'Q�R_�?����X:��R���۪����N�\ˬ޸�M9CU��-Zb���0���������1˞��������ZPNP�7�~ �λ�!���_���ꃡ���G�B���4n��$����̰���s�z�HA/����Q>7"�Ap����K�s�F�?�e��l/�M��Ap� �z#sZO٣$�$�kB����`���~���<1�g�ʛ���H=�����?�*�A'�9/��}����]V�nX�9���cI�p���O�G�)���c��W�0�0,��?CQ�����`Jh
��?`�
.���֦u^��!�j�n�/���C[�4T�j�ة� 3��5��醜���r��°�'s��nl�\T���!�L9i��0�jRPB����`���[@��E�֚�cBM/}Xm�[ˡgd~����/_s��L����7	�|���O��A� ё��zņ�h�6�
Ձ%�rx_w��x�(i���R oK�����'���p|�����b=T��i+`"�1��td'�G�����'����!�7-h���}�JT ���cc��N���\�p���@]Sݑ�@b?��F�E�o�*��l�9�*Щ�0g�����xu��E��)T�sR �5���(�ǩFQVM��ꆐ6	ˀ8����D���hK��� ����T6f�f����W��7n|;�܆CUe�<���L��g��K\��;����q,s�+{�2¬SC��@[P�^������a�ԑI���U�x���]����農���a�n�׆@.o����v�jJ]����!weM�$��kM��t��*/jA�����2�1�낃/��+�l����'�hS	%�b=+��-��z�B�d}vK��߳�W>�_��_�h{�����Z+i�c��C����qgPW�[�b��ݾ���F< d�&ē���˲��_5V���A&y9�o U^�,�DpF�9;��$C�G��7��~�c<GF\?̴�	1�Z����f�s�9H���/^�z>�T/��Ԋ����t�F1������ˣt>Eh���z��W���=��hSu�c��2<t���<��F;;N�%"�Z�LZ{�Kو�%��m�	�AV'ޘ����9N������2a��j��L|�L�tG
1E��8\�\Kaz�Q茌�Vͣ�	�0r)��`k�[Df�:E�= CFz#5�������o"m��-��xomvk����+�%;��} گ1E�D���L�K�9L�2[�`����ʕ5֭9�\�s	)�$a�������Ͳ��35��(퐒:I
�a%��G��d������O��B�\UK�:<����@�]�2:���\�d��0q�N�ĝ�Q+����3(���a�N];���"~�Ba��Z����6#����X�W4�D�oU0��N�z�4_�	�c՟4^�P�;��Gz�EAR�/�F�9;��H����HH���j�̂)W�Ճ\)8��9,��N��O�����%cɦMz3Dw���2Qm�<-xK'��#�O2Zn���T	zݮmZ
�s̝�A���iYMb�
\4���������Ͼ�uF�lU�Y6`ޏ�G�+�'�����E}��N]5��CڑE���	����ȫOGkF�7���v�ǂu�h��Y��|���*�>$�n��=�(x�]e�ݙ��� ����M���s�4��{b_�X���ڻ����%��@�`f^�) Z�D}�Xy��h�	�8Tz��p��Fd:�J����]NM�D�����O:��H޴or�Yō,�v��ve���H��$Ѕ��� 7p�O�䨟~r��JȪrq^tϖ�g�K��a��G��ӌ�4�%#N2β�|'�MZ8��ECW�!�QTsӽ'O|�",���ȝ�?v�w���k�������i؎E#�:S���Ӆh��>�ΜU}P�E��؇�u��8���+jX�9�:�a�C�/ |F�%;���A��Tv_d>L�&O�f~�Eϊt�z�ZXL�F���#/����%�2L���X}c�4���e{/��]��S�Ã�Q�sq�C2�엁W.���ا���)"�tu����z�Uni�B�UXb+B����<�4.��_�em��Wkrؘ���
��?B���7(�$⸩t���D�{���
z�6#���3<(�� ������)�Qvu��&����u�U�ի�"g�K6�0n�-�z��7�����_��A��Cz�n���a6�����zc�蒧�0-�Cd �f>XrA��EF��N*�APQ'��~�n�Fv#� �bOJZ�Y��
��2y4]Р��;��|b�ߗ�4��B8X�s�@׉1Gт�$^�^c�@���#��f�?xni��$*a9��-�-V�z+�B�9K�����8�?!������3:���F��fVwu�m}�<�Qʀ�~3�@w۷�!�B�-��3��ة��
�p�+o��ܒ!u���/R܆N{�_��ԧ�8�H{���0��C�ܰƂ��B�������i��x�$h�@@�z��bW	\Qb�v:��ov��/L��Yu�����QTl<��q���v����?��!�p>�"���,r+F��e�Z�]ԅ�`���f�ǣ5
㎇�x�c�z `8�+�����D���0Ԗ���R��� 	��P°U�"b������;�'��x��7ۿ�Dί2�6/�t`3�ak~��������P�����D�vY�M���b*����%{9�8�M�]��.Κq��#���Fn�R��봽l�DmC��\Ao�������x���k�Ȋ	J���� :s���y��|�9��Ϡ�$��9�/d&��C�ށ�X�i�����Gԗƿ�1�Q1��wڙ	f	��$�۴�o�=��-$fq��U���=.-�@�-K.�r$c�� ��ٚM�W9�!T34r����ì#���~�E����ih>��)JD)T&QV�L��c�3 `9�V1:�^�W1���I*��G�,[FT���pz����ҪkQN�����9f�jfQ��k�Iq�'�\Y����7~#�Y�����Cn�}Q^D��U~��="��V5,C:�Ll�W&p�P?�s^I��;�(��x_��F)vF�Z�I1�6ι�*����\L�av)A�����
7���{��w1[Q�^�:]`|}Z�$79��w�\=� �����Hq���q�+Ȳ��B9Ǵ���/�q�@�?Z��xVdY.,}��P3nw`�V�����_�������e5p�HL��&?�4$��Q�X���� ��))<�!n�J9
��a�NuI��^��-(!-w���D�7�L*�����ە&�y��C��´�nۑ�%��]�=$LwV0V�*�4�2�����+'7Q�U�7�<3`j-"ΐ d�C���f����Q����ZRv��%�%���,��Ѐ�@�Qu@�X�]س|������K������j������H�Zh;ϛ���V[G�&=�D�Qd�g���N)��E�I��7ˈj��,��<��Ւ.K�c�ܨ���W�j�����%���\��N`��~M��d̀x-�ӐM�#�:�a��A��Um�~X��Q���6�K�4\�C��ͥe�����<;�O�x��2[�H�.\��OK���1,���R*,�X)��l����e�>0����Lԝ(Df�L:��V��ǠJ�k�~�S�-��)1&=	��B�^
�2�I}�/���m��H��$Ӛ񳑺����57��{[3��.]���^P�K�y��K0��<<���Kǩ����4"GS�T`���+��fU�r��1�����P0A%	�Jf���"�����i6Z�d�!ͱxpjDVS �]!ӓ�)��(q��Va�<�N�C͊��9<�u_������D�k�SCPPK�Ç7�+i��uX2�����
��Q@$(����d��C�)��<t���n7�CV^@W;�D����g�;���x�j8���!�=9D��#`��4(wE���RphM�I���
�w��KۃE�o���l�5���9�n��� ��SV�7��(�5����Q�ܖ[���mh���7�T��K�m���@�����oD����a��+��}D<qN��sY�n��9LTm~��	���4����N��0��7"W��r%�F�-jj]�H������3� j<C�1�Q#%T�*d=(�A�c��K׷jœ��?��>�k
v�O��Ԅȹg~��8�M���Cq�f��@� �j�X�{+�\�w� :������6�<s%G4 7�����>E[�qZ~�[(�E�f���x�I�e��]��6>'�|}��;-Eu
��d���3VB ׋�g�ě)�d��&WU,�f�	�k�-l��w.����ކ`����{������)�����c�6<	e�ି۷9�%{�^���sȀt��ɀ-Ӗ��&]y���B�ʨ���t�{��r��
1�&M�L�2�[%5�Br���V���&��C`��\Aд�,SO�O��/?2�:&!_t��cR;��y�S�F���a��'�P��0�����[�����~0�>����K2�Bİ��	J�-�_��:<��16e#�b�m�����;�����k���ąJ����c3В��9��|��7�b�y��7q'K��j�!8��v������[*��I(KSe����|� ��!���Y:��7׶���R@Wk�q����~��tQL1np�^\�ѝ��D��į1����% �:޴6 n]~�3�ッ_�Hל �^��x��v�#Z�V�{�w�(�����6�{� ��J�p�?=p��8c��PE��_�-M�h^h8^�p���6������; (+�=���!��Q�3Ȝ�u�Yw��պ,gh��@a�<Wز��_��0��j��;> ��8��$�0�4m�G˘m@U��Z��7����cſ��>���ؗQ��=8}��@�L8�l�puY�O���-[�}Kf�r��ԵyF(��G����p�M-��PnH�Q$l�b�ǹ��13�ұ������ ML��5��V�����|	y+pf����ìM=�	���t���� ��j���uo��d��t����xXä�-ڥϷP@����bB��c�o����+
,�J;��hh��吼���~��̣dI��\�r���������@�o���{�z�����M\�j��I'��b����^:�U7�.`|�ўքe���O�S�s]���&k�^.���m�ӿ�j�O9O��[dO���
R����ssyL.��ԇ�V��GF�dDr<ݺ�`����p�a)�`�
B_dʁm���ĸ����X�`�V��»FepW��*��s�r�es䑩��Rϴx,�w�`,�b����:� '��1I�����4 �,�o�S�=3�L�^Ҥ)�oa�T��>�{	B���P��͔����8#�uD�V��3�[�g"�O3�2��:n����<mbl���Uur�X�R�v;�\�_-�kE�+�� (�BW���	{�g�6Ha&Au�����Hh��l$IQ6j�q0��4Whz�=-V��H]	�����f��� ��{囒�7'm�I�9|1b�/�t~�I��$�y��\y��4�|v	0�ny>,fa�s�N<��B�˦������=5z)V% ��b��x{o�Ж�P�!k���ߖ�`��j9v�H��aMZ����;:�XΓ�?js�.��@�J_)����O�pkR�V�w��/1{޻/��{��lx�6.t�p��3�>�z�.bv�M�E��v\�|<5��N�A�V�;^AS�;@�����.��ZN���8۶6	 S���~�EȲ̂�g���sؑX�����N������{�O�鱙�UQ�\DQ)�dF�@�����Pɛ,ͪ\���`dR�;�V՘Zm�K���L���I�Y��I0˰�ՎtgQ�FB ϛg)��6������7��XI7��ץCh&��ΕĆ8hvPh�_Ϡ3]q�����6k�go?lE��C  �E��!�����B�}�>�;�'���Ԏ���eA�4��l�Z�R��6�X8_��5K@�T��b!���� �%���* ��h;��n]�3+`�=��v×,!|���ߘ�|O!�h�كe��+b̜�&��<u��n�Ĕ��g�C��!����g�R�K�u������o�@�ҕ�v8uP�!��D�SϨ�ts%����7��U�>��r2�Lk���]p�F�Y=Ӵc:��
��jn�܊��UD� ���uX@GT׹R�u�&=0}=�~�{%� p��Բ��e_b����+����O^x)ĤU`���M|{JO�72�	o��I�V��#4��L��;!��������-�H����&ՊS��x�zOuĘ>gyl�ʼ4�!>)ZǤ[�̱�4:���UC\Ҧy?O������y5�k+5E�p���Bv�� �%dt�D�Xo��p,7����d#ZEN��fH:t��ai�x�m����L·���W���ExUv_��f�O'8��L��<3�)A�[JxF��J	��|�l[(�S[4
���a��H��y-՞�"�%�3Gr*L�_A��k�F[�A�h꘷w�e��P|9$ snᐂw`��!]Y�A�"��+�[،���)��,i����1ɩ���O~j
�/�(��+d`�k��F�d ��>�̗�?j��Z�7uJ9f��ֳ�R�A2x�-���vm_�]?���u8���w�G�U
%pd���˕���Lc1D��U�>/g�VV�6&+����?,��W���(5Ky/�Z�0_4U��v�מ/�bn��������>B�e�bP�t�'����fOK�i>]�Ѫ�F��F�O�� )W���$��@0�T����a���H�P��1�{(?f�Y4-{��TW�_Y%8N�-)'�I/f!�A��X�0 A���M���;������g��ڌZ0lV㗁"��*�I���{+�rE���YB"��Z�=���9������1��/k���`�>'Ħ;���#��-����4Ϸo�r���i'.(I��H�0�B��W�A(�?����ٞ	 \B�O�a4:y69V�G�P��m���י���V�*�H���w�j
i�ȡC#�d ���M^�IB
��A�ݠ,�{�X3]x���wOWH3�;��8����G��6d�C�Mg�		��lIv{Ӓ��V َ]<�z*B�e�����_����`�#ϻ�y��yv�ӻ
�Z�@���Tc����:�2`@)1��Č����ўu����gQ���W���G�|��Sx,�>���9���MU���+mx	����,`6EWH{xy�PI��������Nk�N�A�|�޷{}�(�^�1�ׁd�@fG^=�>I[*�8 x�Z� 9ũ�B�B�|�3Zf�S���\���H������-�K���a�dy�2@��G-�h��@y�%!���0��V�C�XjҮ����C��"t뒛XdO��&%zKӟM#-�/L.��'m|3��<t�
��`����u��8į ��j��?�ўr�V�7Vyt����_)̣���� ��H�`��WB�z���{���k��e�,��H�,�<bx�/���.�S�d�Uw}>m�[J�KH���.w+�����z�[cƋ��6�K>��kM�l�WcYnGt`Y�na;�5�������`�-�慫��C��y >��0�a�����(6��eH��:�G�ͽ��k~ۀ��|�a��L������v��i2�Z��%�ULS@��&���h����eʥ�W�8�N\d���r��0�&i�C^� �x$�TTy�z���
���)\]|��� d&ܿ1o�w����D������Ȃ��$s(!���uD]0X�4��x���a��Q�v�F��/���!�Ӝ�z+���J��jl{Y�ݱ7�e�I��:��nD�gKI2��%"���l"hxRa��`��i>-X�-���h.�z �ۙ0�r4��n`�gU���(����)��F�d�y/��C2�J�����#K�ߞԏ7I���M��M�ڄb	٧��7rL:��*���|ǵ�\�����m����� %�}1�g�4G�~��'JK>09����a�1�4eǿQ�+���.+p;h�/=ڦ�b{��kJ�Y�����_�{�_!Z�p�G����U��l�5嗤p�$�E�����_�/ R�.��+�}}��
������hg�!29�S5	6�҇����{�+��G��u���;ȈS��}�*˵!!�8AG��m���Lkq<hw����iэr��*@�Q3?�J=�71�5����W�SQ�QV��ǐ	����s�i�g��WE��AFm��c��A
��3LN��n�H�}���h�@(�<X������I1�Q@ �T�
;JA�Α�J��^����s��w`VsK�B4��WIВ->���"?�,eڴ�������<KbT�*QK˳^�	nq�&ɂ��e��s�3�^Fk�g?���ܾ�eY��5ia�m��8ag̲��motgU�~���L��A���HN\����j�mP�?]�G!D:���1b��zY��i��*{ЕʆɁMQ��b�Ԝ3A`����<���^� `���|#���o�U��j����*L8,4�zz�XƄN4�3��� N&P�E.���|�J��	��?Ud�/�=X�J��߅�8\���F)�ؐr��8��w�� j��'G�4r�;�d!@!8��;4��
:�ur6!bi�ћDBۋ-+L�#���i�<Wqu#�%|�ۣFD3�߿��~���S/9�h��V�	������4�!}��LT�9
�K�o&Ղ2	�/��&�h.������5�q�2b��9�cn�@Ɲ���&'��,��C�ȅ��P!  �y�Lh�\g=�r�[C�P���U����)rx���V��ʾ͟l��
�cʒ��{mCn|b�[Ƕ!����� ��
�-Z_��O�o���[6���� lY�'詯U��Tb��b�U���� ���� y�A�dW%T���zW��g�e�4��/���� N���:W��-����\O��ݻ�%!��R b��~�����&�H�s���/m�u��G��c4ƺ�����W�!�R����~���yY'A�s�T��'����6њs'�]jʈt)������3/�	�>���e�$���^Ơ&p>�`���4	OR����LK����7�~�0H�Z�����]�>�ak+�+h$��2\Zs�~��m���]�̍�H�
5\%ת/�h�D�k��8��DJ�\��=�釓�� ;x���H��@,�*E�s�'��YZˬӛ�ɍ�U��(�=�x�"'d�;E���}Zאo�b���������*B�'�)5�Bs7!�$�Y�)Z#�� �����k�O�B*Y��?����zf��@@эiJ���� �~ ���=�`2��hS�%��;��39�-���!p>�[}�.�{&2TJ��Y��gxc�@�Bpj{�ݒޣQ=�}�j��+�@�`UM�o*yI:~��q��$�-���A@��
��F��I��/�D�
���I��*|�$(g�*\��8܍R�9���������=��dm�l���;���[!�H�[�A.3R�i��	7��(g��};A�u[�;7�{8����CϘEd����O��Y�Y؞����̮pţ�V>/A>��=�B�>ق|=�ã��ԅ��p�.?�#�*�'K��	=�N]c�_=���]"�Ю����Qc����J��/�X�5	}�;uN�����-�Ԙ9�o�y;�+2��2�p����&/`��J�?=z�n?N����T1��H�M[
܃$������
���!�����j�NQ�p����u��+\pNSO�ٜ\Ό=X�&�3F�i�Ǎ��V\���;mr�4|���Y��oG �ͫC��$��Jp�1�0�&�耟�%�b���R]�|.g4���ח|�i�
��xI�|�K�!;�P�!�`��i�ޓ����~jK< ��Q&,��C"�:�Yc3�OA�����>@����V1_��C=}��PVn�	Rk�xE~�~\|��qH��(���J^�Eѯt�ɤ�޺�^,�#�`��p��ʈ��A�'^�ػ�u>zX��԰���p��^�����lO�PLY}��� �{ F���C�c��8�8iT�e����z����V1����T��,�B$HE�._�[)�SG����Ho9�a�_�[�=EFG�i>�,C���M��b(�U�MZΗ��T�('��c�1�?����������nNn8������ +_�_�q&��J,;j�ӄ�l9p�F^m�O_&Qa&>���~r����%�����nM�&g�i�o_q=v�T|_oy�x�zh�#�Gtx9��R�6#e1�"���a{O�M��=��J'��k��#�3��.F���� Rk0�Z�����}hR@���r2��
B8h�+��@ݏ߉�F�3��@���q]���&�	��?%���]�s�n�]^�((���69<�('���U<�h ��A<�[��U�au�x"%��t�Sr��%ё�`�*����wO�@�C�LS�}���M����O(d��}l�$�*q6΢��OQ����A�w��_C�7y��VD���^�Sz�A�:ܓ]�4=�1w����6��Q�iO$�����.���U��0�zv��^�dBO&A�?�������N_�V�yt���kCx,��&)T��/���C�08ȍl��Ŧd}j7]��T���"�D��!U�P��"z�G��Hl��0i \�ǉ m�����ED٥�&���A_< �>��Sy���,2�_�$ޡ�$�7@�H0�� `����_���Ճ�.B6Y��1�|�s���5Ә��R�YḌ��	S�"0w�mR~����01G��	V�;t��4��ۥ��TL�A1g���,;�\O��;���h��Z!\����u���ΨT:	{�9�k�`���$�*��Mm߻��h28Q�QFy�����x+,;�F�'h��%���?Z��p�~��Xߖ�^E3h@Ep��:��߹�*�p���Ms����5��u�3o��������7B�	�s2��US�����Dn�h4ܮ�񼚧l���W�Ṵ��.	1+6���	:OG��:�������:��0�:�ɴR�_NN��N��r�����~�F�Tq�t�i�/c�:�+I��%O�~�>�NL$������3��);E�V���F�'y�)����&�L����$�0�aF�=-��|����-��fB�z����C0��3�.��P���9��qݛ�
&MK�*��n� � �
3095�HO��֯��9�|�Ш0	��Q�Ś�i
4��Gd���
��H�Q%�Fw���U�kQ�����>�8��#�EX4�L�P��	�p?��Y�۔}�B����䏔�����7Y�Vt^��c��g�K����!��Ta/���!j��%>�sʘ�r��7I�$�c�:�&,"*|��;k�@�^��P����L�}��I�����FBߞb8~��kAZѝı* s�
Ћ���#�6��~��[�h�#�f�Q41^v>(���:ִ�}�u��h���H+8A��l���֏B�4R ��tz*��LJ[CL�(��ʵ)�[������v�L�����7�6AB�%�Q�Α8O�_(�_�H���(_
�����/j���<V� p�}��� }��T!�O�
$8h���ΰ�!c�v^�jY3˅����vE8s�k��4	�<�.���v+*2\��}�N��4+ϱ	Rs	�Y���}l�.r���U��j� ���n⍊6��Ǜ��h��4�8���fc
��g����R���õ:"��	n�{��1��B�Fb����`9r�2��������1�Įgv�V��:9S�Wl�㾨c?=4�;��tT��i�����u�.*���������H��4p�*�g͖����έC�r@E*�U���g�<	�2��3�b���
�J#a)$�嶎��6����C�ސAJ����)�NR�3��اr����ø�$uVIJ�on���__C��	
V��R0`H�F��K�=So�xS���Y�n�x�8��Љ�4��
�o*�)�mȈ�ą�x�U4D�d�a���+
D�	pn@��c���Z�p�A��A��Kϻv:��H빙�$�Ƙ<�fb"P�mfܲ�'R7/=.7&9���y=Z(��yw�a+?��?�ĵk30G</�3"��Dg	����m�����'��J&�p� )<AP���$I��o�	�
}�E��4N��C"�Oq��#��^:�W	eң��x�=���s���e"�� F����4ǲA��<�d;M��d�����v;�:�wo��[���"2����B߅G�[Sp4�&H^�T?�ӽj�ʀ�lƏ���S2�)l��{�P;��3�̋�Y������F�ϰ�x+��O	 �����bZ����ߙ$���V��؋a��@]q��i��)���n�2~�;��s��y)"�7ĩ�uɘ�m�l�ￓGs`�|{!LX����6MN*��@n/��<�M6���.hk�O_�-��Pr����S���d^�I� �Y��� <�B���h>�h�P%�|�Ft�F�!8�D�5D����M��R�i�3���E	�[)b������JjS�ߣ���w�y�h�zI��}&c�7�y3��ؔorS�<0L�0�r#����!�d�~MO�uU�fF�F���+���j?Íخ�_Ǵ͍]�!���I�k��c�F�/�b�U@�u�k�y�i��r�} J?�Q.tnJj;ˎ�H���g+:;�I&����E(#/�7���#DOcN����<P��m _|�r�;rt���a�k�Z���xz �ە����߀�{tV�ߜ.{�9��!�E3��5�w��0�n&w�D�L�"=��D�}�>8[A��] j�?�.9��|�g�)�lO������@�nf���ZdK?.S�[�N@�LQ��x܃V
H<
胝��(���\r��!��Y̴��D<+���te}���d�?"��6��yrJ��=[�dx��=��tO!ӭE��l��s���)u��*��IF̵ӯjW/�p�ӿ~k��H�?�qP��?�n#�&�\���5M��n/1�W��,��?v:HB�%�m�)9x;�r_�vC� ɏk��l��H���f�t�L���6&%��zVB ��:����X�R��Z��l����Lt�|���n��7�z�t}�U#L�P�7-���N���qk�oj� �?4q.�+:5�<Ng��xƃ9I���t�J;�FU8^��t�6��𱥩qۜJt�Xΰ3�5e
w6�9^e��E]h�};���V�ۄ��3� �T�h��iZΒ���V>t��"��w	d*��|{�崌m���Qo+��O\D����d�2�w�(b��fs��@�H��Vڑ��X�CM��	њ��߁�����P����ݼ����5���B�IɅ`�w��T��᪭�:p|������~��(��I��E)RLZ/_K�7��(�����+���@�.x-@��u��,����*L���'�i	�H{�]<[N�Y�C�S#O@��h�#Є�5�o�����I�[eq��ix�8Y7$z=��*�S�KzJ��c�q��j��������M�S���!��"miB���|Գ9ĞBJ�Y�כ�ǂ�tz�sy|���(�P::٣ֱ�Sj2-9�洴tn �]0y���,�}{�b�g@�����
Ǫ9Ԏ}b�!e�3����_4I�O8pb �hC�V	����8G��=�~cq[Hr,�[m[�,a��ǆ���v�N��|�.)t���S�H����O�5$����0s�h�LM9��Ӌ}��JNMJ���T�Ҁ�0���)+w��I�)��s������G��kSݽ��!��z�^�Q��b��94`���5 e=M``�-^�u���r���26 �,�������Fbtv��jЏeYXakzǹI}�i���o��`�}9��}�R)�i� R`I�����q���"�~�����zeĘgP���b+3<y%�wla��Q�,q�\eF����:�w�h�����og��G��lYU�H�O�~[��BR��Ŏ Y:��&Yp˲L�ڗ��z�~�s��F�T�:�[yl���P����D�,!��i�վb�x���!X��*�n�
y��hz# 1�\Ԥw7�(������{d�IW5����Ȁs�l�Zǚ�^6�a�/G���p3��k��-��1/h��oP�xBO���"��v�/�NI��t��.:Cǟ?�< }�����C`����@b���˄�����)�3��V$�5p��"�?ui�D[NM��2���<癇 1A���K��,����@�6�]J6���}Z���?:2�C�{���\Ye*O��c�1Q�4����ԇ������,G�=C���	��f�M��U,�Y�&�|\a���P#��8��hr�ԙ�1�tq	=����վ�~}l1��w-�X�yQ?���#oxU"3����1tR��NEA�U��ug�K���A6͕q!�9&>���;Z	�K�����s�o&#�2G�����t��7u(�1�����ݯ�kY�=mkȦ�g�[8`RlY��p��$��P'Ց�_ c�Ij����l#��lϚ�ڱ�4���\��C� c�^��?�x�seJc�����$ײ�U���|n�+!���(_��'\6�2ɽ��y�����U��G��k���y\Y֏�(�
�����	ڶ��a��}�;kUN#q2�;v3j�O}�|��(x	��J~ᮯ !����^A��<s?:>��cjx�L8M�8*���a�ﶡ���6L��x�A�S2Mv�R���v�48nDn%�-��u��Y���e0c�eV��RPQ����V�����I [���;���6���	��[�qlte ���,�Fz��'U�AC�a�t����k�4ـ� \Nv.V���OJc*�)�Z��PY�m�o����!�������(l�
>�h���<b����H���Kolc�f�N�4j���:��|�Ļ��>3!�l��auc�j����1�Wt��K���R����s=U��]�a�h�]氿i��$���1fH&��Xj��a���,f���i]�[�hU}j�Ӆ^���M��|�*��q-ߺ�����W1��o;�ـ<���Iv�����/VZC�!���}s�LG_��r���B�g����A�E󖄗ꊖP� ��X�@�3y\�gf�+9h]&P��7��u#�	q����G���a�`��$�MH�JQ�BaZ$ =��;���ڳV���xQ�Yr�L}p�P����#3O(8�M��F�/3��ȗ�{'\�7<jܷV}uWP����tMR�Ac��r��׎2�h�i"��~���*GU�;�u���}�E[tM֍A�^��{����;0X����?b Q7�IV������d�L%n�̎wl�/fk�$B�-]N�J�$A�1C��B�3��K~T2���� s��[��Kq�H<��'!�p^���'f��#z��ܻ���y�f��<0��BND� *sdN;O���gg�����J� ��e@FA�IJ����l�Y_�$��	S.������2dvDyi6d�Zb�\'/R�=	&^�,��X$��D�nR-"9��IX ��!.Zŵ�m1�3�Psazsr����,���S�j�ۢ���7��I5�Ġ�X�~��@��*6���F�����G�"/'ٰ���2��|�Ϗ��/�.�s�����cN4E[J������F��w_m��M����"*'9��&Ү���s�K�>]V��ҥ�/��/����4ٿ�JlZ ��j��u���~&bA���\�����'&�������k!��"�>�J�}�-��㼴�����1��م����m[��(F�Ί1��Gp�Ag5u��m�DG��P�}���_L�ǅ�<�iw�=��m#��3WZ�%[�X��m�%�C����ï�� P��跅U����N���J��6�g�U�QR���H��=�!S="����f58iU��S��:��H�Q��ft����pP�9�ԋ��PH+5i��Q�ñ~��J��!�g�B�n���xA���e��2�.���?_��ا� �� $Vb���j�,��P���'��`�i����.`0�� ��CD�#Zii�������*Y+6�x�Y�P��b�# ����Z
#bzY�9]{]K�N3�����t,��I6Nߢ��!�,�Á����\
ă�H�G��	� ��l����O�R9�JSb�Ѫ|w�BX/hE{.p�j]i�ri �LS�N��Ӿ�_3���hK���W�@����&��ǵVK�(���ܲ0���w�:����X���aXȠ4ħ����"��QS��Q��ϼe�Xx��h�P7p��r,���y|�ւ�UXvY�8@ܖ�8��B]���̮���s#Jݞ��p�/�L�5�%
�S� Y	��=\w�U���w��O��x%����{�hQ;��|��n��t��h�;�`9��/c9��/&A�5���	E��ѲN�@|����u^�WKy��z,UB�����X������\m�@��_�ϸ�LU}͔�x���k���p���uQ������S��ZW|l��ݤ
���H&�:���'�J�L;�ـ�7��S��+R�ř�⋀Z05`Ք�n�F���&��|`�U�1�=�gJ�>+	I{
��툾;ȝ�%����[�O�O<ڧ���/	׭��}��s��s��h$b�4�X��S���ʥ�,DV���������a�VAm�8%���1�R���5�+a��TyP����>�(���<��$��)k5�p�a�y%w��2n�WԬ��f�t��F��
T�Ic9~n!���=���� � �`�N��@TT���i��hKX��⌧Z�̨JYR�~��@��}�K�tu�t� S=%�[����/�d̼q�?�jlαR"|L�FXy��~�-*�R5��{�*����"`��Y�Z�߮��@��C�|k^���?�z��a�I$Cď^KӃ�,w6f��u������e?���h���1�V�S ��0�4�~�%t1v5ʲ��l�������Ks�zB#�`*�ũ����c6�K�oώ�j]tҧ8 ���%L�^X/�,���t�5@�Ȝ1j����^�7c5�
�Mc���	OK�ɝ�ɶ5��T�LoV�/�s��%TT�����g��F��m(�n?�\R�1��-��4t����B>�S����6�<�Ƙ(�I��t�RY���*�BR�:6�;�ky��	{�.�J�$�L�,�ZmXL��f���Q�D3�|������zsZ�����ח�s��Fr$�W.��t��A6*v���ao`+��#�IG�Gv8��%�v#c��r<~��iYw�����׍��q+���a���m ���$���괎�F"L3,������1�yK�[��[4O՞٨�'�r|A��nsM-���
,����W� u����Ȫ�����a5�V���x�,c 6���3!����HH�l������������aŷ&���f%2�c����0�93���=0��w8�4�C�KH����/�\@"�����:�����h�������7���������������dle��ң��E�C��5~i���%������:�a�Or�%��i@$��[*�)�'�����y�R���j;�3SY_]���!�~��xN�g?�
�[�;`���F9(EN3�e�Rf��]H�~kms8�v���x�lX�7�p�n����XG���6�(�����*?�"A��)�s��d�4Rw��',� �,~���=�4{�ND����G�����[#G&�xg0�G|�ƈ�r	�[���{����������Ŧ�e�>)}�d�s�y�2�7/�Eŵ�l~�/�#���x�*�̭�d�8r5�{;���ʅ*�E��Q��P�Kة�T�Ѷ3}
R>ū�'=ڳ��=B,6�oNٺ�E�%�7�dҧ͏w~�f�����ا�ř�Au����U"+�A�sW��{�>�F�-~EG�o�5�	SI�k+�0my����P����N%����y�E�y{�+$i���f}����Oi!���������tg�/ݜ<����)�;�+��{���zσ=E�'��!=lϘV�O�&�ٶ"1��o��0 z
Q`���.)����2u�pϒs�ɱbUtg[���wA�c6��t� +�o=�<�q��Y��gn:���52k�\�%ڹ��2yṞR,��Ӏ����~�onԳƔr<o�@����|d?PW�������Y#lG�"J��=��}�7�I{��e�8$S�J%?�\f+A���W#�z��A�����4 ���YF,F�A�^;��Aa�9�̌S���I݇�#˺�ǧ����G�t�����KD	&YʺU2Z? �Ļ��Y1w����͛�rȵ�w�\��E�F���q__G� �]>+�R7�#�}4V>���˳��y,wr%�4RCH�79`�� O�v��+��(��`Y!�i�\��^ͳ����]��k�C��{Z�r���O��8�UƳYz���t�_�qQM|sv�pB�*v{&iRLóL�� <Ad��(Ȑx�!M��Ur�w���o&3)T+��_��Շ�
N*�4{��e<u'�U�V]��-�\#P��J�ɱ����UE��hf��[י���Q�Z�7�&�xg�n��\�����D�yIw�҉s=0/ҳpb~�Rv�n��,2�ˎRK]9,���F�cNm�gG�S<�Ͳ6*l����k�����
Ӡ��X�$e��e�ܕ˚c>�6��{(�ۊk޽�x��� )GKj�35��5�����V��^�ۋG����et�r7����ͷ����mI^c��gZ�����)=0�)�ܚ�?�AUT~����������.,ҽɋ���A��?+M�8Ip�ۂ�9��f��<�2�Lp��{��;)��w����Gk��k��N��	���%*�@_e.)�t���7�ߡ� ���݃�{z���~�a��F�j����[8�D��q��{�M�$�}��{Ix�������J^\.������,�(��9�05�.�z��^I��f�K2I�����Z|^?�V@wq��4�z_�3���!�G8��>D��℮�]�!F�ow�!�0�B�E�ޝf�o��^y���}~YO`�S�,dR"��c��X\|�`��]���KZJ��ZjĒq,��S i~"����O=��J��q��]<e[<�
��lFN�F��t���*Py'7d$���9ZH������"t�ї �&�]W�.��f.��t�WO�gg�ꪪ�%5<6���/p�a�/V�{:ӓ>�,�Zuz��\!�"�
��uJ;�=������+��I�#�آ���eSF?M0�֜T�N�)���ӭ�b#��c���:d����&�md%sJ@�3>v| 3UI	��՗������gt�`��71L��tY�*t�~vU�a~���X2in��<pVc7�4��e>9�W��o��1@b�@`7H�H@� �Nz`C{���<�f�,4�*��p�PPbZ�Y6�����;�J)�P#ɆEޱe1U
O�.��6�R�逵a?�U�2�궍_}6��$w�^��m2ԕ;�i�\�C� ��#����F�X�v��{b2Ң� -Z��M.q4�Z���	"}ɴ�
�"�+K^�<ϖ�e����i����:р_���*��Ԗ�F�*����Щ1jH����'7�Wf�лC���vWE E�Щ���$�`�)�����؛�J��h�B���� ��%{��i�Bp�2b����<��z���G�b;�J�+_�v�o�A%�b�H]f�
��d}o��@���&����EM�,%4Bb���CR�d+ñJ_�jG;���aG)�z�8�Z����ʣ�8~M��B7z��tç��xg[����.����f�r��aC:⒁t�1�a/�A���+{?�Ġ ��Dя�j��4KpJ����^�H�7%σ�OI�ߘs�8$ ��i�3�{@M��{A�'|�;�}�5�(��IP@Ac��o��$�H�+O�!�ݰ+(��J�}*_�G�L�YS�/���)R�YN���e���@Z��l�'��,�/�E�\��$L��tN�!�\o�N)���L�-J���~55U�3��f/��j0G�����Wo�5;O��������J���7U�$�:;ZQ�B@�)N!H��jEm��q,H$���`hr�2@V�y���0�%�b�B��r�M�v��Q։M��6���b������BA^�>n�^劘'O��=�wL1�O����X�L���#%1�@��	.�W� �];C_9���:N{�J�p6T)G�\1"'v��σ�\5����퉍���\($��ȼ$����-��gm�(��n�+�рl���`��ِW�lB�E[�<A~��io��d(�u-[��-Wq����g5-�g�ؗjD<�	`�颊�g]s�Ct�xz9��i�[,Y/��D��2�0��EE&i��!C���F��A�Z$�[1��:/�e�+U�{�l�9��gI3�^K)�kEw��;�ɻ"d2&�2��N���iO� ��FLH���BeY�%�z�wW������=]r%+�����9�{)�*
���ݧ)�w�����?KC�=�D�h��_f�WR-V$��RG���Moe�}Yg�_a	:h�q�N�8�Ǆ%k�Ètɪ*iu�檊��ib%�t�N�EVUoI��I�.
=��������K�4{����8߮?�9�+e�u4��E��X���0\�8iֈ�29�3��<Oz~�r��8rw�f�.{���,󱌘7��K�=�8NI��$C/��\AF@�rǲ�>љe��4e�nӄ����2���ݖ����dfn��<Bcq�Yϕ��u^�_�0g�XYi�=x��(��p���cnש�>):r)|�����p,kQX��%H`Z7rF�{�f�M.�n�糨���x_@��\o��N��v�Se�)���Y%c01�r�J�뉰��ʑ��[����
��a&�K	.>�'� #P�M�pJ�q:���X�Ri$�,2����v&ƗD��Q¤L �9M�2,��T�n�YI�&�����í
dP�y�"����5&��мs/7�U欫e�#EO�7��ΜX��n���|u�ڊN:n\�t��r��B�A, �¤�|x�������sgV)�~�M_I���v"����l`xpE6�k v,:�D�y���G�s������l�����j@�;��ݴ[���GMD:[�|,M�i��u&�&��GZD���ql��a�&��n~"C��
A���d�T��'�Z���V��E��]hCh��?��JN�?e�F�� u*�:���v���˷�z:��h��-�q���ҳZ�8���ou�AH�]B�.��@O��y�3���M��=/:*Wt�ԛ�`��C5�
�����υޚqx�fN,��e:}�򛯬���2��~���C�B�}�V��g�ݜEwx�<�W�L���Im���XQA[]��aN0A1�N�����hbP;`�G8<�ʱu�!-��ʺ��5���,q|!��ϗ�ւ�%]� ���+x�\����<�bs_���o�Q�"��O�0�꼨�+�6�᣶��CC���00ҝ������X��&��u�ߛSč* L���>yq��G:�Ҍ.��V���p~����L���{ᄅ׽Ƞ��4���"�ڧ�'��Ŋ@�����8�2���lCv~g+�'��N��2z�,U�ڐ'����s�ϒ\�G ��R�*ڍ9r=�r�1Ze�v��� ��iw����sL��M�Lѧ]�urB�E�7LV�k)����Dg�*!��/�����Kn���
���M��S�`k��	��a�O�P*Db���i婖��/�Mxu/�tOu�!��=�Ck�%�Fg*�pk���I��Ne���‶�	�͛e#��ƺ�;�x(��P=Qĭ^;Fb8+jW�����7ɔn�	7h}
ⵣ���e�ĩ����խ���`;ځ�~A)Y@O�e��Wyꞃ�3VYӰ��%/m�y	UX�b&� V�4�/n���m
���=z
2�2/7�z���}a���k\�EXw���To�%z���:�J5��8�� O=�!(��˔P��c��2_��'��EN���PK�Qk�U��zu�O4��0] ^�io�
������Ǳ�Rg����D��1��$S�}���t5à�U�ʣ!�i�jHh�6�c��ў�W�����<�N�\Ê�r�|T00���<���/�	��m����s�+�@+e�j�;)�y#�Q���u��.��b��K��Q��NENC�(� 2iⅣ��_XS&�~}�'�Y!.#R�2�ݜ�����:��Hzz�w������SO�gK[#���S��$XP�l�Ee�O'�F�r��>pݗ✧T���s�l���]�0oX"F������A8&|����jO>ND1k�F��C�G6��+���E�=�F�ԨmtV����������_�����؅�ld��V�[�(�H�n�$��.�xo���g3�����k�W#n<9��h���D��?��N��b�`J p펜K�#�d"�9|�<�ި����r(*��%F��Z�l?`*�\������ņf&>�_̼y�b��0w����]�hq����.C��ƞ��Z���,^�Vտ�11��1��̋��\�h12xc�*I�T���*���K������FY��k��z;,� ێx���:fUE�dJ�r@��% iU`��-ǡ�A��%�� ���̐7��zt���>��k�Nu��i͢w���U5̦+�WM��8V2`��<�>�I+�J��o��_u݀�]�n�qd���j|�u����?sSg���V�$��F� �I���ƛ�������S0J3vܧ����5Q�\���^EWʁ-8�j\��w-�r��#��$j�΍��58��l*���*f�3	ʷ*p.5p�I���C�w��	#2���"���Aޒ�I�gS1WjՒ����q��ݘ����;�Ub(��q�!��N]� ��̅�Bh�M�n�|���F���ׁ�UO,c)?8���A��Tw�
�1�q�KH�8%,^��Q��pe�m�F�Ҹ�5�]B�i��li��.W��ܧ#�~LZ�ڲ'��y��_�v���ozx8�kY�*Ⱦ�͙l�7x40r�
a����G�F��ȝ-rCf�La���C���n�{��;!|w���x�����'A�=E08Vp��fv��uM�z��5�8|2�4�o�Ӻb`/���Б�Ks�d�BL�ɒ�Ù��a�Z�m�iUr:˼��$������/���d�;;]�Ig ��S�8l�O��{D�fRt[�]�t�I�θd7#zH�qХ�h�(��V�����=n��e�7�~�(��§���xcZ�i�#)?�&����L��:fq5'�)�~3�Bҙ�4����y;��y� �W\�F�*�w4���&g4!7�`�v��V�x7�`*#��Mgˎ�;�)�
�F��vL9�dΑ��'��^R>y�n]�'���y"h'�{��)_ l�z�΋T�aX�
��UJ\��\K�Ģ��ڸ`'Z����U�NA��Eƨ݌,��0J_ά�w�Zq��[E׼�"�n�̷�
*��5kA~�8��;tR��9#Z������*� F�D��9ѹ��B�E�v��	�JqPN�c���4T�;)+-�:�GB��(��f�T2x��AhR�Ҏ�U6٢c^5�����+�H�CGЦ<6�,�x1�%����u�!��֝�S
ڱVUtY����(d��k����{\"�X� ���g�f�/��V)k�����Q.ӿ�����Dg;mJAE���B����u����a�Q�̂�9
�_��dY/+1qT֯�%�0��\�Ih�h��	~Bh��D}@��[z��
o5���C�����O�Ӄ�e���Y~���?��հ�P��c�!U�'@q
�U4�#�lc��a)f�j��=+ �K�K�oY&T�y.�[�HzK�]���� �L�Itv�:\;�K�o��(��|�O��e���y3ֲ �|Z2Vyک�1,.�|=N`��)\���~�<ެ�4�2l��sy�lZ����$'t�����?$�D��ܴ*��(������ő�5tb,�,g�i4��
!�p��yL���}ƒ�wC�Ǧ�0�F��945/wq�X^�ڪ�s�W1��=�E�{%�?X���,��ǵ�!�a,z�n3)6ӏ�$��F-�-	�S�F��Me��Zز�Û���)%�葲sZD��`"�T-��1�m����cP�)c�b?�l3/؜�Y�^�5G7 �j��ǨQ��ކ��&f�sSN^�u%�y�>�I�#;���d�/���L1{���j��� ��[!iM�t��r�^t��,��+�4[3;�Yj��}`�S"k�#��ݎ���-	�I#SR�n�f���M�IZtB� �Y1�� i�}���x j�&�^�4O@�wtIv�#J��'�qCu��j�ةС�̵�?�ؿz5�рw53�{�s�[p3�2l�����>u��U�|@��A@�,u&4����4���ʙ�	�T��t'��]�C��贊�d.�p���`C�S�%*��e����0aF�>psK��%e�NC|�h[3�G�'�18���D���ڻ$�!6C�����]Q�`3?�{٩�u���Ɍ����a~��7�Qi�-�����Oo(�9��W�ή�(ywx`����[�&��Zv����r�c��ôgנ���cp:�Gu��C��`���Y�:[�uT,n�x1*�r~&���U�A�)�G�o����*�����mLN)S1|R��#���ܯ��NGqⱪ�3���;�z1��jyw��}:t�O!6,?*'��q��f��dl�\����������e��b>W2��o�ɤR����%������
��uNvzՐ��D2�2ߧRPw�teї��[zP����+#��q�ܚ��e���!�� }�q|Kl��?w�DQ��~�8��*Ow�ʱD)%k>�C�a��e����S=����{vF�i�t�rf�S��{�%����;v�9��*��M4�n7�_�oz���p�"�/h0A��F̙.-C��i�1����fYBR�ƨ
�[{��a0�E�ӵ����}��|�r���9���1�:��^0oǤ���(H�ՒL�V6}Wt�n��@���P�
��mm��r�svɐ��A>Lh�gZF˻-z�Yl�	u��ǝxn�@�R@a}$*��5��5p��E^"�o��/�'x����nx��3{%�k���U^T��P�_�l����!�A�_��ɑP�L7/�ԓ��A�z�|f�&�Ie9̌C(�Ƴb��{���%�2X'�*�N��N�V�G���5�޸��~t	�h���w����o��������u0NA��Gv��U���@�p�����^��I��������,��6��4'wjR#Վ~MD�NC��Z*õ�$��S�AD��&m��[�f)O�UQ�v8{,1���-֪3���'�6��k�� E�v�,��M#���Dً�F�h��P!�99��Q䅞6�=h�t��O�2�����R�x���J�������;*~�����/3M�>V8/7v��ǮW�W�`��ՑT�!���_aH֢ J,s`W��~|���=L3�lN+�*�H�����z�q�01%�4F�0eGS�Z�iG�ht�7ҹ��]�Ԍ�����j\E��n�$I^+bG��G�?u�j��v���o�S��"E"Q��v����z�����{� �u���"{��Ĥ���g�U�#6Pg��t��C��@��t������n{�/h�J�l:�p�^7�<Wr�a��E���qX�,�Te���q*4�)�ĵQ�+���+B~?zbSlIQ����d%(i�$���X��f���&�uud�� Z����Յ����%���
��8^œ��J�u��[����o�� ��P�u�Lԗ��˜[iw��R�B��B�x�Z&��EL�ݼ7Y����yw��}lc��p�
�l𓯻���34����:�PD	{�����"���9r���m-���3.�+Kv��?�\T-k͖�%�ԨGM�Hԩ�5z	�*|�����WL@�%Kk���],wX�ڗ�>ݨ��+�f>]t�����rq$h�]��W�v+�,)G���}����i}�����R���6 w�u(�G8���֐w+q(t+�<��'I	5����0xul����x�7O�u�ڙ���³��h�Zr�u�>=�M|�D>�h[Z�2���S�Jl3{�*%�/�U���s�9k��탗,U߹��4P�EC�Z��(3X	�/����#/<�������6z�Z��U��5#��4�иP��K��5JFL	�͞[����h�S�W2�E6��{��w�g������BZ���1�N�B�v��MP8�GT�~��7�SV`~��[$�X�k�#�Nv="�Dǡҗ�dS�io3����#wK�ζ��y 3���뚜����������L��A���C�M�v��EڄK�e[��1� ��#�'��LC��&�L�V�.[Ń��z"*QM�3��Y�(��:����m�]Ϋi������<:N�EQ�n��f��9�|�J؎��3���nW���˹"�0�a(R�X�Z��HJ4�G��-1i�p�{��.O�����=H`K��_L�kl�K���X%��뛺�,�e1�H�yᎫ�_�+/>ظə(�R����^q��t-_�LtΖ{�{Tn�1��ht�ܷ�/ꘊ
~����fm#�鎹��u]F�sn��G���Y:�������s�)J� n���đ�3)���u֯.f4?��4��Zkg�S�I�s\��;ji}���'7�2p�$ħ|e|~)�6;_�sF��<�R��haH�@[5��z�&���tAV�l�lE ��@h[7#29`��k(���.�@���O�~��m��ւ�`��g�BYˁ~�GI:p�w����Z��~�,�(�~��W��OL^���?�o��|�*�c0�A��C��l�`-��ȅ4�Fj$L�kF
�$a���i�;���f���f�8&�=QC��I�#>�s�p��^�G)!#�*wVKGr��T����g�����^�>�j��[aJ���Ҭ[.���)����-�V�-	L�D#��U��9k�xlE����zAt
,ȂU^�]O��� Xz�A�럀?��̅�]m��AǚR����Z�j��:��vA���;���n	��u���2W���V����XT�S^�B�����U�� #�)�������fy�y H��)��Um�/�&0[ n^mv��{�ш��#_�;V|�=n�)y��9�K��J_��U�)=p�i�&Q�����q�';(uR�h��2#	� �=EWnp�ЪT��s
">p��~��m﷖�n�ݯ�8~�>����6(����
�DN������_&t1��TبR)�v�g�ڂ �y���K����#�U��f���
�D4�.�#q@��F�v�w����j+�*zL��������>���dD����������,�q���Z�̧-��+�)c��Ca(���|�zR�av\�=��+f�;�(�m��g��gx9?%�G�2π�w��Ƌ�y�t�!�i¾�VB�˭(ֆ�9�x�iV�Y�vQ�_�8�������nI(l��õ�Ƨb���e���x/[����؂��S��vǚ�6N����1�
J��X8�a�Kj�,{�M��U�.ƖΆcw0�0�&��q,K� ̝���Ӫi�]]-+w�N f9�AK��q���ѫE����ն�z���N
�<u�3�������Q�c�/������C�Z�uƄ�Ժ#G���ǳx��v)�]�/[�+��UeBV�܄��]Z�jG&��kd����q/A��l�_�;@��ˊ��k�����l����U���p�#攷�P�<eS��\ɫ�]Eb]S�Gb�0���ߞ��H�`K��śk����2���?�\�d�=�.�\ag�0;�/���k���o�?;�	j�L����d� ��#vK��\�3�D�CA�LU��1�����u`Pt u���6�^�������n��� "X��;!ҨWI�W��@qw���;�h�t��qF�Y����;�W)����5�����PǴ��1����Tvp�I�{��ܩ�Л�hN�ȝ���zF��;�dakth��2l�xXI�W��f��Z�v�6�{��@�\`���=~ģ��n�{�+��ӝ�F.���"�F���zEjHZ�D�>�7��4,��ATb^ۘ���ۑw�K�1��q��g�Ad��,��x"`ޙ�&�2�l��w��_�I�fq,�KW-E� ~)7��b��� ���������@�c��#J�r���u5�1�`|�}6WϮSs?�V]o<�?I��[L�	��ݺ�؀Y�{b����&��eT���15����dj���Y˙d@�>)։�IL�a.k-1�d+��v��QW&?z ��t^��j��}[�c,g�5�d|�*'��X�=�v���½n{�F֍n����Ҽ
��R�(w��Ǝ0�,��-��J�v
�[�
�Q��D@�V/���\?Z�6���MW��U	?ʭn��mP�/}t9i#��Z�<2�	���*���w��U�a����g� ����*����Ԁ�r:=r�a������̮�[v����Yk�N��v�U������ J�ن]\���&���ȩ.{;V�X�p/a
S
����Y��ͱi8��Q��X̞�FI�h��_�;��X�u�A�.��v:h1��;t
�&��0��	w��z��Y.�M��UB��)e(�W�Zr=�Ĩ�9��������N$�M��q��j�X�X��q����.����r��՞��F�`5-�6Z�޿��:�ŕ�Xj/
��3X6�!��R�/��}Õ������U/�<	�.��XC< �1���&�I�Y���X�վ���W��-����0¿�fiVI���"���A'T3$���w�_X�����NH��R~U6;�薖��Y��0;�/����4=n>����a}f�.ȶ�W�r����  K���IO$���t
�z����;9�G��������T|T�%��qn#|���� �]��\K�H��M'���hGJAS���RU�3ԲW������UKܒ��b�aS|0�p�<b�IN�V�{d'��v�=�'��W�ԧ{9��RI��ɐDc�x��H42 ʗ%�O�df=�2w�ZȮ;�����f�A�.��*'?mЊ�02���i�H� �>��k�Ky�2�&�.R\f0�[��^1y�v��S�qJ�݇�Ͷy��\C0+�ew}ΆT�Ԍ�a�������S�G��]u�hlڞ��ڄF��
C���[c�I���ê�+� GZ����&33�Ma��|Ǫ�'k=2F����0��X�Ji����R����u����_������k���,���Ⱦ��s]��C��g�z��e}ߖ��m�ص�=>QX��!�D�Vr���j�ð��>E+�����+8='`�T��~�s�C�w)v��"�h������ى_��������Z�֘'����1�Q�Q�-���YB�k2�|�:���H饀(8U~��E���F�޲��l���6�Em4�`HP|�Y���?��Mkc�~~�F$����s�����y�D�(~�[�On/NREna�q�����I�9�'��٢�k,m��u~�p�I��ށ�H�S�ϪZ��mgw�caÑ9b����6ŏH�1�Qi�I?4����izw6�Y���IP��m�<΂o^tV�GlP^:�o֚���ݑ``�Bt�kpE��F�B���s�ɍ~k�ܣ�IDM�d<!���f�`*g�IA��NI�}k��mÜ�2r7��޻+FQH�6�P��#Js�R�u�
��< :D�d�PZ{�x-��?��.z�E�����)�΍G�[$Lj�3��v���m0�|�����Pf��x��u��r�>����z�\��o��ʸ����R���%��3X*>&��	���xFk�6F��Z���ߒ��k�y�Q��Y���H���V�=j�X�_��(Ǽ��5]������fp-�@")BeJ��E5������^�z%ש��=��ڣDWXJ�"-���l �嚌�;w�O������@��>Z�3��^��]� �`�!��u� 孫d��-���swn�������y��Gg"�v��e:r�aل�PlIt`���q�)�e�Mc���v�[��'U<Xj��c�K�ۡ���j�6�*L�c�i�~�H�ܤ=U���z��x�m�ng�O]�r�[�g`�w$�y�B�\M|��_3�m֥���c��A$�*�~����RW��"V�y��s˸	KVz̮i���pU�3���d����GVT�N+������*T��@ύ����Ա$�����Q�<el��)�홳ř~��P�����U��,c���\԰9���=ߥ�]�~ �3Fa��PG:ؠ0� -q2nD�$�W��VI`�N!�,�w�&�*�,�@L3��T"w�E��ߌ�YHt�IKǥ*���<f}�E��������$�Puj9�l����
��	I�h�v��ɅE(�" "�#x�:3���v�	��VYc���U�)�� �����"�>.80��=��BE�rֱ(M��9�hqƻX��ǹ^�?!\:�@Y*M���_7
�oA!�X,����w���$��SxY�J���Ɩ/q.x��k���o��	�f�gw�7�'����o��y!�#�TO�$o�`W8�O^���'�������rǰ�.g���ݙ'���ݴKOP(�#�}��d��˔����@	F���_x��ӭ�
F�|����/܄�(o�4ɜ*ꄋ�5���^,�^��X�4g١�I7O}ӭ�&�)j[��&7rש��!Z��_vz�b�X4�dQπ��U�E��Yjɘ�h ���V��{GsXJf��Z� !X����k�P����L���h�:]ē��Ո��)� �!B�(�_&�s�N=<�����Q/^��96�lK.���}����
҈��~��x�nc=&�"#1��nW*g�oO�o����Z���Ģ��̤�u��������~�w���W�SH>��څz��n�Y*36Vi*pAj��1��]Tƒ��j���C	@�Qi]�E�c1��9s��r<g����!4��-Ü%�J&Qwh��H��f�q��R�� ��;$���[�!(�Iŝ�	~=䘎�Er}F�L��m}?J��6�l��t)�Ҙ��X0�E`O~���=���
hd��������_�۰������$���Ȭ[il���H[�Rz�N�vdV�`�T��C}������IF�[Ř0�Q&��\1�8��Ynj[��������(���Í{ۏD��	K1���Ȝ:W�R���1��='�m2�P����JX�W��~�׬�4�Y�7m�fi�!m���L�/6��[�_�ȿ׶Q��?3�t�[�xɷX��hx��E�ƨL��$Q�zз��A��gl�úR��-�ꢈp���+'t>왈��HE`<c�_w�c�S��i�<���n��s RS�@VM9-SN| D7�������M������/J��ts׈�HF2Q|-�����v�\k��2G�j��Yb*��`�D�Z�&o(���H;w��ʦ�$�����U��z>f��I>ͼ���v���tG��f�2���}��ٔ�6X4ǹ��2�sV�k#b�[	�Ya�;ݎY��]m�7#����0��O�{ouۄlP�9ȯ��(����t3�2Q�ݘ�Q��3IB~�K���k��>�b�lM���z��,����ʤ����L�qƑoX��i�s4�aA'Sx���8�K�*+�g.��$����YAҖ�x���;�%��r�C��V��4U�@���^��������<�	;у*�/�B)�t�������Ň�4H.�e��lD��l}V_ߗ��H�t����n�v���E�r���^���y�h0�K
�ǳ/%��%>����������&T�%�t���&d��r�H��GO���1k,�ƕ�̏d�1�s�X�
��o�||�/��F{�GNѭ�e�&h?0e
p��a::�i}9X�����'����b9���[)�=�� KKN�%0�p�ݴ�}!�5���x?SC(I�%'! rg�
�� D��V�<;�y�v�Y5tcL��B7���d�
�[�ym����!x�;qV���S�䙨),�y�!�WؐN
h��X� F�Dx5�-�5���E���7�{ɼW���r��s�oΘ
%`�D�$#�1~�Wd�S��-�r6�I�/-zcL3��(�j�P��c��*[�,'
�������ef��>�i�K
j��s 6"zU��g�^�����0�C���ݵ��so�����@_�n�?���Mn�Fd��E3%@1��.�W�0ʶ< �Ӻʠk��k?�-��?	�*4�s���B�#&���lA���QyQB�v����	i5��	�T�nr#��]״�;����w���ޛ~�Tcj{�>\����&�����"�h���0!������jZ���:ك�Qj�d������k��i>�%DhU�缍aqo���b�f)�3j�d�[�@���	���IaZ3l�ѡ�r_����ў��|����N	��O����c�+m-�0CE�N�	�^R�Mh����mfw5�He��ߔZ�~��<��o_j�W�`�[��K���Ƹ]jU���f�	�X��5��	��i�X�����Zj(��^���vfJ^ym�0��,~���#�Ts�M/#	����RԠ�s_���ܻ4�H����%(�z2r�rp�0I�7��0�{7�Hd�m�A�\�G,�@M�Y�
��N�zN\nC01T��3b�8zZys��������IjC� ����'!G�CywHP�H��CE�i`�t�j�κ]�n6$:�����|��=�uY��ͰҼ�b�,if�Ƈ�����|*���k����q�&d�J_z�	z����-z ��ͻ#즾�A�Z�_z�#�s���9�\J&C��p�'���Ffr�L|Qg�����~��%wO���9 �\[-����=kC���mre��i9c�͒(?i}Yμ��G�Y3X$k�?O[ddԙD̟d/h�������I��Le?:���= �+�[�~�a}�����"L���S�'ԗ���i������A�@x�I%���X\����_)�^2���Q-�p]�@/�&oJX�Ҕ�q�ݵ{��mhm`627��
��_Z\���ؙS��}V���3��C}�N[���������T���[vu�v=Y쬢 OM�(��^o��ۯ�W���B��.MB��]t*+�;k���i�N�ئ'���АX�mq�1�����g\S���g�L�I��ܿM�#}v��BQ�a��s�@���)��h6�f�G���.��(^U���ږN%Gş�-O>ð�X�����7t��BW��xu�l�ZӤуā��(a}l����0ټ8���}7V�
W	Մ��Q�r���N-f���@D���O��ǿ1��&p�1��	Ȟ|�/����bk�`Ϗ�T�Q2��0Ȇs(��5���|�k�V�λB�طz�=)�(�����Nh�ĺ�Ӵ������e�W��t^����y��m��b�?���8�v�n��@��ѫ�7�Z���8K�$ʎ{�����*�M���/���ć���p��ֆ��J�1�	�W26b�x�p����Oh��Q�['r�i��	|���9��(Y�	`�0��'kx��V�jt��[�c��Ns��ޓ��c�~�\c&�TC��>��z������ݖ��B�q���`'ߺt�1?e��^�U�l�<&	@�s��4K ��p���s�c-�ƛ��\���@#�V�P~�Z��kE�h�W5�a�N��З��S>��EF�����3r4���ˣMNr�����D�c(z�ǧ����*ة	��о�p��t8	=X�fʾ��ם��&-4��̏l��L�����6��y F��YX�voU6M��˔FX)]�]m=d�w�k��mo�Ù�ѤW�kB���k&(㉔SbT�v�D��fK�3wha5,\�(nMM��Zy���f���Ҹ�{f���X��E�-�YU�`�=4��gƁC+>D��{ ��T�"�����c�y���3�r���S������s<&%��>�_p�@���j&�0�9�8�ݨ�ro��˴k�H�9��ш�)C� �d���5 ���S}[�2�X��}
�-ڞ��|aÅɤ�#�C�������g�}������_���f�#|O;��R����� Tan�Z�@�$�y�S�+��c�;=�W� ��|8[���XSm�9�{Q��LT�:!V����O���:��X��G�3���1��b%�𾲐��z���bC.���و���d���I�G@���@��-+�d�x�*;oL(��!�A�cĿ��^��0E8-�~T_��x��֊R)9��+6����9P�o���}��G�3�Y�{�k���r?�q��6	k��[�c]ס	�⁄��� ���!�6�)Z�L *T��%cC=)�˭��P��hn�O��0i݁ˁ�ћs�q�LH�CJ>̃��X*T^������*���`�� �CV(;�F)a�/r9�]N�7��W!�L���B�>�ҴM4�ͳ���<���)I�F5�&��V�kx��-^�dk\��8��/A�%���ս!�O8�u ��G<X��eYwa�A?��;�}눧 ��.�/�LԒeV3Bn��\��V��p�4��?m,�əi�h6��qjwZ/H?D���+���:��k��&.o��&	��9�#�x�x��k��?��	��_d1�;��҆Cq�U0e}�#��ȥ�@�	�[)�����}�P���	����<��S�g�z���a�#��'��?���Ea�\��Jf���0��|v�4�a#���xWjLdtW�?B=�1#�Ax����E(@��u��2^��
+M4eS�����7Z�G)9�~��:��lzUi,�fQ�?���fgBg��܁�v\]3��~;��PV��Tq��Vpv)�R���ɛ�#�5�L�u2��s�˥6&�rv�'袖�S��&XB煉�3�X�$�T8:K03�::��o+�uX9^�p6�K���<Y�3$Tj�U�S8���#2A��vz��*�6���[�����J�;������5�B�K�HL�9�9��ќ�v��D%vFһ��l�Y~7�� �hW�O`��&?�#�K�t(��jM[�;�Hsx�b0P�L��� a�Z���h����r&P�&a�h����e:����GpYC���g-�u���h����O��ҡm�y�][�'�^r.�� 9��քc�N^q��M���^�Z,a��\�˧��;^�dW9���?�sO�eB�m�@3��r<_�ŗ=��Id��о���G�|��!�c�h��A�F��[���s�^�M�r5���'?��90��>�,Mc�K�%�k{.p������h����I�c��3�A�8�J�<ǵ:�N�t���ο�ͺap�C�,� 7��s�媭�w�IK7�����àJ*�!�-�|a�"�[�} ��	.5C�$P�oy=ww7���i,\#��}��?S�P��ˈ��]�ejb(��@��	}vh�����.�}t� ��X54γ�cg3,���lDmg��VlݖG��Zij��&�E��j��j��������7>R�=�`�fL��g���p�P�:���?IaM(�=��"�^P#="�i���ey��훶T2ڱ޹	4�a[^	���o.��p3�}�)�WRix\�v*��º,w��1��p3Ƌ%���ό�W�L�0��y�N�P<�.TAF�<�
��O��֑0Ӽ"����T,^�hZ��)����2�} �#$��&����׎=<̨��ʙ~����.��1�k@ȏ2�d`��g��jj�vȇ,1��'R^=�JJ��N 8$�O|pu_IeG[tZ{��|�x}躢�X�դ�	F�&���P�nEg#ݚ�P{�S���q:Tn�s�[%.���e��ޥ������-0@��ޗl�y%J�o�pG���B��@L�s�f��B�׼�9%��~LX��E�f � ��gF�9�Z���&��k�$��B�)�L�k;� S�7M�n��v&M�~1���:��D�Z������ϊ�>�&ucZ(c�(rp_i�/�O֔��۾�Ms�o�sA����߹��x�2��Į���G_�N(�e$c�{-g+��SR^�����w�[5��0z�B-!��K���MZ���Y��G�֑��[g��'�h�f�ghahU��7ӝ��x�_�2͠�7_U�I����1�*w�����oHh�ܩ7Q6�|p�!��KMS[�kuڰ~xF&٣*|4���_R�DU���'1� ��"M|͒w�!_�/���Z�����U}B�6��f�Dj�e����1Ӫ&��\Y�ǡF��m��&I��w���?���iB� �����b����5RF��/�D�<�w����O\Mܔ�_7QF9*TY�m�t�\���*?l������T�e�U�͉ T�-�^]�:�����n�5��j9j9���8ѐ��n�?UR�4}zͩ��ýzs�����"��v$ڔ�kn��$�/��tXJ�����xVI�/W�X-P�1�4:�FO�M�ќHB�$��zd�B��>1
�E/�*T�S���Hw��}n;����蠚�Z����u7p:a�ݪ>˿k���`İ�ٮ�}J����ٴ ��iθq̦��d�ʮ(=���p��o��proɵ��2��q&%l2�ۤ����X
�(_�s����dY�jt��s�@�\r��R��q�M>�]r�6<�����22#���CgDL��c�'o5���͌�� [��XߨD����'9gA���~��I�|0�R��}#Y5M^B�.e�Ktl��I�zjum���ce*�;g��}|�F!/ j�-=YQ�R'B�ԑ9Yp��Ѽ/s�L����dw�ƾ�A�_ּCE�_�c/�u�@���;�7ە:�l#��ϝ��c�����Cҗc=�NP���P=a�H7���_���y�ٔ8sR4j�7{��Uܽe��'uB�v<���Yt���^FH�W�~Y��U\I��!�XB!4�CK���g��rT�h�C�h3�$OLNR2�)�L�/�������e���W��̼�����\�mTn|ֱ�����@4�܄!��E��2s����;D��v";�R�<��Ec��������k�+n�9�ɦ�t�y�	�o�upd���݀V4�wD�|���b�]���;�|����=6x��x�_�J���g@]�e�e9�x
��hx
p�g3�G1kt�ǂ�WkO�Q��}�쬵��ch,�ZY;2L�(ru��T�Fj~�5��$,��%.F��:�]vx�?!u��R@�pA�{�9
�W/��њK����9��5hQ��%��>aJ"8��F��׃��Wa݌����Ga�d-����q)�(z�*��c@�y���|j�[�	�}���|�?{�_��cs{�(4��*{�9�EA"�Sg?�c�H�r6lò���"Kc\�&��Ā�o��wJg��B@�˩'^�sn�i�*5��Ǉ+R'���6�W�Cf��-ú����Y=N��;�T-��3i@ʅ�Y�~�����<��^���}z��'f�}pu�|��
ԧ�걨�b�Pm�^Z�2�r^X;��"p�ٍ'�\ݧ����.�P�b�B�\	��R����lO�P>"X/@m
�Ht�+��|o�>���woKl�8�
?�jO�# s�\#߿L&UW��$O�	~+�T�����#B�T*�oo���-�&�kB���}Eז�#��_G��wG�Ӻ�{L[jn[ d��)Tn+_WL�]�F&� "1����R��a�2rCC��QG���?��＆_�_�	1�������`q �����o����S�I��J>��$��V�L�J~�,�P�ـ)�3 �u�y]u��	��aJ�2�˧-a!��H�����H1=2��Y�mP��,<1���Fy<�V�#���2��Z*{$<���<��ˢw�����Sz�ϩ���[�ϡ��#���e8i��Qj�]`�
ϞN��Vn�\���N.8��Å�I�T﮲�|Ct?H/�!X�uao}��c�'Q��UZ'vr����편R����ց��S���I�=<o��ax��h)`pxR2���(���jOh�/h��C�V״l(���Y�s�o���V��m����2ya��#����v�OE:�:u�8;�w�>h��e̲��oG0SR�7����a{t���7� 9��0V����	�j�\�/�_��?"���Rb�4�v��k�⣩�^2_�Vڰ;�CE-���8C��/�<520$@��Jt�WJjE�C;W���5��ה,>/�`��b-?�	�C�C�s K`����`.��$�,�<TO��h[��V���v/����H���]�Sq�Z��n���݄jǛ��y>H_��	Uz;f�S���
\i呄֬*yT��<R�+��\�K�6�	�)UfI��-�W�+���z�oa ��ʅC��X�G��]�^�(]+��}s�����f#|1� [W���5{�e|���Q}$2�o#��rX�|=^P:^˼,ٸr��x�73�|��+b�?Ѡ9�aБ�-���W�t��VƝ�'L� �'icw�հ��U6����b�\��n��,�R`)yН?�6�oY!�޿)�L�����""�U���a&�):U��-��g���nxh�a�U��T�4�f��F��|>�޻T��؂4N��Ϲ.j̲y��D[n1Q��e��E�C���{�}��H�%���l��nu�Ĺ,R�$��Q�� :��a6ktn���~ �r�D8A�?�9`�z�v��ֺ�6���-4	̏3^i##�%�XL;3����+��v_�h<<�iN���ʥ��e��Lp�^F������\)&�gȼ�E|5,����q l[$ӁrZ����6����g(�"�y�(u9��8�A=�v��uV��mt�J�����Wz��C����~������P�(@m�D���,d��c�}ԍ��>͞0$-����(6�F�D�k��� N�CE?gsL�*��
Yx��]{(3Q,t��A
@f��e�� o�`�3{iNePg�)ě<F��6O~��W�<˚�P�b�a���y	�W��n�=6f��Z6db����~\#D�Vc�w==�֞����x�*y��<,��rt�_p� DG"B癧����1J�̜�O�U��gkRW
wqҮ!�7�(�]��*�
~\{���j�"�j�ƭ)x���1�p�����BO6��QW��|3r�q�u�։����񟝯Ƽt癁�mT��Ia��{�{���($��Rie�ƁV'������m�X8�`E�N-��Ž(A���q	脣��:���sej[f9��3Eg?*��<�Kg�[��zW���h�^Y3��,�u��˖��}!n��bu�zIq��%�}\����z&��(�=�ʤ@�M <=�|W����1����s���Sϫ.� �� �8���-g����(��+ru��̀�Vk��[D��]E�P���z���Md��R�S�K'i�3Q6�3�h�M��?zߓY�������:��;���y�I#�$Ƽ��� h%�垧I���S:o�?8��T��� ��J���8�/�:���'C)�3��PɃ�/y�}�{φ������	�s�=���m����Ż��� �~{9AR�"�k�.v�h7q,�[f7�%OEɨ_���G��r	(������� �����-bXӓ�Z�)�/��	Yn�������ဆq�&!�:z� �d�J�Pߗj�x���ns3Vr���-��a�P��~���1�Ѩr���s(Z|E	�V �7���u>�����vNI-	��.1&B�5�I���tEI>��U� 6�OO����hQ�A�m�V`�˃,0%?U0>>6���('Ó]]�$Y�)�
��7��{r�d�͓�Y.^�'v�����d������'�8��_qm[Ĩ8�P
�������'�ׅ@%�Fԣ�¬�'���a�.g��dļ�͟_z��|�k/�5a��z�}��<��)����"��e��"��!�._�e3"dZ W�Ȇ�Q�	�� �J��� M}�zl�}ʰ��}�\W.��@���&P�Q��plA����ӟ�yd>me*���v��`ܙ��:b� W����s���0s-��]ub�����:R�*\�;�,{�>�ZPIS��Y`Sy�2�O�B��yYp�d1����b�;���_,L�������>�eC(����Q�Ιe��M|]{zȸ�z�O�����5DO1�Rw�́�\v�(��cw����SC�A}Mb]P��`4�N	(q�usCV	<Q=d��[[�(��a��Cj*m�l�K�c���wlQګ�Lˉ�i�d4��ѱ������X�Z_�ᬒ�̎���Q�&��Y�A�ۑ������$��j��=n��貽�}��g$����t��Z�,7���c��Wz!5���OMt=�9ݜQV{�F�P�~��nY��
�@�hm�=��_��&�f�i���So���k�Uܞd�|D������j���sG$�S_�ZX���M��f�S��g#�d�~�󜔙u����cp���Y���df�h�k�<%�V�-fď(��҄�EZU�x����Kv=&DK�����v�дS:Ʈ�r{Z�E�co2`����t�m�d����s�-��ܷ��3�v���H/gk]�;u�*n쇸���D��K��ښ:����a�3��_�=;67�Z#籹9�<����kS�Ƅ�����(���>%yP	ЙvzB�hT��p�oм�6���/G�e���,Z�K��m9��Zp�g��f���
9��֔��c#Mq�|�F�1-�,:�R�P����lcc�W��,�avjliyᝢmv�����ϤJ��)T� ���g�q�y��Z� M��0��%j�S
�=ɟt�G͊4�� �R���H�Yo��=�͜�y;!�Z �`�IR(}D�ܑ48d�}�`�a}3X��?}}�	���It�wi���n��-:�����(��k�#SC�H���}e/0f7�>��VVkF��(����*�*�F�3��Q�\W[��g�$�g�͌��M�\b^��Y��#v|�P�z`�!���Q�|zQ:�
�vJ��U��,��1�}QZ|~Ѱ�*=���(��sp�!5fɟ {[�kM�%��<��m���i��j=�
>���n8'�c�@,����m��_����`��`�yCRt���Y�U�,�[��m�:N��E�*�h�:"��Yx/c���	�w���:n}���w)7CZ�����&�Ű'��2 l�^KM��Fx���Hz] j�y��X�v'�N3J�� ���e�_�mح��1+wtX�ġ���P*���Y����l_@F�K�K�X &F���&1UW��*��Wj �!�T��I�Q;�GF���\��1z����Ѱ���\p��"C�nr/�|?�Q�H�;�@��:�/��o ���!pa��2��DiS�!�I�!)��#��LE�G
�Ѿ�%4��S_��rA�S��N%�����XvHV^��Y=�_i	l������z��S((h������h��n2N�ٮ��X.e{��t1��	���d*��4��PLV��:�/��-�G]��c�ߍaX⭹��b+��v�-�J�:�`��4�8�����,����c�կ�+g�mx}�ptH�L3@&t����4k�z5ß$As���L���E�ဋ(ȷ2��F|6���a�� 0#�J�wc l=�T؉a**�pH�-�Y���D_���AiƽHp��C���8�fj�-a_y��t*%�� &.pm����A�=��9;E'&�x�g��8,(���y�L�<ŧ]U�+=�r`�K�s���{��g��\Ul�^���	�tio"2ԋ2����C�&��겇���j�/�8�ѝ���&u�W'��+�g�O'�E�����؁~*�Q%����e8	&�ؗ���� lXd�w�6���X��0=�Q��A�X�;��l�`n?�-�G��ݤ�~�L���J��y�X��<~u�j{���&`4�]td7��@[*�k�c��A��-Ρ���J�hi��S���ygg��%3�sY�ƶ��,1W:���VW��� 	���,��+	;s(��9���䵺���2��.�l���=�_����
M-57�[4B��rC=uq;�!2L�ۇ��6����EAp4ol�Z�d������Sғ�aq��(������z�jD�@z��gj�����j���v��B.ܰf6�G����C1M��g�X��� P��2[�a�.�]b��z��n8<Ͽ!"c=,��q���M�"m�6j���6�p���$k���>��1>o�C$K'U��8��o�J��3W�o#A�(�ñ4��wa�_r0�A)��R?.���>`���u�E����`�+7��,-rIG������&C���FR�U��f�|K@�B�s��Y���p�<�i�$;~Bu��c����� �N(EF��������U�幅���������"T��4���K����B�E�޶[s��,�Q%�s�[5u�p"lT3���P8"����g�Kc�T�y1�ɚ��7~m�u�����#��آ��W2��S�\q^Z]>2n>���6�_β�9'm8{��߹���ptX^h2cU�ޘ�*�;��MDk����
��S���o�3��!�g8}��ܴ�9��{�����W#n��9[����\�AP**l��J�O+�.V��-	߇1a�KFX9G��	8~�M�������l�T!���^���z\�R�0I�X���}l� Ai;0p�K�(���
yI��0ޮG]a, ������q�M�!�4.���2x�ʾ�s����������W��c�\�\r�Ć���p�}�7R6#4�D�B��_����d�!�mn01��ʯ� ~M����/���*����i�A��\SE�V���6���9H�x����	CD��b̅�+��G� !�3�]���|�Ғ����@%I*Ť�K�J)�k��pY��3�$*~�� ���`��˃ʃ�e֤��x_��oi ����o+ڱ�q{&Ɔ(�3Ƚ��zS6~{&������/��·�K���Dw�.:]EH��H6����`�kG�qZI���f�%)K����$�H0%r����D�lw���2��*.��TX��O���9{�O����O0:�0�p�Y �$]$h ��J��pw&�·!�}��Cu܀ϗ��QE�L������"�1Z��)_�߂�������� %������2[癝,�Y)9J��E�p����A�x�P��3�Ŋ%���43��Xag�Q���M�����h���k��E��z��l(���6&/����������|q�?ڒ,�22&c���t��	��;x��#vWN䇌C�V����R-z뮬`�������ڣW��2����� �8��7�XLA���(7���=�y�k�o�t.mc|���������E�|	��t� �M��~�.�t�K�rk/��"K�󀻬͚]s���̛����zU���M�9��y�0h��;��������}.�ݺ�6���ߊ����KS����x� "&�@�¯Ţ�E�R����r�|_L�X�W�	�'c�پp5B�Y��R@xL����GԪ�B �8M�N�NS:����N���|�w��z��\�O2�+�<�DX�
�ﰟ��B�	�6��Q�5�&�&w`��U�4ߔ����"0�aQ�*�
W�3�̛̹�<�?��H�9V}����5�@Hwz6:�K[r�*`hҴ���i��e;MÊ��"`6��h*Ar�{�^J�qzr��V��O����I���FEJ&�����j�P\Mff	�}/^2ɿαVo��~�	-l!x`�K&n.>�\Ћ�Ǝ帗_^LT:^��[+�q_P򱉛�z:�h�C9Ң7P�A�;s˄~@g'?�a%6}F���V�r@	�I]-տ�E��e���a���Ó��z��hը�J5	������mw��WU���q���1�ʔ;~�	OdM@2�q]��32�(����Dr��9�ß��l�b�"��s��>I�Pf�'�J�Q�p�{{ڀ�����p)F�ɖ�;�J�g%��V[��)�?�� ��.������k���p��3g�<�� s�0y5��J�z5��H��ב8x�@Kğk0�����b&��T��3���d��'�[���e���<����7�V%�Юm���! R�B(ԶR��.�`<r�#�s��hY	�m��1��/8���6@)"�ݒ�]�Sf&P�o�3%��Np,*�,�(YB=����E�\��IL}��� u�Ҿ��w-�k�>ܿ�N�a픙�����b~J�햺o��t
�����Ɖ��m�s&x5͵��a����]���I�l�/G�V����h��tW/��CN֢��z��G�?�l_8����xI#R�l{���0 	�l[�� �F)j��ț�o�Sw��X�U�"q������fI�ɝU ��0��3-��q���y+>��U@�&�,	)���M�Y��O`��\�D�D�X���m3�9KiV�q�۪E���v���xF�;?���|��$� �K�K�)[#X���M�1���tE%���ș璫��y��\>_pK�d��8�����2nu��vj5���㩓Ȃ���r�D�LH�Z����׾�~���|�]]Vo��K3�s���'�!� �,�@�]+��Ƣ�]�jz6��w\��Y�^� ����~�$#��)!�oϲ�~���Y@q��z:����\ �(7¶o1hF���b��r'$
T���S�t  �4bE�n»3�'(��=?axo�h�m�?��!�;����:���%�q�O�&8�W78���꬘.��~�'ɰ;۱�Ɗ,�	����*J/y+�'�4�:w�ՕdV��ޜ��t�¨9VO�2K��P�j�SkS)ޛP�@�T
�بg{S&5��0XN���1�{����C���Za�Bi�7�>y��iǼ�ZFJMb@���m���'E!ɐ�p�����@���K4	,�,�B�A��� �ٹ���sX�9���͝T�o<��t��N�,�^E珅l;KN��݋���l�t���s���%����G���V�����t���
>=��,�^<�/ĥ�YP]�X��A|��
������Vk�e)P��
�8�@��zu�/�����/���)j��R���v�~��ӆ\�M��B ?x΋�s㩽5�E��%�A��\"M�FY���x���4b( �̸x�8�R�γ�9����� ��S�Q_P$�������x�/"ic\�,~屆�#Bo�*zAt!N�Mh�Q G��v��z�JƂ�H�-�&��t'��աAԌn,3ׅ`KTI��! �0^f&�~�a��c�v`|�釳����4��m�Rd*�����?�b�{<TS�H�����:�����H�X�������ϛ}<�ʬZ�uS^�"�2�����2d�U+Ѹz�^rXAyN|>K�ɵ ���[��9d��7�Q�}=d`�J���5hx�S潹!b��\�>>�����lq?}�"�:��b�~��l2k.�롺[G&UI�er��K���_�Rך���gy䓃�ޏf��A�����ҥ�s��b�¿1�_�� �����;���Ƴ��3���-1%�H��nP����~m0�V�BGP=�$�΋8~�ٽ�/�'P�#����u�YN��dd���f�bː8�uI}h�;&�rC5h��P�B� Ng(���f�ǽr~`�-}��_vܒc!(��
l��mei���&by���!GQ��a�����{��G>��΍)��n��?�����*bD�I7D���_���Ŵ)�R�Vx�=���R_ ���4T��vG��,�;��������G@���0:�NE�
X��b5
 �x�bY��4 �L�TH��:>w�%�K�V��N�z<I9�j�0&'U��|H�<(����`3r7b	w�*�\�z1pt�|��m0�@�T�������C�¹�����̲
l����y]��'���T��T�maΓ'���?S��h���^�l�3Z��$�r�4�}ǻ�\�x}�|%���D��N�ဥ7���)1H��P1��;30k,�p�d���eҗ)�M��=�S��lf����uɴ#(k�n�Y�
	�He1��g�2�� Ƈ♵�Y�^.��~D�'�p4�_#wC~/y��s���#O��|WI�����S��I�݁�V�_ߢ�l3��Av��*�_�I��qId�hf[m���W��6>�g}��`M��p�.�^��"/7@n����ܷ0\*$#�J�kn:�my�\��z�t Q[��Z@2��Z<ғ�4�k)�S�!�W��	`�\��J�-���[hr�!ߛ��{ i�2yȇ+\˨p��L�v>R�JE*�.��m%�1d!Yk�z�`a\���z/◎�Б��ц#�#�a2<�Id��Y���;}\4��J���ײb�V�Q����vb�Gd8�U`���Џ;���o��P�Hx�p�GS�z�zӆ���*jZ<���!�kvm͍�Ƅ��Uj��A�^����t�~&}���@Y���Bn�ۤh��-�2]�,����4��02@�a��Ŵ���z�A&%��S-�V..Ȯ��Ѥ�yG0:t���d�s|�1�$���{���bB[^E�"��|;�s ؝���̖BN��HE
�9x��PQ�s�oEe% ��T��C�����ő�j.��6~���Oe�I9������ͤtq{i9@_����D��QT�ZR�[#�ר(R��p���*��/,���}������?u���@�v�S����3�
c5�4��(�t�W��"OGR�s�6��&UN�\^C�X���Y�^k-M��e�&� �šͣs��C����Ԕ 3�Ca�r��0��z�Us'm�r�f2bWX������sH^�7ԣ�-���^w5F	�=��K��jf��|����B耘Կ�2R*A�����?�1����s����V}�,�py|��x@�(�L������}�M�����z����#-�-�"��5� s��iV�qb�Jw��"D~#��_Q��1����bJ�^��]���)���|ݱ���0s���NW����Z�J%�(��d�~���M������7B��nT��6`���J�ˊ<��	��b��]�6��T�5��=�}%(���_�3]�_����7�	�rNhdܼ���u�tNQ� ��c`\4W��B�7�7���V�&�VpF8��3�V���E���~�Yz���i�!�<�<v8MZ�&�s�	K�Ѧ{�8��)rP���=�ۭ���C��f�ӫ_7�2Κ���(W�D��k�PR$Y`���}C�j�CV@IQ�է��������Z����gl�3u�����z~ౄ[�ؙ>�b"&_(���Э�{����.u�yvH����;i�[�y�����
��_�=�ę����E	���r�#[�=;��r.O\x�D7�7��rFr� k9a�L�}�:Y�;q�{F��߲4Q*�HZT�S����
<�� �����V� �U�ڊE�=Y3�X������ܷm�(g=�-�)��D���J�K��#Hi0��(ۑ>[���Tn�<�����{h�s�7^V"��X��80M!K�Sk�V�b�(o�]���Ť����w'p	ey	1��t '}�Y�'��Ts��/�ܽ�}�-x�t��d���p6
n�~��{�v'�
w�������:&�P�z����V�Y�����tp\_\�5C��y
5o��ސ�O��4��OE���(9�J��0���͏���v���������4�N\g��[34��| �3op�(��K/�����N�'�c@�њ��;�P��y\�r��'���p�b�1�\oY6��Ub�O���qiG1ƞ�n]]g�J��C���]���T�X��Ӷ�Ƶ���/�4��_�3��F8����ITX��C쩟�L;���LЅ�����0[���&�Q�>W��8�R�-T�s���df�I�y����8���[-Ir�� ޷��^{]�~�U�)f�Ѭ���*<�G�揟�g�;@1 $�P�'EԄ�U��u�K�t4 �p���&�j1�;�p0 c,h�A�������(ր�~S}.�e�xs�7w�e�F���ۄ� ��Vk�5���E^�#kc�n�4x��ݽ�>t�㹀/c�*�g,o�(|lv��;c��>{W�4��6�T����À7���l஢s(��ֽY��t
Ձ���0�#Ϊ�Mt���3Un-�ԳH��_�,=���������h- �r���g�~��;:����r�@���?.4�s�S���y��'+���W�� Q�I�Uw̞�e-V'\`*3y��y�[*��|�ξ�U�L'�Rl�G�B�ޢ6+W��,����y��ŪK����i��6���H<O����x0� �k��`sz5�2�(%
�˙0`QJ��	��OVC\�j0g7FՖ!V��4����O{��;��=�����Z��]s��A�5�MZ��w ����G:��`᩶�I�/^�)p!�0'����<���e:�Ὤ� ��u�c��^��'�p4��1���]�*� Y�۶OD�_;��z�S��=���gZe� �[��WW��+�c�xf5OB$�ř� �A�t��#vI�e��t}�SJ�mw�S�.��Y�[:L@Fe���V�yV�2���i+&���H4T{/����8j��	���]�&�Uw�4([{���7�H��j�6�4��g�48� xń��J��5�j��a�joY���r?1�D6�Q�+sW��H<���)�&tV���M�_���å$�T>���K+�,��_�8�w��2~����ӱk�?ln�[���x�F(1�p���V�;�Ycb���o����)�wf�,�R��
o;F�-*I"3wo�����i�ty�~��1�(?-�S動��V	�å?�B�g����It4OL��w �+��cI����&,+Q����.�H_N;�S��W�kn
�u���*�Zv/����M0G��1h_��n=����?��+���Vh�t�T��ǡ�([7ٸ�������ed��ig�3��c*�øq5�	ݧ���%�8�$��mpY`n�Y��N�
d��To���]�$ ��L�v�����C
}t�%d#�DO���%.��NtuE���U|,)�k�.o�`E��t&��K�O:�����G�o4<��\k�oWR��R�V�ar<"�x���n,y,By��o���)�"���O�ƝȄ�$I7���O���F���*���C.Q�ʘ.%<@qJ��Қ�e
⩨ӡ��S��h��3�����W���M�8D�s[Q4:�`�a�q��AF����QK��Ԑ���U�|B��?�^���C�m��Wi��8�ޗ^��d/�^P��K�/�ʹd@�V��;�"i\�ZFY�0�4��ZY�Řv�9����g�NG�O?i��6�]αa3���M��Z˟0HV�c��cH�Uɫ�ϣNU��pTƿ�C޺���+�`y�|_Y�2� ��x$ߌ��C�&R�O�m�X��Y�{x�f4�VS����sx��Ax�$V���Qy�d}8�\0��<h|�td�L9���D�长�inIZA��o��=:���NO���\XN�0]L
7�t؝�i�e9N��rl�����tkNb���N/"��{ȅ�J([���w�[y�-�p�N�=Y�)s����j��	���h�f��\� ��=���E�N��UD�@�
x��+�;r�b�G�MO_��SS�F$����REÅ	N����F5$Ң�1cq׏3�Mݚgm��21KӉP^�Q����,"^�J���M@;�W�pi�2���sO�����I��T��Q3u�W�k=�ۯO�͑a�����Z����L˾~s� ���3M ��MO��ݨ1��F�����z����U(SE�e�Po��ʃ �O��!�^}O��r��Y4�/9�è&f��\��::zt_�2PEw�O-4s�Ϳ�3}ӻ7e~�D����s��@��	ڛ|���d��D�}�% ����7?7!^{}�m������0G���$���u���n4M^Q~_�����)9�$E���:A1�>@�d�?�g$4V����_u�<�=��{�iy4��#M�s���}ғn�"����}���z�W��׋n/*��i��O�N�[�JM���꧁ɺ��|?�ܷ�=u�]1��q��a�N�ni)wEpyjl? [
/62hӍc��o�dhv�qŶxU��f�R�:E���jtj��8!�����}�N��Y��\5b�
i�~3Ӕ�^�lЧ�j�8��l����G�M��r�;�JVJ�ܾ-^�m�4Ȅ��h��H�$�%��	����'�6"����%o؋zNwu�u݊C��b��"�w�@�8�Ӹ=+�
7�㫵����/��^ۮO�r���]�{q���x;� ��j�I�G���_��X�.��� `Y��2̏�/��F���8�7�ތƿB7$����[��[�G��Ƃ��l��lS�^X��M�������?d;�3�pظ3�慨�f���]ac��0{�tD<�v��	�|�-g�}�A^��W�u���Uj�O	���n�����C�zXl��!�dk�ؗo���V�+��C?:���Ǳ	h�K�g���iȀf?�A���Ka�KKj��,��q;=?F�1�Hѷ;��6�V� '���5�-��b��$�d��m�e��f��󤻿�����I��C�U���}����ߴ���9-���M��ԎM;6>��z�{Sg�)�u
f�j���@%f���lJ�e��;�c��>���f���s� �YoU+�LǤ �ǰ
�]<��9�P/�e%���CRbx͌S3�K���p���t��_)?���D�ya���]�Os��@V�㙛��6$<����*Ok�-I�=)m�3�懢�,��� <�`9�:�*�zm�����p�|F;HՋOve��E��	�;u�C_f�K&ӻ���L�h�^���:S�ށ��/������1��X]Ij�ߐOs�}�1���uo7��mx6u���j��i ��6\@Ѹ[[.���EP8���t|D�U��U��vtR(є��}zz��|	���-�`�fx�c�,,[�╡���{������V��������b�W��}L6���l����t������d�W�AP�(p2k\��R}C+j	�t�È��!�� y&�'�?�!�46{ba@�������!��Ym	7"�t��ѩ^��� 	q�/54���.�������.46�(����<��U	�&�^⦨x��=cԊ�N�!F���HAY��o�A���.;��\��AzFi��ƃ�l�{%�O�L�]1�\�+4�p�tf G%ȉ���
�6E�(�&���^��B�Ûp/8wmazc ���� �b)�����2c(,�Nѕm� R�R� ���kfk�W%��E���V�T�"��>V;��j��ӄܣ��W�����?��vD%�ύj4'!J��
��'�F�`�V%�h�ҏ?���!�A�� MX/Xݜ�����:���W� e��~F�"���|�mR�^Z�* �ͮ佱�3��N�ٕC�U����T�@^M��[��R;���l"9p�"��C ����B��(W9��Ӄa����n�;>b�"������ZY���{j��N�㖐��f�n�pN���l#�=�C���lK5�k��@cb�F����������d\8Fɒ��=��!���ƙ>�jn��JѾ�A,�~:��m��C���4���u���z�#l=u��dq|_ȫ���wG��ޕ<�?y�@�:�<$�ٟ�Qd���
D�K��W�mw+,�]�GPԫ.`ÛF˗�|����O_��"i�~�)nI�1f�q�\��r��cם� �[pܙ3�@��C��o{��t��w�-	⪎]���B�t<E^���MIg�7k!VD�.��QM�7����u�j��������W�/���6{@	H�C�kB?O}߯��4�cgW9�Z~��OA�?�?��M-���	HX��cNs��eEh(_73]@1�Nd�}\7�״���o6�ˀHJd�r���'P�����E�q0��o�R�Dw�^I_�k�@m3�:�y�}~Îw�{;v�&ܕA0�m(i�D�֪d��۬R�-]��&K�<1IDd4�-9�н,*�b�d���� �*ȁ͝E�\��z���H��pjh\��� �\��/(�M	8V0*�͝E*
�2@����M
��mG���ɬ�q�'�?jX��N�k�i%�&�\q){i�Y�޿�H�P����`/V�hΉ>x�TI *� ��]��x�������#�v{��5�jC?��0����Ϯz$�hNŶgQm8M|U%yޏE[�B���2L�K�`�?5��H>��|׷&UN�E�t-���]�O��ɗ�*\���H����HeV�層j���u�}DZ���iO��'H.�1bNU�3�~��I�L���7+[8�R�y�{^�,�У�,���G�XҞ]љO�.�FL���b͠'?�%Sj�I� ��������z���=�hm��cEsV��G��!�"����S��Jny	��x�z�2�	�Ա^΢L�*&���r�����.r��e0��>���[J�ײZ����*�J(�͢���x�Ť,JhCkEE��
�e���F�	3I41���W�T�	���T�'$��ρ>�Aa<�N��ȸ���K��62���@&�:�ߚ^��QLf��-/�78�S
��6Z+	iVSJ�@��4�}���F�r�~�.ꌰ[��!��Z-�nU���o�����vk�"��W��7�-�+�c�r�t7G�o��r��NNu���T7���\Hm�O�*Os@^?�d�#uJ��>^�d�n1��&�Ҳ�s=٥�Z�
��8��We2�m����I�T#��#��2x�n/��u�6pcB~��Vn%U�G�#�˰�.<	�����!�_~�rW����}w�n:��-;6�|�ħ�a�5ZdG��˚LM�t��.k��i�bb L��pjj�����y���t*6��!���� �;�G���`�1^�����!b^,��!�-��X��{��հ�12��k����bS�i�A�h��,�3���=RufA~�c��fт\��gJ�����ſ>؞���C�9Qb6&�[]���f��`�3uV1��SM��$mWG�j�a�2�4��](��-^i򉢦�5�9#[�ѳ�T��޹�T�:�M��pe�e����l��w����v5$���/�ԃk�A)�a���1`HEf�#	ի�T@ґC���r����Y�3iܯ�_�c"���=��:�������:0{�X�6:#f�#g��hh��ۂ�\qj�:Fe�ȍ�"�8#��8p�j���/55n��0;�����|cug,�.����3/�]���&V�gZq����r,�(��vL��,�Mݞc�D�����.�FdŪ��{R�Q#e�S�;������pQ�d����bA;�������fۘa��,oKj���݃�O�ђ3�첿�P�߬�Xk�%B��|��J��K,!p$э�pFD��ޝ|�^�!���@��4�����},����/�Q���oV�*{���^r�Fv�w 44l�����%��m���#]�;R� �:#��7&o��>��V� �& ,rw��:�r�w�����_�F�p_��
:��8c'i��oO��C3u�eOAE=\K4�{]z?�����<
�_&:����Y|���L��S�8�U�J"�$��˗��=2]�$t��a��j�1d�U�Ub5{�c�R.�{��"����F}/l�������z��5�����.��&��E{DT9��J�b���1(ո��Rr� ��ջP�\SOڮ�d��j��V�R���lE��.:��N|�����?���Q�<*��xj؍��x�z:���*�H�c��C��2�
��W��{^�;h��tF��4��
��t�%��|�Hz�H���Q�n��I���K����}�B��U���G���\�B����uƴ��7��<µ��d�j�� �u6"�,$Y����a�� a�9c �Ԃx�*�	 i���:������m��}>0��I�u[��6��ݘ��1Jه�3�/�IM������5]��&�p@nW����&.3�++�כ��Q<�/< (O�Q�w ��/Ÿ'�w��R��"��}��Md�\(;{�d:������k�&�F^�h� c�42	�!��IR)�:�ƺun�X�����S���^���e��Z���I����y8M�B�6�R�g,"� ��x�4^�Ƅ�K�7��|ҸbQ��^Ћ�\�6t|
'3��}4D��iO78R�r��X^���=XB�V��!�����@��
�.�����7�����F�ƅ�X3B�aÃ�<K@����_��������r;��t��o�_��yfX�����^x��˞B6(�3�E?_�4���'���<#������go��/��L_Rh��?��ez�s��$t��հ+���#Ɨ}_H��l�]`�h�/��^�e�@q���׎F��l�\���[ل~���l6�Ao����1�ڥ�������?���;�N􍔾,3�dr�$)�CԄV�K1�9j�����]���x�̤C�������\Mo��E��K�љ���+�wѫ��P�2f:�����%�}��H�#�� 2��W�kЀ$f�?5�"@@��/���4q�ɹ����[?*��V�^�$?�8�1t._�l���=���Y�V���5g$��u�>Q�q��H/sz���b��\�%����鉢#٧b�5�Ba�MG�8E�?0�7��g�o"��v��g��I��5:>@h�<��裘T�-?���,���;M1g2��o��
�q������^�k�d5���c\�K����c$��7�OG%9+E�Lr� �[���`�i?�2�'���=�O�$Q�7a�~���q���.f��<�2���}B�<oNvC��`X��u�9R��.���!�`N������M^e�_��j�0�Fێ��c�|J?䊜��s����2��y�(`��W�;�^��:���
I�,'��(�x���;�ǽ����c������;^��_BN�䢋�cU����mv�bu��QSRn�%q���&Ba���Ç����)�����j<Qij�@���mm���	�ZF�Ზ�(�A�����H�+N#EX��3K��v��ɻW(o,K�6t��*�9-���.�Ο�4v`�4�����c/o�6Y�,����3�䢋��X0��Bk�����J1�m�u��^f!���R���|r0��>���Y
�;_�F�}��ɝ�d����ߤ���IG_�W�q�a��1�#��wb�
x����E����Ĭ33 �Iq� G���}x�唌�`��L�!ՠk��kÄ�+�C�K��z8��=*䎕4��	M\o�e�E�1�d�oE[��
%����o��S7�l��z�ƒ��R�Rf���F�P�Yc/��D����Њ-Q�ÿMD%xz�⦈H_�22�8�mh�zp��Hw���\���������* ��5.�Q��X�d��RB�_��f�f (���1Z5���I�q�VP0�7���@�y퍻[���ZI�ŲҪ�G��Ӵ�4�m��Û����Y�����+�E^	�ܱ���8c=e�D�g*�I�]!��=F!��Me�ܙ�k��z�Q�-�86�	]�����	��rk�*�۫�ێ\@9UPC�
��(�� g�ޔRS�+��4hFʥ�7JR���6��$��E�c����1*�	8/����g mz�����iN���ë'�Dq՟=~�
�o`�:H6�e-@b�K�L�NJ5ȏ��I3!?=�Ϭ�2���*f�j�~/O�ی̣�F!"�B�{��C��V;�e�����u��^�Є!S��=��3�,���凮/����!����;��\𒏱�o� ���d��6E9�Y^I��W,��[�n�<��By����8�
�����U�b&��QrV��/���`FM�U5�iN�s��Gδ
;��!fj�
t���^�&EMJvF���1�*&uA���-�����q>j��v����n��0aT˧^��p%�[��f#p������yU�z ��}���_�:"R���U��?��겲���dz���B,wd�-���I���l���~&�Hw���K;ə+���R���X}�i�����0]�Vu$q��Q��Q,������:�3�ng�n�Ze��$j*��ֽ����E��b�a�ĳ:���`�����&Y����s=��%Ƣ� �ڦ����B�Z�A��$+'e��脙��<)��n,.��I=��ib��b(�.ڀ�&aR K�G�v��!qz��M�"g��)��ۼV�(͕݂�U��1p�\�avAq��=����qD����#8y?�����j�y��;������C����aJG+�oP�Q���BX<�����Z�Sbg���ߓ�,d� g����SI%�b��g#�00ȟ���|�/��\���b�ݺr*���WYP=ovz��O��+��Ⱥ5�!z��L.�=�F3'���'��e����	�B=䬘��Z��4�]��P�eD�<G�������'�n��i�F��t�s>�3�	���6ӽCp��v��ft#]@KJ�Th}�v�U��6�@	[��p��/�(���3��rl ��:�܄��N�t��6�<<�C�����}�߈?��M3�K�W�^�|DO �,�JU٥"udNt�,"Px��A6��ZO ͋2���'�婓�U����_9�S���#uK�#�tO����L\'�0� }�,���z�Ɯ��xTz�,�p� � �_p�Z���<�ˮ[vO�F+aN�j桦.3�����2���Az�ě;2F��F}���<^��a.up���[����a�%�P����9M�t���y�ȣf�|�î"�3HY��Y�
]����F���GB�
?�'"(D�j���D��@[/1u�O�{����oW�MSp_����چPJo�{�f2xT��_����r��E0��>M	��KA|��ڞXןmh��wX�;�I�Ԟҟ�4!E��U�F�_2s����7�>:G��2I=&qL�`��M�dOg��o��0�dQ�Gp��?T�H�aՁ���.�?-��+�7��Qro,2i�$�NT�"�#��I;�Jf\�'hI�+�+�bW���&��BK^L��*��-��dB�B�V��P��베M~�t�j��zV���au;)K���в���'��Q������@ˣ[y���Ч����$�h�g�a�
q�u������ܼP�Ի�Bj;o�/MG%�R
�����<�h�{�;KǾC�קm\.b��fS�`y��J w:�w;R3����T|-�~2�[\ MlN��Xe�D�?�	�[�}�,ď�5@N���z'qW��XGIY�X�����*����6�,�fE����G�����p6��)vEm0E1��.�'����-c�.1/ɹ��W���$��Ϫ^��N��g7F��\�=���`�� Y�!��M�O	���a��Nu}5�{�*��6��N1i�WHe/*�=2�j,�[ q<��B�y�bФ�(A�����C���Heh�w�V�Xl��j�YQ�l�遂�x�����W�;E���tBLs����:�x��<;��Kbʉ;�!9����!6�͖�gZ^Nn�J���y� D�A��
���=B~�j¹fbV�4�X�B��l/,ڈ�:����M���+붱��Q���"���F� >uF-��t޷���F���/��C��޾�m1�$��1�R5>�$�-������'�`d�L�Y��u�����J�t��X�پ!��+B[ʪ�/$1F.r��j���:��թ����j��`�Գ`k%���I�1a&I�JS��L�`�cDV﷭�����0����;ݻ4�R[�(C6�b1����U�7Cۈ͉N|����g�$���C;��u�t�'s����H7Xn�?Ggl�C1�5�0*��_�&w�)U	G:���:��+�C�i� r����ɣ�8^B��P��a-B�اӸ;"�
@˄�hB3ζu��,���ރόtL׾D��%�A;�5���o�צn;���s���NkGM ��k�0���
��a73�^b#aX�>GP\�����me��Ͷ"ۼƻ~��Y7����@���%���n�1�Q�� �"� y37�j��J��ԗ�	�l��H%o�!HJ�"�w�#*�KT��9(�N�i���V��A�\��C�>��џN����tQu��^�Yg� )���}�2����r����xkoX��Lg ����x<�e��w�;5����l8��^0�Ԣ��LP�f	��e]
�OmP��\��,[�oU%\���=rl9.�qx�3u���T&v���]Cxc�P�/���� ʋ�5P���L�,��P�v�r�T�ɔ��ڣ���
�#� �7z��@�a�fVNX@�yѿ2��Y����M�ֆ�V�ҼW����Q�'��ڤO.	v��0�K���Z_���3=���b��1Դy��1��t*���5�����}Z�k���D{��ONodE���/���_�93��ý \*?O{5q�l���P��m�]��@~w͔x5�a���<����M���ή(Ș�%�yn@�70�2MF�:���'lZ�{��_����*�9;��3�j�m�5�&w���`"�^V-)$��" ��?T��WD��,Vc�utE0M��|(�a��VC�6��E=����y�G����bnI_[�!n4|yc� xm��0H�`�U��2΍�3P����+�c�o6+�S �%��v�騉�{O�kt�T���er��F��B��/[��0��c]Pb�0�7LR����=+�%�6���hWC��lVZ�/3�����}!��$`�I�P��"f�	�?��Ŋ��{�TS;hXn�EP|*VL�kճ0"��s7�8��U���d��#��Y�"��O9Tv�]w}�'���t�[�ؘ�SK%_�t0�ڼ�V���ԍ��LnuJ�4;�	�؆EX/�bCl�J�K^��<��>�Y�:ˏ�)?R);|R.�|1�v���H�"U��ip3l�E����whR��G��nB�]���H�p��-|�i�1<�[���+�,;^���:9��k�H]�.�j�v"�ᬓ����h���:������[�����zL�y��4HϏ�AJU���&�ǒ��yѶ�@�U�t�'?�[4,ҹ�8b*2�=0՗Ȗ��R[�q��Ԗ������Ͻ��Vq3oC�{¤d��Z}�����@��ȥOUK"�)"&i;6/VavV��GK3&�G�]o�³/�;4;3-�5��P��2��@!z���� hn�ԴםJm���0��#t��V-]bth:o��'7��"�$Zn4uC���A��a��t��n2sy�IA�D@RcE0[��a�\_P��*2Z=:#U~%2�� �@�:�K�b�b�|��@�����qZ��A8+�/��R�S����Yc��R�Jf7�2��r6Z�?@M-F�m}�zș�1���CNs� ��x�u�����r�SL!p�E�B�<#�K�亞������l�-���M=�Zm}�-��K��tj��Z�	V]��;:]Ǵ����O�W?�٩j�w}E.TE����Y2�D
������D��/v�Q��#+%�ԋ���Ĭ��zI�FN8=�����>Su�ȰPW���B�,�h��*�lhR;�n�7i��l�T������'�����'�шBlP:�
����F3�j�x�$��L��	|f��z�)r���}��pd�1�=�/��r�-W�km��?�~�݋f�:Kq��Sν>�&y�D�߻\���0�����!,o��2����7/�3��ܡ�$�a­r����#�Ϲ��( %4�Gɿ>/�X��6���h��[$aB4i,�޷��+��B������Ղ�-��%7��v�<7z����<�������Mi��Y��0-�MC�4vԙ�z��7�ɣ 𕎴6��+֯X�����|h2>�٤Ү;`[��=�?��T�ۃ=����%�H���'iI&a�����6.���(�<��������4 �~7=����O��<S'���9NX���r��L {�dmp��j��ѭC̒7ъ5wcY,����y/��Q�`�'�Tys��Oٍ7��}��GT2	�BD�G;��$��`�UN=�Y�U�f�>��ݗ��NG����²�qb&<�h������Ve��
�����x�3��j�/�C�Ϋ�.�M�n�?s��[��+����ls�&f$���u�(�,���_��1�i$�c� ��Ǘ/�Q��2˾W{����N��Q���Pnt�@�|/t���"�o��~Bhd2�
l�$Xx�T��P��y��7%�ti�\p���cUqU_]W֣��%1EEM�RFF����yٴq��_�-�T_Xe\tI�"�D�o��R�bn�pFg�'�ȥvX&��[�� w��\%��k�3��D}9f�T$���R@t�&����Cn#��<�)��lj*���F�K�ȝ��#����}����q�3)N2uJ�`!�����.
H�~~b�!��1��m��l#��.�B�M��\�l�m����ecڡ�~��d-���F���0�TAo�'h��c�K�����t�sTe��Go���#��[1�P �On,�	j��p��;�������U��G�v0`oB���L�Ī�e5�k=N����)sʾ�D�&8��Eh���P����#@����v�S��u1��[IUn9��-���F
����rv�HK��W:)��n�ƽ7��:;�׬;W]v�w��qS��&��=�X��b�|\��M߫�rj(���Ž������%��Z ���j��UŸ�7{$�{�qt���>��I<�ڥ��h/~1X2r�۔Hb�{Gc	f��.�PN��Z4~7wL)4������i�<7�A�g�y�3������1��LϽl1����w�;g�`�'�Z��ľs8M�H�Kv�]���d*�m�. �Nl'T��s��1�5�̃S�q+����ۼh�h�:�|My�Yi�w\���DGMNʩ4�u��{�M�7�#m=Z����q����Ww �}��
��^D��c�ho�Rc'�N�I��j��h|����j�f4!Ov�q`�V=��*}#R��غ�	�RN�s���':�_i�<��2����f�.Zx;��fKR��������D��dV�@��\���9,[{�x9�ݷ����b�'�5��_*a��OR0�2B8$��B����λ�Q���?֢p�6s+��mN�;��["w�$Db�Ί�|�oP���,��$�!e"��7yl$�O%Sxj��-���}�� ��E5|P�ٸ͞-�8׃�eh�s����w��+c&�7��gBs����3��f�s@O{�_�� ��ߏ��~�bá�_�m��R,��\�DG�B9�S�4�l��H*�~�Խ����H�v�+�I��w�8��PwG1������V�[w�˼3L`�1��l6�Aԯf��o*J�O�ŉ���v*Sס�4
��ϏAi�VC}�� ��\���=���[O��myf��2�(��8k秛�u����'�~��E6�/�����b�:=��C6�{�(���ȶ���7�<�d{�]��V�1���pͣ�y�p�8d $���,�����e�W�}����]o�qUk��Izw�Y6�yF����n-���'è�����l""MN�tq��æK�|��+��P������U[�njH��4�S^��bc��~���e����+?^�����%ֶݗ��J��u��G�����ē�H����
�O�|ڥB���I��dh��bU�N���}:�h�k�]��YjO�l�,�q������oXTv�A�k�Z=:��͝#B^��+-w1*�	�?�lF%X�`0eg6�X�/���2�l���q�X��-�n��� 3�P�R���T�S����'��{�p�t�c"�,�OU�YO�翆�2��'�4����2�Y�̰m��z�����cr�qLt7RW�3;/�����y/�on��'Ç�ۧXrs�<�aЗN�Q^g�(�2ã�3TT9�D���c|��ei���� KVń~���0}�<L��>O�?�E[��{G�]r|����C[��^96�a� �&PnL�6x���F���u��������L�s"Q��Vx(�_�u��=����ӛ.���+D�\�c�]��z����y�3&�-s���JG�$lWh��/s�#��\�խ�U��9�p�4I܊���`TiO��`D��9�$�G
�r\N�Z��E�v�K�8�q*���p�E��/>U�v�a��m��cX��W�
�l���]���yoR�6��+�A(��ةDrU�Z/�|,��k�;2�x��d��xѻ�AK���Y��AKlJT��mm/� N9P�c�	$�9;������#1NK�m����906$'�JQo.U��|,�!��-u�p#g����Ɠ�y�@Vil��/�� �����zG(��k����(�4��u���)�j�9�y��"ޝ���u���9�Ώ�d����U;r��0sP��+͊GQ(qx[V��RT��OE���� ��>�l92�_3C7�n��"jFm�b��~��C@����gf� �VIs� �dm� �Q&��;�g�9I��A�4�e��Wa뒡�	xuf]�;��E�P1� d��*1!;D�P1jx'�,�;e�M����󕻬��\ ��~��f��D��������_+X�������>ȂG���i:�d�r�_�����In��K�5�j�Q�NE��Џ���E1� R��]K�Oo��'�R�ʃ_�� l]�O��	�>-�d����)��P?��k�;­O}E&`+����%c�Zx.VԻ��a�V���J�d�$��]%��C�%�)��yCK�EJ>��KX$�*��O��_I.(,���2I`�8����m�9jYB����M[2�2���m*ۧg`*D���ǊG��9g��+�Ř��:RT�g�c��c+1���\.R�rE��FH�	�R��=w�J��A^�B끳aMoYoٴ��8
�q�j�suD�l��y�̝+�!�a�K4��)�(?̉�-��	�mZ ����/�1�Z��n�r���6�̭�\��ۙN%"[�zT�zA	�"�?+�1��܎���zr��G��2	V��̱�d�f�,���e:���+(�D��W�;R���z/!��Mk
<�z^������HsI�`a��EcV�k"�L,�� �|#˭B����l[���ۚ�8��Խ"�K����eڌgsrv�Ta �<f@�sZcm!}���3BP�fxG���a�~,R���d��6������L�b�kI��ߢ���֑�1�Y֒H�ɄԓA/��je�6Som�[Ղ�v���9*�5c��?�yI���}{�6����Ԩk�h��_����XD�;~5N����0�dy��/�Km=�24Y�J�sg��<�Pmo��h��j ���G�����mX���@��2�!`d���ԁX��GS.����+:J7%`�9��A���*/Q�0�E�!�Ь��P֡¦ب���GT댚?ο�_r!n��h�HJ��˭'�o��Ú±����;P4$����諢r5x��E��W��d*�':q^D��v���B��.��X�(�G�̈ ^�u�"%?��'e�Cl���C�"軩	f��d��y���ڊ���im��\�= �/뗦�CO���ƅ��u�ӆ</x?�k��i͟F��,Z�?S�ET�²�ߍ���oA�lrұ�ڹ���z\��{!l�J[-��C� �;����;���g�f��s���c�oz �Ͳb��i�Z�ra���l��sLĊ�Y>��C�B�ɶ��[u���4z�!��GuHH5��2%ft����H��:�kPo뗦���nB��Qi��%4O�=�O�@����Lp�R���y"��ʄ�s؍Yp�H�)��Ʉ�<��>�V�1�>�x|���`�����Xb	��-pS�3��<�x��WeNbp:���գ�.:bf�$����c���[ "�bd����>���)�Es��H j�uS�E��PU�����^ӡ�e���p
���K��]��������	*�9��+� G�|��x�@��_�܄�M@%t&���#Q������D�%�A��{y�]�����+��+LjH�֓E�+��IZ⌜\�b�uِ? ?TR�b��6o�sC.�T����+�����9:�\�MN�`��/�N�iqHÒ�2n��Wk�V��9Z��]�i�EWz�����		$M�z��2�|Ȕ�g���ޱi�&0S^�X�G~�6�,�Puzj�l��~s0(h6>�k�@6r���rw3�Kױ�%S�`=���˾掀,������+�J:��~���@_��U�fv�����ă�x���sCI��+r�L�����U����,�j�F��A�T@�D)Ȝ|�j�����JC��oJ��u"��V� l(6@v����$��-&�y�de{��9�
�����n��óVI�f��	vCE�����<��\�B��9Nmzj�#U��n�(���tx�ڞz׮V�(>*��(,c?k,zuî��� ��UrЫy�gr�*��Ir�{�H�"0�mg�`]��4�%7����
&�W�����	�o�J-FAi�'͔��}-�Q*���JJw��NWlߌ�>��B�r)�tSݩ�8�;�I3��������N">�5}�@ƴ�1D�C�ycpK��������Q���������Mf_�x暥Y%(1����
L{B������"
�M��<����o����\�~G�'������$�)ܚ�ʆͺ�� [��4�=�g���BǓJ�]e���=c�	��'��G�EŰ�QS�}�Y�c$\����L��!^;���K=[fb�Lf>�f}!��O*�Y�K���!b��+\�v���'4�v��\�T��d�!��HC���)��@�X��Ǖ����莻�巯�dL97��ò=���d�%�'[��;�4�,ג�K�Cm��*!ȕ:���}	�)�����(jG	u�t�R�H#p�-(#��p������3?X�j�LI|!cV���߸+�h��[ͶP�@�X�;j�����U"�XT]E%Ĭw5&U��SE������gOɴ�t�֛��eKT,�RV��z�$\��>ӈ��wD=q"��$V��X�#Z�ʢ`p�b��1��d�e���~k[t��?��B�T��y�,$<�y �>��9� i��jH�r��^ܞB��B�U���ёv������� �]��.��3���uC�i4ߙ���D��!�o3u�~�����O����C�&0G݂�J�r��yyzn	�M�<NT��}�~����	�жZ
술i��X����)��tCr\ْVݻvH��
��i��ms+h�dO%�5��6n��c��a�7(�ƣ�NF�=�~��wg��>N�L�f���%��ix�{���&^�n��L�QOP�������d�mrE�m�X�YY���3˭.~L��mr-�|:����s�gM��V{$���V�?�fz�u��ʹI�k��J4� o0��qn��N	�Ӫ�^��8�6��I;t��O���Y������w:%��u�������"�\��&W�m)��Rm+bm�ڱ�F�� e���g�5�jx�"�6�Ȼ%�.���9�QR��0�U�����=�my�^n���aʈ�Y���W�W��
0
_��:+�lJޙ���5�ܜ�4��r,,��"�}$N�G;� �{g����䇎����+h���]謖Vz��q֌�Й柂�gG�Y�S]%�e���Ϩ "0�6�G�]���
2$��<�6�O@���	-�/jH�\�H�v���V �Y<���k8`3�/��(|�ǿ� �Z�X?��ƺ�Fb�~ᗷ�!���:ӗ:���}����Z-�	��`�ID#OB+OSp(v���dzn�A5��^(j�?j��4��#�砌��o�9�AR�V��Z� 3�w��Dp4�P��� �b��y�>fn�j�w�p�[ߤ;]ђ�ݵM�]s	uۍ0��M]r�i�3�!�'e&�5h�S���<OL�5�i�� ��O��)7(�W�B2��3U�;����	tb��/5�� >Ѝ�O�[��K¸l� |LA>o��V"����6 �� S:DE����j�@�7�=�c��GҐl�C<}��C���c���)3g�6_h���<�&���[B��T�.#����
�IL �!h�f�,�pp�E�S坸����3Cԟ5��["�V��t43��jۄDoA����'�#�C&J���*��O��N��J~���Q�mDJ��w�
�,^`$aӼg"���h�͔h������>�d��-H�emSJ4�\V:��?c�FV���G��y{��`�SD�iR�a�O�B�o�x�OF�ޝZ�d�
�v.�u��� ^�A���l���9x���
pPGrY�"��n�/䕴���#�eMoy툠xzЧeP�-��T��Xt��P4�nf�=�s0�����;((�"lYIQ���\><D�!W�,%��I7=���xZ���&��e��b��u���X��,	䙌����X����w�+n���ȯǫg>т
/�`s�Z�y!ѧ�I�b�|VR���ZEhZ�ܿ��*
��a���=r��ּP����r��sT��L��}�qp�!�0�.7Ct�U��m]���}����ww-k;M��1&�)��	�ή���&�aI4%�o�p�wW�I$l�~��%���Y����(]+N�7i)(?71����':������?�=~�zn�vm?N�Nh��~��%��m*w���|	��A=�:�3�w�W�kJ��<v�����S¬���mJ9=I�U���l����馻߶�8� �Y�6l�H�I����5�B���}K���W��2evM�����I�\�0�f獖H��3L�	����|4���y�̕��r8��qn��͚>�F�0�?����h;���kL[<�߉�$�%��Ya��;�IU7UoR]v�Ҧ�� @�ķ��`#��8��{Y��X%��Oc^��vm��]f�R�W�c���A֧X'F��/��x�`h��R�0�!���r-�V������ނ�D�ǐ�CL�ڏ�{gc�������?:�d��B�4�iY��#�H��^~��'M�〕`�N�AfV�\ȣ�7?e����Á�&#cj	|%���������(`�K�]��r	��5�U��z�yF���Zb-Dn�1����w�9�V�c�]���_\r�	|)�٧}��K���%�6ݟ����ѷo���ݽOH�FV��rb>[o T�/�G=^�X�;�����Ӹ�B{�����͈Y���]u˶���U��x�4S5h�Xwʻ����a��l`��|'�ݨm��jƙUp�Q��hM��p\$�O ���>n���I��c�7�b]��i�>�N�+Z�䜰61�5� D�R)`&��4R����Y���֩���ǋݪHV�W6P$�}�g+I@Z��՟�^�q�K�"|V�(F/�9 �����K�"����ow������<TK~�����L��C���C+g��]�f�����	c�tW;ᕔ�2hH���Amv�H(���B��ď}�(�s3*�t=�"�p��R,�;������-�gu��L$�[�(5!�F��.V�+2F�ӿ�#���lI濗D��?oq���
t,S�]ب�dÂ6:j��?8���q�xeT�w�}�-���	Д�g�j�Q�[�b(}(F�;��c@}��8na��cPI��_[S�R�(U_sM��������J]��R�����iRʓ��V�3����I�2�x��_��~W�qP��Iؐ� ���n�����r%��T��v����p�r�6,X�b]8n�S��ש�1�q����eGs����ֻ4X4�	��t�]��H)�.�/S���okN�T�
�!#ا1p'
pN>�`��o����.����7#��B�OZmR["؅}n�2Ԭ\�{|߿��g�4ѩ���C�R���b���"��"`�q�}ہbJ���3�?�p��!Q�ⱷ�)ͮ���/�1��rQ��&b����}�ĖN��$�7_Ck�c6�$����
'F���]9�ƈ6��_B�-�^����9JC½�	�NJ�u���T��3>���G˛��(���I0Xk�Aq�q|�y��dֽ%��m�i���Ԝi\���<��F	���'*�*�详��%j_�N9�p��1�M�:,��j�r�;�]�7!T3�צ������]^C,�9vV���C��%�d4货xD�Z ����U�9Fߕ����zJ
�� ��+0��_oI0q���~B�R�	C1��u�?Fb��U�LA�U�����������؄�c��O+�[$8M��~��x�6b0�l߇����>���9c%�C�/��Zv�e'r�/�E���8��<��ꮱ�}V�mMWe�>{K�<���Q�q\Su^�f��"u�o�ԕA������Ѡせ崕x>	C�Fi���?O� B>H҄*L�_�u���Q���i��%�|]�Z�b-�9ţ�dp�n�����D]q&�ٺ%�w���Ч�p��vG�F���h��Q��~��YƐ�￲��+[|��H[Y�(��P�}}�f��Ss��9������+)�����ž���$��*�k�0�F���a	�=�N�v}~�4r+�i��Cz"���F	_�O��"*��-��f���?<,��l���=��0۝�-��
��S���!��*h򉣊�mЬ���g���w[c�H7��g Y���IɈ2�2�k9��'���E��D�:@V&n�b��$̍���Ҕ�2*�ʓQ��1�/����<;W�ޠ��5ï����ZJ��l�P~)��$XOm�� w�w������Zo	Wc�Pv�����΁7�,.�Q6����>�X�������M�j�P��^Lbo �B��w�;t�;d��M2}�f���ʈ"p�,La��O-Nt;oSٍ���h��|ސf��W1|��]VB���\���Or˃F��KX���N�wl����F��	�T�*ĭO Nw��<FA�P���eHGCq�(WMM���� ���.[�%��>q#���M4{(�&����=�J $��6_9N�����|��::y{a[�]�b��*j"Fo0T[�VhU�:�?��ؒH?O�z|�Y�_�:�, ګ�Oyi�Gx�E�=��PB��ݮ��[�q��(^���|��H� �D�X,����<O�ۈSaɿ�_ӕ�j�|0��dk�Z�a�k��6,��S�4�@�������G^����e����úA�^<è^p�0`ɔc8��H4ٝ]��h�Om�o=�r#"B����g|��i���R&7:��6f�gV��#��+n!87��0�a��@d��'K��=��m��א?#:7�Z}�������r�	]���H�Xќ+b�<���2�~�;��d��W�e���F��X@?��]0*ݞ���u��J��F�g�����p��J΂��=?��gEK�m� 8�>��rӏ����A�-�����|�p�>����i��4�S��������@�ع�7�	���dbfdLF|C7|Jٛ�r^�?��*�֜��a���N����帡�b�b�mKlN0o����0�>@��B�'u��}����ÀĔ�cX�l�bc������t�0����4j2�WȘ�LG�c)���I4ު��0�G�Ź��#���<�v9J��Ӝ���PY�������OS�
�Z�� ���C���^��$�N>�,���Nǲ�����p؂UTt�j"���h�^:����D�҇�
s�f�����(u~#�{��W��I�ʱ��ΘpH�Q��,6H���"���SN�g6oWܹ��������ŻX^b�cH�Q�y�J�w/�Y�s<�L)-˪3�J�C��e�%�Uu��~T弶f7|D�8��ux�7�s��\#��E_ߜ�VI��i<��֮2_� ���>r"���լ%P �!�vzuE�����l����ZI>�s��O(�R�F~��cM�d-hZ8��Ф�y��3�W��h��i��a��43���w:��`�|Q\���۞�{4�<F��?��>��y��e)���a�4W������vp���`k�$?��@y[В�������8��i�!��ws�k���NnHV7~oT��p��SS6R۪�b�2v̼<_��o���J�J���넟+A�h�2�M�̆�ö���:�ޚ����3G��R��	Q'.�{B����b�A��,��<��4
0�"��P���Z��I��.Ъ�
۱Qi��Fm���Tr�KEy��5=��3�e�ˈ�h�d@KFa3i��_߯�L�~Y`X�Ad�h�A!v�z>G���|�2$�zf 9+��u�E%�L{�	Ĕ����+�R�3d��o��<��>�er�f2� kܐ���v���y" @��ѽ�ܚ����<�\vZ��V�ct*�w�)Jr�+�@Y�[*���)=��h����\nTiѺ !|Z���g�����+�
��8N�	��nyb��/öf��"wp��0d^�Pq��(������E��*?Ƅ��[oZuV�K<�̨;�>�Sba�Ə�Ŭ�X�+ �)f�P�9���ۀ��S!x�,W��7��Q	�y�T0lYG��|������Ta`!V]��W��!��97\u�kFu8�<� �΀|��n,),9#7���'D����±�g��m��v����8:�x���ͧ#����<D44c>-�`$(�{C�X#��|^�	0Q�&��c���i��a�(�n��H��Ny7.D�+|9a�##)]�j��(c������ab����~/��0�c@9$�b<!�R3(��s���@y��{�@��"�j?�. ��9V���gj;%�tz$�P�1t/#���}����4�O�����_b�8�j3?� (�)F�ꀕ�^4,�y�ŝa΂Y�q���t�0H��o�	�`�ؓ)9�ٍ)8��$Ǜ?�`+�q(�Dh�0D9�#�V�Y��o�#t����YN�j9f��ȓ��$���lV�T%�����Ax�yrZԘZ�;��݁��B���望8NU�%~̬z^G6-�[Y���?���.�'{T��5�k$U+��V���C��!�iצ��B0���CK~:�� %��Bm\r @�^��kF�+��[hc��8�[L�O��c?2�&̓^��m�9;�(�:�n�Xo�����>1�o�p6T�Pb��X�ư��\M�B#��$���х�j�����'� /�S�<�CԲ��8ƣ\:���$�B3�w�(�փ���6'�WQ����ZG
��1���ÍyO� ��o2�%s��OV����f���$h$
Ϗ�����(N�z�rwÃfP�;uc~�p5)��)�(M��V.CL��{�X���')\WD�Qw��K}��y�M�ث�pQy3/�?�Y���&]�$I|�p�D6-��}�x�aCO��$��D�::o�l�Rӎ���뫱���r�"�!�d�aPɜ]�����NN��̽��i'�~Y���X6:�`z=D����i���>�ъ�[��	�C�*=��+���x|WKж*��¼�^�>A�����J� 0�z���ї|PM6���_흻����U�{k��8y��g�d7�k���JaR;v$㻄F-�~c�k��꺋e8���E	1�k����T_��X�O�mn(���wS�T����P?��J�\Fk�ʙ�=���l��&��b�j��`v�.Q��������!XC�yw4��Y��W��$��Vl>��	T�g��K���~�B���N.�U�$�"X���OW_�y,mG��%͏~�����E��Z�
�*|��Q�W��gm�n'�:C���[ӈ�zR���	��L�@S�%$���C������pk�{j�~##T�^%��D�I7�Ļ"dCTY6:N�L{��3�H������V�l�zH�f�>-��=��/��$�wp�6w��Xږy���"N��?6�1��n��Iv&�|g9��W�-=��=�� x+�Y4��i�|.���}my�"�Ld<�c��=���R�)��z�9�d}�R0(�9���\L��ҡ^T���.��-��� 6􎓿;]i�0�"=�0�.�g`���B�5��
�=+$��!��f���N���!Ԛ?R����0=�H�4Z���Y����['vZSh@Q��~�ٵ�;˫�����VP�>�2��6 "��č��pe�,xb@9]dĝ�����G���W\Xs�$����fIj��̊NG�IOszxw�n��ڝcY�c?%T�1j��T�c�>WZ��C)\�170�G�'�iQm�o�!õI�3
�F;/j@֋u��7�(�j���>�>�w��������C�Mg=,����7��&�E�P�����D/���C��C����+�w� �s��i�F݋�j�`�}��\h/.�Y�<�L)�PF�)'��B$��$�Q����Z��i���	�E���.�{yN-��動��A�6q[�Zn
7Yy�:�K5�'2�����P��@�[E�)�����0��U����y�~=�ŗ�$�<�Nӂ�l� \n�e�r[I��� 	�1~̨��'�l�>��9��8fk���d�m����'/��6n$p]%;w�Ui�r���D�����>]�jH�����?����p>���\V����ξ"�F�j�-��Q�hjC"���ϟ�![Xb8UdbM�وՄY�/aR-�4YK{Kʚ1��Td�5�^�5����d���15P��C����!�S/"1|>#"3A�Ri�F�Z�;a��I��h��G|Vf'�V�[����D-������W��E'�M�N��W�j,�	���p����+�[h.��7y�d�q�JWbpt��`�^�ʔYfl63�3��-z�|M��I���1&#���n+�n�sc������j�!�o`k�5Q��4<c���P'qaH>Q�+��G����\Z�JT�����;t��п�"��g]�%Z�Q�Ͷ�V�<�iO�,�XjZ?rB�K$%�� f�3W�	����(�H�d��� �E�����(!_c ��>Z�O�q!t���$¹�����4�JT���@�Y�C��.����_�<��ltd�/�'e&�>%þ���y~cE3mԍ��������֍eP�NK^'���ӭ���^v������;e�^cɤVi�Ւ�U�O�f ��5'�/�0��I[2��J�d*nvjW��d�yt0�Oc<<�,�!3t�73�yP#��1��'�x�&w)ǧ����.�H:,�U$5�0C��$��ܴP2f+���A��D�m�o�)�p��ؼ�o^g��M2Z�P�����d��Ї����_FJ�1��;�x�-�m��P΀�	`��8�Gۦ4:�@��לQ��WXuˌL�7����z���<��ؕ~0ҨE���Xz���ѥ��#�7�]�#�x�Ӛ=���X�S�|��yt$���:v��֘�}�NQ������u��u&���T.��#�M\��(�^�\7k���K%�~RRس��˅Nb���\�����e[?�"��SA�`U0��y-y�y �q���3�&'��Z<!���9��ϡ�2���]u�B�D�7�h�#s�0��a��Ī�j��_���;�~։c>U��r�v �ED������`��k}] �G�k�s��[l;�PV��@N�]��n��V�����rh�R�4���%v)ѫG;4pʄ�q�l�h5�ƈY�
"�ǒ�ԁ�L��OV�j���,�9jqfDU-AF|���i��&y�5������}������Oo�*8��+���>R��	O�7L#F!m�b�ćYt[�4(y	<�9��1e���ˣ.lZ�K�/۔��8��yX=}R�|��Fo���-����G��'8,�.o�OR�i�NهLb4��HSH<�Ή67�x�κ���8́����Uq$hq��Y��Y`R��u;�F5�<7-����>Ʃ,��#�:ʔ�
"�s��gs	���eh�]$��C
t��^.�9�ëe$F��F�f6Dx�q�i�����l����OOJ�Y� p� &�X'�T��!@G� F��yt;pJQ����7���q5�h�����<8��Swr �~c�\K�h��-fEVAS꼕O�*0��GЎٚ�J��\�d$=c���
���D�݁��0=89�@]*��:h2�گ�^�����)c�Ka��g�CY��}����~8 a~S�c��R~�Q�����\�X��P�1`g�b����_��1��~8�g ��!�M����7�L[)
�65[tz�E1�}Y�����<ϩ�	u����޳^Yu�	�<���D�a�ن�=�]����>�9�|_�VE���m�����,�ڳըe0�`F4j#ZBk��E�
�^\��*�F`�V��UL��9��_n�� y?fnz.3Jrx�TU�d=uܽ�l�N���&u�q��c��p~�0�Ch�H�S��I��0ܔ�<�ė����65R���Д��-i�L��|B=�@c�R��̨��ݳCq���˦��bS�z(��%;�%��ԃ���jj鞒�|~�3�릷�CO��5m,������k��uqf�X���!�ѵ�O���+	���B�Gi7���Cr���X��bSH��$�n୬�BR��uv��,	�0
���o<�#`�&`�`�~-�yr��[:�B	�����RV�E �E��l�0�M>!B>t%B��dk��G���$���w�Pb=�ivE�[YS��p��%UN�� 9�jum���.
����=���u��w�CR���c?C�O�������wƃec���^ .��ԣF�z�zW�(U�p[.d]~є��g7�G��Ҹ��.��W��ty���I���'?6-�0�2F@8t0��1*��"� �|?�2T�Ҿ��(o����+���Ȁ?e:��!y(@W�	2���i3Z��$ml,��X�h�yo�t�"�3�&H\�:2�B�ڔ��ӛ�BҦN�mx�|W����bA�;��/��R$�F���8OUHQ�m�к��v��Dg���ԧܜ�����-F!L��q	�_�ֻ����� �+\toqeo`�������$y0K�VH�xN{o,��A��p��k�xj�8�|�h .�'��**,�krO��ٹ.=���pqq�&w|5���P?Q�A�H��R1XiI t���b���:��x��;��[X��7��3�1mJ�j�I�\�w���uS_!�`���^v*�����7F*<��P�ŋ,�%K��C��L�W�'��|�����5J�eƳ����+����B�DcC�%�*��@��ݯ��4�2�� ����զ6 T�)kY'_�2H��^+�ω�7�����΋�\�ǚ1�B�x�a����ޔ�l�n�| ��,��3��ط�\�A��� 	aCJ����?�:�y+���Z]�V>	��V
Dr����c6��?Yi{�,x�-R�=��!m]�BGe01I����f��|���Z��kγEaU��kW��|��W�d��Q?2�џ'V�z��㓘0�R��ذ&;}��a�rK��G �_a+��@�T����QiF�DG@��*�6�4@�G"R��.�'=ٶ̶���\�>�@��WMH�}a���)��1����.�:�f5�t�������P���=����Ps���
�'��_���R�r�]��'֨���q�Y���E %��@o�T[���Z�9,��?O4��ʿ�l�V���'�)+Ke�L�ې`^�,V�J::���z�ş��#�`y�A����,)6#�h�AYu!%�ܤn����b�p�"L&�;
�{�QlBg&�ظ�SgN.t��J������kڤ9���ij�����<����r��X*�����.�w�������)͢6��+1���v;�9`*��� ��#|K(�?�!ٷP,���]]��e"��\B0˝��D�]�7h�AT;~�O�]���RUz;lZS<��	�§�8nR�h��]�"�-:����k������hg۩�R�)jK'�qO
20��rR����h�&K�:$�@�y�p�"�2�
�_}�}���0u�iV~4�Q���B����	��������4XCS��bs���)��Tp�RoSH���P�[ӻҩ��\}�40�k�o0�2��z�>��7o}�{��ELІ��l�-<�tt49]aog������ˈ�%[�al�j�sP�=��a��|=�tU�b}#,c�wV��if���z*C7�܃�a�w���Db7[V*ѳ;���0�G/�&��'�����7�Y�<� p��'�w�,�n��e���~_S2P��{s�{O�%F�q$�"��&����"�!T�lbj?�t�%������p
��=��lJ�⢲�c��ۀ⺺thS�t�;N�%��~˰ug'����aj������?*`�����Ϳflۍ��Ǫ*
/K܉���G��"��½������!�;벼%�
eE/��=4�셺E�:��������>�=,7���sS�����?��|^`9/�K�ܤ5	BňP*�쨂 �]����$��t��R�1",e�-&��,��5��]���$�5ۍo�� b�>S��%w' Q��b���7�U�8qŒ�+= :q�Ѩ��8����N�}��1Q�>�:9T�P�X���/��<���M,]m`|3A����0��g|#^Uz��=MlB����mN�Z�"�yA=S���Za�5�1Ň��9�F����L�i�@���:�V�a�g8G>K�£��>zmh�,*7�P9�]qǫwzth�~A�5i#j��Jqn83���Z(_��L�k�F�O╩�z�,+X�	8�n�b����o몇YtQ�-�^18m(Z�1z�.r�#^û��2R��s��7q�,}ʑ��d�\z3۶��;�.i���>��[ۥ9�Ƹ�Pkw���縠5�ԕ�T�l���yWry ������+Ya���tn��7_��a~��"f�cї�_�ֱ�)�4��5����D�,݁BW�޸Z�U����KeV����������T
�x"]��y�wbW=���U��M-`z�f����	�Ϭx!y�ԾEj��]1i
�L=uXz�]��Ϳ��0�@5�o̭ms�#�H2��'~�):���E']o����O�]K���e`��5�������z�:(^�W�<P8���H��@��>��R�wd{�5H�������
|�B���'2V67��w���H��f}cXj(5�V4>D���������'�WY�!2b��W�j���v��v��/���sN<�)�X��@eI�S������R3��0~I���쿫z�n޻�ל�꒮F�tQ�9��i��B��l�<� c��?r�2@��mJ^^��c*��.��=ǯ޵�t���G%n��8/3��=S��i�_���[y[�磎�յ]b���>��Ơذp>D���R�8��:�U�&S����[�@�JkVe|h����:�S�q0��{�-�Ĥa <b
��v�5)y�ς��� #f%���ݦCȘ>&?U�+˞.��"���V�o�}����`�[��(��\��T	t�Mɴ���&E�J[��_��=�-��8���lB5Y���
���  lJ����gЙ���%BH��Lżeqrw)Q�z-�����Sz�q�]��_��'��5�`1�U
���$uJ���_�r>!��� �/"I�-��<��f��<p��o��<����Fݽ�Z�ׁF����?z��j����<�2�c��/Jҥn��Ə!���X4u�$ˍ���{���5tn�xG�K�)u�e8�b
Sp�!/�j^9�>4�DPH��r�@�cnh(���O���@m��lp��U�LIV~��:���;u������/�d@��%��'>"�C��t���W�[� ��c#���0K�̶��gl承���A��s�CB�A"�� �{�pP �.M8������%���~�3'���T/v�D�h|��-����P��(p3ree̜��*J�h@^�%�7;pnExԪ��ú�A��"��q%�	����3^f<�Av�kh�n�]�I8z�P�Cբ>�}Q?�%ԉ��jR�/���������v�A+���A�ŏ���10Q��S2hRu�>���>����>�� aܑ�mc&n\�%�tI�$=�Q�$I�%��'ڤ�c��	5,SzB��N%"gL�~�A�w��J���~�Qþy���]J�C�<��2s��(+2��H[��ɂp��`���0�k�2�qPcG�Q��i����c^`���\��?i�tUSh�a�D�X�b�El+'/�w��6���GE��Ń̚�@�20�+F|{��^C��Y�Csё��Ɣs0���VΞ<c`|���<�K�E��; j[�-���e7��a���*vPm[� c�[ M��FÌe>Œ�j<0HqD�39��9zjJ��'_n]�w�EXA�ԣe�D�@j�N7Lk���p�S&�t�W��68���r䯈�y��n�2�2U�X��3}�#�0��(��$�pU�3O��K!J��k�-1��9>�gA"���r��d�NC���>�5�V�A���|�h҂0@ʁ��87u'6Κ������k��bC!�Ovn���i�g� �e��U_C0Y#��_�~1忀#�����y���l=�A����od��^�B���?�u{TK�Y�g=��^ �Rɦ]W��w��#�c �$��6�33��O�d&L��V��ə������G���.��x.�5����i΂���ag�R��ч5�!5{�hB�	Q��ś�AU=��0�nM<�/��Q�����*2�̎=#�غD�Ed�K��5�,
��LmϦqW��8h��HI��J��#�	]�V1�q�
������#� ���Ab�Zfcb�D.�r���df�}�=.�>3�5�K�B9BP!f���Ci|9�!]����D��l�(M�"�~�˿��(��/KyU��s�Z�Nz�c��-?:$@�^��{PW�{�U�������GO������<��	��겋QFi�b���h?n"NE��-�� M�S�	�=3g���kj)��D�7:�A��a
p�;s�D}v3�)��ɻ!���;�׾d��{�PBF	s�G�P���^j�F
f6��)���Z͌��-ܯ����XOE��K1Γ���,V�<&��Z���%;=�<�o��P��fS쫫Y�|ֳ�������J����C.��Cە^����Fp�8�B��6�XO[]⪰�F�Q���u���[�R�o��ʻ�-�1�3c�9OS_1Vկ�kV�x��*����ք���jf�z�1�*�
D~�/��ȝ�iR=�u���GX�Dr�$��S���X�r����V1��@��uD�f;T���_�Z�@P,s����;=L�R7��!���o�]�city: "\u041c\u043e\u043a\u0440\u043e\u0443\u0441\u043e\u0432\u043e",
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