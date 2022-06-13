import * as qdat from './qtools/qdat.mjs';
import fs from 'fs';

const targetFilename =
	'//home/user/said/general-backup/env-back' +
	qdat.timeStampifyFileName();

fs.copyFile('.env', targetFilename, (err) => {
	if (err) throw err;
	console.log('finished');
});

 
