var parent = document.getElementById("container");
// SITE NAME
var topPage = document.createElement("header");
var logo = document.createElement("h1");
logo.innerHTML = "HighOnCode";

// // NAVBAR
function buildNav() {
    var navigation = document.createElement("nav");
    var navUl = document.createElement("ul");

    ["Home, Categories, About"].forEach(item => {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = item;
        li.appendChild(link);
        navUl.appendChild(li);
    }
    );
    
    navigation.appendChild(navUl);
    topPage.appendChild(logo);
    return navigation;
}

var navigation = buildNav();
topPage.appendChild(navigation);

parent.appendChild(topPage);



// FIRST HEADER
var header1 = document.createElement("h1");
var node = document.createTextNode("Curse of the Current Reviews");
header1.appendChild(node);
parent.appendChild(header1);


// HEADER PARAGRAPH
var para1 = document.createElement("p");
var paranode = document.createTextNode("When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.");
para1.appendChild(paranode);
header1.appendChild(para1);


// WATCHKIT HEADER
var header2 = document.createElement("h2");
var node2 = document.createTextNode("Hello WatchKit");
header2.appendChild(node2);
parent.appendChild(header2)

// WATCHKIT PARAGRAPH
var para2 = document.createElement("p");
para2.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
header2.appendChild(para2);

// COMMENTS AND LIKES #1
var comment1 = document.createElement("p");
comment1.innerHTML = "12 comments      124 Likes"
header2.appendChild(comment1);

// SWIFT HEADER
var header3 = document.createElement("h2");
var node3 = document.createTextNode("Introduction to Swift");
header3.appendChild(node3);
parent.appendChild(header3);

// SWIFT PARAGRAPH
var para3 = document.createElement("p");
para3.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
header3.appendChild(para3);

// COMMENTS AND LIKES #2
var comment2 = document.createElement("p");
comment2.innerHTML = "15 comments      45 Likes"
header3.appendChild(comment2);