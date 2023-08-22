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
// import { toast } from 'react-toastify';

const addProducts = () => {
  const {Admin,getTenvideos,videoLinks,email} =useContext(ThemeContext)

  const subitLinks = async() =>{
    let bool = getTenvideos()
      // console.log(videoLinks)
      if(bool){

        const data = {videoLinks}
      let res = await axios.post(`/api/post/link?email=${email}`,data)
          if(res.status==200){
toast.success('Youtube links added', {
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
        toast.error('Youtube links not added', {
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
      }
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
            {/* <TextField value={link1} onChange={(e)=>{setlink1(e.target.value)}} label="Link 1" variant="outlined"  />
            <TextField value={link2} onChange={(e)=>{setlink2(e.target.value)}} label="Link 2" variant="outlined" />
            <TextField value={link3} onChange={(e)=>{setlink3(e.target.value)}} label="Link 3" variant="outlined" />
            <TextField value={link4} onChange={(e)=>{setlink4(e.target.value)}} label="Link 4" variant="outlined" />
            <TextField value={link5} onChange={(e)=>{setlink5(e.target.value)}} label="Link 5" variant="outlined" /> */}
            {/* //5  */}
            {/* <TextField value={link6} onChange={(e)=>{setlink6(e.target.value)}} label="Link 6" variant="outlined"  />
            <TextField value={link7} onChange={(e)=>{setlink7(e.target.value)}} label="Link 7" variant="outlined" />
            <TextField value={link8} onChange={(e)=>{setlink8(e.target.value)}} label="Link 8" variant="outlined" />
            <TextField value={link9} onChange={(e)=>{setlink9(e.target.value)}} label="Link 9" variant="outlined" />
            <TextField value={link10} onChange={(e)=>{setlink10(e.target.value)}} label="Link 10" variant="outlined" />
             */}
            
            
            
           
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

