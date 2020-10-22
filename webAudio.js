var oscillator;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context;

document.querySelector("#button1").addEventListener('click', function() {
  context = new AudioContext();
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 440;
  oscillator.type = "triangle"; // "sine", "square", "sawtooth", "triangle"
  oscillator.start();

});
document.querySelector("#button2").addEventListener('click', function() {
  context = new AudioContext();
  oscillator.stop();

});