$().ready(function() {
  $("button").click(function() {
    $("p#meow").prepend("<p>meow</p>");
    $("p#woof").prepend("<p>woof</p>");
  });
});
