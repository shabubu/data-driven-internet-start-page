const appData = {
  background: '#EEEEEE',
  favicon: 'exampleAssets/favicon.ico',
  logo: 'exampleAssets/testLogo.png',
  title: 'Your Personal Internet Start Page',

  time: {
    locale: 'en-US',
    zones: [
      {
        region: 'America/Los_Angeles',
        title: 'Local Time',
      },
      {
        region: 'Europe/Paris',
        title: 'Paris Time',
      },
    ],
  },

  quoteOfTheDay: true,

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
};
