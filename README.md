# Photo Search App

## Description

This is a simple web application that allows users to search for and display images, as well as add them to the favorites.

## Technologies
* Vue JS 3.3
* Tailwind CSS
* Unsplash API

## Prerequisites

You are required to have [Node.js](https://nodejs.org/) installed to run the app locally.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## API Usage

Get your API_KEY and API_SECRET: [Unsplash API documentation](https://unsplash.com/documentation#creating-a-developer-account).

Update values in the [main.js](https://github.com/bekzat-karayev/vuejs-photo-search-app/blob/master/src/main.js):

```
 const unsplash = new Unsplash({
        applicationId: "API_KEY",
        secret: "API_SECRET",
        callbackUrl: "{CALLBACK_URL}"
    });
```

## Build and Run

```sh
# install all dependencies
~/ npm install

# run
~/ npm run dev 
```