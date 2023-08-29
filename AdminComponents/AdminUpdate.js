import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const AdminUpdate = () => {

    //variabls state for input fields
    // User modal variables  total 8
    const [_id,set_id]=useState('')
    const [email,setemail]=useState('')
    const [firstname,setfirstname]=useState('')
    const [todaywork,settodaywork]=useState('')
    const [subscription,setsubscription]=useState('')
    const [createdAt,setcreatedAt]=useState('')
    const [password,setpassword]=useState('')
    const [balance,setbalance]=useState(0)
    //Plan modal variables Total 10
    // id from user varibles
    // email from user varibles
    // createdAt from user varibles
    const [investment,setinvestment]=useState(0)
    const [cnic,setcnic]=useState('')
    const [address,setaddress]=useState('')
    const [phone,setphone]=useState('')
    const [status,setstatus]=useState('')
    const [level,setlevel]=useState('')
    const [name,setname]=useState('')
    //request varibles
    const [method,setmethod]=useState('')
    const [amount,setamount]=useState(0)

    const router = useRouter()
    const {id,model} = router.query
    useEffect(()=>{
        
        if(model=='user'){
                try{
                
                axios.get(`/api/get/userone?_id=${id}`).then(res=>{
                    console.log(res)
            if(res.data.success==true){
                set_id(res.data.user._id)
                setfirstname(res.data.user.firstname)
                setemail(res.data.user.email)
                setpassword(res.data.user.password)
                setbalance(res.data.user.balance)
                settodaywork(res.data.user.todaywork)
                setsubscription(res.data.user.subscription)
                setcreatedAt(res.data.user.createdAt)
            }else{
                alert('server error')
            }
          })
        }catch(e){
            alert('Server error')
            router.push('/admin')
        }
        }else if(model=='plan'){
            try{
                
                axios.get(`/api/admin/plan?_id=${id}`).then(res=>{
            if(res.data.success==true){
            set_id(res.data.result._id)
            setname(res.data.result.name)
            setemail(res.data.result.email)
            setphone(res.data.result.phone)
            setinvestment(res.data.result.investment)
            setlevel(res.data.result.level)
            setstatus(res.data.result.status)
            setcreatedAt(res.data.result.createdAt)
            setaddress(res.data.result.address)
            setcnic(res.data.result.cnic)
        }else{
            alert('server error')
            router.push('/admin')

        }
    })
}catch(e){
    alert('Server error')
}
        }
        else{
            try{

                axios.get(`/api/get/requestbyid?_id=${id}`).then(res=>{
                    if(res.data.success==true){
                    set_id(res.data.result._id)
                    setemail(res.data.result.email)
                    setstatus(res.data.result.status)
                    setcreatedAt(res.data.result.createdAt)
                    setaddress(res.data.result.address)
                    setmethod(res.data.result.method)
                    setamount(res.data.result.amount)
                }else{
                    alert('server error')
                }
            })
        }catch(e){
            alert('Server error')
            router.push('/admin')

        }
        }
        },[])
    
    async function submit(e)
    {
        e.preventDefault()
        try{

            const data = {_id,firstname,email,password,balance,todaywork,subscription,createdAt,id,model}
            let res = await axios.post('/api/post/update',data)
        if(res.data.success==true){
            alert('Update successfully')
            setTimeout(() => {
                router.push('/admin')
            }, 1000);

        }else{
            alert(res.data.error)
        }
    }catch(e){
        alert('server error')
    }
    }
    async function submitPlan (e){
        e.preventDefault()
        try{

            const data = {_id,name,email,cnic,investment,phone,createdAt,id,model,address,status,level}
            let res = await axios.post('/api/post/updateplan',data)
    if(res.data.success==true){
        alert('Update successfully')
        setTimeout(() => {
            router.push('/admin')
        }, 1000);
    }else{
        alert(res.data.error)
    }
}catch(e){
    alert('server error')
}

    }
    async function submitRequest (e){
        e.preventDefault()
        try{

            const data = {_id,email,createdAt,id,address,status,method,amount}
            let res = await axios.post('/api/post/updaterequest',data)
    if(res.data.success==true){
        alert('Update successfully')
        setTimeout(() => {
            router.push('/admin')
        }, 1000);
    }else{
        alert(res.data.error)
    }
}catch(e){
    alert('server error')
}

    }

    if(model=='user'){

        return (
            <>
    <div className="PlanForm-Head">
    <div className="Invest-Container">
      <div className="content">
        <form action="#" >
          <div className="user-details">
            <div className="input-box">
              <span className="details">ID</span>
              <input
                type="text"
                onChange={(e) => {
                  set_id(e.target.value);
                }}
                value={_id}
                required
                name='id'
                />
            </div>
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                type="text"
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
                value={firstname}
                required
                name='name'
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                    setemail(e.target.value);
                }}
                required
                name='email'
                />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
                required
                name='password'
              />
            </div>
            <div className="input-box">
              <span className="details">Balance</span>
              <input
                value={balance}
                type="Number"
                onChange={(e) => {
                  setbalance(e.target.value);
                }}
                required
                name='balance'
              />
            </div>
            <div className="input-box">
              <span className="details">Subscription</span>
              <input
                type="text"
                value={subscription}
                onChange={(e) => {
                  setsubscription(e.target.value);
                }}
                required
                name='subscription'
              />
            </div>
            <div className="input-box">
              <span className="details">Joining Date</span>
              <div className="flex">
                <input
                  type="text"
                  value={createdAt}
                  onChange={(e)=>{setcreatedAt(e.target.value)}}
                  name="date"
                  />
              </div>
            
            </div>
            <div className="input-box">
              <span className="details">Today work</span>
              <div className="flex">
                <input
                  type="text"
                  value={todaywork}
                  onChange={(e)=>{settodaywork(e.target.value)}}
                  name="todaywork"
                  />
              </div>
            
            </div>
            
          </div>
          <div className="button">
            <input type="submit" value="Update" onClick={submit} />
          </div>
        </form>
      </div>
    </div>
  </div>
</>
  )
}else if(model=='plan'){
    return (
        <>
<div className="PlanForm-Head">
<div className="Invest-Container">
  <div className="content">
    <form action="#" >
      <div className="user-details">
        <div className="input-box">
          <span className="details">ID</span>
          <input
            type="text"
            onChange={(e) => {
              set_id(e.target.value);
            }}
            value={_id}
            required
            name='id'
            />
        </div>
        <div className="input-box">
          <span className="details">First Name</span>
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
            required
            name='name'
          />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input
            type="text"
            value={email}
            onChange={(e) => {
                setemail(e.target.value);
            }}
            required
            name='email'
            />
        </div>
        <div className="input-box">
          <span className="details">phone</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
                setphone(e.target.value);
            }}
            required
            name='phone'
          />
        </div>
        <div className="input-box">
          <span className="details">Investment</span>
          <input
            value={investment}
            type="Number"
            onChange={(e) => {
              setinvestment(e.target.value);
            }}
            required
            name='investment'
          />
        </div>
        <div className="input-box">
          <span className="details">Status</span>
          <input
            type="text"
            value={status}
            onChange={(e) => {
              setstatus(e.target.value);
            }}
            required
            name='status'
          />
        </div>
        <div className="input-box">
          <span className="details">Joining Date</span>
          <div className="flex">
            <input
              type="text"
              value={createdAt}
              onChange={(e)=>{setcreatedAt(e.target.value)}}
              name="date"
              />
          </div>
        
        </div>
        <div className="input-box">
          <span className="details">Level</span>
          <div className="flex">
            <input
              type="text"
              value={level}
              onChange={(e)=>{setlevel(e.target.value)}}
              name="todaywork"
              />
          </div>
        
        </div>
        <div className="input-box">
          <span className="details">Cnic</span>
          <div className="flex">
            <input
              type="text"
              value={cnic}
              onChange={(e)=>{setcnic(e.target.value)}}
              name="cnic"
              />
          </div>
        
        </div>
        <div className="input-box">
          <span className="details">Address</span>
          <div className="flex">
            <input
              type="text"
              value={address}
              onChange={(e)=>{setaddress(e.target.value)}}
              name="address"
              />
          </div>
        
        </div>
        
      </div>
      <div className="button">
        <input type="submit" value="Update" onClick={submitPlan} />
      </div>
    </form>
  </div>
