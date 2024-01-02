import React from 'react'
import styles from '../styles/table.module.css'
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const HistoryMobile = ({list}) => {
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
        <h1 className={styles.heading}>Withdrawal History</h1>
        <table className={styles.table}>
          
            {list.map((items,index)=>{

                return <tbody className='goldShadow' key={items._id}>
                <tr>
                    {items.email.length<=25 &&<td className='hover:bg-[#aea158]'  data-lable="Email">{items.email}</td>}
                    {items.email.length>26 &&<td  className={styles.emailtd}  data-lable="Email">{items.email}</td>}
                    {<td className='hover:bg-[#aea158]' data-lable="Amount">{items.amount}</td>}
                    <td className='hover:bg-[#aea158]'  data-lable="Address">{items.address.slice(0,10)}xxx</td>
                    <td className='hover:bg-[#aea158]' data-lable="Method">{items.method}</td>
                    <td className='hover:bg-[#aea158]' data-lable="Date">{items.date}</td>
                    <td className='hover:bg-[#aea158]' data-lable="Status">{items.status}</td>
                </tr>
            </tbody>
            })}

        </table>
    </div>
    </div>
    </>
  )
}

export default HistoryMobile