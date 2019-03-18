var Data1 = require("../data/Data1");
var Data2 = require("../data/Data2");

module.exports = function(app) {
    app.get("/api/", functions(req,res){
        res.json(Data1);
    });
    app.get("/api/", functions(req,res){
        res.json(Data2);
    });
    app.post("/api/tables", function (req,res)){
        if (Data1.length < 5 ) {
            
        }
    }
    }