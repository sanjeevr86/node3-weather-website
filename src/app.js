const path = require('path')    
const express = require('express');
const hbs = require('hbs')

const app = express();
 

// defining the path for express config 
const viewDirectoryPath = path.join(__dirname,'../templates/views')
const viewPartialsDirectoryPath = path.join(__dirname,'../templates/partials')

// registring the partials 
hbs.registerPartials(viewPartialsDirectoryPath);



//setup the  view engine and view  dir path 
app.set('view engine' , 'hbs');
app.set('views' , viewDirectoryPath);


//setuo the static page 
app.use(express.static(path.join(__dirname,"../public")))


app.get('',(req,res)=>{
    res.render('index',{
        title : 'welcome to webserver using nodejs ',
        name : 'kalpana ',
        footerContent :'this is Footer content '

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'welcome to about page using nodejs ',
        name : 'kalpana ',
        footerContent :'this is Footer content '

    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'help page ',
        name : 'kalpana ',
        footerContent :'this is Footer content '

    })
})


app.get('/product' , (req,res) =>{

    if( !req.query.location ) {
        return res.send({
            error : 'pls provide the location for getting the weather '})
    }

  return res.send ({
       location : req.query.location,
       temperature : '23.8',

       
  })

})

app.get('/weather' , (req,res) => {

    res.send([{
        forcast : 'its clear sky today with 38 degree',
        location : 'phildelpila , penselvanila , USA'
    },{
        forcast : 'its clear sky today with 18 degree',
        location : 'Boston , Mass , USA'
    }])
})

app.get('/help/*', (req,res) => {
    res.render("404" , {
        title : 'welcome to Help Page , But we are working still on the content ur searching   ',
        name : 'kalpana ',
        footerContent :'this is Footer content ',
        my404Error :'Page is not found 404'
    })
})

app.get('*', (req,res) => {
    res.render("404" , {
        title : 'welcome to error page  ',
        name : 'kalpana ',
        footerContent :'this is Footer content ',
        my404Error :'Page is not found 404'
    })
})



app.listen (3000, () =>{
console.log ('server is up and Running in the prot 3000 !! ')

});


