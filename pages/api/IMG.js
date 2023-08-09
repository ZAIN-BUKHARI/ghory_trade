import nc from "next-connect";
import multer from "multer";
import ConnectMongoDB from '../../middleware/mongoose'
export const config = {
    
    
   
    api: {
      bodyParser: false,
    },
}
let Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})

let upload=multer({
    storage:Storage,
})

let uploadFile=upload.single('file')



    const handler= nc().use(uploadFile).post(async(req, res)=> {
        res.status(200).send({success:req.file})
    })


export default   ConnectMongoDB(handler)

