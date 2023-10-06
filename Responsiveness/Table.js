import React from 'react'
import styles from '../styles/table.module.css'
const Table = ({list}) => {
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
                    <th>Status</th>
                </tr>
            </thead>
            {list.map((items,index)=>{

                return <tbody key={items._id}>
                <tr>
                    <td data-lable="ID">{index+1}</td>
                    <td data-lable="Name">{items.firstname.slice(0,20)}</td>
                    {items.email.length<=22 &&<td  data-lable="Email">{items.email}</td>}
                    {items.email.length>22 &&<td className={styles.emailtd}  data-lable="Email">{items.email}</td>}
                    {items.planId=='' && <td data-lable="Investment">Not invested</td>}
                    {items.planId!='' && <td data-lable="Investment">{items.perDayProfit*150}</td>}
                    <td data-lable="Join">{items.createdAt.slice(0,10)}</td>
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