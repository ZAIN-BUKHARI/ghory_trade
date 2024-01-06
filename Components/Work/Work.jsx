import React from 'react'
import { useContext,useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ThemeContext } from '../../Context/ThemeContext'
import {useRouter} from 'next/router'

const Work = () => {
    //use Context 
    const {setLoader,setvideoID,Userid,setLength,email,Uname,mobile,token}=useContext(ThemeContext)
    const [views,setviews]=useState(true)
    const [workstatus, setWorkStatus] = useState('');
    const [level, setLevel] = useState('');
    const [links,setLinks]=useState([]) 
    const [linkslength,setLinksLength]=useState([]) 
    const [assignDate,setAssignDate]=useState('') 
    const [disable,setdisable]=useState(true)

    //useRouter
    const router = useRouter();

    //network error function
    const networkError=()=>
    {
       setLoader(false)
      router.push('/')
        toast.info('Today Work is not uploaded ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }

   
    const startWork = (link,length) =>{
        setvideoID(link)
        setLength(length)
        router.push(`/watching-UG-youtube-channel-video`)
    }
    const Complete=async(e)=>{
      e.preventDefault()
      alert('Thanks for submitting tasks wait few seconds 😃')
      setdisable(false)
      setLoader(true)
      try{
      const data = {Userid}
      const res = await  axios.post('/api/post/balanceincrement',data)
          if(res.data.success==true)
            {
            router.push('/')
            setTimeout(() => {
              window.location.reload()
          }, 1000);
            toast.info('Congrats for completing tasks :) ', {
              position: "top-center",
              autoClose: 50000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setLoader(false)
            }else{
            setLoader(false)
            router.push('/')
            setTimeout(() => {
            window.location.reload()
            }, 1000);
              toast.info('Network Error:) ', {
                position: "top-center",
                autoClose: 50000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
          }
          }catch(e){
              setTimeout(() => {
                window.location.reload()
              }, 1000);
              setLoader(false)
              router.push('/')
              toast.info('Network Error:) ', {
                position: "top-center",
                autoClose: 50000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
    }

  async function  updateViews()
    {
      try{  
        const email = localStorage.getItem('token')
        const res = await axios.get(`/api/get/views?email=${email}`)
        if(res.data.success==true)
          setviews(res.data.views)
        else  
          networkError();
      }catch(e)
      { 
        networkError()
      }
  }
    
  async function fetchDailyWork()
    {
      try{
        setLoader(true)
        let arr=[];
        const res = await  axios.get('/api/get/links')
        if(res.data.success==true ){
            arr.push(res.data.links[0].links[0])
            arr.push(res.data.links[0].links[1])
            arr.push(res.data.links[0].links[2])
            arr.push(res.data.links[0].links[3])
            arr.push(res.data.links[0].links[4])
            arr.push(res.data.links[0].links[5])
            arr.push(res.data.links[0].links[6])
            arr.push(res.data.links[0].links[7])
            arr.push(res.data.links[0].links[8])
            arr.push(res.data.links[0].links[9])
            arr.push(res.data.links[0].links[10])
            setLinks(arr)
            setLinksLength(arr.length)
            setAssignDate(res.data.links[0].date)
        }else{
            setLoader(false)
            router.push('/')
            toast.error('Today Work not uploaded ', {
              position: "top-center",
              autoClose: 50000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
        }
         setLoader(false)
        
    }catch(e)
    {
      networkError()
    }
  }

  async function UserDetails()
  {
    try{
    const email = localStorage.getItem('token')
    const res = await axios.get(`/api/get/userone?email=${email}`)
       if(res.data.success==true)
       {
        setWorkStatus(res.data.user.todaywork)
        setLevel(res.data.user.level)
        }else{
          networkError()
        }
      }
    catch(e)
    {
      networkError()
    }
    
  }
    
    useEffect(()=>{
        fetchDailyWork()
        UserDetails()
        updateViews()
      
    },[])
if(!mobile){

    return (
      // {token && subscription == 'yes' && (
        <>
    <div className='!bg-[#121212]  !pb-5 !pt-12 !ml-[0px] mt-20 AdminWorksheet-body'>
    <main className="!bg-transparent goldShadow border-2 border-[#ffdb1a] shadow-2xl  !shadow-[#ffdb1a] table">
    <section className="!bg-transparent border-2 border-[#ffdb1a] table__header">
      <div className='flex'>
      {views>=parseInt(level) && disable && workstatus=="no" &&<button className=' w-20 rounded bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white  hover:via-[#ffdb1a] hover:to-[#ffdb1a]' onClick={Complete}>Collect</button>}
      <h1 className='text-[#ffdb1a] text-4xl font-bold pl-[500px]'>Daily Tasks</h1>
      </div>
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr className='border-b border-2 border-[#ffdb1a] !bg-transparent'>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Index </th>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Name </th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Assign</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Deadline</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> status</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> start</th>
                    </tr>
                </thead>
                {linkslength!=0 && views<=10 && links.slice(0,parseInt(level)-views).map((item,index)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr className='border-2 border-[#ffdb1a] '>
                    <td className=' bg-[#121212] text-[#ffdb1a] '> {1+index}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a] p-6'> {Uname}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a] p-6'> {assignDate}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a] p-6'> 11:59pm</td>
                    <td className=' bg-[#121212] text-[#ffdb1a] p-6'> {workstatus}</td>   
                    {workstatus=="yes" &&<td className=' bg-[#121212] text-[#ffdb1a]  p-6 '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
</td>}   
                    {workstatus=="no" &&<td  className=' bg-[#121212] text-[#ffdb1a] p-6'><svg onClick={()=>{startWork(item.link,item.length)}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
</svg>
</td>}   
               </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
        </>
      // )}
  )

}
else{
  return (
    // {token && subscription == 'yes' && (
      <>
  <div className='!bg-[#121212] mb-20 pl-10 pr-10   mt-[100px] AdminWorksheet-body-mob'>
  <main className="!bg-transparent goldShadow border-2 border-[#ffdb1a] shadow-2xl  !shadow-[#ffdb1a] ">
  <section className="!bg-transparent border-2 border-[#ffdb1a] table__header">
    <div className='flex'>
    {views>=parseInt(level) && disable && workstatus=="no" &&<button className=' w-20 rounded bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white  hover:via-[#ffdb1a] hover:to-[#ffdb1a]' onClick={Complete}>Collect</button>}
    <h1 className='text-[#ffdb1a] text-4xl font-bold pl-[100px]'>Daily Tasks</h1>
    </div>
      </section>
      {/* <section className=""> */}
          <table className=''>
                      
                  <thead>
                  <tr className='border-b border-2  border-[#ffdb1a] !bg-transparent'>
                      <th className='bg-[#121212] text-[#ffdb1a] text-xl font-bold'> Index </th>
                      {/* <th className='bg-[#121212] text-[#ffdb1a]'> Name </th> */}
                      {/* <th className=' bg-[#121212] text-[#ffdb1a]'> Assign</th> */}
                      <th className=' bg-[#121212] text-[#ffdb1a] pl-16 text-xl font-bold'> Deadline</th>
                      {/* <th className=' bg-[#121212] text-[#ffdb1a] text-xl font-bold '> status</th> */}
                      <th className=' bg-[#121212] text-[#ffdb1a] text-xl font-bold '> start</th>
                  </tr>
              </thead>
              {linkslength!=0 && views<=10 && links.slice(0,parseInt(level)-views).map((item,index)=>(
                  <>
               <tbody key={item._id}>
              
              <tr className='border-2 border-[#ffdb1a]  '>
                  <td className=' bg-[#121212] text-[#ffdb1a] py-7 pl-10 text-xl font-bold '> {1+index}</td>
                  {/* <td className=' bg-[#121212] text-[#ffdb1a] p-6'> {Uname}</td> */}
                  {/* <td className=' bg-[#121212] text-[#ffdb1a] p-6'> {assignDate}</td> */}
                  <td className=' bg-[#121212] text-[#ffdb1a] py-7  pl-16 text-xl font-bold '> 11:59pm</td>
                  {/* <td className=' bg-[#121212] text-[#ffdb1a] py-7 text-xl font-bold'> {workstatus}</td>    */}
                  {workstatus=="yes" &&<span className=' bg-[#121212] text-[#ffdb1a]   '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  ml-3 mt-3">
<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
</span>}   
                  {workstatus=="no" &&<span  className=' bg-[#121212] text-[#ffdb1a]  '><svg onClick={()=>{startWork(item.link,item.length)}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ml-3 mt-3 ">
<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
</svg>
</span>}   
             </tr>
               
                  
          </tbody>
                        </>
                    ))}
          </table>
          {/* </section> */}
      </main>
      </div>
      </>
    // )}
)
}
}

export default Work