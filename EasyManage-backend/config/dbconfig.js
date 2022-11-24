const mongoose =require('mongoose');

let CONNECTIONSTR=process.env.CONNECTIONSTR;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    minPoolSize:process.env.minPoolSize,
    maxPoolSize:process.env.maxPoolSize
};
mongoose.connect(CONNECTIONSTR, options)
    .then((res) => {
      console.log(
        'Connected to Database successfully'
      );
    })
    .catch((err) => {
      console.log(
        `Ecommerace  API Database connection error occured -`,
        err
      );
    });