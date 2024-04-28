import {NextApiRequest,NextApiResponse } from 'next';



const handler = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log('the login router api');
        res.status(200).send( "the login router" );
    } catch (error) {
        console.log(error);
    }
 };

export default handler;
