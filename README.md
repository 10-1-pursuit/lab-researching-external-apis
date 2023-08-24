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

> Stay in the game with SportsScore Live, the go-to app for avid sports fans. Powered by the Sports Score API, this app delivers up-to-the-minute scores and comprehensive details about the teams and matches you care about.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user, I want to select my favorite sports so that I can receive updates about the matches I'm interested in.

> 2. As a user, I want to receive real-time notifications when a match involving my chosen teams is about to start.

> 3. As a user, I want to receive a final score notification when a match concludes, even if I'm not actively using the app.

> 4. As a user, I want to customize my notification settings to receive alerts for specific events during matches.

> 5. As a user, I want to access historical data about previous matches, scores, and outcomes.

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app consists of the following - 
* Sports: 6 (Football, Tennis, Basketball, Ice Hockey, Volleyball, Handball)
* Leagues: 8,300
* Teams: 65,474
* Players: 193,691

The documentation showing the data for this api is available [Here](https://rapidapi.com/tipsters/api/sportscore1/tutorials/sportscore-api-tutorial).

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make for a subscribed basic (free) account is 500 per month which can be found [Here](https://rapidapi.com/tipsters/api/sportscore1/pricing).

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> It might be sufficient for a basic version at first but as a application gains popularity, amount of users and frequent data updates it may pose limitations depending on those amounts. Other factors can also be the amount of api calls per each user along with the development and testing of the app by developers.

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is required for the 3 tiers above a basic account which include Pro, Ultra & Mega and allow for 120,000, 600,000 or unlimited requests respectively. 

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> https://sportscore1.p.rapidapi.com/sports/1/teams?page=1

Include a snippet of the data you received from the above request.

```
{
    "data": [
      {
        "id": 1,
        "sport_id": 1,
        "category_id": 40,
        "venue_id": 1,
        "manager_id": 1837,
        "slug": "southampton",
        "name": "Southampton",
        "has_logo": true,
        "logo": "https://tipsscore.com/resb/team/southampton.png",
        "name_translations": {
          "en": "Southampton",
          "ru": "Саутгемптон",
          "de": "Southampton FC",
          "es": "Southampton FC",
          "fr": "Southampton FC",
          "zh": "南安普敦",
          "tr": "Southampton",
          "el": "Σαουθάμπτον",
          "it": "Southampton",
          "nl": "Southampton FC",
          "pt": "Southampton FC"
        },
        "name_short": "Southampton",
        "name_full": "Southampton",
        "name_code": "SOU",
        "has_sub": false,
        "gender": "M",
        "is_nationality": false,
        "country_code": "ENG",
        "country": "England",
        "flag": "england",
        "foundation": null,
        "details": null
      }
```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically .env

Why do you want to place that file within the `.gitignore` file?

> To keep your API key and sensitive information safe and prevent it from being inadvertently shared or exposed when you push your code to a version control repository like Git.