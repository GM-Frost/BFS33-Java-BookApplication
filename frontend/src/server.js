import express from "express";
import cors from "cors";
import fs from "fs"; // Import the File System module

const app = express();
const PORT = 8081;

// Middleware to parse JSON in request body
app.use(express.json());

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  const message = "Hello, this message is coming from server.js!";
  res.send(message);
});
// Endpoint to handle form data submission
app.post("/formsubmit", (req, res) => {
  const formData = req.body;

  // Read existing data from data.json (if any)
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      return res.status(500).json({ message: "Error reading data.json" });
    }

    let existingData = [];
    try {
      existingData = JSON.parse(data);
    } catch (err) {
      console.error("Error parsing data.json:", err);
      return res.status(500).json({ message: "Error parsing data.json" });
    }

    // Check if the username already exists in the existingData array
    const usernameExists = existingData.some(
      (data) => data.userName === formData.userName
    );

    if (usernameExists) {
      return res.status(400).json({ message: "User already Exists" });
    }

    // Add the new form data to the existing data array
    existingData.push(formData);

    // Write the updated data back to data.json
    fs.writeFile("data.json", JSON.stringify(existingData), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        return res.status(500).json({ message: "Error writing to data.json" });
      }

      return res.json({ message: "User Registered Successfully" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
