"use strict";

// language=ECMAScript 6
/**
 *
 * Name: Mirza
 * Description: Remove extra with space between words and symbols, change farsi arabic and english numbers together
 * Author: Pouria Parhami
 * Version: 1.0.0
 * Licence:
 * MIT License

  Copyright (c) 2018 Pouria Parhami

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 *
 * */
function Mirza() {

    var farsiNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
        arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
        englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const regExEnglishNumbers = /[0-9]/g;
    const regExArabicNumbers = /[٠١٢٣٤٥٦٧٨٩]/g;
    const regExFarsiNumbers = /[۰۱۲۳۴۵۶۷۸۹]/g;


    var publicAPI = {
        fixWithSpace,
        fixWithSpaceEn,
        replaceSymbolsToFarsi,
        replaceSymbolsToEnglish,
        changeNumberToFarsi,
        changeNumberToArabic,
        arabicNumberToEnglish,
        farsiNumberToEnglish,
        farsiNumbersToArabic,
        arabicNumbersToFarsi
    };

    return publicAPI;

    //------------------------ Helpers ------------------------/

    function fixSymbolsWithSpace(value, ...symbol) {

        for (let i = 0; i < symbol.length; i++) {

            var regularExpression = "(\\s*|[\\u0600-\\u06EF]*)(" + symbol[i] + ")(\\s*|[\\u0600-\\u06EF]*)";
            regularExpression = new RegExp(regularExpression, "g");

            value = value.replace(regularExpression, (match, ...words) => {

                console.log(`the match ${match} this is 0: ${words[0]}, this is one: ${words[1]}, this is two: ${words[2]}.`);

                if (/\s+/.test(words[0])) {
                    words[0] = "";
                }

                if (/(?:\s{2,}|[\u0600-\u06EF]+|(?:))/.test(words[2])) {
                    words[2] = " ";
                }

                return words[0] + words[1] + words[2];

            });

        }

        return value;

    }

    //Remove extra with space before sentences and between words.
    function removeExtraWithSpace(value, lang) {

        var regEx, regExGlobal;

        // 0 mean farsi, 1 mean english
        if (lang == 0) {

            regEx = /(\s*)([\u0600-\u06EF]+)(\s*)/;
            regExGlobal = /(\s*)([\u0600-\u06EF]+)(\s*)/g;

        } else {

            regEx = /(\s*)([A-Za-z0-9_]+)(\s*)/;
            regExGlobal = /(\s*)([A-Za-z0-9_]+)(\s*)/g;

        }

        //remove any whit space before first word in sentences
        value = value.replace(regEx, (match, ...words) => {

            if (/\s+/.test(words[0])) {
                words[0] = "";
            }

            if (/\s{2,}/.test(words[2])) {
                words[2] = " ";
            }

            return words[0] + words[1] + words[2];

        });

        //remove with space between the word in sentences
        value = value.replace(regExGlobal, (match, ...words) => {

            if (/\s{2,}/.test(words[0])) {
                words[0] = " ";
            }
            if (/\s{2,}/.test(words[2])) {
                words[2] = " ";
            }

            return words[0] + words[1] + words[2];

        });

        return value;
    }

    //if arabic or farsi numbers is not exist show console error, else show the char in english numbers.
    function callbackForNotEnglishNumbers(sourceArray, char, targetArray) {

        var index = sourceArray.indexOf(char);

        if (index !== -1) {

            return targetArray[index];

        } else {

            console.error("i can't find " + match + " in my numbers");

        }
    }

    //test patterns
    function testPattern(value) {
        value.replace(/(\s*)(\.)(\s*)/g, (match, s1, s2, s3) => {
            console.log(`Match is ${match}, before the Word is ${s1}, after world is ${s3}`)
        });
    }

    //-------------------------------------------------------

    function fixWithSpace(value) {

        //remove extra with space
        value = removeExtraWithSpace(value, 0);

        //remove extra with space between symbols and words
        value = fixSymbolsWithSpace(value, "\\.", "\\?", "\\!", ":", ":", ",", "،", ";", "؟", "؛", "\\.\\.\\.");
        
        return value;
    }

    function fixWithSpaceEn(value) {

        //remove extra with space
        value = removeExtraWithSpace(value, 1);

        //remove extra with space between symbols and words
        value = fixSymbolsWithSpace(value, "\\.", "\\?", "\\!", ":", ":", ",", "،", ";", "؟", "؛", "\\.\\.\\.");

        return value;

    }

    //change english symbols to farsi symbols
    function replaceSymbolsToFarsi(value) {

        value = value.replace(/\?/g, "؟");
        value = value.replace(/,/g, "،");
        value = value.replace(/;/g, "؛");

        return value;

    }

    //change farsi symbols to english
    function replaceSymbolsToEnglish(value) {

        value = value.replace(/؟/g, "?");
        value = value.replace(/،/g, ",");
        value = value.replace(/؛/g, ";");

        return value;

    }

    //change english numbers to farsi numbers
    function changeNumberToFarsi(value) {

        return value.replace(regExEnglishNumbers, (match) => farsiNumbers[Number(match)]);
    }

    //change english numbers to arabic numbers
    function changeNumberToArabic(value) {

        return value.replace(regExEnglishNumbers, (match) => arabicNumbers[Number(match)]);
    }

    //change arabic numbers to english numbers
    function arabicNumberToEnglish(value) {

        return value.replace(regExArabicNumbers, (match) => callbackForNotEnglishNumbers(arabicNumbers, match, englishNumbers));
    }

    //change farsi numbers to english numbers
    function farsiNumberToEnglish(value) {

        return value.replace(regExFarsiNumbers, (match) => callbackForNotEnglishNumbers(farsiNumbers, match, englishNumbers));

    }

    function farsiNumbersToArabic(value) {
        return value.replace(regExFarsiNumbers, (match) => callbackForNotEnglishNumbers(farsiNumbers, match, arabicNumbers));
    }

    function arabicNumbersToFarsi(value) {
        return value.replace(regExArabicNumbers, (match) => callbackForNotEnglishNumbers(arabicNumbers, match, farsiNumbers));
    }

}
