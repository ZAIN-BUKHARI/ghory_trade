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
                <th>Email</th>
                <th>Investment</th>
                <th>Status</th>
                <th>Join</th>
                <th>End</th>
                </tr>
            </thead>
            {list.map((items,index)=>{

                return <tbody key={items._id}>
                <tr>
                    <td data-lable="ID">{index+1}</td>
                    {items.email.length<=25 &&<td  data-lable="Email">{items.email}</td>}
                    {items.email.length>26 &&<td className={styles.emailtd}  data-lable="Email">{items.email}</td>}
                    {<td data-lable="Investment">{items.investment}</td>}
                    {<td data-lable="Status">{items.status}</td>}
                    <td data-lable="Join">{items.date}</td>
                    <td data-lable="End">{items.enddate}</td>
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