</div>
</div>
</>
)
}
else{
    return (
        <>
<div className="PlanForm-Head">
<div className="Invest-Container">
  <div className="content">
    <form action="#" >
      <div className="user-details">
        <div className="input-box">
          <span className="details">ID</span>
          <input
            type="text"
            onChange={(e) => {
              set_id(e.target.value);
            }}
            value={_id}
            required
            name='id'
            />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input
            type="text"
            value={email}
            onChange={(e) => {
                setemail(e.target.value);
            }}
            required
            name='email'
            />
        </div>
        <div className="input-box">
          <span className="details">Method</span>
          <input
            type="text"
            value={method}
            onChange={(e) => {
                setmethod(e.target.value);
            }}
            required
            name='method'
            />
        </div>
        <div className="input-box">
          <span className="details">Amount</span>
          <input
            value={amount}
            type="Number"
            onChange={(e) => {
              setamount(e.target.value);
            }}
            required
            name='investment'
          />
        </div>
        <div className="input-box">
          <span className="details">Status</span>
          <input
            type="text"
            value={status}
            onChange={(e) => {
              setstatus(e.target.value);
            }}
            required
            name='status'
          />
        </div>
        <div className="input-box">
          <span className="details">Joining Date</span>
          <div className="flex">
            <input
              type="text"
              value={createdAt}
              onChange={(e)=>{setcreatedAt(e.target.value)}}
              name="date"
              />
          </div>
        
        
        </div>
        <div className="input-box">
          <span className="details">Address</span>
          <div className="flex">
            <input
              type="text"
              value={address}
              onChange={(e)=>{setaddress(e.target.value)}}
              name="address"
              />
          </div>
        
        </div>
        
      </div>
      <div className="button">
        <input type="submit" value="Update" onClick={submitRequest} />
      </div>
    </form>
  </div>
</div>
</div>
</>
)
}
}

export default AdminUpdate