// console.log("wqe");


// Browser API / Web API Gives us 

// Timer API = setTimeOut, setInterval 
// DOM API = FOr DOm manipulation
// Location = for url location 
// Storage API = Local and sessionStorageFetch (TO make netowrk calls)
// netowrk = HTTP/ HTTPS



// Chrome Uses => v8 engine
// v8 engine is built on top of C++ language 


//    NODE JS has below things 
//  - TimerAPI
//  - FIle FileSystem(Fs)
//  - HTTP

// --------------------------------------------------------------------- 

console.log("Hi");

setTimeout(()=>{
    console.count("Time one");
},2000)

setTimeout(()=>{
    console.count("Time two");
},2000)

console.log("after time");



// --------------------------------------------------------------------- // --------------------------------------------------------------------- 

1. Local Storage
✅ Description:
Stores data with no expiration.

Data persists even if the browser is closed and reopened.

📌 Characteristics:
Key-value pairs only (both stored as strings).

Up to 5–10MB depending on browser.

Accessible via window.localStorage.

📦 Example:
 
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); // "dark"
✅ Use cases:
Dark/light theme preference.

"Remember me" features.

Persisting app state across sessions.


--------------------------------------------------------------------------------------------

🧭 2. Session Storage
✅ Description:
Stores data per tab or browser session.

Data is cleared when the tab or browser is closed.

📌 Characteristics:
Key-value pairs.

Same size limits as Local Storage.

Accessible via window.sessionStorage.

📦 Example:
js
Copy
Edit
sessionStorage.setItem("step", "2");
const step = sessionStorage.getItem("step"); // "2"
✅ Use cases:
Multi-step forms (wizard flows).

Temporary state while navigating a page.

Tab-specific data.


---------------------------------------------------------------------------------------


3. Cookies
✅ Description:
Small data sent automatically with every HTTP request.

Can be made to expire, set as secure, or HttpOnly.

📌 Characteristics:
Max size ~4KB.

Used mostly for authentication/session management.

Can be accessed via document.cookie (unless HttpOnly).

Can be read by server (unlike Local/Session Storage).

📦 Example:
js
Copy
Edit
document.cookie = "user=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
✅ Use cases:
Auth tokens (especially if HttpOnly and Secure).

Tracking/logging in analytics.

Persistent login sessions.

================================================================================

Key Differences
Feature	                  Local Storage         	Session Storage	            Cookies
Lifetime	              Until manually cleared	Until tab/browser closed	Based on expires/max-age
Size Limit	              ~5–10 MB	                ~5–10 MB	                ~4 KB
Sent with requests?	      ❌ No	                   ❌ No	                     ✅ Yes
Accessible from JS        ✅ Yes           	       ✅ Yes	                 ✅ (unless HttpOnly)
Use in auth? 	          ❌ Not recommended	       ❌ Not recommended	     ✅ Common


 