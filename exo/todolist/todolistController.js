const controller={}
//liste=[{nom:"un"},{nom:"trois"},{nom:"js"},{nom:"html"},{nom:"css"}]
liste=[
        {user:"un",liste:[{nom:"php"},{nom:"html"},{nom:"css"} ]},

        {user:"deux",liste:[{nom:"php"},{nom:"mysql"},{nom:"oracle"} ]}  
    ]

controller.list= (req,res)=>{
    user=liste.findIndex( function(el,i){  return el.user===req.params.user});
    if(liste[user]){

    }else{
        liste.push({user:req.params.user})
    }
    res.render("list",{list:liste[user].liste})
}

controller.add=(req,res)=>{

    liste.push({nom:req.body.nom})
res.redirect("/")
};

controller.delete=(req,res)=>{

  //  var i=liste.findIndex( function(el,i){  return el.nom===req.params.id});
  var i = req.params.id
    console.log("item "+i+" "+liste[i].nom);
    console.log("param : "+req.params.id)
    delete liste[i];
    res.redirect("/")

}
module.exports = controller;