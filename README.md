# Hydrotune
> Hydrotune is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**
3. Node.js v12.0.0 or newer

## Installation

```
git clone https://github.com/eritislami/hydrotune-for-world.git hydrotune
cd hydrotune
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false
}
```

## Features & Commands

> Note: The default prefix is '/'

* 🎶 Play music from YouTube via url
  * `/play https://www.youtube.com/watch?v=GLvohMXgcBo`
* 🔎 Play music from YouTube via search query
  * `/play under the bridge red hot chili peppers`
* 🔎 Search and select music to play
  * `/search Pearl Jam`
* 📃 Play youtube playlists via url
  * `/playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`
* 🔎 Play youtube playlists via search query
  * `/playlist linkin park meteora`
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Now Playing (/np)
* Queue system (/queue, /q)
* Loop / Repeat (/loop)
* Shuffle (/shuffle)
* Volume control (/volume, /v)
* Pause (/pause)
* Resume (/resume, /r)
* Skip (/skip, /s)
* Skip to song # in queue (/skipto, /st)
* Toggle pruning of bot messages (/pruning)
* Help (/help, /h)
* Media Controls via Reactions
![reactions](https://i.imgur.com/j7CevsH.png)

## Contributing

1. [Fork the repository](https://github.com/hydrogen-studio/Hydrotune-for-world/fork)
2. Clone your fork: `git clone https://github.com/your username/Hydrotune-for-world.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request
