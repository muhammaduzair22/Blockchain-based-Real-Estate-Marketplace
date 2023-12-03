const express = require('express');
const mongoose = require('mongoose');
const realEstateRoutes = require('./routes/realEstateRoutes');
const app = express();
const port = 3000;

const mongoURI = 'mongodb+srv://hamda:hamda@cluster0.wyv8slk.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.json());

app.use('/api/real-estate', realEstateRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
