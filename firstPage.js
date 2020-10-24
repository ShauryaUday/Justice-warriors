class firstpage{
    constructor(){
        this.title=createElement('h1');
        this.title.html("Justice Warriors");
        this.button=createButton('Create account');
        this.logIn=createButton('Log in');
    }
    display(){
        this.button.position(150,displayHieght/2);
        this.title.position(displayWidth/2,20);
        this.logIn.position(250,displayHieght/2);
        this.button.mousePressed(()=>{
        p2=new secondPage();
        })
    }
}