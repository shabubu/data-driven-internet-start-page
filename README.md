# JSON Start Page
 

## Running locally
To view your DDISP locally simply point your browser to:
`file:///{path to parent directory}/data-driven-internet-start-page/index.html`


## Hosting as a github page

### Github page demo
[Demo](https://shabubu.github.io/json-start-page/)
## Data Keys
![Default View](readmeAssets/default-view.png?raw=true "Default View")

### 1. Logo

Default:
```javascript
{
  logo: 'exampleAssets/testLogo.png',
}
```

### 2. Time

Default:
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

### 3. Search Commands

Default:
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
![Search Help Demo](readmeAssets/search-help-demo.gif?raw=true "Search Help Demo")

### 4. Header Links

Default:
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

### 5. Link Groups

Default:
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

### 6. Quote of the Day

Default:
```javascript
{
  quoteOfTheDay: true,
}
```

### 7. Background

Default:
```javascript
{
  background: '#EEEEEE',
}
```

### 8. Favicon

Default:
```javascript
{
  favicon: 'exampleAssets/favicon.ico',
}
```

### 9. Title

Default:
```javascript
{
  title: 'Your Personal Internet Start Page',
}
```
