class Parents{
    constructor(){
        this.fatherName = "Juntu";
    }
}


class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Jewel");
console.log(baby);