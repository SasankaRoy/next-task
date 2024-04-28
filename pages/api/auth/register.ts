import User from '@/Models/User';
import connectDB from '@/utils/connectDB';
import {NextApiRequest,NextApiResponse } from 'next';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectDB();
   try {
       const { userName, password, email } = req.body.clientData;

       //    check user existence in the database.....
       
       const clientExists = await User.findOne({ email });

       if (clientExists) {
           res.status(409).json({ error: 'user already exists' });
           return;
       }

    //    verify user email here.....
       
       console.log(userName, password, email);
   } catch (error) {
    console.error(error);
   } 
}


export default handler;