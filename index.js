var dialog = document.querySelector("dialog");
var login = document.querySelector("#login");
var buttonClose = document.querySelector("#close");
var buttonLogin = document.querySelector("#loginButton");
var search = document.querySelector("#search");
var posts = document.querySelector("#posts");
var searchImages = document.getElementsByClassName('img');

var images = [];
var postImages = [];

images[0] = "https://images.unsplash.com/photo-1563159624-71c21282ec79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";
images[1] = "https://images.unsplash.com/photo-1560920451-b624ff4179a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";
images[2] = "https://images.unsplash.com/photo-1561584058-474ee2be01ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";
images[3] = "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";
images[4] = "https://images.unsplash.com/photo-1561777517-86fb4bfad6c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";
images[5] = "https://images.unsplash.com/photo-1561483534-fdac422f463b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=640&ixlib=rb-1.2.1&q=80&w=640";

postImages[0] = "https://source.unsplash.com/640x640/weekly?ocean";
postImages[1] = "https://source.unsplash.com/640x640/weekly?water";
postImages[2] = "https://source.unsplash.com/640x640/weekly?sea";
postImages[3] = "https://source.unsplash.com/640x640/weekly?fire";
postImages[4] = "https://source.unsplash.com/640x640/weekly?vulcano";
postImages[5] = "https://source.unsplash.com/640x640/weekly?magma";


login.addEventListener("click", function () {
    dialog.showModal();
});

buttonClose.addEventListener("click", function () {
    dialog.close();
});
buttonLogin.addEventListener("click", function () {
    dialog.close();
    document.getElementById('text').value = '';
});

search.addEventListener("click", function () {
    for (let i = 0; i < searchImages.length - 1; i++) {
        searchImages[i].src = images[i];
    }
});

posts.addEventListener("click", function () {
    for (let i = 0; i < searchImages.length - 1; i++) {
        searchImages[i].src = postImages[i];
    }
});

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.PORT || 3000;

const readFile = (url, response) => {
    fs.readFile(url, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            response.statusCode = 204;
            response.end(JSON.stringify(err));
        } else {
            console.log(url);
            response.writeHead(200);
            response.end(data);
        }
    });
};

const server = http.createServer(function (request, response) {
    const path = url.parse(request.url, true).pathname.replace(/^\/+|\/+$/g, '');
    readFile(path, response);
});

server.listen(port);
console.log(`server started on ${port} port`);
