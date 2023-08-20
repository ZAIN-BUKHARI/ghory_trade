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
import { useEffect } from 'react';
import AdminRequests from '../AdminComponents/AdminRequests';

const adminrecent = () => {
  const {Admin,getAllRequests} =useContext(ThemeContext)
  
  useEffect(()=>{
    getAllRequests("verified")
  },[])
  if(Admin){
    return (
      
      <ThemeProvider theme={theme}>
          
       <FullLayout>
       <Grid container spacing={0}>
       <h1 className='text-5xl font-bold text-green-500 text-center ml-[450px]' >Verified Requests</h1>

      <Grid item xs={12} lg={12}>
        <AdminRequests/>
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

export default adminrecent