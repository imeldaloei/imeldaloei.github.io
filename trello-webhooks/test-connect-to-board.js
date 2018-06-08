var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.trello.com/1/boards/5ae78bd40518a0ccfdd7026a?key=4acd1a952c7f20dfeaa556f8f7236a5f&token=440c72ede07ae4b3b61ba3c2567baf39189ae15359dcf9700c49615c24589f57");

xhr.send(data);
