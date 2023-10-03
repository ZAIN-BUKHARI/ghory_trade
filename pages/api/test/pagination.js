import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'


const handler= async (req, res)=> {

  const page = parseInt(req.query.page) || 1;
  const pageSize = 1; // Adjust the page size as needed

  try {
    const totalItems = await User.countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);

    const data = await User.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({ data, totalPages });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export default   ConnectMongoDB(handler)
