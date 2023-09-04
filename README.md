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

> My application idea is a Fantasy soccer tool to help fantasy players make the best draft choices while they draft players, and assist them in making smart management choices throughout the season.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user ...

> 1. As a user this application will assist in evaluating players based on previous stats, this years stat predictions,upcoming year's schedule difficulty, and  

> 2. As a user the application provides a player comparison feature that allows the user to place players they can't decide on starting and the application returns statistical results on which player is the best choice to start.

> 3. As a user the application provides a player comparison feature that allows the user to place players they can't decide on starting and the application returns statistical results on which player is the best choice to start.

> 4. As a software developer, I want to create an easy-to-use, accessible fantasy soccer tool that gives a comprehensive guide to managing a competitive fantasy football team from draft to weekly free agency pickups.

> 5. As a user, the application will allow them to import their starting lineup, bench players, and the app will give them a top to bottom roster analysis and offer suggestions based on other league transaction trends.

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is player lineups, player incident reports (yellow card, red card espulsions), team rosters, and post-game, and career player stats etc.

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is 500 per month with a Basic plan. https://rapidapi.com/tipsters/api/sportscore1/pricing

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> No it will not be sufficient because to test various app features that require fetching data will use up the whole quota. The API is fundamental to building this app and making sure the the app features are working properly and as expected. 

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> Yes, a credit card is required in case the user exceeds the quota and overages need to be charged. https://docs.rapidapi.com/docs/api-pricing#more-information-about-freemium-apis 

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> 'https://sportscore1.p.rapidapi.com/challenges/1'

Include a snippet of the data you received from the above request.

```
data:0:
id:1
slug:"premiership"
name:"Premiership"
name_translations:
priority:"0"
order:"23"
sport:
section:0:
id:1
slug:"argentina"
name:"Argentina"
name_translations:
priority:"0"
flag:"armenia"
sport:0:
league:0:
id:1
slug:"northern-ireland-premiership"
name:"Premiership"
name_translations:
has_logo:true
logo:"https:\/\/sport-enter.loc\/storage\/no-loga-liga.png"
start_date:"2019-08-09 18:45:00"
end_date:"2020-06-01 00:00:00"
priority:"0"
host:
tennis_points:"0"
facts:
sport:
section:
title_holder_team:
most_titles_team:
most_titles_team_count:0
```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically stored in a .env file where the key is set to a variable, and the variable is used in the fetch. Then you want to keep the .env file hidden under the .gitignore file, so it is not stored in your github. 

Why do you want to place that file within the `.gitignore` file?

> You want to place the .env file in the .gitignore so the API key is not loaded up onto github or run the risk of having it accessed by other users. 
