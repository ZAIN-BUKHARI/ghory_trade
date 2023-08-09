import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
    // let {page,limit}=context.query;
    // if(!page) page=1;
    // if(!limit) limit=10;
    // const skip= (page-1)*2;
    
  let products = await Product.find({ category : req.body.query})
  products.reverse()
  let Tshirts={}
  for(let item of products){
    if(item.title in Tshirts){
      if(!Tshirts[item.title].color.includes(item.color) && item.AvailableQty>0){
        Tshirts[item.title].color.push(item.color)
        
      }
      if(!Tshirts[item.title].size.includes(item.size) && item.AvailableQty>0){
        Tshirts[item.title].size.push(item.size)
        
      }

    }
    else{
      Tshirts[item.title]=JSON.parse(JSON.stringify(item))
      if(item.AvailableQty>0){
        Tshirts[item.title].color =[item.color]
        Tshirts[item.title].size =[item.size]
      }
      else{
        Tshirts[item.title].color =[]
        Tshirts[item.title].size =[]
      }

    }
  }
  res.json(Tshirts)
    
}
  
  
  
export default   ConnectMongoDB(handler)