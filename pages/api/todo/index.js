const connectDB = require('../../../middleware/connectDB');
const todoModel = require('../../../model/todomodel');
export default async function User (req, res) {
    await connectDB();
    if(req.method === 'POST'){  
        let user = new todoModel(req.body);
        await user.save();
        res.send('Inserted successfully');
    }
    if(req.method === 'GET'){
        const users = await todoModel.find({});
        res.status(200).json({users});
    }
}