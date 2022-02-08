var p = document.querySelector('p')
p.textContent = "new text"
p.innerHTML = "<strong> I am bold <\strong>"

var special = document.querySelector('#special')
var specialA = special.querySelector("a")
specialA.setAttribute('href', 'www.amazon.com')
