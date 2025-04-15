import express from 'express';
import EventEmitter  from "events"
import cors from 'cors';
import bodyParser from 'body-parser';
import authroute from './routes/auth.js';
import policeStationRoute from './routes/PoliceStation.js';
import connectToDatabase from './db/db.js';
import ItemRoute from "./routes/ItemRoute.js" 

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDatabase();
// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });
app.use("/api/auth",authroute)
app.use("/api/policestation",policeStationRoute)
app.use("/api/users",ItemRoute);
app.use("/api/admin",ItemRoute)


const myEmitter = new EventEmitter();
myEmitter.removeAllListeners('exit');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    // console.log(myEmitter.eventNames());
    console.log(`Server is running on port ${PORT}`);

});