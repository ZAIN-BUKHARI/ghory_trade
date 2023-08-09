import ConnectMongoDB from '../../middleware/mongoose'
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
export const config = {
    api: {
      bodyParser: true,
    },
  }
//...
// app.use(bodyParser({ uploadDir: path.join(__dirname, 'files'), keepExtensions: true })); 
// app.use(methodOverride());
const handler= async (req, res)=> {
          console.log('hello')
          console.log(req.file)
          res.json({"success":true})
}
export default   ConnectMongoDB(handler)