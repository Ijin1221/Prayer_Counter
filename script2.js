let counts = {
  count1: 0,
  count2: 0,
  count3: 0,
  count4: 0
}

function setValues() {
  let count=JSON.stringify(counts);
  localStorage.setItem("counts",count)
}

function getValues() {
  let count = localStorage.getItem("counts")
  let getvalue= JSON.parse(count)
  console.log(getvalue);
}

setValues();
getValues();