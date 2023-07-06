## JavaScript Chapter 13
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 13
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. Built-in Functions
        內建函數
        string.toLowerCase()
        Math.random();

###  3. Functions are reusable code blocks
        內建函數的特性

###  4. Function Declaration Syntax
        函數宣告語法

###  5. Creating a Basic Function: sum()
        建立 sum() 函數，回傳 2 + 2

###  6. Calling a Function into action
        呼叫函數

###  7. Passing Parameters to a Function
        新增參數 num1 和 num2，並回傳num1 + num2，設定 num1 為 2，num2 為 6

###  8. Creating Reusable Code with Functions
        新增 num1 和 num2 的結果，可以確認是否有遺失值

###  9. Missing Parameters
        如果 num2 未提供參數，遺失參數會回傳 undefined，函數會回傳 NaN

### 10. Handling Missing Parameters
        透過設定 num2 為 undefined 回傳 num1 + num1，來掌控遺失的參數
        (1)設定 num1 為 2，回傳結果為 4
        (2)設定 num1 為 2，回傳結果為 10
        (3)設定 num1 為 2，num2 為 10，回傳結果為 15

### 11. Another Function Example: getUserNameFromEmail()
        建立 getUserNameFromEmail() 函數，參數為 email，使用 slice() 回傳信箱@前的名稱 playerOne


### 12. Is it reusable? Yes!
        回傳 user

### 13. Anonymous Functions
        將原本函數 function name(params) {}; 修改為 const name = function (params) {};

### 14. Arrow Functions
        將 Anonymous Functions 修改為 const name = (params) => {};

### 15. Creating One More Function: toProperCase()
        (1)將 dAvE 回傳為合適的名字格式 Dave: 使用 string.charAt() 選取第一個英文字母，string.toUpperCase()將第一個英文字母轉換為大寫字母，string.slice()選取其他英文字母，string.toLowerCase(2)將其他英文字母轉換為小寫字母。
        (3)結語