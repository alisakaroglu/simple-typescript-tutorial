var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Common Get");
    };
    Database.prototype.add = function () {
        console.log("Database Common Add");
    };
    return Database;
}());
var AbsMysql = /** @class */ (function (_super) {
    __extends(AbsMysql, _super);
    function AbsMysql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbsMysql.prototype["delete"] = function () {
        console.log("AbsMysql Delete...");
    };
    AbsMysql.prototype.update = function () {
        console.log("AbsMysql Update...");
    };
    return AbsMysql;
}(Database));
var AbsMongo = /** @class */ (function (_super) {
    __extends(AbsMongo, _super);
    function AbsMongo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbsMongo.prototype["delete"] = function () {
        console.log("AbsMongo Delete...");
    };
    AbsMongo.prototype.update = function () {
        console.log("AbsMongo Update...");
    };
    return AbsMongo;
}(Database));
function addAbsDatabase(database) {
    database["delete"]();
    database.add();
}
addAbsDatabase(new AbsMongo());
addAbsDatabase(new AbsMysql());
