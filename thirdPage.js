class thirdPage{
constructor(){
    this.logout=createButton('LOG OUT');
    this.report=createButton('Report');
}
display(){
    this.logout.position(320,490);
    this.report.position(610,490);
    this.logout.mousePressed(()=>{
    p1=new firstpage();
    this.logout.hide();
    this.report.hide();
    })
    this.report.mousePressed(()=>{
     p4= new fourthpage();
     p4.display();
    this.logout.hide();
    this.report.hide();
    }) 
}
}