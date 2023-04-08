let clickBtn = document.querySelector('.click-btn')
let progressBar = document.querySelector('.progress-bar')
var progress = 0;
//click increase progress
// clickBtn.addEventListener('click', ()=> {
//     progress+=10; 
//     progressBar.style.width = progress+"%";
//     progressBar.innerHTML =  progress+"%"
//     if(progress==100) {
//         clickBtn.classList.add('disabled')
//     }
// })
//agter 2s increase progress
let isLoading = true;
let intervalId = setInterval(()=> {
    progress+=10;
    progressBar.style.width = progress+"%";
    progressBar.innerHTML =  progress+"%";
    if (progress === 100) {
        clearInterval(intervalId)
      }

}, 2000)

