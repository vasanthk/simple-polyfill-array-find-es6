# Simple polyfill for array.find() from ES6
Just wanted to write a polyfill... that's it :)

###Shim
A shim is code that intercepts existing API calls and implements different behavior. The idea here is to normalize certain APIs across different environments. So, if two browsers implement the same API differently, you could intercept the API calls in one of those browsers and make its behavior align with the other browser. Or, if a browser has a bug in one of its APIs, you could again intercept calls to that API, and then circumvent the bug.

###Polyfill
A polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will. Thus, a polyfill is a shim for a browser API. You typically check if a browser supports an API and load a polyfill if it doesn’t. That allows you to use the API in either case.

###Similarities Between Polyfill and Shim
* Both seek to normalize functionality across browsers
* Both tend to extend native methods, opting for their own implementation when the native method does not exist.

###Differences Between Polyfill and Shim
* Shims tend to be written in a single language
* Polyfills tend to use multiple language platforms to achieve the aim of cross-browser normalization. Polyfills often have to use multiple language platforms because sometimes a particular JavaScript API doesn’t exist in that browser at all.


###Read more:
https://remysharp.com/2010/10/08/what-is-a-polyfill

http://addyosmani.com/blog/writing-polyfills/

http://www.codeproject.com/Articles/369858/Writing-polyfills-in-Javascript

http://blog.respoke.io/post/111278536998/javascript-shim-vs-polyfill





