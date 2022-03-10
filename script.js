let energy = 0
let energyPc = 1
let cost = 25
let cost2 = 100
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById('upgradebtn').addEventListener("click", getUpgrade)
document.getElementById('upgradebtn2').addEventListener("click", getUpgrade2)

register()
function register(){
    document.getElementById("counter").innerHTML = energy
    document.getElementById("epc").innerHTML = energyPc
    document.getElementById("cost").innerHTML = cost
    document.getElementById("cost2").innerHTML = cost2
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

window.setInterval(function(){
	
	energy += 1
	
}, 1000);

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

//Hi
