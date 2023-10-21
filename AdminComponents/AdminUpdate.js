import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ThemeContext } from '../Context/ThemeContext'

const AdminUpdate = () => {
    const { setLoader} = useContext(ThemeContext)
    //variabls state for input fields
    // User modal variables  total 8
    const [_id,set_id]=useState('')
    const [email,setemail]=useState('')
    const [firstname,setfirstname]=useState('')
    const [todaywork,settodaywork]=useState('')
    const [subscription,setsubscription]=useState('')
    const [createdAt,setcreatedAt]=useState('')
    const [missProfits,setmissProfits]=useState('')
    const [balance,setbalance]=useState(0)
    const [admin,setadmin]=useState('')
    const [pdprofit,setpdprofit]=useState(0)
    const [views,setviews]=useState(0)
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
    const [enddate,setenddate]=useState('')
    //request varibles
    const [method,setmethod]=useState('')
    const [amount,setamount]=useState(0)
    const [ScreenShot,setScreenShot]=useState('')

    const router = useRouter()
    const {id,model} = router.query
    useEffect(()=>{
        
        if(model=='user'){
                try{
                
                axios.get(`/api/get/userone?_id=${id}`).then(res=>{
            if(res.data.success==true){
                set_id(res.data.user._id)
                setfirstname(res.data.user.firstname)
                setemail(res.data.user.email)
                setmissProfits(res.data.user.missProfits)
                setbalance(res.data.user.balance)
                settodaywork(res.data.user.todaywork)
                setsubscription(res.data.user.subscription)
                setcreatedAt(res.data.user.date)
                setlevel(res.data.user.level)
                setadmin(res.data.user.admin)
                setpdprofit(res.data.user.perDayProfit)
                setviews(res.data.user.views)
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
            setcreatedAt(res.data.result.date)
            setaddress(res.data.result.address)
            setcnic(res.data.result.cnic)
            setenddate(res.data.result.enddate)
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
                    setcreatedAt(res.data.result.date)
                    setaddress(res.data.result.address)
                    setmethod(res.data.result.method)
                    setamount(res.data.result.amount)
                    setScreenShot(res.data.result.ScreenShot)
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

            const data = {_id,firstname,email,password,balance,todaywork,subscription,createdAt,id,model,admin,pdprofit,level,views}
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

            const data = {_id,name,email,cnic,investment,phone,createdAt,id,model,address,status,level,enddate}
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

            const data = {_id,email,createdAt,id,address,status,method,amount,ScreenShot}
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

    const cloudinaryonChange=(e)=>{
      try{
        setLoader(true)
        setLoader(true)
        const data= new FormData()
      data.append('file',e.target.files[0])
      // data.append('upload_preset','vru3vgic') // old
      // data.append('cloud_name','dklqbx5k0')  //old
      // const url='https://api.cloudinary.com/v1_1/dklqbx5k0/image/upload'
  
      data.append('upload_preset','hasmui7k') // ghory
      data.append('cloud_name','dy2hybbx5')  // Ghory
      const url='https://api.cloudinary.com/v1_1/dy2hybbx5/image/upload'//Ghry
      axios.post(url,data).then(res=>{
        setScreenShot(res.data.secure_url)
        setLoader(false)
      })
      
    }catch(e)
    {
      setLoader(false)
      alert('Server down try again later')
    }
    }

    if(model=='user'){

        return (
            <>
    <div className="PlanForm-Head">
    <div className="Invest-Container admin-planform-height">
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
              <span className="details">missProfits</span>
              <input
                type="text"
                value={missProfits.length*pdprofit}
                readOnly={true}
                required
                name='missProfit'
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
              <span className="details">Admin access</span>
              <div className="flex">
                <input
                  type="text"
                  value={admin}
                  onChange={(e)=>{setadmin(e.target.value)}}
                  name="admin"
                  />
              </div>
            </div>
            <div className="input-box">
              <span className="details">Perday Profit</span>
              <div className="flex">
                <input
                  type="text"
                  value={pdprofit}
                  onChange={(e)=>{setpdprofit(e.target.value)}}
                  name="pdprofit"
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
                  name="level"
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
            <div className="input-box">
              <span className="details">View Video</span>
              <div className="flex">
                <input
                  type="number"
                  value={views}
                  onChange={(e)=>{setviews(e.target.value)}}
                  name="views"
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
          <span className="details">EndDate</span>
          <div className="flex">
            <input
              type="text"
              value={enddate}
              onChange={(e)=>{setenddate(e.target.value)}}
              name="enddate"
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
        {ScreenShot!="no" &&
        <>
          <span className="details">ScreenShot</span>
          <img className='request-Screenshot' src={ScreenShot}/>
        </>
        }
        {ScreenShot=='no' &&
        <label className="custum-file-upload" for="file">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
          >
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill=""
                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        </div>
        {/* <div className=" flexing-span-plan-form"> */}
          <div>Withdrawal screenshot</div>
        {/* </div> */}
        <input onChange={cloudinaryonChange} name="cloud1" type="file" id="file" />
      </label>
        }
        
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