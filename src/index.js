import homeContent from './home.js'
import aboutContent from './about.js'
console.log('HELLO ITS WORKING')

const init = (function () {
   homeContent()
})();


document.getElementById('btn__about').addEventListener('click', aboutContent)
document.getElementById('btn__home').addEventListener('click', homeContent)
