# Mirza
Eliminates the extra white space, converts symbols and numbers into Persian, English, and Arabic into one another.

## Getting Started

Download the mirza.js file and add to your html page.

## Examples
Convert english numbers to farsi:
Use the changeNumberToFarsi() function to convert numbers from English into Persian.

```
// سلام شماره تلنن بنده 09255863569825 است.

 var mirza = Mirza();
 textArea.value = mirza.changeNumberToFarsi(textArea.value);
 
 // result: سلام شماره تلنن بنده ۰۹۲۵۵۸۶۳۵۶۹۸۲۵ است. 
```
Convert english numbers to Arabic:
Use the changeNumberToArabic() function to convert numbers from English into Arabic.
```
// سلام شماره تلنن بنده 03447593864 است.

  var mirza = Mirza();
  textArea.value = mirza.changeNumberToArabic(textArea.value);

// result: سلام شماره تلنن بنده ٠٣٤٤٧٥٩٣٨٦٤ است. 
```

Convert Farsi numbers to English:
Use the farsiNumberToEnglish() function to convert numbers from Farsi into English.

```
// Hello ۵۴۵۴۳۲۵۲۴۳۵ what؟

 var mirza = Mirza();
 textArea.value = mirza.farsiNumberToEnglish(textArea.value);

// result: Hello 54543252435 what 
```
Convert Arabic numbers to English:
Use the arabicNumberToEnglish() function to convert numbers from Arabic into English.

```
// Hello ٥٤٥٤٣٢٥٢٤٣٥ what 

 var mirza = Mirza();
 textArea.value = mirza.arabicNumberToEnglish(textArea.value);

// result: Hello 54543252435 what 
```
You can use arabicNumbersToFarsi() and farsiNumberToArabic() methods to convert Arabic to Farsi and Farsi into Arabic.

```
 var mirza = Mirza();

 //change arabic numbers to farsi
 textArea.value = mirza.arabicNumbersToFarsi(textArea.value);

 //change farsi numbers to arabic
 textArea.value = mirza.farsiNumberToArabic(textArea.value);

```
Remove extra with space: 

```
//  سلام نام من ،    پوریا است  .   

 var mirza = Mirza();
 textArea.value = mirza.fixWithSpace(textArea.value);

// سلام نام من، پوریا است.

```
Remove extra with space for englishe sentences:
```
// Hello   my   name! is    what ? me

 var mirza = Mirza();
 textArea.value = mirza.fixWithSpaceEn(textArea.value);

// Hello my name! is what? me

```
Replace some symbols:

```
 var mirza = Mirza();
 //replace ? , ; ! to ؟ ! ، ؛
 textArea.value = mirza.replaceSymbolsToFarsi(textArea.value);

 // replace ؟ ! ، ؛ to ? , ; !
 textArea.value = mirza.replaceSymbolsToEnglish(textArea.value);
```
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
