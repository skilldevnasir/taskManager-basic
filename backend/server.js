const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/TaskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
      .then(() => {
            console.log('MongoDB Connected');
            app.listen(5000, () => console.log('Server started on port 5000'));
      })
      .catch(err => console.log(err));
