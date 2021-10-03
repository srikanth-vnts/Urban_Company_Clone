//config data
const {DEFAULT_CONNECTION_STRING, PORT, MONGOOSE_OPTIONS} = require("./config/connectionDb");

//connect to express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors())

// Controller

const professionalController = require("./controllers/professional.controller");
const userController = require("./controllers/user.controller");
const servicesController = require("./controllers/services.controller");
const serviceCardController = require("./controllers/serviceCard.controller");
const serviceProfessionalController = require("./controllers/serviceProfessional.controller");
const professionalProfileController = require("./controllers/professionalProfile.controller");


app.use("/professional", professionalController);
app.use("/users", userController);
app.use("/services", servicesController);
app.use("/serviceCard", serviceCardController);
app.use("/serviceProfessional", serviceProfessionalController);
app.use("/professionalProfile", professionalProfileController);


app.listen(PORT, () => console.log(`Urban Comapny is connected successfully to Express. Listening on port ${PORT}.`));

//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS);
mongoose.connection.on("error", err => {
  console.log("Connection Error: Urban Comapny could not connect successfully to Mongoose.", err);
});
mongoose.connection.on("connected", (err, res) => {
    console.log("Urban Comapny connected successfully to Mongoose.");
});