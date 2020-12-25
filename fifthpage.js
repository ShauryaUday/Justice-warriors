class Fifthpage{
    constructor(){
        this.title=createElement('h1');
        this.title.html("Report with just text");
        this.input=createInput("Write your Report here");
        this.submit=createButton('Submit');
    } 
    display(){
        this.title.position(200,150);
        this.input.position(200,200);
        this.submit.position(200,300);
    }
}
