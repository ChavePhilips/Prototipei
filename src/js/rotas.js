var prev = document.getElementById('prev');
var next = document.getElementById('next');
var trak = document.getElementById('progress');
var step = document.getElementById('step');

next.addEventListener('click', function(){
	var cls = trak.className.split('-').pop();
	cls > 6 ? cls = 0 : cls++;
  
  step.innerHTML = cls;
	trak.className = 'progress-' + cls;
});

prev.addEventListener('click', function(){
	var cls = trak.className.split('-').pop();
	cls < 1 ? cls = 7 : cls--;
  
  step.innerHTML = cls;
	trak.className = 'progress-' + cls;
});