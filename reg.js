const fs = require('fs')

var pattern = /(?<=foo).+?(?=foo)/g;
str = 'abcfooabcfooyxbfooqwefooqwe';

var match;
while ((match = pattern.exec(str)) != null) {
    console.log(match);
}

