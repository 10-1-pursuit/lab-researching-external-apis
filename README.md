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

> 1. As a user, I want to be able to search for a movie by its title. 🎞️

> 2. As a user, I want to see a list of matching movies based on my search. 🎞️

> 3. As a user, I want to click on a movie in the list to view detailed information about it. 🎞️

> 4. As a user, I want to see the movie's poster image when viewing its details. 🎞️

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app includes: 
> 🌠 Movie titles and details (title, plot, director, cast, ratings)
> 🎞️ Movie poster images
> You can get this data from the OMDB API (https://www.omdbapi.com/) ✨

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is about 1000 free requests per day. You can check this limit by referring to their documentation or terms of use on their website. 💁‍♂️

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> Yes, the number of free requests (1,000 per day) should be sufficient for me to develop a basic version of the application within a week. This limit allows for extensive testing and development.

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is NOT required to use the OMDB API. 🚫 💳

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL : 
```http://www.omdbapi.com/?t=The+Shawshank+Redemption&apikey=<MY_API_KEY> ```

Include a snippet of the data you received from the above request.

```
{"Title":"The Shawshank Redemption",
   "Year":"1994",
   "Rated":"R",
   "Released":"14 Oct 1994",
   "Runtime":"142 min",
   "Genre":"Drama",},
```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically `.env`

Why do you want to place that file within the `.gitignore` file?

> To prevent it from being exposed in my code repository. If it were included in the repo, they can be easily accessed by anyone with access to the repo. ✌🏽
