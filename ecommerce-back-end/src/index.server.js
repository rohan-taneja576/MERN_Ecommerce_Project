require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.qom7r.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('DataBase Connected');
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
