class secondPage{
    constructor(){
        this.title=createElement('h1');
        this.title.html("Pls fill ur info to proceed");
        this.register=createButton('Register');
        this.input=createInput("Enter ur email address");
        this.password=createInput("Fill in a password for your account");
    
    }
    display(){
    this.title.position(200,150);
    this.register.position(300,150);
    this.input.position(200,180);
    this.password.position(200,200);
    this.register.mousePressed(()=>{
    p3=new thirdPage();
    })
    }
}