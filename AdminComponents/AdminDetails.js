import React from 'react'
import AdminTable from './AdminTable'

const AdminDetails = () => {

  return (
    <>
    <div class="table-box">
    <AdminTable title={"ID"} desc={"12345678910"} />
    <AdminTable title={"NAME"} desc={"ZAIN-UL-ABDIN"} />
    <AdminTable title={"EMAIL"} desc={"zainyshorts@gmail.com"} />
    <AdminTable title={"PHONE"} desc={"03364569588"} />
    <AdminTable title={"CNINC"} desc={"35202-546-324"} />
    <AdminTable title={"ADDRESS"} desc={"MODEL TOWN R BLOCK"} />
    <AdminTable title={"BALANCE"} desc={"$200"} />
    <AdminTable title={"LEVEL"} desc={"5"} />
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
}

export default AdminDetails