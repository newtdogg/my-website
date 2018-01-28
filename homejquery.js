function displayNav(){
  $("#nav-box").animate({width:'98%'})
  $("#bio-box").animate({
    width: "0",
    opacity: 0,
  })
  displayNavOptions()
}

function displaySections(id){
  $(`#${id}`)
}

function displayNavOptions() {
  $("#nav-box").html(
    `<div class='row navGrid'>
      <div id='1' class='col-sm-6'>
        <div class='navSelector'>HI</div>
      </div>
      <div id='2' class='col-sm-6'>
        <div class='navSelector'>HI</div>
      </div>
      <div class="bottomSelector">
        <div class='col-sm-6'>
          <div id='3' class='navSelector'>HI</div>
        </div>
        <div id='4' class='col-sm-6 '>
          <div class='navSelector'>HI</div>
        </div>
      </div>`
  )
  // $("#nav-box").css('padding', '10px')
}
