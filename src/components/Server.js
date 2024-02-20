const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage });

const storageDisk = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadDisk = multer({ storage: storageDisk });

const data = [];
const images = [];
const videos = [];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/api/images", (req, res) => {
  const imageData = images;
  res.json(imageData);
});

app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file.buffer.toString("base64");

    if (!title || !description || !image) {
      throw new Error("Title, description, and image are required fields.");
    }

    data.push({ title, description });
    images.push(image);

    res.status(201).json({ message: "Data and image uploaded successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use("/uploads", express.static("uploads"));

app.post("/upload", uploadDisk.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const videoPath = `/uploads/${req.file.filename}`;
  videos.push({ videoPath });
  res.json({ videoPath });
});

app.get("/getVideos", (req, res) => {
  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
