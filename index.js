import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/url.js";
import { userRouter } from "./routes/userRouter.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;
const url = "mongodb+srv://prithivi:prithivi@cluster0.f5qy4.mongodb.net/urlshort?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected!"));

app.use(cors());
app.use(express.json());

app.use("/", router);
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server connected @ ${PORT}`);

  app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

});
