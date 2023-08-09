import Order from '../../models/Order'
import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product';
import { redirect } from 'next/dist/server/api-utils';

const handler= async (req,res)=>{
    if(req.method =='POST'){
        let p;
        let sum=0;
        let cart=req.body.cart;
        if(req.body.subTotal <=0){
            res.status(200).json({success:false,error:"0 Rs purchase it not valid"})
            return
           
        }
            for(let item in cart){
            sum+=cart[item].price*cart[item].qty
            p= await Product.findOne({slug:item})
            
            if(p.AvailableQty < cart[item].qty){
                res.status(201).json({error:"Out of Stock"})
            }
            if(p.price != cart[item].price){
                res.status(200).json({success:false,error:"The price of the some item in your cart have changed"})
                return
            }
        
        }  
        if(sum!==req.body.subTotal){
            res.status(200).json({success:false,error:"The price of the some item in your cart have changed"})
                return

        }
        let OrderId= await Math.floor(Math.random()*1315463464+Date.now())
            let orders =await new Order({email:req.body.email,OrderId,products:req.body.cart,city:req.body.city,phone:req.body.phone,name:req.body.name,address:req.body.address,subTotal:req.body.subTotal})
            
           
            
            for(let slug in orders.products){
                await Product.findOneAndUpdate({slug:slug},{$inc:{"AvailableQty": - orders.products[slug].qty}})

            }
             let redirect = await orders.save()
            // res.status(200).json({success:"success",redirectorder:redirectorder})
            res.status(200).json({success:"success", redirect:redirect})
            
        
       

           
            
        }
   

}

export default   ConnectMongoDB(handler)
