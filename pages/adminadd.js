import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
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
 
  const submitLinks = () =>{
    try{

      const data = {link1,link2,link3,link4,link5,link6,link7,link8,link9,link10}
      axios.post('/api/post/link',data).then(res=>{
      if(res.data.success==true){
        alert('Successfully youtube videos link uploaded')
        setlink1('');setlink2('');setlink3('');setlink4('')
        setlink5('');setlink6('');setlink7('');setlink8('')
        setlink9('');setlink10('')
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
            <TextField value={link2} onChange={(e)=>{setlink2(e.target.value)}} label="Link 2" variant="outlined" />
            <TextField value={link3} onChange={(e)=>{setlink3(e.target.value)}} label="Link 3" variant="outlined" />
            <TextField value={link4} onChange={(e)=>{setlink4(e.target.value)}} label="Link 4" variant="outlined" />
            <TextField value={link5} onChange={(e)=>{setlink5(e.target.value)}} label="Link 5" variant="outlined" />
            {/* //5  */}
            <TextField value={link6} onChange={(e)=>{setlink6(e.target.value)}} label="Link 6" variant="outlined"  />
            <TextField value={link7} onChange={(e)=>{setlink7(e.target.value)}} label="Link 7" variant="outlined" />
            <TextField value={link8} onChange={(e)=>{setlink8(e.target.value)}} label="Link 8" variant="outlined" />
            <TextField value={link9} onChange={(e)=>{setlink9(e.target.value)}} label="Link 9" variant="outlined" />
            <TextField value={link10} onChange={(e)=>{setlink10(e.target.value)}} label="Link 10" variant="outlined" />
            
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitLinks} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>

      

     
    </Grid>
<h1 className='text-3xl text-blue-500 my-5 text-center'>DELETE OLD LINKS</h1>
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

