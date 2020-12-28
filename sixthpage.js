class sixthpage{
constructor(){
    this.title2=createElement('h1');
    this.title2.html("Justice Warriors");
    this.email=createInput("Your email here");
    this.passwd=("Your password here");
    this.idk=createButton("Log in");
}
display(){
    this.title2.position(displayWidth/2,40);
    this.email.position(370,380);
    this.passwd.position(370, 380);
    this.idk.position(650,450);
    this.idk.mousePressed(()=>{
this.title2.hide();
this.email.hide();
this.idk.hide();
this.passwd.hide();
p2 = new secondPage();
        

    })

}

















}