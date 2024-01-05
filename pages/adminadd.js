import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import AdminAllLinks from '../AdminComponents/AdminAllLinks';

const addProducts = () => {
  const {Admin,fetchDailyWork,mobile,setLoader} =useContext(ThemeContext)
  const [updateLinks,setupdateLinks]=useState([])
  const [upload,setupload]=useState()
  const [hideBTN,setHideBTN]=useState(true)
  const uplaodStatusFunction=async()=>{
    try{
      let res = await axios.get('/api/get/uploadStatus');
      if(res.data.success==true)
      {
        setupload(res.data.upload)
      }
    }catch(e)
    {
      alert('Internet Issue')
      router.push('/admin')
    }
  }
  useEffect(()=>{
    fetchDailyWork()
    uplaodStatusFunction()
  })
  const [link1,setlink1]=useState('')
  const [link2,setlink2]=useState('')
  const [link3,setlink3]=useState('')
  const [link4,setlink4]=useState('')
  const [link5,setlink5]=useState('')
  const [link6,setlink6]=useState('')
  const [link7,setlink7]=useState('')
  const [link8,setlink8]=useState('')
  const [link9,setlink9]=useState('')
  const [link10,setlink10]=useState('')

  const [length1,setlength1]=useState('')
  const [length2,setlength2]=useState('')
  const [length3,setlength3]=useState('')
  const [length4,setlength4]=useState('')
  const [length5,setlength5]=useState('')
  const [length6,setlength6]=useState('')
  const [length7,setlength7]=useState('')
  const [length8,setlength8]=useState('')
  const [length9,setlength9]=useState('')
  const [length10,setlength10]=useState('')
  const [buyRate,setbuyRate]=useState(0)
  const [sellRate,setsellRate]=useState(0)
  const [FIVE,setFIVE]=useState(0)


 
  const submitLinks =  () =>{
    try{
<<<<<<< HEAD
      alert('click ok')
      setHideBTN(false)
=======
>>>>>>> origin/main
      setLoader(true)
      const data = {
        link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,
        length1,length2,length3,length4,length5,length6,length7,length8,
        length9,length10
      }
      axios.post('/api/post/link',data).then(res=>{
      if(res.data.success==true){
        setLoader(false)
        alert('Successfully youtube videos link uploaded')
        setlink1('');setlink2('');setlink3('');setlink4('')
        setlink5('');setlink6('');setlink7('');setlink8('')
        setlink9('');setlink10('')
        setlength1('');setlength2('');setlength3('');setlength4('')
        setlength5('');setlength6('');setlength7('');setlength8('')
<<<<<<< HEAD
        setlength9('');setlength10('')
        axios.get('/api/send/sendEmailToAll').then();
        window.location.reload()
      }else{
          setLoader(false)
          setHideBTN(true)
          alert('Error try again')
      }
    })
  }catch(e){
    setHideBTN(true)
=======
        setlength9('');setlength10('');
        axios.get('/api/send/sendEmailToAll').then();
      }else if(res.data.success==false){
          setLoader(false)
          alert('Error try again')
      }else{
        setLoader(false)
        alert(res.data.error)
      }
    })
  }catch(e){
>>>>>>> origin/main
    setLoader(false)
    alert('Error server down contact developer for inspection')
  }
  }
  // const addperdayprofit = () =>{

  //   let confirmation = confirm('Are you sure. You want to Add Profit')
  //   if(confirmation){
  //     setLoader(true)
  //     axios.get('/api/admin/bonace').then(res=>{
  //       if(res.data==true)
  //       {
  //         setLoader(false)
  //         alert('Profit Added to your all clients')
  //       }
  //     })
  //   }
  // }
  
  const currencyRate = () =>{
    const data = {buyRate}
    try{

      axios.post('/api/buy/update',data).then(res=>{
        if(res.data.success==true)
      {
        alert('Rate set successfully')
        setbuyRate(0)
      }
      else{
        alert('Server error try again ')
      }
    })
  }catch(e)
  {
    alert('Server error caught successfully try again')
  }
  }
  const currencyRateSelrate = () =>{
    const data = {sellRate}
    try{

      axios.post('/api/sell/update',data).then(res=>{
        if(res.data.success==true)
      {
        alert('Rate set successfully')
        setsellRate(0)
      }
      else{
        alert('Server error try again ')
      }
    })
  }catch(e)
  {
    alert('Server error caught successfully try again')
  }
  }
 
  
