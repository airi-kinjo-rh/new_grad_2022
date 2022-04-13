"use strict";
exports.__esModule = true;
exports.searchName = exports.getHashtableName = exports.getName = void 0;
var names = [{
        name: "竹本 爽史",
        nickname: "そうし"
    }, {
        name: "渕上 敬太",
        nickname: "ふっちー"
    }, {
        name: "横浜 海斗",
        nickname: "かいと"
    }, {
        name: "窪田 浩之",
        nickname: "窪田"
    }, {
        name: "小西 洋太朗",
        nickname: "コニー"
    }, {
        name: "COSTA HYGISON",
        nickname: "BOLA"
    }, {
        name: "Nittayawan Sukhumpat",
        nickname: "ポー"
    }, {
        name: "Onggo Barata",
        nickname: "Barata"
    }, {
        name: "金城 愛梨",
        nickname: "アイリス"
    }, {
        name: "久米 夏弥",
        nickname: "ナツ"
    }, {
        name: "佐藤 貴子",
        nickname: "たかこ"
    }, {
        name: "坂井田 逸斗",
        nickname: "坂井田"
    }, {
        name: "長谷川 茉奈",
        nickname: "ハセ"
    }];
function getName(nickname) {
    console.log(nickname);
    var hashtabelName = getHashtableName();
    return hashtabelName[nickname];
}
exports.getName = getName;
function getHashtableName() {
    var nameHash = {};
    for (var i = 0; i < names.length; i++) {
        nameHash[names[i]["nickname"]] = names[i]["name"];
    }
    return nameHash;
}
exports.getHashtableName = getHashtableName;
function searchName(pattern) {
    var result = [];
    names.forEach(function (value) {
        console.log(value["nickname"]);
        if (value["nickname"].indexOf(pattern) > -1) {
            result.push(value["name"]);
        }
    });
    return result;
}
exports.searchName = searchName;
