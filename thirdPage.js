class thirdPage{
constructor(){
    this.title=createElement('h1');
    this.title.html("Justice Warriors");
    this.logout=createButton('LOG OUT');
    this.report=createButton('Report');
}
display(){
    this.title.position(150,200);
    this.logout.position(displayWidth/-100,200);
    this.report.position(200,200);
    this.logout.mousePressed(()=>{

    })
    this.report.mousePressed(()=>{
     
    }) 
}
}