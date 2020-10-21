class A{
    hoten:string;
}

class B extends A{   //B ke thua A
    namsinh:number
}

var nam:A = new A();       // nam co thuoc tinh hoten
nam.hoten = "Hoang Nam";

var nu:B = new B();      //B co thuoc tinh hoten va namsinh
nu.hoten = "Hoang Nu";
nu.namsinh = 2000;

console.log(nam);