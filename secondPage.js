class secondPage{
    constructor(){
        this.title=createElement('h1');
        this.title.html("Pls fill ur info to proceed");
        this.register=createButton('Register');
        this.input=createInput("Enter ur email address");
        this.password=createInput("Fill in a password for your account");
    }
    display(){
    this.title.position(670,25);
    this.register.position(1000,240);
    this.input.position(1000,160);
    this.password.position(1000,200);
    this.register.mousePressed(()=>{
    this.input.hide();
    this.password.hide();
    this.register.hide();
    this.title.hide();
    p3=new thirdPage();
    p3.display();
    
    })
    }
}