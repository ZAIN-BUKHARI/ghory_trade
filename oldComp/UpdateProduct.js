import React,{useState}from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "../src/components/baseCard/BaseCard";
const UpdateProduct = ({
    _id:existid,
    slug:existslug,
    title:existtitle,
    color:existcolor,
    size:existsize,
    price:existprice,
    AvailableQty:existAvailableQty,
    Profit:existProfit,
    Feature:existFeature,
    category:existcategory,
    desc:existdesc,
    image:existfile,
}) => {
     // UPDATE PRODUCT SYSTEM HERE 
    const [id, setid] = useState(existid||'')
    const [slug, setslug] = useState(existslug||'')
    const [title, settitle] = useState(existtitle||'')
  const [desc, setdesc] = useState(existdesc||'')
  const [price, setprice] = useState(existprice||'')
  const [color, setcolor] = useState(existcolor||'')
  const [file, setFile] = useState(existfile||'')
  const [size, setsize] = useState(existsize||'')
  const [AvailableQty, setAvailableQty] = useState(existAvailableQty||'')
  const [category, setcategory] = useState(existcategory||'')
  const [Profit, setprofit] = useState(existProfit||'')
  const [Feature, setFeature] = useState(existFeature||'')
  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
     else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='AvailableQty'){
        setAvailableQty(e.target.value)
      }
      else if(e.target.name=='size'){
        setsize(e.target.value)
      }
      else if(e.target.name=='color'){
        setcolor(e.target.value)
      }
      else if(e.target.name=='Profit'){
        setprofit(e.target.value)
      }
      else if(e.target.name=='price'){
        setprice(e.target.value)
      }
      else if(e.target.name=='Feature'){
        setFeature(e.target.value)
      }
     
  }
  const imgLink=(e)=>{
    if(e.target.name=='file'){
      setFile(e.target.value)
    }
  }
  
  const submitform = async (e) =>{
    e.preventDefault()
   
       
        if(id!='', slug!='' && title!='' && desc!='' && price!=''  && AvailableQty!='' && category!=''&& Profit!=''){
        const data = {id,slug,title,file,desc,price,size,color,AvailableQty,category,Profit,Feature}
        console.log(slug)
        console.log(id)
    let response =  await fetch(`/api/Admin/update`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    console.log(a)
    if(a.success){
       
       toast.success('Successfully product updated!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       
    }else if(a.error){
      toast.info('You put some wrong info! Try again ', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
  }
  else{
    toast.error('Cannot set empty field', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    
  
  }
  return (
    <>
    <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
            
          <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <select value={color} onChange={handleChange} name='color'   className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>color</option>
                   <option value={'blue'}>blue</option>
                   <option value={'red'}>red</option>
                   <option value={'black'}>black</option>
                   <option value={'green'}>green</option>
                  <option value={'yellow'}>yellow</option>
                  <option value={'pink'}>pink</option>
                  <option value={'orange'}>orange</option>
                  <option value={'tan'}>tan</option>
                  <option value={'white'}>white</option>
                  <option value={'brown'}>brown</option>
                  <option value={'maron'}>Maron</option>
                  <option value={'purple'}>purple</option>
                  <option value={'lpurple'}>Light purple</option>
                  <option value={'gray'}>Gray</option>
                  <option value={'dgreen'}>Dark green</option>
                  <option value={'lyellow'}>light yrllow</option>
                  <option value={'rose'}>Rose</option>
                  <option value={'lpink'}>Light pink</option>
                  <option value={'dblue'}>Dark blue</option>
              </select> 
            <select value={size} onChange={handleChange} name='size'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>Size</option>
                   <option value={'S'}>S</option>
                   <option value={'M'}>M</option>
                   <option value={'L'}>L</option>
                   <option value={'XL'}>XL</option>
                  <option value={'XXL'}>XXL</option>
                  <option value={'A'}>Ajustable</option>
                  <option value={'U'}>Unstitch</option>
                  <option value={'ST'}>Standard</option>
              </select>
            <TextField onChange={handleChange} value={price} type='number' name="price" label="Price" variant="outlined" />
            <TextField onChange={handleChange} value={AvailableQty} type='number' name="AvailableQty" label="Quantity" variant="outlined" />
            {/* <TextField onChange={handleChange} value={category} name="category" label="Category" variant="outlined" /> */}
            <select value={category} onChange={handleChange} name='category'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>category</option>
                   <option value={'3pcs'}>3pcs suit</option>
                   <option value={'2pcs'}>2pcs suit</option>
                   <option value={'Frock'}>Frock</option>
                   <option value={'unstitch'}>Unstitch</option>
                   <option value={'plazo'}>Plazo</option>
              </select>
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={Profit} name="Profit" type='number' label="Profit" variant="outlined"  />
            <TextField onChange={handleChange} value={Feature} name="Feature" type='text' label="Feature product" variant="outlined"  />
            <TextField onChange={imgLink} value={file}   name="file" type='text' label="Image Link" variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
      </>
  )
}

export default UpdateProduct