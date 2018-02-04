sectionColours = {
                  "Bio": "#D0CD94",
             "Projects": "#B0413E",
                "About": "#BAC7BE",
               "Fourth": "#548687",
              "Contact": "#FFCE79"
                  }

sectionText = {
              "Bio": "Currently studying at Makers Academy, Europe's leading webdev bootcamp. Fascinated by the wide world of web development, from front end to back end.",
         "Projects": "Here is a list of things from my github look how cool they are",
            "About": "#BAC7BE",
           "Fourth": "#548687",
          "Contact": "#FFCE79"

}

function displayNav(){
  expandNavSections('Bio')
  expandNavSections('Projects')
  expandNavSections('About')
  expandNavSections('Fourth')
  expandNavSections('Contact')
  $(".header-box").html("Nav")
  $("#Bio-title").html("<h3>Bio</h3>")
  $("#arrow").css({opacity: 0})
  fixbottomborder()
}

function displaySection(box){
  collapseSelection(box)
  $(`#${box}`).animate({height:'100%'})
  $(`#${box}`).css({
     "border-bottom-right-radius": "2vmin",
      "border-bottom-left-radius": "2vmin",
                        "padding": "2vmin"
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
  var boxes = ["Bio", "Projects", "About", "Fourth", "Contact"]
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
  var boxes = ["Bio", "Projects", "About", "Fourth"]
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
  $(`#${box}`).css({"backgroundColor": `${sectionColours[box]}`})
  $(`#${box}-title`).css({opacity: 0})
}

function sectionInnerText(box){
  $(`#${box}-text`).html(sectionText[`${box}`])
  $(`#${box}-text`).animate({opacity: 1})
}
