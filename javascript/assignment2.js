class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    details(){
        console.log('brand: ${this.brand},model:${this.model}');

    }
}
const car1=new car("Totota","Fortuner");
car1.details();