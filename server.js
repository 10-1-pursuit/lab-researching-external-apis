require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3010;

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

app.get("/fetch", async (req, res) => {
    try {
        const { url } = req.query;

        if (!url) {
            return res.status(400).send("URL is missing.")
        }
      const authHeader = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
  
      const authResponse = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            'Authorization': authHeader,
            "Content-Type": "application/x-www-form-urlencoded"
          },
        }
      );
  
      const accessToken = authResponse.data.access_token;
  

      const response = await axios.get(
        url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error("Error", error);
      res.status(500).send("Error occurred");
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })