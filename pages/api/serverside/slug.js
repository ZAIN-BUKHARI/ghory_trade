import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
   
    let error=null;
    console.log(req.body.slug)
  let product = await Product.findOne({ slug:req.body.slug})
  if(product==null){
    return {
      props: {error:404}, // will be passed to the page component as props
    }
  }
  let variants= await Product.find({title:product.title ,category:product.category})
  let ColorSizeSlug={}         //{color:{size:{slug:codes-the-wear-color}}}
  for(let doc of variants){
    if(Object.keys(ColorSizeSlug).includes(doc.color)){
      ColorSizeSlug[doc.color][doc.size] = {slug:doc.slug}
    }
    else{
      ColorSizeSlug[doc.color]={}
      ColorSizeSlug[doc.color][doc.size] =  {slug:doc.slug}


    }
  } 
  
  res.json({product,ColorSizeSlug})
}
export default   ConnectMongoDB(handler)