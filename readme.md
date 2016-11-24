# Goals

| Goals                                                                                          | Points   |
|------------------------------------------------------------------------------------------------|----------|
| Install the boilerplate extension in Edge                                                      | +10 pts  |
| Convert the Make page Red extension                                                            | +25 pts  |
| Create a Translate Page extension                                                              | +100 pts |
| Add context menu functionality to search a word directly in Bing/Google                        | +50 pts  |
| Add configuration page to your extension                                                       | +50 pts  |
| Create an extension making use of an external API (e.g. doing sentiment analysis on a webpage) | +220 pts |

# API Reference
https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/api-support/supported-apis/
https://developer.chrome.com/extensions/devguide

# Chrome vs. Edge
Protip! You can often use documentation for Chrome extensions because Edge extensions are very similar. You will find more code examples for Chrome than for Edge. Biggest difference? The global `chrome` object in Chrome is replaced by the global `browser` object in Edge. T

Example in Chrome
```js
chrome.tabs.getCurrent(function(currentTab) { ... });
```

Example in Edge
```js
browser.tabs.getCurrent(function(currentTab) { ... });
```

The `chrome` and `browser` objects have a very similar public API that is often the same.

Microsoft provides optional shims for Chrome APIs so that code written for Chrome can work in Edge with only minimal effort.

You can install the shims into your project using the Edge Extension toolkit.  
https://www.microsoft.com/en-us/store/p/microsoft-edge-extension-toolkit/9nblggh4txvb

# Pointers

Anatomy of a WebExtension  
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension

Boiler plate for #1 & #2  
https://aka.ms/hledge

Extension Toolkit – Porting an extension from Chrome to Microsoft Edge  
https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/guides/porting-chrome-extensions/

Edge extension API support  
https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/api-support/

Edge extension guides  
https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/guides/

API Support (Browser Actions, Context Menu, Cookies)  
https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/api-support/supported-apis/

Cognitive Services (External APIs)  
https://www.microsoft.com/cognitive-services

Sensitivity analysis  
https://www.microsoft.com/cognitive-services/en-us/text-analytics-api

VM  
https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
