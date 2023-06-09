const fs = require("fs");

// create config
const config = [
  {
    name: "facebook",
    domain: "facebook.com",
    selectors: [
      { name: "home page feed", selector: ".x1hc1fzr.x1unhpq9.x6o7n8i" },
      { name: "groups feed", selector: 'div[role="feed"]' },
      { name: "stories", selector: '[aria-label="Stories"]' },
      { name: "reels", selector: 'div[aria-label="Reels tray"]' },
      {
        name: "stories & reels",
        selector: ".x78zum5.x1q0g3np.xl56j7k.x1yztbdb.x1y1aw1k",
      },
      { name: "watch feed", selector: "#watch_feed" },
      {
        name: "watch feed 2",
        selector: 'div[aria-label="Videos on Facebook Watch"]',
      },
      { name: "video player of reels and watch", selector: "video" },
      {
        name: "Marketplace",
        selector: 'div[aria-label="Collection of Marketplace items"]',
      },
      { name: "groups", selector: 'div[aria-label="Preview of a group"]' },
      { name: "notifications", selector: 'div[aria-label="Notifications"]' },
    ],
  },
  {
    name: "twitter",
    domain: "twitter.com",
    selectors: [
      {
        name: "home page feed",
        selector: 'div[aria-label="Timeline: Your Home Timeline"]',
      },
      {
        name: 'home page trending ("What\'s happening"widget)',
        selector: 'div[aria-label="Timeline: Trending now"]',
      },
      {
        name: "hides explore button",
        selector: 'a[aria-label="Search and explore"]',
      },
      {
        name: "explore tab hides all trending if accessed directly",
        selector: 'div[aria-label="Timeline: Explore"]',
      },
      {
        name: "who to follow widget",
        selector: 'aside[aria-label="Who to follow"]',
      },
    ],
  },
  {
    name: "instagram",
    domain: "instagram.com",
    selectors: [{ name: "All Feeds", selector: `main[role="main"]` }],
  },
  {
    name: "reddit",
    domain: "reddit.com",
    selectors: [
      { name: "removes all feeds", selector: ".rpBJOHq2PR60pnwJlUyP0" },
      { name: "sidebar", selector: "div[data-testid='frontpage-sidebar']" },
      { name: 'top "Trending today"', selector: "#TrendingPostsContainer" },
      { name: "post loading animation", selector: ".FohHGMokxXLkon1aacMoi" },
    ],
  },
  {
    name: "youtube",
    domain: "youtube.com",
    selectors: [
      {
        name: "home page feed",
        selector:
          '#page-manager>:not(ytd-search, [page-subtype="channels"], [page-subtype="history"], [page-subtype="subscriptions"], [page-subtype="playlist"]) #contents',
      },
      { name: "home page category chips", selector: "#chips" },
      { name: "home page hero image", selector: "#big-yoodle" },
      { name: "shorts", selector: "#shorts-container" },
      { name: "comments", selector: "#comments" },
      { name: "originals", selector: `a[title="Originals"]` },
      { name: "music", selector: `a[title="YouTube Music"]` },
      {
        name: "hide reels in search results",
        selector: "ytd-reel-shelf-renderer",
      },
    ],
  },
  {
    name: "linkedin",
    domain: "linkedin.com",
    selectors: [
      {
        name: "home page feed",
        selector: ".scaffold-finite-scroll__content>:not(.nt-card-list) *",
      },
      { name: 'home "LinkedIn News"', selector: "#feed-news-module" },
      {
        name: '"LinkedIn News"white background box',
        selector: `[aria-label="LinkedIn news module"]`,
      },
    ],
  },
];
// stringify config and write to config.txt file
fs.writeFileSync("config.txt", JSON.stringify(config));
