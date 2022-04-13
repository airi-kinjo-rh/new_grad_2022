"use strict";
exports.__esModule = true;
var getName_1 = require("./src/getName");
main();
function main() {
    var query = require('express').query;
    var express = require('express');
    var app = express();
    var port = 3000;
    app.get('/', function (req, res) {
        // let realname : string = getName(req.query["nickname"])
        // if (realname){
        // 	res.send(realname)
        // } else {
        // 	res.send("エンジニアにそのニックネームのメンバーはいません")
        // } 
        var serchResult = (0, getName_1.searchName)(req.query["nickname"]);
        if (serchResult) {
            res.send(serchResult);
        }
        else {
            res.send("エンジニアにそのニックネームのメンバーはいません");
        }
    });
    app.listen(port, function () {
        console.log("Example app listening on port ".concat(port));
    });
}
