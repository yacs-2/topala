/** THis script will inject the global header into th #gheader div of each page**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Nicolae\'s Site</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/topala">Home</a></li><li>Photos<ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li>Projects<ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li>music<ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/topala/web-dev">Web Development</a><ul><li><a href="/topala/wdsub/week1.html">Week Submission 1</a></li><li><a href="/topala/wdsub/recipe.html">Week Submission 2</a></li><li><a href="/topala/wdsub/anchors.html">Week Submission 3</a></li><li><a href="/topala/wdsub/poem.html">Week Submission 4</a></li><li><a href="/topala/wdsub/reviews.html">Week Submission 5</a></li><li><a href="/topala/wdsub/journal.html">Week Submission 6</a></li><li><a href="/topala/wdsub/band-page.html">Week Submission 7</a></li><li><a href="/topala/wdsub/list-maker.html">Week Submission 8</a></li><li><a href="#">Week Submission 9</a></li></ul></li></ul></div>'

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
