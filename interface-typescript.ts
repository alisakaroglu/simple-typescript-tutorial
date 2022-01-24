// İnterface

interface IDatabase {
  add();
  get();
  delete();
  update();
}

class Mysql implements IDatabase {
  add() {
    console.log("Mysql Add...");
  }
  get() {
    console.log("Mysql Get...");
  }
  delete() {
    console.log("Mysql Delete...");
  }
  update() {
    console.log("Mysql Update...");
  }
}

class Mongo implements IDatabase {
  add() {
    console.log("Mongo Add...");
  }
  get() {
    console.log("Mongo Get...");
  }
  delete() {
    console.log("Mongo Delete...");
  }
  update() {
    console.log("Mongo Update...");
  }
}
class Oracle implements IDatabase {
  add() {
    console.log("Oracle Add...");
  }
  get() {
    console.log("Oracle Get...");
  }
  delete() {
    console.log("Oracle Delete...");
  }
  update() {
    console.log("Oracle Update...");
  }
}

let mysql = new Mysql();
//mysql.add();

function addDatabase(database: IDatabase) {
  database.add();
}
function addDatabaseUpdate(database: IDatabase) {
  database.update();
}
addDatabase(new Mysql());
addDatabase(new Mongo());
addDatabaseUpdate(new Oracle());
