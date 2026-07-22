(function () {
  // Duplicate ticker items for seamless infinite loop
  var track = document.querySelector('.ticker__track');
  if (!track) return;
  var items = Array.from(track.children);
  items.forEach(function (item) {
    track.appendChild(item.cloneNode(true));
  });
})();
