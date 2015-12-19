const SENTENCES_IN_PARA = 5;

var sentenceLength = Math.random() * (15 - 3) + 3;
var ratio = Math.random() * (3 - 1) + 1;

var loremIpsum= [];

var feministWords= [];

generateFeminipsum(n) {
    var text;
    _.each(n, function() {
        text += generateParagraph();
    });

    return text;
}

generateParagraph() {
    var paragraph;
    _.each(SENTENCES_IN_PARA, function() {
        paragraph += generateSentence() + "\n";
    });

    return paragraph;
}

generateSentence() {
    var loremWordsArray = _.sample(loremIpsum, sentenceLength);
    var femWordsArray = _.sample(feministWords, sentenceLength);

    var feminipsumArray = _.shuffle(_.flatten([femWordsArray, loremWordsArray]));

    return feminipsumArray.join(" ") + ".";
}
