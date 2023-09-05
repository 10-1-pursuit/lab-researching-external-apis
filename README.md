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

> My application idea is to create a simple web app that allows users to search for and view details about their favorite music artists. The app will utilize the Spotify Web API to retrieve arist information, including top tracks, albums, and related artists.

Write 3 - 5 user stories for your application. Include each below.

> 1. As a user, I want to search for a music artist by their name and see a list of matching artists.

> 2. As a user, I want to select a specific artists from the search results and view their top tracks.

> 3. As a user, I want to see the albums released by a selected artist and get more information about each album.

> 4. As a user, I want to discover related artists to the one im currently viewing.


What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is
- Artist information (name,images,genres, popularity)
- Top tracks of an artist.
- Album details (name, release date, cover art, tracklist)
- Related artists to the selected artist.
https://developer.spotify.com/documentation/web-api

Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.

> The number of free requests I can make is not shown but if too many requests are made within a 30 second window, the rate limit will be reached.
https://developer.spotify.com/documentation/web-api/concepts/rate-limits

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> Yes because there is no rate limit unless too many calls are made within 30 seconds

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> No credit card info needed.

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL http://localhost:3010/fetch?url=https://api.spotify.com/v1/search?q=drake%26type=album

Include a snippet of the data you received from the above request.

```
{
    "albums": {
        "href": "https://api.spotify.com/v1/search?query=drake&type=album&offset=0&limit=20",
        "items": [
            {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
                        },
                        "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
                        "id": "3TVXtAsR1Inumwj472S9r4",
                        "name": "Drake",
                        "type": "artist",
                        "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
                    }
                ],
                "available_markets": [
                    "AR",
                    "AU",
                    "AT",
                    "BE",
                    "BO",
                    "BR",
                    "BG",
                    "CA",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DK",
                    "DO",
                    "DE",
                    "EC",
                    "EE",
                    "SV",
                    "FI",
                    "FR",
                    "GR",
                    "GT",
                    "HN",
                    "HK",
                    "HU",
                    "IS",
                    "IE",
                    "IT",
                    "LV",
                    "LT",
                    "LU",
                    "MY",
                    "MT",
                    "MX",
                    "NL",
                    "NZ",
                    "NI",
                    "NO",
                    "PA",
                    "PY",
                    "PE",
                    "PH",
                    "PL",
                    "PT",
                    "SG",
                    "SK",
                    "ES",
                    "SE",
                    "CH",
                    "TW",
                    "TR",
                    "UY",
                    "US",
                    "GB",
                    "AD",
                    "LI",
                    "MC",
                    "ID",
                    "JP",
                    "TH",
                    "VN",
                    "RO",
                    "IL",
                    "ZA",
                    "SA",
                    "AE",
                    "BH",
                    "QA",
                    "OM",
                    "KW",
                    "EG",
                    "MA",
                    "DZ",
                    "TN",
                    "LB",
                    "JO",
                    "PS",
                    "IN",
                    "KZ",
                    "MD",
                    "UA",
                    "AL",
                    "BA",
                    "HR",
                    "ME",
                    "MK",
                    "RS",
                    "SI",
                    "KR",
                    "BD",
                    "PK",
                    "LK",
                    "GH",
                    "KE",
                    "NG",
                    "TZ",
                    "UG",
                    "AG",
                    "AM",
                    "BS",
                    "BB",
                    "BZ",
                    "BT",
                    "BW",
                    "BF",
                    "CV",
                    "CW",
                    "DM",
                    "FJ",
                    "GM",
                    "GE",
                    "GD",
                    "GW",
                    "GY",
                    "HT",
                    "JM",
                    "KI",
                    "LS",
                    "LR",
                    "MW",
                    "MV",
                    "ML",
                    "MH",
                    "FM",
                    "NA",
                    "NR",
                    "NE",
                    "PW",
                    "PG",
                    "WS",
                    "SM",
                    "ST",
                    "SN",
                    "SC",
                    "SL",
                    "SB",
                    "KN",
                    "LC",
                    "VC",
                    "SR",
                    "TL",
                    "TO",
                    "TT",
                    "TV",
                    "VU",
                    "AZ",
                    "BN",
                    "BI",
                    "KH",
                    "CM",
                    "TD",
                    "KM",
                    "GQ",
                    "SZ",
                    "GA",
                    "GN",
                    "KG",
                    "LA",
                    "MO",
                    "MR",
                    "MN",
                    "NP",
                    "RW",
                    "TG",
                    "UZ",
                    "ZW",
                    "BJ",
                    "MG",
                    "MU",
                    "MZ",
                    "AO",
                    "CI",
                    "DJ",
                    "ZM",
                    "CD",
                    "CG",
                    "IQ",
                    "LY",
                    "TJ",
                    "VE",
                    "ET",
                    "XK"
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/67WUCOjyl44d8fAFzHONjW"
                },
                "href": "https://api.spotify.com/v1/albums/67WUCOjyl44d8fAFzHONjW",
                "id": "67WUCOjyl44d8fAFzHONjW",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273cace8a4b2ff924c9e12e3a96",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02cace8a4b2ff924c9e12e3a96",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851cace8a4b2ff924c9e12e3a96",
                        "width": 64
                    }
                ]
            }
        ]
    }
}
```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically .env

Why do you want to place that file within the `.gitignore` file?

> We dont want to push up any sensitive data which in this case being the API key
