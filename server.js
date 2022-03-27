require("dotenv").config();
// Express
const express = require("express");
const app = express();

// Parser
app.use(express.urlencoded({extended: true}));

// Mongoose
const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongo: ", process.env.MONGO_URI));

// Routes
app.use("/books", require("./controllers/books"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
});
