# MarketSpend public website

A responsive, static landing page for the MarketSpend app. It uses the app's launcher icon and no build tools or server-side code.

## Preview

Open `index.html` in a browser. For a local web server, from this folder run `python -m http.server 8000` and open `http://localhost:8000`.

## Configure the download button

Edit `config.js` and set `downloadUrl` to the official Google Play listing or approved download page once available. For example:

```js
window.MARKETSPEND_CONFIG = {
  downloadUrl: "https://play.google.com/store/apps/details?id=YOUR.APP.ID",
  downloadLabel: "Get it on Google Play"
};
```

With an empty URL, the site keeps the clearly marked “Download link coming soon” button and explains that the official link is not yet available.

## Publish

Upload the contents of this `site` folder to any static website host (for example GitHub Pages, Netlify, or Cloudflare Pages). Set the publish/output directory to this folder. The app icon is included in `assets/`, so the site can be published as a standalone folder.

The fonts use Google Fonts when online and fall back to local sans-serif fonts if unavailable.
