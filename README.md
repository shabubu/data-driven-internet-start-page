# JSON Start Page
A simple customizable Browser/New Tab start page that requires no setup or compiling.   

## Running locally
To view your start page locally simply point your browser to:
`file:///{path to JSON Start page directory}/index.html`.

## Hosting as a Github Page
1. Fork this repository into your own space.
2. Follow the instructions [here](https://guides.github.com/features/pages/) to set up github pages.
3. View your start page at https://{your github user}.github.io/json-start-page/

### Github Page Demo
Click [here](https://shabubu.github.io/json-start-page/) to see a demo of this application hosted via Github Pages. 

## Customizing the Start Page
In order to customize the content that displays on your start page you only need to edit one file, [data.js](https://github.com/shabubu/json-start-page/blob/master/data.js).


### CSS - Change the UI Style
If you would like to significantly change the appearance of the UI and you know how to write CSS you can simple update [style.css](https://github.com/shabubu/json-start-page/blob/master/style.css). 

### data.js Keys
The following sections will describe how the keys in [data.js](https://github.com/shabubu/json-start-page/blob/master/data.js) can be altered and changed.
Additionally, if you simply do not want a feature to display then you can remove the key altogether.
![Default View](readmeAssets/default-view.png?raw=true "Default View")

#### 1. Logo
The `logo` key expects a relative to or full length URL for an image file.  This will displayed at the top of the start page.

##### Default
```javascript
{
  logo: 'exampleAssets/testLogo.png',
}
```

#### 2. Time
The `time` key allows you to display the time and date for multiple regions around the world.

##### Sub keys
**locale:** This key sets your regional locale for time and date format display. For a full list of all locales please visit [here](https://www.science.co.il/language/Locale-codes.php).
**zones:** This key accepts an array of objects describing the timezone:
* region - If region is set to `local` it will display your local time and date. If set to an actual region it will adjust the time and date to that region. For a full list of all timezones that can be used as a `region` please visit the [Timezone DB](https://timezonedb.com/time-zones).
* title - The title to appear above the time and date for the timezone.

##### Default
```javascript
{
  time: {
    locale: 'en-US',
    zones: [
      {
        region: 'LOCAL',
        title: 'Local Time',
      },
      {
        region: 'Europe/Paris',
        title: 'Paris Time',
      },
    ],
  },
}
```

#### 3. Search Commands
The `searchCommands` key allows you to add a customizable search box with an unlimited amount of predefined search "engines" at your disposal. While typing in the search box itself you are able to create your own commands that will switch to the "engine" of your choice when typed.
`searchCommands` accepts an array of objects describing the desired search "engine". The following keys are needed for each object:
* command - This key is used to create the command that can be typed to switch the "engine".
* label - This key is a title for the "engine" itself. It will be displayed in the search box placeholder and search helper commands.
* url - This key is the url that will be opened for the search itself. In order for the search term to be properly inserted into the url just add `{searchQuery}` anywhere you want the url encoded search query to be inserted.

Additionally, the `searchCommands` will generate a list of all the commands and their titles that can be clicked to switch "engines", as demo'd in the following animation:
![Search Help Demo](readmeAssets/search-help-demo.gif?raw=true "Search Help Demo")

##### Default
```javascript
{
  searchCommands: [
    {
      command: '/g',
      label: 'Google',
      url: 'https://google.com/search?q={searchQuery}',
    },
    {
      command: '/d',
      label: 'DuckDuckGo',
      url: 'https://duckduckgo.com/?q={searchQuery}',
    },
    {
      command: '/h',
      label: 'GitHub',
      url: 'https://github.com/search?q={searchQuery}',
    },
    {
      command: '/w',
      label: 'Wikipedia',
      url: 'http://en.wikipedia.org/wiki/Special:Search/{searchQuery}',
    },
    {
      command: '/y',
      label: 'YouTube',
      url: 'https://youtube.com/results?search_query={searchQuery}',
    },
  ],
}
```

#### 4. Header Links
The `headerLinks` key is used to display large text links without any grouping, unlike `linkGroups`.
`headerLinks` accept an array of link objects with the following keys:
* name - The name key will be what is displayed in the UI for the link.
* url - The url key is the URL that the link will actually navigate to.

##### Default
```javascript
{
  headerLinks: [
    {
      name: 'Project Github Page',
      url: 'https://github.com/shabubu/json-start-page',
    },
    {
      name: 'Author Github Page',
      url: 'https://github.com/shabubu/',
    },
  ],
}
```

#### 5. Link Groups
The `linkGroups` key allows you to create groups of similar text links.  `linkGroups` accepts an array of link group objects which require the following keys:
* title - The title for the group of links.
* links - Array of Link objects with the following keys: 
  - name - The name key will be what is displayed in the UI for the link.
  - url - The url key is the URL that the link will actually navigate to.
  
##### Default
```javascript
{
  linkGroups: [
    {
      title: 'Social Networks',
      links: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
      ],
    },
    {
      title: 'Streaming',
      links: [
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/',
        },
        {
          name: 'Twitch',
          url: 'https://www.twitch.tv/',
        },
        {
          name: 'Netflix',
          url: 'https://www.netflix.com/',
        },
        {
          name: 'Hulu',
          url: 'https://www.hulu.com/',
        },
        {
          name: 'Plex',
          url: 'https://www.plex.tv/',
        },
      ],
    },
    {
      title: 'Other Open Source Projects',
      links: [
        {
          name: 'Remediator Library',
          url: 'https://github.com/shabubu/remediator',
        },
        {
          name: 'Remediator CLI',
          url: 'https://github.com/shabubu/remediator-cli',
        },
      ],
    },
    {
      title: 'PC Gaming',
      links: [
        {
          name: 'Steam',
          url: 'https://store.steampowered.com/',
        },
        {
          name: 'Origin',
          url: 'https://www.origin.com/usa/en-us/store',
        },
        {
          name: 'Epic Games',
          url: 'https://www.epicgames.com/store/en-US/',
        },
      ],
    },
  ],
}
```

#### 6. Quote of the Day
The `quoteOfTheDay` key displays the daily quote from [They Said So API](https://theysaidso.com/api/).  The key accepts a boolean of `true` to display the quote.

##### Default
```javascript
{
  quoteOfTheDay: true,
}
```

#### 7. Background
The `background` key purely sets the background color for the start page.  There are multiple ways to define a color, to learn the different ways click [here](http://web.simmons.edu/~grovesd/comm244/notes/week3/css-colors).

##### Default
```javascript
{
  background: '#EEEEEE',
}
```

#### 8. Favicon
The `favicon` key sets the favicon for the browser tab.  Favicons are not limited to `.ico` files but can be images as well.  Learn more about favicons [here](https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons/).

##### Default
```javascript
{
  favicon: 'exampleAssets/favicon.ico',
}
```

#### 9. Title
The `title` key sets the title of the page itself in your browser tab. 

##### Default
```javascript
{
  title: 'Your Personal Internet Start Page',
}
```

## Acknowledgements
Thanks to [Adobe Systems](https://www.adobe.com/) since this project would not exist if not for time given for a Hackathon.
Additionally, thanks to this [reddit post](https://www.reddit.com/r/startpages/comments/8hyugt/minimalistic_start_page/) that a colleague introduced me to which served as inspiration.
