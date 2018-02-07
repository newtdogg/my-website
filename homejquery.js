sectionColours = {
                  "About": "#E39F41",
             "Projects": "#5C6FAA",
                "Blog": "#D05C8D",
               "Fourth": "#00A07E",
              "Contact": "#C591B8"
                  }

sectionText = {
              "About": "Currently studying at Makers Academy, Europe's leading webdev bootcamp. Fascinated by the wide world of web development, from front end to back end.",
         "Projects": "Here is a list of things from my github look how cool they are",
            "Blog": "#BAC7BE",
           "Fourth": "#548687",
          "Contact": "#FFCE79"
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
