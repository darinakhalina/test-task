// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

$(window).on('scroll', animationSwitch);
function animationSwitch() {
  var target = $('.section-skills'),
    targetTop = target.offset().top - 400;

  if ($(this).scrollTop() >= targetTop) {
    drawProgress();

    $(window).off('scroll', animationSwitch)
  }
};

function drawProgress() {
var options = {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 4 },
  to: { color: '#ffe600', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (Math.round(circle.value() * 100) + ' %');
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
};
var bar1 = new ProgressBar.Circle('#progress-html', options);
bar1.text.style.fontFamily = '"Oswald", sans-serif';
bar1.text.style.fontSize = '2.1875em';
bar1.text.style.color = '#ffe600';
bar1.animate(0.9);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle('#progress-ps', options);
bar2.text.style.fontFamily = '"Oswald", sans-serif';
bar2.text.style.fontSize = '2.1875em';
bar2.text.style.color = '#ffe600';
bar2.animate(0.96);  // Number from 0.0 to 1.0

var bar3 = new ProgressBar.Circle('#progress-js', options);
bar3.text.style.fontFamily = '"Oswald", sans-serif';
bar3.text.style.fontSize = '2.1875em';
bar3.text.style.color = '#ffe600';
bar3.animate(0.85);  // Number from 0.0 to 1.0

var bar4 = new ProgressBar.Circle('#progress-photo', options);
bar4.text.style.fontFamily = '"Oswald", sans-serif';
bar4.text.style.fontSize = '2.1875em';
bar4.text.style.color = '#ffe600';
bar4.animate(0.94);  // Number from 0.0 to 1.0
}
//drawProgress();
