// İnterface
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function () {
        console.log("Mysql Add...");
    };
    Mysql.prototype.get = function () {
        console.log("Mysql Get...");
    };
    Mysql.prototype["delete"] = function () {
        console.log("Mysql Delete...");
    };
    Mysql.prototype.update = function () {
        console.log("Mysql Update...");
    };
    return Mysql;
}());
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    Mongo.prototype.add = function () {
        console.log("Mongo Add...");
    };
    Mongo.prototype.get = function () {
        console.log("Mongo Get...");
    };
    Mongo.prototype["delete"] = function () {
        console.log("Mongo Delete...");
    };
    Mongo.prototype.update = function () {
        console.log("Mongo Update...");
    };
    return Mongo;
}());
var Oracle = /** @class */ (function () {
    function Oracle() {
    }
    Oracle.prototype.add = function () {
        console.log("Oracle Add...");
    };
    Oracle.prototype.get = function () {
        console.log("Oracle Get...");
    };
    Oracle.prototype["delete"] = function () {
        console.log("Oracle Delete...");
    };
    Oracle.prototype.update = function () {
        console.log("Oracle Update...");
    };
    return Oracle;
}());
var mysql = new Mysql();
//mysql.add();
function addDatabase(database) {
    database.add();
}
function addDatabaseUpdate(database) {
    database.update();
}
addDatabase(new Mysql());
addDatabase(new Mongo());
addDatabaseUpdate(new Oracle());
