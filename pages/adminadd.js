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
  const {Admin,fetchDailyWork,dailyWork} =useContext(ThemeContext)
  
  useEffect(()=>{
    fetchDailyWork()
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
  const [Rate,setRate]=useState(0)
  const [Selrate,setSelrate]=useState(0)


  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[cpassword,setcpassword]=useState('')
 
  const submitLinks = () =>{
    try{

      const data = {
        link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,
        length1,length2,length3,length4,length5,length6,length7,length8,length9,length10
      }
      axios.post('/api/post/link',data).then(res=>{
      if(res.data.success==true){
        alert('Successfully youtube videos link uploaded')
        setlink1('');setlink2('');setlink3('');setlink4('')
        setlink5('');setlink6('');setlink7('');setlink8('')
        setlink9('');setlink10('')
        setlength1('');setlength2('');setlength3('');setlength4('')
        setlength5('');setlength6('');setlength7('');setlength8('')
        setlength9('');setlength10('')
      }else if(res.data.success==false){
          alert('Error try again')
      }else{
        alert(res.data.error)
      }
    })
  }catch(e){
    alert('Error server down contact developer for inspection')
  }
  }
  
  const currencyRate = () =>{
    const data = {Rate}
    try{

      axios.post('/api/rate/update',data).then(res=>{
        if(res.data.success==true)
      {
        alert('Rate set successfully')
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
    const data = {Selrate}
    try{

      axios.post('/api/selrate/update',data).then(res=>{
        if(res.data.success==true)
      {
        alert('Rate set successfully')
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
 
  const forgot = (e) =>{
    const data = {email,password,cpassword}
   axios.post('/api/post/forgot',data).then(res=>{
    if(res.data.success==true)
    {
      toast.success("Password changed :)", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      toast.success(res.data.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
   }).catch(err=>{
    toast.success('Server down try again later', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   })
  }
 
  if(Admin){
    return (
      
      <ThemeProvider theme={theme}>
          
       <FullLayout>
       <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >Add Youtube Video Links </h1>
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
          <Button onClick={submitLinks} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>

      

     
    </Grid>

    {/* currency daily Rate  */}
    <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >DAILY USD TO PKR Rate</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={Rate} onChange={(e)=>{setRate(e.target.value)}} label="Currency" type='number' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={currencyRate} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid>
    <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >SELL RATE</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={Selrate} onChange={(e)=>{setSelrate(e.target.value)}} label="Currency" type='number' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={currencyRateSelrate} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid>
  
  
    <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >RESET PASSWORD</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
       
            <TextField value={email} onChange={(e)=>{setemail(e.target.value)}} label="Email" type='text' variant="outlined"  />
            <TextField value={password} onChange={(e)=>{setpassword(e.target.value)}} label="Password" type='text' variant="outlined"  />
            <TextField value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} label="Confirm Password" type='text' variant="outlined"  />
          </Stack>
          <br />
          <Button onClick={forgot} variant="outlined" mt={2}>
            Reset
          </Button>
          
        </BaseCard>
      </Grid>
    </Grid>


{/* DELETE OLD LINKS  */}
<h1 className='text-3xl font-bold text-pink-500 text-center' >DELETE OLD LINKS</h1>

      <AdminAllLinks/>




















        </FullLayout>
        </ThemeProvider>
      );
  }
  else{
    return(
    <h1 className='text-3xl text-blue-500 my-5 text-center'>Only ghory trading admins allow here</h1>

    )
  }
}

export default addProducts

