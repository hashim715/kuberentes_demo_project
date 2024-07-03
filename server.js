const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/testing", async (req, res, next) => {
  try {
    return res.status(200).json({ success: true, message: "Good to see you" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Somethign went wrong" });
  }
});

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`server started at ${PORT}`);
    });
  } catch (error) {
    console.log("some error occured");
    console.log(error);
  }
};
start();
