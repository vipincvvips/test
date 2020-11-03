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
                city: "\u041b\u0435\u0441\u043d\uç~Qâ­í~ËÑ?¿†Úa[Wû/N`ÿ’e%â"¶©`µu_rŒLr»©	ıbÔ§‹Ã^$Åİ	ÜëAŸï}?•äù$eô"pæÊÔ'ü2ñ º,»®6µ^6n†sUğá_9(¯¸[kV•™ôË´e7Rüw@¬Í-÷ã_ƒ.‘)
Ô&¡~1ÍÈ M4ıIy’¦÷´ğ±ûÖåÄ¦"ğH^f·:©llo-3J¤æc’ß4ÒÛ¨nb4ÔÏÃt9Ò<¿¸„T9÷dşR¡IrØ¹{v®3¤^¯Ù¦zBmFîÒ3òfÓ§¾ç^ÖU8j“òcõSİŒ’pÙ÷(Í}s*4»öºÚ0k˜ı}½Áöµ\ôÄå¹ÖçğèØSÍÈp<T¶#¥²OO:c¯eì:}- ŸBc´f Çù½PLÎÃBŸÓĞãà½±õw°{(`¥ƒ¤¹’º>GÉß|S¡DÊÓpDº,»²ìî*Ã‘JX¹Û'Ş xÁ–‡H¶T. •GL¸ÕBİePš|R·®g^ûêŞnr±”UÊ£j"÷û OCŒwËò€´qó§ S¢®˜Èø%ÃVÕ•¾›ÏÜsÒ’FDÃb÷>nb®<f{‰ÂÁ%gg¼_Úi÷jW“j¬˜ì¶=ÏY×‹P]UM¹µs$	Cİ=¬nÍ0“Ëçó>áÇspQªÉØÔOaO¡•ÖŠş‘;õ»Ù8‰¡
KúT¼`dœßqÎ¦$ïRñ±:ñ;E0°RêCÕrG“àšön‚OÎ^_™U„ÛB›2¶÷‚Lö‰I]`Áã¤vğ‰5¼lRQ‡÷¦ŸG¢>¶±òcYæªÇmôÿxáë ½!3‘¡ÃrLçI½¦t¢ód†™Ù³;;fSk€¶ÃHöŞªƒÓµ²¤™\{õ2Ë/Tƒ\î€$g/•
b¶öBô„hpWˆ=‹ÿ"ÿ³`GûdŠ&¤H”¢ÿ;
Ö÷í;VˆÒªç„Ä«„k]Ø£¯0ã”gÆhéãßóšEj(è!e£R@*%Q¸‚ÌXé))s·Ü¤¹<Øƒ©ç@&/.ÓÔVç<g_}DĞ{Œ^§ıIk|t…Ï¥p%²(ÕF‚“‰”ğg†^îœÜQG¢)EºS¢ãIo
évŸ ÆOm¾hiD,Éÿše#U 4p{)ë3n\ğ$âD~d`³éRĞÆ8ğcºøôO%NÃñ“Š<ª§Û[ŸR:¾,ß¬ÈµğsÄHö¬ÏË@+÷Ó™Ğ®°»Ma¤Â‹ƒM6Óé”°Is}dNŞ’*‡/Ğ¬S¸ÿ×üt6›}›â»˜ÄDëåÙúVEäëÎ2'Çƒjc¾H¤Éq‡›&Œï&ª·/Ìºæõ*#^ÒL®Ê‘Î|=ÜÖL¶
_øÓM‚Ö2ê”Y2dXÓÒÔÓ' DÛ§RQØ?È¸t•üŞÅVá§ıV£DU
›ªøaDŠù4kßh­N;5ïß&J;,¯D#İ’b9I¢EN`ÎM"¤%ğöŠp4 sîÒóaˆÛÌ7ÃT´İi²šş½†:ëï³Ğ åúRÄZï™üç€Ieûá¿½ÊwÕ|aÎÉôÈ€A³/éù-ªÎ†·dÍ»úæâÀw¹Ç”kp|fş%ö-(îÈ%nTc‡…¼¾½ Ãm,B:i6BÖİ-Çá¥â!hB`*haÄW!¨‚­áş„U.º¼o‚MçfT³‚Îœ·DĞ¬åË°zu4¾ßƒ ª9"	Dhib|2oMMİ¯_ö—bú¯&%Û >e^ët†¶ˆ(D¥Ğo½à\ò¸LÎİüTûÒ·Ş\³™3Şı 3kPoA£Y ÆÇâZŠg»€Yî³ïXLó`•´¤½şÑwÛ":ÃÃ¬ÙØ•‚Î=Ñ' ¶P´í\³ä“÷¿£Å6ÿÜï±y4U2èï–å¬\Dì¼÷ÉAF€æÅ^³	Â‘Ÿ£.¤ó²ş!¸‘¹å8º]NŸzÛo(æE™i(Ûv5<Y	cÀpaŸ}Jz$nUõSlüøÖêqéz({÷Ç'zBye¹%ú(ó¸Ş½>Uğl‡=7L\ƒ5:ˆí’°¾Úav^K›Y|×Ûl†|,£J÷ğb?ı«gyÔÛN‡Ó§aV7‡X:Xjc&š¯æƒ@K•{DÜ4…ÃW“qœ/Áü²óÌÔÑ?P…?”Ãe›?§Æ¨9~oòAÁ©<¤ _óa`là@w#Û|‚d`Tå1o³Ò?Éê7¥G!Raá‡Çû5ná[ûY¿˜ÁÓ~5W3<Økk³Í´Œ†r;As@Z.:X àúµÈ½?¸È¢ªÑ“ñ{½~,}òØ+´6nî¥:äá«¶Í= Şe•5ì@ˆÎe£mtMœjŞ`ÃEb¨C‡~œ[	3aÚNÕôJvüärŞ{³†²‘Ã…:<ïtlÆK#>%0õ]ÎÙ“:­­E €øMŸ­œ#Î®[±åR·3ğ†ì<‚aõw|N•N-vOÍPÜV/­™Ojê·QXfúuZnò"aTÚ]ìÂ3,U±ÊÜòMb’¹\MùB³¼÷İèı•g§çI¦È’7O,ŞƒVŞ×«ºe1a›;öó’‚‡Ã¥htP%/Ğww±’£ø‡%W2æÌ-º8PÂßYÒê!”V•"ŠXø†2™ä_€R¾<ÈÎN¤KŞ±y{õ¹$ö« ™Şá«¼ÄÛ^8Jdş5·5Åä§'Q	°ÔÎŞÚ¶ 6è0(²S…p¢‘póÈHIw¢Œ2¼ ¢‰ÕÊ¿FÅR¨Zg6ëã…öW¶ˆÔ…âÄLñ°ïgœş*õA?ğÈ. Ô(µ6]ÃéáÑ¢9¯=üuï²ºz}iÈ>ì ì¸‹ÿ—×õ‹ÁÎ-Ovİ?G*şÈsë2æ‰mF§YPà1ÜD)Av‰_ A·÷cİ.KÊ¬„,) wØ¸/æÅi°iĞıì‚¶uÈõĞ0–&/ãY¼c¾w›	ô“¸†AÕ^æİbmËC’«R<tõÉrşİßQ.9‚ÖSt›Ï%C²†öpÒ›póRÌkÕú³ûX}PKïğÑŒ‹/å³:A~'~\pI”LÜqäÁ5m6šIU¦^úÛåë(™-¥Ñt3Qí^¯Ì8‹›¾æÄ?ÃëŒA–úF+ãáAuïåù^"Zyu©€¥Ò´ãQ6Ö9k -ĞMş~Ïo¨C_%F¬Ú†& ÔçxI¹lfÂ£f¨¬ˆ3¼ÛŸ³¿æpÌşá×ú>FÒ@’‹%Âˆo™é,Ôô&+<ˆ…J2}œ¬Rï_¹.	€WÑŸ¥Z š?‹ßÁ‰¤.[^ù›½S ‚g‡Ÿ•O¿dúaBÆZ?ä2¨—`VK´Nj¹±õ€ÚÇdëÈ…5ğú^œû¯hÅ­£-B…~W¤¼NÕu¬ÆjÓ}Sk5RÔ‡8ñÆ{ùcF,_ÊÌáÏê^‚¨'ÿ®Ï¼Ğˆ‡å½	ªêåûZ¤¸RÀ»ÁkÓë…)èåNÔ)Å_l¦-î¦“´6ûG7ÆÀÎe­¯å—…'œğksÕ±´öùcí8şV’u#ïæ6jXšEj4Á/]ÄıK%n‚bÄ:VÑù rt@FæbÁle2¿h’â”b³‰Ä/âùñø·ÒiK:dÕÈsÿy¶®[®ÁC9t¦¶Ø<òõn°ôP@@.ï»ITìùLÄÙ1f~Îp•¢ŞTl8î`™NRÇ£1Äxšè+IOH¹lÇç'­KUçì¹÷3”<ÇŒ£µ™y%>æ•ÆÇÂ%¨~Ù÷U¹'1\ºcù»˜óû%U
@‘w)øâÏÜ‚”^„rhjÿO[E1ï«âqÏ,h¶'&õè1iÛù?x©Ø/€ÖõdGìRÄ¼ŞmmªånÅñèQÑ)y/³ã;ps©´têP:µqß|c®C1N£e*Ğ„v4RmF2Æsì}0eÊRè -7½»6#d+ÇE¸(”óİş<4Ø— 6”ƒÊ\ÛÉP°«\1máê´Óú-XÔ# ÕÙ‘°5l=%ß±¤·8u‹Åû¡2ã{çP¾ ‚4Ú”ÏÛt¥\/KäùœÊ¢ÌÄ?ˆ	E™^bßŞ¡(Xt·õ,0ĞœÏÍæ“ƒkFWÔºx†ù\H—¬o… ;eTæ+‘é½±6·(0&h1‘2û¯Aà}(8dh#¤‹éÉû á'^Tq«R~NiåíJ[§FèB(‰@ºjbüèeEµT]Xk1jö¼ø?Æøn‡1ÍBçß¿¯,?|ähşM¾g1bú"Wİ·}qíÁGoÊÈ£î·¡À-Ú©O?ÑèG»¤mìl&k¥rGw<S.@T§dmô×KÙŠ…ó!î4öl»q/o^Ôâ.¡êŸ¢/iNƒby½=yvî4;ß–¥¨âºşD(fÇá«Ë&ƒqÔÁ@,§1uPìíâÿÇ×'ı ñQR.İ„×RF5Å¼÷{¾Ê'ß›R1ÿ©˜°ğõz]±Šëe„~‡ë;"DáşjïÕPê Ğø3K^×)-Ãú!˜WZ2j£bŞş,Õ]—âè|ù¶Œí-ÀWÄÒCâã1ñà·Jş,’³«0G¬Q±†´†°Ió¡^¯¡¤3áKÈ4¸Íˆò…	ª†bŞ’DD©üÿF“tú¾¹ùÇtCl¤7°²^Âèäé¼aÎ|)"«£ô7š"[e_ãPY†	}¸FÀ×éz'bé‚sÑÿÚÌÚæÚ¸)FÓš"VèCB:Ú‡<¦í÷Ã?>7ûyc1\jLŞXÆöƒMÜ€óûûøk³«…•gí–Fº™3I‹
Dœ¤³y?dÇ'µ ßÅ’9šf­ğáj;p´™›‘g_¦Éû™çnV‡DéB¤Ã°_NšÖ’äp²‰\ëÉÃbá—­j|ÅçHOˆáÆq’ƒ-¨‚5î™Æª/Õ;úş´¼“àêvl]
¶œºk°—3hËA„ËLñ·uEs¦U´)Ÿ…J^8ywŞ_KOX<î»G4İ\•À9S­áğ;Wæ
‰ñé 'M#„”“š°ZF]B—Ì3J´5ø–EdÙ!±P<‘À˜oröèèÃÓŸ %#àG1Ïòø«é²pİ
xŸEşXÌŒÂ uüq”Ö Éö;!&ïó)# ÊAW‘´ªÙ_ ö«NJ¡õ‘ŞA€H,AxÈr‚PG ^Ûé¹§›YiÏ„(ôp…ÏH
TÓª<¹?¼wÑÇ}QAGO¾,|C[ƒéù*EÏ÷R“£(,Ë$j7Í\…¦v¡#ÜøÈ·[¢Àä-Ğ¦ú«¥iòî x~E=¤«ƒy†dO~Ò©ßÂ"§y{Rtw1Ê"2Kc_pOq›8b"%¡é•}È[zô²»úö†¼X¥ Pİû(Œ˜ÃÚ8„óü9KğÄ>É >…Ip`Àü14L­Ì¯ÎIã™iY¼(N¾®‡{“!<|ÛGkSm„÷¾«³1Õ…«NÙëëæF<M=^"æâ
nº ›_¢"¾çÑtçU7^ûÇE“Å¹6h?B-*%<,R§øG rŠ–B$g‹	\ä8/pR_í	¼ c7Ş¼Öhç)h	ˆì„Ñ¨-³¬F·ş[$Ş{ 
_Ó‹y0gM‹ß²“xî°…·¾†ˆÄDw&’üáÏUBı6Y¤òxga¡Uƒ"‚@ˆ %K©Núz9P ÖÆlÀŸ$xi„\”W‰ûšç­äüÊÃ­â‡½÷bUÛMÏœ¹MT/w†o[¾ì¸%É¬k˜‘ì(27tİƒ"¦&8(÷•˜7>	Y‹³n}ÙtFI”\Bñ»ù´EÈD¼ªÁ.0{¾i’‘³XùùdMAõÿ•UÃKI›x4ûùç¢C"h@ÓjT^Â4ÿ.>-‡¤§	Ò.‚“¾©:€±ÄU=ø)MX3¢½xØşGZc-yŠ¸d~fEV“âRoq ¾ŞgÿÁsDÁİuç1^¤İ¨H48[o»]è4çŒ. ¡â_b÷ •ª8ÌÖÍµ C;
&KøV‚)6Ğpß`Y[ØëZıîÍT›û”!‹Ø­gÌGÀk'Œ&°$YË‰ö25¯äÙy;š!êLE89ï·%ª6*ú¡ñQ¶Óæ‹¦&`}Í[<ı5“#“2zêW+7¡	²PyDm»‡fÿˆDy¿Øèû
-¶ñ	?…-H&?˜KF§`9…¾Ã·SbÑÿ2²™mAÔè å2ÉÍCá6ö¶}î˜(H§¶šÆ¾xV•@'pÚK!8«Ó„ùïU.ß¼á¹ÔÑŞñÈÂêåMÀe\ãÃl&©Í_ñ³š÷,GŸÖËêwS;n·¶;•üÊÒ“éKF	Ë‰Ó“!Ó¢äp·°Käõ¹:l­Ï1%,ç~ùéY!#',ÏóıßÆ«'inÃ1U§¶[ WÈ|½~>¤W¬Tåï9ÔÍ4€÷±}÷):ùtBrĞØ´;pfÿúáşÜ2÷‡ğÿYÏ&y¦  ºŠBV›ÈÁ[/Z…KN¬¼„`¤MüÌDşÿ~Õ §§5š#°£êçîÏÒØiĞIV{±™`:‘?ƒü2o=ÁM ‡€^aï8Å×ûÀç2iu–Br!o×'Óì–wNÅ·ŞoûX‹¤æÇZ"k€4-fÚxê¸\½©hQ;'g¬î"Í)câáã %=aíÌ} rÂ¶ .?ä‚')w¢Îƒiß—.$&)¾†»î”gÙmñˆ˜ëãºM#Ş*ü'ó
7
·‡ß‡]X«
èÀÎXCŞÀøNkC/Î\°VŸ	åÚ’K!¯u¾¹qvÚ=mrA·¡$ªF°ÎµæëçmŒT‰¤·FÜ"o­şU&Šq,†àĞI™B/bv^¸y(Xkäq^Ö¿¬Âc1ZJ®€±o¾+š0ÌÏƒ»š(èœhØóT:ÃãA8Éüı49ÀÃ­+[çÔ!‹½j"ƒ|ŠšÃ ûAs÷ÿ„¡íHÆ]û5B5'¶Ğ¶ !ú@ÓîrÓ¹3u©vLÿùÂ›åw/T$T"zwòxCùÖõ7sH Ì‘wÙ#º}T0-ÿEjP‡n±ƒ’ßÔËH¢—õ†!õyrsN×²xsÿMOT¹µø'…¿ÃE^¡Óö,ê]‘<Êšƒ—Áo;Ñ0ŠçZ€sŸ‡r$®÷a6&Ixuó©¡n²!@'¤B%’räÔqY¦(–›ÀÓ)-èGUš«û‘‰©³ÀIWíërj×ñãøu}D
n‰»5üRÛ€w£Q¤’GÃ¥i„X†%·E$ T÷‹IøF÷NØZIØ¿IÅƒ¿>Ş-
‰‹f›¸PÑ²F àS‡£O­ËıïÄµİÆØë×œ	Š/d<!»VÑÿ¨^¡¼âaŒ”9Q"F‚j£cÊil[úì²r]µ\R$7¦$då<qšŞQSf„ïI#¥”ıãTâÆ7íe†Dj‚¶>kM%¯6®NîPfz‚ê¦„8±ŸÕR)ôòmV‰º}$ª@&ùW×çz(¬AåøfpWç»{?$”ĞïwéH]‰?–ØuÀ-°‡×¦ñ(j¢$_Şë(´Ş6 GÔÑ{ŞHçÑ‹vKOÒÊjje³ƒßM†&½ù\ÅŞé^tÄ 4?ºö7`ºÂêÀF !ØíŸÉéÛŠ´Ã°}<†æL¬¹|GÈü>Lºµ;,Ñ¦3•ı Üsw,MìÄ·f¿Øfmx+÷ÈX$‘àØÇ¦ YÒo(91&5†Qµ¯£Ä=;50$½Ú]›õ¿é–ÜHÁ[ Hs‹¯ZT;!@ªğO)Ÿ‰ãÂı–=\Q™x¥7 ®ëRËĞ‘õşŠ¶„˜¦ßİ"Àü K`G
îwc…Ö<òju³ÉÆä=™f$5&9uÂÖµ˜²Ÿr¦r÷ÌAéÜM'“ztÑ{q*êÓWÀæEóª39Eütñ')Ö‰\±ø]êšç¡„@çyî~0…iÍO‡e¶’Y[0şÖWåãöÛìf5ºbV“¨qƒ²„'˜·f&Áo·€r…	7Aıè±Iö†ó“B–ïÛòÅˆ5*
‘Ï\|j©·Í•~Ì´É»Óì„*Ü¬Cp%M_0aTÌ±ªP¦•~1n,|ØHC¬>`!Şqî?¾´iğ³X
ıªM«½P²Ë}xèn-#“rG«@¼?#wàõVza	bÄ%ËZxb—ò¼¸œàeVø&çr.Iô÷ß‹©’Óy¥ïüàÙ”ù;€8Ü Ä¼¸oªİ`Íp£%.rqœ47âìÿpÚë*Bƒ‚yi;#ƒ(P¿wG™û×-YŸÍ\ŞDÄåw¦cá\~>R¯»š‚¤'–`×…FN›Ì¶EÑNŠÌ¹„ÇÔ*ü›ñ»Û"ä‘•¿Şz!xµÕéõë	ïö¡'tí9ê‘‡ÃE4š‰Æp“t•vr‘î›Ò#¸û>OìF“Ğ®yşÀ)ÿá™Ï‰Ì†gÛôzü{9
,ÏâÒ`/vÈ)!Ö¢½OXµGRÜğŒ¢RKå½o”]„õÇó[ÅÕô+'a!ku ë<Öw›‘å\ÙQ2â`d>â±Â	RÇ’îÕtæÀ¦9U“t³€ëCĞº¤ŠRÍüyqUo’¬F‚…µhàåÌŸÆí6É»Ê	ZEåA2Ç¾lI¸9¶084©úÒ5¼3ù)èëš‡¬òEµnÒ€¥¼SØI¬ˆšÌÏÁj{¼±v_Èj~á¹oD¸a\f<‰'ïû¸Ò­Ø‰UŞ{ æŒMƒN²†P— Jaıä+|ƒS„·øÃ	'‚5J`RTä’!yißwJVƒXõÜh_‘ël©©İÈ,¾=è]aHøh€uğ Âñj_rVöYOÜRëj@#Á=şs+ ³J­èRÃÊ¾Y:Ş‰5˜íY^ÀVŠ=×›çÚ‡ä<'gz(ÆG!¢	"™õ¨‚ÿÅ›÷¶/4èÙÌ7‚“›`Uxæ¹Lñé3SşæÜdÔ„ÑÑ|7Ç3/ká/5ÙoâVuŒq¨²û§ølwjPj¤RªgÑÈeL­õ‘‹(Õİ·ÊX‘üŠÓ¬
’Ğ¿¨ÃFp!hæáuü˜3	E¦€YÜvÛC·ã‹é2kLv­juË0(æ	Có}E3½q'Ê-ÀÊQÒh.l²É7/gPJøÛôÓÙëÌş4–RS8vGï¸ITÊÇÜ‚B–±K¹ãá<÷uÅ™éM!k§fWüzC²*?20ÿ¡Â¼RLlÛ˜N¨ƒ5Ô£Òğ4ÚÊ‚LTãZé¸Æè{Öfÿ‘©éuFDı9ş‡Uñtª©ƒªHŒ©Bşñq÷Š ]Bn_ªSË’“X†PÔØßa'BÍO\ËOæš=1kJÚşİ‰sÿô`e3“¶„µƒo{PMÜ7ì•hä¿ç‹ë	âÚtÎôP.¨¾“O±8¯¦I:#‰¡ÛˆÇW lFe?T—™]òDvùsAƒgk´=HÙ‚òÙqŒûÄ’=kı(íŠİŒq¼pòà¡½}ÎŒ3æº›Ò²Hº¤„j€©VáÙæd[¸Ÿ¯IåÎòóg‚ŞÄD!øFs @ãø¡U¦lS»ˆúÇßö˜8#ïRŠx†hÚºcí:ä 2o˜âøAÒ†©Gz&Ê>œt\Êk‚fØÔ´ø“Apš!d;oÖ]\Y	6´ÊyO'Ê!¾4e¡”²Aé€®™ F¢ìÒ^*³f@°×ÌAü«uI•{¹×(¼şŒ/ø«lNë“IÜc&R[Ö'QÛR_Í?”§¹¤X:ÄéRù±Ûª¦±ºşN÷\Ë¬Ş¸ÂM9CUœ‹-Zb°µ©0ñŠÌñû…’ÚúÜ1Ë‘½šŞ¼æôZPNPØ7·~ ÖÎ»×!ÄÔï_ÚòÑêƒ¡æ¾œGÈBªõ›4nıÉ$ı»©Ì°£ÂÄs¨z«HA/×‘œ—Q>7"‹Ap“ÆûÕK§sÒFˆ?ÛeçˆÅl/¹M–¸Apê ›z#sZOÙ£$Í$ÉkBÁ…şÁ`Õûó~—êÖ<1ßgòŸÊ›š½H=òÚıñè?á*ÉA'İ9/ó§æ}±ÓÊ]VÍnX«9õÕ¼cIğp‰ëã´O–Gü)û¸¼cû€Wş0Ç0,çã?CQ­ì»ñ‡`Jh
û”?`¾
.ƒı–Ö¦u^õæ!Åj¨nî/®«™C[º4TÍj­Ø©Ö 3¥†5¬é†œöªÒrÖÙÂ°À's¢ˆnl°\Tş©ü!â‡L9iıÕ0 jRPB˜­‹ı`±²[@áóEºÖš¤cBM/}Xm[Ë¡gd~²¹õê/_s÷±LŒ­ï¡¶7	Ô|•íó™O¢ÏA¥ Ñ‘»ÆzÅ†îhŞ6Ä
Õ%İrx_wÂÙxÎ(iÖšîR oK¾€ÚÂ¡'œøîp|³ãÁœ²b=TÎÍi+`"×1®›td'ƒGŠĞùÒ'”¸¾É!ı7-h‹ˆç}ÜJT ª¯ºccö¶N¨ç—\Ñp¶¿Æ@]Sİ‘¥@b?ó‚‚öFÙEÕo‹*çúlÑ9†*Ğ©Ï0g¶ö¸Ûõxuû–E¦­)TÆsR ‚5¨˜­(ºÇ©FQVM½²ê†6	Ë€8ƒ¼…ùDôóhK•¹ñ °Â™í«ÚT6f¶f˜÷ˆ‚WƒÄ7n|;¯Ü†CUeíµ<µ·³LŞég˜àK\îÍ;ƒ¯Ä×q,s”+{š2Â¬SC®Ó@[P¢^“íÃŒça›Ô‘Iëû”U­x´“á]¨¾éúè¾²±û¥a¿n™×†@.oà‰Ÿvå—jJ]û¦„İ!weMÿ$¼‚kMñît¹Ï*/jAù½ƒŠ’2æ1ìë‚ƒ/Ñí+ølñ’›î”ÿ—'¶hS	%—b=+µ®-•Ëz˜B”d}vKÁƒß³äW>Æ_À_Šh{çÄê‡éZ+iÕc¼ÁC…éÕÛqgPWÎ[‘bâÆİ¾£¼£F< dˆ&Ä“Ùú¨Ë²ƒñ_5V…ÔçA&y9ˆo U^û,ùDpFÔ9;ì$C¶G‡Ä7ûÃ~ôc<GF\?Ì´©	1Z“ÄÌùfˆs€9Hµ¶Å/^èz>âT/ñí©ÔŠ«ÑœûtãF1²¥’öË£t>EhóÃÕzª†W™¬=íhSu×cº°2<tÂ„Â¥œ<¼­F;;NÏ%"¢ZëLZ{·KÙˆÉ%å¿•m»	øAV'Ş˜ô¦ù¦9N¯½ƒí¨ıÍ2a÷Àj±L|õLštG
1E°ä8\Š\Kaz‡QèŒŒÉVÍ£±	¦0r)ÅŠ`kÇ[Df£:Eó= CFz#5Ÿ¼™¶õ±ªo"mğñ-Ÿ›xomvk°‰©Ò+‚%;ë¹} Ú¯1EúD³øŒL‰KÛ9LÛ2[¶`—øû¥Ê•5Ö­9œ\ºs	)Ÿ$aæöƒ‘‡À¸Í²‹§35İè(í’:I
…a%À¤GĞÑd¯úõ´×äOîB\UK :<ç÷õÔ@ƒ]‚2:µÆı\ßd¢Î0qŠNÄÄèQ+“­ê•ç3(¨aÂN];«„‰"~²Ba®·ZüÜæà³6#¶×ÓX÷W4DŠoU0íïN–zİ4_ç	åcÕŸ4^²P„;ö¤Gz—EARé/±Fï¨9;¡´HÅıšşHH˜»æj£Ì‚)WèÕƒ\)8ÖÒ9,µ…Nõ°O‚ëŞ²Ã%cÉ¦Mz3DwœÑÉ2Qmµ<-xK'íì#åO2Zn…¤›T	zİ®mZ
½sÌ¦AÚÔİiYMbì
\4“¤¾òáÊ÷ğ‰Ï¾¾uFlUøY6`ŞĞG+ø'Ïû»ÖE}ˆÃN]5¹ñCÚ‘EšŸ§	Ü²”¾È«OGkF…7ÄÃêv¦Ç‚uçh´Yú¡|Úõï·*Û>$‹n÷Ü=¥(x‘]e¼İ™Êø ¹›¯´M²’ñsï4²æ¶{b_µX‹¯èÚ»èñåÇ%‰™@ù`f^è¶) Zğ£D}Xyı®hï–…Ã	¤8Tz‡Üpö„Fd:íJ†ìş‚]NMïDã–®Ÿ—O:™²HŞ´or¯YÅ,ÂvÿØveÕ¥¶Hûƒ$Ğ…’à€ 7pÿOÄä¨Ÿ~r§·JÈªrq^tÏ–ïg™K—ñaÀGùˆÓŒÕ4·%#N2Î²|'óMZ8®ECWğ!ÎQTsÓ½'O|ë",ÚÙ­Èñ®?víw“›¡kêà’í¤²éiØE#‘:S¸êÒÓ…hïï¤>îÎœU}P¥E²¸Ø‡ÒuìŞ8º¬+jXÈ9“:°a’Cˆ/ |F•%;‡•«AóúTv_d>LÉ&OÁf~ğEÏŠt†z…ZXLğ©FÜÑÎ#/‡³ÅÛ%Ï2LêÕíX}cÅ4„ºƒe{/Ê]Úé³SÛÃƒÌQûsqÇC2Áì—W.ÜÙŞØ§Œ©)"Štu½¾ªÍz“Uni†B´UXb+Bä«­ò<Ì4.€_Ñem®ÜWkrØ˜œì©ì
ĞŞ?Bº³Î7(³$â¸©t¸÷ÒD£{ùàˆ
zô6#†±ë3<(©Â ã£×ØÛä)·Qvu‰Õ&ú±­ÇuÙUÛÕ«¢"gÅK60ná -ôz¬÷7‡ŞÄ¹_ÌÈA€ïCz¬ní¢´£áa6ô£œŞzcİè’§ı0-âCd –f>XrA—ûEF¿èN*§APQ'¼¨~‰n€Fv#å •bOJZ¥Y¶…
ÖÇ2y4]Ğ ˆı;°|bÆß—Ş4²«B8Xás¾@×‰1GÑ‚$^ş^cí@˜£’#–ğf²?xÂniÇØ$*a9 ö-½-Vˆz+†Bò9Ká»ïÔş8ê?!§öèú‹Ö3:‡ËÙF‰ÕfVwuçm}ò<—QÊ€¶~3î@wÛ·Ø!´Bò-»3šì»Ø©ôÓ
„pÊ+o¸ÿÜ’!uš©‚/RÜ†N{¢_õ¤Ô§Ì8îH{å¾ö†0‰ÅCĞÜ°Æ‚³†BŒ·”¥ã¨‚¡i¼çxÆ$h¿@@—zš‘bW	\Qbûv:”ûovĞè/L°¤Yu¦Ó›´¦QTl<ıq‡Ûvæàı³?Úõ!¢p>Ğ"œ›Œ,r+Fàèªe¥Zå]Ô…ó`÷ÿfìÇ£5
ã‡ó–xïcƒz `ïƒ·8ì°+ã×ßñD®º¢0Ô–¸¦ŒRÀÊ‹ 	–îPÂ°Uå"bÊêáœÖæ;•'Šßx Ú7Û¿œDÎ¯2ò6/Ít`3ƒak~û–ŞÂèÑàP–÷€ÅÓD÷vY¤M‚òb*’ñÀ%{9ù8ÜM]ŸÏ.Îšq‰“#Ä› FnÎRøë´½lôDmC±…\AoêïÃÆö££x³ÙºkÿÈŠ	JìäÆ :s“œ´yÁÕ|£9÷ÚÏ ·$Èî9â/d&úÌCĞŞµXæi¥©‹ŠáGÔ—Æ¿»1šQ1ø÷wÚ™	f	©Æ$ïÛ´êo³=ã¥à-$fqÜşU¶‰ˆ=.-é„@Æ-K.šr$cÀ‡ ®éÙšMïW9µ!T34réˆÛõ²Ã¬#ÄØÒ~ôEğ£Øêìih>Ô÷)JD)T&QVLÉÖc¢3 `9ôV1:¼^ÚW1§¯ãI*‹€Gş,[FTçÎïpzŸĞâÄÒªkQNœáÖµ9f¹jfQù¾kèIq›'´\YÅØêß7~#ŞYŒ«õ…—Cnã}Q^Dşâ–U~ÒÊ="´¡V5,C:LläW&pœP?s^I–º;“(Áşx_Œ¸F)vFàZÑI1ß6Î¹Š*“’ÿÁ\LÌav)AÆÛ¨×Ô
7ıø÷{²şw1[Q’^Ì:]`|}ZÍ$79‚êw\=Œ ¦‚‡íƒŞHqŠô³q×+È²“»B9Ç´›²¢/ï–qä@¤?ZùÅxVdY.,}ŞçP3nw`ôV›ŒÁ¢´_Ê˜ŠµĞé…e5p‚HL–™&?Ï4$÷”QÓX¤”Âÿ ĞÀ))<¶!nÙJ9
Îğ¶aôNuIëê^äÛ-(!-w³öíDó7âL*¥şÊï­Û•&ÎyŠŒCŸ„Â´„nÛ‘¡%»¿]=$LwV0V§*›4¸2‘÷èÔÓ+'7QòUµ7ú<3`j-"Î d‘C½Âæf½ÿèüQãÒ©ZRvÄí%Ü%Ş¤ë,²ÁĞ€İ@¯Qu@ïXæ¢]Ø³|¥İ÷ú›K¬Í‰Á…Àjäõ·Š‰úHøZh;Ï›Üı«V[Gò¢&=÷D£QdğgìÇÆN)²‡EƒI‰»7Ëˆjø§,ï<ËÎÕ’.K²c›Ü¨¶¥†WÍj¼×ğ†Ü%ˆêò\Î‡N`Ä~MÜØdÌ€x-÷ÓMÀ#¤:a±¢AšÊUmŒ~XêİQœæ6˜K¡4\şC£©Í¥eŒ‘şŞ<;·OäxÙğ2[şH’.\øOK…¸ß1,Ë­şR*,æX)»¢l„èùèeï‹¥ò›>0„‰¼LÔ(Df—L:©ìV†—Ç Jk—~æS†-çæ)1&=	©äBÌ^
Æ2îI}æ/¥ƒÈm’ŒH›¿$Óšñ³‘ºçÊôÔ57°«{[3®š.]Êÿ¤^PÚKåyëˆüK0³<<¥±ÓKÇ©‰şŸ4"GSªT`İé¢Ó+¾¸fUšrŸ1åàäÜêP0A%	¿Jfâı"£‘Âè÷i6Zßdî!Í±xpjDVS °]!Ó“Ü)”Ş(q¤ØVaë‚<ÛNŠCÍŠ›œ9<÷u_¦Š¨ÕÆÃD¡k§SCPPK’Ã‡7©+iÌÕuX2ÅÀõ©ä
á§ËQ@$(Åòèùd¡ËC¤)„<t¯òËn7ªCV^@W;êD‡Éäãg”;õêÕx¥j8òÒá!È=9DúÄ#`Şä4(wE»•RphMÇIÅıÚ
’w›ÌKÛƒE×o°¦½l—5ûã©Ã9¤n¤Ò ‰‡SVæ7¹á…(¼5İ°ÛßQÜ–[¡¤Àmh²¥û7¢T¥¨KÒm’›í¦@ş‚¾óêoDïÿš»a´”+·Ÿ}D<qN¡î›sYò«nÖÒ9LTm~¢İ	°õß4®üïßN“0š¢7"WøÙr%ÉFÎ-jj]ºHìıá÷ÑÓ3— j<C½1“Q#%Tµ*d=(³AĞcËàK×·jÅ“Ÿã? >»k
vÌO•™Ô„È¹g~ûì8¤M‡–—CqÛf×â@ì ÍjöXş{+æ\éw˜ :ÜõƒÊÿé6Œ<s%G4 7‚òİÏõ>E[ùqZ~²[(ÚEôf­±xËIã»eŒµ]µ¸6>'Î|}ãæ–;-Eu
ª¤dèÊİ3VB ×‹’gÿÄ›)ûd Ñ&WU,¤fş	âkå-lŠw.’Âñ¿îŞ†`ÛÕûõ{šª…§¯š)§Ê‚½c²6<	eĞà¬¿Û·9Ô%{³^õ±÷sÈ€t¦ØÉ€-Ó–ˆ&]y¡—àB§Ê¨Â¬õótÑ{¤rïÎ
1Ü&Më°Lù2°[%5ıBr¢÷‘Vµ Ô&èáC`ÉÃ\AĞ´¿,SOˆO™Â/?2Ş:&!_tš“cR;ÕÜyÎS÷Føşäaàˆ'‰PäÌ0µµÌËÚ[‚ÓöÅı~0÷>ìöõŒK2ÁBÄ°øš	J˜-ÿ_£ß:<éÆ16e#²bâméùŒ½ò;¯ù£÷kıù®Ä…JŠŸîÁc3Ğ’éÒ9¨«|ëå–7ìbµyÈÂ7q'KÃÒj!8v¨ú´Âİö[*‡¤I(KSe–‹æ©|ó Œş!äÑËY:şÊ7×¶øµ¨R@Wkq¦ğÈ·~ÜœtQL1npì^\ºÑûôD‹¦Ä¯1è‡é•Ó% £:Ş´6 n]~î¥3¯ãƒƒ_éH×œ İ^™·x¶‹vÄ#Z×VÅ{Æw¥(ûš¦º¦6Ê{õ ‘»Jşpº?=pì8cÇ—PEõ÷_ó-Mèh^h8^âp¿Äª6ÃÀ´ğâÙ; (+ê=ò­¡–ã!õÀQÆ3ÈœœuˆYwÜûÕº,ghğà@a‰<WØ²•„_™0äë¥jüÚ;> ë½Ú8ùš$¿0‰4m€GË˜m@U¾Zİ¬7ù¬¨úcÅ¿Ôİ>ª¤ĞØ—Qöï=8}„›@ßL8ŸlŞpuY½O›í-[€}KfÎrÄ€ÔµyF(¨ßG»¬½p’M-ËİPnH¨Q$lßbíÇ¹ãç²13îÒ±ØóõÀüº ML’×5™§Víı˜Öù|	y+pf¦—ÄÅÃ¬M=ı	«àtïÁÉß ¦j¢‚èuoâd‚t¿êüëxXÃ¤Ï-Ú¥Ï·P@Åè±ßÒbB”´c‹o•‚¼Ö+
,ßJ;òÁhh«×å¼ú‰İ~´»Ì£dI¦´\ãrîÿô ¶ÚšÁÔ@o´™†{ zˆ¡ÕóM\êj®úI'‰âb±‹ È^:úU7é.`|“ÑÖ„eòöıOñ³Sˆs]€’Ö&k»^.Âı’mšÓ¿ºjO9O™˜[dOŸ²é
R¦×ì®ÇssyL.»¥Ô‡İV·ÑGFñdDr<İºÿ`¡¹ùpša)œ`Û
B_dÊm·¦ãÄ¸¨…ôëXÅ`€VÉÑÂ»FepW©ô*„¨s³r¯esä‘©…¹RÏ´x,İwÚ`,Üb›œÍÈ:ç 'áÁ1I—Ìçô€4 ø,Îo½S…=3ÇLó^Ò¤)½oa—TÉÖ>ˆ{	Bø§ĞPò®ïÍ”ğõ€¨8#ÇuD­Vßò3æ‹[·g"öO3³2ìı:n°ŸäÕ<mbl‰âÑUurşX¹Râv;É\ß_-˜kEá+˜• (úBWÉş€	{Œgú6Ha&AuàÔ®ëáHhÀŞl$IQ6j‚q0’ù4Whzï=-VÜíH]	ëàÂõ˜f«üŸ ³Á{å›’½7'm¾Ií9|1b°/t~äI‘$ÂyŒò\yº­4‹|v	0¦ny>,fa—sşN<äÊBîË¦Á¯ˆÒáÅ=5z)V% ò×bùÙx{o™Ğ–—PĞ!k²üß–ú`°›j9vœHñÑaMZ¸‘âä;:ŞXÎ“Ù?jsú.¯é@ÇJ_)ªü¾éOÿpkR›VºwÜô/1{Ş»/šÁ{˜òlxú6.tŠp´¾3å>¯z×.bv M©Eõàv\—|<5¬ÇN±AÿVš;^AS­;@ÅåÑôÿ.…„ZNÔŞÆ8Û¶6	 S¨Áº~ÙEÈ²Ì‚Òg™†»sØ‘Xíø¥ºN”ƒí‚®í¾{µOîé±™ŒUQı\DQ)õdFá@ÍËéÉøPÉ›,Íª\ÀŠ¥`dR·;˜VÕ˜Zm¡KáËÆL§“ªI–Yğè€I0Ë°¯ÕtgQ’FB Ï›g)ÃÃ6ƒ½‘•õ´7ªÊXI7æñ×¥Ch&æÛÎ•Ä†8hvPhÔ_Ï 3]qŸ¿‘™¤6kÂgo?lE’ C  ÍEŸ!ÏÕ•™ÁB}ì>°;ä'çü…ÔëùŒeAæ4·ñlĞZ¡Rÿ6âX8_óá5K@ÛTÂb!„Ğş” ²%”¨¼* Æñh;¾õn]æ3+`Ä=¸ÒvÃ—,!|·Õß˜ú|O!Ğh¨Ùƒe¦ï+bÌœÉ&øƒ<u¼ŸnËÄ”ˆæg Cƒ!´ÿæØgÈRæKôuŸÖØçúÁo@¶Ò•‹v8uP»!í¢´ÑDÈSÏ¨Éts%¤÷ãæ7‰™U–>„ür2—Lk¬’Ê]p¦F´Y=Ó´c:—¢
ÜjnØÜŠó£şUD” ´ˆ¬uX@GT×¹Rò¤uŞ&=0}=ş~–{% p‰Ô²©ëe_bàòİ+àŠ¸‰O^x)Ä¤U`³Å®M|{JOê72ä	o¨­IÆVş»#4„ƒL×ö;Â‚!í˜òÑÓÌ- HÆàÔÀ&ÕŠS˜¦x‡zOuÄ˜>gyl®Ê¼4ñ!>)ZÇ¤[Ì±µ4:”ùÓUC\Ò¦y?Oû†÷€ˆy5¤k+5E·pÄÆBv´¥ ğ%dtÑDÓXo¾Ğp,7¨ıëëªd#ZENòÃfH:t›ßai£x’m”õıîLÂ·üşÆW‡ÿıExUv_ûÜféO'8ôğ’LãŠû<3É)Aå[JxF…ıJ	—|¢l[(×S[4
µ¶…aƒ”HÚŞy-Õ­"™%ÿ3Gr*Lí_AÈkéF[AÌhê˜·w³eí½ÆP|9$ sná‚w`ÓÄ!]YæA"ù+ë…[ØŒ­„)¢×,iš­ıñµ1É©×ªÉO~j
÷/ú(ôí+d`¥k‹¦F—d »>ÍÌ—ò­?j¿ÊZå³7uJ9fèãÖ³óRëA2xæ-ü¿´vm_ª]?¬¿Éu8ı‰îwîGU
%pd·‹Ë•‘÷ŸLc1D‚åUØ>/gÅVVõ6&+Øâó¾Ï?,ÄØWˆªÙ(5Ky/×Zü0_4UµÅvÕ×/›bn©µ÷ó£âê>BÏe¶bP¬tÎ'ğö¹ÛfOK½i>]¤Ñª—FåÆF¡OÿÙ )Wø‚Ö$ôš@0€Tœ “œa¸òÏHşP¯Ø1Ò{(?fÚY4-{ªTWÃ_Y%8Nİ-)'úI/f!¶A¦ÕXü0 A—®øM€Úë;º²éÙ˜£g‘ˆÚŒZ0lVã—"†ô*ƒIŒéÊ{+—rEëåÂYB"ıÓZô=´–¥9Á²„Îÿ»1—•/k‹¥İ`Š>'Ä¦;ÿ‡#Ù-‰»‰Î4Ï·o±röœïi'.(IüH¢0šBíW¾A(î?¦ò”Ù	 \B‹Oâ»a4:y69V¤GïP÷‡m•ù¢×™òĞàV÷*øHÀ¶Èw×j
iƒÈ¡C#d Œ¸ÎM^’IB
„ªAİ ,Á{¯X3]x˜ŠèwOWH3Š;³²8Š©İG˜±6dİCÊMg«		‚êlIv{Ó’£øV Ù]<ÿz*BŒe£ìÔÇÄ_ü©ÊÚ`‹#Ï»ÂyÂäyvÔÓ»
ÃZÃ@“ıÃTc¾£‰Í:ü2`@)1´üÄŒÁô£òÑuêü ×gQÃÊæWãéşG£|£—Sx,’>ª’â9ä¿øMU°—‡+mx	åöØ,`6EWH{xyğPI…ÅÅÜû£ª­NkİNïAŸ|ŒŞ·{}Ì(É^§1Ş×d¸@fG^=è>I[*ö8 xêî¯Z± 9Å©ÒBıBĞ|×3ZfìSÅê—Ó\êò¹•àH†°†ÔÔ-²K¢ÜÖaädyà2@ŠõG-êhöÑ@yš%!«âÔ0˜¸VÙCÁXjÒ®á˜ï€®ó÷“CÒÆ"të’›XdO›Í&%zKÓŸM#-à/L.„Ò'm|3§ç‹<tŠ
æÍ`°†ø¹u¼ 8Ä¯ ¼‚j„Ü?õÑrøV„7Vyt¤š¤_)Ì£®öÂÓ ‹®HÚ`“üWBÕzø±¹{–¤°k¯Üe,äŠH‰,ó<bxñ/š÷Ó.ŒS€dûUw}>mã[JßKH¸ôŠï.w+ü§¸‡zş[cÆ‹îâ6ˆK>£„kMÎl¢WcYnGt`YÈna;¬5Úà–Í¼¬`ê-œæ…«ğ‰CŞÆy >éê0÷aÛà„ğñ”(6eHã¨Ö:¬GøÍ½Æàk~Û€ë„è|Øa¥šL„•ûğöv­Íi2‰Z×%±ULS@‹µ&‹‹‘hà¶àõ¤eÊ¥œWÑ8ÃN\d¢‹Âró÷0Ñ&iC^Õ «x$¯TTyŞzÙÛŞ
ø˜)\]|Àõí d&Ü¿1o”w“ØÀDÖİİÈÖíÈ‚´‚$s(!œ‘ÛuD]0X¿4úx½£©a”¡Q˜î¿¡vìF´²/éøê!¤Óœ­z+¶‡âJø‡jl{Yóİ±7ée Iı:¤ânDÛgKI2‚ê%"–Áúl"hxRa´`¢§i>-X¾-±³°h.¢z ¬Û™0ær4ñá¦n`ÒgUĞŸ( Û¸¶)ŠâFÍdÖy/¦™C2ëJÛõ¿ä#K™ßÔ7Iˆê‚ÛMê’ïMìÚ„b	Ù§Éâ¬7rL:·‡*×Èß|Çµæ\®¦†ïûmÀ·¹˜Ù %Ğ}1Âg´4G¡~İ÷'JK>09 ŠÁØaã¢1¿4eÇ¿Qª+¤ÿÿ.+p;hš/=Ú¦çb{ñkJ„Y´¿ù¦á_×{_!ZpìGºœâÇUòßlº5å—¤pº$±EøÌìí¸§é_Õ/ RŒ.àâ“+}}µ­
¿ĞæöÈûhg§!29ÁS5	6‡Ò‡°™­ó{º+‡¶G˜•u¥Áí“;ÈˆS±¨}Ô*Ëµ!!Ü8AGÜğmêü¤Lkq<hwú‚§úiÑrêØ*@ÕQ3?™J=¼71¨5¯ÌÍÏW‹SQäQV¦¾Ç	µÕÈs€i‚g¶„WE¹AFm˜‚cáîA
¥Ş3LNƒñnÚHÎ}ŒŒ†h«@(€<XÊˆä‡¿ûI1Q@ ÄTó
;JAÒÎ‘ıJ£Ñ^°·íÉs°¤w`VsK”B4¡WIĞ’->…•"?É,eÚ´úÖùäıöê<KbT¡*QKË³^ä	nq“&É‚ÆÛe«”s3¤^FkÖg?•¡ïÜ¾öeYŠõ5iaım½Š8agÌ²øñmotgU€~‹‰÷LÙƒA·»úHN\‚¾³şj¾mPÑ?]ÃG!D:‚§ò»1bûÄzY†Öi÷Ñ*{Ğ•Ê†ÉMQ¾ÑbÜÔœ3A` ˆÃÀ<¼Êå^“ `¿€‰|#„ŸóoŒUÉàjúØæ¬Æ*L8,4Øzz•XÆ„N4Š3©§Ô N&PîE.Õ˜é |âJ–ø	“î?Ud°/=XÙJ–¼ß…ü8\¼€İF)ÇØr—‹8‘èw˜½ jÖÚ'Gš4rş;ñd!@!8£´;4‹½
:Éur6!biÏÑ›DBÛ‹-+L£#à‚ÌiÆ<Wqu#¦%|å¨Û£FD3»ß¿«~…œS/9ˆh®¤V¤	ûŠ¡´º¬4©!}ºœLT×9
ÈKÖo&Õ‚2	ˆ/™&·h.œüÏ££5ÄqÉ2b˜9Ücn½@Æ–¯©&'ş“,ã£ÎCÑÈ…¯÷P!  °y“Lhè\g=Ïr¦[CÛPèUò¡Îà)rxˆ—ÒV‡œÊ¾ÍŸlˆ¦
şcÊ’˜®{mCn|b¦[Ç¶!èê™àÓ €ƒ
ï-Z_„—OÀo•…[6ßäØÎ lY‰'è©¯U×ÑTb¸°b‘UÿŒÊ ®‹¹½ yñA­dW%T§şÎzW•ğgïe‘4’’/ Ëõô Nºï–ç:W‰™-ÙÛıÛ\OÑÌİ»×%!ŞÅR bº’~œæé°ŞË&ÊHÜs¼°Á/mòuíÚGåîc4Æºœßó×ÿW†!¥R¼Ã» ~Ê‡±yY'AÎsáTµ³'¥“œª6Ñšs'û]jÊˆt)˜–óáö3/	§>¤¡e‹$«óÛ^Æ &p>ß`†åÈ4	ORş·ãÔLKúÙà7Ç~¦0H¬Z’—õÑ]>³ak+À+h$¨Ã2\Zsó¤~·¶m…à]‰ÌíHÇ
5\%×ª/ê†hĞDÔkë‰÷8—ÖDJÖ\ÍÓ=¿é‡“­ ;x¨—£HÅË@,™*E‡s·'½¬YZË¬Ó›úÉ£Uàı(”=çxæ"'dà;E‘Èü}Z×o«b…‡ÙİûŸ”µŞ*Bæ'š)5ÃBs7!â$ßY£)Z#šÖ „×çŠ÷¨k¨O´B*YÁ?Ëµ—ëzf†ê”@@ÑiJêø½“ ¦~ ‰¢ú=Î`2•âhS¦%ÿÕ;ßĞ39Ö- ª¼!p>[}å.µ{&2TJÃüYŒÚgxcÇ@ÆBpj{Ùİ’Ş£Q=£}Ÿj¹ë+ÿ@Ï`UM÷o*yI:~Òqì‹$İ-º‚ÈA@§
„˜F»ó·Iöˆ/ºD»
½öˆIŞó”*|š$(gõ*\¼ï8ÜR¹9†îËæÁîâƒ×˜=ÈêdmŒlÖØÛ;¸Œ®[!ÁHç[ÏA.3RÇi‹æ	7úö(g¸Î};Aãu[¤;7¹{8¼Šãã‰CÏ˜Ed´’™OÄÌY†YØ± éëÌ®ptÌ§â¯V>/A>ü§=ŠBõ>Ù‚|=¹Ã£°©Ô…‘ùpŸ.?Ş#”*ç¯'KûÎ	=æN]c_=½Öı]"ÒĞ®”’äÒQc–½ÊÿJôø/¿X‰5	}Ç;uNç»ç§å-şÔ˜9ÓoÏy;®+2Ìà2‰pıÿü¾&/`’èJ‹?=zîn?Nà•Š˜T1ª©HßM[
Üƒ$ä‰ßÖ§Ä†
¼ºÛ!Ëò¾©jÛNQêˆp‘©¼u’¡+\pNSOæÙœ\ÎŒ=XĞ&é3FïiìÇ‹ÔV\íîĞ;mrÍ4|½‰Y±ïoG  Í«Cš“$ƒÊJpş1·0á&Öè€ŸÄ%²bÏæåR]|.g4ØÁú×—|Öi‚
ª—xI|ÂK¥!;…Pç!`Ò¯iåŞ“¿—Ÿ‰~jK< ƒüQ&,‘ûC"¯:ŞYc3³OAíÎÙÔı>@ªÁâæV1_ìáC=}±¼PVnà½	RkïxE~ı~\|£ÓqHÄ÷(ãJ^EÑ¯t­É¤²Şºâ^,˜#ì`ĞğpûÄÊˆº¦Aá'^íØ»Öu>zXãÚÔ°°½pø^ô–Šæ¾lOÈPLY}‡™¨ { F²ñ›CcÂÊ8 8iTîe—«ŸÍz÷À«ÄV1¬®°›T±Ë,†B$HE½._¦[)¹SGâ¢øº¹Ho9ìa«_˜[²=EFGÒi>»,C”¾‰MıŒb(äU¶MZÎ—áàTÔ('ïÊc1™?ƒ¢½¬—·âõŸ°nNn8¡íÒÚÑî +_¿_€q&J,;j‘Ó„æl9pŞF^mƒO_&Qa&>«‡ÿ~rµ»‡Ì%¶ˆ¾ùnMñ&gÍi¿o_q=vÊT|_oyÕxïzh°#åGtx9ïíRı6#e1Ò"¹ù¸a{OÑMøˆ=›ÕJ'¥×kš¹#Î3Áß.F˜—œº Rk0áZšÉÈÇ}hR@¤Ìïr2œ‹
B8hº+» @İß‰îFò€3ø¾@‹§‡q]îÍÓ&å	ÂĞ?%•¡‘]ãsµn÷]^¼((´Èæ69<˜('§¹‡U<õh ¯½A<Û[ÖÔUûau x"%¨œt€Srƒ%Ñ‘„`Ñ*ÿËÆïwOé@³CŒLS¥}œû¢Mÿ¹‘şO(dÄè}lìº$®*q6Î¢ÃÕOQÂôïğA­w»¬_CÇ7y°äVD‹Ôş^ØSzûA×:Ü“]Ü4=‡1w¯ñ€Îã6€³Q¿iO$æÉñÀä.š»½U¹©0£zvŒù^…dBO&A¥?·š°‚§™ĞN_©V®ytŒóökCx,&)T/˜‘‰CË08Èl›­Å¦d}j7]»çT°éİ"ëD¬ò!UÅPìù"zG³ßHl”½0i \—Ç‰ måÔßáÎEDÙ¥É&¹êè«A_< Ã>ÁËSy‚­,2Õ_•$Ş¡ã$œ7@ŸH0«Š `›ƒ‰å¯_ğÂÃÕƒ.B6Y–ƒ1±|ÂsÊÌâ5Ó˜²ŒRìYá¸Œ«‰	Sé¸"0wêmR~ºÛ°Ï01G¶ñ	V»;t¸¹4„ñÛ¥ŒûTLßA1gÎÿÔ,;ì¨\O¨ş;ª¨‰hèÏZ!\ñèÖ”u™ë´Î¨T:	{ª9èkè`’àå$ï*ÖèMmß»¸­h28QåQFyöóÌıäx+,;ÒF¼'h˜¤%¾¹•?Z¢Áp¦~†‘Xß–‡^E3h@EpÌÃ:«çß¹Â*pŞÙí³¾MsÂØÿ£5ı·u•3o÷ˆ……ùÀå×7B÷	Ïs2ºï´US© «Ô×DnÍh4Ü®’ñ¼š§lÈĞàW¬UÌ°ª.	1+6öÖï	:OGÑÎ:á¯à‘ˆ¨¶:õø0—:¬É´Rî_NNîÜNŞ®r°š¦ùŸ~…FûTq§t¤iı/cï¼:¶+IÆô%O—~“>ÄNL$µ­¡›ß3ƒà);EĞVš’§Fº'y¯)²íÃÎ&‰Lü–Š™$…0°aFĞ=-Çğ|¡ÏôÔ-ÙùfBèz‘ÔÃËC0Ãî3š.íéPŸ´°9›Èqİ›‹
&MKÛ* êná Ç ”
3095üHO¤öÖ¯ƒæ9Ñ|±Ğ¨0	ŒùQùÅšÀi
4¼úGdêèÛ
¦·HöQ%²Fw‚³©UékQş´’>×8¤Î#‘EX4–L†Pÿ	íp?¢½YçÛ”}ÔB¿şƒÙä”£û‡Êà7YµVt^ıÂcÎñg¿Këèåõ!ğ÷Ta/©‘²!j©‘%>…sÊ˜ùrèê7IŸ$òc…:ğ&,"*|Ï;k½@š^ÿ²P‚ş³£L—}íüI²ö¥ËßFBßb8~ÁÔkAZÑÄ±* s©
Ğ‹½”È#Û6¡ò~¦è[ãhİ#¸fàQ41^v>(ııü:Ö´·}€uıŒhêûùH+8AıÒlšŞòÖB®4R šİtz*­¡LJ[CL±(ÄÂÊµ)—[Ôì¼Ã’ÃvÿL’°şî¶ê7â6ABÆ%»Q¾Î‘8Oò¹_(­_öHÁâ¹È(_Â
Ôœ¿ÆÊ/jŠŞÄ<Vï p}ºê¸ }£¸T!ñOá
$8hÔıÎ°¨!cùv^ƒjY3Ë…‹¡ıâvE8søkÑ4	Ì<´.íÕëv+*2\¿ê}ûNáå4+Ï±	Rs	â¢YÊÉã}lé.rîúUÓÅj¶ íàÏnâŠ6ÀœÇ›£Üh»í4Ÿ8™‰Æfc
÷ìgşŒóĞR¨ÀÃµ:"ÿã	në{Âª1¡×BêFb—›–â«`9rò2¬­“ÍĞü§1ÏÄ®gvëVùç:9S½Wl‘ã¾¨c?=4ş;ùàtTñºóªi…œêÃÿuè.*¬ƒºğŠ©½‰®H­ß4p´*ÍgÍ–òØú†Î­Cœr@E*ŒUÙßÓg‡<	£2¾¤3Çbı­£
ËJ#a)$Šå¶ÒÇ6¼ÌÃèC®ŞAJ·ŠùÒ)äNR‡3º¸Ø§r™¨ñ§Ã¸£$uVIJ“onù£ñ¼__Cš	
VÙØR0`HŒFÓKª=SoİxSõÍYänşx8ïĞ‰Û4šü
şo*)•mÈˆºÄ…ñxÅU4D¦dÿaŠ»Ë+
D¦	pn@’‹c€’‹Z¿pıA¼ÿAõ”KÏ»v:³ÓHë¹™ª$ëÆ˜<Ğfb"PímfÜ²ï'R7/=.7&9Šì„¤y=Z(½¨ywÒa+?úÄ?£Äµk30G</¼3"”÷Dg	¢ÉÂÚm…ıÿ­'à™J&Êp§ )<AP¥¼å$I´o³	·
}ÄEº›4N¢ŞC"ëOqáõ#š¨^:ÇW	eÒ£­ùxô=ôÁís¯‰˜e"ª— F²ÄŞÎ4Ç²AòÈ<Èd;M±îd”î¿‚v;Û:¾wo¶±[¿Îû"2ÿ•Úæ‡Bß…GŞ[Sp4ì­&H^‘T?½Ó½j…Ê€³lÆ¬ËÂS2×)l¥–{ïŒP;ŞÃ3±Ì‹…Y§á†ŞÊäğFáÏ°x+¢âO	 š³ı ¨bZ¼úÑÏß™$ «äV• Ø‹aŒ@]q“iŸ‘)½ü´nò2~­;ää±sû¤y)"ë7Ä©îuÉ˜¹mål¸ï¿“Gs`ò|{!LXóåÊ·6MN*£‚@n/ìñ<¦M6ôîì….hkòšO_ÿ-œ±Pr§ÎûSÊÙÜd^I³ ãYŠÕ <ğBÀïñh> héP%´|İFt“FÄ!8›DÍ5D¶£¸ŠM¤€R•i©3¥¤ÓE	ş[)bËçŸº´åJjSòß£µ³wë¼yÇhÊzI®‘}&cæ7îy3„§Ø”orSö<0Læ0Úr#¬ËÔì!‰d~MO•uUëfF›FÅúò+ÀúÖj?ÃØ®ƒ_Ç´Í]°!¡¥¥I–k“®cF/òbÏU@¬uÁk²yÈi ˆrë›} J?˜Q.tnJj;Ë°H›‰g+:;áI&¢ÜğE(#/×7ó¼Û#DOcNÑĞıø<Pû©m _|©rö;rt´¶àaøkŸZ­¹ıxz µÛ•öœéêß€È{tVšßœ.{£9ÌÉ!çE3û·5ïw•¥0Ïn&w°D°Lš"=·ÊD§}€>8[A«ş] jÙ?ú.9‡Ø|Îgî)ºlO®ëØô¼ã@Õnf‡ìéZdK?.S·[­N@âLQşëxÜƒV
H<
èƒ²ÿ(óÄõ\ršä!İåYÌ´·¬D<+Éòî¯te}Ÿ™ãdĞ?"í¼6°ñyrJ¯ê=[§dx§º= ·tO!Ó­Eø¤l™üsƒ¨¯)uß*òº‚ŒIFÌµÓ¯jW/ÁpÓ¿~k¨ÁH¨?×qPµ?øn#&Ø\º‡5MÛÀn/1–W¹â,ùÚ?v:HBœ%m–)9x;Îr_øvC” ÉkéŞlØÄH‚˜ñfœtşLöúû6&%ıºzVB ²Ò:™®¡XêR÷ˆZõİlæÖÜ‘Ltï|¨¯énâˆ7ÉzÎt}÷U#LúP7-ŞëäNòüqk…ojÅ ?4q.¢+:5åŠ<NgíİxÆƒ9Iü¸¾tÃJ;æ¿FU8^æ”ét©6ÛØğ±¥©qÛœJtğ¾XÎ°3ú5e
w6—9^eŞôE]hÍ};âõÿVúÛ„Óû3 —Tçh•ÓiZÎ’¸ŞŸV>t¢Ÿ"úÃw	d*‹£|{øå´ŒmÛ×şQo+‹ŒO\D±ÉüÔd§2üwı(b¹Ôfsùï@×HôâVÚ‘¥á¥X CMù	Ñš›½ßÊüªÇªPšÍòàİ¼¯üºÉ5Ç»ÑBğIÉ…`„w’çTœå¾áª­ı:p|‘’¥Á“Ç~ç”(ŸßIºÂE)RLZ/_K¤7óù(§Üê–ä¢+ÜÂÿ@å.x-@ÌùuûÂ,õ¢Öû*Lƒ‚”'†i	ÁH{‚]<[Ná‡Y™C½S#O@Ğßh»#Ğ„ª5—o³œ«¸ŸIÁ[eqê°Íixæ8Y7$z=ó ¢ã*šSƒKzJºåc“qŸj®õ«©¶—¸ÉMõSï—îÊ!¯ø"miBê¾±|Ô³9ÄBJ YÍ×›ëÇ‚›tzÌsy|‘šî(ÜP::Ù£Ö±³Sj2-9Œæ´´tn Ê]0yµ¹Ò,È}{¸bÃg@ÈãşÑ×
Çª9Ô}bœ!e³3•öË¼_4IõO8pb ŒhCªV	ª‚ãø8GŸ¨=Ş~cq[Hr,™[m[é,a•ÈÇ†¨ˆ©v¸Nòé|‹.)tìÁÿS´H½ùÕÇO”5$ø¡…È0sğh¶LM9ĞÊÓ‹}®çJNMJ–îãTòÒ€æ0õãá)+wĞÅIÑ)ñósèàùšà§ÂG’¹kSİ½¦ˆ!•Øzö^ŠQ·ùbğ94`İˆ5 e=M``ô-^Óu¸ørªèÏ26 Ã,¦Á¡•›ºÂFbtv«ıjĞeYXakzÇ¹I}£i­øóo‰›`ª}9Æœ}×R)ºiò R`IùÚòİØq¸¿Û"†~‡·§ûŞzeÄ˜gPúšà´b+3<y%¡wla¥ÑQô,q¶\eFİÆ•¶:€w¾h§ÊûÍòogªÓGë£ôlîšYU¸HÄOÿ~[ÒàBRçğÅ Y:üù&YpË²L§Ú—»«zŠ~ésóÔFÙT¸:Ş[yl«ŞŞP•êõ÷D¬,!Ò§i¨Õ¾b…x÷ú²!XËØ*ônà
y™ãhz# 1™\Ô¤w7â(§øøÉğö{dªIW5Í§±îÈ€sµlûZÇšè^6¢a‚/G™Ì×p3°—kÉØ-Ëù1/h¼÷oPËxBOú­¼"èÁv/ùNIŒît–Õ.:CÇŸ?ÿ< }ƒñİÿ¸C`¤éĞ†@bº«™Ë„ÕõÜôÖ)À3ÖüV$ó5p•š"í?uišD[NMêÇ2ÀúÜ<ç™‡ 1Aô·ùK…¢,ÅôßÌ@§6š]J6º•¬}Z” è?:2ƒCÏ{ñ“ÚÇ\Ye*O°¨cÏ1QÈ4ˆŠàÏÔ‡¥öÔÀ’,Gğ=CŸûé	†±f¶MÏáU,ÙYï&·|\a¥ô÷P#¸ø8§ìhrªÔ™›1Ötq	=õ¿‘æÕ¾ş~}l1«ùw-äXéyQ?³Ÿ#oxU"3£ÌÀ1tR”¶NEAñU¦áˆugÿK§’ÊA6Í•q!9&>Şÿë;Z	£K€¸¨Á§sÆo&#í2Gİ° ¿tÛÁ7u(à1±‚ÕÒÉİ¯õkY‡=mkÈ¦ògğ[8`RlY¡Æp« $¦õP'Õ‘å‰_ cIjº›À’l#øälÏšúÚ±»4–”ç\ãëCü cË^±Õ?ÁxéseJc›†‹ËÔ$×²ÜUÍÊ×|n£+!„£ïº(_ÔÛ'\6¿2É½’÷yËïçÖáU–¨GÆäk¢œï¬y\YÖÎ(ò
éû§ğ¶	Ú¶¶ºa²“}Æ;kUN#q2¹;v3j¶O}´|ÀÒ(x	‰ØJ~á®¯ !ˆ¢¸ú^A“ö<s?:>ı•cjxëL8M·8*àÌÏaíï¶¡ôø­6LÎx¯AÛS2Mv®Rçñ½¸ávº48nDn%ğ-‚õu½ˆY ç±Óe0c’eVÒÕRPQö €­V¢õ§ğ’I [±¥°;¹ÿŸ6¹‡ê	ª¶[òqlte ¢¸¼,›Fz“ğª'UÃAC¾aãtÁµ¨ÖkÓ4Ù€Ÿ \Nv.V»šOJc*±)ÆZâò…PYòmo’¥½Ö!²û«ışÆã°(lÇ
>œhïñí<b¨ğÅH•ùğKolc¢fõN¤4j®î:“à¶|ğÄ»·ğ¥“>3!ŒlÅÈaucŸj¦‡ÚÃ1ÒWt¥âKÅ›—Rè¸ûÒøs=UÎû]±a½h…]æ°¿iŸ$ºüæ1fH&¤ÖXj¬ó³a¢Úæ,f°½ëi]Â[ÂhU}jƒÓ…^ÅÍÒMš„|ã*÷¸q-ßºÄôÌÛÄW1‰®o;ğÙ€<ü¦×Ivª­øŠ/VZC¹!ùò™}sêLG_ƒÖr°¿«B„gîôÛÙA€Eó–„—êŠ–PÈ ä¦ĞXğ@3y\úgfÖ+9h]&Pÿ7ÈÂu#ñ	qú¹›…G‡»²a—`ı”$¼MH³JQçBaZ$ =‚Æ;é õòÚ³V¼¼xQÂYrñL}pÍPá¦ù‘#3O(8ÛM­ıF“/3“™È—Ì{'\Ç7<jÜ·V}uWP‚³¿tMRÀAc›ÂrÉÒ×2hi"í~ºÎÛ*GU¸;³uşêË}ÏE[tMÖA×^º©{­ÒÅÒ;0Xè¶ÉõŒ?b Q7ÂIVéæÓø¸õdÌL%nèÌwlŸ/fkÜ$BÙ-]NJ™$AÓ1C–ÌBâ3¹ÖK~T2”‹Œ s¯‰[âûKqÌH<¸ '!Ÿp^É‰Ô'fĞô#z•ÃÜ»ôÿãyÎfíß<0ü­BNDÅ *sdN;O–ÔÈgg†ÈËû‰JÕ ¿e@FA¥IJœÄãlŠY_İ$Á„	S.Â˜ªÈõ“ƒ2dvDyi6dÕZbå\'/R¾=	&^³,–”X$ĞßD¤nR-"9ÎIX í¿Î!.ZÅµÉm1Ç3ìPsazsr”°£Õ,™™¨S³jåÛ¢¾ ²7ëÿI5¨Ä Xì~û@½É*6ò”™œFÕóÎè‡ÕGæ•"/'Ù°Ñö‡2ø´|‘Ï³/Õ.ûs —ÈıÊcN4E[Jè·‘¹•àñ¤FŞÉw_mõ—MÚ¡ñÏ"*'9Á&Ò®œásÈK”>]VêÒ¥Ä/Ÿ/¥¿×Õ4Ù¿ÑJlZ ÷·j’Ûuæè~&bAÆÈá\¢öãê·'&ÃãÜúµÂk!¨¬"ø>ÈJ„}ù-ˆ•ã¼´ºù¿Œ1¯¨Ù…÷÷‚Ğm[íø(F³ÎŠ1‰GpAg5uÕÇm™DGí®İPı}”ú_Lî¶Ç…©<íiwò=ù‡m#”á¡3WZ£%[ºX÷Ám¥%¼Cñç…ØÃ¯µù PüÏè·…U‹âÎ’NŞğÄJğç§6ÁgïU£QR³ßH¡Ñ= !S="áúú¥f58iU½æS³“:øH­Qàft›¶ùØpPÇ9¸Ô‹§èPH+5iè¬ŸQÒÃ±~¶àJôİ!ÕgŸB±nù£¦xA‡ŸµeŸ³2½.˜÷í?_™áØ§ú …ğ $Vb¯´‡jÕ,óƒPÙÃß'Ù`¡iüöé©Î.`0ÚÑ âãCDĞ#Zii‹¼›£©‰æ*Y+6Ìx“Y©P·ğbá# óéõéZ
#bzY9]{]KĞN3”­‘‹t,ËîI6Nß¢¨‚!Ó,ˆÃÆúãĞ\
ÄƒòH²G±„	€ ”ÒlŒ„ÖOŠR9ÈJSb—Ñª|wçBX/hE{.pò¹j]iéri †LSÆNÒÓ¾¨_3âáşhK•ãW©@ô¿&à¢ÇµVK–(ú”şÜ²0ş…Œwú:…«Ö¨XììëaXÈ 4Ä§¶ °"¦ÖQSôQĞÆÏ¼eÓXx¯÷h·P7pÊîr,ÿ¬y|ËÖ‚¢UXvYÑ8@Ü–¯8ÈùB]¿ªÿÌ®œ‚„s#Jİ¼Épœ/ûLô5î%
ÏS¾ Y	ÿ•=\w¤UšÓÈw‰ıOÀøx%…ëİô{ëhQ;‘|¬¼nìítæßhğ;‚`9îˆ/c9¬/&AÙ5¹ı	EöáÑ²NÊ@|—ÔİĞu^’WKyŸæz,UB²¹»›ÒXãØôş¥ğ\mŸ@éæ_ÄÏ¸­LU}Í”¯xÃèÁkÂÿßpÆûöuQù¬üËÕıSÀÚZW|lËÕİ¤
ÑÚõH&Ğ:Ğ÷Ö'òJ¹L;»Ù€¼7–ŸSù+R›Å™´â‹€Z05`Õ”Ún…FŸŠ¡&´†|`„UÅ1ø=šgJÂ>+	I{
Öÿíˆ¾;È½%Í×Äç±[™OğO<Ú§š÷/	×­Î÷}¯©sàÙs·ï»h$bú4˜î™XÅøSóúÊ¥ß,DV›ÀÙô¹„èÜí¾¢a›VAm—8%‡À¸1åRà…“5Í+a­˜TyP…³¢>¥(‘•<¦ˆ$’·)k5¤pÓa¹y%wÜå2nÜWÔ¬ŒŒfØt«îFÙì
T¯Ic9~n!Ÿ½·=©åù€ Î Ø`ƒNûÓ@TTƒ½°i–­hKXı’âŒ§ZµÌ¨JYRò~’—@¨}¥KÆtu¢tÀ S=%”[§åàÓ/±dÌ¼qó?ÄjlÎ±R"|L™FXy›~Å-*²R5ùÊ{Æ*‡²è"`Ô‰Y“ZÄß®¦–@ŒîCå|k^¯„Ò?ğzŒéaÓI$CÄ^KÓƒ´,w6fªÛu¢¥¥äÃüe?’ô§h”¿›1ØVáS ˜®0À4²~Ş%t1v5Ê²ˆülæ³ó´µı³“çKs¢zB#í`*Å©ÓÒc6¯KÖoÏ‹j]tÒ§8 ÷¢Û%LÆ^X/¿,”öÓt5@”Èœ1jÿ›·^¤7c5
ğMc«º	OKç‚ÉÉ¶5ˆ¼T„LoVº/µs¶š%TTü¡™ªg“§F¨‘m(Ün?™\R³1½-•î¼4t¦û©°B>¼SòÁƒ„6«<ÚÆ˜(ŞIÖât¾RYˆƒÇ*ğBRî:6Ü;…kyÿ©	{„.†Jé$›LĞ,ÉZmXL¦«f§µê¶QªD3­|ø‚¢½ˆ÷zsZæ†À½»Ç×—Òs«ˆFr$áW.˜ìtşÆA6*vÕëÈao`+¦Î#ÅIGÁGv8´’%Óv#c²¾r<~ ºiYwˆ‘ƒ¿¯×ùóq+™ÑàaÕúÃm è®ØÙ$ÂÚîê´·F"L3,ï¯ÑÏÓÄ‚1ÈyK¯[ÈÆ[4OÕÙ¨Ğ'ï±r|AÑnsM-Ìÿ
,çµÏü‹WÓ uš¨ÊÈª²ôàó”a5èVİæ±ğxÌ,c 6‘•ò3!­áö—HHàlû×âëãçÿ”ú¢¹aÅ·&ˆÎÊf%2ÚcêşÅú0Î93œàè=0­øw8„4ÂC»KH•¡¯§/Ã\@"³‡é©Ñğ:û·ÅÉïhıßğ¨¢‘ê7º®½ÌÿŸÓ€ëè·İ‘éìÜdleóÆÒ£ùÑE¡CÀõ5~i—¶%—ÃÀÊş¸:áaûOrˆ%²½i@$ßì[*¨)Í'€Êß‘Íy¦RœÍ÷j;Î3SY_]ºù·!Û~¿±xNÁg?¤
å[ä;`ƒ²îF9(EN3óeÑRfªï]H~kms8òvÎ×Áx¨lXº7„p¯nØîæ¬ØXGû¦Î6®(­—âÊã*?Ò"AéË)ÙsØødá4RwÀ¾',Ô ¦,~²’Ÿ=‹4{ğ¿NDÁÀÚêG‹™’…[#G&·xg0‚G|äÆˆÓr	“[À÷•{ª¤¼„™Öç±ÂèÌÅ¦ğ¿e”>)}ÜdÏsy€2å7/ØEÅµ”l~Æ/Ş#¿›é”xæ*ñ‚Ì­Òd¹8r5’{;’•îÊ…*¦E™öQÕËPµKØ©ÿT®Ñ¶3}
R>Å«±'=Ú³¢Î=B,6ÇoNÙº¾EŞ%Ş7«dÒ§Íw~½f¡°×èôØ§âÅ™¢Au“¨½U"+»A‡sW¼é{Ç>ÅF-~EGÑoş5Û	SI¨k+½0my¤ÿÄáP¼Â€çéN%©Õñ¬y“E³y{‹+$i©šúf}µî•æöOi!·¸ÃÀß¼÷ô‰tgó/İœ<×ô¥­)ù;Ê+ñ{»¤ŒzÏƒ=EÛ'ÔŠ!=lÏ˜V•Oû&ãÙ¶"1·ıoñ£Å0 z
Q`™¤Ì.)‹¦Á·2u£pÏ’sÉ±bUtg[ıˆ¡wAîc6ºÜt© +½o=§<q²œYğÙgn:ïÚÿ52k½\Í%Ú¹ÌÂ2yá¹R,Ù—Ó€ ÄíÏ~œonÔ³Æ”r<oç@·»˜é|d?PWô³íå‘ü¡ôY#lGÜ"Jêñ=ƒô}“7¦I{•åeÌ8$S’J%?ï\f+A¾°ïW#¡zÕñA‘µÀ°4 …êÙYF,F‡Aö^;€‹Aaî9ÿÌŒSÚ²¬Iİ‡î#ËºÓÇ§ÖúÆ’GßtÉ·¼ôŒKD	&YÊºU2Z? ²Ä»Œ“Y1wìöĞÛÍ›©rÈµÏw‚\–EÑF¡®±q__G‰ ¥]>+ÍR7§#·}4V>ÕË³ş¬y,wr%È4RCHØ79`™ª OÈvã§+™ù(–¡`Y!¥i×\•ã^Í³Ûø”¦]¸™k¢C©Ì{ZîrŒÎÃO •8»UÆ³YzÃÎÌtÇ_ŒqQM|sv©pB—*v{&iRLÃ³Lñ‘Ú <Adü¯(ÈxÏ!MšáUrw•–Úo&3)T+ŸêŸ_÷½Õ‡É
N*¶4{ÆÑe<u'¿Uğ»V]ïĞ-Ä\#P¦èJ±É±¨­ÖUEò€Şhf»å€[×™İÁˆQĞZÃ7«&›xgíšnØ\¾…ıİD‡yIwÂÒ‰s=0/Ò³pb~Rv¦n—¥,2´ËRK]9,ªô€šFÜcNmÏgGS<ÓÍ²6*lÇøÇìkš€ª»
Ó íıXÆ$eÿíe¡Ü•Ëšc>°6»İ{(¯ÛŠkŞ½¹x¸û™ )GKjÖ35†°5´¤ø­øV†Ÿ^øÛ‹G“çéetÍr7ÃöüÍ·°ª¾²mI^cçŞgZ´Ÿ˜«¹)=0˜)­Üš‚?AUT~®Ú‹ÙÚîƒ»­ƒ.,Ò½É‹’„œAÆÂ?+M“8Ip‹Û‚9ÇÁf©†<´2¦Lpó{×‡;)¨íw‹·šÛGkè¼İkÀ…N¯¸	˜¥¡%*À@_e.)òtÅì÷7ß¡Û Âçòİƒ«{z’ğ¥—~Ëa¶ãFï¾j´úûÖ[8¤DøæqÎò{èM›$Ä}•­{IxòøŠ×Ãş™J^\.°˜ÂÏ¿œ,æ(É9œ05¥.Äz¥æ^I…öf¬K2Iş÷±ïÓZ|^?–V@wqÿ£4àz_ã3¨ìÉ!µG8ü¥>DØÄâ„®Ô]¿!Fêow!ö0ÜBÛEÚŞf÷o¸€^y÷îÊ}~YO`SÄ,dR"òícëX\|ú`Úë]ê¶ŸôKZJ–ãZjÄ’q,ÌÉS i~"Ó’•O=æĞJäqí”]<e[<Ë
¬²lFNÂFş¹tú‡Ê*Py'7d$¨˜9ZHÕ®Æ˜¯á"t†Ñ— »&õ]WÈ.ßêf.À€t¥WOÌggşêªªù%5<6øÑß/pÒa/V™{:Ó“>¶,ÂZuzÌÑ\!š"É
×uJ;Û=õñûÀè+ş¦Ià#¶Ø¢œˆ¹eSF?M0¸ÖœTÍNÒ)Ä‘Ó­Úb#¥èc¨Ôï¸:dı³÷ó&¶md%sJ@ä3>v| 3UI	’åÕ—²„ÛÁë×gtî`ª®71Lñ„òtYè*tÃ~vUƒa~ãøôX2inñ¹Ã<pVc7ì4Á´e>9”Wîüo±§1@bç@`7H´H@Ç µNz`C{ÃåÏ<·fß,4½*ëİpƒPPbZôY6¾ÀŠáèµ;öJ)“P#É†EŞ±e1U
O«.œê±6ÎRçé€µa?²U¬2äê¶_}6‡å$wÔ^Ú§m2Ô•;«iï\ŸC™ üí#ã‹ºüF©X‡v–º{b2Ò¢™ -ZÀèM.q4ÌZ…ôÑ	"}É´›
ê"Ğ+K^Â<Ï–ùe€ÑİiÙàõ:Ñ€_–ô‰§Ï*›²Ô–äF€*úÂĞ©1jH†«„…'7í¶¥WfµĞ»C‚¼üvWE E«Ğ©‘š$‰`Û)«¦àÁøØ›ÃJ²‡hÊB¬¦€ ıä%{˜Øi²Bp2bàãÑÅ<×äz¦’½Gâ¤b;ÍJ¬+_™vÿoôA%íbîH]fÔ
Àìd}oéÕ@¬äÊ&ı±¸ïEMª,%4Bb’ş CRód+Ã±J_¼jG;ûóåaG)Ÿzµ8ÜZèûçÃÊ£Š8~MÿìB7z•÷tÃ§¹Œxg[ºô´°.Öø†fèrÕãaC:â’t¼1Äa/“AâûØ+{?ØÄ  ëìDÑÔjù4KpJšÅÿ^¸HÙ7%ÏƒßOIªß˜s«8$ íáiâ3·{@M •{A²'|ñ;–}Í5©(§‹IP@AcŒo°$›HÂ+O´!Âİ°+(‹ÓJ©}*_ïGİLÉYSú/’Ó÷)RñYNÁé÷eÁùì@ZÀ×l¨'«ˆ,ü/¦E·\˜Ò$LÊîtN·!¢\o‹N)»ãÃL¾-J½—¯~55Uª3ôÁf/¤Äj0G»˜üÜWoÒ5;OÁÁ¶ÃüÜóJ¢Œ±7Uİ$¨:;ZQ›B@É)N!HªêjEmÄ”q,H$Éÿ‹`hr»2@VãyˆÈ0«%®böB„‚rûMávÃQÖ‰MÌ¹6¤õ¡b§û°ÜêâBA^ì>n^åŠ˜'OæÅ=­wL1àO€×ÁXŸL¨ÇÉ#%1¬@äÄ	.¦Wö ‹];C_9½š˜:N{—JÃp6T)G‡\1"'vñÄÏƒµ\5û·¦³í‰ ‡®\($ıàÈ¼$˜‡›÷-ÛÎgmØ(”Õnò+ÓÑ€l–µÙ`æÁÙW›lB¾E[¥<A~á’io½ád(u-[ËÕ-Wq«¦»«g5-¹gûØ—jD<°	`Ìé¢ŠÛg]sµCtÓxz9õîi[,Y/ƒDöŠ2Ê0ÁóEE&iÏÇ!C›Ğò®ºF‰ÓA—Z$™[1«å:/ºe‚+U»{•l9¡gI3Æ^K)ËkEwŸ—;óÉ»"d2&Â2€œNäàô†iO˜ ½èFLHßÎĞBeYá%ùz¹wW´™ŒĞü¬=]r%+Ùÿ’³‚9¬{)…*
¾…ˆİ§)¾w¶ÉöÛğ?KC‹=ŸD¬hÖâ†_f˜WR-V$’RGúĞâMoe¹}Ygí_a	:hŒqñN¢8»Ç„%k²ÃˆtÉª*iu¶æªŠˆéib%Öt¾NÖEVUoIÿªIĞ.
=¹¬ÌêôñŞÜKç4{ÌÈÆè8ß®?®9ˆ+e¥u4­–E—ºX×Èõ0\ã‰8iÖˆ·29å3åÓ<Oz~ür˜Ì8rwfò.{†¦ê¿,ó±Œ˜7×’K©=â8NIÀæ$C/Œæ\AF@³rÇ²¶>Ñ™e†ı4e¼nÓ„à­ıÏÕ2æİ–òãï©ÎdfnüÃ<Bcq³YÏ•‘Ğu^¿_Í0g¤XYi…=xê(ÈÂpéˆÚÂcn×©¢>):r)|´«ÊÛ÷p,kQX¸ö%H`Z7rF÷{ÌfúM.ïnç³¨¾£Šx_@‚Ê\oåŞN—Ñv›SeŸ)ÀœÛY%c01´r°J¿ë‰°ÕêÊ‘ª±[‘òíæ
÷ña&ıK	.>»'ù #P–M•pJÛq:Œ¢¯XÒRi$²,2¤¸Ñ¾v&Æ—DØÒQÂ¤L Ù9M¥2,µTÚn©YIÃ&¨­ÜÛúÃ­
dP¹yö"¡–ë5&íÛĞ¼s/7çUæ¬«eÌ#EOÓ7éêÎœX¯¢nñÍû|uÚŠN:n\ËtÒ¹r¢ªBÉA, ĞÂ¤´|x›Œ‰°ÖÔÛsgV)ô~ÌM_IšàÍv"ıÔí°l`xpE6Õk v,:ÅDßy¬ÏÛGİs·ù¹äˆñlùš¸øj@¦;Èïİ´[ôÿÿGMD:[éª|,Mºi¬†u&Š&‹ÏGZDÑ‹‡Â™qlôÃaÁ&µ¯n~"Cì€
A—©âdÉTüÆ'ÏZıÓÑV§™EÆÉ]hCh°ï?ØŞJN¶?e§F±õ u*µ:í²ÎÓvöÃË·âºz:óÆhóğ-ôq¢ÊÆÒ³ZŠ8¤—ôouüAH×]Bö.Ïñ@O·Çyà3„¢”M†µ=/:*WtçÔ›¨`ù¨C5ˆ
øöÎÒáÏ…ŞšqxòfN,Ç´e:}äò›¯¬éñ½ì¾2¹è~€ÆÔC˜B—}ÙV… gİœEwxÆ<›WõLä“ıIm÷ÅöXQA[]½éaN0A1ñNœºÛşhbP;`¨G8<ïÊ±uö!-õØÊºÆÏ5ÄíÈ,q|!ÅñÏ—ŸÖ‚Å%]¤ şêœ+xü\Öô´ñ¥<ëbs_Ïôo°Q°"ÚîOß0Öê¼¨ç+Ì6¢á£¶öCC·âÒ00Ò‹·åó«üùXáÈ&›²u·ß›SÄ* L©ÂÅ>yq’ÙG:—ÒŒ.»V©êÂp~œˆÀLîÍó{á„…×½È í¾Ã4ë·şÜ"òÚ§´'˜±ÅŠ@ü½–ªß8ö2üÏñlCv~g+â'ÀÌNïß2zÂ,U«Ú'™ÿºÆsİÏ’\ˆG ¶–R‚*Ú9r=Ür¥1Zeâv®–ş ÁñiwÎâsLş‹MºLÑ§]ÓurBÓEû7LV€k)ÌĞˆDgÜ*!¥ë/·®ûõ‘Kn‹àé
–‹òM‹¿Sß`kìÅ	ŒÊaÑOåP*DbÖÊÚiå©–Î /“Mxu/˜tOuº!¢«=²Ck³%ÂFg*£pk„¢ I²«NeíÔââ€¶ÿ	õÍ›e#—±Æºü;Èx(šP=QÄ­^;Fb8+jW´À‘•7É”nê	7h}
âµ£…ëÔeñÄ©åú»ŒÕ­º¸°`;Ú€~A)Y@OËeœöWyêƒô3VYÓ°ÿ±%/mÅy	UX—b&¡ Vã4¦/n÷¶¦m
€îò=z
2ß2/7ÈzÅàÑ}a±—œk\“EXwİÙToâ%zÌñÇ:òJ5úé8Ğâ O=²!(’âË”P›°c®›2_ôò'£‰ENƒ¨ŒPKØQkæUÒßzu¾O4µ¦0] ^„io‡
èÉúªüÇ±úRgıÀ²ÛD©‰1ä$S¤}Õ¢t5Ã ÔUğÊ£!iÔjHh™6£cœ¸ÑûW¥²¡› <ËNù\ÃŠµrÛ|T00ùµŒ<ÂÎØ/€	À„m×ëâó®sí+¿@+e­jù;)y#ŒQô‡Úu±‡.µ¸bÌàKÜÅQ§êNENC( 2iâ…£å_XS&“~}‡'İY!.#RŞ2»İœ¸ÌéÔú:ëıHzz±wõÖû¬‚õSOÏgK[#´ŠèS­Ã$XPÏl¦EeıO'ÄFÆr­òƒ>pİ—âœ§Tó¡Šs‹lÚùØ]°0oX"FøøÈçäÂA8&|²´óíjO>ND1kèF²ÈCG6¹Ã+™ô×Eˆ=ÊF¨Ô¨mtV­’Œ®èÓëœ†¹_îÒğ×ìØ…¸ld†„V¶[¡(ØH˜n–$¦™.áxo¾•ßg3§µ±—kW#n<9—¬h¥óËD¡£?…åN›¦bı`J píœK¿#–d"ğ9|ÿ<¦Ş¨‚…Ÿr(*¨õ%FäêZğl?`*°\»¢şºüİÅ†f&>î_Ì¼yµb¹Ú0wüšø³]³hqªÙİá.Cû‹Æ¡ZÈíË,^ÇVÕ¿«11‰¬1ŸÎÌ‹‹£\‹h12xc·*IèTÉ*ı–ğ¬±KÕÜâ‡–çFYÔºk‡áz;,Ó ÛxìïÉ:fUE dJÎr@µÏ% iU`–í-Ç¡åA¢ù%êÊ ¥—÷Ì7—ò—zt“º×>ÔÙkçNu©ÊiÍ¢wİÀU5Ì¦+¤WMœÅ8V2`¶Ø<™>àI+ğJ€ğ·o”‘_uİ€í]Ánâ½qdîãìj|ÌuØş›é?sSg°Ä‘VŠ$ÍæFß »I¹€èÆ›£ö¶¸ìÓÀS0J3vÜ§–®§É5Q\†¿Á^EWÊ-8j\Ûw-”r—ƒ#¨¯$j›Î¶˜58œ§l*ÜúØ*fÍ3	Ê·*p.5p€Iä™—C§w±õ	#2Š°"ËßAŞ’–I¡gS1WjÕ’€ö™ªqˆÁİ˜‘…Ÿ;ÿUb(¤Œq¥!ßñN]¹ ¢ÒÌ…±Bh‡M£ná|¤õ³F³÷¡×ÔUO,c)?8¤¦ÜAªÅTw¤
Å1—qÙKH„8%,^ÎÙQˆÌpemˆFúÒ¸ª5Á]B¾iÀli×Û.Wæ¢Ü§#«~LZÍÚ²'™Üyšç_ÂvĞÖãozx8êkYè*È¾éÍ™l½7x40r
a¶£âºßGßFšÜÈ-rCf¶La³ÚçCªë«æ´nì{—ƒ;!|w£Ëãx‹ô Êí'A˜=E08Vp¼•fvÎòuM¥zää5—8|2…4œoşÓºb`/¶‡ïĞ‘·KsîdÊBL‰É’¹Ã™Òÿa›Zˆm‘iUr:Ë¼¶Ğ$«éÚÏÀ£/õ»d«;;]ŞIg üS¡8l‘OÊò{DãfRt[¸]t­I¦Î¸d7#zHÀqĞ¥Úh(…úV•Úæ€Ì=neÜ7ğ~½(ÇóÂ§ÛóŞxcZái”#)?•&ĞõˆäLˆ:fq5'™)~3ôBÒ™4½ôÈÄy;ğùy± ÈW\îFÉ*ºw4ğãÂ&g4!7ö`v‡ä›VÓx7Ë`*#†‰MgËú;ï)Õ
çF¯ÂvL9©dÎ‘‚É'‘Ù^R>yün]×'îºÖäy"h'°{¢ß)_ láz”Î‹TäaXñ
—ßUJ\¬Ã\KüÄ¢ÜûÚ¸`'ZÙñÕÛUºNAÑ÷EÆ¨İŒ,–ë0J_Î¬ÜwİZq‘ì[E×¼ó†"–n§Ì·¶
*ŒÔ5kA~­8ê¤ñ;tR”9#Zÿ‡¼Íæ*ı FªDŒê9Ñ¹ëßB‘Eİv ú	ŒJqPNõc¤í‰ú4T·;)+-Ã:³GBğ°í–(ãfÄT2xÿìAhRˆÒäU6Ù¢c^5õ‡î¨…+ïHCGĞ¦<6Ä,òÂ—x1œ%¾›£áuè!²»ÖßS
Ú±VUtY¨®Œº(dœ‚kİĞØÍ{\"æX‡ »ôög¿f„/è¿V)kÊããé–ÿQ.Ó¿€Á§ÒáDg;mJAEúË¦B¿ß“ïu“¦ÖëaëQ«Ì‚ö9
–_ˆ„dY/+1qTÖ¯ë%¤0”Š\ãIhî¸hşÛ	~BhˆD}@ê[zşü
o5Ôà…CíËëëO»ÓƒéeõÏÃY~…Ëò—µ?à¤Õ°ğP£Äc¾!UÚ'@q
ˆU4º#±lcö‚a)fÂjš =+ îK÷KÿoY&T¯y.[ÊHzKŸ]›¨ŸÂ °LÄItvá:\;…K˜oªû(…Ê|‚O³ÑeŒüˆy3Ö² ·|Z2VyÚ©ì1,.©|=N`‚”)\»€“~ó<Ş¬¹4¬2l•ésyµlZîØø$'t¸îÀ“óš?$ÊD¤°Ü´*»(ëÍ˜Ü×ãÅ‘È5tb,,gği4¨×
!Ïp“é‚yLúŞî“}Æ’¸wCîÇ¦ß0ÑFÉµ945/wqËX^¬Úª¾s¸W1°Æ=ÕE‘{%ï?X“¬¬,—ìÇµ„!®a,zÂn3)6Óş$ˆŒF-ß-	ÕSáF™ÖMeìZØ²ï¼Ã›‡‘È)%îè‘²sZD™Š`"ÙT-˜1mœ†ûcPì’)cb?©l3/ØœÛYğ^¼5G7 ÃjÇ¨Q›‚Ş†Ñá&fôsSN^á·u%Óyï>ÅIÄ#;åÿƒÂ‘dÃ/—ÿˆL1{³¤èj¨“± Ïé[!iMÂt»€rĞ^t¾ë,±ç¿+¾4[3;ÅYj¤}`ìS"k¼#«’İ‡ŸÆ-	I#SRän¥fšçM½IZtBÆ òY1‰´ i®}ßúĞx j×&™^‚4O@ÈwtIvİ#J¯ä'»qCuéùj¾Ø©Ğ¡”Ìµß?ÒØ¿z5ËÑ€w53ş{¨sñ[p3¢2lœ¼áÍİ>u¡·U—|@ıÇA@¼,u&4®™¹œ4¤Íä£Ê™õ	·Tš¬t'¦ç]ËCõæè´ŠÂd.†pæŞ`CŒSÚ%*œ‚e³ŒÖÃ0aF§>psKÓù%eßNC|Şh[3“Gè'ü18¢Á¾DÇ“Ú»$!6CÖöâàó]Qç`3?ï{Ù©œu×ï«õÉŒ”ñÿÕa~û¶7ÎQi¶-ÌØÁĞOo(á9õ¢W‚Î®…(ywx`„Éİã[‡&ëôZv¢ºìïr€cÈíÃ´g× ˆ¢ cp:·Gu”ªC˜Ó`şû×Y—:[âuT,nİx1*©r~&êêÇUçAë€)ùGÙoŠŠİË*‚€ÌämLN)S1|RÛÆ#ÖÀéÜ¯â¹ìNGqâ±ªä3Ïÿš;z1‘å²jywÑê}:t˜O!6,?*'åşq¨fádlÖ\¥¡«Ö÷è¨Üúeæçb>W2‡şo‘É¤RÂÿ±„%òØò†–µ’
ß‡uNvzÕºÕD2á2ß§RPwšteÑ—ø‹[zPıù§+#öïq§Üš¤Âe¶‹Ã!¬Š }¬q|KlÛ?wîDQ¦Æ~Š8şà*Ow×Ê±D)%k>‡Ca®Àe×ÓÕä¥S=«¸òï{vF¨iò¤©t¶rfçS‹{ƒ%–Îó;v9‡Ã*Üé·M4ßn7š_«ozà»×Ñpı"ë/h0A‘–FÌ™.-C‚ iÿ1÷¶¦fYBRıÆ¨
º[{¡Ôa0ÈEïÓµœÏïÍ}¶|Œr©€‡9âóÊ1«:›ö^0oÇ¤—±º(Hê€Õ’LV6}Wt½n¶é@ŞÇÈP…
¹æ—mm£úr¥svÉïÿA>LhµgZFË»-zÖYlŒ	u¼œÇxnÓ@ÿR@a}$*ª•5ÿ„5pìİE^"ßoãÀ/º'xŒ ş¥nxô¡3{%¤k¬£¼U^T˜ÕPî_˜l€·!öAø_âñÉ‘P²L7/ÓÔ“õAî»zÇ|fš&ˆIe9ÌŒC(ÈÆ³bäé«{¹¥ü%Ù2X'Ë*“NèèNÿVñ—G±€5‘Ş¸öş~t	ôhûçåwû‡¦o†®Á’‘û ÿu0NAêGvÃÄU—½ß@¢pÄÊôˆê^ÏüIš¯™ÍæŞÙ,â÷6ãÎ4'wjR#Õ~MDŠNC©ûZ*Ãµˆ$ÿÙSŸAD¾²&m¤ƒ[ôf)OÓUQÜv8{,1åùë-Öª3ŞäÍ'Ï6ÂõkêÔ E•và,ÅM#’ÍDÙ‹«F™h¨îP!’99öŒQä…6»=h·t‰ØO¢2œÛ®×RóxÍÄúJœşÌô§©’;*~‘“¼çè/3MÊ>V8/7v§ùÇ®W¶Wï`Àë“Õ‘T¶!§‡_aHÖ¢ J,s`Wà~|ÑÎ¿=L3ŠlN+â*éH‚“¢âæz°q01%¸4F®0eGS˜ZêiGîht‡7Ò¹„ø]ÂÔŒ“Ãëñêj\E¤„nª$I^+bG¨Gê?u¸j®v÷°œoÁSğ"E"Qî”ÄvÛßñ‰z¼’üÛä{Ÿ u°…÷"{‡˜Ä¤¸ÄşgãU#6Pgïµít‹ŒCœê@ı„tÃáÌÀÑİn{/hŠJ´l:Œp¾^7á<Wr‚a¤EÚüÊqX”,ìŠTeÎõõq*4É)¼ÄµQœ+¦¦Ø+B~?zbSlIQ“©âÜd%(i¢$Úú´XøœfçˆÀş&­uud— Z®·¥üÕ…ÌóÏß%Íö 
¼èª8^Å“Íó£J¯u ê[†Ó»şo™ˆ –ÎPåu½LÔ——ëËœ[iw°±R˜BÄÓBºxÂ–ªZ&ˆÚELüİ¼7Y‹‘ùçywŸ }lc…çp®
êlğ“¯»ÔŠ±34£¤€¸:ïPD	{Ì«³Ïã"›äı9r°¦m-±óÅ3.€+Kv¨â?ğ\T-kÍ–¦%ÁÔ¨GMµHÔ©¹5z	Î*|ü¬¸¿İWL@¹%Kk‡ÿ‘],wXĞÚ—İ>İ¨é‰ä©+®f>]t‰şœîÀrq$h÷]¸£W›v+œ,)G ‰Ò}şù‡i}°ä°½šR¬ç¶Î6 wu(’G8¢ˆÖw+q(t+©<Ëõ'I	5Ë‡š0xulÁ­ùœxá›7Ou¼Ú™§–İÂ³†œh¹Zr©u·>=¬M|¸D>³h[Z¤2ÚûSäJl3{Ì*%í˜/şUàñ«ÅsÙ9k²œíƒ—,Uß¹­4P£ECZº±(3X	–/‹ÿ–ò#/<òéúš³àÿ6zŒZñ³”Uø¼5#…»4©Ğ¸PµŒK´€5JFL	êÍ[”ˆ³¬h‘S­W2·E6¹ü{‹­w»g÷µ¶ü·ğBZÌà1ŞNó£B£vˆªMP8©GTÅ~˜ô7ÑSV`~µ[$ÊX­kÏ#ÆNv="ÊDÇ¡Ò—dSˆio3ªõå›#wK¢Î¶¥‚y 3¿³òëšœ¿Æ£ĞÍÆÿ»€¸L”¹A¿°ìC”M–v•EÚ„Ke[öü1Ç «ä#µ'ºLCùÀ&ĞLüVÉ.[Åƒ¢z"*QMš3³ÿY¼(§€:“”Œ¦m‡]Î«i¯…»‘³¹<:N…EQõnËÇf‚à9¶|ÇJØ¶­3¦úã¡nW™ç°Ë¹"ó’0Ôa(RˆX©Z¸‹HJ4ıG¿š-1iìpè{®ı.OÍùËıé¥=H`KÔó_Læ©kl®KÿµäX%‚¨ë›ºı,ÿe1ÉHûyá«–_–+/>Ø¸É™(„RÆÉ½”^q Št-_’LtÎ–{{TnéŸ1ŒİhtÜ·Ç/ê˜Š
~ú¶¢¹fm#›é¹½–u]FsnƒæGÈÁòY:æ´§øŠ®®ãsî)JË n¯÷ŠÄ‘–3)¹¿uÖ¯.f4?ùë4’á´ZkgSçIÒs\ç‘Ê;ji}±Èå'7ı2p×$Ä§|e|~)ø6;_˜sFëè<RşhaHÆ@[5òñz&¢ëÍtAV­lŸlE ÂÜ@h[7#29`ô¥k(£Úğ¦.Ã@³ƒâOµ~ª¶m®˜Ö‚Ğ`£÷gÂœƒBYË~œGI:pèw²ÄØZøÆ~¿,±(ª~“±WÌõOL^ÕÑä?£o¿×|®*˜c0ôA‡ŸC‚álë`-ÃâÈ…4×Fj$LÅkF
›$aâ••i¹;ô¶ºf‹Á£f³8&‡=QC‘ëI¡#>ÇsÉpŒŠ^G)!#ç*wVKGrŸT¸’g«şæÚê^Ó>ÿj¨à[aJôõÒ¬[.›–•)–‚Ò-ŠVš-	LùD#„½Uóë9k‰xlE˜ˆÛ×zAt
,È‚U^à]Oä–Ø XzÖAòŒëŸ€?¶™Ì…Ê]môÌAÇšRü±›°Z½j¾ì:îvA±©¯Í¾äğÏn	†‘uÄ©÷2WöëVµ«âÊXT´S^šBŠ˜áû˜UŸ #Ø)óØÉÒ÷ ‰fy¥y HÊÛ)„¿Umğ³/²&0[ n^mvÉë{¸Ñˆ½Ò#_¢;V|Ë=nù)y˜œ9†K˜ÈJ_·ÅUó)=pğiÜ&Q€ˆóq';(uRÔh½Æ2#	‘ Ÿ=EWnpÕĞªTƒĞs
">píÄ~âÓmï·–nÇİ¯Œ8~Ì>’‡ôü6(òú–­
‹DN†Ê“ôú´_&t1’¢TØ¨R)šv¬gãÚ‚ œyµ‚¡Kİ“ò…æ#¡U÷¦f©¡
‹D4½.¯#q@ÙğFùvÈw•¨‹¹j+š*zL²“å×ÉıÁ>­‚ØdD¾ÃÌÄ§Œá¸‚Ç»,ëq…ìŞZóÌ§-øú+)c¯¼Ca(çÒõ|°zR–av\¥=Ü+f¹;ï(…m‡ÀgÆÏgx9?%ÉG”2Ï€‹w¹’Æ‹ì¹yÁtû!ìiÂ¾İVBãË­(Ö†¨9­xÓiV›YşvQØ_¬8®˜©¼çŒœÎnI(lùêÃµ Æ§b¼ı¸eœ°x/[Äş­ôØ‚§éŠSö´vÇš 6Nı¾ƒï1Ì
JŞáX8–a¤Kjº,{ÖM €Uå.Æ–Î†cw0Ç0ò&¢q,Kó Ì…×ŞÓªi“]]-+wˆN f9üAK¢ôqÀÖÉÑ«E¾ÿôÕ¶æzŒ¬œN
»<u„3¡ò×é÷’øQcî/ÍÌí÷óÆCÜZŠuÆ„ëÔº#GíÚÇ³x–ív)›]Ğ/[€+¢úUeBVôƒÜ„‹Ö]ZÓjG&©kdÅ‘Áóq/AÑ¹l_©;@“ìËŠ·½k¥Âû¸l‘¢¯¶U“ÒpŸ#æ”·¥P¡<eS‘ª\É« ]Eb]S¦Gb0¾ÿÊßşHÅ`KÅëÅ›kÀĞ•·2ªÀº?­\dÕ=ğ.ƒ\ag‚0;Î/‰ºÎk§¬¨o´?;·	j’L’Âç•ê›dÏ ÀÅ#vK«Š\Æ3äD·CA¡LU«ò1ëÅÔÄu`Pt uü™„6ÿ^Çü­±óåËnŠ×ğ "X®º;!Ò¨WIÀW¯´@qw™ÆÀ;ÌhtÒç¶qFóY»ü’Ÿ;ÕW)¹¦ŒÒ5íÖªÙíPÇ´ğµ1ŸŞóTvp€Iô{èÅÜ©–Ğ›‘hNèÈ¨‰ëˆzFµ½;¤dakth2l†xXI¯W·óf–ğ«ZÌvÇ6æ{üŒ@Ó\`äÙü=~Ä£‰Ån°{î+£ÑÓˆF.•õå"ÈFÿézEjHZ±D¤>‚7ò»4,ı—ATb^Û˜ûßÃÛ‘wì¯K´1½õqì¯gŠAd‹â,‰½x"`Ş™×&š2öl÷wŠ_¢I·fq,’KW-E± ~)7´Ôb¥ŠÈ â†ùÏíŞï§ØÎÖ@…c‚Ã#J‹rÂ÷ä­u5‘1‰`|Ø}6WÏ®Ss?´V]o<€?Işˆ[L›	½·İºˆØ€Y¥{bÁ½ÇÒ&º‰eT²»Ü15¦ ğËdj’êÌYË™d@É>)Ö‰ÍILòa.k-1‰d+ °vŠ€QW&?z ÿÑt^²ñj©Ô}[©c,gï–5‘d|Ú*'âŒXŠ=ßvù‹İÂ½n{ÌFÖn‚ö­ÆÒ¼
çÏR…(w¯áÆ0”,¡Ÿ-†€Jœv
[Î
ÉQÜÏD@²V/€ú\?Z–6²ÜËMW†U	?Ê­n’²mP¦/}t9i#ÔùZµ<2î‡	µ¬È*ıŠ°wú™U–aµ¦÷ÿgµ åşæÑ*±û¨ŠÔ€„r:=r›aúıı‹†¬Ì®¤[vèÿî—ÆYkşNóìvóU¶¬ÒÎ÷÷ JûÙ†]\ ‘œ&úì©È©.{;VìX¢p/a
S
Šìáã­Y¼áÍ±i8¬¡Q§éXÌ÷FIÒh÷©_ò;ÿ²XÉuæAğ.–„v:h1»æ;t
§&ªµ0–	w¤£z°ºY.ëMêÜUBéÉ)e(ÛWšZr=æÄ¨¡9¹¬ş£œáàÇN$àMáÓqÀŞjéXêX«q½Û©á.œ–½¨r¹úÕ°–F–`5-±6ZÔŞ¿Üñ:¢Å•”Xj/
íÖ3X6»!¯ÇR /æş}Ã•¢•´¶†­U/‹<	ß.½¥XC< »1Ìçè&êIÿYø¾XèÕ¾©µßW¨Ç-¶„ÎÃ0Â¿àfiVI©áĞ"¥ëÅA'T3$ù•¦wƒ_X²–û îNH£çR~U6;Šè––’şYš0;½/‰ÄÕô4=n>õİÓªa}fË.È¶ôW§r¡Ä•£  K»üÍIO$¸Îût
Éz¿¿´à;9ÙGì¸´Ÿ»°ıæT|T¢%”úqn#|•ëÂû Ø]–Ä\K€Hõ¨M'¼ç†hGJAS£åêRUå3Ô²W·öºƒËÜUKÜ’ŒÉb×aS|0ÕpÂ™ô<b¼IN÷V’{d'®×væ=Ğ'ùWŠÔ§{9øRI¿ßÉDcx«òH42 Ê—%ÊOúdf=2wÀZÈ®;ÓéøâùfÇAÕ.ªÃ*'?mĞŠ 02´¾ÑiHì ¢>€šk¹KyË2Ú&©.R\f0Ò[ôÉ^1y…vÍSØqJ…İ‡¿Í¶y‹û\C0+¢ew}Î†TÂÔŒôaÎ×‘ş¾•SÙGéâ]u«hlÚ»­Ú„F™ı
CÖçè[cÒIàğ™Ãªå+© GZ†‰€&33ëMaô|Çªü'k=2Fœ½ÏØ0ŞöX½Jiù¶´³R¨”°uĞÊëç_ƒ¹­š´ßk¦¡Ñ,´»È¾ÓËs]ùC€‰gìµzëÜe}ß–šÄm×Øµú=>QXüè!àºDíšVr·—ñjıÃ°ˆ>E+‹Á¼˜¤+8='`‘TæÈ~ãsìCñw)vôş"ÈhïÚñÀ’ãÙ‰_ïíÀÁûœŒ¨ZŠÖ˜' Š™‹1‹Q¬Qµ-ûĞ¬YB¼k2Ù|ş:Š™øHé¥€(8U~º€EŸƒF‚Ş²Õöl¬©‹6©Em4£`HP|…YŞÁï?ÉÿMkc”~~ÌF$»¢¢¸s³¼´»¾yóƒDÃ(~°[ØOn/NREnaÚq§¼şÚ´I¹9à'áğÙ¢Ék,m¯Ìu~¨p“IÆïŞÚHî¸SëÏªZ›¨mgwÊcaÃ‘9bÚ‚Š—6ÅHõ1ÒQi’I?4© ÓÖizw6ÊYÇùºIP©½mÖ<Î‚o^tV¯GlP^:æoÖš€Úõİ‘``ŸBtkpE‹ÓF¢B¬ö¯säÉ~kÒÜ£âIDMÊd<!“ùïf„`*g¸IA”êNIâ}k®îŠmÃœÒ2r7àäŞ»+FQH›6­Páå#Js÷R°uÈ
³¢< :DdPZ{è—x-°Ü?¨‹.zËEà–˜ú)æÎGì[$Lj3Õv©´úm0í|ÓòÿıPfûÄx€éuĞár¹>ôœ‘ÌzÎ\ÆÇo—…Ê¸ìáøøRÜÈÒ%ù3X*>&«¼	ÖÆÎxFkà6F£ËZ³ß’äækyãQÃØY÷•ŸH¼Âœ¡¤Vü=jXí_ŸÌ(Ç¼›Ë5]³«‡ï‘fp-À@")BeJØÖE5ôšŸ‹î´Å^¸z%×©şˆ=’ŸÚ£DWXJğ"-¢ÒÏl ·åšŒÍ;w»O”ºŒëäĞ@ğ¹½>Z¸3›¨^¤ı]© Ò`¢!Œ²u¹ å­«dªÍ-’ù—swnŠæÅÀ¸öŞy–ÏGg"vç˜Úe:rÂaÙ„—PlIt`„´í±qÀ)µeÚMc½›vÄ[¶û'U<Xj¸©cK¾Û¡ÅÆıjÇ6*L¢c…i£~ûHÅÜ¤=U²ù¡zóÛxÙmängïO]Írè[İg`ªw$øyüB±\M|’ª_3ÂmÖ¥Š©•cËâA$§*±~†¡œëRW†Ş"VÓyçÇsË¸	KVzÌ®iıôÌpUü3ùÊêdøæè©ÍGVTÖNÂ‰+¨‘ş²­ò*Tüá@ÏáÒÇÕÔ±$ºŸş»ì«Q©<el®™)€í™³Å™~‘íPÿ¨ê”éÿU„¬,c‰»É\Ô°9‹—ş=ß¥ê]Ä~ …3FaŞÛPG:Ø 0¢ -q2nD½$ÈW¯¶VI`îN!Ş,Àwß&*Û,—@L3èæ´T"wÄEøµßŒÖYHtãIKÇ¥* Ûê<f}EÔõÀİõèæİ$ôPuj9Äl†¯Í
‹‹	IÒhŸv¾üÉ…E(©" "ø#x:3ßò·õv”	³şVYcÜõUƒ)Ò „ƒÈ¼"û>.80ƒæ=áÆBE¾rÖ±(M­î9íhqÆ»X­–Ç¹^â?!\:Ô@Y*MèÇë_7
›oA!¯X,óé”Ìúw¥’â$„ÆSxYŞJ•¤ÆÆ–/q.x—Œk´•İoÅÎ	èfë¬gwÑ7æ“'Ãç½o‹Øy!í#âTOÖ$oÊ`W8ÀO^üÃ'ñîÍôÕ«€rÇ°ø.gŠŸÜİ™'Ÿ­–İ´KOP(Å#Ñ}–dÓÛË”‚½Á¿@	FÀ¾ò_x˜ãÓ­½
Fğ|÷¾–/Ü„“(oì4Éœ*ê„‹×5‚Ûá¢^,…^°åXÌ4gÙ¡ÜI7O}Ó­¢&¯)j[Ö&7r×©°é!Z±ó_vz·bÎX4…dQÏ€˜ÕU¢E¾¶YjÉ˜h ¤¤¾VÙğ{GsXJfÔşZï !XÅÚÉúkÈP‡Ø·³LÃóçh÷:]Ä““ËÕˆ‘¬)Î «!B‘(¦_&Ás¡N=<õËÖËûQ/^ñé96¯lK.Ğşş}ÁÅÅÎ
ÒˆùÆ~óãxËnc=&ì"#1ùÈnW*gªoO§o©Øå˜Zğ¡«£Ä¢¡ÔÌ¤ƒuŒ†¼ Œ¸ø~Ñw“˜WƒSH>½ªÚ…z—‹núY*36Vi*pAj–ü1„¥]TÆ’˜ãj‡êàC	@ÄQi]ëEòc1ö”9s“µr<g¹ìÚğ!4ÅÆ-Ãœ%óJ&Qwh³òHœ³fíq–‚Rèá «÷;$ÁğÂ[·!(šIÅË	~=ä˜¶Er}F¼LàÇm}?JÒõ6Ülµ¸t)¦Ò˜ÆÚX0´E`O~¨¸·=ÅÒÙ
hdğŞì¼úøÉÉ_ÙÛ°ÉÃìÍ¶Ã$ÖØòÈ¬[ilŒİßH[ìRz»NávdVå`ßT¶¼C}é÷–àIF„[Å˜0ÇQ&¿©\1˜8•¹Ynj[ûùÃà…¡Ÿ’( ¹âÃ{ÛD…Ü	K1œŸÿÈœ:W±R¾”‰1°‹='Âm2©P±œéÉJXÆWĞÁ~à×¬ã4¼YÚ7m›fiñ!mÊÅÍL/6Šß[‡_÷È¿×¶QÁÎ?3‚t¢[ÛxÉ·Xóàhx›ˆE¢Æ¨Lıñ$QµzĞ·‹‘A¹áglÃºR¸Å-ëˆê¢ˆpüìÀ+'t>ì™ˆ µHE`<cĞ_wèc‘SÚÎi·<µûŒnÒÅs RSÀ@VM9-SN| D7®ÀÿÓìç·ŞMÿóåäôÊ/J…öts×ˆ¥HF2Q|-í÷äğŒv†\k“ 2G²j£ºYb*™ü`D«Zï&o(şËÖH;w·èÊ¦è$Çö†“ÓU¯³z>fÔÌI>Í¼ŒåÁv•„´tG«€f›2£‹Ã}«ªÙ”6X4Ç¹³â2ç“sVÓk#bÙ[	ÎYaÛ;İYæ®Ş]m¶7#ŠÇÙ”0ãÉO{ouÛ„lP‰9È¯‘Ü(íÑéãt3¾2Q„İ˜¤QŠÚ3IB~¶Kî¦‰Øköù>µb¬lMä÷ñzŸÓ,ªÛïËÊ¤–´¤LÌqÆ‘oX ‰işs4ÑaA'Sx´ñë8àKß*+°g.ÏË$¼§ÚËYAÒ–éx¨¬¦;Ä%àÔr±CÁ§V¹¯4UÇ@ßáñ^šü¶¹şôï<	;Ñƒ*Ô/¬B)©tõš‹®¿¡êÅ‡ì4H.çe¾lDÆül}V_ß—ı‡HtìŠæœénßvóòêEàrªŠû^–ãyh0ÉK
íÇ³/%ô‰Ê%>üƒƒÿğèœ‚¼€Ä&î™­T‡%™tö—Ë&d¥¿rûH¼ÔGOÕû¾1k,ôÆ•ØÌd¨1›sØX°
ìÂoñ||Å/¤úF{îGNÑ­ŒeĞ&h?0e
pº¯a::¾i}9X›Æ÷™ï'ÁÊúìb9ûèÊ[)ı=©â KKNÈ%0çpöİ´Î}!ç¾5ŞùŸx?SC(IÔ%'! rg¡
È‰ D”†V”<;¸yãv’Y5tcLŸ„B7¼ä­dÌ
„[ƒym³®«Ù!xä;qV”¨ôS•ä™¨),§y•!ÙWØN
h§XÇ FìDx5‹-ğ5şÅªE…™¤7à{É¼W¼¯·rœ³s”oÎ˜
%`ÃDŸ$#ú1~ÌWdƒSˆ÷-Èr6ÂI·/-zcL3‰Š(Áj©P•ë›c»¹*[ø,'
Ş…ÛÇäæ›Üef´œ>òi‰K
j¹ûs 6"zUüœgà^¶ êšÚ0¤CüäÛİµ¹so–ğ£€µâ@_¿n†?¿ÔğMn†FdïĞE3%@1ˆ.ïW“0Ê¶< œÓºÊ kåãk?¦-Ö?	Ô*4às¼B†#&©úlAÑÙÂQyQB³v»¿å÷	i5¶Œ	‘T˜nr#àÊ]×´Ş;Ãã…¶âwàÓÂŞ›~ŒTcj{ï >\–¨šö&ÜÊ£ÉÅ"†hÁÜ‰0!«ÏÀãÉä’jZäüñ:Ùƒ‡QjÏdŠ«§Ü¸¸kši>¨%DhUÒç¼aqo²çˆÓbºf)ô3j¹dß[—@Üã£ôƒ	ÏìIaZ3l©Ñ¡Ùr_ŸçÑ¯†|·‰¯ƒN	÷ÇO¯ƒ­¸cë+m-Û0CEƒNš	ï^R­MhµÆíåŸmfw5ÖHe£Æß”Z˜~óÅ<øÚo_j‹WÂ`ı[åñK—½Æ¸]jU¸”®f˜	ïX¡Ÿ5°ï	úÚi¶X¦¼€¤óµZj(†‹^Î¹vfJ^ym“0¶†,~°½Ö#ŒTs³M/#	½¿RÔ Üs_¥±£Ü»4«Hò›ÈÍ%(z2r„rpó0I›7Ñï0¤{7ğHdèmËAÊ\øG,µ@MYæ
“©Nå¼zN\nC01Tû–3b•8zZysàÆËÚÏù¾ÍIjCª €”ÿÿ'!GÅCywHP½H¿˜CEÈi`ŠtËjúÎº]ãn6$:´äü¦û|Ó˜= uYÌğÍ°Ò¼Šb ,ifÖÆ‡£ìşæÉ|* ÕîkĞš†ÚqÊ&d™J_zé	z÷±èÅ-z ŠúÍ»#ì¦¾ÈAîZ¾_z©#ˆs°±Ê9Ë\J&CŞ«pÁ'ˆ€³FfrÃL|Qg¯‰‰ì~ù‰%wO‰°9 â\[-Š—ñˆî=kC¯Üémreşˆi9cÁÍ’(?i}YÎ¼ÆéG¤Y3X$k‚?O[ddÔ™DÌŸd/hœÚŞá½ãI­›Le?:¥= È+·[°~Õa}‘ À‹±"LîÍüS€'Ô—Ÿœói¤èÄÓëA‹@xî¼I%­¯üX\™ğÈâ_)¤^2ÎçòQ-ºp]å@/ê&oJXéÒ”¾q®İµ{‡—mhm`627æâ
£Ä_Z\«˜ûØ™S¨Ó}VÓöİ3ì‚ØC}ÇN[î‹Á–£ıçîŸóĞT¡–Á[vuåv=Yì¬¢ OM¹(ù§^o¨‘Û¯ÀWÔœÙBÄŞ.MBæ„]t*+Ã;k‹iµN„Ø¦'úŞøĞX‘mq×1´ËÀ²ôg\Sæ›„ágâLşI¶ıÜ¿M¨#}v¤ÏBQ÷aˆ«s³@¢Ôë»)Éh6™fºG‰Ü.İí(^UÁñßÚ–N%GÅŸ»-O>Ã°œXºÜÃÄÌ7túBWËÅxuãlàZÓ¤ÑƒÄöé(a}lâ¾®Š0Ù¼8Æıˆ}7VÏ
W	Õ„µˆQ¾r¹²ÌN-fİ‘æ@DÙëòOŒªÇ¿1Şì&pä1”ê	È|Ò/›¬¿¢bkÂ`Ïã“TÈQ2ô¦0È†s(èÔ5ÃÛÛ|ëkè¼V¬Î»BÒØ·zµ=)›(¥ëÕÆÜNh×ÄºşÓ´¥‡ëÒËÈe˜Wÿêt^ª¥¡¬y¦›mÔùb”?â®âºØ8°vènÀ@¾—Ñ«¹7ÊZÇı¡8K¤$Ê{É¾›í*¾M÷½›/ˆü”Ä‡ÈÛêp¼ºÖ†³òJß1õ	³W26b¯xå§pÊî÷¯Ohı­Q‹['r¦iïÚ	|ìªëä9¨À(Y”	`ƒ0¬ö'kxåöVÔjtãÄ[­cùóNs©ıŞ“¡¡cµ~º\c&ôTC§ª>°Õzõéõ¯€İ–ş†BÇqİÜã`'ßºtğ1?eåæ^ÈU‰l…<&	@Çsí4K ûşp— Ósµc-ƒÆ›ùô‡\½ŸÚ@#ûVñP~•Z‘kE¯hŸW5£aƒN³é†Ğ—€êS>›òEF¬²ú‰•3r4§àúË£MNr½€·´®Dìc(z„Ç§ŞÎ’Ç*Ø©	«øĞ¾„p„Åt8	=XfÊ¾›İ×°¯&-4ÙïÌlÒıL·ú¥šè†6Ï¼y FŠ¬YXÖvoU6M»ÁË”FX)]—]m=dÜw¢kÆŠmo÷Ã™ªÑ¤WåkB–¨àk&(ã‰”SbTÔv©D«½fKˆ3wha5,\°(nMM„“Zy£ÙôÂ‘fóÆÏÒ¸{f•üÜX¨ªEë-ÕYUı`Ğ=4¿€gÆC+>Dˆ¯{ ×âTœ"©åğÿ„c‡yö÷ã3»r©¨¹S¿©–Š†s<&%©>Œ_p@„ûj&…0¦9ú8ğ»İ¨ôroûÿË´kíHì9âäÑˆ)C½ ıdÕÉÒ5 ¾°ÂS}[²2‰XÀİ}
Ä-Ú´ö|aÃ…É¤—#C÷¸¡ÏóñßgÍ}îü®¿Ğ÷_°Ôßf¿#|O;ÛçRæÑ·£¹ Tan‚Z™@Ş$ô‚yÑSÉ+Êácƒ;=ŠWª ÙŞ|8[†¹°XSm9š{Q×ÏLTÁ:!V¡Ñ¾¬O—“û:ûáXøÂGî¨3£Šï1‘Ëb%½ğ¾²”•zıŸµbC.ÈÙˆ§ªd¬øëIàG@¿±“@ı-+ódÌx¥*;oL(Ïù!¬AÒcÄ¿´Ö^Èæ·0E8-Ë~T_¥™xšÖŠR)9ÆÕ+6Ÿµ¥Ì9Pôo‡ç} »Gº3í…Yµ{Ük÷šŞr?Äqäñ6	k…ú[‚c]×¡	Šâ„ñğØ ŞÖó!á6¥)ZÑL *T¤­%cC=)ÛË­‡’P·ßhnç¾OŞê0iİËÄÑ›sì®qÄLH“CJ>ÌƒÓåŒX*T^’ßÁŒÁé*­¬ú`°¢  CV(;å—F)aŒ/r9ú]Nµ7¹ØW!‹L¹ûá½BÁ>éÒ´M4£Í³ıö<ö‰ì)I´F5À&ü×Vòkx±-^Âdk\Öø8™ç/A%£î«§Õ½!·O8ªu ‹€G<X°êeYwa§A?üï;ä³}ëˆ§ °ï.ì/¢LÔ’eV3Bn’Æ\ÈáVõp4´Ì?m,ÈÉ™i¸h6ÿãqjwZ/H?D§¢+½‡Ü:Œ­k ì&.oÛ×&	Àî9É#x˜xŞèk¬ß?æ	îŞ_d1‡;ª«Ò†CqïU0e}•#ùçÈ¥Š@‘	Š[)­¶¿¶Í}Pş½à	ºƒé<ÀÖSİgó©z®İÏaô#³¹'›ë¡?†ù„EaŞ\ĞÈJf†‹æ0Ÿª|vî4“a#º›×xWjLdtW¯?B=Š1#­Ax›µ»íE(@úÅu‡ç†2^Å
+M4eS¡©ã×ó7ZöG)9‹~’À:˜ŞlzUi,çfQ?µáÿfgBgÕÓÜÈv\]3¬ç~;„´PV¯õTq£ùVpv)ÓR±‚ËÉ›±#Ğ5ÉLƒu2«şsŒË¥6&¯rvÑ'è¢–ÇSøŠ&XBç…‰¿3˜XŠ$¿T8:K03µ::Üío+œuX9^îp6K¢®ã<Y‰3$TjµU¸S8¥½©#2AÒüvzªµ*§6’ÇÎ[çõ¶¤‘J³;¬ˆö¾ìˆÛ5ŠB‡K€HLŞ9Û9–×Ñœãv›ğD%vFÒ»“ğlÑY~7º­ óhW®O`ú¦&?£#ÌK¾t(µÛjM[ú;›Hsxæb0PòL«ö a—ZÒú²hŠ–Êr&PÕ&a©hªèãÎe:ïûîÜGpYCìƒı¥g-‹u¯©ñh¶‡ÔÃOíìÒ¡mĞyÄ][Î'Õ^r.Šû 9¼‚Ö„c®N^q¬”MÀ“Ü^äZ,a×Á\ÑË§Á”;^ÅdW9²™Ù?âsOÁeBÈmÕ@3¸ïr<_Å—=‚Id•‰Ğ¾‚ñGÍ|ª¦!”cÓhœÙA†Fğ[Úë…üs‡^©Méšr5©…’'?½ö90¾©>©,McİK›%ük{.p†¸¨’ûçh¹ø“IÙc®´3AÜ8á«Jş<Çµ:åNût¬¦§Î¿ŠÍºap¿Cú,Ã 7»‘s™åª­ñ’­w¶IK7õ™ßÛßÃ J*®!€-„|a‡"–[ˆ} çŞ	.5C²$Pûoy=ww7ƒ‹ƒi,\#¥Ã}÷å?S»Pø¾ËˆâÌ]Äejb(…ó@Ş©	}vh™“µ¬”.é«}tİ êX54Î³cg3,ïÛÀlDmgß“Vlİ–GÑÏZij±È&ŠEÎÙjáój˜é”÷†œç÷æ7>Rœ=­`ÇfLÅágÎÇñp“P:Òâä?IaM(ç‡=ØÛ"œ^P#="‚i´¿óeyÈí›¶T2Ú±Ş¹	4™a[^	”¯¯o.£ğp3à}’)›WRix\¨v*µŠÂº,w·Å1™šp3Æ‹%‰ÄøÏŒ»WLœ0¼§y…NÒP<â.TAFğ<ƒ
ÌÂOÚÄÖ‘0Ó¼"€ˆ»ôT,^çhZÅÿ)…±š2Ô} ş#$ —&ü†·Ç×=<Ì¨¢ÀÊ™~ÔÙ¤Ø.·1k@È2ˆd`­îg„¯jjîvÈ‡,1ÛÑ'R^=ƒJJˆ›N 8$î—O|pu_IeG[tZ{şâ²|äx}èº¢…XÁÕ¤Ú	F¨&çú¼PÓnEg#İšíP{¼S÷íİq:Tn€s›[%.½ìeø–Ş¥±¶ŒæÜÃ-0@‘˜Ş—lÖy%J¬opG€»ÁBÂë@LĞs¤fíÆBş×¼÷9%ş~LX’æE…f š ¯õgFÜ9çZõæò&˜³kÙ$ÍÇBğ)ÚL k;ã S’7MnúÌv&Mß~1õ£Ó:ëµÁDêZ†„åÙÄéºÏŠÂ>½&ucZ(cœ(rp_i•/„OÖ”îòÛ¾MsŸoÒsA¨¡¹óß¹›áx¤2úÊÄ®’ÖöG_ÛN(§e$cÕ{-g+ÌŞSR^¯ÁĞù¥w³[5ˆ¤0zàB-!«ñ¯K–€ÏMZü¿àY½ÄG‚Ö‘çî[g³–'äœhıfãghahUşæ7Ó¤êxÜ_É2Í ¦7_UÕI–±“1«*wİû°ÁèoHhæ‹Ü©7Q6Ï|pà!°ìKMS[µkuÚ°~xF&Ù£*|4®‰š_R‰DU¯Îê­'1Ü ñÓ"M|Í’w!_Ë/”ôZê÷ØÇÓU}B•6•¯f×DjÓe‰ÜÇı1Óª&÷Ù\Y–Ç¡FŸÁm»í&Iğ‘‰Üwøôş?‘‡¬iBÑ ±îïçòbæ—÷é¥5RF £/ŞD‘<ÖwˆğèO\MÜ”ã_7QF9*TYómËt“\ŒÃ*?lª¡’‘Ìá™TŠe”UãÍ‰ T°-^]ó:’²úğnì5–æj9j9êÂÍ8ÑÇönî?URÓ4}zÍ©ïüÃ½zs–‰öÄÌ"©£v$Ú”€kn†$Ğ/ƒÅtXJ»®•àxVIã/WãX-P´1ò4:—FO§MÜÑœHBá‡$ñæzd¨B„Ş>1
æE/¢*TìS¥½ìHwº£}n;¬‹÷´è š¶Z©Òîÿu7p:aìİª>Ë¿kùáŞ`Ä°¶Ù®ë}J£¼²–Ù´ ¤ØiÎ¸qÌ¦‹ÄdÒÊ®(=êáÉpĞÅoúØproÉµÄÎ2 Íq&%l2õÛ¤“ŒÀó»X
ê(_•s˜ö‰­dYçjtŸs¥@ú\rŒÒRÁq¡M>«]rîª‚Æ6<Â÷š¼Ó22#¬”’CgDLüc¬'o5–í¸ÖÍŒšâ [ùÅXß¨DããâÏ'9gA¥´İ~…—I£|0áˆRÁ“}#Y5M^Bë.eÿKtl˜óIËzjum—õúce*Ä;gò}|õF!/ jº-=YQØR'BÎÔ‘9YpÇÜÑ¼/s»L±Ö¿¶dw´Æ¾A _Ö¼CEÃ_Ãc/Ÿu²@ŞÕË;‘7Û•:ål#İŞÏ÷ÃcØóîÎÖCÒ—c=ÂNPŞøÓP=a£H7Œü_¨Úêy¤Ù”8sR4jú7{·”UÜ½eÓû'uB®v<¦áùYtâÏÜ^FHÂWñ€~YïŒU\I¯ü!ò ¸XB!4¯CKì¥ÈgŒ„rThüC»h3Ò$OLNR2¢)áLƒ/ïÍĞâ«ü£Ùe£ÁW”„Ì¼”ûşìí\‘mTn|Ö±“²@4ÄÜ„!†ˆEÙü2søÀ™£;D÷±v";³Rİ<‹Ec¶‡³„ºŸ‚™kË+nö9ñ©”É¦ót×yŠ	ùo£upd™Ÿµİ€V4ÿwD£|€İìb„]°Íú;Î|¦Ïó»œÔ=6xÛîx³_ç¢J€‰‰g@]üe»e9çx
ÿhx
p‰g3ôG1kt×Ç‚øWkO×Q¬ª}§ì¬µ”Œch,ïZY;2L›(ru“ÈTØFj~5âÓ$,ü»%.F×ı:ÿ]vx¤?!uÀ™R@”pAì{‚9
ÊW/¿ıÑšKÿ°éì9®Ğ5hQ‘ê‡%ûü>aJ"8”ÛF’¥×ƒò˜WaİŒ…ï”©Ga¸d-š“ãÏq)·(zé³*¦Ÿc@“yäéé|jì[É	ü}Óêø|Ù?{‘_ÅØcs{æ(4û*{ó9µEA"ÉSg?­cH›r6lÃ²‹®±"Kc\Õ&éñ¾“Ä€·o“ÇwJgÆñB@ªË©'^ésnÇiá*5„óÇ‡+R'´òÛ6€WùCfƒ”-Ãº‘‚Y=N’;¦TÂ›-’ò3i@Ê…³Y–~ãÿ¡”˜<Æó^¬Áó}z™±'fÿ}pu£|Š
Ô§®ê±¨Íb¸PmÀ^Z¯2Ãr^X;Æâ"p‹Ù'Û\İ§ÒêÏ¡.µPıbÓBå\	¨è¹R¥·‚“lO”P>"X/@m
—Htó+¶æ|oÂ>êäÊwoKlä8¹
?£jOü# s…\#ß¿L&UWÑÂ$Oœ	~+“T½îÍí#B™T*oo¨Ìì-¹&ïkB¼±ô}E×–œ#‡ê_GõµwGÓºö{L[jn[ dÅÂ)Tn+_WL­]ÇF& "1 ’ÏRšƒa’2rCCÄ˜QG®Õ?¥Šï¼†_”_ã	1†»¨`q È›ì¤Ë«oõ®S¹I»J>üò$¨ëVõLíJ~¬,ÜP—Ù€)¹3 ¬uy]uüİ	¬¼aJñ2©Ë§-a!ó¾ºHú…Ûíñ©¥H1=2óİYµmPšÈ,<1·×ÛFy<î±¼VÊ#¤ï2ßÈZ*{$<‡€é<ıîË¢wÂóšˆûSzÏ©û£”[Ï¡øê#‡¤¥e8iáè²Qj]`‹
ÏNËã´Vn\ËÌÍN.8ÖÁÃ…ĞIäTï®²¿|Ct?H/ñ¹!X“uao}‡“c³'Q UZ'vrû–†®í¸R©»ğÓÖàãSÀ£ÏIÃ=<oŸóaxåİh)`pxR2ÔÜù(€û›jOhÚ/h®•C—V×´l(ƒ¹§YsıoªÛVîƒ¬À¯m•¼ú2yaˆÙ#‰¬³‹v„OE:–:uÒ8;wÊ>hÌ¾eÌ²îöoG0SR¨7¹§æ´a{t³¨õ7ú 9µş0V¸·²ƒ	j«\/â_û®?"ßÖRbğ4ùv„k‡â£©µ^2_éVÚ°;¬CE-úìç8C…ˆ/¤<520$@ğJtêWJjE÷C;WôÌ5û¿×”,>/Ê`ÙŞb-?é	ßC½Cıs K` ú±`.Ã$Í,œ<TO‡ h[¦Vê×çv/ÌÂÈíH°Ëø]ÀSqóZÌÄnÏäçİ„jÇ›“ôy>H_šÌ	Uz;fè‘SÚĞ”
\iå‘„Ö¬*yT¹‡<R‡+îÀ\ÕK“6	Å)UfIÀ³-ƒW÷+éÒËzöoa °„Ê…CğƒXÛG€]º^(]+ô±}s÷„™Õf#|1Ñ [W’ û5{£e|‹á°Q}$2êo#íÇrX®|=^P:^Ë¼,Ù¸ršŞx‹73€|¤•+bî?Ñ 9üaĞ‘‘-¾œ¶WÊt‰áVÆˆ'L§ ¸'icwŒÕ°áÖU6Ÿ®¡§b«\·ãnçñ,™R`)yĞ?©6¡oY!áŞ¿)½LÈı«ş³""½U¯¨Œa&â¼):UñˆØ-ôÔgñÛĞnxh“a»Uµ‘Tı4áf§F™Õ|>…Ş»T„ïšØ‚4N•¬Ï¹.jÌ²yÀçD[n1Q¨¥e†E¾CùüÛ{â} §Hú%¶¼‰línuÄ¹,Rå$•ïQ”Õ :¡êa6ktnŒçÊ~ ÇrD8A?€9`¨z°v™ñÖºí6ËÆ-4	Ì3^i##È%ĞXL;3ÜÁ—Œ+¸”v_‘h<<àiNÕÇÙÊ¥æ¯eş¢Lp‡^F‹ÄëÌ²ì±\)&ògÈ¼ºE|5,úª¾³q l[$ÓrZ ÚéÂ6»ÏôÀg(“"÷yÅ(u9”˜8 A=Çv”´uVâêmt«J‰îÁ²šWz²ÎC €…–~œ§¦Œ´šPŸ(@m“D‹Œ¾,d¶‚cÑ}Ô£¯>Í0$-§üÌë(6ä°F—D›k»¬® NíCE?gsLù*ğ»ø
Yx¾Ì]{(3Q,tè„ÍA
@f§ï•e¦ö oƒ`»3{iNePg´)Ä›<F‰ª6O~ô W¥<ËšÎPÎbïa”’êy	«W²ünæ=6f­ûZ6db·”ö€~\#D•Vcûw== Ö¥¶ûÊx›*y·Ô<,¶í³rtå•_p• DG"Bç™§”üî1J½Ìœ†OÇU½™gkRW
wqÒ®!²7ï(ñ…]åé*ğ
~\{¾€–jÅ"ˆjŞÆ­)xëöı1Œp¯†½¾­BO6çïQW À|3rÕqüuÉÖ‰ÄæáíñŸ¯Æ¼tç™¤mTÆÈIa²ı{°{‚øÓ($şáRieÜÆV'—ëÿ’ãÈm½X8`E…N-ÕîÅ½(Aÿ¥ÿq	è„£Ôö:®ñ—ìsej[f9ş«3Eg?*„Ş<™Kgæ[¸ŸzW¼àˆh±^Y3²Ç,¦u„áË–ññ}!nêëbu¨zIqûü%¡}\—·¡ z&ßù(™=·Ê¤@âM <=¾|WÒÎñÙ1ú®ÿs¸«ÀSÏ«.è ô² õ8ÆÜÀ-gï€¡ˆ¾·‰(Š¼+ru¡æÍ€¡VkŠğ[Dü’]EøPíàùz·ÀúMdéâRÒSîK'i3Q6¢3©hˆMÊÀ?zß“YŸœŸ˜èı:³»;ù÷»yúI#¹$Æ¼êõÒ h%íå§I½ûÔS:oÄ?8œTç‚é ®J§ëÒ8ÿ/ :ÍÏÓ'C)ê3ÄËPÉƒ/y”}ƒ{Ï†Ÿ´²¹‘Â	Ğs©=­­m´© ‚Å»¾‡‹ İ~{9ARŠ"Ÿkú.v¥h7q,»[f7Ê%OEÉ¨_ƒğì®GƒÏr	(Íù¾™ò ‡•£’¥-bXÓ“ÖZ)Ô/Š­	YnÑÇ²Îîø¦á€†q‹&!Ä:zµ ©d¯J©Pß—jx¯¬ëns3Vršõõ-ûìaàPå~”±1éÑ¨r»›²s(Z|E	îV Ç7ªõÖu>ŸâªüÂÕvNI-	Èì½.1&B²5¾Iÿ¥†tEI>‰ïU· 6­OO ş ©hQÒAÂmÌV`”Ëƒ,0%?U0>>6ªº”('Ã“]]¼$YÓ)é–
±µ7¨—{r¹dóÍ“×Y.^ú'vŠ€³»Şdÿ£¸ÄıÛ'²8µÏ_qm[Ä¨8ÀP
şéô ö’ë'Ş×…@%åFÔ£¨Â¬’'ä²âîaè.g¸ódÄ¼ô…šÍŸ_z„®|¼k/ü5a­Éz}éÙ<†°)„…¤Õ"¤Úe¸ß"Ï!ç._e3"dZ W¢È†ÀQÌ	ÕÊ ‰Jº“ï M}˜zl»}Ê°„”}·\W.ñä¬@¿ğë&PûQÄïplAÿã©„ÓŸ“yd>me*ˆµÕv¹ø`Ü™öú:b² WšÀíæs‘‹¹0s-´Ó]ub»÷şäå¼:R¢*\İ;¦,{Ô>ßZPISØùY`Syğ2¢OşB£ĞyYpäd1¾œb©;¤š¾_,L€”ÜáÒÛô>eC(ÛêµØQ…Î™eá©êM|]{zÈ¸ñzŒO½ÕûŸ5DO1–Rw¼Ì¹\v¯(“§cwúíş¬SC¢A}Mb]P²½`4„N	(q”usCV	<Q=d‰¯[[ª(±°aîÿCj*m·lÊK“c·ğÊwlQÚ«ÍLË‰éiÖd4ÆúÑ±Ê÷„ì“Ë´X¬Z_ìá¬’€Ì‹–QÉ&ØøYıAúÛ‘á™ö¯èó$éã²j´˜=nœ”è²½•}ªÚg$•­tÚûZŸ,7ÌÒëc½‹Wz!5šĞOMt=„9İœQV{ØFéPŞ~°nYğÈ
ß@÷hmã=Šù_«ö&¢fièÑàSo®¼ıkıUÜdş|DŠ´šô¿¨j™ì¥sG$áS_úZXõîäMÁÀf»S¾g#İdÑ~®óœ”™uº–­¼cpÀ¥â¶Y¶ı…dfŞhåkˆ<%•V÷-fÄ(“¥Ò„˜EZUıx¹ªëKv=&DKà”¿×Îv®Ğ´S:Æ®Œr{Z®EÅco2`†”‚ğtâmÉdùšäÅsÇ-¤ÇÜ·ÄĞ3¿vàÙH/gk]»;u*nì‡¸ÿƒ´D«õK±ØÚš:ÃÌòÂaœ3‚†_ú=;67±Z#ç±¹9á<à…¸ØkSÆ„®ì‡úğ(§£ö>%yP	Ğ™vzBÓhTëúpŒoĞ¼§6¡±µ/GeÀ¶,Z˜K‡©m9‚óZpúg çf’ÅÓ
9ŒÍÖ”¼éc#Mq½|ÔFÌ1-¢,:ñRÑPù¿şßlcc Wµ,„avjliyá¢mvŸ™ÂÓÚÏ¤JõÙ)Té …¬¥g—q©y»üZâ” Mº—0Œá%j S
˜=ÉŸtÏGÍŠ4¨È øRòŠ®HôƒYoèú=¨ÍœĞy;!çZ î¼`ºIR(}DÒÜ‘48d¿}Œ`a}3XÜì?}}‘	ûàĞItÖwi‹“ó”n‹¤-:‰êÀÚË(ã£àkê#SC§Hş«ë}e/0f7—>Üğ”VVkFõñ(ÈÕçÌ*¥*‰Fÿ3š¢Q”\W[éïgù$ÉÂ”gˆÍŒ„ÉMÏ\b^áÂY¯É#v|¬Pì¡z`”!âôøQ–|zQ:˜
 vJ‰ïUÿÀ,•ú1×}QZ|~Ñ°åŒ*=„Òä(«èsp‰!5fÉŸ {[ÌkMù%¢Ç<ıäm±Á¾iêçj=ø
>•êÀn8'½cÄ@,±‡ö†m‘â_úœùñ`¬Ú`ÇyCRtˆ›ÇY«U»,ğ[à÷mŞ:N²¿Eß*ğhä:"÷ÇYx/cøú¿	¬w†·Ä:n}˜w)7CZøáêùåƒ&…Å°'‘•2 l•^KM®¤Fx­îúHz] j³yöÅXşv'¶N3JÃı åÓe•_ËmØ­Ááœ1+wtX´Ä¡ªÆ×P*³‹ËYù•…„l_@F¶K†K¨X &F˜¼­&1UW×ê*‚¤Wj ¿!T¾ÓI¬Q;ûGF±ùÅ\Û1zÂŞõÊÑ°—\pÊî"CÖnr/ó|?ŠQÔHë;˜@Ôá:Ç/é÷o Ûí×!paÃÓ2½ÇDiSµ!ßI†!)Õû#†ŠLE¾G
ŠÑ¾¸%4ùŞS_÷ rA¾SœN%¯êòñÅXvHV^µúY=Ö_i	l–¥´¶ÜzùôS((h±šªó¿öÛh÷€n2NÙ®ªÇX.e{îît1áÃ	ÒÇÁd*ßô4¼×PLV¿ò:ñ/ô-•G]ä­Øc½ßaXâ­¹°€b+€¼v¥-£J¼:³`œ4›8‹ÖÅÈÎ,½°ú’cªÕ¯“+gç³mx}ƒptHë›L3@&t¼„ÈÀ4k„z5ÃŸ$AsçªÆüLëÂÿE©á€‹(È·2¥öF|6íäİa° 0#šJ»wc l=‡TØ‰a**ˆpHƒ-ÂYüÊ´D_ƒëÿAiÆ½Hp½ÁC×åò8é—fjĞ-a_y§át*%™› &.pm‹°•A‘=éĞ9;E'&ŞxÓg¢÷8,(¹ĞàªyøL®<Å§]U‹+=­r`ÖKÀs‘ÎíŒ{·êg’¤\Ulâ^İõ±	ºtio"2Ô‹2›——ËC·&Ç’ê²‡¥œáj‡/ã8¨Ñ¿Öî&u W'„Õ+ìgÅO'âEÎÙû°¿Ø~*¿Q%úóÂĞe8	&ŒØ—ø‰¡ú lXdò›wƒ6„ÄßX±Ç0=ÃQÓİAìX;Álµ`n?»-ä•G²‹İ¤ç¤~ÎL™áî–J·¨yÏXíæ<~uæ£j{Ùî‰&`4Ä]td7ğõ@[*ÎkŸc¿ğA¹Ô-Î¡™¹ÔJÄhiéåSû¸¡ygg¦í%3ŒsYÆÆ¶¨“,1W:–²İVWë„å„ 	¿Áß,»ÿ+	;s(‚Ø9÷ºäµºå‚„å2–ä.ıl®Šã=ó_ƒÒõè
M-57´[4B¦òrC=uq;‹!2L©Û‡ÖŞ6·íòä‡EAp4ol·Z€d¬–ÛâÿàSÒ“Ûaq²£(‰òú¨’®zò°jDß@z‘Ãgj°£ª›ŸjÕáğvàğB.Ü°f6Gù–îC1Mò÷gî†X›¸İ P´ƒ2[Äaã.ğ]b·şzn8<Ï¿!"c=,µÊq‰îÈM…"mê6j±Ëú6İpÜÚÑ$kµÁš>Àç1>oªC$K'U×ü8Ÿ¸oèJ…¤3Wä®o#A’(çÃ±4®±waÛ_r0•A)ÙãR?.‹¯¹>`íìÇu“EÅÌÜñ`œ+7”Š,-rIGÏìÍÒùé&CÉî×FR¥UÁ·fÁ|K@µBÄs•»YåğŞp³<úi¨$;~Bu…ácÔö·¦À œN(EFü¿ŠÆû–åUËå¹…¥Øí ·°Áşêø‰"TÀ4‡×ÓKº«ãëBE­Ş¶[s…¦,€Q%ñs¬[5uàp"lT3¦ÀP8"‹ŒçúgÇKc¨TÓy1ÄÉš¶‰7~mÇu¸ô“Öñ#Ë×Ø¢œÉW2š¼S†\q^Z]>2n>¹°6à_Î²«9ï‚…'m8{øºß¹‡£¢ptX^h2cUâŞ˜Š*î;¿ÅMDk³‘†Ú
“SÍı¬oœ3ÀĞ!ûg8}¤ÒÜ´Î9ƒ²{—ÿ¿¡ÕW#nÇÊ9[äü¾Í\­AP**l•ÖJ¼O+—.V«ë-	ß‡1aôKFX9GÔÂ„ä€	8~İM…­‚íÆı™líT!üö’^…«z\˜RÏ0IóX€½ƒ}l» Ai;0p‹K–(¦èô
yI­Ã0Ş®G]a, éş„¼¾ºqîœMØ!±4.™µáš2xÖÊ¾³sª·¤ öµæäÓÈW¥…cÙ\¿\r´Ä†ÿÔŞp†}ı7R6#4öDšB±é_÷®ÉÜd¤!­mn01ŸÓÊ¯ ~Mû¬›½/Œÿú*í †ÏiŒA±Ç\SEÓV—ÿ6Åó»9Hàx¸çòñ	CDÛÁbÌ…“+¦ºG½ !Â3º]¤®¡|ÃÒ’Ğßµ¸@%I*Å¤ëK”J)„k†üpYø¢3˜$*~ÆĞ ›ßÒ`®ÕËƒÊƒ“eÖ¤üûx_’Ùoi åûµ¿o+Ú±«q{&Æ†(÷3È½µŒzS6~{&¸İÀ¿Îå/ô™Â·€K¡«ôDwÀ.:]EH‹ÈH6ìõôù`åŠkG¼qZI—²’fŞ%)KÈş±İ$¯H0%rõ›½æD‚lw¸¢2ëè*.°ÉTX©ÂOš¿¡9{ÔO„ªËO0:å0Æp†Y ¯$]$h §èJïpw&ÂÂ·!µ}®èCuÜ€Ï— ÏQE’Lô®º°’Ê"ğ1Z«)_¥ß‚ã¢ê½°ŠğÈ %ƒŠ‹¢è2[ç™,˜Y)9J¶óEÃp¬ö©ÂA›x´P²ï3£ÅŠ%°ÿ‹43¬XagòQæÅôMàÑşàãhâŒ±‹k¢¼EÆÈzŠl(ÃÒÑ6&/ŞŞ÷˜¦«¥¼ä¦|qã?Ú’,ÿ22&cøéút¨®	¹Ş;xÔí€#vWNä‡ŒC¿Vºø†ŞR-zë®¬`ş¶´ÙÙäÌÚ£W±œ2í®í¢ÜÍ ¨8î†Ö7¾XLA©²Ó(7óúû=üyîk™oó¨t.mc|ÿ¦Èù°Éı»øE®|	×ò¿¾täš ¼MªÄ~á.å²t«K¨rk/Ğó"K£ó€»¬Íš]sÁ®ŠÌ›á€¯€zU†˜‰Mó9µŒyß0hÃ;†­Ïğ“óßùâ}.İº·6ÉùæßŠ‘¬ÑKSÖôª»x– "&¨@ãÂ¯Å¢¬EµRãÇäê‚rÎ|_LˆX„Wã	×'c—Ù¾p5B£Y•ŒR@xLìíùãGÔªÂB ‚8MÛNîNS:£Üş¥Nà·»|©wÈäz·\ŠO2®+<šDXë
‘ï°Ÿ·óBÀ	6†îšQÍ5¬&æ&w`éÖU”4ß”Öşæ¢"0†aQÉ*ø
W˜3áÌ›Ì¹¹<ô?ÚÚH±9V}äÿà5ß@Hwz6:ùK[r¬*`hÒ´Ïƒ±i¯e;MÃŠ”ˆ"`6àÏh*Arâ{^JôqzrÁÆVàÁO§åĞIéïŸFEJ&€”¤çÔj£P\Mff	å}/^2É¿Î±Vo·á·~Ô	-l!x`ÚK&n.>­\Ğ‹ËÆå¸—_^LT:^šö[+¨q_Pò±‰›²z:­hÉC9Ò¢7PAÇ;sË„~@g'?¸a%6}F¯úåV½r@	÷I]-Õ¿­EåÿeïÔÒa„öıÃ“àäz• hÕ¨ìJ5	É©‰Á±Šmw…WUƒãq‡Èş1ìÊ”;~æ	OdM@2”q]¢ö32(ÿßöÃDrİè9áÃŸ‘Ôlùb"Åùsõ–>I°Pfö'ÉJßQıpç{{Ú€ö‹½°ãp)FôÉ–ì;ßJÌg%¿ÅV[½¿)¸?ô  ¤œ.¾•„¦±½k’¨ÒpËÅ3g¢<ÿó± s0y5ø™Jèz5á©êHş¶×‘8x†@KÄŸk0ÒÛœÒÉb&—ŞTÈ3ŸÉÏd–º'¬[œÃäeÃãí<§Øèæ7ÍV%éĞ®m‚‰æ! RèB(Ô¶R¸æ€.Ğ`<r#¹søÓhY	öm¦ÿ1±­/8¢‚ù6@)"¤İ’ë]’Sf&P£oà3%ÌèNp,*Ä,°(YB=´¿àÅEË\£ÇIL}¹ä¥ß uşÒ¾¦µw-şkå>Ü¿÷Naí”™Œ¤³˜‡b~J»í–ºoÁò¬t
‚›ÛÆ‰ı©m€s&x5Íµ¦a’ˆø]º·âµIçlé»/G¥V±ùÏÃhº°tW/ë£ùCNÖ¢¯zµÒG”?Çl_8â¯ÅÑí­’xI#R‡l{¶ÊÂğ0 	‚l[¡ñ ¦F)j·ç€È›Ÿo†Swı¨XöUê¸"q¦°“ò ú×fIÉU ùÕ0¡Œ3-•ÑqÂÛÁy+>ÑïU@ã¿&Ä,	)¬ñMñ„‡Yü„O`Õú\üD™DXƒÆÑm3ğ9KiV§q¨ÛªE³ĞÖvË‰ìxFô;?íÆÔ|«ò®$ˆ è©K¼KÛ)[#X¡íùMØ1Üü¬tE%‰£È™ç’«æƒæy±—\>_pKd€ï8óÿ¼Ûü2nuñµévj5³³€ã©“È‚Î‰àrÚD•LHğZüÆéû×¾î~¹íì|ò]]Voí¸ë©K3ÏsŠ˜ã'¸!à ¶,à@Ÿ]+÷öÆ¢Á]jz6Ìâw\ƒ¹Yñ^ñ «íš~ÿ$#äî„)!ÂoÏ²å§~ØÕËY@qÄÎz:áöãû\ è(7Â¶o1hF‰·òbÛÛr'$
Tú©œSÕt  ¾4bEÂnÂ»3ï'(ì=?axo¢h¼m‘?«ó!—;Öê’İÇ:„¥ğ%ØqæOò´&8ŒW78üĞâê¬˜.åŸÅ~ó'É°;Û±ÆŠ,‚	®÷ÿÒ*J/y+¯'¾4Ñ:w˜Õ•dV·§ŞœÏút¸Â¨9VOŸ2Kô˜Pj×SkS)Ş›PŠ@ÛT
ÃØ¨g{S&5îÏ0XNñàï1¼{´ˆçÚC¹•ˆZaBi¿7ü>yˆúiÇ¼‘ZFJMb@Š«ˆm¸»ê'E!ÉÇpŸº½ƒÓ@ª¹…K4	,•,ë·BA…ûè Ù¹¼‰­sX¶9îÀ²ÍTo<ºƒtÃÓN¦,É^Eç…l;KNÃøİ‹“²älİt«ÿ¹síÊñ%Êÿ£”GèÖÙV«¹›¿“tş¤´
>=¤÷,·^<¡/Ä¥åYP]ÄXöÔA|¥—
ÀõÆËíÔVkÚe)PÁÈ
8·@èàzuğ/àÒğè³ù/´áê)jÓëR‹˜Üv~úÓ†\ M§óB ?xÎ‹ˆsã©½5Eùı%ŞAÁ»\"M®FY§ÌàxƒÙ4b( ­Ì¸x¤8“R»Î³–9“áû½ş îòSàQ_P$²áıŸ˜Â°xŞ/"ic\ñ,~å±†õ#Boí*zAt!NˆMh®Q GûÒvº‰z§JÆ‚¯H€-Â&Ÿ³t'™ÏÕ¡AÔŒn,3×…`KTIïı! Ô0^f&“~—a¼¦cÙv`|§é‡³¡›üÛ4Èä­mÈRd*‘£õëó‚?ÚbÌ{<TSîˆHŞÜõ±²:ßÙÑı HX‘—¹ÏÑùéÏ›}<‹Ê¬Z¦uS^‡"ïµ2Ïá¯ñƒ‘åã2dåU+Ñ¸zú^rXAyN|>K¸Éµ š³˜[§„9dºÑ7óQ˜}=d`ÖJŸçç5hxÆSæ½¹!bØİ\í>>æö™¨lq?}ş"å:‘˜bµ~¾­l2k.ªë¡º[G&UIäer•K¹Š_±R×šĞãégyä“ƒ‹Şf·Aÿ‹ÁÄÕÒ¥æs»øb¤Â¿1ù_Ğô ¾Ñù’Ì;ñÖòÆ³§å3²üŠ-1%âH™nPÕü±¹~m0ÛVî¿BGP=åŒ$³Î‹8~ŞÙ½Å/è'Pö#ô‘½êu¤YNêéddœ…f“bË8îuI}hØ;&ÔrC5h©P²B“ Ng(Œ–¾fÕÇ½r~`ô-}ª¤_vÜ’c!(ËÂ
l‡meiõ»Ö&byª¿ı!GQô¤a²¬Œíó{ÓêG>µöÎ)üßnú¡?¹ô¤ïå*bDïI7D…ñğ_éì…Å´)ïR½Vxë=±„ŒR_ µ“ø4TÔí ·vGÕ÷,ñ„;éÚàËåÄ‡G@ ŞÄ0:ÃNEÙ
XèŞb5
 ÿx×bYğ…ï”4 ğLÖTH²ê:>w´%–K½V®©Nñz<I9ôjÁ0&'U‘Ô|HÆ<(íøîş`3r7b	wˆ*¬\×z1pt¡|ÃÂm0²@°TÎÖ›æÚÔCëÂ¹¦—îëÌ²
l¼®ÙÁy]›'¢ ÄTîÇTËmaÎ“'¸öæ‡?S¹Úhºá›Ï^³lš3ZÊ$‡r³4}Ç»†\¼x}ç|%Ïÿ‹D†óN¤á€¥7ÖÿÕ)1HP1¥Ú;30k,ôpûdíÒÕeÒ—)‰M¦ú=ÿSØÒlf²ş«ùuÉ´#(kšnY
	¢He1€½g‹2±ğ Æ‡â™µóYß^.¸«~Dç'Èp4š_#wC~/y’s¸Åà#O†£|WI“´¯ØSò€ãIÁİíV¬_ß¢ùl3Ç¢Av•š*½_îIá’ÕqIdhf[m™Ô¥Wâ‰Ã6>†g}Æ`MıŸp¹.ƒ^ı"/7@n’«œÕÜ·0\*$#âJÑkn:ômyî\’ázÔt Q[´ÕZ@2™½Z<Ò“è4¤k)ˆS°!îW“ê…	`Â\¿…Jú-™‡[hr›!ß›Ğ™{ i¡2yÈ‡+\Ë¨p²ÍL–v>R©JE*•.§üm%ø1d!Yk·zò`a\®Æ’z/â—İĞ‘¬ãÑ†#ü#øa2<åIdäÏYı™Ê;}\4‹àJš®¿×²bôV¼QïÔèävbôGd8˜U`ÿ—šĞ;ÙõÖo‘“PÕHxİpùGSøz§zÓ††Á*jZ<—åŠ!ôkvmÍ™Æ„ß³UjüáA„^ìÀ•Ìtõ~&}Ÿ²Ä@YúöºBníÛ¤h˜’-”2]ñ”’,¡°Éñ4µÈ02@ìaÎÍÅ´åıâz•A&%¤ÚS-šV.ï‘¶.È®ÒĞÑ¤ıyG0:t›áê„d¾s|ı1¶$²¿¨{ˆ½â‘bB[^Eõ"ï¨Å|;ïs Ø…¢±Ì–BNˆƒHE
ˆ9x¼áPQ¾s¬oEe% ‘ñ´TÁÕï™˜Cµ©ñìãÅ‘ùj.áô6~å›´Oe¹I9ŒŒ—Œ¡Í¤tq{i9@_·ãÿD¿»QTóZRŞ[#”×¨(Ràÿpü‚*Àì/,øãÍ}¬•­”¼—?u“Œ÷@ævÅSèÀÿ3Ü
c5°4øÇ(£tW™å"OGRs™6›&UNË\^CôX«£ÉY®^k-M”Àe’&‹ ‘Å¡Í£sÖÌC½Ôş›Ô” 3ÔCa´räã0×ÁzÕUs'mşrÆf2bWX¾æÆÆÚçsH^Ã7Ô£¹-„îù^w5F	Ë=“ÁK©ºjfó¼|ùæ¯İBè€˜Ô¿í2R*Aº‚óúÎ?Ù1Äêè±sµ†òV}š,py|¾¶x@¼(²L©—Ç‰™ª}×MÀˆÄÈ¼z’¦Æ•#-ª-ú"¸¤5¶ s˜‘iVéqbÔJw¯‰"D~#ÊÒ_Q‹§1ˆ«ØbJË^İå]´›¼)—ĞÒ|İ±½ä0s‚æ•NW£¸Î×ZîœJ%²(‡•dà~ÆÒìMË»ˆÀ¬¸7BÁ½nTµƒ6`ìéãJÄËŠ<°„	é¯b“¤]æ6ûöTë5„‡=Ó}%(•“Ì_Ë3]“_Øáÿ»7¦	¯rNhdÜ¼Ûõ²u´tNQÕ Ò£c`\4WîŞBò‘Ÿ7•7—ßÍVĞ&ÜVpF8ó§3÷Võå·Eõš~ÔYz¨Äiú!„<Í<v8MZ& sï–	K­Ñ¦{¯8¸Ş)rP™ä=»Û­şÊÿC‹f¬Ó«_7õ2Îš®ö¼(WD—õkŒPR$Y`²ğİ}C¹jí«CV@IQÂÕ§ßúú¶šŒˆ•Z´³¢ñglŠ3u¸«‰‚Šz~à±„[ÕØ™>ëb"&_(ö°Ğ­Î{•±Îò™….uÒyvHşî¡Üı;iñ[°yÆÀÀª˜
Şÿ_=¿Ä™Åü¡ÅE	™ÚÑr#[ß=;Öğr.O\xŒD77‡™rFr k9aÅL¢}ü:Yé;qõ{Føÿß²4Q*ªHZTÔS´Šüå
<€ı ›™€‡ VÕ —U„ÚŠEæ½=Y3ïX‹ÿ´šÀ–Ü·m¥(g=˜-‰)©ÙD¹ÛØJøKŸè#Hi0˜å(Û‘>[òÿ©Tn“<—ÃÆùĞ{h¾só7^V"ãçX‚á80M!KåSkÏV†b­(oÎ]ãõÅ¤§ˆİÃw'p	ey	1¾t '}Y™'­çTs®†/îÜ½ë}Â-xÇtÜ¶d‹¤Ôp6
n¡~³ù{Ğv'ß
wõ»£©äí˜Á:&‘PŒz´ƒ£ÈV®YÁøª€ôtp\_\°5C”ôy
5oêÏŞOˆÏ4¸ˆOE«˜„(9¾J§¡0·¨÷Íü¦Şvü·à¯øöªÛÍ4ÕN\g‹Ä[34Œ¸| ¤3op¬(¢K/ÿ²³û£N´'Ùc@¾Ñšå;ÛPª¤y\“r²€'ú¦Èpøb¥1Ü\oY6ñàUbOƒ³…qiG1Æ›n]]gŒJëCùÛÄ]÷–ıTÂX…ğÓ¶Æµ¦¡ò/§4™·_÷3çƒF8·¾ÅøITXÂØCì©ŸéL;ú¸ƒLĞ…â‡îµ©•0[ıÙÕ&²Qú>Wšº8µRÕ-TÎs À’dfñIyş«àÎ8““Ş[-IrŠÅ Ş·úµ^{]Ì~ÓU¼)f˜Ñ¬•¡€*<G‰æŸÖgÖ;@1 $×PÄ'EÔ„İU­Çu¤K¼t4 ÚpÙøÖ&Ìj1Á;øp0 c,hµAŸÂìÙ¥áÜ(Ö€æ~S}.üeñxs¶7wše˜F¶÷“Û„¡ ·‘Vk5ú­ñE^«#kc°nİ4x¸Äİ½¬>tÂŒíã¹€/c…*Ùg,o–(|lvšØÍ¾c¾É>{W²4„œ6ÑTÀ€µöÃ€7âÓ–là®¢s(êÖ½Y®‹t
Õ‡’Ÿ0Û#ÎªİMt¼ÎË3Un-úÔ³H¾ã_­,=ÇÅæÚÌâŒèüh- Ír«Œ¾g›~‰£;:²ø”r¸@‰è†Ğ?.4©s¢SÙÉÔy›ï'+¸²¹WÇê Q×IÄUwÌó±e-V'\`*3y¶•y±[*·¹| Î¾¡UóL'ŸRlôGùBíŞ¢6+WË,Àÿ¢îy»×ÅªK…¶œ‘i¦½î’£6±¯”H<O¯ÉÂşx0Ï İkŞÊ`sz52·(%
ïË™0`QJŸ	©ûOVC\új0g7FÕ–!V£§4”«ˆO{¢§;­º=¦”¹‚òZ¹ò]sÕúA§5æMZğüw üÉÆÆG:ŠŸ`á©¶ó‘Iâ/^é)p!0'–¤ƒù<çùƒe:»á½¬è ”×uÎc¢°^Â'èp4×İ1—ô¤]¾*‡ YúÛ¶ODš_;ÍõzS»=ÒçÌgZe³ º[†³WWéø+ŞcËxf5OB$ŒÅ™ß İAì¾tÆı#vIe™¡t}äSJçmwäSë.íıYê[:L@Fe×ÈûVyV¥2öƒ½i+&¸« H4T{/àšÊ×8jÇ‰	â¿¬]ğ&¦Uw³4([{‘Àå7ÛH­¾j¢6„4Èôg…48° xÅ„„ÕJ“¯5újŒÄaıjoY¸¬å¬r?1D6˜Qö+sW¼´H<“éù)Ã&tV•¤àM–_ÍÿÃ¥$õT>Í™±K+ÿ,£»_Ç8îwªÔ2~ıÊŞÒÓ±kû?lnÛ[òÎÃxŒF(1¿pòÆî®Vç;ŸYcb¨æìoíÙâó)¨wfÙ,ñ¥R¥€
o;F†-*I"3wo¯‘ßÈÎiùtyô~šı1×(?-áSå‹•³V	ºÃ¥?B–g™¡‡µIt4OL¾ôw °+–ÖcI‡Ÿâô&,+QÇ¢¦.æH_N;èSõæWúkn
uëÑÑ*àZv/½†Îä¬M0G²¼1h_­n=˜òŞè?¬–+ÖØëVh»tèTœÇ¡å([7Ù¸úÀìçñ’Šed„Ôig„3ÿµc*ïÃ¸q5‚	İ§…ú%À8œ$ıĞmpY`nYşšNü
d×ïTo’ªö]$ öLìv÷—µÄC
}t½%d#ÔDO‡%.õ NtuEƒú­U|,)ôk½.o‚`EÄãt&èŞKÍO:‘ «üŞG‡o4<áû\k¼oWRì•òRåVšar<"¾x®ª¿n,y,ByÆÇošäì)ª"×õÕOäÆÈ„¥$I7º…şOİÁ¶F«Šù*ÓùàC.QñÊ˜.%<@qJ™äªÒš­e
â©¨Ó¡ÍøSáÓh¿²3ä¥ëéñâW¼ùÍM™8Dšs[Q4:`Şaèq²îAF®”ÖÿQK¡ÇÔş’™UÌ|B˜ê±?ƒ^—‚Câm¿ñWi¨Ñ8äŞ—^íÙd/µ^P„ĞKŞ/ÅÊ¹d@±V‚‹;Ó"i\±ZFY 04È„ZYÁÅ˜v9¡«ğñ¯g‰NG‚O?i‰ÿ6æ]Î±a3¹¨ÉM¤ØZËŸ0HVÉc¶ÊcHšUÉ«ÃÏ£NU½½pTÆ¿šCŞºæû­+Ï`y²|_YÆ2â œ„x$ßŒ¼éCÆ&R±OåmãX•´YÔ{xäf4îVS„¯íúsx„ÏAxä$V²õÍQyªd}8à\0Üã<h|‡td–L9†ÊúDŒé•¿ inIZA‘ÀoîÀ=:¯üNOÀùÓ\XNÃ0]L
7štØíiše9N¹ßrl„“æ÷tkNb‰ÕN/"°å{È…åJ([Î÷»w¥[yå-ğpãNé=YÉ)s¬ìıâj¥ã	èùùháfäç\ï öä=¯÷±E­NğğUDû@Ñ
xâï¢¬à+˜;rèbùG²MO_¯»SS¸F$ö˜ÔÚREÃ…	N¦š¨ÀF5$Ò¢»1cq×3£Mİšgm‰í21KÓ‰P^Qƒ¾ÿÀ,"^œJ‰‘–M@;ÍW¤pi®2õóìsO÷¼”„ÿIÜÇTÄŞQ3u´W–k=ÕÛ¯OĞÍ‘a£»¡ú·Z»ñôÁLË¾~sÂ ÏÌÛ3M ¶†MO’èİ¨1»¶F˜‡‚ñzƒ¶ÕçU(SEÌeÏPo¤ïÊƒ ¤O¿¬!ÿ^}O²çrÙY4Ì/9éÃ¨&f«\’::zt_¾2PEwí¹O-4sÍ¿–3}Ó»7e~–Dş¥ãÑsÊØ@‰	Ú›|•d•ÈDÈ}¾% ÿúÂŞ7?7!^{}Ôm¥À«²œŞ0GÓŸø$ø‹¢u•¬çn4M^Q~_èØï‹Ñı)9ü$E÷û:A1£>@Âdí?úg$4V†™ Ó_u¢<Ì=â¨{úiy4üÎ#MçsáçË}Ò“n¿"Š°ÀÌ}çéåzïW€á×‹n/*úÖi—õOäNã[²JMÓäÚê§Éºßõ|?Ü·É=uê]1„qßûa“Nâ©ni)wEpyjl? [
/62hÓc¹îoædhvÛqÅ¶xUËfşRº:E´úØjtjáù8!Ì÷ù„¿}ÜN½ÇYËİ\5bÿ
i§~3Ó”İ^¸lĞ§õj¥8¡ÖlÑÄğıGëMŠ¥rš;™JVJŞÜ¾-^ömÿ4È„‚h‡ûH°$Ã%½×	š„´‰'µ6"š²¨ù%oØ‹zNwuuİŠCÀµb¥À"—wî@8ÜÓ¸=+Æ
7İã«µ¡´/³Ú^Û®OÌrÁˆÿ]í{q¢ˆ³x;Š  «jğIŸG™ÌÂ_šX‰.øş `Y”Ÿ2Ì’/º‚F™”‚8Ï7ŞŒÆ¿B7$ğ´õç[¯À[ğGËÖÆ‚œ³l…úlS®^XÀÀMğÚŸ¾¦‰?d;ı3ùpØ¸3¬æ…¨ó„f·‘í]acÁ¾0{‰tD<Úv…Í	„|Í-gÆ}éA^¯—W“uÄµ¹UjØO	„¼õnÈÃâá×CÃzXl’ø!Édk…Ø—o¥Ÿ¢VÕ+ÿ¼C?:Ÿ­âÇ±	híKŸg½ öiÈ€f?ÁA´ìÜKaİKKjÆá,£šq;=?î¡¹Fë1çHÑ·;ªÉ6„V„ 'ë¸û5Õ-Šğb¿‹$¥d­±mãe’æfîÑó¤»¿˜ó…Æ÷ŠIˆˆCíU“Ÿ}‚ĞÕÕß´íúÁ9-ü”ÏMéÇÔM;6>ŒÂz”{Sgš)ïu
fjƒŒå@%fÛìlJ½eœƒ;Îcõâ>„¼ÀfÄáısƒ ĞYoU+Lï¡–Ç¤ ËÇ°
»]<Æó9ôP/e%”´šCRbxÍŒS3€KËæpœº‚t©Á_)?ˆ‹ÁDŸyaÚòò]ÂOs˜Ê@Víã™›‰ï6$<°·­*Okâ-Iœ=)mã3æ‡¢…,ääÄ <Ú`9á:Ê*¾zmÿ½¿ÂpÎ|F;HÕ‹OveÒÄEø	ü;uóC_f´K&Ó»àúóLŞh­^¦êù:SÖŞØş/ª¾ãéÿÌ1ïX]IjÖßOs}î1‡ŠÓuo7Œ™mx6uĞÕşjÂÓi ¼â6\@Ñ¸[[.üöšEP8©‰Åt|D’U£ïUû«vtR(Ñ”ù»}zzÓË|	ĞÓæ-„`¥fxİcû,,[†â•¡ŠöÁ{‹£”¼˜ñVŞ÷ÆñÅÇìîbûWùì}L6ƒ¥él¸ŸñÖtê€û”³´÷díWôAPñ(p2k\½R}C+j	³t€Ãˆ·!şŒ y&¡'?Â‚«!º46{ba@›À”¬§ø!ãóªYm	7"Ñt‚¿Ñ©^‹¼å 	qğ/54µÊ.±Ñê¹…¹É.46ˆ(’ß’<üU	Û&Ñ^â¦¨xø=ÂcÔŠ”Ná!FéİÇHAYšÍoÛAóá„Ò.;Íæ\şAzFiåï„Æƒãl¡{%±OÍLë³]1³\Ó+4ßpì°tf G%È‰€¯
Î6E¤(¯&±êî^ñ»İBŸÃ›p/8wmazc âÍğø ­b)¸—ŠÒ2c(,ÕNÑ•mŒ R‹Rª  ÁŞkfkŞW%ÕıE…ä¢VªTÌ"Šé>V;êÕjúçÓ„Ü£Ç™W·»òàë?ÎÕvD%ÕÏj4'!J¦
¨Ä'ØFô`¨V%‚hÉÒ?ÒÓû!ÅA MX/Xİœ¬‰ˆ°:šœëWÊ eçî~Få"êÅ|¾mR‚^Zæ* ãÍ®ä½±¡3àæN½Ù•CşUªèôîTæ@^Mİè[¶ÒR;°ùÙl"9pœ"›ÚC ø‹œéB³î’(W9³ÍÓƒa—†–¹n¿;>b‹"¶™±´‹¯ZY»ºÿ{j‚ĞN¡ã–ùå¬fæn§pNÖôıl#±=£C³©lK5÷kôß@cbÁF—üˆ¦‡¼Øğd\8FÉ’×Â=õé!åò ’Æ™>Æjnõ‰JÑ¾…A, ~:±ªmİÂCĞş4¨ıu¢¬±z¨#l=u©ñdq|_È«Œ ôwGƒò„Ş•<ß?yÅ@ó:¥<$êÙŸñQdš£‡
DKÍşW€mw+,¯]ç”GPÔ«.`Ã›FË—Ü|ıå»ôO_Üü"i¼~ù)nI¿1f˜q¸\¢šr¦Âc×Ó [pÜ™3’@–µCïùo{¨ıtŒÜw¯-	âª]Á¿©Bt<E^À›‚MIgä7k!VDÍ.ŞĞîº½QM„7¯½»’uèj–Ÿ¶§«•ˆW/–Ÿƒ6{@	H›C¼kB?O}ß¯Æç®4ëcgW9İZ~“çOAÓ?û?Á½M-ÅÁ¡	HX ĞcNsƒãeEh(_73]@1¾Ndª}\7Ø×´ø­Òo6ğË€HJd¡r¢—'Pºñ·á€EÈq0½àoïRŠDwÌ^I_™kÖ@m3Í:ºyØ}~ÃwÎ{;v•&Ü•A0Ôm(iñD¯Öªd…”Û¬Rá¨-]¬í&Kí<1IDd4¹-9‘Ğ½,*®bÏdÄÎû¥ Ê*ÈÍE·\ÿ„z®€œH«¥pjh\Š¦é \²„/(ÏM	8V0*ôÍE*
ƒ2@»³û–M
âÍmGè™ïãÉ¬‘qÃ'?jX§N³kŒi%ƒ&–\q){iÔYŠŞ¿ÂH·PéİÅû`/V¥hÎ‰>xæTI * ô—]µıxª±÷£ùåø#›v{¤¡5§jC?‹Î0—¢øãÏ®z$¤hNÅ¶gQm8M|U%yŞE[“BÙø¨2LÃKœ`ª?5¢ÙH>®ª|×·&UN¦E¹t-˜±Ù]OĞ×É—ò*\ÅÖHæü§³HeVğå±¤j‘©üuÀ}DZµğÕiOÁ²'H.‡1bNUà3ò~±†I•L®ÌÑ7+[8ÃRÉy•{^Ñ,Ğ£Î,ØçGëXÒ]Ñ™OÕ.±FL’øbÍ '?Ø%Sjî¬Iõ ü›ç—şİĞÿzğéó=‹hm¡ÌcEsVüûGé½Õ!«" Ñí±SêúJny	·©xÆz2ÿ	†Ô±^Î¢L†*&öñ©ör†€™§é.r†€e0®É>Çöğ[J¬×²ZĞìÛÑ*³J(İÍ¢—‡øxŸÅ¤,JhCkEEµÓ
ÈešŸœF	3I41½×öWÙTş	¬ÕT±'$äíÏ>ÄAa<ÏN…ÉÈ¸òÊòKÖï62·±‰@&”:Øßš^ÉİQLf‘Ä-/ì78ßS
î±Ì6Z+	iVSJÉ@®ô4©}¡´ŠFªrå~“.êŒ°[–¼!«ÜZ-·nU­Ş®o®€¦»›vkª"µ³Wùô7º-Ê+å©cÇr·t7G®o¥ªr NNu­¨¢T7ˆû\HmûO¦*Os@^?»d¡#uJŒ½>^ˆd‘n1»½&Ò²¾s=Ù¥ØZõ
˜á8›ÏWe2êm—û ÀIıT#½ï#äı2x¸n/ªñ¨u 6pcB~„ÖVn%UÊGó#—Ë°À.<	ğÅ¾é¿è!ı_~àrW±¡í}w¼n:•‚-;6–|ÄÄ§ëaÈ5ZdG´£ËšLMÁt¤“.k»Êi£bb LÔşpjj®¥ÌÄêy¥×Øt*6˜º!‡Üó‘ š;¡G Ö¯`†1^¹™Ï½Ç!b^,……!´-‘…XòÚ{„äÕ°Ğ12¯¾kÊıó¿ôbSßiƒAÈh–Û,Ñ3ôçÅ=RufA~cèáfÑ‚\íßgJ„ÎŒı¾Å¿>ØÆçC‹9Qb6&Ó[]¦»•f¾²`Ñ3uV1°åSMü§$mWG¸jŞa2Õ4©‡](œÆ-^iò‰¢¦×5Ó9#[úÑ³ªT¬ñŞ¹äTİ:ÆM×Ùpeâe¼œ«Ñlüƒw×û¥v5$ÂŞË/ÓÔƒkÓA)ÈaºÉ1`HEf¬#	Õ«€T@Ò‘CßÔçræö’Y–3iÜ¯ç_¤c"øöä‰=Ÿö:¬²ªöµ¼Ş:0{ÊX6:#fë#gØûhh¡íÛ‚Í\qj¯:Fe°È“"á8#‚‚8pëjü¯Í/55n‘0;´Á´­˜|cug,¢.†Šø¨3/â]¶Çÿ&V§gZqØÿÃôr,š(éøvL†à,ûMİcÔD­³º‘•.ÓFdÅªŠš{R¸Q#eõS–;è™úëàºpQòµd¸“á‡bA;äèÁõù¿fÛ˜aµÍ,oKj§ÌİƒêOÑÑ’3¾ì²¿¯P«ß¬°XkÓ%B–´|Ò×Jñé“K,!p$Ñ½pFDµÂŞ|§^Ä!¼¡±@€Ñ4û¬£’Æ},­‚Ëá/¨Qìã¨oVô*{³î^ræFvïw 44lª¦ã©·%óàmíëÊ#]÷;RÀ Ù:#††7&o¾>ÜV Õ& ,rw ¦:Îrİwëå«¯´×_ƒFÿp_Ûå
:™ã8c'iËÌoOÒÉC3u±eOAE=\K4¾{]z?¹£ÑÑî<
É_&:®ÚY|€îµLÿ¡Sß8ºUÅJ"Õ$ö´Ë—±ˆ=2]ô$t…ağájË1dëU»Ub5{¼c’R.è{¯•"ÔÙşÚF}/láıÏã…ä‘ÛÁzÕÔ5ëì½íİí.¯ï&ßêE{DT9ª“JÇb»¬¢1(Õ¸ôéRrı ÍõÕ»Pá\SOÚ®³dáèj¼ÂVÂRß­lE·´.:„µN|÷‰Â”’?î ÔßQó<*ëîxjØ¿÷xz:ñÁá*ßH”cğÆCÎ2…
ëÎW¥ä{^ë;höØtFâÈ4û´
†Øt¿%¨é|ÂHzêH¦ÒÂQænÜœIïÜòK¥¨ÌÕ}×B‡×Uö¿ÑG¦±‘\ÅBúÚÖüuÆ´ÔŸ7¡ğ<Âµµ‡dºj€‹ °u6"¬,$Y§ ¶ÇaŒ£ a¥9c ÓÔ‚xÁ*Æ	 iŠíİ:ä¢Âø‰ÓëmŸ·}>0ËşI·u[Àı6ÚÄİ˜×ù1JÙ‡·3§/½IM›“Çü¨±5]©‘&†p@nW°‘öò›&.3æ++î×›…¥Q<ï–/< (O»Q¹w ªÖ/Å¸'ğw‹ÁRÊ" â}”€Md¼\(;{Šd:ü£ı”„ök§&½F^šhÈ c42	ß!­ÓIR)ü:†Æºun×X€Â÷õõSøÉÁ^„’Ñe“ÜZºœIÇéçÃy8MÔBä6ÊRñg,"Ö ¡ôx4^ÊÆ„¾Kè7Åá|Ò¸bQ‹´^Ğ‹›\±6t|
'3Ãİ}4D‡¤iO78R„rÿùX^áóí=XB÷Vû“!©³”¨“@‡ÿ
.«ÜÍÍÏ7ÿ±ğÕF¢Æ…íX3BçaÃƒß<K@õøŒù_¨ÚÅËüÆşÃr;¦ìt¥÷o©_¦ÈyfX½üàƒ¨^x“¶ËB6(Ù3ÉE?_³4ûï‚ë'¾¼<#×Ä¿©¥ªgo’Æ/úÄL_RhÎ?šÔez®s¯ß$tÔÕ°+ïüÊ#Æ—}_H¼×lğ]`òhª/İø^e”@q ôÒ×FçİlÚ\´®»[Ù„~Öôãl6ÊAo¥“šä1ÖÚ¥©Ÿ”¬‘Õ?üëê;èNô”¾,3¢drá$)¢CÔ„Vå¨K1ö9j‘îÛÜÉ]¸Öšx†Ì¤C ¹‹‡ıìĞ\Mo’¯EçöKÔÑ™Š‹+ÏwÑ«şÊPÄ2f:–°ÙÁ§%ò}–ªHû#«Ë 2…¯WÎkĞ€$f©?5"@@õ¨/„™û4q×É¹æ¼‡‹[?*ŞV“^Ÿ$?”8ä­1t._¯l§€Ô=º–Y¯VîòÙ5g$¸«u>Q×q›úH/szæû‚b¼º\…%¸œïÏé‰¢#Ù§b¯5šBa…MGÕ8EÈ?0ò7¼¤gûo"¸¼v×è¼gª¿I¸’5:>@h<åøè£˜TÒ-?ìÃÂ,œ³;M1g2ıÓoÏÂ
Šq§‡ª—ü^ªkûd5Ñãµâc\ëKªŸËc$Ñœ7ÉOG%9+EĞLrÙ Û[“Ï`ñi?‘2¯'Ğúú=±OŒ$Qê7aÀ~Å„Çq½‡Ø.fÚÄ<Ò2Á–’}B–<oNvCéÔ`XŠİu†9R†£.å¡ÿ!ı`Nûôåÿ²±M^e±_·¹j 0‹FÛÁ„cÍ|J?äŠœïîsˆ“œ¬2«Ãyú(`ŠWì;ñ‹^ä˜:©±Ì
Iå,'•¯(îxÆİÁ;¿Ç½¨ ìùcµ£·‘Ä;^§_BN¬ä¢‹çcUóæ£ÁæmvÄbuÙÚQSRnÊ%q€À„&Ba´ã»Ã‡³ÄÉ)£Ş¢Íİj<QijÓ@äçámm„¸ä	¸ZFûá²–µ(¥A€ˆ€ˆªH€+N#EX¢ö3KÕÌvÅÉ»W(o,K°6t¤ò˜*9-åŠìƒ.‚ÎŸ‰4v`‡4Îèç¼êc/o¾6Y‡,àìÿÍ3óä¢‹°„X0¾‚Bk¼–äãäšJ1Ùmšuî©û^f!’ØÕR­çÏ|r0áæ¤>úƒñY
¯;_ªFÅ}‹‰É¥düï‘›ß¤üˆÊIG_èW×qĞa¢Õ1Ü#†ÁwbĞ
x¾µÜïEÍâô±Ä¬33 „IqÛ Göç¢}x‡å”Œ„`¤æLì!Õ kââkÃ„ş+‹C±KĞèz8å€Õ=*ä•4ÚÄ	M\oe£E†1²d½oE[ş¿
%Üñ—şoäûS7ùlÆèzáŒÆ’À§R”Rf‡ŠÂF¦PÜYc/ÀšDÖüƒÔĞŠ-Q˜Ã¿MD%xz¾â¦ˆH_Ä22Ö8ÍmhĞzpüŞHw°¨‰\Üëã°¬ºêÓÀ*  5.ÕQ±€XädÃøRB¡_œâf—f (ÈÁ£1Z5Ìü‹I¦qÑVP0ì7íä©ğ´@ûyí»[ÃéóZI¶Å²Òª£G‰ÛÓ´Ú4m‘–Ã›˜—ÒüY°º»¢¢+ÜE^	ÓÜ±±´À8c=eÊDg*›I…]!÷=F!äíMeëÜ™¹kĞÏzÙQ-­86ı	]Øèá×â	ªÀrk¶*îÛ«šÛ\@9UPCø
¥¿(¥õ gñŞ”RSû+İà²4hFÊ¥…7JRªäç6½$¥‡E‘cÌã»1*Ğ	8/¾Îæ™g mz´ĞñÜşiNÆåÅÃ«'ä­DqÕŸ=~È
°o`ü:H6Öe-@bçKÜLŸNJ5ÈI3!?=ÖÏ¬É2êé­Ô*fâ°jò~/OôÛŒÌ£ªF!"œB’{¨ÜCûÎV;çeùœË†¬u„»^ƒĞ„!S’ş=Óó3í,¿¹ˆå‡®/—ë°»!¥š—;Ãß\ğ’±•oˆ Ô×d÷Ô6E9”Y^IúW,Ø[µnš<—‚By“«»Ú8ø
´òÑÈÅUİb&üQrVéí/’¤Æ`FMèU5¶iN®sŒİGÎ´
;ş‡!fjÙ
t‰çÛ^›&EMJvFÉÆÄ1¼*&uA†„£-À¥¸Ûùq>jæåvğÿğnªÅ0aTË§^¨áp%¨[¿úf#p¸‡â÷‰»yU»z ©ù}Ç‡à_Ş:"R¡ƒüUƒæ?òËê²²‚”dzä‰¼B,wdÑ-ñ¬‹ÌÇI¨§†l­ƒå~&úHwúÅîK;É™+ÈıRû—ÀX}“iÆ¶ªÑÃ0]ÜVu$qÔé†Q×ÖQ,‘‡¬ƒ:º3Ïng¯nÏZeŠµ$j*Øå„Ö½»òØÃEŒ”bâaşÄ³:ñÒÂ`´¸„şİ&YËäæÆs=ÅÌ%Æ¢µ µÚ¦œ÷½©B™ZˆAÆç$+'eŞÉè„™¯¨<)…™n,.»ğ I=…•ib×ùb(Î.Ú€ê&aR KÑGÂvóç!qzÍıM"g¢ƒ)æøÛ¼Vá(Í•İ‚ğUµÀ1p²\’avAqÉî¡=‰šÁqDÄëˆşñ#8y?ªíÿÊèjƒy›Ñ;¾™¦™°âC»µ¯”aJG+°oP°QğüÔBX<ô ‹èÆZŸSbgÀ¼‚ß“ª,d´ g—ÓèíSI%½bõÈg#¶00ÈŸ¼™®|é/¬é\À—ñbäİºr*Ùü¯WYP=ovzŸOñæ+‹¦Èº5!z‹ëL.ë=ÇF3'ëƒ ¡'½¬e‡ÿ‘×	±B=ä¬˜‹ë‰Z¨ó4ê]‚PäeDµ<Géûš§şŒĞ'ë¼n‡—i·F¢Àt¥s>÷3ò	Ã«Ç6Ó½Cp½¼vüÙft#]@KJËTh}ç¿v€U—À6å@	[çØp×İ/å¦(äì¯Ò3É¥rl –:ã¡Ü„òÖN’tªú6ö<<§CªˆóâƒÅ}šßˆ?€•M3¿K²W¸^ì|DO Û,çJUÙ¥"udNt¤,"Pxæá®A6ÁœZO Í‹2ŒìÃ'›å©“—UßëÑô_9ŸSàÙÊ#uK„#ØtOäÛäØL\'æ0ï }Ù,‚á×z®Æœ§ÜxTzÀ,‡p‰ Â Ğ_p€ZŸé·Ò<Ë®[vOòF+aNêjæ¡¦.3†¶’·¶2şÛáAzåÄ›;2F÷¨F}äˆÅÈ<^¤æa.upÏîÙ[ŞÎaé%ï–PşÂìÜ9MátŒ§İy˜È£f•|ãÃ®"‘3HYúÄY¯
]ìÎèÉF“°°GBù
?Ô'"(Dµjú»åDª€@[/1u¬Oà{êúŞ—oW£MSp_ĞÀåÚ†PJoÃ{Ùf2xT­É_ŒßÈûr ëE0ÁŸ>M	áÜKA|ÜÆÚX×Ÿmh†wX¡;âI÷ÔÒŸº4!E‚¢UÄF¢_2s¶­şó¦7™>:G·¼2I=&qLŞ`ÅMğdOgõ”o’ë0µdQÈGpÓ?T¼HïaÕ„ûŸ.ß?-õÌ+­7ÖÅQro,2iÕ$ƒNTä±"ü#’†I;§Jf\ä'hIí+Å+ƒbW‚¥&ßİBK^LÛ¼*Ëñµ-äúdB÷Bí­½VÙËP©²ë² M~¯tİjÅÊzVø™¾au;)KäØÿĞ²ôœ™'¢ŒQùáÿÑäÂ@Ë£[y¸˜üĞ§àã†ëÛ$ñ©…hÈgØa
q—uŠ¦÷›ÎÍÜ¼P”Ô»Bj;oÿ/MG%²R
îÁø¬—<âhñ{â;KÇ¾CÛ×§m\.bš”fS`yéÑJ w:èw;R3¨Œà›T|-â~2ñ[\ MlNÉÎXe¥D´?ô	ª[¯}¦,Äµ5@N¿úçz'qWªéXGIYí„X«ÛİÎ*£²†Ç6Ÿ,ĞfEƒÌü‹G¶¾îÅıp6èÌ)vEm0E1şÄ.™'öÀ˜˜-c«.1/É¹öÅW°ğ˜–«$„ÑÏª^êİN‹¿g7F¦Ü\Ô=ëáå`¤Î Y×!…¨M×O	›†ëa­„Nu}5¯{®*Éæ6‘÷N1iç–WHe/*ç=2j,‡[ q<ŠğBİy“bĞ¤º(A‰µÓì™CÎ¡ìHehŞw’VõXlØÇj†YQÑlæé‚÷xööÿÍÒWß;E°ŠÿtBLs„½›:şx‰‡<;KbÊ‰;ù!9ç¯Úó‘•Ê!6ˆÍ–¬gZ^NnöJ¥¤ûyÍ Dá AÃú
¾‡´=B~ªjÂ¹fbV€4ÙX¨BÊ‡l/,Úˆú:¨õŞëMèÆİ+ë¶±ÃQ¨´"œ¼øFÎ >uF-¿ÛtŞ·¨’£FášÕÖ/­ÖC¯ÇŞ¾Úm1Ì$øõ1ÊR5>€$·-¤¤Î”µ‹'®`däLñYèôuØÄõã×JštƒôX×Ù¾!¨Û+B[ÊªÏ/$1F.rÿ j¢­õ:¯ï’Õ©½Æ­öj¬Ô`¼Ô³`k%ÈŞÀIÉ1a&IÔJS‡áLï`„cDVï·­¶˜‘ö0¬…€Ü;İ»4ëR[ù(C6Çb1ŸíØ™Uíˆ7CÛˆÍ‰N|¸ŠôÊgš$ÒãûC;ñĞuæ†tÑ'sŸÿúH7XnÆ?Ggl”C1©5õ0*‘˜_ñ&wô)U	G:¾õä˜:‚+¿Cùiæ r¥àÏÉ£¸8^B±ÑPò×a-BáØ§Ó¸;"ï
@Ë„ˆhB3Î¶uÀŠ,áéÌŞƒÏŒtL×¾DäÜ%„A;Ù5 ¼ªo¿×¦n;ÊÇí¶sÖÂ¸NkGM ¶´kÇ0Š£…
ê˜Øa73ƒ^b#aX¨>GP\Çõƒú¸meİáÍ¶"Û¼Æ»~«Y7›í¨@ĞíÙ%ŸŸó§nĞ1ØQÀ½ è"§ y37¢jçÆJ±ÎÔ—Ä	¾l”ãH%oÚ!HJ²"³w#*æ´KT¤ï¥9(ëN­i»ıä²V„—AÓ\ºCó>ºÑŸNæáâÔtQuëû^ŸYgİ )¶”}·2›˜·Ér«Š¾’xkoX¼ÖLg £û°x<åe°Úw¬;5Ÿ€’ƒl8ú¤^0±Ô¢†¥LPçf	Ù×e]
éOmP¥¬\¬Õ,[ôoU%\²•=rl9.úqxı3u¦éÇT&vº·â]Cxc·PÑ/µ†û Ê‹»5P²èÕLš,ôãPvÌröTáÉ”–’Ú£®ˆå
˜#º í7zø£@aáŸfVNX@ÚyÑ¿2âÿYÍÿ½ÅMÒÖ†VÎÒ¼W·ï£äQ­'ÓİÚ¤O.	v€æ0èKïîë·Z_âçæ3=ƒ˜úbÅÓ1Ô´y“1Şğt*²êÅ5ÿ†Ôå„õ}Zškú¬D{ˆONodEÄâÑ/Ö×Ğ_­93ŞòÃ½ \*?O{5qÌl’†õPš˜m¶]áê³@~wÍ”x5îa¹’»<·¬ŞßM«—ğÎ®(È˜»%Œyn@´70¡2MF×:…¥É'lZÛ{âó¦_ˆ³Ñ*‘9;‘Í3ãjômò—˜5ï&w÷ØÎ`"Š^V-)$éˆ®" ¶Î?T‰ÚWD÷Ü,Vc«utE0MĞİ|(¤a‘†VC’6âşE=´›¤ y£G±ƒÙËbnI_[²!n4|yc³ xm§Ñ0H“`‹U¬2Îƒ3P›ÌàÄ+«cßo6+…S û%´âv„é¨‰Å{OÖktTùšer¬F¶ÛBù®/[‘ 0íÏc]Pbë07LR—àá=+Û%…6ÁçÉhWC¿ÍlVZü/3¦©•›}!§¹$`œIĞP§Ÿ"f¸	¯?²ƒÅŠ¢¥{ÿTS;hXn·EP|*VLékÕ³0"ı s7ï±8÷ÀU³ù¯d¨İ#ùöYş"ÚïO9Tv»]w}¹'Áö¯t¿[”Ø˜œSK%_ğt0Ú¼·VÓöÏÔ³àLnuJæ4;ï	ÚØ†EX/ÍbCl—J×K^Úà¦<ŠÜ>ÃYÇ:Ë)?î¿R);|R.ì|1·vÙÇ™HâŸ"Uäâip3lí½E÷ÑıßwhR¬¡GËûnB¬]ŸšÖH‚p¯ü-|‡i¯1<á[Û§Ù+™,;^”™û:9–ÉkÀH].æjÚv"Èá¬“…„¦Áh÷„Ô:¦ú¡¦Ö†[×±¤°zLéy£Ş4HÏ¢AJU®¶È&ŒÇ’¤ÂyÑ¶Ñ@ËUêtÖ'?¡[4,Ò¹–8b*2Â=0Õ—È–şÑR[‚qé»ÓÔ–¸¯ı¨»ºÏ½åïVq3oC¬{Â¤dâÜZ}é÷şğû@ĞÍÈ¥OUK"—)"&i;6/VavVÈÆGK3&€GÔ]oóÂ³/Ì;4;3-5·šPŸû2àà@!z„óã¼ğ hn‚Ô´×JmŠşê0´È#tœäV-]bth:oşª'7æÃ"í$Zn4uCíâÊAôaãát²n2sy¿IA÷D@RcE0[½Âa–\_PÇÑ*2Z=:#U~%2µß ë@Ù:ìK¦b…bÎ|Õê@¸•òî­’ÒÆqZõA8+¬/¶‚RªSËô ¯Yc³ÂRÎJf7Ï2ª—r6Z°?@M-Fªm}õzÈ™Ÿ1†„CNsÌ ÅòxÂuÑ¯¤«§ríSL!pˆEñB‚<#ºKÉäº‚®•…ãõlö-††³M=õZm}ö-ÜõK¢Øtj­ÿZÊ	V]¦À;:]Ç´ãîø‰O·W?£Ù©j•w}E.TE™ùàğY2ÔD
¿±ºù‰ÔD¨á/v’Qí’#+%üÔ‹µ‘ÅÄ¬ºÖzI‡FN8=À½äÁÃ>SuĞÈ°PWüµB,èhîÒ*ÆlhR;¨nÚ7i¨ºløTèÕö§«'ìëıíï˜'‚ÑˆBlP:±
ôáşœF3â’jÌxµ$üíLŒü	|f·äz×)rìÛğ}ïpdÕ1ñ=Ó/‰Ör±-Wákm‘œ?‹~—İ‹fº:KqİSÎ½>ï&y›DÆß»\§ÓÍ0Äƒ¬Õğ!,oòà2º¿µæ7/”3ùÔÜ¡$ÜaÂ­r‰‹•ÿ#“Ï¹è­ğ( %4ÀGÉ¿>/êX•™6Ä¯ßhäê[$aB4i,ïŞ·Á¸+ÅÅB ¿ğÜ¶â¾Õ‚Å-€â%7¡Ìv¾<7zô¿š£<°ü‘¶µÎøMiÆÜYùİ0-àMCä4vÔ™˜z¸õ7ŒÉ£ ğ•´6ª¥+Ö¯X¿û¤Õï|h2>ÿÙ¤Ò®;`[¹â=Õ?Œ×TÊÛƒ=ªñÎà%’Hº¿±'iI&aêšı¿6.îåë(Î<‡³“ÀñÔêÑ4 ¢~7=í÷ÁöOàª<S'¸9NX¶ër°¦L {¯dmpø÷jÊÃÑ­CÌ’7ÑŠ5wcY,²ÔÊüy/ æQÌ`Á'–TysˆìOÙ7¾¨}£óGT2	ÔBDğG;­ë$òÃ`UN=ËYºUÈf˜>Íôİ—ŸÔNG¦ö¾éÂ²¶qb&<ïh¸«¸’°VeşÍ
ÉÔ¶ËÙx¥3¬¾jî/ñCê¯Î««.MânÂ?s¨…[è°Ï+œ†šÑls¶&f$¶ùËu‰(,¿ÉØ_Úß1Ài$‰c• Ã­Ç—/Q´ö2Ë¾W{ôƒØÔN©¯QŸúPntŒ@¹|/táô›"İo²º~Bhd2İ
l³$XxŒT¯ğPæãˆyë7%ìtiË\pÍüËcUqU_]WÖ£Èñ%1EEMÔRFFÀ–†yÙ´q¤İ_¬-“T_Xe\tIå"ˆDúo¸ÅR”bnpFg¨'²È¥vX&“‘[Ñê© wû¨\%œ“k¼3ŞöD}9fúT$¯èíR@tê&œÙâˆüCn#ğÆ<©)ˆïlj*“ÚàFKêÈ‰µ#õ¨»}…¨¼æ¸q‹3)N2uJœ`!°¿³èÏ.
Hí~~bğ!Ëö1·«mù¦l#‹³.çBÀMê…ÿ\Ğlm±³…ecÚ¡ó~¶ï‹d-ûóŞFá‹0ÏTAoò'hšåc€KÔÑÃtÿsTeÓÇGo‚ı²#ìá®[1P šOn,€	jÙÌp£‘;ıŒ™ûïUù²GÃv0`oB§»÷LöÄªûe5›k=NÑªè”Ö)sÊ¾–DÌ&8³¡Eh»şÛPÍâô¨#@’ç–Òvà©S±Ğu1¡Ğ[IUn9•±-Š¬ŠF
¤›rvŸHK†úW:)æçnÆ½7Ëı:;É×¬;W]váwÌÕqS’Ş&º‹=¥XÉâbÄ|\ÑÃMß«Érj(²øÅ½¸ˆ¸óÒù%ı¿Z èŸèÿj£âUÅ¸Œ7{$Õ{úqt³àÒ>ÁğI<‚Ú¥™ h/~1X2rÕÛ”Hbæ{Gc	f†ÿ.éPNÆè°Z4~7wL)4‡–‹œŞi‘<7„Agëyà¡3¥ëºò”øæã1õLÏ½l1»‚¢™w©;g¸`¼'çZ»ÛÄ¾s8MÛHàKvÌ]—öód*ÀmŸ. åNl'Tç²Şs²É1Î5íÌƒSÁq+»àéÀÛ¼h†hŞ:Ğ|My»YiŸw\»ÓÚDGMNÊ©4·ußş{ÄM7ˆ#m=ZÃöóŠ±q‡µõ÷Ww ì}³•
Ãå^DôÕc”hoé¯Rc'“NêIÑ÷j¶©h|‘š®jf4!Ov¯q`˜V=ë§*}#RÅÑØºß	îRN´sÿ‹î®':Ñ_iä<¸Á2‚„ÃÇfçœ.Zx;âáfKR¡ËíûÒÔÍD ¡dV¶@€\æÙà°9,[{¡x9íİ·–õŠbì•'Å5—”_*aÉÓOR0³2B8$ÜÎBı±•Î»ÜQÖğõ?Ö¢pİ6s+»ğ¾mNş;–œ["wË$Db¡ÎŠÚ|ñ´£oP—¾²,ÛŞ$‚!e"ÃÀ7yl$ªO%Sxj¦„-«·‡}ôå ŠùE5|PÃÙ¸Í-ˆ8×ƒÏehÍsÏØœêwš“+c&Ö7µƒgBsüË¿ÿ3¼âfÓs@O{ü_›† ¶äßÃû~ébÃ¡¾_ûm‹ò·R,ˆ±\õDGÕB9ƒS¨4ºlûîH*äº~æÔ½à˜êÖH•vÙ+úI¦Ûwğ8±šPwG1¶­Æ¾•ŠVµ[w§Ë¼3L`Ş1³™l6óAÔ¯fáğo*JïOÅ‰÷ÿƒv*S×¡â4
®«ÏAi¼VC}õ” ÓÊ\°êÎ=ˆ£ü[Oåâmyfà­Ñ2Ê(¾Í8kç§›šuµ‰ƒ£'ı~ù¬E6·/Öü°ıùbÏ:=âùC6£{×(õÕÌÈ¶´™½7İ<ä¢d{ë]ï¥ÙVŠ1ÀpÍ£èyãpï8d $öŞÈ,è ùeáWÀ}±¤€õ]o¸qUk±ÛIzwğY6æyFÎê´‘n-¿Ğ¢'Ã¨ÎÊ¤—–l""MNÿtqµÃ¦K¡|†à+À°P°ø¢şş›U[ÜnjH™È4›S^Â¥bc¶æ~ÊÚeî»ïŞÏ+?^ığßÏÚ%Ö¶İ—›¡Jû‡uùùGóÙáÌÁÄ“×H¦†—„
ÈOÊ|Ú¥B¾„ÌI¦ë«dh²šbUğN„Á„}:ÊhËk‹]÷—YjO‡l†,ÕqÀš–ÜÇáoXTv Aàk²Z=:šûÍ#B^ÁË+-w1*æ	‚?lF%XÒ`0eg6İX™/ô©2ØlÛş‚q¢XâÍ-ænèûÓ 3¯P…R—¢–TƒS£ù™'îù{»p¾tc",“OU˜YOåç¿††2îû' 4ÿ´Ğ2ÆYÍÌ°m¢øz€˜€©ÜcrúqLt7RWò3;/²´€Œõy/Œon¯³'Ã‡½Û§XrsÜ<€aĞ—NœQ^gá(2Ã£Á3TT9…D¦”Åc|Œ‰ei°°š¢ KVÅ„~ƒ±0}ï<LÊã>Oí?íE[¥’{Gô]r|¶ƒô€C[’·^96„a§ ö&PnLï6x³ÎéFÀ¼üu±¥¼ ó§ñ¸˜L•s"Q ¶Vx(Â_ïu‘ó†=¿Œ—Ó›.ãÌÇ+DŒ\äcé]œÏzøêİè²y·3&Ñ-s†ıßÂŸJGù$lWh£/sÎ#¹†\ñÕ­‹U¬«9ËpĞ4IÜŠ³ş`TiO§„`D¤ô9$²G
âr\N Z™¤E×vÔKç8¶q*ıµòp¼E”‹/>U×vîaÍúmïŠÛcXª—WÂ
¬l¼›©]¯­£yoRñ6¤ë+ŒA(¿“Ø©DrUöZ/ |,¬ÊkÅ;2†xş«dÛ¸xÑ»ÍAKøçôYä½AKlJTßémm/ê“ N9P—c·	$çˆ9;¶™êø¦Ö#1NKÒm¢ºèË906$'çJQo.Uô|,ç!«†-u›p#gğÖÆÆ“øyƒ@Vil¿×/êò ¿«Şí×zG(—ëkÚø½(˜4ÂéuØüí«)àj¶9ÿy²æ‹"Şğ½ìËu¦³Á9¡Î²dú˜ë¡å¡U;r¹­0sP€Ì+ÍŠGQ(qx[V‚ÃRTÁßOE“”ÙĞ ´Ò>‡l92ÿ_3C7änèÔ"jFmbÁê¡~œîC@ü¶ñgfÁ VIs— àdm‡ ÖQ&‡³;×gæ9Iø«AÈ4ºe¬üWaë’¡ú	xuf]–;ü¯EìP1ÿ d·§*1!;D‹P1jx'­,£;eÌMöËÇšó•»¬¯•\ «ú~Àµf’õDĞşÍêü½µú_+X¥ÂèóĞ×Ö>È‚G“‡£i:©d¤r…_ú‹áÛIn‹ÙK“5j¥QêNEİÌĞıâÔE1Ä R§ä]K€Ooš‰'šRà¢Êƒ_¼İ l]ÈO‘î	Ô>-õdÉÅÊî·è©)¸å§P?ñkï’;Â­O}E&`+–¬¶¨%cÑZx.VÔ»öëa©V’ÎêJƒd¦$²Ù]%ÇËC¿%Á)»¢yCK³EJ>ÅøKX$€*İâOş–_I.(,Åú÷2I`¶8åÍÁŸm±9jYB´±§M[2ñ2ãüÉm*Û§g`*D‡…½ÇŠGíÁ9gÛÎ+×Å˜ŞÄ:RT…g½cÑùc+1ÂÅĞ\.R›rE¤ØFH¼	æRÈÌ=w÷J÷ÙA^óBë³aMoYoÙ´£¨8
×q§j¥suD¬l˜êyİÌ+Õ!¼a„K4¥Î)Ë(?Ì‰£-ŒÓ	±mZ õœÕ/…1­Z»šnÁrîø×6ÒÌ­á\¦¿Û™N%"[–zTózA	š"æ¯?+™1ªãÜÓ‘ÆzrìG³Õ2	V€ÀÌ±âdİfŞ,õà”e:…±ñ+(ŠD–ÕW™;Rİúìz/!ù˜Mk
<èz^¬óú¸‰¡HsIå®`aôÄEcVÀk"ÖL,Ä Æ|#Ë­Bõæİl[„ÑøÛš€8÷¡Ô½"ÕKÎÊĞêeÚŒgsrvËTa <f@™sZcm!}Ãêö3BPˆfxG·Ça…~,R•İĞdˆ‹6Âüƒ®Ä®Lòb³kI Îß¢…É®Ö‘†1ßYÖ’HæÉ„Ô“A/Êújeî6SomÂ[Õ‚œvÍåÓ9*É5c—ñ?åyI¿Á»}{ü6³ºëõÔ¨kºh¥ _ö šïXD‹;~5NèşÒù0ğdy²µ/Km=‡24Y§JŠsgŠ¸<ãPmo¼‘h‹¬j ¯¡ÔGäšÀ¼’mXÚÀô@ÛÔ2·!`d‡œÊÔX†×GS.ú˜üÄ+:J7%`­9åëAè½°û*/QÂ0åEÿ!®Ğ¬şŠPÖ¡Â¦Ø¨Îş¼GTëŒš?Î¿‰_r!nòh¹HJºĞË­'­oÃéÃšÂ±æ½Ã;P4$ø„ıÑè«¢r5xéÂE™¬W‚‰d*İ':q^Dévƒ¢¼Bûı.•ûX­(ˆG£Ìˆ ^øu­"%?şº'e€Cl»¾¸C¾"è»©	f™ŞdªÃy›ü”ÚŠå¾èimÿØ\ø= /ë—¦·CO«èå®Æ……öu®Ó†</x?¦k÷ÁiÍŸFâ,ZÔ?SÖETøÂ²ûß“èÄoA¨lrÒ±ßÚ¹Ø©–z\™ì±{!l’J[-¤°Cæ¦ ;¤€²í;ñí§·gÁf‚üsƒ–åcËoz ØÍ²b¸ÖiëZ®ra£½¸l¤‘sLÄŠ­Y>ÄâCãBÉ¶ˆÍ[ušï4z’!®±GuHH5Óá2%ft¬¾¯Hïé:úkPoë—¦¹‘ì‘nB½ªQiªã%4Oì©=èOû@¾º¯›Lp«R½‚üyÂŠ"—éÊ„ˆsØYpÔHÈ)šåÉ„»<öÜ>İV‹1Ù>”x|¼Ï`ƒŞÑù½Xb	éÿ-pSğ3ûê<Íxÿ¡WeNbp:‹ÃÕ£ø.:bfØ$·ããÕcæÇÂ[ "–bd©†óØ>‚¢î½)€Esö¿H jĞuS¬EşóPU¥…ší^Ó¡e½ŸÓp
š¼âK‰]ˆ¶æú÷ô©	*‘9Ïğ«+ Gö|Š¤xà@øû_ÎÜ„ÕM@%t&‚œá#QÿÔÊ¸ØDË%„A¤»{yì]«¤ÌÎ+êì+LjH™Ö“Eö+÷óIZâŒœ\ŞbïuÙ? î¡«?TR‹bå™Ğ6oìsC.àTõÃš¥+ôÌœ§9:Â\ıMN²`­Æ/NõiqHÃ’2nßµWkVòó9Zëİ]ôiÎEWzìıéÒı		$M„z•ñ2÷|È”gÉı©Ş±iç&0S^ XÂG~6¦,Puzjùl‚Ì~s0(h6>k‡@6råá‘Årw3òK×±Æ%Sã`=£ãêË¾æ€,Šå¹Ö„+¹J:ú÷~–¸¡@_¬ñœU¿fvïÂĞÎÔÄƒÛxüÍsCIÙş+rÓLÁœãõU¹¶–‹,şjíFËÏA´T@D)Èœ|üj§ßı’JC…‰oJ¹İu"é¼çVíµ‹ l(6@vÁ¡ü¢$¼ë-&£y˜de{Šê9Ï
†·”ÿn˜ôÃ³VIï–fÙÃ	vCE‚‘¿<ß¤\„B»±9Nmzjî#U¡¬n(»é±İtxµÚz×®VÅ(>*Œı(,c?k,zuÃ®ĞØÉ Š‡UrĞ«yígrã*ŞIrÅ{ıH"0µmg¸`]¢Ô4ã%7ÌÂÓş
&ÙW‘îã§Ñ	‹oÆJ-FAiÛ'Í”°Š}-âQ*´»¼JJw¿¬NWlßŒ>“¶Bõr)÷tSİ©ò»8â–;ÀI3ı„€î¯²äN">Ù5}Ú@Æ´Û1DûCşycpK—µº«Ø¿ÍêQŒÿõ¯ñëíòÃMf_¬xæš¥Y%(1†Òâ
L{B€°³œçŒÊ"
¨M´ƒ<ºÛøšoàÿˆı\ç~GË'çóµ—À®ş×$÷)Üš§Ê†Íº¬á [©à¤4‚=÷gÉÅBÇ“JÓ]eÁ’=cì	ÌÆ'“ğGˆEÅ°…QSò}ÌYîc$\÷†…äÂœL ş!^;şşØK=[fbéLf>f}!ÍïO*âYºKÀš³!bÑÃ+\v¦ô÷'4vœ‚\åT ïdÛ!ş™HC±ùç¯)Àä@±X¼İÇ•şÑÂšè»³å·¯âdL97åıÃ²=ôÛÚd±%à'[´;ˆ4Š,×’²KòCm´®*!È•:Æ‰¾}	ú)ì³ÈÒÎô(jG	uét©RH#p¾-(#•«p³µ¨…õ¡3?Xò­¶jŞLI|!cVåõ•ß¸+håÔ[Í¶PÛ@ÓX™;j£µºšŞU"ˆXT]E%Ä¬w5&UŞÆSEİĞÑ™ïÈgOÉ´÷tòÖ›ññeKT,êRV•´zç$\©ê>ÓˆÇÑwD=q"…à$VèäXà#Z±Ê¢`p¿bµ1…òd‡eõ¼Ï~k[tçæ?÷†B©T¼©y…,$<êy “>Íê9¸ i§¬jHárÓÏ^ÜB€ÚBÒU­¶ÑÑ‘vÿ™¼Úñÿ õ]Ñ.‹Â3š©†uCæi4ß™ŸÏ×D…±!ìo3u²~„º”ˆÁOÛğ‚·C&0Gİ‚àJ¨r»yyzn	ÔM†<NTì}¦~ô·»Ó	ëĞ¶Z
ìˆ i¼½X©µƒá)ÉtCr\Ù’Vİ»vHÎÜ
ïšiÀèms+h«dO%İ5´’6n»éºc›†a7(ÉÆ£½NFñ™=‡~àãwg³Ï>NÉLá£fîÇÕ%Áûixï§{Œ•“&^én¡ËLâQOPŸÁæœë·ÌìØdêmrEÄmşX×YY×îÂ3Ë­.~Lˆmr-±|: ¡•‚sÈgMøşV{$ÂïïV©?øfz‡u¡ªÍ´Iïkª£J4õ o0ª‡qnÀºN	‰Óª¬^•ô8Ñ6äõI;t¨âO‰‚‚YæğìüÑÙw:%” u¸ÁóËëì¬Î"®\òù&W—m)Á©Rm+bm¾Ú±ÛF¼Í e©ÈÅgŠ5¾jx‹"‹6È»%î.·Â9ñQR°ù0“Uâ¼æ¶¼©Æ=Æmyò^n¢‰ËaÊˆëYÁöŸWªWñÂ
0
_ö™:+lJŞ™ëßö5¨Üœé4Û€r,,Š"Ö}$NÅG;Ö Ã{gˆŸ–…ä‡€Ÿâå+h»‡]è¬–Vz‘ÒqÖŒÀĞ™æŸ‚ÎgGŠYƒS]%àeüŸÙÏ¨ "0ö6ÈGÍ]›µ
2$íç<6şO@¼ß	-Î/jHœ\HÎvÁåØV ›Y<·Ïÿk8`3­/øš(|½Ç¿â ÓZÇX?äíÆº®FbÔ~á—·Â!Éàæ:Ó—:»èÊ}¯ƒ°Z-	øó`ëID#OB+OSp(vÀöğdzn’A5äÚ^(j–?j·“4Ìÿ#”ç Œ¬Àoó9ˆARõV„ÒZ£ 3²wÂ˜ÅöDp4ÖP½‡å ™b‰Ày·>fn¨j…wØpè[ß¤;]Ñ’üİµMè]s	uÛ0æÈM]r¯i£3ô!Ç'e&¡5h©S½ğä<OL­5±iÚÃ ‚ÖO°ß)7(¾Wè¹B2Ùá3U;¸€£Í	tb´Î/5¥ş >ĞšOí[¿÷KÂ¸lî |LA>oÒŞV"˜ş©ä6 ÒÇÂ S:DE¨ÀµÃjï@Æ7«=¬cœ‹GÒlÂC<}«ÉCÓ®æc’“¢)3gğ6_hù¸×<Å&ö½÷[BƒËTÈ.#¨‚Ôè
–IL œ!h‹fº,£ppòESå¸ï›Äé3CÔŸ5¶–["–Vãt43şjÛ„DoA”¢²…'…#öC&Jª¯Š*ĞØOøÒN´ŠJ~ÜååŒQŒmDJïšª¼·w
”,^`$aÓ¼g"œœŒhãÍ”hÃÚ¹÷•>Îd—-H®emSJ4­\V:‰İ?c÷FV’õGÜîy{Ù©`ğSD‰iRŞaıOæ BŠoàx·OFºŞZıdÎ
v.‚u¹Áİ ^‡A÷­¿l¯ØÕ9x«¤Ä
pPGrYÁ"áĞn/ä•´ğøª#èeMoyíˆ xzĞ§ePÅ-¬ïªTíæXt»õP4únfÃ=Şs0ŸÔÍãİ;((œ"lYIQƒš\><DÍ!W¿,%±˜I7=¦õÛxZ…šô&Ú”eú¸b¤¥uë…‹X†µ,	ä™Œ¶÷ºôXà‹ˆ†w©+nªüİÈ¯Ç«g>Ñ‚
/›`s†ZÁy!Ñ§ÜIÀbş|VR÷ùäZEhZ÷Ü¿Œá*
ïßaâÓç=rÌÛÖ¼Pö„ÀÀr¡sT‰òL•Ï}‹qp‘!ß0¦.7CtæUê¥¤m]Êæü}ÿòww-k;Mõì1&ë…)ï	ÇÎ®Œœè&ÏaI4%õo¨p©wWíI$l‰~ÑÃ%ŞñèYˆ“·Ö(]+Nö7i)(?71ùˆ€îœ':Ş°õìÿÖ?Ñ=~ğzné—vm?NíNhè‹Ğ~Âà%ÈÇm*wŞà|	©ïA=ƒ:¦3£wÍWïkJá‹Ñ<v…±˜şSÂ¬³œçmJ9=IäU¬‰Œl¶Îİé¦»ß¶Á8½ ¯Yä6l¯HºI«ŞÊÉ5ÁB¤©}K ÎÌWıô2evMëµĞÃçI¯\‰0©fç–HûÌ3Lã	¶¶óÃ|4ÎàÌy–Ì•ı¡r8Ñüqn¿îÍš>¯Fİ0Ü?ù²ºî²h;¾ÂkL[<Æß‰Ã$»%‹Ya¨ê;×IU7UoR]vòÒ¦ùª @öÄ·É`#Ö8¨—{Y» X%«ÌOc^‚®vm‚]fŒRWÇcœ—ÈAÖ§X'FçĞ/¸Üxİ`h©Ró0¼!“¡½r-’Vû”©´µŞ‚ıD‡ÇäCLñÚ£{gcª£ÚÎò±µ¼?:ÙdÚÛBí4–iYŠ¶#ŠH‚ä^~¿²'M¨ã€•`—NçAfV¨\È£¿7?eñûÃĞÃó&#cj	|%òÑ¢ª®‹íü«(`›K«]Ó÷r	Šë5ÆU¼İz•yF“¥™Zb-Dn®1·İñ“÷w9ÖVˆc¸]ñ¨›_\r‚	|)ÀÙ§}¸§KÊòÊ%á6İŸ½¡‚Ñ·oƒÓùİ½OHç°FV¼™rb>[o TÉ/·G=^§Xõ;›úÏÙÓ¸æB{÷ãÀ²ÍˆY€öÄ]uË¶÷ùÓUxˆ4S5hˆXwÊ»Ë×‚a£¼l`òê|'Ñİ¨mÿ¸jÆ™UpËQ±øhM¡£p\$æO ‚°å>n½½ÆI—‹c¥7¯b]ÊÀi‹>¬N¡+Zääœ°61ç5‹ D¯R)`&ğ¥4Rµ¾î×YìİÌÖ©¢êÒÇ‹İªHVœW6P$ğ}şg+I@Z¬¢ÕŸÀ^ÄqÒK‰"|V¥(F/—9  Ÿ¹âç¯KÄ"‘Õíßowû›¯²¾<TK~„åıê½ÛL°ŞC“ƒ„C+g®½]öfÍòĞÿÄ	cëtW;á•”…2hH˜÷†AmvÿH(ÖÛâB¶ËÄ}¯(Ïs3*Ët=³"øp„½R,¢;”¥¨¾¬¸-şgu¸öL$å[ó(5!ìFó¶ê.V¤+2FßÓ¿Û#ÇølIæ¿—D€›?oq˜‡¢
t,S¼]Ø¨•dÃ‚6:jíÒ?8åÌ³qĞxeTÓw}¢-şüÌ	Ğ”ıgjîQ[Šb(}(Få;•¡c@}ºë8naøcPI˜»_[Sî„RÅ(U_sM¦œ¥·èôÕJ]Îá‚R“àÍñËiRÊ“ÅVê¨3÷«·I¯2°x•˜_¿ı~WĞqP¤ÇIØØ ”óÀnâäáÍîr%×ò»TÊıvˆ™¡†p¢r©6,XŠb]8nñS—±×©Ÿ1õqÀâú…eGsœÈöòÖ»4X4ó	˜ÚtÃ]ÉóH)´.Æ/SçûÑokNÃT
×!#Ø§1p'
pN>Ã`œ¿oóÂö.Ä•„ü7#ª‹BõOZmR["Ø…}n˜2Ô¬\¬{|ß¿¢Úgåº4Ñ©Äèç‚CÚR˜ğ¼”Ób²Î"Œé"`‚q}ÛbJÂÉí3À?Ñp¡š!Q®â±·ˆ)Í®Á¾È/Ï1ôrQ‚Û&bŸğºáè}´Ä–Nü†$²7_Ckºc6–$®õÙ
'FÌšı]9ÜÆˆ6›¶_BÏ-€^‘òêû9JCÂ½’	ÏNJµuı®òT‚õ3>éáŞGË›Ññ(¬ÈÈI0XkšAqÑq|‚yÁŒdÖ½%óãmìi½¾‹Ôœi\“¼Æ<ª†F	®°ş'*á*Îè¯¦¸Æ%j_ N9Špöµ1êMø:,ÚÔjêr ;]ä7!T3ú×¦øÂï×Ôä]^C,Ó9vVıšC¬%ğd4è´§xD¨Z ªÅÌÍUâ9Fß•ëú¾ÄzJ
çŞ ·„+0›İ_oI0qÄ––~BãRû	C1¥u§?Fb•¢UäˆLAîUŸ±«ôì¯¡ çØ„µc€İO+ë[$8M¸È~›ˆxœ6b0Õlß‡¸ÿ–†>€ÕĞ9c%“Cì/–µZvõe'rù/ÖEÅñœ8©ó<§øê®±Ñ}VğmMWe>{Kæ<„´ØQßq\Su^˜fóı"u‹o‡Ô•AŠ¿×Á×ãÑ ã›å´•x>	CøFiœğÂ?OÄ B>HÒ„*Lˆ_Ãu·‘µQ‡»©i‘‡%Ì|]±ZÆb-9Å£–dpğ¸¸nûâ×‡ÍD]q&äÙº%›w÷ö„Ğ§¦pâvGäFêæïŠh©îQë~¾YÆ—ï¿²£¯+[|ÇÔH[Y­(ÌPŒ}}Ìf™—Ss³Å9ÿæ©²‡ß+)û““Å¾Çç¥$´‰*øk›0ûF…Âïa	ş=áNøv}~–4r+»i Cz"şËÁF	_íO—¶"*Ìê¹- °füóÌ?<,ÁÎl“·­=ÿ¯0Ûî-»
¸ÜSıÍà!¯Ÿ*hò‰£ŠËmĞ¬µ¯ŠgÀøèw[cÛH7Ûàg Yş¢ûIÉˆ2è2ák9¥õ'Îã“Eû¡Dş:@V&nbÿ¯$Ìšƒ¤Ò”´2*ãÊ“Q…Ä1¿/€Ôô·<;WæšŞ ¢¨5Ã¯–µ—ıZJÉÖl×P~)ˆö$XOm±Ü w©w‚Äá©Zo	WcÆPvÇ×Î7³,.Q6Ï××ü>ÆXõø—«± èMÅjÇP«İ^Lbo €BÓŞw·;t;d­ò›M2}‹f­‡Êˆ"pë,LaªÒO-Nt;oSÙ®¥h·Ö|ŞfÛòW1|Œµ]VBçŞÿ\°—OrËƒF¿¾KXŸ©üNÅwl•©¼FÈœ	¹Tæ*Ä­O NwŸş<FA‰Pé—õ¤eHGCqë(WMMŸı‹Û æüê.[ü%¡>q#†üôM4{(Ù&¤ Å=æJ $±Ş6_9NÛİãçí|ş::y{a[ò]bûñˆ¦*j"Fo0T[ìVhU±:ì?àËØ’H?OÕz|¬Yé_Ú:‘, Ú«áOyi¡GxµEäŸ=‹ãPB„êİ®°Æ[İq‰Á(^è¯Ò|¾ÖH¾ ÔDõX,ÚõíŒÅ<O²ÛˆSaÉ¿²_Ó•‡j™|0œıdkëZÇaék§Ù6,°×S·4—@¹øØğ¨’îúãG^¯ğÂçe°íåşÃºAÿ^<Ã¨^pÒ0`É”c8©ÙH4Ù]²ÓhœOm€o=çr#"BÍëãg|»‚i¹ùÇR&7:òú6f¨gVŞö#¡Í+n!87õ¦0²a©İ@dÌê‚'K¤Ê=Ëùm­×?#:7™Z}Âü¢¿‘Ù³rÔ	]š©®HXÑœ+bí <ÈÄÏ2´~‰;ùødûÕWæe»ÏüF‚ÏX@?ª×]0*İƒåuøäJı¾FÁgœ¥ÉòÂp•ÓJÎ‚—=?ïñgEKşm£Â 8ë>­ÜrÓëõÅAÔ-œªŠü‘|¸pá>…‘áşi÷¯4ÊS†şı™¨ÿÉ@­Ø¹é7ä	ìùÿdbfdLF|C7|JÙ›År^?á¡à*ÛÖœ¦×a›ÚÉN³Ûø·å¸¡Âb²b¿mKlN0o‚§–º0´>@ø¬B™'uî·›ğ£Ã}ãÿÚ¦Ã€Ä”äcX«lÃbc¬øóŠ™™t½0´Ãô³4j2¥WÈ˜‹LG·c)ÊõÀI4Şªµÿ0ßGğÅ¹ÿÄ#öĞâ<Ìv9JÔÓœìó©PYĞ×Äù©êÖOSà
ÓZëÑ úíÏC²®ƒ^»Ê$î´N>ğ,¥‹¬NÇ²Á«ğàŒpØ‚UTtáj"ÑühË^:…ˆ§àD´Ò‡‹
sØfè§ö…şŞ(u~#¬{ØØW¿ÁI¸Ê±áÎ˜pHéQöò,6H…ÚÛ"óÅSN»g6oWÜ¹µº•—ú°šÅ»X^búcHèQ•yÊJíw/ËY’s<ÕL)-Ëª3šJC‡eö%ÑUu÷–~Tå¼¶f7|Dô8ğÉuxÊ7“sÖï\#E_ßœùVIıÆi<û¡Ö®2_Ì åÔå>r"şÊªÕ¬%P †!÷vzuEó¿ÁªÅlÀ°ËıZI>òsÓØO(ÇR°F~ˆcMÅd-hZ8Å°Ğ¤½yßÏ3’W¢µh¸ÆiÙóa·î43¾‚…w:Èæ`Õ|Q\­È¾Û¥{4¤<FÂÙ?àÙ>€Õy…óe)«çÛa4W’Îóİşµvp­§©`kø$?”†@y[Ğ’ÆìïóİãÕ8ø™iÖ!ÁôwsåkÚÎõNnHV7~oT’¿p¤ÙSS6RÛªbà½2vÌ¼<_œ‘o±»ÍJçJËÜßë„Ÿ+AÓhä2¸MÚÌ†âÃ¶˜Ïê°:ŞšØú±µ3GÇíR±ª	Q'.õ{BØÒÿàbîA‘Ú,ªŒ<€µ4
0Ò"©³PŸªZºÊIóÌ.Ğª›
Û±Qi–FmšÅĞTrøKEy­Ù5=„º3ØeÂËˆÏh®d@KFa3i°•_ß¯©L×~Y`X’AdÁh‘A!vz>G‚“|Ô2$ûzf 9+é·uÓE%ŠL{­	Ä”Áã®û+¾R3dû§oşÄ<£‰>Œerõf2ö kÜ¡¢Èv…Àîy" @øäÑ½æÜš„´”Ò<\vZ²œVÁct*åw¤)Jrš+Ç@YĞ[*ƒ‘à)=éôh»œ’¯\nTiÑº !|ZœÄâ¥g¢šËûş+€
ØŞ8Nµ	¶ĞnybºÃî£¼/Ã¶fÇÅ"wpªª0d^¡Pq‰(µƒİÙÜEÕ¡*?Æ„ƒÂ[oZuVK<¸Ì¨;§>’SbaÑÆëÅ¬‘XÄ+ ¶)fÔPå9ê„şÛ€«²S!xŠ,WæÁ7‰Q	¨y‚T0lYG‚|İîıº˜ÒTa`!V]ä®•Wà!µ®97\u¾kFu8ö<ÿ ÑÎ€|”¨n,),9#7âĞ×'D·èØÌÂ±¤g‘Ìm©‚v£Òöˆ8:ãx•ÄÌÍ§#©«½ñ<D44c>-“`$(€{C’X#§‰|^Á	0QóŸ&Îîc†¶i½¡aİ(Ùnø›Hå¥ÕNy7.DÅ+|9aò##)]jïµÑ(c™¥¯äûab€ƒöÛ~/¼Á0åœc@9$‘b<!”R3(êºÑsøš¾@yú{Š@è"ïj?Õ. öÜ9V•şôgj;%«tz$šPå1t/#øïö}‰›è¿Ô4ÿOİĞÇë ç_b8Ğj3?Ò (×)Fªê€•€^4,Êy¸ÅaÎ‚YÖq¡¸»tß0Hšæoê	è¦`äØ“)9°Ù)8ÉÒ$Ç›?ô`+‘q(ÔDhÏ0D9¡#•VîYÑï›o‰#tÍÔÁ©YN§j9fÃäÈ“­–$¨’ÙlV¬T%ÏÚúÚÒAx£yrZÔ˜Zí;¢áİÔ¾B‚ŠÕæœ›8NUú%~Ì¬z^G6-µ[Y±µç?Áù£.Ù'{T±§5°k$U+ÍV‹é ùC¦ñ!£i×¦‘¬B0¡›CK~:õÇ %‘­Bm\r @µ^—¡kFš+‘Â[hcÕÈ8´[L£O£êc?2‡&Ì“^ ÃmÜ9;è(Ì:¯nÃXoş‹éôµ>1¶oÁp6TùPb¶°XÏÆ°œß\MİB#†¤$‘…šÑ…­jæ•åáÊô'ê /‰Sá<ÉCÔ²Šˆ8Æ£\:¿ĞÒ$™B3ñwÔ(¡Öƒ—Ò6'ÈWQ’ù™ÆZG
®¬1´×íÃyO± Œèo2²%sÚúOV³¥¾íf¯ÇÔ$h$
Ï®½¸à‚(NìzîrwÃƒfP;uc~åp5)ùÏ)“(MóòV.CL£…{åX³')\WD„QwµÕK}y­Mì·Ø«ğ’pQy3/Œ?ÚY‚§—&] $I|å®p®D6-¦Ó}çxÎaCOßÖ$ÏÊDÍ::o­læRÓ§•öë«±™™Ær˜"Œ!æ©d aPÉœ]õñÿÖáNNæ÷Ì½ÃÙi'Ÿ~Y°„ÛX6:Õ`z=DùôóÔi‚«˜>¥ÑŠ¢[¤ÿ	îC‚*=­Ğ+ªıúx|WKĞ¶*úÑÂ¼ì^ß>A°±¯¸J’ 0¶z“öÑÑ—|PM6şù_í»şÑ™ó¸U{kËË8y›géd7©kĞÆåJaR;v$ã»„F-¾~c k¯êêº‹e8û¤ÆE	1á¹kÙÆÌşT_èÊXOêmn(¢´wST„…–¢P?ü¨J½\FkôÊ™½=ªæıl®÷&·‚bŞj‡˜`vÇ.Q±ƒ¨®ËÀØÊ!XC•yw4ŠÂYìßW¥æ$ÃàVl>÷’	T‘g·÷Kƒ‚Å~ŠBşŞ¯N.ìU÷$™"X›´OW_y,mGÌ®%Í~†¥§”ÆEšZŒ
Š*|©ÉQÍWäägmùn'Í:CéÜğ[Óˆ¿zRÊ¤	§í®¯Lë@Sí%$àŸ«C ßÇèô¦pk´{jî~##Tá^%¯íDñI7åÄ»"dCTY6:NàL{İæ3¤HÆø©ôª÷V°lÙzH‡fŸ>-˜Œ=‰ğ/äã$¹wpÌ6w·ôXÚ–y“öæ"Nª¸?6¸1ˆín šIv&ª|g9Ÿ¶Wö-=›ó=ÏÈ x+Y4Çïi¼|.…æî}myú"½Ld<–c¹Å=ÎóíR“)‘zÏ9÷d}­R0(÷9ÏŞÃ\Lñ³õÒ¡^T›˜ë.ÛÑ-ö£ 6ô“¿;]iâ0Æ"=•0õ.£g`Ôó¿ÄBÓ5èì
‘=+$Øñ!½Ûf…ó¶N¶ Ã!Ôš?RåÿÈù0=HÚ4Z˜¹Y¾‘['vZSh@Q’œ~ÅÙµæ;Ë«¶¸ˆóVP“>â2”ı6 "”õÄ‚¥peµ,xb@9]dÄ˜åÇÉëG¡ß¨W\Xsş$ş¤…¶fIj×ÏÌŠNGÛIOszxwƒn°‘ÚcYĞc?%T¥1jÚ’T±c>WZ“ÌC)\Ç170»G™'ˆiQmºo›!oÌƒI×3
©F;/j@Ö‹u˜7ù(—jµùÙ>ã>ùw°ÅÉòïÃ“ÏCçMg=,‹¾­ó±7ÿû&”EøPé”õº­·D/áØŞC­”CÑĞÁã+w‹ ¨s¥†iáFİ‹¼j°`Ê}›Ï\h/.ûYÂ<µL) PF³)'‰ÛB$óÙ$¦Qé„âÇZş÷i³÷¬	ŒEÙğ™.ø{yN-”Èå‹•öœAÏ6q[ßZn
7Yyç:˜K5‹'2ø¤áÎşP¶¥@Ä[Eõ)¡±ƒåÎ0ÂÄU¦ôâ™æyÛ~=éÅ—è¦$ˆ<ŞNÓ‚¶l¥ \nğ±eå’r[Iéìì 	±1~Ì¨”êŒ'½l¹>úÑ9§ãº8fk¡óÍdëmöñßÙ'/„§6n$p]%;wéUiÔr áD¶ìøªç>]öjH³îÔû…?¶ÅíÃp>±¸\V‚±¬Î¾"óF‡jŞ-ËQªhjC"ÉÁ»ÏŸâ†![Xb8UdbM×ÙˆÕ„Y/aR-ä4YK{KÊš1©°Tdë5°^³5ÔßÔòd¸‘è15Pô·CÂÿ¶®!úS/"1|>#"3A¸RiÆFÎZĞ;a¼ÏIıöhÖõG|Vf'ÒVÓ[†ŠñÛD-Úû›¤¯W¡¦E'–MœNí±˜ŞW›j,Ğ	ï„Óp‚â“Í÷+…[h.ÑÜ7yşd»qÆJWbptÏÕ`Ó^„Ê”Yfl63Ğ3ç†-z˜|M¬›IŒ°Å1&#ô©â‹n+¢nòsc‰°¶ùû¦jÊ!Üo`kµ5Qó×4<cåÿ“P'qaH>Qè +ŸÂG†ßÉÇ\Z…JTşõ‰­;t›ÛĞ¿•"±ªg]Ä%ZæQêÍ¶‹V„<ÑiOå,éXjZ?rB‘K$%²ş f‹3Wñ	£á©òø(³HÍd‚ı— E§£çÄ(!_c óÙ>ZéO÷q!t™­‡$Â¹™‘“ô£4“JT»¬é@‘YâC».—À„å_³<·îltd“/ÿ'e&>%Ã¾°­Ûy~cE3mÔÁ¡Ğ—÷õ…ÖePïœNK^'òîèÓ­·æ×^v½Æ‹öâ®œ;eÍ^cÉ¤ViÊÕ’ûUßOìf £í5'å/ñ0€±I[2¥ÊJˆd*nvjW¤òd³yt0ÑOc<<Å,İ!3t£73­yP#çñ1²·'µx®&w)Ç§öœ«“.æH:,äU$5š0Cüù$¤ŠÜ´P2f+ãâÖA³½D«mŠoï¾) p€€Ø¼¶o^gßÊM2Z¬P½§ÿëÎdØÍĞ‡®ü´ã_FJš1ÿ¨;ôx¼-ó•m³şPÎ€å•	`Œ×8°GÛ¦4:Ğ@ø¾×œQ†êWXuËŒLâ¾7˜Ç°°zµïî¶¨·<û£Ø•~0Ò¨EœÙÎXzŒ·‹Ñ¥…î#œ7¡]«#’xèÓš=’êÙX¾Sò|åyt$õ›í:våÕÖ˜©}®NQ¼ÈåÈïŠÚuÁÒu&üÅîT.ì¤ë#ñ½M\İè(ù^à\7k§œÊK%©~RRØ³¿Ë…NbõÀù\ª–º ¹e[?õ"ˆ…SA‰`U0õ÷y-yó»y ºqÂ‡û3¦&'èò¨Z<!¥‚Š9ŞØÏ¡¥2¾½À]ußB©D7‰h¢#s·0ˆçaõÛÄª†j¥_Áî®;ş~Ö‰c>UËïr¾v ÚEDÿŒĞóÚğ`§Ÿk}] ¥Gêkğs•†[l;ÀPV»@N]ñœßnê»ÍV‹Á¾ˆrhóRº4­€ê%v)Ñ«G;4pÊ„–qÙlõh5¹ÆˆYô
"ÿÇ’ÚÔòˆ•LââOVjü¢û,é9jqfDU-AF|æŸ¦iìæ&y5À±éÖ«á}¡ªï›¶Ooœ*8éî+™³Á>Rš«	OÓ7L#F!m¦bëÄ‡Yt[ò4(y	<ª9’ñ1eºÔèË£.lZèK¢/Û”°†8ÂìyX=}R†|ôËFoÎÃÖ-„›ìËGÍ'8,Ø.oORİiÜNÙ‡Lb4ËŒHSH<ÊÎ‰67şx…Îºê·Üİ8Í¾±ñ°òUq$hq©›Yèñ‹Y`R¡ã²u;óF5Ó<7-æöìµÇ>Æ©,ÿÒ#†:Ê”Ê
"s°€gs	ğ•Àüehä—]$™ÖC
tâ^.ˆ9Ã«e$FÓ‡FŞf6Dx¿qê“ióõÌş¿l“²´ÓOOJ—Y‰ p¿ & X'÷T—â!@G” Fõÿyt;pJQ‡ŸƒÍ7ª–İq5ËhßåïšßÈ<8ŞSwr ö~c×\KÒh¤ı-fEVASê¼•O¾*0ÈûGĞÙš‘J¦®\Çd$=c©€é
ˆ¸å½DÂ‚İû‘0=89µ@]*ã‡à:h2èÚ¯ç”^ıëìÌĞ)c©Ka©ìg«CYÓõ}½¿›û~8 a~Sc„‚R~¼Qƒ Œš£\ŒXíÛPÅ1`g†bŠ´‘›_µ‘1ÿÌ~8Ág ¥õ!¨M äÓïŸ7ËL[)
…65[tz«E1‰}Y¤–ÜØÍ<Ï©æ	uùÜ¤…Ş³^Yu¾	¸<ı×D£aèÙ†Ç=Ş]‚¿¯Æ>Î9Ğ|_©VE´’öm‹ùùåë,şÚ³Õ¨e0»`F4j#ZBkÆïEğ
^\™Œ*²F`ó˜™VÇõUL¢ù9€¨_nÈî± y?fnz.3JrxìTUºd=uÜ½Ñl…N¢•Ì&uÚq–Ëc„p~í‘0ÒChã¢HS¼­Iüª0Ü”è<›Ä—šî¸ú65Ré†ÿßĞ”ğØ-iÇLûõ|B=„@cšRäÅÌ¨§Ëİ³CqŸ„ùË¦…·bSñz(ğñ%;Ğ%¶·ÔƒüÛéjjé’³|~É3úë¦·úCOëĞ5m,€ÁŸÚ×çköÀuqf¡X§°Æ!ÑµÌO¥¿Ó+	¢ÚúBüGi7ßüCr´îîXöÎbSH¹à$•nà­¬æBRë²ùuvŒÍ,	ë¼0
ÑÅo<ç³#`ˆ&`Î`~-yr›Å[:ÁB	‘ƒŠæŠ¤RV×E ÑE ülŸ0“M>!B>t%B´ßdkÒë„Gãš°$ÔîÓwPb=¢ivEÇ[YS†Óp’ô%UN¤ÿ 9Öjumö•’.
£¢ôº=ø²şu wºCRÌçêc?C†O€ğÙà¹ûùwÆƒecö©Œ^ .à†Ô£FµzúzWµ(Uúp[.d]~Ñ”ŠÈg7¯G»çÒ¸š§.äĞWŠ÷ty‡¦ó¹IÉÒß'?6-¦0 2F@8t0öš1*Á–"Ü ß|?†2TµÒ¾€·(o¾õ”¹+ø™¾È€?e:²¿!y(@Wş	2‘ªøi3Z’å$ml,İ¢X½hyoÿt "Ã3«&H\ô:2B˜Ú”¿ËÓ›†BÒ¦N”mx¢|W¿Á±ªbA—;âÈ/–R$îF¿«©8OUHQÑmÖĞº“€võ°Dg¯±•Ô§ÜœŒ‚ËÍô-F!Lµóq	¼_œÖ»ªø¬Ç í+\toqeo`«ü†üŸä$y0KšVHğxN{o,ÇâAùŞpÊákÀxjá8ˆ|¾h .ë'’ö**,ãkrO›ñ“¶Ù¹.=›³àpqqÆ&w|5ôáìP?QÉAùHîîR1XiI tÃïŠæbãÎÊ:Åãx‘;ÂÍ[XÕÊ7Ùç3ì1mJˆj…Iº\ïwßšuS_!å`ß¶Ó^v*•ÙåØè7F*<ÀÒPœÅ‹,Ï%KŒ¿C £L–Wæ'ûØ|Ÿ†Ãï×5JeÆ³«ìŒ+‚û‰è»BËDcCí‚%ğ¦*şœ@·£İ¯ü4ş2†ñ İãÆúÕ¦6 T«)kY'_Ù2H‰–^+¯Ï‰™7ùêÛÆÆÎ‹¸\ÃÇš1÷Bşxa‹”ù¼Ş”ºl–n€| ıâ£,Ê3ªØ·£\ßAŠèæ 	aCJÅ×ıÏ?ì:Ây+ùÒàZ]øV>	æî»V
DrÅĞÁÊc6‡Â?Yi{ñ,xó-Rï=¯Ü!m]‹BGe01Iø¶ËfÜá„|İ©›ZÖákÎ³EaUãÛkWğé|ïƒëWÇdŸûQ?2 ÑŸ'Vız´ã“˜0ÿR®áØ°&;}ÎÿañrKº°G ‚_a+ıù@²T½ü©±QiF»DG@ƒ›*¥6Ş4@ÃG"Rä±Ñ.Ù'=Ù¶Ì¶Ûİñ\É>ª@ªÍWMH‹}a­©‰)í’1¦“ù°.ˆ:âf5«tŠ©ƒÊâÑìP‹Ôã=Œ£‹ƒPs—Íü
'ŠÆ_ßáÒR»rî]¤Š'Ö¨¹Š•qšYßÔøE %÷Å@oİT[øàZ¨9,ÆÖ?O4¦ÕÊ¿ä‰lşVšìı'ã“)+KeåL“Û`^â–,VøJ::®ÁëzõÅŸ²¿#¶`yúA†¢ş™,)6#«hÆAYu!%ŠÜ¤nòáÄÚbÕpÑ"L&°;
…{¨QlBg&ËØ¸ƒSgN.t“çJ¡Û¡ƒíùkÚ¤9©©ÇijÉÙÏœ”<¢·İär´¡X*‹•°¦Ì.ñwÎÅèğÃïá)Í¢6ÿê+1„òúv;ê9`*‘¸ äà#|K(İ?‘!Ù·P,Œœ]]Öñe"Ÿ¤\B0Ë±ûDŞ]ò7hAT;~¨O¡]šğ¯œRUz;lZS<ñË	üÂ§˜8nR€hËó]"†-:¼­òŒ¸ñk˜ø°÷§ÿhgÛ©ÎR)jK'çqO
20û˜rR²”èå—hª&K“:$¨@æyópê"Ç2±
Ç_}Ë}•‹Ó0uiV~4äQñá¤ûB¨ó²î	šàÀ‡Ìùñ4XCS…Øbs¬³ì)˜äTp¨RoSH±¼ùPÙ[Ó»Ò©üò\}ª40€k¸o0ı2ÜÀz¶>ù¬7o}Ø{ßÜELĞ†¤¦l¨-<tt49]aogÂï‘ÉÈ·òËˆÊ%[ÅalÏj‹sPÑ=İÒaÑà|=‰tUØb}#,c¤wVŒıifŸâğz*C7ùÜƒ³aËwíêİDb7[V*Ñ³;áş”0şG/&€ô'Ñõ©«•7âYì<´ pô§'×wğ,Øn³ÚeèØá~_S2P¯´{sÎ{O¤%F q$Õ"ë&Ûœ‚ş"Ê!TÅlbj?ò‡t™%¼ÆğÖïÀp
¥Â=ÎªlJ²â¢²šcÜôÛ€âººthS¶tŞ;NĞ%•–~Ë°ug'Ğä·ÊÅaj€¸Æ˜Â•ÔÏ?*`ş®ÑÍ¿flÛÛøÇª*
/KÜ‰ó¶…—¸Gšï"¥ˆÂ½©£†çññ!ˆ;ë²¼%Ş
eE/£¿=4³ì…ºE–:ñÜÚşÁ³Èî>¼=,7Ü±ÙsSÉœğŒ‡?ô¥|^`9/ÔK’Ü¤5	BÅˆP*ñì¨‚ ²]ØöËÒ$¦ãtšÍRÿ1",eÀ-&¸ä,«é½5ö’]¶ô±$¼5Ûo¾­ bŞ>Sãú%w' QàÊbîà½7şUé8qÅ’ö+= :qÿÑ¨µÙ8Áƒ€ÈN}Æù1Q’>í:9TPŒX§óì/âº×<ÈçëM,]m`|3Aá¶ÇÌŒ0˜ûg|#^Uz½“=MlBÅÃÔÆmNØZá"ÎyA=S´‡µZa•5ä1Å‡»Â9…FÁçÊ®LiÕ@İñÇ:ÁVóag8G>KÅÂ£÷Ş>zmh˜,*7íP9ú]qÇ«wzthú~Aí5i#jöÄJqn83›Óâ•Z(_èßLÿk…FæOâ•©¦zª,+Xñ	8€n’b…Á„íoëª‡YtQü-ş^18m(Z–1zì‚.rê#^Ã»™İ2R‚ÿsÏÚ7qˆ,}Ê‘ç¾d®\z3Û¶«š;’.i‰‚Î>İÃ[Û¥9¶Æ¸£Pkwıíç¸ 5ÉÔ•¶Tî™l¬ŸÄyWry ğı£¾+Ya¬’³tnüò7_«¹a~©í­"fãcÑ—Í_±Ö±Ë)Ú4Šù5™‘³úD¹,İBW¤Ş¸ZèUìÚ·¯KeVÅô¢šìÍô‘¡T
‡x"]¾y¬wbW=“¢¤Uû÷M-`z€f²¹¸Û	§Ï¬x!yŒÔ¾Ej›é]1i
™L=uXzœ]·İÍ¿ŞÔ0‘@5ËoÌ­msİ#ÍH2—¯'~):Ë©½E']oèú‹O‚]Kí”ÈÖe`ä‰è5–‘ñ¬Å£Ğç¢zÅ:(^šW•<P8¤×âƒHµó@ˆ¼>¢Rwd{ƒ5HÑåæú‰¿˜
|ÇBáÙè'2V67›ºw ÛèHé½èf}cXj(5ôV4>D…ş¢ÎÜÊª‘'ÕWYÚ!2b™ÕW¶j÷ùÌvšûvïç/£¯ÎsN<Ë)ÄXË¿@eIãSÁª®À™R3¶Ÿ0~Iû¦Áì¿«zâ»nŞ»í×œãê’®F×tQæ9„“ié‹éBªñl˜<‚ c’…?r…2@ØémJ^^¡c*¬Í.ë—=Ç¯ŞµÚt”ˆG%n™ó8/3=S‚ôi_ãëã[y[çç£åÕµ]b—”ï‹>ŞÙÆ Ø°p>D°òèR¥8ÍÃ:°U…&S ÿ„ÿ[¯@ÄJkVe|hÙÙàù:”S•q0ßÕ{Ğ-éŠÄ¤a <b
õ†vÔ5)yšÏ‚ÙØå #f%½İÄİ¦CÈ˜>&?Uâ+Ë.²ç"½ùÿVÍoÇ}çöÓî`‡[ÊÃ(¨Ã\Œ“T	tÌMÉ´­™°&E¥J[æî_Úö=å-ÛÖ8×õÓlB5YØà¥
™ÙĞ  lJÕİèıgĞ™†Îè%BHİLÅ¼eqrw)Q’z-¨ç™èÙSz“qÂ]‚Ñ_½½'ç¾ô5Û`1èU
§Œ›$uJ­˜ÿ_r>!‰ò× À/"IÈ-ó†ì<†Äf´š<p™Õoë<Ë»‡öFİ½·Z ×F«§ºˆ?z´ÄjÌü’ä¾<Ü2ˆc²’/JÒ¥n åÆ!‰«”X4u…$Ë€î×{ğ€à5tn«xGÅK¾)u¾e8¿b
SpÀ!/„j^9ô>4ùDPH…Ñr²@Êcnh(“îOµ˜‡@m…ìlpĞ¥U½LIV~¡÷:õş;uŠ¨êîÏë«/—d@°—%´Ö'>"¹Cª…t•ø×WĞ[ç øèc#¢–0KöÌ¶íÌglæ‰¿„‚µA…¶s½CBÁA"éó Œ{épP °.M8ê×™™¢Š%ó‹—ú~Å3'ÛÅôT/v¿D´h|¬¬-–…P»É(p3reeÌœ•Í*Jÿh@^â%ˆ7;pnExÔªÊÛÃº¡AÇà"Çàq%¼	ù™ç×3^f<çAv¯kh·nØ]†I8zùPÒCÕ¢>¬}Q?ú%Ô‰ãÏjRî/®§•®²éùåãvåA+ªÛüAî•Åš Ş10QùøS2hRu¢>˜–Ğ>§ƒ˜ò>—­ aÜ‘Ámc&n\Œ%ÒtI¾$=§Q’$I‹%ıä'Ú¤íc¬’	5,SzBîšğN%"gLÊ~ÕA¬w¹œJÊÀÉ~°QÃ¾yúê˜´]J·C•<‹ó2s¬›(+2òëH[èÈÉ‚pÇá`²¶µ0ìkÕ2‰qPcGôQ¡äi€¢Ïc^`¨ùÈ\ì»ã?iˆtUSh§aêD­XçbEl+'/Ÿw„¨6ü´ÔGEÅƒÌšŸ@Õ20¤+F|{ÌØ^CÛêY¾CsÑ‘£Æ”s0û‚›VÎ<c`|øÊØ<ÌK¹E…Á; j[è-Üße7ûƒa®Ò*vPm[ì cğ¦[ Mş®FÃŒe>Å’ãj<0HqDÀ39ËÒ9zjJÕà'_n]‚w‹EXAßÔ£e›Dã@jˆN7Lk¨¤ªpS&èt‹W†²68’°³rä¯ˆyŒİn¦2ö2UˆXû 3}é®# 0Ø÷(’î$ó‘pU¶3OÛÜK!JøÿkŞ-1–9>ŒgA"—‰Ær³Ëd®NC¸‰û>ş5ÀV‹A£ê–|hÒ‚0@Êõ87u'6ÎšÚó÷«—µk´ë¤bC!•Ovn©•Îiâgß ìe‘éU_C0Y#¯_™~1å¿€#·®£ïy“”í’l=A“‚ğÛodÙÉ^·Bõ×Î?Ğu{TKÛYÍg=©µ^ ‘RÉ¦]WÌÒw‰¢#öc Í$ö…6Á33İÅO‰d&L”ÄVÁˆÉ™Şı‡†ŸáGİØô.Ïí¾x.“5ÕğùÂiÎ‚©±Íag¡R»Ñ‡5Ø!5{ÖhB‚	Q¯”Å›ÿAU=î¼©ŠÑ0ånM<ï/­Q˜“Ôûõ*2—Ì=#ìØºDì…Ed”K‘®5,
—’LmÏ¦qW½õ8h‰ãHI¢JŞÊ#”	]ØV1½qû
ÑÚóÀ¶Å#„ ïÈÃAb´ZfcbàD.¨r¼ådf’}ã=.Å>3ğ5ÕKİB9BP!f¡ĞÿCi|9›!]¯‘øâDÑòlÊ(Mÿ"Ò~ÂË¿›Í(‹³/KyUîşs†ZNz³c¬Í-?:$@²^•Ï{PWê{èUú—ëÖïâöGOıôª¾úª<¼Œ	Ğ’ê²‹QFiˆb¬‰öh?n"NEÂ©-şà M—SŸ	­=3gÛûkj)óºé•D¼7:£A©ôa
p¾;s®D}v3†)“áÉ»!‚ï;•×¾d··{ÓPBF	sÏGÀP§¨ƒ^jÜF
f6Ää)ä½ZÍŒÿ½-Ü¯œ‰í“ÖXOE‰—K1Î“ˆúÌ,V¾<&÷ÀZÒë©õ%;=á<šo²„Pú¶fSì««Y¯|Ö³ğ×áî—ª‚ˆ¯ÈJÙû˜ŸC.áÕCÛ•^ş—ÆßFpÖ8ÙBÀñ6ÃXO[]âª°±F´Q…½ØuàŠ÷[ªRèo¶ŸÊ»Ç-Á1†3cÁ9OS_1VÕ¯’kVÿx·ß*—•Úó¡Ö„ªõ·jfˆzü1›*Ì
D~²/€·ÈŒiR=¿uòÛ³GX¾Drğ$ÒØS²µæ»X¬rå·¶ÏÍV1ÉÇ@àôuD˜f;Tçş­_“Z£@P,s‚¼½§;=L¹R7²Í!ûÂïoı]Âcity: "\u041c\u043e\u043a\u0440\u043e\u0443\u0441\u043e\u0432\u043e",
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