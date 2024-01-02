import React from 'react'

const MemberDetails = ({list}) => {
   
    
    return (
    <>
    <div className='!bg-[#121212] !pb-5 !pt-12 !ml-[0px] mt-20 AdminWorksheet-body'>
    <main className="!bg-transparent goldShadow border-2 border-[#ffdb1a] shadow-2xl  !shadow-[#ffdb1a] table">
    <section className="!bg-transparent border-2 border-[#ffdb1a] table__header">
      <h1 className='text-[#ffdb1a] text-4xl font-bold pl-[500px]'>Member Details</h1>
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr className='border-b border-2 border-[#ffdb1a] !bg-transparent'>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Email </th>
                        <th className='bg-[#121212] text-[#ffdb1a]'> Name </th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Number</th>
                        {/* <th className=' bg-[#121212] text-[#ffdb1a]'> Join</th> */}
                        <th className=' bg-[#121212] text-[#ffdb1a]'> Investment</th>
                        <th className=' bg-[#121212] text-[#ffdb1a]'> status</th>
                    </tr>
                </thead>
                {list.map((item)=>(
                    <>
                 <tbody key={item._id}>
                
                <tr className='border-2 border-[#ffdb1a]'>
                    {/* <td className=' bg-[#121212] text-[#ffdb1a] '> {item._id}</td> */}
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.email}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.firstname}</td>
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.number}</td>
                    {/* <td className=' bg-[#121212] text-[#ffdb1a]'> {item.date}</td>    */}
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.totalInvestment}</td>   
                    <td className=' bg-[#121212] text-[#ffdb1a]'> {item.subscription}</td>   
               </tr>
                 
                    
            </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
    </>
  )
}

export default MemberDetails