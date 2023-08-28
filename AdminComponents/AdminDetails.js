import React from 'react'
import AdminTable from './AdminTable'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const AdminDetails = () => {
  const router = useRouter()
  const[doc,setdoc]=useState([])
  const {id,plan} = router.query
  useEffect(()=>{
    if(plan=='join'){
      axios.get(`/api/admin/plan?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.result)
        }else{
          alert(res.data.error)
        }
      })
    }
    else if(plan=='user'){
      axios.get(`/api/get/userone?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.user)
        }
      })
    }
    else if(plan=='request'){
      axios.get(`/api/admin/request?_id=${id}`).then(res=>{
        if(res.data.success==true){
          setdoc(res.data.result)
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
      <AdminTable title={"SCREENSHOT"} desc={"ONE.PNG"} />
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
      <AdminTable title={"BALANCE"} desc={doc.balance} />
      <AdminTable title={"SUBSCRIPTION"} desc={doc.subscription} />
      <AdminTable title={"CHANNEL"} desc={doc.channel} />
      <AdminTable title={"TODAY-WORK"} desc={`$${doc.todaywork}`} />
      <AdminTable title={"TEAMS"} desc={doc.nofteams} />
      <AdminTable title={"JOIN-DATE"} desc={doc.createdAt} />
      <AdminTable title={"IMAGE"} desc={'doc.img'} />
      </div>
    </>
  )
}
else{
  return (
    <>
    <div className="table-box">
    <AdminTable title={"ID"} desc={doc._id} />
    {/* <AdminTable title={"NAME"} desc={doc.name} /> */}
    <AdminTable title={"EMAIL"} desc={doc.email} />
    {/* <AdminTable title={"PHONE"} desc={doc.phone} /> */}
    <AdminTable title={"METHOD"} desc={doc.method} />
    <AdminTable title={"ADDRESS"} desc={doc.address} />
    <AdminTable title={"BALANCE"} desc={`$${doc.amount}`} />
    {/* <AdminTable title={"LEVEL"} desc={doc.level} /> */}
    {/* <AdminTable title={"SCREENSHOT"} desc={"ONE.PNG"} /> */}
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