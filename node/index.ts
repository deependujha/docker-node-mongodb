import mongoose from "mongoose";

const MongoDBURL = "mongodb://localhost:6969/DataBaseName";

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log(`Connection successful with mongodb`);
  })
  .catch((err) => {
    console.log(`An error occurred while connecting with mongodb`);
    console.log(JSON.stringify(err, null, 2));
  });