const Update =async () =>{
    setLoader(true)
    let res = await axios.get('/api/get/links')
    setupdateLinks(res.data.links[0]._id)
    setlink1(res.data.links[0].links[0].link)
    setlink2(res.data.links[0].links[1].link)
    setlink3(res.data.links[0].links[2].link)
    setlink4(res.data.links[0].links[3].link)
    setlink5(res.data.links[0].links[4].link)
    setlink6(res.data.links[0].links[5].link)
    setlink7(res.data.links[0].links[6].link)
    setlink8(res.data.links[0].links[7].link)
    setlink9(res.data.links[0].links[8].link)
    setlink10(res.data.links[0].links[9].link)
    setlength1(res.data.links[0].links[0].length)
    setlength2(res.data.links[0].links[1].length)
    setlength3(res.data.links[0].links[2].length)
    setlength4(res.data.links[0].links[3].length)
    setlength5(res.data.links[0].links[4].length)
    setlength6(res.data.links[0].links[5].length)
    setlength7(res.data.links[0].links[6].length)
    setlength8(res.data.links[0].links[7].length)
    setlength9(res.data.links[0].links[8].length)
    setlength10(res.data.links[0].links[9].length)
    setLoader(false)
}
const updateLinkmethod = () =>{
  setLoader(true)
  const data = {
    link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,updateLinks,
    length1,length2,length3,length4,length5,length6,length7,length8,length9,length10
  }
  try{
   axios.post('/api/admin/updatelink',data).then(res=>{

      if(res.data.success==true){
        setLoader(false)
        setlink1('');setlink2('');setlink3('');setlink4('')
        setlink5('');setlink6('');setlink7('');setlink8('')
        setlink9('');setlink10('')
        setlength1('');setlength2('');setlength3('');setlength4('')
        setlength5('');setlength6('');setlength7('');setlength8('')
        setlength9('');setlength10('')
        alert('Links update')
      }else{
        setLoader(false)
        alert('Network error')
      }
    })
  
  }catch(e)
  {
    alert('Network error')
    setLoader(false)
  }
}
const fivePercent = () =>{
    setFIVE((FIVE*5)/100)
}

  if(Admin){
    return (
      
      <ThemeProvider theme={theme}>
          
       <FullLayout>
       <Grid container spacing={0}>
       <h1 className='text-3xl font-bold text-blue-500 text-center' >Add Youtube Video Links </h1>
    <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
         {/* // TOTAL 10x */}
            {/* //5 */}
            <TextField value={link1} onChange={(e)=>{setlink1(e.target.value)}} label="Link 1" variant="outlined"  />
            <TextField value={length1} onChange={(e)=>{setlength1(e.target.value)}} label="Length 1" variant="outlined"  />

            <TextField value={link2} onChange={(e)=>{setlink2(e.target.value)}} label="Link 2" variant="outlined" />
            <TextField value={length2} onChange={(e)=>{setlength2(e.target.value)}} label="Length 2" variant="outlined" />

            <TextField value={link3} onChange={(e)=>{setlink3(e.target.value)}} label="Link 3" variant="outlined" />
            <TextField value={length3} onChange={(e)=>{setlength3(e.target.value)}} label="Length 3" variant="outlined" />

            <TextField value={link4} onChange={(e)=>{setlink4(e.target.value)}} label="Link 4" variant="outlined" />
            <TextField value={length4} onChange={(e)=>{setlength4(e.target.value)}} label="Length 4" variant="outlined" />

            <TextField value={link5} onChange={(e)=>{setlink5(e.target.value)}} label="Link 5" variant="outlined" />
            <TextField value={length5} onChange={(e)=>{setlength5(e.target.value)}} label="Length 5" variant="outlined" />

            {/* //5  */}
            <TextField value={link6} onChange={(e)=>{setlink6(e.target.value)}} label="Link 6" variant="outlined"  />
            <TextField value={length6} onChange={(e)=>{setlength6(e.target.value)}} label="Length 6" variant="outlined"  />

            <TextField value={link7} onChange={(e)=>{setlink7(e.target.value)}} label="Link 7" variant="outlined" />
            <TextField value={length7} onChange={(e)=>{setlength7(e.target.value)}} label="Length 7" variant="outlined" />

            <TextField value={link8} onChange={(e)=>{setlink8(e.target.value)}} label="Link 8" variant="outlined" />
            <TextField value={length8} onChange={(e)=>{setlength8(e.target.value)}} label="Length 8" variant="outlined" />
            
            <TextField value={link9} onChange={(e)=>{setlink9(e.target.value)}} label="Link 9" variant="outlined" />
            <TextField value={length9} onChange={(e)=>{setlength9(e.target.value)}} label="Length 9" variant="outlined" />
            
            <TextField value={link10} onChange={(e)=>{setlink10(e.target.value)}} label="Link 10" variant="outlined" />
            <TextField value={length10} onChange={(e)=>{setlength10(e.target.value)}} label="Length 10" variant="outlined" />

            
            
            
            
            
           
          </Stack>
          <br />
         {upload && hideBTN && <Button onClick={submitLinks} variant="outlined" mt={2}>
            Submit
          </Button>}
          
          <Button className='' onClick={updateLinkmethod} variant="outlined" mt={2}>
            Update
          </Button>
          
        </BaseCard>
      </Grid>

      

     
    </Grid>
    {/* currency daily Rate  */}
    <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-blue-500 text-center' >BUY RATE</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={buyRate} onChange={(e)=>{setbuyRate(e.target.value)}} label="Currency" type='number' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={currencyRate} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid>
    <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-blue-500 text-center' >SELL RATE</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={sellRate} onChange={(e)=>{setsellRate(e.target.value)}} label="Currency" type='number' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={currencyRateSelrate} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid>
    {/* <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-blue-500 text-center' >ADD PERDAYPROFIT TO ALL</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          </Stack>
          <br />
          <Button onClick={addperdayprofit} variant="outlined" mt={2}>
            Add
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid> */}
<<<<<<< HEAD
    {/* <Grid container spacing={0}>
=======
     <Grid container spacing={0}>
>>>>>>> origin/main
        <h1 className='text-3xl font-bold text-blue-500 text-center' >5% CALCULATOR</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={FIVE} onChange={(e)=>{setFIVE(e.target.value)}} label="Currency" type='number' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={fivePercent} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
<<<<<<< HEAD
    </Grid> */}
=======
    </Grid> 
>>>>>>> origin/main
  
{/* DELETE OLD LINKS  */}
{!mobile && (
  <>
    <Grid container spacing={0}>

<h1 className='text-3xl font-bold text-blue-500 text-center' >DELETE OLD LINKS</h1>
<Grid item xs={12} lg={12}>
        <BaseCard >
      <AdminAllLinks Update={Update} updateLinkmethod={updateLinkmethod}/>
      </BaseCard>
      </Grid>
      </Grid>
  </>
)}


        </FullLayout>
        </ThemeProvider>
      );
  }
  else{
    return(
    <h1 className='text-3xl text-blue-500 my-5 text-center'>Only U-G TRADING admins allow here</h1>

    )
  }
}

export default addProducts

