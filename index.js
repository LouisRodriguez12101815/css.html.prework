//links that have influenced this project

//https://youtu.be/W6NZfCO5SIk?si=EnhkfSWGE8rMY-9p

//https://youtu.be/dX8396ZmSPk?si=PlQuYioH1LbIxs8R

//https://stackoverflow.com/questions/71058698/how-do-i-add-a-hyperlink-in-my-text-using-javascript

//https://youtube.com/shorts/wJcCfAgoraI?si=5Hsd8Bpyx5m6Ovsc
//https://haveibeenpwned.com/

// create anchor link element
let link = document.createElement("a")

// Create txt
let txt = document.createTextNode("Medium Post")

//append txt to anchor element
link.appendChild(txt)

// set the title
link.title ="Medium Post";

// set the href property
link.href = "https://www.medium.com";

// get text to add link to
let el = document.getElementById("p")

// append the link to the el id = "p"
el.appendChild(link)
<div class="textDescription">
  <p id="p">blah blah blah blah blah blah blah blah blah blah </p>
</div>
