document.addEventListener('DOMContentLoaded', function () {
  var timelineBlocks = document.querySelectorAll('.cd-timeline-block');
  var revealThreshold = 0.75;

  function revealTimelineBlocks() {
    var viewportBottom = window.scrollY + (window.innerHeight * revealThreshold);

    timelineBlocks.forEach(function (block) {
      var icon = block.querySelector('.cd-timeline-img');
      var content = block.querySelector('.cd-timeline-content');
      if (!icon || !content) {
        return;
      }

      if (block.offsetTop <= viewportBottom && icon.classList.contains('is-hidden')) {
        icon.classList.remove('is-hidden');
        content.classList.remove('is-hidden');
        icon.classList.add('bounce-in');
        content.classList.add('bounce-in');
      }
    });
  }

  timelineBlocks.forEach(function (block) {
    if (block.offsetTop > window.scrollY + (window.innerHeight * revealThreshold)) {
      var icon = block.querySelector('.cd-timeline-img');
      var content = block.querySelector('.cd-timeline-content');
      if (icon && content) {
        icon.classList.add('is-hidden');
        content.classList.add('is-hidden');
      }
    }
  });

  window.addEventListener('scroll', revealTimelineBlocks);

  var moreButton = document.getElementById('moreButton');
  var aboutSection = document.getElementById('about');
  if (moreButton && aboutSection) {
    moreButton.addEventListener('click', function () {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
