/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let b = false;

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const isMobile = function () {

    b = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    return b
};

b = isMobile();
console.log(b);
/*
if (b) {
    getData()
} else {
    getData1()
}

function getData1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let temp1 = this.responseText;

        }
    };
    xhttp.open("GET", "main", true);
    xhttp.send();
}

function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let temp1 = this.responseText;

        }
    };
    xhttp.open("GET", "mob", true);
    xhttp.send();
*/