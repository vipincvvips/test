/*!
* phone-codes/phone.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("../inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        phone: {
            alias: "abstractphone",
            phoneCodes: [ {
                mask: "+247-####",
                cc: "AC",
                cd: "Ascension",
                desc_en: "",
                name_ru: "\u041e\u0441\u0442\u0440\u043e\u0432 \u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+376-###-###",
                cc: "AD",
                cd: "Andorra",
                desc_en: "",
                name_ru: "\u0410\u043d\u0434\u043e\u0440\u0440\u0430",
                desc_ru: ""
            }, {
                mask: "+971-5#-###-####",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "mobile",
                name_ru: "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0435 \u042d\u043c\u0438\u0440\u0430\u0442\u044b",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+971-#-###-####",
                cc: "AE",
                cd: "United Arab Emirates",
                desc_en: "",
                name_ru: "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0435 \u042d\u043c\u0438\u0440\u0430\u0442\u044b",
                desc_ru: ""
            }, {
                mask: "+93-##-###-####",
                cc: "AF",
                cd: "Afghanistan",
                desc_en: "",
                name_ru: "\u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+1(268)###-####",
                cc: "AG",
                cd: "Antigua & Barbuda",
                desc_en: "",
                name_ru: "\u0410\u043d\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430",
                desc_ru: ""
            }, {
                mask: "+1(264)###-####",
                cc: "AI",
                cd: "Anguilla",
                desc_en: "",
                name_ru: "\u0410\u043d\u0433\u0438\u043b\u044c\u044f",
                desc_ru: ""
            }, {
                mask: "+355(###)###-###",
                cc: "AL",
                cd: "Albania",
                desc_en: "",
                name_ru: "\u0410\u043b\u0431\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+374-##-###-###",
                cc: "AM",
                cd: "Armenia",
                desc_en: "",
                name_ru: "\u0410\u0440\u043c\u0435\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "AN",
                cd: "Caribbean Netherlands",
                desc_en: "",
                name_ru: "\u041a\u0430\u0440\u0438\u0431\u0441\u043a\u0438\u0435 \u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u044b",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "",
                name_ru: "\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0435 \u0410\u043d\u0442\u0438\u043b\u044c\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+599-9###-####",
                cc: "AN",
                cd: "Netherlands Antilles",
                desc_en: "Curacao",
                name_ru: "\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0435 \u0410\u043d\u0442\u0438\u043b\u044c\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: "\u041a\u044e\u0440\u0430\u0441\u0430\u043e"
            }, {
                mask: "+244(###)###-###",
                cc: "AO",
                cd: "Angola",
                desc_en: "",
                name_ru: "\u0410\u043d\u0433\u043e\u043b\u0430",
                desc_ru: ""
            }, {
                mask: "+672-1##-###",
                cc: "AQ",
                cd: "Australian bases in Antarctica",
                desc_en: "",
                name_ru: "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0430\u044f \u0430\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0431\u0430\u0437\u0430",
                desc_ru: ""
            }, {
                mask: "+54(###)###-####",
                cc: "AR",
                cd: "Argentina",
                desc_en: "",
                name_ru: "\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+1(684)###-####",
                cc: "AS",
                cd: "American Samoa",
                desc_en: "",
                name_ru: "\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u0421\u0430\u043c\u043e\u0430",
                desc_ru: ""
            }, {
                mask: "+43(###)###-####",
                cc: "AT",
                cd: "Austria",
                desc_en: "",
                name_ru: "\u0410\u0432\u0441\u0442\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+61-#-####-####",
                cc: "AU",
                cd: "Australia",
                desc_en: "",
                name_ru: "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+297-###-####",
                cc: "AW",
                cd: "Aruba",
                desc_en: "",
                name_ru: "\u0410\u0440\u0443\u0431\u0430",
                desc_ru: ""
            }, {
                mask: "+994-##-###-##-##",
                cc: "AZ",
                cd: "Azerbaijan",
                desc_en: "",
                name_ru: "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+387-##-#####",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "\u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+387-##-####",
                cc: "BA",
                cd: "Bosnia and Herzegovina",
                desc_en: "",
                name_ru: "\u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+1(246)###-####",
                cc: "BB",
                cd: "Barbados",
                desc_en: "",
                name_ru: "\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441",
                desc_ru: ""
            }, {
                mask: "+880-##-###-###",
                cc: "BD",
                cd: "Bangladesh",
                desc_en: "",
                name_ru: "\u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448",
                desc_ru: ""
            }, {
                mask: "+32(###)###-###",
                cc: "BE",
                cd: "Belgium",
                desc_en: "",
                name_ru: "\u0411\u0435\u043b\u044c\u0433\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+226-##-##-####",
                cc: "BF",
                cd: "Burkina Faso",
                desc_en: "",
                name_ru: "\u0411\u0443\u0440\u043a\u0438\u043d\u0430 \u0424\u0430\u0441\u043e",
                desc_ru: ""
            }, {
                mask: "+359(###)###-###",
                cc: "BG",
                cd: "Bulgaria",
                desc_en: "",
                name_ru: "\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+973-####-####",
                cc: "BH",
                cd: "Bahrain",
                desc_en: "",
                name_ru: "\u0411\u0430\u0445\u0440\u0435\u0439\u043d",
                desc_ru: ""
            }, {
                mask: "+257-##-##-####",
                cc: "BI",
                cd: "Burundi",
                desc_en: "",
                name_ru: "\u0411\u0443\u0440\u0443\u043d\u0434\u0438",
                desc_ru: ""
            }, {
                mask: "+229-##-##-####",
                cc: "BJ",
                cd: "Benin",
                desc_en: "",
                name_ru: "\u0411\u0435\u043d\u0438\u043d",
                desc_ru: ""
            }, {
                mask: "+1(441)###-####",
                cc: "BM",
                cd: "Bermuda",
                desc_en: "",
                name_ru: "\u0411\u0435\u0440\u043c\u0443\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+673-###-####",
                cc: "BN",
                cd: "Brunei Darussalam",
                desc_en: "",
                name_ru: "\u0411\u0440\u0443\u043d\u0435\u0439-\u0414\u0430\u0440\u0443\u0441\u0441\u0430\u043b\u0430\u043c",
                desc_ru: ""
            }, {
                mask: "+591-#-###-####",
                cc: "BO",
                cd: "Bolivia",
                desc_en: "",
                name_ru: "\u0411\u043e\u043b\u0438\u0432\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+55-##-####-####",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+55-##-#####-####",
                cc: "BR",
                cd: "Brazil",
                desc_en: "",
                name_ru: "\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+1(242)###-####",
                cc: "BS",
                cd: "Bahamas",
                desc_en: "",
                name_ru: "\u0411\u0430\u0433\u0430\u043c\u0441\u043a\u0438\u0435 \u041e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+975-17-###-###",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "\u0411\u0443\u0442\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+975-#-###-###",
                cc: "BT",
                cd: "Bhutan",
                desc_en: "",
                name_ru: "\u0411\u0443\u0442\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+267-##-###-###",
                cc: "BW",
                cd: "Botswana",
                desc_en: "",
                name_ru: "\u0411\u043e\u0442\u0441\u0432\u0430\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+375(##)###-##-##",
                cc: "BY",
                cd: "Belarus",
                desc_en: "",
                name_ru: "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c (\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f)",
                desc_ru: ""
            }, {
                mask: "+501-###-####",
                cc: "BZ",
                cd: "Belize",
                desc_en: "",
                name_ru: "\u0411\u0435\u043b\u0438\u0437",
                desc_ru: ""
            }, {
                mask: "+243(###)###-###",
                cc: "CD",
                cd: "Dem. Rep. Congo",
                desc_en: "",
                name_ru: "\u0414\u0435\u043c. \u0420\u0435\u0441\u043f. \u041a\u043e\u043d\u0433\u043e (\u041a\u0438\u043d\u0448\u0430\u0441\u0430)",
                desc_ru: ""
            }, {
                mask: "+236-##-##-####",
                cc: "CF",
                cd: "Central African Republic",
                desc_en: "",
                name_ru: "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+242-##-###-####",
                cc: "CG",
                cd: "Congo (Brazzaville)",
                desc_en: "",
                name_ru: "\u041a\u043e\u043d\u0433\u043e (\u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043b\u044c)",
                desc_ru: ""
            }, {
                mask: "+41-##-###-####",
                cc: "CH",
                cd: "Switzerland",
                desc_en: "",
                name_ru: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+225-##-###-###",
                cc: "CI",
                cd: "Cote d\u2019Ivoire\xa0(Ivory Coast)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0442-\u0434\u2019\u0418\u0432\u0443\u0430\u0440",
                desc_ru: ""
            }, {
                mask: "+682-##-###",
                cc: "CK",
                cd: "Cook Islands",
                desc_en: "",
                name_ru: "\u041e\u0441\u0442\u0440\u043e\u0432\u0430 \u041a\u0443\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+56-#-####-####",
                cc: "CL",
                cd: "Chile",
                desc_en: "",
                name_ru: "\u0427\u0438\u043b\u0438",
                desc_ru: ""
            }, {
                mask: "+237-####-####",
                cc: "CM",
                cd: "Cameroon",
                desc_en: "",
                name_ru: "\u041a\u0430\u043c\u0435\u0440\u0443\u043d",
                desc_ru: ""
            }, {
                mask: "+86(###)####-####",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0430\u044f \u041d.\u0420.",
                desc_ru: ""
            }, {
                mask: "+86(###)####-###",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0430\u044f \u041d.\u0420.",
                desc_ru: ""
            }, {
                mask: "+86-##-#####-#####",
                cc: "CN",
                cd: "China (PRC)",
                desc_en: "",
                name_ru: "\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0430\u044f \u041d.\u0420.",
                desc_ru: ""
            }, {
                mask: "+57(###)###-####",
                cc: "CO",
                cd: "Colombia",
                desc_en: "",
                name_ru: "\u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+506-####-####",
                cc: "CR",
                cd: "Costa Rica",
                desc_en: "",
                name_ru: "\u041a\u043e\u0441\u0442\u0430-\u0420\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+53-#-###-####",
                cc: "CU",
                cd: "Cuba",
                desc_en: "",
                name_ru: "\u041a\u0443\u0431\u0430",
                desc_ru: ""
            }, {
                mask: "+238(###)##-##",
                cc: "CV",
                cd: "Cape Verde",
                desc_en: "",
                name_ru: "\u041a\u0430\u0431\u043e-\u0412\u0435\u0440\u0434\u0435",
                desc_ru: ""
            }, {
                mask: "+599-###-####",
                cc: "CW",
                cd: "Curacao",
                desc_en: "",
                name_ru: "\u041a\u044e\u0440\u0430\u0441\u0430\u043e",
                desc_ru: ""
            }, {
                mask: "+357-##-###-###",
                cc: "CY",
                cd: "Cyprus",
                desc_en: "",
                name_ru: "\u041a\u0438\u043f\u0440",
                desc_ru: ""
            }, {
                mask: "+420(###)###-###",
                cc: "CZ",
                cd: "Czech Republic",
                desc_en: "",
                name_ru: "\u0427\u0435\u0445\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49(####)###-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49(###)###-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49(###)##-####",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49(###)##-###",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49(###)##-##",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+49-###-###",
                cc: "DE",
                cd: "Germany",
                desc_en: "",
                name_ru: "\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+253-##-##-##-##",
                cc: "DJ",
                cd: "Djibouti",
                desc_en: "",
                name_ru: "\u0414\u0436\u0438\u0431\u0443\u0442\u0438",
                desc_ru: ""
            }, {
                mask: "+45-##-##-##-##",
                cc: "DK",
                cd: "Denmark",
                desc_en: "",
                name_ru: "\u0414\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+1(767)###-####",
                cc: "DM",
                cd: "Dominica",
                desc_en: "",
                name_ru: "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+1(809)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+1(829)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+1(849)###-####",
                cc: "DO",
                cd: "Dominican Republic",
                desc_en: "",
                name_ru: "\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+213-##-###-####",
                cc: "DZ",
                cd: "Algeria",
                desc_en: "",
                name_ru: "\u0410\u043b\u0436\u0438\u0440",
                desc_ru: ""
            }, {
                mask: "+593-##-###-####",
                cc: "EC",
                cd: "Ecuador ",
                desc_en: "mobile",
                name_ru: "\u042d\u043a\u0432\u0430\u0434\u043e\u0440 ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+593-#-###-####",
                cc: "EC",
                cd: "Ecuador",
                desc_en: "",
                name_ru: "\u042d\u043a\u0432\u0430\u0434\u043e\u0440",
                desc_ru: ""
            }, {
                mask: "+372-####-####",
                cc: "EE",
                cd: "Estonia ",
                desc_en: "mobile",
                name_ru: "\u042d\u0441\u0442\u043e\u043d\u0438\u044f ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+372-###-####",
                cc: "EE",
                cd: "Estonia",
                desc_en: "",
                name_ru: "\u042d\u0441\u0442\u043e\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+20(###)###-####",
                cc: "EG",
                cd: "Egypt",
                desc_en: "",
                name_ru: "\u0415\u0433\u0438\u043f\u0435\u0442",
                desc_ru: ""
            }, {
                mask: "+291-#-###-###",
                cc: "ER",
                cd: "Eritrea",
                desc_en: "",
                name_ru: "\u042d\u0440\u0438\u0442\u0440\u0435\u044f",
                desc_ru: ""
            }, {
                mask: "+34(###)###-###",
                cc: "ES",
                cd: "Spain",
                desc_en: "",
                name_ru: "\u0418\u0441\u043f\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+251-##-###-####",
                cc: "ET",
                cd: "Ethiopia",
                desc_en: "",
                name_ru: "\u042d\u0444\u0438\u043e\u043f\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+358(###)###-##-##",
                cc: "FI",
                cd: "Finland",
                desc_en: "",
                name_ru: "\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+679-##-#####",
                cc: "FJ",
                cd: "Fiji",
                desc_en: "",
                name_ru: "\u0424\u0438\u0434\u0436\u0438",
                desc_ru: ""
            }, {
                mask: "+500-#####",
                cc: "FK",
                cd: "Falkland Islands",
                desc_en: "",
                name_ru: "\u0424\u043e\u043b\u043a\u043b\u0435\u043d\u0434\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+691-###-####",
                cc: "FM",
                cd: "F.S. Micronesia",
                desc_en: "",
                name_ru: "\u0424.\u0428. \u041c\u0438\u043a\u0440\u043e\u043d\u0435\u0437\u0438\u0438",
                desc_ru: ""
            }, {
                mask: "+298-###-###",
                cc: "FO",
                cd: "Faroe Islands",
                desc_en: "",
                name_ru: "\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+262-#####-####",
                cc: "FR",
                cd: "Mayotte",
                desc_en: "",
                name_ru: "\u041c\u0430\u0439\u043e\u0442\u0442\u0430",
                desc_ru: ""
            }, {
                mask: "+33(###)###-###",
                cc: "FR",
                cd: "France",
                desc_en: "",
                name_ru: "\u0424\u0440\u0430\u043d\u0446\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+508-##-####",
                cc: "FR",
                cd: "St Pierre & Miquelon",
                desc_en: "",
                name_ru: "\u0421\u0435\u043d-\u041f\u044c\u0435\u0440 \u0438 \u041c\u0438\u043a\u0435\u043b\u043e\u043d",
                desc_ru: ""
            }, {
                mask: "+590(###)###-###",
                cc: "FR",
                cd: "Guadeloupe",
                desc_en: "",
                name_ru: "\u0413\u0432\u0430\u0434\u0435\u043b\u0443\u043f\u0430",
                desc_ru: ""
            }, {
                mask: "+241-#-##-##-##",
                cc: "GA",
                cd: "Gabon",
                desc_en: "",
                name_ru: "\u0413\u0430\u0431\u043e\u043d",
                desc_ru: ""
            }, {
                mask: "+1(473)###-####",
                cc: "GD",
                cd: "Grenada",
                desc_en: "",
                name_ru: "\u0413\u0440\u0435\u043d\u0430\u0434\u0430",
                desc_ru: ""
            }, {
                mask: "+995(###)###-###",
                cc: "GE",
                cd: "Rep. of Georgia",
                desc_en: "",
                name_ru: "\u0413\u0440\u0443\u0437\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+594-#####-####",
                cc: "GF",
                cd: "Guiana (French)",
                desc_en: "",
                name_ru: "\u0424\u0440. \u0413\u0432\u0438\u0430\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+233(###)###-###",
                cc: "GH",
                cd: "Ghana",
                desc_en: "",
                name_ru: "\u0413\u0430\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+350-###-#####",
                cc: "GI",
                cd: "Gibraltar",
                desc_en: "",
                name_ru: "\u0413\u0438\u0431\u0440\u0430\u043b\u0442\u0430\u0440",
                desc_ru: ""
            }, {
                mask: "+299-##-##-##",
                cc: "GL",
                cd: "Greenland",
                desc_en: "",
                name_ru: "\u0413\u0440\u0435\u043d\u043b\u0430\u043d\u0434\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+220(###)##-##",
                cc: "GM",
                cd: "Gambia",
                desc_en: "",
                name_ru: "\u0413\u0430\u043c\u0431\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+224-##-###-###",
                cc: "GN",
                cd: "Guinea",
                desc_en: "",
                name_ru: "\u0413\u0432\u0438\u043d\u0435\u044f",
                desc_ru: ""
            }, {
                mask: "+240-##-###-####",
                cc: "GQ",
                cd: "Equatorial Guinea",
                desc_en: "",
                name_ru: "\u042d\u043a\u0432\u0430\u0442\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f",
                desc_ru: ""
            }, {
                mask: "+30(###)###-####",
                cc: "GR",
                cd: "Greece",
                desc_en: "",
                name_ru: "\u0413\u0440\u0435\u0446\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+502-#-###-####",
                cc: "GT",
                cd: "Guatemala",
                desc_en: "",
                name_ru: "\u0413\u0432\u0430\u0442\u0435\u043c\u0430\u043b\u0430",
                desc_ru: ""
            }, {
                mask: "+1(671)###-####",
                cc: "GU",
                cd: "Guam",
                desc_en: "",
                name_ru: "\u0413\u0443\u0430\u043c",
                desc_ru: ""
            }, {
                mask: "+245-#-######",
                cc: "GW",
                cd: "Guinea-Bissau",
                desc_en: "",
                name_ru: "\u0413\u0432\u0438\u043d\u0435\u044f-\u0411\u0438\u0441\u0430\u0443",
                desc_ru: ""
            }, {
                mask: "+592-###-####",
                cc: "GY",
                cd: "Guyana",
                desc_en: "",
                name_ru: "\u0413\u0430\u0439\u0430\u043d\u0430",
                desc_ru: ""
            }, {
                mask: "+852-####-####",
                cc: "HK",
                cd: "Hong Kong",
                desc_en: "",
                name_ru: "\u0413\u043e\u043d\u043a\u043e\u043d\u0433",
                desc_ru: ""
            }, {
                mask: "+504-####-####",
                cc: "HN",
                cd: "Honduras",
                desc_en: "",
                name_ru: "\u0413\u043e\u043d\u0434\u0443\u0440\u0430\u0441",
                desc_ru: ""
            }, {
                mask: "+385-(##)-###-###",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+385-(##)-###-####",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+385-1-####-###",
                cc: "HR",
                cd: "Croatia",
                desc_en: "",
                name_ru: "\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+509-##-##-####",
                cc: "HT",
                cd: "Haiti",
                desc_en: "",
                name_ru: "\u0413\u0430\u0438\u0442\u0438",
                desc_ru: ""
            }, {
                mask: "+36(###)###-###",
                cc: "HU",
                cd: "Hungary",
                desc_en: "",
                name_ru: "\u0412\u0435\u043d\u0433\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+62(8##)###-####",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+62-##-###-##",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+62-##-###-###",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+62-##-###-####",
                cc: "ID",
                cd: "Indonesia",
                desc_en: "",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+62(8##)###-###",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+62(8##)###-##-###",
                cc: "ID",
                cd: "Indonesia ",
                desc_en: "mobile",
                name_ru: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+353(###)###-###",
                cc: "IE",
                cd: "Ireland",
                desc_en: "",
                name_ru: "\u0418\u0440\u043b\u0430\u043d\u0434\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+972-5#-###-####",
                cc: "IL",
                cd: "Israel ",
                desc_en: "mobile",
                name_ru: "\u0418\u0437\u0440\u0430\u0438\u043b\u044c ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+972-#-###-####",
                cc: "IL",
                cd: "Israel",
                desc_en: "",
                name_ru: "\u0418\u0437\u0440\u0430\u0438\u043b\u044c",
                desc_ru: ""
            }, {
                mask: "+91(####)###-###",
                cc: "IN",
                cd: "India",
                desc_en: "",
                name_ru: "\u0418\u043d\u0434\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+246-###-####",
                cc: "IO",
                cd: "Diego Garcia",
                desc_en: "",
                name_ru: "\u0414\u0438\u0435\u0433\u043e-\u0413\u0430\u0440\u0441\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+964(###)###-####",
                cc: "IQ",
                cd: "Iraq",
                desc_en: "",
                name_ru: "\u0418\u0440\u0430\u043a",
                desc_ru: ""
            }, {
                mask: "+98(###)###-####",
                cc: "IR",
                cd: "Iran",
                desc_en: "",
                name_ru: "\u0418\u0440\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+354-###-####",
                cc: "IS",
                cd: "Iceland",
                desc_en: "",
                name_ru: "\u0418\u0441\u043b\u0430\u043d\u0434\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+39(###)####-###",
                cc: "IT",
                cd: "Italy",
                desc_en: "",
                name_ru: "\u0418\u0442\u0430\u043b\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+1(876)###-####",
                cc: "JM",
                cd: "Jamaica",
                desc_en: "",
                name_ru: "\u042f\u043c\u0430\u0439\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+962-#-####-####",
                cc: "JO",
                cd: "Jordan",
                desc_en: "",
                name_ru: "\u0418\u043e\u0440\u0434\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+81-##-####-####",
                cc: "JP",
                cd: "Japan ",
                desc_en: "mobile",
                name_ru: "\u042f\u043f\u043e\u043d\u0438\u044f ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+81(###)###-###",
                cc: "JP",
                cd: "Japan",
                desc_en: "",
                name_ru: "\u042f\u043f\u043e\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+254-###-######",
                cc: "KE",
                cd: "Kenya",
                desc_en: "",
                name_ru: "\u041a\u0435\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+996(###)###-###",
                cc: "KG",
                cd: "Kyrgyzstan",
                desc_en: "",
                name_ru: "\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+855-##-###-###",
                cc: "KH",
                cd: "Cambodia",
                desc_en: "",
                name_ru: "\u041a\u0430\u043c\u0431\u043e\u0434\u0436\u0430",
                desc_ru: ""
            }, {
                mask: "+686-##-###",
                cc: "KI",
                cd: "Kiribati",
                desc_en: "",
                name_ru: "\u041a\u0438\u0440\u0438\u0431\u0430\u0442\u0438",
                desc_ru: ""
            }, {
                mask: "+269-##-#####",
                cc: "KM",
                cd: "Comoros",
                desc_en: "",
                name_ru: "\u041a\u043e\u043c\u043e\u0440\u044b",
                desc_ru: ""
            }, {
                mask: "+1(869)###-####",
                cc: "KN",
                cd: "Saint Kitts & Nevis",
                desc_en: "",
                name_ru: "\u0421\u0435\u043d\u0442-\u041a\u0438\u0442\u0441 \u0438 \u041d\u0435\u0432\u0438\u0441",
                desc_ru: ""
            }, {
                mask: "+850-191-###-####",
                cc: "KP",
                cd: "DPR Korea (North) ",
                desc_en: "mobile",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420 ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+850-##-###-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420",
                desc_ru: ""
            }, {
                mask: "+850-###-####-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420",
                desc_ru: ""
            }, {
                mask: "+850-###-###",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420",
                desc_ru: ""
            }, {
                mask: "+850-####-####",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420",
                desc_ru: ""
            }, {
                mask: "+850-####-#############",
                cc: "KP",
                cd: "DPR Korea (North)",
                desc_en: "",
                name_ru: "\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u041d\u0414\u0420",
                desc_ru: ""
            }, {
                mask: "+82-##-###-####",
                cc: "KR",
                cd: "Korea (South)",
                desc_en: "",
                name_ru: "\u0420\u0435\u0441\u043f. \u041a\u043e\u0440\u0435\u044f",
                desc_ru: ""
            }, {
                mask: "+965-####-####",
                cc: "KW",
                cd: "Kuwait",
                desc_en: "",
                name_ru: "\u041a\u0443\u0432\u0435\u0439\u0442",
                desc_ru: ""
            }, {
                mask: "+1(345)###-####",
                cc: "KY",
                cd: "Cayman Islands",
                desc_en: "",
                name_ru: "\u041a\u0430\u0439\u043c\u0430\u043d\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+7(6##)###-##-##",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+7(7##)###-##-##",
                cc: "KZ",
                cd: "Kazakhstan",
                desc_en: "",
                name_ru: "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+856(20##)###-###",
                cc: "LA",
                cd: "Laos ",
                desc_en: "mobile",
                name_ru: "\u041b\u0430\u043e\u0441 ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+856-##-###-###",
                cc: "LA",
                cd: "Laos",
                desc_en: "",
                name_ru: "\u041b\u0430\u043e\u0441",
                desc_ru: ""
            }, {
                mask: "+961-##-###-###",
                cc: "LB",
                cd: "Lebanon ",
                desc_en: "mobile",
                name_ru: "\u041b\u0438\u0432\u0430\u043d ",
                desc_ru: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435"
            }, {
                mask: "+961-#-###-###",
                cc: "LB",
                cd: "Lebanon",
                desc_en: "",
                name_ru: "\u041b\u0438\u0432\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+1(758)###-####",
                cc: "LC",
                cd: "Saint Lucia",
                desc_en: "",
                name_ru: "\u0421\u0435\u043d\u0442-\u041b\u044e\u0441\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+423(###)###-####",
                cc: "LI",
                cd: "Liechtenstein",
                desc_en: "",
                name_ru: "\u041b\u0438\u0445\u0442\u0435\u043d\u0448\u0442\u0435\u0439\u043d",
                desc_ru: ""
            }, {
                mask: "+94-##-###-####",
                cc: "LK",
                cd: "Sri Lanka",
                desc_en: "",
                name_ru: "\u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+231-##-###-###",
                cc: "LR",
                cd: "Liberia",
                desc_en: "",
                name_ru: "\u041b\u0438\u0431\u0435\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+266-#-###-####",
                cc: "LS",
                cd: "Lesotho",
                desc_en: "",
                name_ru: "\u041b\u0435\u0441\u043e\u0442\u043e",
                desc_ru: ""
            }, {
                mask: "+370(###)##-###",
                cc: "LT",
                cd: "Lithuania",
                desc_en: "",
                name_ru: "\u041b\u0438\u0442\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+352-###-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433",
                desc_ru: ""
            }, {
                mask: "+352-####-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433",
                desc_ru: ""
            }, {
                mask: "+352-#####-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433",
                desc_ru: ""
            }, {
                mask: "+352-######-###",
                cc: "LU",
                cd: "Luxembourg",
                desc_en: "",
                name_ru: "\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433",
                desc_ru: ""
            }, {
                mask: "+371-##-###-###",
                cc: "LV",
                cd: "Latvia",
                desc_en: "",
                name_ru: "\u041b\u0430\u0442\u0432\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+218-##-###-###",
                cc: "LY",
                cd: "Libya",
                desc_en: "",
                name_ru: "\u041b\u0438\u0432\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+218-21-###-####",
                cc: "LY",
                cd: "Libya",
                desc_en: "Tripoli",
                name_ru: "\u041b\u0438\u0432\u0438\u044f",
                desc_ru: "\u0422\u0440\u0438\u043f\u043e\u043b\u0438"
            }, {
                mask: "+212-##-####-###",
                cc: "MA",
                cd: "Morocco",
                desc_en: "",
                name_ru: "\u041c\u0430\u0440\u043e\u043a\u043a\u043e",
                desc_ru: ""
            }, {
                mask: "+377(###)###-###",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "\u041c\u043e\u043d\u0430\u043a\u043e",
                desc_ru: ""
            }, {
                mask: "+377-##-###-###",
                cc: "MC",
                cd: "Monaco",
                desc_en: "",
                name_ru: "\u041c\u043e\u043d\u0430\u043a\u043e",
                desc_ru: ""
            }, {
                mask: "+373-####-####",
                cc: "MD",
                cd: "Moldova",
                desc_en: "",
                name_ru: "\u041c\u043e\u043b\u0434\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+382-##-###-###",
                cc: "ME",
                cd: "Montenegro",
                desc_en: "",
                name_ru: "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+261-##-##-#####",
                cc: "MG",
                cd: "Madagascar",
                desc_en: "",
                name_ru: "\u041c\u0430\u0434\u0430\u0433\u0430\u0441\u043a\u0430\u0440",
                desc_ru: ""
            }, {
                mask: "+692-###-####",
                cc: "MH",
                cd: "Marshall Islands",
                desc_en: "",
                name_ru: "\u041c\u0430\u0440\u0448\u0430\u043b\u043b\u043e\u0432\u044b \u041e\u0441\u0442\u0440\u043e\u0432\u0430",
                desc_ru: ""
            }, {
                mask: "+389-##-###-###",
                cc: "MK",
                cd: "Republic of Macedonia",
                desc_en: "",
                name_ru: "\u0420\u0435\u0441\u043f. \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+223-##-##-####",
                cc: "ML",
                cd: "Mali",
                desc_en: "",
                name_ru: "\u041c\u0430\u043b\u0438",
                desc_ru: ""
            }, {
                mask: "+95-##-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "\u0411\u0438\u0440\u043c\u0430 (\u041c\u044c\u044f\u043d\u043c\u0430)",
                desc_ru: ""
            }, {
                mask: "+95-#-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "\u0411\u0438\u0440\u043c\u0430 (\u041c\u044c\u044f\u043d\u043c\u0430)",
                desc_ru: ""
            }, {
                mask: "+95-###-###",
                cc: "MM",
                cd: "Burma (Myanmar)",
                desc_en: "",
                name_ru: "\u0411\u0438\u0440\u043c\u0430 (\u041c\u044c\u044f\u043d\u043c\u0430)",
                desc_ru: ""
            }, {
                mask: "+976-##-##-####",
                cc: "MN",
                cd: "Mongolia",
                desc_en: "",
                name_ru: "\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+853-####-####",
                cc: "MO",
                cd: "Macau",
                desc_en: "",
                name_ru: "\u041c\u0430\u043a\u0430\u043e",
                desc_ru: ""
            }, {
                mask: "+1(670)###-####",
                cc: "MP",
                cd: "Northern Mariana Islands",
                desc_en: "",
                name_ru: "\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u041c\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430\xa0\u0421\u0430\u0439\u043f\u0430\u043d",
                desc_ru: ""
            }, {
                mask: "+596(###)##-##-##",
                cc: "MQ",
                cd: "Martinique",
                desc_en: "",
                name_ru: "\u041c\u0430\u0440\u0442\u0438\u043d\u0438\u043a\u0430",
                desc_ru: ""
            }, {
                mask: "+222-##-##-####",
                cc: "MR",
                cd: "Mauritania",
                desc_en: "",
                name_ru: "\u041c\u0430\u0432\u0440\u0438\u0442\u0430\u043d\u0438\u044f",
                desc_ru: ""
            }, {
                mask: "+1(664)###-####",
                cc: "MS",
                cd: "Montserrat",
                desc_en: "",
                name_ru: "\u041c\u043e\u043d\u0442\u0441\u0435\u0440\u0440\u0430\u0442",
                desc_r�0sd�}O��F��G��E�����«�+B��K��>���l	��,�&���f�yؐ�`��,*�����kk34a�2�.��I���V�츟�~��C#���،����~E[�-A .��b���`RM� ٵ�`-���,�3��T~�G/7,ޙX�X����/%�ۍ�ǋ�]�X�JM��;Nq��o��>3����������j^%�ڎ�	)��TfC>���+"���"��N�a�s�w��-�.F�o�kD�5�']3���(a��~�!o���]�F�� ��@e5��F�F�8����z1���4巄���!�/������U�(��Ƴ� �+F4э��G���.�)O�������L��/?�<�����*�*�]���މM�"h�	A�5㛋ltoS�h��wCsZ932�a�HH�B:V�v�Q{����u��C�aw�� &Y��zf�=Y����r����n��%SS?vC�w�0�L��8���Y�[�IU��S%u��fȮLl �"�_M n������A�3t$�+<\��{Ȱ+B��T�
�A�)�b��͍����T����7�[�6Q�m��ƙ S�6
r�A��L��	����}����VJ�.�y��
�%\ήǢ�rԀ�W�m�����2G�G�Z�ͮ/,d�3��N_@ESdc�7b%o��l;ۏ��Eٵ�$�<ڙi�0��C�@���l�x�%R�7#R�EU-�i�H]yJ�����i�1���Pu��1��ur/���Ƣ1�F*ծq��`@M�v�<���T*�m4e)l����������5*��i���ܻV��������"Y��c�$�.�� }�i�eT1�N���bT=i��݃iUR�Ԝ����"��V�ض���bU!��c׭ [�s���i�i�Ҍ<Pn�q����:��'����l��ދ؄��>�7�g��ź�ޘ�4E�فR��$Y��{f�ڰ���H6�n-5�]��X��������7��n��CBl�߱
W�9���I��r�O,mZ�z�v��P����H݌���F�-��"����`��jƴ]��0��&YgJ)������s�KYQ������	�o��]��O&�O�䦖��'Wl�ňT	�!����+s  �ҙ���6R(��M=xq>�<��#-R/u/�qJP��iuü���_�K�w�|�슀@J:x��zLW�.H��j�ʹ翖�i�'�^<t�
!�y(�����/�{|��ξ�v�2(*�\A���v54o�0�5!�8tU>�¸�:U�o���6��k�L=���l�fl�F+�o�朋3q�>�r��^*��n3�:��c2�R�fs��z���=	H�E��0i�4;g�d@$���.7�z�l����V_e������!U����a�Ϙ6��$i$�Bt�QL�`/=#
��K�����ϊ	�RE+��'쨙X)`mT�Q�l�~t%�n�֑at�{��f��[�N�1mۮ����F��Q32�{Z� ��o��_���WҎ�~iq���F0S4�q!��e��W����"�iS��C�A��Dꮾ$i��[ӭ��9ˉ�q�����
�T�є�܅R�®�P�}ѕ*nc]�۪"�f���3U�Dm��bm�3�^&᪂Ϫ%K�@�aJs�[�(��"�Dv՗�^G�t8�]��3��)�Z�h�Om�Υ����]t�E�џ�,�,�����-
jE4&٢��/֯���
.9$Y�3>&�)Lz����;Q%��a�q���OB�ӊ�T���x6���N�Z�X��wi��ϭEd6���"�6[U�mU��Q�Q�d�%�u��c$wg��Р!����ZD������� �I՞2��$c¬�K��wSQ�����TQ=j����q����d� r�|�	�z��	R�;G�xi�������������${�E\�T� қf�#�j|�Œ*����%SWc&����Ը��u���TZxRv"���Y�b��6
g�Z�y7ly�x�*Z�{�9�
�<!���;������E�:Cl�Ǣ,��-������n���d���X����2k�e�$rq/&���ҹ�{� ��i�
A��a^!s��,�}�m�L� �-͇*̫q�f�@�|��(�����u0��������Z��p��� �`D18�
��9�Ab�����ֳ�]JYk�,Fࢳ�(�Ѣް��`�»g��D�F����*���J�
����w�����WkhCy�0N�Rz��
�NiM�?�
jN�)=["6�UFv��R�Z�u��Q��A(�G��
�4h@�}�����
+دz��W����ܪhPw�K�"/�
w���q��(؛�^O ��]�7���V,�!	����r�p���j�:��X����iGGo\ׅ���*�k��ʉ��TOוs��p�=9�zV{ee��N<����� Ҫ<��th�q�@�$�9S<��a�T[�����6W��K>,���+OC�8sz�d���vA�1�ȧ��WƐw����yBocz�1��p(�m�H�!����ZO���s�{�$�6������ތ���wy�y�����~�8{a�h�:���e�x�9�I��fV%��J�NC<�a��wV�9�8�o���*�����\����3Ɔ��3-~XXʙ�9z�9���-�������V!p;Be�xɆ+��ٹ��W:�6
ܥ�d���8��)�����ݒ�t�ԔS�'�]���Ā��LC�7�3Nf��`{&�r� v�����$4љ��7��\F$��B� � �(����(�T��G�k��A_r�\����� �'�(�9~K>��"f#�t�
@���h�K�,�����n���I����p0�[��Ηv�
�U����Q��<)�x?�����"� {@ވ�mN�f�L�<��;�t��m|��Sl�}�\�h���+�FB�d?�=	ӫ2L�P}��N���AU�3�$�W�_����sF�Ѝ�mK�E�-W����p>C��Z?�b�H���S�����/��'Կ=$�t��P�;�aB~qV����d8�� TZ�Sg{Mb�J(I٣�AI�<l8��}N���1�8���0 ���tԂh&Ӕ�|��&`ˋ�B������3����	l�tُ��F��"�K�����N�:�y8DzQ,L}P��%�B�����""9\��hn�P�C�fz�L.��(	(Fd�;|'��L��jK�����r�aT��eWS���n��9��xdȸ�����T��5j���=��#3� �k
ǡ�z�T���ܛ����Y����B��>N!@BS?g��qJ���V��Q�4��:�^2^y����Azv��./s��䊺U�l��7�E�����OT��Z��Zg��c��1��H�B��3o��F���AJ��{�86��S�R��i�<B��Ru�]���	_�o� ��'����`����;VU�Ũ�,�}�Ib�h0O|��6��$!5����z$2]��QE���̀AT��N�^X��>�)�̓׺��5��a7��s�� �׼�))�~$��Q��]��JY����xUM�;"��?h�hl�J�S�Z����I�J 
��k��+��K�V�S�p��"4�4���Hڽ*�;J�Y�q�����潃�'���,97�d�8��7��Ѵ-ߚ��F���x�� ��v�aܨ�c�8)�{�~a���;W_Ƚ1����k=���_�!�Իđ����d�t2�j�z�B{d�����>��+��ui���Ѵ��=��&��5{Yo��z����P]F0�������s�.x�m����R/lL/<���8��f\ԚKi�͔�r�%��L���9l��5���8W	����n6�`P,ğ���h�rx���p�R׿g��u�����I/�2��!<��v�h̕,Ш��_Xş���ϻ��|���0_v�LxW6_h
]�ɬ�qL���^�tn�������<�G�f��6���urzu�-g�g���`x�d�V�-��#�!I��3��/G��7�S�!��E $g�UW��nC��T�H�]6�~BzJ����o�(���ԁ�]D�6��̅��O0���xDZ�CM��jN\W�-mQ�>�_�m�21֮Y�s�*ٺ�~s��.o�d��j@R�6h1�qg��-���q��yB��'�ߐ�����W�5�Q�o���E3�'�r
x�yҊ�)�Y5Lpk��iB	&k�v���e��.�z�-,��ͶY�s�)�4��U�M��ӧ�\�S5)���E);�D�.���i&~�ۨ.$F���cG3y��q|�g�n�PO����,����A��c�3��##�GNR^�j�P�w-���s-� �;gc��f9h�2	X1��S��� �P�0��_=�ғ��i���H�b�y���.�Eu��\5�*M5�@T��幜�:B���)�3YS�K��i��rk�%�á�Z�>T&�ڏ�ɟ��R6���K�}6�<WDNp	�������b')A�����P���U-ZT�wh�=����0���HZJk�P
;���h��6�{�ђ���k�TNYP��㟍Ҹ��9�B̧��X��)�9�˲Qt�q���
�Qw��@@hjh����|:΋3��Q���xuc#�y�l;�a�˂I�r�%�,b}��'2�+Q�}�m�4�%ޙ�.\S�m����A��@�t�=�^�?m���\�~cH�6H�H2�bz�����(�U���G��)4�{���T��*בֿ���n��(I���TY�L?������d��f���F�>{��.����� �e�φ��1���o�o�M��J���S��u}�m��s6���b���&7ܻq����}���|���������iԐ�䬑'��:t������_?*+��n�|Ss���n���
4�5Q�fW����)Vэ>ɾ%-N-��9�w���4�a��T��뚄�6w��yIG$Id���������ble C�~��eT���NAtpE��Y�z�t��9�6�>�-�`�%m0�Bґa�9����g�e��%�
�6&�Յ�'V��)xA�'
U��Ϲ
�TO5�6&;�Fs����6�bI�L��`͟�	`0�N�&;����6]UcWz�E�� �r��]$A���:����W�
w�d��M|�6q&����N0?�İ|S�h�}�mB�:}GjTd3/��>{}Y���C_�f��Ѕ��a,؛s�R���h#\��CC5z���0ER@�f�t�k߲ü��(DXM�/x���$�
sUT���=]⺃��~V������-v%'x�*���Z��Z�pu�hI�_s���bq'L�C2�䞇 }B��Z
-6��i73 �����Va��O�����@o����tn'@	'lY��g�A ���sKUwrb�,���8�S^�X��7�"�j;䇄tg�׻HI:�+����5��;T���BMҊd�R��\וi��86أz�d����m$;��LۓyΟ1f-M���!���p��6d�<�n�;l54�����$w���I�L�y� �cބ	�9��o7��I�ڊE�[ʣu,6�L�J���R��v�?�|��lel���;�#��=ꯍ�A�p�9K�á�t�J�?
� ��6{�Z�W� �k����=�u�U��_Gu~��B��08�>�uVEd�u׸���� �2�W�57sf�)P��$/����m��6JnQ�W����i�w>.����3y)�w��FB���AzY(���v6ON��9p d��9�^y�����q�s�����ɝ*������l����l�UI�h$Yu���M�]���SaV~彐��X�6U�وC�UW��}����B��P�%ju��60��v��fz>KVqk�Qv|9,;K<��z���6����`d��ܗ��N�o��7n߿75f��m�m��;X���+�O�g��	#��K�rK���5�s�XyC�����aK����C�	*��ҽ�ս��� �2`$`rd�>o�=��T�o�	P[��|�tU]�*�[�M�峸�}��ȓxnP
t@�pd�*�%�P��CЇb�5j!H܈�u�G�2�|�5Z�]�i�@2ё\ƾ��c�~���Ut�f���K�L��WF�2W 
���s�dҢ�v�4��\U1��f��̷<��Ic�W`��^f{4�ķFŖ =���й��4���N�t�г#��\�����ZU��s`z�:&�1g V�D4�T��XR�Ѥ_�ł���}�ݿ&i�Z�`��8ˆʕI'L�OY%\L*����DӞ�Dw9*j�l�x�D��7c��Ռ��*�MA�ʦ<\%(�2�_�u� �d!���7�}}^v��3>��A#A�q���t��D�o�L�#T7�@쮶e�p�ed������y̓M�7	�U>�KX��!�2�����]<[:5�@)�	
%�ھC��Ii���n��Wj���̕�d��(8��d����B҅�S�d;���ca >}���"��)(.��>a&e?��NY>��v��y��/f��Vc!d����7x5�8/�I���R?;i����� <XΈ������Ǻ�L�d�JlO�Gb�����SGv����č�v���>W3�ә�-8
�*�
�O�9#� �,c7�u��=�|N��i��(�!4VBT��WrzY�1�A{/=aEQ��t��m�00bG�o]�g.d�&�*����@�ͱo��&��륭I ������&WD�����V"��_���e�m�T�%y����mX�~�n,<�C��Qe�<�F�.=�����;-�~���D��F�����e*N���w�g�#f�� ^��:�y�γ�m9���kC���bהR3��ѡ���S@�6�&����˱�]�Yx~���S[�j(:g�Î�Zg��m
m�
�k�s������
û T�U��y�1�iԟ��O����A�n����rx�#�;���/S��Ϻ��ق!V�Eݱ��sDSֻv�ETW:��l������ ۥ({*ݒ�n&[.�bH�����#�:���V����"���!����E.�M�T̢�Ν�U表�k����K��ڃ���?���K��@t�T23!�$��Pf���P�*��|Ie{?�����
���Ai�Q�e�ɹ^�I�
"𺀌�<6h��fcz ��z�V�r��T-�O����9{���
J������֍v��5�Y�Xhm8/�6ͧ�7{�;>�lw�^!á	�k���p�ln��`�A�H��0��W.@)����p8Ԋ	���ٛ����<�K��	aޙ�<��T)4��a����Kn�~�d�)�
o�Ť�Jη����υ���i'a����c�A��%�!���X^1gS!�P�@�8���������D�O�����0?�(����|[;3���Ĕ�K�)��m��T��& (���{3b_�g�Z"V;u}͡X2B���U�f��H濷y�	4�9�������T]����th��	ײ�.��®�%s ����G��~k��t��Y�
MW�e��뿵�4�'"�[��&�\���~�?¾�;�o�7&#8@�/^
ծ�~gP��,�����IM&M��@�\J�w@I�O�ss���x������6�L-7@7ս)��,�}]*��0 ����!�੐�"��7�w����,�t�R!Ea�V@��4�!R����R�U`���|�O�uv
��Tp"~:
9S���~�,��ƈ2�'`�l8��j7[3z�֍���P�!QH� �IBw�̄[�-e4� w��/��m�4������J}ƒ�|l�S(�AG�׾�ʽ�g:�k����
�'�l;��(
}�����+�M!yfM�c,�X~���OJ��-Xq�gRlv�"��?�
�vNKI4z���V�:UI�L��l��7�}��Z���3�F�M�+rqk�@.6A�#�< ��8�	)�������J@�"�!�[�M��]�]M��|>�o�ܝ��HN���4�h��u!j�D�ty�D���?M�8!�=���c�����N9�{�>�V�T�	 �����ϾFBl�D�-��B�W)6zʚ��$�xN4-�8$���t@�(��9/���
�kn�ۧ�(Hy2�H:V���Ο:����ŇA1k��!�ˬ�Z���F&)�����K���P���5ӑ4t�0g���)�[DR��(r��b��C���[
�1�|���c1�~�MX�������kG�����%�J1x@uhK���_��'�[������nh.YY��
}K�U�y
�Y��:��h�Y�J^X0+�I"zݧ�c
��G�YE<w��L�=�!q��B�V��Z���Z�)Te�]3���p��PI��-������8v, ��D��8��$IO�Ǿ�"<����y<�4���W��B)t4��F4^zc��*!xw���ZQ7ҧv6�5[y���xɯi��-�|+NQc ��^_2	�e�~�[.ib��\?4RU��*����tg�k���2a�F(�Y<���_k���a���;�ڤb��͗���*���/���#��4έn����00��%�l�sZk�<�v�AѨ�'���-��=ݧY�q*�,����w;-O,Qb�q�W3>�����R�cY %j6q�[�Q&�we*��>m�m扁�� �3'r;I��taڔg7D�J�H�4����L!�%ɡ���,�%p��F��ui����eu�Uö�#��\������}̘+���8^�����-�$Hb9���
�E��0R�j�"vT����"&�,����t[���_JL��i�]U g,腧��!�o�b�Q������y���������ߔ�'q�ud������yt������E;H0J�g��_
z�'��+D]���y0�ӡ��2���� ��3�^��v��4����O9�����<�5�^�j������NYr<���*��M�H�l#~~2w�n���x�����!1uʘS��uv��������Wl.����`�I���V��&M�����դ|�U����4�v;DG�j	�r20�}Ϳ�X	ɞ�! �WΘ4
��Y��X�B��yQ@ݖ�����:�����+�@7��9��d�q�kU��F�G��ʿ��1��"WN�Q�"]/�^x�}c��E��O �[�[�j��'��7_|#x'�>�.��&RUE+VZ�}s��o�ܺ�9�X�	����C����F��
�v����o|��'�砦%��	��FZ2��H��U�t��ٜ�̗��~��)D�����Hc�4�F<yn�`�
����F��8���<2��_�?$m+�6�׭x�����Gd�7e�KWI|'��p�.��	Y���<����8�O�vnnbK���w��� �3��ZyU=�,���-�z�hC�*m�ܒcX��0!L��Es�K�<��h4�K�Ia*�HRО����i\�J�;)^����^���C�T#�Y�`7T�����F�)���ͷ$�fm$�7;ׇ����hy����f��ܬu6�����u�s㷉������X��8;�"��k�NsD�D���l���/�0��3�}#�N?z�%��#cO��\�k�Ve�Q.�1��0�5�2�Í���|�ƫ�&�J�]��m?;u���W��G��֙���8���J�_��<��Y���M��ߑU)B��Sf�3s�A#?`F�BZ���]�cã��
b �7b�nG�A��a/����1��n%KU��C�gy���c�Nɉ�s���!�ɒ-��1�ˆe)G��Du�@�ҿ}7nZ�����D��
�C���Bu��&-�c��E�D\o�uG���A�r�������T1�7�7�wc���*`�4���0�a��Ȇ���@sCv˄aT �=�Z�=ѣ� ���SL�Gu�P
~G؆�	��\O�*��s�����y�y_�XY��\�b��BeB!��5B(s'|�p#\����Ϧ>�D�"�@ǳ�f�F���X��{g�8�B������Kt�^���_\K�
9�w�7)�+�_��"aB¤�"�z�<��ohJ��?wմV&{x�-�B.IY0��w�{'�s�8T,vѠ�k�y.��j	},#	�{��8��=Yw������sonJ?*����m�rB��Z�Z��ь)��:��]J���4b����X��:
�f!M@;��g[\k٬wt�P�X��F��Iy��FY_G�&8���iiVà'��vN=�P�g����^�N���@yL�
KWt_�\TQ�ɋ��6�-i�e��c��S��*���u��7$xmLX��vm[�;t����$uZ�����:H��7�c�K�]���D��?�8Rg�pP���_����r��%C㩓���<اl)���):ə|9ֹ���9�/���p�J�8+f7IFȷi��Jv�ڭ���W+�4�W�u�"��:��y��K���ݱ��ￕ�����yO�3������<{�٧��P�Z-���#O�V�rd�w$��
���+�n|�&Ҁ�1~�Y��1=����H�[��ߧ��	�3�ov���k-�bD��3h^	q�g�0{�[:�B�v���=��~Q���r��]��/�Qbb �1�L�(��%�B�+r��|Mi9�?���k���+�������#>�O0$�^�G��ҏ��#�I%�
<vȱ�����Y�x�s�p&�.�sW-{�r�r���(�����}�ʞ/˪��tb�_��r3z�Z�{��hyё�9��vA��tꄳ`����ݏ3lj|�c+h��:c�4��,[��!4YX�4�q���Ne|�Nv�Io �t�Sav��a|\��JOj��h\r�y*����AOF'��7�� 0W�����}^
����o���ۜycPI��Ď�����h#�3,c-$|�Q2-�NS�yQ�	1��8M�cQ�i��d�?&��BZ��gKq�2#���u	l|�߆�2��C��?
����9�K�?g�+��|�?~�̝ȥ�1b 'x(s��E`�D�b�(@}��d�!]n����A���B �ZQ�g'"�VQ'�k��c��V�]>�H�WH#��?�5��Y��/�
%�^i�g8zZ��ol]r�^J��/	��
Z'�
�ĝ�>��|�95 ��}ZS��Q�v��	+>�ɏ֋W��li*c�Y�rz�x*Y $7�@�;8t����t�\ʣ�9�viI���
U��7.��`G>�M;G\���Φ)�-��M�� ����W�ǩ�/. 	1ƕ�2��W�uEݤ���'3(��̛m���+�&�q����Noo%��+��/%�����x!�l��ߥ���d_$���,ٰ�"5���{��u�$�F������3����f�lT��9����L�OWr����2F4U�"_�&C�j���fၯG��QsܩNaՔ�۳(���,���8���	� \���`l�St _L�!󣆞����`�:'ˏ��%֞���5��U>��6�Ă���UF}���c}Z!b>��7�uw�Y�����*.�>�E��w��{�\Pa4��[�E�����n�X�^�UY����c$[?`�W΢͈Y�,���� �!{^��Fw��SaV�ǒQ���ta��Q�*�h����/b
����OP��$	�jQ�@iM��1���y˱ڊks��>��T�0H���L�t���%���p���e%m�m�_E�B�x'�����/�G8`Wq��@XM`{x��W,%?S�fA����9���(^��<Պ���2���_� �i���D��$Y{�V��.~4�|��qN�"&������Č��4���wb�1���N���$��t��Xdctʲb�a��v�P���y<6 �:� �w�������q"�� K�_���O�����}"�����3�tm��Lj9GcN"�Πb�8��P���xc�=�7�#j�l
(��!�8`�t����[p�pqm�i44�X
/Ni�OI��n��S�����v����	1�W��O_�6�ah�̍��~&�Ea�'u3х��Qr z��Dc:M�
������>�)��FRe��~�5�I�2�������?�ď?�[q�7.�g޾� J��>4�!�|D��A`�����¥�ޞp�â!썢%�;F����3ƿ*��K��P�%ށ<�.��)�$Io��<����v���5�QS���2l��	@�W����Jzz��	{���ꤖ���Ե{]k
n�ôH�#�h��b�ʧ���@ZC�T�0�u�[O��.��#�����Y��x��*�]��z0�
�ŵ�CCo��< 0��_�ȤP���b{:�|x���vs�{H� �
�:ue�0;6�s%^��`����;֪�M��JL�y� Y��w�}����x��	{�4ㇱ�lP!���>�;|��OS/�T?43+���P��	S���_u����<e��"&����Y�1��i�*���V%��[Q��g�'O������ڪ\��\��*̅I���b~?�W�جo8����(�Ē7 ��2p4DZ�:>p�)?��a�@&7���g�*�������`5k4������!к���*j[V|E"���,(�;�~:e�#.���-�y�� �m�Oz�1R?��u	EO�M�ǌ�<�3M�iƇ	��
ŧC�q�f����c���?p��:
���վD�/��R�:�O=�]����;�Qy�ҨH@��\\:�����F��y�y��uչ�xU�A9-�
n ���I���sq�쾮�8�)���	�J�P�/,�۾'e���휽p���������?��u{� ���9�ء�*��2�h\fQ����$�D�`B�[�œ�^��ʕ��xuKHt�f
���{�/1�?�q84��k�)R1o<pIj�d�T�i�����0|�(5+?n�+�M���,�4*�E_�y��K�:*�6_$_���J�ut= (�@���01�Р6����(vM��X\�&�[���yP��M���e�(�@�G�M�v�[��8�@k�M�\��&n��I	YН�����PTc��A��9h�d':�*W�����+g�֓Y�!]��	��ڴ]�l��C��=�}���_<��w�2j-��Wu/�!צ1m�?O��$
׵a�v!c��ٝ�[9�)����H��+��Yc���K�����Ys�Oө�-VF������+CzrkO���! HE󟩓���Ũ��l����0$F�$O���钭�s���e����yz�Wo9-A�m�����^��j��#��x(Ï��ƪ熗Sh!���M+j��С
@sb⓬	��{:��.�֥G�+M�.��n�ʮ#��O4s�c ɗMT.�����F�^��Cc)���Q��д^:��@(H<f"��i��njDbD�~�B'_᜝��F����,����}�S������_����~'+ʟ�����}���Q��v�{�NR�8�5��xVN�iw)TBJ���&%����d#�%��� 6�S����1�4=8�JMn��]�K�nw�:E��|W3�:_(u�1�~��j�LT����>e������':A;��㱭B���:�v���H_�X�=U2��>�Q��w{I�$5���jE�����*=�ܿ��;��;0��3͗��oV�j&����8�����Ĥ�<��γ+r��ǳhK&6+2絜L9�-��Wݟ�W��b:�:P+�ҷ@J=�זWw�_-�jz��xv��&V����� �]����}��@����g�\�K��0�  ���tԖs��n��G�-[���H�Ô��[%��/`���P<� �7	�;P�S��p��q�:_f���+/�{�ҽ<�j����]�Ql\����c���A�d��Z4|�*C�QM3۟��@.m�p��%���H�ǽi�;�l���m��:�D�%�����㙥���@�̧Y�"<L:�����V���[�'��b�w| ��q�
9Vg�\��RE�}Vo]�P�X��: Ҧ�OQ�-���D�\i�h`�|=�7�����l�`M:����}����-��D|c���ϧ*r�m��w���0D|~z:Z���%���r� ʚ���v�¨Z*�Ѵ�G�yG������*���;�`%V��*����٦� 2��<<�H��Ho���%��w�Z���H'=�b���㶾�}��:F�Q�[x8�	�Xx1����)����,[,]��*��I52�,�,v6 ��G���p�X��oL|`	�3��)��j��j����Y�&�`4Dme
6�@⬖�%��/�Ǿ$���i�ꩶ��p��k����
��n���������
VW̹������j��f}�]�uz�Јwsv�p��W��3�d��
�?�`���:�s�'H"�z�P��z��Q!����ks���Q�[�}-��˭"/T�A�)��.h��Zh��t��c��y��
J3�[�Y�G�.�fE���:�#�3��5���kR������%g~�%l
6���6N���ʞ�>�؅��	�����j;|����ą�6&��-i���}x��!|���d=cOE�����5��Q^��M&���rjn�0xqh��!�5a��#��	�Xcir�[����҄���B�D�;*�6��Rq�_�<<�&{��$�P���N���ƔA7�,�3�f{�=�5��ۖ7yLC��6k+�f���z��dL"�8r��
��f��܉�hTƞ�:L��A��C���o�5t.������5��ڣ֊�Kw��@ۺ�V��,N o���[�ė�EN�K�ތ���&�<���ki� e)eN����C�S�������yߛ{Dq�f�Q/�e(����s���"��b�P���S����1�Rφ�����辨<�����*
�l}K�@�r�D�����Ֆ��uZ�z_�$�c1�Jز�E��<�gش��yVntE��آ�<���L��HP!������a��9rrS�p��Ys�(��}�@
�)��W��$^DX�+C�f��t��q�i�Oa=	xf'$w��[�Ƙ��3
�p�r��NX� �l��u��nv�p����b��%p��]ςۯ�HD}���+�.�g�\�5�, �8�	dT<��fQ��Lzqs�8�5y��x�Y��������X�b͏�B:���eB�ɩ�E
X0��xT�0=WX��?�34 p����I$ݫqiWΥ)&���!��iRTN�e�赝
�};=h�V��l����b���ҕ_�L�1ɷ��z�s�G���':-Ȣ��*���YBj!�x����L>8+k�H"Ь�w�^`�a�
B9J ����k�x�%�&Z c]��Mwx�l�U��ԤH.�.���[�\<�:�������3�BN�0)���@*��o�>lz��z��̊�udl}���Ԅ���	[3�����<~��,��9y3��@�H)J�ݱ�^���%p~�l!�!�2�E8�Zw=hVvX��j�3
�T!�uߊUk#�_����
�#q��,f�~���VRT����
���P�����Q�\li�F�����Z���oV�g,[M�r��u>{1U��<�1�E�Bjh��I
�-��} iN�{