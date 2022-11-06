
const cool = require('cool-ascii-faces');
const express = require ('express')
const app = express();
 app.set ('view engine','ejs');
const _= require("lodash");
 const bodyparser=require("body-parser");
const { request } = require('express');
app.use(bodyparser.urlencoded({extended: false} ));

 const homeStartingContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat mi nisi, ut lacinia magna convallis vel. Nam pretium, enim a posuere porta, diam ante condimentum est, porta tincidunt sem ante vitae felis.Curabitur et aliquet mauris, vitae viverra nunc. Donec vulputate nisi diam, vitae consectetur arcu rutrum eget. Duis sed facilisis dolor, non dignissim sapien. Mauris sed neque congue, rhoncus sapien id, pretium ipsum. Curabitur scelerisque, velit vitae volutpat iaculis, turpis quam hendrerit magna, eu suscipit diam tellus non ligula. Ut eleifend dignissim ligula id fermentum. Curabitur interdum, lacus id pulvinar imperdiet, libero mi facilisis turpis, dignissim elementum dui nunc at purus. Cras nec porta dui. Sed eget imperdiet nunc. Phasellus condimentum at lectus vitae euismod."
const aboutContent ="Quisque id lobortis justo. Pellentesque et justo quis purus semper aliquet eu sed ex. Nunc fermentum sodales euismod. In hac habitasse platea dictumst. Duis porta est vel ex mattis tristique. Nam eu vehicula nulla. Etiam lacinia sit amet felis sed malesuada. Praesent sit amet iaculis nulla. Phasellus elit ligula, condimentum eget laoreet non, lacinia nec magna."
const contactContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis tempus dolor, vitae elementum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus lacus, ultrices a mauris suscipit, lacinia convallis enim. Donec id ultrices enim. Vestibulum consectetur commodo lobortis. Aliquam eu nibh tortor. Aliquam erat volutpat. Aenean eu tempus massa, eu aliquet odio. Ut egestas, est at rutrum maximus, ligula est vehicula lacus, nec ultricies neque magna et enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
 
const posts =[];

app.get("/",(req,res)=>{
    res.render("home",{startingcontent: homeStartingContent,posts:posts });    
    
});
app.get("/about",(req,res)=>{
    res.render("about",{aboutContent: aboutContent});

});


app.get("/contact",(req,res)=>{
    res.render("contact",{contactContent: contactContent,
   });
});

app.get("/compose", (req ,res)=>{
    res.render("compose");
    
})
app.post("/compose", (req,res)=>{
console.log("post")
const post={
    title: req.body.postTitle,
    content: req.body.postBody
 };
 console.log(post)
posts.push(post);
console.log(posts)
console.log(posts[0].title);
res.redirect("/");

});
app.get("/posts/:postName",(req, res)=>{
    const requestTitle = _.lowerCase(req.params.postName);
    
    posts.forEach(function(post){

        console.log(post);
    const storedtitle = _.lowerCase(post.title);
        console.log(post);
    if (storedtitle === requestTitle){
        res.render("post",{
            title: post.title, 
            content: post.content 
        });

       
s
    }
        
  
    });
});   
    app.listen(5501)

















