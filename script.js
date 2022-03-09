let energy = 0
let energyPc = 1
let cost = 25
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById('upgradebtn').addEventListener("click", getUpgrade)
document.getElementById("counter").innerHTML = energy
document.getElementById("epc").innerHTML = energyPc
document.getElementById("cost").innerHTML = cost
function iterate(){
    energy += energyPc
    console.log(energyPc,energy)
    document.getElementById("counter").innerHTML = energy
}

function getUpgrade(){
  if (energy >= cost) {
    energyPc += 1
    energy = energy - cost
    cost = Math.round(cost * 1.05)
    console.log("Item brought.")
    document.getElementById("counter").innerHTML = energy
    document.getElementById("epc").innerHTML = energyPc
    document.getElementById("cost").innerHTML = cost
  } else {
    console.log("No..")
  }
}
