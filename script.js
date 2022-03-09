let x = 0
let clicker = 1
let cost = 25
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById('upgradebtn').addEventListener("click", getUpgrade)
document.getElementById("counter").innerHTML = x
document.getElementById("epc").innerHTML = clicker
document.getElementById("cost").innerHTML = cost
function iterate(){
    x += clicker
    console.log(clicker,x)
    document.getElementById("counter").innerHTML = x
}

function getUpgrade(){
  if (x >= cost) {
    clicker += 1
    x = x - cost
    cost = Math.round(cost * 1.05)
    console.log("Item brought.")
    document.getElementById("counter").innerHTML = x
    document.getElementById("epc").innerHTML = clicker
    document.getElementById("cost").innerHTML = cost
  } else {
    console.log("No..")
  }
}
