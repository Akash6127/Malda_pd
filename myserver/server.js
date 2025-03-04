import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authroute from './routes/auth.js';
import policeStationRoute from './routes/PoliceStation.js';
import connectToDatabase from './db/db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDatabase();
// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });
app.use("/api/auth",authroute)
app.use("/api/policestation",policeStationRoute)



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);

});