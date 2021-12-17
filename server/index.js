port = 7542;
const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));


app.get("/api/itemskadin", (req, res) => {
  res.send({
    "itemskadin": [
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201311-003_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201311-001_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201311-005_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200508-046_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200508-047_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200645-039_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K200980-009_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K200980-008_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200828-031_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200828-023_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K200828-022_L.webp"
      }]
  });
});

app.get("/api/itemserkek", (req, res) => {
  res.send({
    "itemserkek": [
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100743-007_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-005_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-003_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100744-001_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100226-087_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100226-068_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100227-030_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100226-052_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100226-035_LF.webp  "
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300418-004_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K100636-011_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300363-006_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300363-005_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300363-006_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/36678-060_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-017_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K300005-022_LF.webp"
      }]
  });
});


app.get("/api/itemscocuk", (req, res) => {
  res.send({
    "itemscocuk": [
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/80153-066_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80153-082_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80153-083_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80153-085_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80153-086_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/80212-077_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80153-087_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/80356-003_LF.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNuYmlnZ3JleSQ=/K800316-001_L.webp"
      },
      {
        "image": "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K800319-001_LF.webp"
      }]
  });
});



app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
