import React from 'react'
import styles from '../styles/table.module.css'
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const Table = ({list}) => {
    const {setLoader} = useContext(ThemeContext)
    useEffect(()=>{
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        },2000)
    },[])
    return (
    <>
    <div className={styles.body}>
    <div className={styles.tableContainer}>
        <h1 className={styles.heading}>Members</h1>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Investment</th>
                    <th>Join</th>
                    <th>Number</th>
                    <th>Status</th>
                </tr>
            </thead>
            {list.map((items,index)=>{

                return <tbody className='goldShadow' key={items._id}>
                <tr>
                    <td className='hover:bg-[#aea158]' data-lable="ID">{index+1}</td>
                    <td className='hover:bg-[#aea158]' data-lable="Name">{items.firstname.slice(0,20)}</td>
                    {items.email.length<=25 &&<td className='hover:bg-[#aea158]' data-lable="Email">{items.email}</td>}
                    {items.email.length>26 &&<td className={styles.emailtd}  data-lable="Email">{items.email}</td>}
                    {items.planId=='' && <td className='hover:bg-[#aea158]' data-lable="Investment">Not invested</td>}
                    {items.planId!='' && <td className='hover:bg-[#aea158]' data-lable="Investment">{items.perDayProfit*150}</td>}
                    <td className='hover:bg-[#aea158]' data-lable="Join">{items.createdAt.slice(0,10)}</td>
                    <td className='hover:bg-[#aea158]' data-lable="Number">{items.number}</td>
                    {items.planId=='' && <td  ><span className={styles.text_open}>Inactive</span></td>}
                    {items.planId!='' && <td ><span className={styles.text_open}>Active</span></td>}
                </tr>
            </tbody>
            })}

        </table>
    </div>
    </div>
    </>
  )
}

export default Table