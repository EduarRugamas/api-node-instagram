const express = require("express");
const router = express.Router();
const Instagram = require("node-instagram").default;


const uri = process.env.INSTAGRAM_URI + "/instagram/callback"
const instagram = new Instagram({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
});

router.get('/', (req, res)=>{
    res.render('index')
});

router.get('/instagram/auth', (req, res)=> {
    res.redirect( instagram.getAuthorizationUrl(process.env.INSTAGRAM_URI + "/instagram/callback/", { scope: ['email','instagram_basic', 'user_profile','user_photos', 'user_likes'], state: 'state' }) );
});

router.get('/instagram/callback', async (req, res)=> {

   try{
       const code = req.query.code;
       const data = await instagram.authorizeUser(code, INSTAGRAM_URI_REDIRECT);
       console.log("Datos", data);
       res.json(data);
   }catch (e) {
        res.json(e)
   }
});

router.get('/login',  (req, res)=> {
    res.redirect('/instagram/auth');
});

router.get('/profile',  (req, res)=> {

});

router.get('/logout',  (req, res)=> {

});


module.exports = router;
