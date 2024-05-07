// // 

// const days = document.querySelector("#days");
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds")
// function UpdateTime(){
//     const currentDate = new Date();
//     console.log(currentDate);
    
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear+1);
    
//     const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
//     console.log(newYear);
    
//     const diff = newYear - currentDate ;
//     const d = Math.floor(diff/1000/60/60/24);
//     const h = Math.floor((diff/1000/60/60)%24);
//     const m = Math.floor((diff/1000/60)%60);
//     const s = Math.floor((diff/1000)%60);
//     days.innerHTML=d<10?"0"+d:d;
//     hours.innerHTML=h<10?"0"+h:h;
//     minutes.innerHTML=m<10?"0"+m:m;
//     seconds.innerHTML=s<10?"0"+s:s;
// };
// UpdateTime();
// setInterval(UpdateTime,1000);


// 
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function UpdateTime() {
    const currentDate = new Date();
    const newYear = new Date(currentDate);
    newYear.setDate(currentDate.getDate() + 1); // Set the target date to one day from the current date

    // Set the target date to May 8th at midnight
    newYear.setMonth(4); // Month index starts from 0 (0 for January, 1 for February, ..., 4 for May)
    newYear.setDate(8);
    newYear.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to midnight

    const diff = newYear - currentDate;
    
    // Calculate hours, minutes, and seconds left
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minsLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secLeft = Math.floor((diff % (1000 * 60)) / 1000);

    // Display hours, minutes, and seconds left
    hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerHTML = minsLeft < 10 ? "0" + minsLeft : minsLeft;
    seconds.innerHTML = secLeft < 10 ? "0" + secLeft : secLeft;
}

UpdateTime();
setInterval(UpdateTime, 1000);
