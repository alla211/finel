require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db/mongoConnect');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
