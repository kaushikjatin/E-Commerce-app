const express= require('express')
const cors= require('cors') // this module will help us to process the cross origin requsts
const bodyParser = require('body-parser')
const path=require('path');
const app=express();


app.use(bodyParser.json()) //this middleware will convert the body of every request to the json format
app.use(bodyParser.urlencoded({extended:true})) // this will remove all extra space and other symbols from the request url.
app.use(cors())


if(process.env.NODE_ENV!='production') require('dotenv').config() 	// this line sets the environment variables
const port = process.env.PORT || 5000		// if it it hosted on heroku then it will take the port of heroku otherwise 5000
const stripe=require('stripe')(process.env.STRIPE_TEST_KEY);


if(process.env.NODE_ENV=='production')
{
    app.use(express.static(path.join(__dirname,'client/build')));

    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'client/build/index.html'));
    })
}


app.listen(port,err =>{
    if(err) throw err;
    console.log("Server running on port" + port);
})

app.get('/',(req,res)=>{
    res.status(200).send('good')
})
 
app.post('/payment',(req,res)=>{
    const body={
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd',
        description:"Learning to integrate payments"
    };
    stripe.charges.create(body,(stripeerr,striperes)=>{
        if(stripeerr){
            res.status(500).send({error:stripeerr});
        }
        else 
        {
            res.status(200).send({success:striperes});
        }
    })

})