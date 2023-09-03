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

> 1. As a user ... I can see a department's name

> 1. As a user ... I can see a department's Id

> 1. As a user ... I can see how many departments exist

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is ... found below 
>https://metmuseum.github.io/#departments 

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is... 80 requests per second.
>https://metmuseum.github.io/#departments:~:text=80%20requests%20per-,second,-. 

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> Potentially, yes. If I map my plan and plan my map, being meticulous and aware of my use when fetching. Luckily, I learned how to utilize useEffect and also stop the server.  


Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is... not required

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> I did not use postman. Instead, I fetched all departments in App.jsx 

Include a snippet of the data you received from the above request.

```
departments: Array(19)
0: 
departmentId: 1
displayName: "American Decorative Arts"
[[Prototype]]: Object

1: {departmentId: 3, displayName: 'Ancient Near Eastern Art'}
2: {departmentId: 4, displayName: 'Arms and Armor'}
3: {departmentId: 5, displayName: 'Arts of Africa, Oceania, and the Americas'}

4: 
departmentId: 6
displayName: "Asian Art"
[[Prototype]]: Object

```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically  .env meaning enviornmental variable 

Why do you want to place that file within the `.gitignore` file?

> You don't want others having access to this information so you would typically store it in a .gitignore - thus keeping the information secure online but still accessible on your local environment. 
