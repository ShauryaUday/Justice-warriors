class fourthpage{
  constructor(){
      this.title=createElement('h1');
      this.title.html("Report");
      this.justwrite=createButton('Just Write(1point)');
      this.button2=createButton('Write and pic(2points)');
      this.button3=createButton('Write+pic+Action taken(4points)');

  }
 display(){
    this.justwrite.position(150,200);
    this.button2.position(350,200);
    this.button3.position(550,200);
    this.title.position(660,60);
    this.justwrite.mousePressed(()=>{ 
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    p5 = new fifthPage();
    p5.display();
   }) 
   this.button2.mousePressed(()=>{
  
   })
   this.button3.mousePressed(()=>{
     
   })

 }
}