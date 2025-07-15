
const fs = require('fs');
const path = require('path');

function loadFolder(musicDir, folderName) 
{
  const fullPath = path.join(musicDir, folderName);
  return fs
    .readdirSync(fullPath)
    .filter(f => !f.startsWith('.'))
    .map(f => `file://${path.join(fullPath, f)}`);
}

module.exports =
{
    loadFolder
}