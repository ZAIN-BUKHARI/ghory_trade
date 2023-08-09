import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import mongoose from 'mongoose'
import Product from '../../models/Product'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from 'next/error'
import Link from 'next/link'
import Image from 'next/image'
import Wear from '../../components/Wear'
import axios from 'axios'



const slug = ({buyNow,AddToCart,user}) => {
  
  const router=useRouter()
  const { slug } = router.query

  const [product,serproduct]=useState([])
  const [variants,setvarians]=useState([])
  useEffect(()=>{
    const data={slug}
  axios.post('/api/serverside/slug',data).then(res=>{
    console.log(res.data)
    serproduct(res.data.product)
    setvarians(res.data.ColorSizeSlug)

  })
  },[])

 
  

// USE STATES VARIABLES FOR SIZE ACCORDING COLOR DISPLAYING
const [Color, setColor] = useState()
const [Size, setSize] = useState()

// useEffect(()=>{
//  if(!error){
//   setColor(product.color)
//   setSize(product.size)
//  }
 
 
  
  

// },[router.query])

// ONCHNAGE FUNTION
const select =(COLOR,SIZE)=>{
  
  let url =`${process.env.NEXT_PUBLIC_HOST}/product/${variants[COLOR][SIZE]['slug']}`
  router.push(url)

}



  
  const Capital = (word) =>{
      //  return word[0].toUpperCase()+ word.slice(1)
      return word.charAt(0).toUpperCase()+ word.slice(1)
      
     
  }
  // if(error==404){
  //   return <Error statusCode={error} />
  // }
  
  return (
    <>
   <ToastContainer />
       
   <section className="text-gray-600 body-font overflow-hidden">
   
   <div className="container px-5 py-12 mx-auto z-20 ">
     <div className="lg:w-4/5 mx-auto flex flex-wrap">
       {/* img tag height property  lg:h-auto  */}
       <img alt="ecommerce" height={100} width={400} className="h-[500px] lg:w-1/2   w-[450px]  object-cover object-center rounded" src={product.image}/>
       {/* <Image alt="ecommerce" className="lg:w-1/2 w-full h-[500px] object-cover object-center rounded" src={product.image}/> */}
       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
         <h2 className="text-sm title-font text-gray-500 tracking-widest">Zainy'sWear</h2>
         {/* <h1 className={`text-gray-900  text-3xl title-font font-medium mb-1`}>{product.title}({product.size}/{Capital(product.color)})</h1> */}
         <div className="flex mb-4">
           <span className="flex items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
             </svg>
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
             </svg>
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
             </svg>
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
             </svg>
             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
             </svg>
             <span className="text-gray-600 ml-3">699 Reviews</span>
           </span>
           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
             <a className="text-gray-500">
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
               </svg>
             </a>
             <a className="text-gray-500">
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
               </svg>
             </a>
             <a className="text-gray-500">
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
               </svg>
             </a>
           </span>
         </div>
         <p className="leading-relaxed">{product.desc}</p>
         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
           <div className="flex">
             <span className="mr-3">Color</span>
             {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(Size) && <button onClick={()=>{select('black',Size)}} className={`border-2 ${Color==='black'?'border-black':'border-gray-300'} ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(Size) && <button onClick={()=>{select('blue',Size)}} className={`border-2 ${Color==='blue'?'border-black':'border-gray-300'} ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('pink') && Object.keys(variants['pink']).includes(Size) && <button onClick={()=>{select('pink',Size)}} className={`border-2 ${Color==='pink'?'border-black':'border-gray-300'} ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(Size) && <button onClick={()=>{select('yellow',Size)}} className={`border-2 ${Color==='yellow'?'border-black':'border-gray-300'} ml-1 bg-amber-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('brown') && Object.keys(variants['brown']).includes(Size) && <button onClick={()=>{select('brown',Size)}} className={`border-2 ${Color==='brown'?'border-black':'border-gray-300'} ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(Size) && <button onClick={()=>{select('white',Size)}} className={`border-2 ${Color==='white'?'border-black':'border-gray-300'} ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('orange') && Object.keys(variants['orange']).includes(Size) && <button onClick={()=>{select('orange',Size)}} className={`border-2 ${Color==='orange'?'border-black':'border-gray-300'} ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(Size) && <button onClick={()=>{select('green',Size)}} className={`border-2 ${Color==='green'?'border-black':'border-gray-300'} ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('dgreen') && Object.keys(variants['dgreen']).includes(Size) && <button onClick={()=>{select('dgreen',Size)}} className={`border-2 ${Color==='dgreen'?'border-black':'border-gray-300'} ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('purple') && Object.keys(variants['purple']).includes(Size) && <button onClick={()=>{select('purple',Size)}} className={`border-2 ${Color==='purple'?'border-black':'border-gray-300'} ml-1 bg-purple-800 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('maron') && Object.keys(variants['maron']).includes(Size) && <button onClick={()=>{select('maron',Size)}} className={`border-2 ${Color==='maron'?'border-black':'border-gray-300'} ml-1 bg-red-800 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('silver') && Object.keys(variants['silver']).includes(Size) && <button onClick={()=>{select('silver',Size)}} className={`border-2 ${Color==='silver'?'border-black':'border-gray-300'} ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('lpurple') && Object.keys(variants['lpurple']).includes(Size) && <button onClick={()=>{select('lpurple',Size)}} className={`border-2 ${Color==='lpurple'?'border-black':'border-gray-300'} ml-1 bg-purple-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('purple') && Object.keys(variants['purple']).includes(Size) && <button onClick={()=>{select('purple',Size)}} className={`border-2 ${Color==='purple'?'border-black':'border-gray-300'} ml-1 bg-purple-800 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(Size) && <button onClick={()=>{select('red',Size)}} className={`border-2 ${Color==='red'?'border-black':'border-gray-300'} rounded-full bg-red-500 w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('tan') && Object.keys(variants['tan']).includes(Size) && <button onClick={()=>{select('tan',Size)}} className={`border-2 ${Color==='tan'?'border-black':'border-gray-300'} ml-1 bg-amber-600 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('lyellow') && Object.keys(variants['lyellow']).includes(Size) && <button onClick={()=>{select('lyellow',Size)}} className={`border-2 ${Color==='lyellow'?'border-black':'border-gray-300'} ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('gray') && Object.keys(variants['gray']).includes(Size) && <button onClick={()=>{select('gray',Size)}} className={`border-2 ${Color==='gray'?'border-black':'border-gray-300'} ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('rose') && Object.keys(variants['rose']).includes(Size) && <button onClick={()=>{select('rose',Size)}} className={`border-2 ${Color==='rose'?'border-black':'border-gray-300'} ml-1 bg-rose-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('lpink') && Object.keys(variants['lpink']).includes(Size) && <button onClick={()=>{select('lpink',Size)}} className={`border-2 ${Color==='lpink'?'border-black':'border-gray-300'} ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none`}></button>}
             {Object.keys(variants).includes('dblue') && Object.keys(variants['dblue']).includes(Size) && <button onClick={()=>{select('dblue',Size)}} className={`border-2 ${Color==='dblue'?'border-black':'border-gray-300'} ml-1 bg-blue-800 rounded-full w-6 h-6 focus:outline-none`}></button>}
           </div>
           
           <div className="flex ml-6 items-center">
             <span className="mr-3">Size</span>
             <div className="relative">
               <select value={Size} onChange={(e)=>{select(Color,e.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  { Color && Object.keys(variants[Color]).includes('S') && <option value={'S'}>S</option>}
                  { Color && Object.keys(variants[Color]).includes('M') && <option value={'M'}>M</option>}
                  { Color && Object.keys(variants[Color]).includes('L') && <option value={'L'}>L</option>}
                  { Color && Object.keys(variants[Color]).includes('XL') && <option value={'XL'}>XL</option>}
                  { Color && Object.keys(variants[Color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                  { Color && Object.keys(variants[Color]).includes('A') && <option value={'A'}>Adjustable</option>}
                  { Color && Object.keys(variants[Color]).includes('U') && <option value={'U'}>Unstitch</option>}
                  { Color && Object.keys(variants[Color]).includes('ST') && <option value={'ST'}>Standard</option>}
               </select>
               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                   <path d="M6 9l6 6 6-6"></path>
                 </svg>
               </span>
             </div>
           </div>
         </div>
         <div className="flex">
           <span className="title-font font-medium text-2xl text-gray-900">₨ {product.price}</span>
           
           <button disabled={product.AvailableQty<=0}  onClick={()=>{AddToCart(slug ,1,product.price,product.title,Size,Color,product.image)}}  className="flex disabled:bg-pink-300 ml-8 text-white bg-pink-500 border-0 py-2 px-2  focus:outline-none hover:bg-pink-600 rounded">Add</button>
          {user.value && <Link onClick={()=>{AddToCart(slug ,1,product.price,product.title,Size,Color,product.image)}} href={'/checkout'} disabled={product.AvailableQty<=0}  className="flex ml-8 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Buy now</Link>}
          {!user.value && <Link href={'/login'}><button disabled={product.AvailableQty<=0}  className="flex ml-8  disabled:bg-pink-300 text-white bg-pink-300 border-0 py-2 px-2 md:px-6 focus:outline-none  rounded">Log in</button></Link> }
           
           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
             </svg>
           </button>
         </div>
         
    
       {product.AvailableQty<=0 && <div className='text-red-700 text-2xl mt-3 '>The variant of this product is currently out of stock :(</div>}
      
      
       </div>
     </div>
   </div>
 </section>
         {product.AvailableQty<=0 && <div>The product is currently out of stock :(</div>}
         <Wear/>
    


    </>
  )
}
// GET SERVER SIDE PROPS 
// export async function getServerSideProps(context) {
//   let error=null;
//   if(!mongoose.connections[0].readyState){
//     mongoose.set("strictQuery", true);
//     await mongoose.connect(process.env.MONGO_URI)
    
//   }
//   let product = await Product.findOne({ slug:context.query.slug})
//   if(product==null){
//     return {
//       props: {error:404}, // will be passed to the page component as props
//     }
//   }
//   let variants= await Product.find({title:product.title ,category:product.category})
//   let ColorSizeSlug={}         //{color:{size:{slug:codes-the-wear-color}}}
//   for(let doc of variants){
//     if(Object.keys(ColorSizeSlug).includes(doc.color)){
//       ColorSizeSlug[doc.color][doc.size] = {slug:doc.slug}
//     }
//     else{
//       ColorSizeSlug[doc.color]={}
//       ColorSizeSlug[doc.color][doc.size] =  {slug:doc.slug}


//     }
//   } 
  
 
        
  
//   return {
//     props: {error:error,product:JSON.parse(JSON.stringify(product)),variants:JSON.parse(JSON.stringify(ColorSizeSlug))}, // will be passed to the page component as props
//   }
// }

export default slug