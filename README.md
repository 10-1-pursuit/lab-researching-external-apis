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

> An application that retrieves information, songs, and shows when inputting a musicians name.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user , I should be able to listen to any songs that the musician has made.

> 1. As a user, I should be able to watch music videos that have been made.

> 1. As a user, I should see the musician's catalog.

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is ... https://developer.spotify.com/documentation/web-api . With this API, I will be able to retrieve songs, albums, and have the ability to use and control playback when attempting to listen to a song.

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is... 500 request per month. Spotify's API rate limit is calculated based on the number of calls that your app makes to Spotify in a rolling 30 second window. If your app exceeds the rate limit for your app then you'll begin to see 429 error responses from Spotify's Web API, and you may hear from users about unexpected behavior that they have noticed while using your app.  https://developer.spotify.com/documentation/web-api/concepts/rate-limits

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

I don't think the number would be sufficient because of the 30 second window. Maybe I'm checking to see if a song or video works, I would exceed my limit in no time because most songs are 3 minutes long.

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is...required for the Pro package and up. The basic package allows fora hard limit of 500 request per month.

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL

Include a snippet of the data you received from the above request.

```

```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically ...   .env and then put that in gitignore file.

Why do you want to place that file within the `.gitignore` file?

> You don't want other actors hacking into your info and running up a bill.
