const appData = {
  logo: 'exampleAssets/testLogo.png',

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

  quoteOfTheDay: true,

  background: '#EEEEEE',

  favicon: 'exampleAssets/favicon.ico',

  title: 'Your Personal Internet Start Page',
};
