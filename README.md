# *This repo has been archived*
Please visit the new repo [here](https://github.com/UnusAnnusArchived/TUAA-Backend)

<hr>

# The Unus Annus Archive Source Code
The source code of the now taken down Unus Annus Archive

(This entire project is really hacked together since I didn't expect it to get this complex, so sorry about that)

To setup, you'll first need to create your own cdn that the website will take videos from. The file structure of that cdn must look like the following:

```bash
├── 00/ # Season 0 (Specials)
│   ├── 001.mp4 # Specials - Episode 1
│   └── 002.mp4 # Specials - Episode 2
├── 01/ # Season 1
│   ├── 001.mp4 # Season 1 - Episode 1
│   └── 001.mp4 # Season 1 - Episode 2
├── metadata/ # Episode Metadata
│   ├── 00/ # Specials Metadata
│   │   ├── 001.json # Specials - Episode 1 Metadata
│   │   └── 002.json # Specials - Episode 2 Metadata
│   ├── 01/ # Season 1 Metadata
│   │   ├── 001.json # Season 1 - Episode 1 Metadata
│   │   └── 002.json # Season 1 - Episode 2 Metadata
│   ├── 000.json # All Specials Metadata
│   ├── 001.json # All Season 1 Metadata
│   └── all.json # All Seasons Metadata
├── thumbnails/
│   ├── 00/ # Specials Thumbnails
│   │   ├── 001.webp # Specials - Episode 1 Thumbnail
│   │   └── 002.webp # Specials - Episode 2 Thumbnail
│   ├── 01/ # Season 1 Thumbnails
│   │   ├── 001.webp # Season 1 - Episode 1 Thumbnail
│   │   └── 002.webp # Season 1 - Episode 2 Thumbnail
```

*You can also use [our cdn](https://cdn.unusannusarchive.tk) to see the entire structure*

You'll also need to setup a server with nodejs installed, download the source code to it, run `npm install` in the source code folder, change `const baseurl = 'https://cdn.example.com'` to include the correct cdn domain in `/src/getvideodata.js`, then run `node .` and you'll have a working server. You should also change the email address in `/static/index.html` to your own, or remove that `p` tag completely.

If you want the server to run on port 80 instead of port 1024, go to the bottom of `/src/main.js` and change `app.listen(1024)` to `app.listen(80)`

### Example CDN Files
Here's an example of `/metadata/01/01.json`:

```js
{
  "video": "//cdn.example.com/01/001.mp4",
   "season": 1,
   "episode": 1,
   "title": "Unus Annus",
   "description": "What would you do if you only had a year left to live? Would you squander the time you were given? Or would you make every second count?\r\n\r\nWelcome to Unus Annus. Today marks the beginning of our year-long journey where the only certainty is the end. In exactly 365 days this channel will be deleted along with all of the daily uploads accumulated since then. Nothing will be saved. Nothing will be reuploaded.\r\n\r\nThis is your one chance to join us at the onset of our adventure. To be there from the beginning. To make every second count. Subscribe now and relish what little time we have left or have the choice made for you as we disappear from existence forever. But remember... everything has an end. Even you. \r\n\r\nMemento mori.\r\n\r\nUnus annus.",
   "releasedate": "2019-11-15",
   "thumbnail": "//cdn.example.com/thumbnails/.01/001.jpg" //If you have a webp version of the thumbnail, change .jpg to .webp and it will automatically be converted back to jpg if the browser doesn't support webp
}
```
If the episode is the last one of a season, then you'll also want to include `"islastep": true` in your json file

Here's an example of `/metadata/00.json`:
```js
[
  {
    "Episode 1 data here": ""
  },
  {
    "episode 2 data here": ""
  }
]
```

Here's an example of `/metadata/all.json`:
```js
[
  [
    {
      "Season 0 Episode 1 data here": ""
    },
    {
      "Season 0 Episode 2 data here": ""
    }
  ],
  [
    {
      "Season 1 Episode 1 data here": ""
    },
    {
      "Season 1 Episode 2 data here": ""
    }
  ]
]
```


### Sorry if this documentation isn't very good, I wrote it up in just a couple minutes. Please make an issue if you don't understand or need help with something.
