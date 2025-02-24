let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function handilPrayer1() {
  let countWindow = document.getElementById('count1')
  count1++
  countWindow.textContent = count1;
}
function handilPrayer2() {
  let countWindow = document.getElementById('count2')
  count2++
  countWindow.textContent = count2;
}
function handilPrayer3() {
  let countWindow = document.getElementById('count3')
  count3++
  countWindow.textContent = count3;
}
function handilPrayer4() {
  let countWindow = document.getElementById('count4')
  count4++
  countWindow.textContent = count4;
}

// let counts = {
//   count1: 0,
//   count2: 0,
//   count3: 0,
//   count4: 0
// }

// function countSeting() {
//   let count = JSON.stringify(counts);
//   localStorage.setItem("counts",count)
// }

// function getCounts() {
//   let getcount = localStorage.getItem("counts")
//   let pasedCount = JSON.parse(getcount)
//   console.log(pasedCount);
// }

// countSeting();
// getCounts();