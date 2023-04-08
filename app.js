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
//agter 2s increase progress and change bg color
let isLoading = true;
let intervalId = setInterval(()=> {
    value+=10;
    progressBar.style.width = value+"%";
    progressBar.innerHTML =  value+"%";
    if(value<30) {
        progressBar.classList.add('bg-danger')

    }else if(value >=30 && value <70) {
        progressBar.classList.remove('bg-danger')
        progressBar.classList.add('bg-warning')
    }else{
        progressBar.classList.remove('bg-warning')
        progressBar.classList.add('bg-success')
    }
    if (value === 100) {
        clearInterval(intervalId)
      }

}, 2000)
