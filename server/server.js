import express from 'express';
import fs from 'fs';

const app = express();
fs.readdirSync('./routes').map((e_route)=>{
    app.use('/api', require(`./routes/${e_route}`));
});

app.listen(8001, () => console.log('Server is running on port 8001'))
