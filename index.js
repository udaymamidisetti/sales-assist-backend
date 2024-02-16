const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const data = [
  {
    img: "https://res.cloudinary.com/drjnmxyd5/image/upload/v1708087996/SIPR04018_01_1_i0nbfj.png",
    desc: "The Brown Metro Movers",
    price: "4899",
    off: "8999",
    discount: "(50% off)",
  },
  {
    img: "https://res.cloudinary.com/drjnmxyd5/image/upload/v1708087960/SIPR04031_01_1_l3m5m4.png",
    desc: "The Brown Metro Movers",
    price: "4899",
    off: "8999",
    discount: "(50% off)",
  },
  {
    img: "https://res.cloudinary.com/drjnmxyd5/image/upload/v1708087952/SIPR04085_01_1_a5iivg.png",
    desc: "The Brown Metro Movers",
    price: "4899",
    off: "8999",
    discount: "(50% off)",
  },
  {
    img: "https://res.cloudinary.com/drjnmxyd5/image/upload/v1708087944/SIPR04086_01_1_ooiep7.png",
    desc: "The Brown Metro Movers",
    price: "4899",
    off: "8999",
    discount: "(50% off)",
  },
];
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.get("/getAll", (req, res) => {
  res.json(data);
});
