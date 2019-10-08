const controller={}


controller.list = (req, res) => {
    res.render('operation',{result:0,n1:0,n2:0});
  };


controller.add= (req,res)=>{
    console.log(req.body)
    var op=req.body.type
    var result=0;
    var a=Number.parseFloat(req.body.nombre1);
    var b=Number.parseFloat(req.body.nombre2);
    switch(op){
    case "addition":
        result=a+b;
        break;
    case "mutliplication":
        result=a*b;
        break;
    case "soustraction":
        result=a-b;
        break;
    case "division":
        result=a/b;
        break;
    }    
res.render("operation",{result:result,n1:a,n2:b});
}
module.exports = controller;