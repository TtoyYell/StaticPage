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

// 一个字符串： fdjkaljfdlstopfjdslafdj 。 您会看到中间有一stop 。 我替换除stop之外的其他任何单词。 尝试使用[^stop] ，但它还在字符串末尾包含s 。

//解决方案

//纯RegEx方法的解决方案（在我的知识中对RegEx的了解是对的。PCRE动词对我来说太高级了）。 但这需要2个步骤。 我不想混用PHP方法，因为有时作业不在编码区域内，即Total Commander中的多重命名文件名。

//让我们看一下字符串： xxxfooeoropwfoo,skfhlk;afoofsjre,jhgfs,vnhufoolsjunegpq 。 例如，我想将所有foo保留在此字符​​串中，
//并将其他所有non-foo贪婪地替换为--- 。

//首先，我需要找到每个foo之间的所有非foo ： (?<=foo).+?(?=foo) 。 该字符串将变成xxxfoo---foo---foo---foolsjunegpq ，现在双方都剩下non-foo字了。

//然后使用[^-]+(?=foo)|(?<=foo)[^-]+ 。 这次： ---foo---foo---foo---foo--- 。 除foo所有单词都变成了--- 。