$(function() {
  const $btn = $("header > .hmnu2 > .lang > li > a > img ")
  const $box = $("header > .hmnu2 > .lang > li > ol > li")

  $btn.on("click", function() {
    $box.toggle()
  })
})
