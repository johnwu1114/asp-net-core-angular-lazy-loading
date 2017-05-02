This repository is sample code for ASP.NET Core & Angular 4 (Angular 2) SPA.  
Use the Visual Studio 2017 to development.  

# ASP.NET Core + Angular 4 教學 - Lazy Loading

介紹 Angular 4 的 Lazy Loading，避免寫 SPA 程式越做越大，啟動時載入全部的 JavaScript 檔很累贅又恨慢。  
比較好的做法是用到什麼功能，再載入當下用到 Module 的 JavaScript 檔案，節省載入時間。  
[ASP.NET Core + Angular 4 教學 - Lazy Loading](https://blog.johnwu.cc/article/asp-net-core-angular-4-教學-lazy-loading.html)

程式碼延續之前範例：  
[ASP.NET Core + Angular 4 教學 - Multiple Modules](/article/asp-net-core-angular-4-教學-multiple-modules.html)  

Routing不熟悉的話，請先參考：  
[ASP.NET Core + Angular 4 教學 - Routing](https://blog.johnwu.cc/article/asp-net-core-angular-4-教學-routing.html)

## 說明

安裝軟體的部分我就沒有詳細介紹，以下是我使用到的工具跟語言。

開發工具：
1. Visual Studio 2017 (可使用其他版，只要有支援 ASP.NET Core 開發就可以。)
2. Nodejs 6.9.x 以上版本 及 npm 3 以上版本

開發語言：
1. .NET Core 使用 C#
2. Angular 4 使用 TypeScript

下載範例後記得在專案目錄安裝 npm package

``` batch
npm install
```
