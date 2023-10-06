import React, { useContext } from 'react'
import AdminTable from './AdminTable'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../Context/ThemeContext'
const AdminDetails = () => {
  const {setLoader} = useContext(ThemeContext)
  const router = useRouter()
  const[doc,setdoc]=useState([])
  const {id,plan} = router.query
  useEffect(()=>{
    if(plan=='join'){
      setLoader(true)
      axios.get(`/api/admin/plan?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.result)
          setLoader(false)
        }else{
          setLoader(false)
          alert(res.data.error)
        }
      })
    }
    else if(plan=='user'){
      setLoader(true)
      axios.get(`/api/get/userone?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.user)
          setLoader(false)
        }else{
          setLoader(false)
          alert(res.data.error)
        }
      })
    }
    else if(plan=='request'){
      setLoader(true)
      axios.get(`/api/admin/request?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.result)
          setLoader(false)
        }else{
          setLoader(false)
          alert(res.data.error)
        }
      })
    }

  },[])
  if(plan=="join"){
    return (
      <>
      <div className="table-box">
      <AdminTable title={"ID"} desc={doc._id} />
      <AdminTable title={"NAME"} desc={doc.name} />
      <AdminTable title={"EMAIL"} desc={doc.email} />
      <AdminTable title={"PHONE"} desc={doc.phone} />
      <AdminTable title={"CNIC"} desc={doc.cnic} />
      <AdminTable title={"ADDRESS"} desc={doc.address} />
      <AdminTable title={"BALANCE"} desc={`$${doc.investment}`} />
      <AdminTable title={"LEVEL"} desc={doc.level} />
      <a target="_blank" href={doc.img1}><AdminTable title={"Payment SS"} desc={doc.img1} /></a>
      <a target="_blank" href={doc.img2}><AdminTable title={"Channel SS"} desc={doc.img2} /></a>
      </div>
      <style>{`
  .table-box
  {
      margin: 50px auto;
  }
  
  }`}</style>
      </>
    )
  
}else if(plan=='user'){
  return(
    <>
    <div className="table-box">
      <AdminTable title={"ID"} desc={doc._id} />
      <AdminTable title={"NAME"} desc={doc.firstname} />
      <AdminTable title={"EMAIL"} desc={doc.email} />
      <AdminTable title={"BALANCE"} desc={`$${doc.balance}`} />
      <AdminTable title={"SUBSCRIPTION"} desc={doc.subscription} />
      <AdminTable title={"CHANNEL"} desc={doc.channel} />
      <AdminTable title={"TODAY-WORK"} desc={doc.todaywork} />
      <AdminTable title={"TEAMS"} desc={doc.nofteams} />
      <AdminTable title={"JOIN-DATE"} desc={doc.createdAt} />
      </div>
    </>
  )
}
else{
  return (
    <>
    <div className="table-box">
    <AdminTable title={"ID"} desc={doc._id} />
    <AdminTable title={"EMAIL"} desc={doc.email} />
    <AdminTable title={"METHOD"} desc={doc.method} />
    <AdminTable title={"ADDRESS"} desc={doc.address} />
    <AdminTable title={"BALANCE"} desc={`$${doc.amount}`} />
    <AdminTable title={"Bank Name"} desc={`${doc.bankname}`} />
    <a target="_blank" href={doc.ScreenShot}><AdminTable title={"Payment Screenshot"} desc={`${doc.ScreenShot}`} /></a>
    </div>
    <style>{`
.table-box
{
    margin: 50px auto;
}

}`}</style>
    </>
  )
}
}

export default AdminDetails