// collect information about the user's browser
const userAgent = navigator.userAgent;
let browserName = "Unknown";

if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
   browserName = "Google Chrome";
}
else if (userAgent.includes("Firefox")) {
   browserName = "Mozilla Firefox";
}
else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
   browserName = "Apple Safari";
}
else if (userAgent.includes("Edg")) {
   browserName = "Microsoft Edge";
}
else if(userAgent.includes("OPR") || userAgent.includes("Opera")) {
   browserName = "Opera";
}
else if(userAgent.includes("Trident") || userAgent.includes("MSIE")) {
   browserName = "Internet Explorer";
}

const versionMatch = userAgent.match(/(Chrome|Firefox|Safari|Edg|OPR|Opera|Trident|MSIE)\/(\d+)/);
const browserVersion = versionMatch ? versionMatch[2] : "Unknown";

// collect information about the user's device
let os = "Unknown";

if (userAgent.includes("Windows NT")) {
   os = "Windows";
}
else if (userAgent.includes("Mac OS X")) {
   os = "macOS";
}
else if (userAgent.includes("Linux")) {
   os = "Linux";
}

const screenWidth = screen.width;
const screenHeight = screen.height;
const availableScreenWidth = screen.availWidth;
const availableScreenHeight = screen.availHeight;

const now = new Date();

const date = now.toLocaleDateString(`fi-FI`, {
   day: 'numeric',
   month: 'long',
   year: 'numeric'
});

const time = now.toLocaleTimeString(`fi-FI`, {
   hour: '2-digit',
   minute: '2-digit'
});

// render the collected information to the page
const target = document.querySelector('#target');

target.innerHTML = `
   <p>Browser: ${browserName} ${browserVersion}</p>
   <p>Operating system: ${os}</p>
   <p>Screen size: ${screenWidth} x ${screenHeight}</p>
   <p>Available space: ${availableScreenWidth} x ${availableScreenHeight}</p>
   <p>Date: ${date}</p>
   <p>Time: ${time}</p>
`;
