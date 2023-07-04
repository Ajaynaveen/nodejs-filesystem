const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/create-file', (req, res) => {
   // Specify the folder path where you want to create the file

  // Create the folder if it doesn't exist
   // Get the current timestamp
  const timestamp = new Date().toISOString();

  // Generate the file name using the current date and time
 

  // Construct the file path
  

  // Create the file and write the timestamp content
  fs.writeFile(`c:/Users/Ajay Shanmugam/Desktop/nodejstask/${timestamp}.txt`, timestamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create the file.' });
    }
    return res.json({ message: 'File created successfully.' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
