- installer express 
```bash
npm install -s express
```

- dans le fichir d'entré, appele le module express et l'instancié
```javascript
const express=require('express')
const app = express();
```
-  créer deux route: une pour récupperer le document et l'autre pour la mise a jour
```javascript
router.get('/detail/:id', operationController.detail);
router.post("/update",operationController.update);
```

- dans le controller,créer une fonction pour récupperer le  document et l'afficher sur la page d'edition, et une autre fonction pour la mise a jour
```javascript
controller.detail= (req,res)=>{
  article.findOne({_id:req.params.id}).then( (article)=>{

    res.render("edit",{article:article})
  });
}
#on met async et await afin d'attendre et reccuperer la promesse generer par l'update 
controller.update= async (req, res) => {
 var id=req.body.id;

    var n1=req.body.nombre1;
    var n2=req.body.nombre2;
    var type=req.body.type;
   await op.update({nombre1:n1,nombre2:n2,type:type,resultat:0},{where:{id:id}});

res.redirect("/")
}
```
- sur la page d'edition, faire un formulaire avec les infos du document

