// utils/logger.js
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../../logs/auth.log');

function logAuthEvent(data:any) {
  const log = `[${new Date().toISOString()}] ${data}\n`;
  fs.appendFile(logFile, log, (err:any) => {
    if (err) console.error('Failed to write log:', err);
  });
}

export default logAuthEvent;