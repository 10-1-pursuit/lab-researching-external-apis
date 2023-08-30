# Researching External APIs Lab

## Getting Started

1. Fork and clone this repository.

1. Answer the questions below by editing this readme. Leave the questions and prompts, and answer in between them. Take the time to read back the work, and edit what you've written so that your answers are clear and anyone reading it can easily understand what you've written.

1. When it is applicable, please add screenshots, photos, and links.

## Instructions

You will be planning a new application to develop that uses a third-party API. The app should be a simple idea, as the goal is to research and determine if an API is appropriate for your API.

Choose one of the following categories and APIs:

- Music: [Spotify API](https://developer.spotify.com/documentation/web-api)
- Movies: [OMDB API](https://www.omdbapi.com)
- Text Translator: [Rapid Translate](https://rapidapi.com/auth/sign-up?referral=/sibaridev/api/rapid-translate-multi-traduction)
- Sports: [Sports Score](https://rapidapi.com/tipsters/api/sportscore1)
- City Info: [311 Call Aggregator](https://data.cityofnewyork.us/browse?Dataset-Information_Agency=311)
- Art : [Metropolitan Museum of Art ](https://metmuseum.github.io)

Next, describe your application idea. Your application idea should be simple and make use of the data received by the API. It can make use of other data if necessary.

> Your application idea.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user, I want to be able to search for music by artist or track name.

> 1. As a user, I want to create playlists of my favorite songs.

> 1. As a user, I want to receive recommendations for new music based on my listening history.

> 1. As a user, I want to view details about a specific song or artist.

> 1. As a user, I want to be able to play a preview of a song.

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is includes music metadata such as track names, artists, album information, and audio previews. This data can be obtained from the Spotify API.

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make to the Spotify API Terms of Service. As of my last knowledge update in September 2021, Spotify offer a free tier with certain rate limits on requests. The exact rate limits may change, so it's essential to refer to the Spotify API documentation for the most up to date information.

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> The number of free requests available of the Spotify API may be sufficent for developing a basic version of the music recommendation application within a week, depending on the specific rate limits and usage patterns. Since the application is intended to be simple, it should be possible to implemente key features within these limits.

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is working with the Spotify API does not typically require the use of a credit card. However, if younplan to use additional Spotify services or features beyond the API, such as premium access, there may be a  requirement for a Spotify account with payment information. This information can be found in the Spotify Developer Terms of Service.

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL

Include a snippet of the data you received from the above request.

```
GET https://api.spotify.com/v1/search?q=artist:"Dabin"&type=track
```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically stored in config.json , secrets.json, or env.js.

Why do you want to place that file within the `.gitignore` file?

> Placing in the gitignore file would allow the information not to be share globally with the accidental commits. It helps reduce the risk of unauthorized access or misuse of your API keys. This secruity measure helps protect your application and any associated services that rely on these keys. Accessing API keys should be secure in Github.
