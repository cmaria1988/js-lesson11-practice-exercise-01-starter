const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function(type, numWheels, color){
    const vehicle={
        type : type,
        numWheels :numWheels,
        color:color 
    }
    return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("motorbike", 2, "black");
const skateboard = createVehicle("plane", 4, "white");

const myVehicles = [car, bike, skateboard];

for(vehicle of myVehicles){
    for(let key in vehicle){
        console.log(key, vehicle[key]);
    }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function(){
    repairList.innerHTML = "";
    
    const vehicleRepairList = myVehicles.filter(function(vehicle){
        return vehicle.needsRepair === true;
    });

    for(let vehicle of vehicleRepairList){
        let li = document.createElement("li");
        li.innerHTML = `My <span>${vehicle.type} need some 💜</span>`
        repairList.append(li);
    }
});