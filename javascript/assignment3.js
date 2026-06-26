class vehicle{
    start(){
        console.log("vechicle stared");

    }
}
class bike extends vehicle{
    ride(){
        console.log("The bike stared moving");
    }
}
const bike=new Bike();
bike.start();
bike.ride();