#!/usr/bin/env node

if (process.argv.length !== 3) {
    console.error("Usage: GeoDataParser <geo_names_file.txt>");
    process.exit(1);
}

var readline = require('readline'),
    fs = require('fs'),
    inputPath = process.argv[2],
    lineCount = 0,
    //columns defined at following location:
    //http://earth-info.nga.mil/gns/html/gis_countryfiles.html
    cols = {
        lat: 3, //latitude in decimal degrees
        lon: 4, //latitude in decimal degrees
        fc: 9,  //feature class
        dsg:10, //feature designation code
        pc: 11, //populated place classification
        nt: 17, //name type (C,N,D,P, VA, V ...)
        sn: 21, //short name
        fn: 23  //full name with no diacritics
    },
    dsgList = [
        'PPLA',
        'PPLA2'
    ],
    curLine;

    var rl = readline.createInterface({
        input: fs.createReadStream(inputPath),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        curLine = line.split('\t');
        if (curLine[cols.dsg] === 'PPLC' || curLine[cols.dsg] === 'PPLA2') {
            //console.log(curLine[cols.fn]);
            lineCount++;
        }
    });

    rl.on('close', function () {
        console.log("total lines:" + lineCount);
    });

