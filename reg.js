const fs = require('fs')

var pattern1 = /^.+?(?=foo)/g;
var pattern2 = /(?<=foo).+?(?=foo)/g;
var pattern3 = /(?<=foo)(?!foo).+/g;
// var patternPro = /^.+?(?=foo)|(?<=foo).+?(?=foo)|(?<=foo)(?![\w\W]*?foo).+/g; 
var patternPro = /^.+?(?=foo)|(?<=foo).+?(?=foo)|(?<=foo)(?!foo).+/g
// 第一段 ^.+?(?=foo)  表示必须是在开头且结尾后是foo的字符串,匹配第一个abc
// 第二段 (?<=foo).+?(?=foo) 匹配前面是foo且结尾后是foo的字符串 匹配除了开头结尾的被两个foo夹在中间的字符串
// 第三段 
// (?<=foo)(?!foo).+ 中的(?<=foo)匹配前面出现了foo的所有字符串的开始位置，
// (?!foo).+ 匹配了后面再也没有出现过foo 代表了末尾的非foo字符串
str = 'abcfooabcfooyxbfooqwefooqwe';

var match;
while ((match = patternPro.exec(str)) != null) {
    console.log(match[0]);
}

