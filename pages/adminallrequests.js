import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import 'react-toastify/dist/ReactToastify.css';
import {
  Grid,
} from "@mui/material";
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import AdminAllRequests from '../AdminComponents/AdminAllRequests';

const adminallrequests = () => {
  const {Admin,getAllRequests,mobile} =useContext(ThemeContext)
  
  useEffect(()=>{
    // setrequestsearchresults([])
    getAllRequests();
  },[])
  if(Admin && !mobile){
    return (
      
      <ThemeProvider theme={theme}>
          
       <FullLayout>
       <Grid container spacing={0}>
       <h1 className='text-5xl font-bold text-blue-400  text-center ml-[450px]' >Requests</h1>

      <Grid item xs={12} lg={12}>
        <AdminAllRequests/>
      </Grid>

      

     
    </Grid>
  
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

export default adminallrequests