let titleContainer = document.querySelector('.title')

let title = document.querySelector('#main_title')
let titleArray = ['Hi', 'Hungry,', "I'm", 'Dad!']
let i = 0

setInterval(addTitleWords, 500)

let titleSoFar = '';
function addTitleWords() {
    if (i<titleArray.length){
        title.textContent = `${titleSoFar} ${titleArray[i]}`;
        titleSoFar = title.textContent;
        i++;
    }
}