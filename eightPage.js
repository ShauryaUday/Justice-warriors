class eightPage {
  constructor() {
    this.input = createFileInput(handleFile);
    this.input.position(450,450);
  }

}
function handleFile(file) {
  print(file);
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
  } else {
    img = null;
  }
}