import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req, res)=> {
    let products = await Product.find()
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

      }
    }
    res.status(200).json({ Tshirts })
  }
  
  
  
  export default   ConnectMongoDB(handler)