const controller={}
const fs=require('fs');
const users={
    'Bob': {
        age: 25,
        language: 'Python'
    },
    'Alice': {
        age: 36,
        language: 'Haskell'
    }
};
function save(){
fs.writeFile('users.json', JSON.stringify(users), (err) => {  
    // Catch this!
    if (err) throw err;

   // console.log('Users saved!');
  // return "data save";
});

}


controller.list=(req,res)=>{

fs.readFile("users.json","utf-8",(err,data)=>{


console.log(data)
s=JSON.parse(data);
s["toto"]={ "age":100,"language":"css" }
s["paul"]={ "age":10,"language":"java" }
res.render("liste",{data:s});

    

});


}



module.exports = controller;