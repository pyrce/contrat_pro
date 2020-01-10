const controller={}
const mongoose=require("mongoose");
const article=require("../model/article");

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/articles';
var ObjectId=mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,useUnifiedTopology: true
});

controller.list=(req,res)=>{
   article.find({},(err,articles)=> {
       
       // res.send(articles);
     res.render("liste",{articles:articles});
      })
}

controller.all=(req,res)=>{
    article.find([
        {
          '$sort': {
            '_id': -1
          }
        }, {
          '$limit': 1
        }
      ],(err,articles)=> {      
         res.send(articles);
      //res.render("liste",{articles:articles});
       })
 }
controller.ajout = (req,res)=>{

    res.render("ajout");
}

controller.add=(req,res)=>{

new_article=new article();
file = req.files.image;

d=new Date();
name=d.getDate()+""+d.getMonth()+""+d.getFullYear()+d.getHours()+"_"+d.getHours()+d.getMinutes()+d.getSeconds();

path = "upload/" + name+"."+file.name.split(".")[1];
file.mv(path);

new_article._id=new ObjectId();
new_article.titre=req.body.titre;
new_article.image=name;
new_article.text=req.body.text;

new_article.save();

res.redirect("/");
}
controller.detail= (req,res)=>{
  article.findOne({_id:req.params.id}).then( (article)=>{

    res.render("detail",{article:article})
  });
}

controller.promo= (req,res)=>{
  article.findOne({_id:req.params.id}).then( (article)=>{
    res.send(article);
    //res.render("detail",{article:article})
  });
}
module.exports = controller;