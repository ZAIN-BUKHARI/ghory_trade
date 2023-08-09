import Link from 'next/link'
export default function Custom404() {
    return <>  
    <style jsx >
      {`*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "poppins";
}

.page_404
{
    padding: 40px 0;
    background: #fff;
    font-family: 'Poppins';
}

.page_404 img
{
    width: 100%;
}

.four_zero_four_bg
{
    background: url('./bg.gif');
    height: 400px;
    background-position: center;
}

h1
{
    font-size: 80px;
}

h3
{
    font-size: 80px;
}

a
{
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    background: #39ac31;
    display: inline-block;
}

.content_box_404
{
    margin-top: -50px;
}
a:hover
{
    text-decoration: none;
    
}`}
    </style>
    <section className="page_404">
       <div className="container">
           <div className="row">
               <div className="col-sm-12">
                   <div className="col-sm-10 col-sm-offset-1 text-center">
                       <div className="four_zero_four_bg">
                           <h1 className="text-center">404</h1>
                       </div>
                       <div className="content_box_404">
                           <h3 className="h2">Looks Like You're Lost</h3>
                           <p>The page you are looking for not available</p>
                           <Link className='  text-black p-2  bg-pink-500 d-block ' href="/">Go to Home</Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
     </>
}