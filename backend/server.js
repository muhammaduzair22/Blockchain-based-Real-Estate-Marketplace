const express = require('express');
const mongoose = require('mongoose');
const realEstateRoutes = require('./routes/realEstateRoutes');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
const cors = require('cors');
app.use(cors({ origin: '*', }));
const mongoURI = 'mongodb+srv://hamda:hamda@cluster0.wyv8slk.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.json());

app.use('/api/real-estate', realEstateRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
