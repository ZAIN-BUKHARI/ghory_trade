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
    if(plan=="plan"){
      axios.get(`/api/admin/plan?_id=${id}`).then(res=>{
        console.log(res)
        if(res.data.success==true){
          setdoc(res.data.result)
        }
      })
    }
    else{
      axios.get(`/api/admin/request?_id=${id}`).then(res=>{
        console.log(res)
        if(res.data.success==true){
          setdoc(res.data.result)
        }
      })
    }

  },[])
  if(plan=="plan"){
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
  
}else{
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