const exec = require('child_process').exec;
const os = require('os');
const fs = require('fs');

const platform = os.platform();

const TYPES = [
  'save',
  'open',
]

module.exports = (type) => {
  if (platform === 'linux') {
    switch (type.toLowerCase()) {
      case 'open':
        exec('kdialog --getopenfilename .', (err, stdout, stderr) => {
          if (err !== null) {
            console.log(`error: ${err}`);
          } else {
            console.log(`file_name: ${stdout}`);
            return fs.readFile(stdout, 'utf8');
          }
          console.log(`stdout: ${stdout}`);

        });
        break;
      case 'save':
        exec('kdialog --getsavefilename .', (err, stdout, stderr) => {
          if (err !== null) {
            console.log(`error: ${err}`);
          } else {
            console.log(`file_name: ${stdout}`);
            return fs.readFile(stdout, 'utf8');
          }
        });
        break;
      default:
        throw new Error('Invalid dialog box type specified.')
    }
  } else {
    throw new Error('This is intended to be run on Linux KDE distributions.')
  }
}
