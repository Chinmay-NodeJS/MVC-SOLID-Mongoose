const express = require('express');
const connectDB = require('./config/database');
const routes = require('./src/app/routes/web');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', routes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
