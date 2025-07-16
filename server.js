var songCounter = 0;

const onAirArt = `
     _________
    |         |
    |  GNR    |
    |_________|
  |#############|
  |#####(___)###|
  |# [ON AIR] ##|
  \#############/
    | |     | |`;

const vaultBoyArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣴⠷⣶⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣷⣾⠟⠛⠛⠋⠀⠈⠉⠛⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠈⠉⣡⡴⠶⣤⠶⠷⣦⠀⣀⣈⠻⣿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣳⣾⣯⠀⠀⠀⠀⣤⡈⠉⠉⢹⡇⢹⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⠋⣤⡄⠀⣤⠀⢀⡈⠓⠀⣼⣿⣄⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⡿⠛⠛⣿⡧⠀⠀⠀⠀⠀⠀⣼⡟⠀⠛⢡⡾⠋⠀⠸⠇⠀⠀⣾⣿⣿⣾⠟⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⠀⠀⢰⣿⠇⠀⠀⠀⠀⠀⠀⣿⡇⢀⡀⠘⠗⠀⠀⣤⡀⠀⠀⠈⠛⢿⣿⠀⠀⠀⠀⠀⠀⠀
⢀⣠⣨⣿⣆⠀⠹⣿⡄⠀⠀⠀⠀⠀⠀⢸⣿⠹⠯⣿⣒⣚⣭⠿⡟⠀⠀⢀⣠⣾⡿⠀⠀⠀⠀⠀⠀⠀
⣿⠛⠉⠉⠛⠳⢦⡈⢿⣦⣀⠀⠀⠀⠀⠀⢻⣷⡀⠘⠛⠃⠀⠀⠀⢀⣴⣿⣟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠶⠶⠶⠦⣤⣨⡇⠀⣿⡿⢷⣶⣶⣦⣴⣾⣿⡟⠶⣤⣀⣀⡀⢘⣿⠏⢹⡟⠿⣷⣦⣀⠀⠀⠀⠀⠀
⣿⣤⣤⣤⣀⣀⢙⡆⣰⢏⡇⠀⠀⠈⠉⠉⠀⠀⠳⣄⡈⠛⠛⠛⠋⠁⣀⣼⠃⠀⠀⠙⠻⣿⣦⡀⠀⠀
⣿⡅⢰⣄⠈⠉⣻⢁⡽⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⣦⠀⠀⢹⡋⠁⠀⠀⠀⠀⠀⠈⠻⣿⣆⠀
⠘⠻⣶⣭⣿⣿⣿⣟⣱⠟⠀⠀⠀⠀⢀⣠⣾⠇⠀⠀⠀⠀⢹⠀⠀⠈⡇⠀⠀⢿⠀⠀⠀⠀⠀⠈⢻⡇
⠀⠀⠀⠉⠉⠉⠛⠛⠿⣷⡖⠒⣶⡿⠛⣿⠀⠀⠀⠀⠀⠀⠸⡇⠀⠀⢹⠀⠀⢸⡆⣴⡖⠀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡆⠀⠀⠀⠀⠀⠀⡇⠀⠀⢸⡆⠀⠈⣿⠏⠀⠀⠀⠀⣰⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⡀⠀⠀⠀⠀⠀⡇⠀⠀⠀⡇⣀⣴⢿⣀⡀⠀⠀⣰⡏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⠙⠳⠶⠦⣤⣤⡇⠀⠀⠀⠛⠉⠀⢸⠉⠙⢷⣾⡟⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡆⣀⣼⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠙⠷⢦⣤⣄⣀⣀⣠⣤⣤⡶⠾⠛⠉⢸⣇⣹⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⠀⠀⠀⠀⠈⠉⠉⠉⣄⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⣿⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡏⠀⠀⠀⠀⠀⠀⣸⣿⣇⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠁⠀⠀⠀⠀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀⠀⣾⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀⠀⣾⡿⢸⡟⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⣸⣿⠃⢸⡇⠀⠀⠀⠀⠀⣼⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣀⠀⠀⠀⢀⣴⣿⠃⠀⢸⣷⣦⣤⣤⣤⣴⣿⣷⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠏⠁⠀⠀⠈⠻⡿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⡿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀
`;

const vaultBoySmall = `
⣿⣿⣿⣿⢿⣿⣿⣿⠿⠿⠿⣫⣭⣝⣿⣿⣿⣿⣿⣿
⣿⣿⡟⣴⣜⣛⣫⣶⣿⣷⣾⣿⣿⣿⣷⣮⡙⣿⣿⣿
⣿⣿⠇⢿⣿⡿⣋⣥⣍⣛⣫⣍⠙⣿⣿⣿⣿⣝⢿⣿
⣿⣿⢸⢣⣖⣚⣿⣿⣿⣿⣿⡿⣷⣬⣯⣭⡝⢿⡎⢻
⣿⡿⣰⣿⠟⣿⣿⣿⣿⣿⣿⣦⣹⣿⣿⡿⣋⣼⣿⢸
⣿⢱⣿⣿⣴⣿⢟⣴⣿⣿⠁⣿⣿⣿⢻⢘⢎⢿⡏⣸
⡏⢸⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⡟⡲⡙⠘⣰⣿
⣇⢸⡁⣝⣿⣿⣿⣿⣿⡛⢿⣿⣿⣿⣷⣴⡏⢴⣿⣿
⣿⡘⣷⣷⣭⣛⣛⣛⣯⣵⣸⣿⣿⣾⣿⡿⠏⣼⣿⣿
⣿⣷⡘⢿⣿⣶⣿⣿⣿⣿⣿⣿⡿⢋⣴⣶⣾⣿⣿⣿
⣿⣿⣿⣦⡝⠿⣿⣿⣿⣿⣯⠅⣰⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣦⣀⣒⣛⣋⣥⣾⣿⣿⣿⣿⣿⣿⣿⣿
`;

const config = require('./config.json');
const port = config.serverPort;
const express = require('express');
const fs = require('fs');
const path = require('path');
const folderLoader = require('./handler/folderLoader.js');
const musicDir = path.join(__dirname, 'media');
const { Station, PUBLIC_EVENTS, SHUFFLE_METHODS } = require('@fridgefm/radio-core');
const app = express();
const station = new Station
({
  verbose: false, //enable if you want more logging
  responseHeaders: 
  {
    'Content-Type': 'audio/mpeg',
    'Transfer-Encoding': 'chunked',
    'Genre': 'classic'
  }
});

station.addFolder(path.join(musicDir, 'music'));
station.addFolder(path.join(musicDir, 'intros'));
station.addFolder(path.join(musicDir, 'outros'));

const intros = folderLoader.loadFolder(musicDir, 'intros');
const outros = folderLoader.loadFolder(musicDir, 'outros');


app.get('/stream', (req, res) => 
{
  if (config.keepServerAlive)
  {
    req.socket.setTimeout(0);
    const keepAlive = setInterval(() => 
    {
      if (!res.writableEnded) 
      {
        res.write(Buffer.from([0]));
      }
      else 
      {
        clearInterval(keepAlive);
      }
    }, 15000);
    req.on('close', () => clearInterval(keepAlive));
  }
  station.connectListener(req, res);
});

station.on(PUBLIC_EVENTS.NEXT_TRACK, async track => 
{
  const meta = await track.getMetaAsync();
  console.log('▶️  Playing:', meta.title || meta.path);

  songCounter++;
  if (songCounter < config.songsBetweenTracks)
  {
    return;
  }
  songCounter = 0;

  const isIntro = Math.random() > 0.5;
  const pool = isIntro ? intros : outros;
  const fileUrl = pool[Math.floor(Math.random() * pool.length)];
  const fileName = path.basename(fileUrl);
  console.log(`🎙️ Injecting audio: ${fileName}`);

  const folderName = isIntro ? 'intros' : 'outros';
  const fullPath = path.join(musicDir, folderName, fileName);

  const playlist = station.getPlaylist();
  const injectedTrack = playlist.find(t => t.fsStats.fullPath === fullPath);

  if (!injectedTrack) 
  {
    console.log(`⚠️ Could not find ${fileName}`);
    return;
  }

  station.reorderPlaylist((list) => 
  {
    return [list[0], injectedTrack, ...list.slice(1)];
  });

  station.next();
});

station.on(PUBLIC_EVENTS.START, () => 
{
  console.log('Radio started');
  station.reorderPlaylist(SHUFFLE_METHODS.randomShuffle());
  station.next();
});

station.on(PUBLIC_EVENTS.RESTART, () => 
{
  console.log('Shuffling event started');
  station.reorderPlaylist(SHUFFLE_METHODS.randomShuffle());
});

station.on(PUBLIC_EVENTS.ERROR, (err) => 
{
  console.log(`Error: ${err}`);
});

app.listen(port, async () => 
{
  console.clear();
  console.log(vaultBoySmall);
  console.log(`🎙️ You're listening to Galaxy News Radio, bringing you the truth, no matter how bad it hurts.`);
  try 
  {
    await station.start();
  } 
  catch (err) 
  {
    process.exit(1);
  }
});

app.get(`/api/shuffle/:token`, (req, res) =>
{
    var apitoken = req.params.token;
  
    fs.readFile('./data/devTokens.json', "utf8", (err, data) =>
    {
        if (err)
        {
          res.status(500).send
          ({
            msg: "Error reading tokens, please try again."
          })
        } 
        else
        {
            const tokens = JSON.parse(data).tokens;
            
            if (tokens.find(token => token == apitoken) != undefined) 
            {
              console.log('Manual shuffle event started');
              station.reorderPlaylist(SHUFFLE_METHODS.randomShuffle());
              station.next();
              res.status(200).send
              ({
                msg: "Shuffled playlist"
              })
            }
            else
            {
              res.status(200).send
              ({
                msg: "Incorrect token"
              })
            }
        }
    });
})