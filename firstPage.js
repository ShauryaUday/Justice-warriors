class firstpage {
  constructor() {
    this.title = createElement("h1");
    this.title.html("Justice Warriors");
    this.button = createButton("Create account");
    this.logIn = createButton("Log in");
  }
  
  display() {
    this.button.position(1100, 60);
    this.title.position(550, 315);
    this.logIn.position(1200, 60);
    this.button.mousePressed(() => {
      this.button.hide();
      this.logIn.hide();
      p2 = new secondPage();
      p2.display();
    });
    this.logIn.mousePressed(() => {
      this.button.hide();
      this.logIn.hide();
      this.title.hide();
      p6 = new sixthpage();
      p6.display();
    });
  }
  
}
