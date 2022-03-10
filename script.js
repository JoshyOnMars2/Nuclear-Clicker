let energy = 0
let energyPc = 1
let energyPs = 0
let cost = 25
let cost2 = 100
let cost3 = 25
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById('upgradebtn').addEventListener("click", getUpgrade)
document.getElementById('upgradebtn2').addEventListener("click", getUpgrade2)
document.getElementById('upgradebtn3').addEventListener("click", getUpgrade3)

register()
function register(){
    document.getElementById("counter").innerHTML = energy
    document.getElementById("epc").innerHTML = energyPc
    document.getElementById("eps").innerHTML = energyPs
    document.getElementById("cost").innerHTML = cost
    document.getElementById("cost2").innerHTML = cost2
    document.getElementById("cost3").innerHTML = cost3
}

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
    register()
  } else {
    console.log("No..")
  }
}

function getUpgrade2(){
  if (energy >= cost2) {
    energyPc += 5
    energy = energy - cost2
    cost2 = Math.round(cost2 * 1.05)
    console.log("Item brought.")
    register()
  } else {
    console.log("No..")
  }
}

function getUpgrade3(){
  if (energy >= cost3) {
    energyPs += 1
    energy = energy - cost3
    cost3 = Math.round(cost3 * 1.05)
    console.log("Item brought.")
    register()
  } else {
    console.log("No..")
  }
}

window.setInterval(function(){
    energy += energyPs
    document.getElementById("counter").innerHTML = energy
    document.getElementById("eps").innerHTML = energyPs
}, 1000);

//Hi
