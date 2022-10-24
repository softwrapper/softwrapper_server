const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 8000;

//database connection
try {
    mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log(`Database connection established`);
    });
} catch (error) {
    console.log(`Database connection error: ${error.message}`);
}

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
