sectionColours = {"Bio": "#D0CD94",
             "Projects": "#B0413E",
                "About": "#BAC7BE",
               "Fourth": "#548687",
              "Contact": "#FFCE79"}

function displayNav(){
  expandNavSections('Bio')
  expandNavSections('Projects')
  expandNavSections('About')
  expandNavSections('Fourth')
  expandNavSections('Contact')
  $(".header-box").html("Nav")
  fixbottomborder()
}

function displaySection(box){
  collapseSelection(box)
  $(`#${box}`).animate({height:'100%'})
  $(`#${box}`).css({
     "border-bottom-right-radius" : "2vmin",
     "border-bottom-left-radius" : "2vmin"
  });
  if (box === "About") {
    $(`#header-box`).html(`${box} Me`)
  } else {
    $(`#header-box`).html(`${box}`)
  }
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
  $(`#${box}`).css({"border-top-width" : "0.6vmin"})
  addHover(box)
}

function addHover(box){
  $(`#${box}`).mouseover(function() {
    $(this).css({"background-color": "white"});
    $(`#${box}-text`).css({"color": `${sectionColours[box]}`})
    $(`#${box}-text`).animate({
      "opacity": 1
    })
  }).mouseleave(function() {
     $(this).css({"background-color" : sectionColours[`${box}`]})
     $(`#${box}-text`).css({"opacity": 0})
   });
}

function removeHover(box){
  $(`#${box}`).unbind('mouseover')
  $(`#${box}`).css({"backgroundColor": `${sectionColours[box]}`})
}
