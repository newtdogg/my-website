sectionColours = {
                  "About": "#E39F41",
             "Projects": "#5C6FAA",
                "Blog": "#D05C8D",
               "Fourth": "#00A07E",
              "Contact": "#C591B8"
                  }

sectionPictures = {
        "About": "me.png",
   "Projects": "helmet1.png",
      "Blog": "book.png",
     "Fourth": "helmet2.png",
    "Contact": "phone.png"
  }

sectionText = {
              "About": "Currently studying at Makers Academy, Europe's leading webdev bootcamp. Fascinated by the wide world of web development, from front end to back end.",
         "Projects": "<div><h4><a href='https://github.com/newtdogg/poker-bot'>Big Brain</a> </h4> <div> \
         <div><p> A bot that can play heads up poker. Designed, tested and written from scratch</p></div> \
         <div><h4><a href='https://github.com/newtdogg/Makers-BnB'>EZsleep</a> </h4> <div> \
         <div><p> A website designed to emulate airBnB, front end and back end written in JavaScript, using nodeJs, expressJS, tested using mocha</p></div> ",
            "Blog": "<div>My Blog is currently under construction, however here is a blog I wrote during the two weeks of the final project at Makers:</div><p class='contactBody'><a href='https://pokerprogressioninjava.wordpress.com/'>Poker Progression in Java</a></p>",
           "Fourth": "#548687",
          "Contact": "<div><p class='contactTitle'>EMAIL:</p> <p class='contactBody'>edwardfrancisnewton@live.com</p></div> \
          <div><p class='contactTitle'>GITHUB:</p> <p class='contactBody'><a href='https://github.com/newtdogg/'>github.com/newtdogg</a></p></div>\
          <div><p class='contactTitle'>LINKEDIN:</p> <p class='contactBody'><a href='https://www.linkedin.com/in/edwardfrancisnewton/'>www.linkedin.com/in/edwardfrancisnewton</a></p></div>"
}

function displayNav(){
  expandNavSections('About')
  expandNavSections('Projects')
  expandNavSections('Blog')
  expandNavSections('Fourth')
  expandNavSections('Contact')
  $(".header-box").html("Nav")
  $("#About-title").html("<h3>About</h3>")
  $("#arrow").css({opacity: 0})
  fixbottomborder()
}

function displaySection(box){
  collapseSelection(box)
  $(`#${box}`).animate({height:'100%'})
  $(`#${box}`).css({
     "border-bottom-right-radius": "2vmin",
      "border-bottom-left-radius": "2vmin",
                        "padding": "2vmin",
                "backgroundColor": `${sectionColours[box]}`,
                        "opacity": "0.7"

  });
  if (box === "About") {
    $(`#header-box`).html(`${box} Me`)
  } else {
    $(`#header-box`).html(`${box}`)
  }
  changePicture(box)
  sectionInnerText(box)
  removeHover(box)
  // changeSectionClick(id)
}

function collapseSelection(box){
  var boxes = ["About", "Projects", "Blog", "Fourth", "Contact"]
  boxes.forEach(function(boxId){
    if(boxId != box){
      $(`#${boxId}`).animate({
        opacity: 0,
        height: 0,
      })
      $(`#${boxId}`).css({"border-top-width" : "0"})
    }
    fixbottomborder()
  })
}

function fixbottomborder(){
  var boxes = ["About", "Projects", "Blog", "Fourth"]
  boxes.forEach(function(boxId){
    $(`#${boxId}`).css({
       "border-bottom-right-radius" : "0",
       "border-bottom-left-radius" : "0"
    });
  })
}

function expandNavSections(box){
  $(`#${box}`).animate({
    height: "20%",
    opacity: 1,
  })
  $(`#images`).empty()
  $(`#${box}`).css({
    "border-top-width" : "0.6vmin",
              "padding": "0vmin"
  })
  $(`#${box}-title`).animate({opacity: 1})
  $(`#${box}-text`).empty()
  addHover(box)
}

function addHover(box){
  $(`#${box}`).mouseover(function() {
    $(this).css({"background-color": "white"});
    $(`#${box}-title`).css({"color": `${sectionColours[box]}`})
  }).mouseleave(function() {
     $(this).css({"background-color" : sectionColours[`${box}`]})
     $(`#${box}-title`).css({"color": "white"})
   });
}

function removeHover(box){
  $(`#${box}`).unbind('mouseover')
  $(`#${box}-title`).css({opacity: 0})
}

function sectionInnerText(box){
  $(`#${box}-text`).html(sectionText[`${box}`])
  $(`#${box}-text`).animate({opacity: 1})
}

function changePicture(box){
  if (box === "About"){
    $("#images").html(`<img src="./images/${sectionPictures[box]}"></div>`)
    $("#images").children('img').css({"bottom": "30%",
                      "left": "20%"})
  } else if (box === "Contact") {
    $("#images").html(`<img src="./images/${sectionPictures[box]}"></div>`)
    $("#images").children('img').css({bottom: "20%",
                        left: "25%",
                        "max-width": "60%"})
  } else {
    $("#images").html(`<img src="./images/${sectionPictures[box]}"></div>`)
    $("#images").children('img').css({bottom: "30%",
                      left: "20%",
                  })
  }
}
