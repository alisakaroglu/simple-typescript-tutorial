abstract class Database {

    get(){
        console.log("Database Common Get");
        
    }
    add(){
        console.log("Database Common Add");
        
    }
    abstract delete();
    abstract update();
}


class AbsMysql extends Database {
   
    delete() {
      console.log("AbsMysql Delete...");
    }
    update() {
      console.log("AbsMysql Update...");
    }
  }
  
  class AbsMongo extends Database {
  
    delete() {
      console.log("AbsMongo Delete...");
    }
    update() {
      console.log("AbsMongo Update...");
    }
  }

  function addAbsDatabase(database:Database){
    database.delete();
    database.add();
  }

  addAbsDatabase(new AbsMongo());
  addAbsDatabase(new AbsMysql());