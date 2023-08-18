import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { flushSync } from 'react-dom';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import { File } from 'react-feather';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
const addProducts = () => {
  const {Admin} =useContext(ThemeContext)

  //STATE VARIABLES
  const [link1,setlink1]=useState("")
  const [length1,setlength1]=useState("")

  const [link2,setlink2]=useState("")
  const [length2,setlength2]=useState("")

  const [link4,setlink4]=useState("")
  const [length4,setlength4]=useState("")

  const [link5,setlink5]=useState("")
  const [length5,setlength5]=useState("")

  const [link6,setlink6]=useState("")
  const [length6,setlength6]=useState("")

  const [link7,setlink7]=useState("")
  const [length7,setlength7]=useState("")

  const [link8,setlink8]=useState("")
  const [length8,setlength8]=useState("")

  const [link9,setlink9]=useState("")
  const [length9,setlength9]=useState("")
  
  const [link10,setlink10]=useState("")
  const [length10,setlength10]=useState("")

  const subitLinks = () =>{
    if(link1.length!=0 && link2.length!=0 && link3.length!=0 &&
       link4.length!=0 && link5.length!=0 && link6.length!=0 &&
       link7.length!=0 && link8.length!=0 && link9.length!=0 && link10.length!=0 &&
       length1.length!=0 && length2.length!=0 && length3.length!=0 &&
       length4.length!=0 && length5.length!=0 && length6.length!=0 &&
       length7.length!=0 && length8.length!=0 && length9.length!=0 && length10.length!=0){
        const data = {link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,length1,length2,length3,length4,length5,length6,length7,length8,length9,length10}
        axios.post('/api/user/links',data).then(res=>{
          console.log("done")
        })
       }
  }
  
  if(Admin){
    return (
      
      <ThemeProvider theme={theme}>
          
       <FullLayout>
       <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >Add Youtube Video Links And Length</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
         {/* // TOTAL 10x */}
            {/* //5 */}
            <TextField value={link1} onChange={(e)=>{setlink1(e.target.value)}} label="Link 1" variant="outlined"  />
            <TextField value={length1} onChange={(e)=>{setlength1(e.target.value)}} label="Length 1 " variant="outlined" />
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
            <TextField value={length6} onChange={(e)=>{setlength6(e.target.value)}} label="Length 6" variant="outlined" />
            <TextField value={link7} onChange={(e)=>{setlength7(e.target.value)}} label="Link 7" variant="outlined" />
            <TextField value={length7} onChange={(e)=>{setlength7(e.target.value)}} label="Length 7" variant="outlined" />
            <TextField value={link8} onChange={(e)=>{setlink8(e.target.value)}} label="Link 8" variant="outlined" />
            <TextField value={length8} onChange={(e)=>{setlength8(e.target.value)}} label="Length 8" variant="outlined" />
            <TextField value={link9} onChange={(e)=>{setlink9(e.target.value)}} label="Link 9" variant="outlined" />
            <TextField value={length9} onChange={(e)=>{setlength9(e.target.value)}} label="Length 9" variant="outlined" />
            <TextField value={link10} onChange={(e)=>{setlink10(e.target.value)}} label="Link 10" variant="outlined" />
            <TextField value={length10} onChange={(e)=>{setlength10(e.target.value)}} label="Length 10" variant="outlined" />
            
            
            
            
           
          </Stack>
          <br />
          <Button onClick={subitLinks} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>

      

     
    </Grid>
  
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