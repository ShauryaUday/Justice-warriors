class fifthpage{
    constructor(){
        this.title=createElement('h1');
        this.title.html("Report with just text");
        this.input=createInput("Write your Report here");
        this.submit=createButton('Submit');
        
    }
    display(){
        
        this.title.position(200,150);
        this.input.position(200,300);
        this.submit.position(220,388);
        this.submit.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.submit.hide();
        p7=new seventhPage();
        p7.display();

        }
        )
    }
}
