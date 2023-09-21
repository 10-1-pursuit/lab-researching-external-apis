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
    My application should search for movies and retrieve information about those films such as language, plot, directors and more.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user ...
    I want to be able to search for my favorite movies and see their release information.

> 1. As a user ...
    I want to be able to retrieve information about actors or production information from a film.

> 1. As a user ...
    I want to be able to find a film based of IMDb ID or release year.

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is ...
    1. The Movie information (name, genre, images, etc.)
    2. Released Production information (director, awards, cast ,etc.)
    3. Poster(s) for the film.
    4. Any metacritic data or scores and their sources. 
        Documentation: https://www.omdbapi.com/#examples

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is...
    Free up until 1000 requests as a daily limit. However, Patreon subscribers may not have a daily limit for requests (it's not specified in the document.)
        Documentation: https://www.omdbapi.com/apikey.aspx

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> Your explanation here.
    This should be sufficient as 1000 calls during the testing process daily is more than enough. Even in testing for previous projects I have yet to make over 200 test requests during the entirety of a project. 

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is...
    Not necessary! OMDb API requires only a valid email address for authentication.  

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL
    http://www.omdbapi.com/<MY API KEY>&y=2001&t=Atlantis

Include a snippet of the data you received from the above request.

```
{
 "Title": "Atlantis: The Lost Empire",
    "Year": "2001",
    "Rated": "PG",
    "Released": "15 Jun 2001",
    "Runtime": "95 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Gary Trousdale, Kirk Wise",
    "Writer": "Tab Murphy, Kirk Wise, Gary Trousdale",
    "Actors": "Michael J. Fox, Jim Varney, Corey Burton",
    "Plot": "A young linguist named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis.",
    "Language": "English, French, Spanish",
    "Country": "United States, Japan",
    "Awards": "2 wins & 14 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
}

```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically ...
    A .env file! That would then be placed within a .gitignore file. 

Why do you want to place that file within the `.gitignore` file?

> Your answer here...
    To maintain security. This will have the file ignored in the git repo for public access, preventing any stored sensitive data from being shared. 
