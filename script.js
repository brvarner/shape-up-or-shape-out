// Grabbing shape container
let shapeHolder = document.getElementById("shape-canvas");

// Grabbing Shape Info Display's Entries
let shName = document.getElementById("shape-name");
let shWidth = document.getElementById("shape-width");
let shHeight = document.getElementById("shape-height");
let shRad = document.getElementById("shape-radius");
let shArea = document.getElementById("shape-area");
let shPer = document.getElementById("shape-perimeter");

// Rectangle Form and Button
let recForm = document.getElementById("rec-form");
let recWidth = document.getElementById("rec-width");
let recHeight = document.getElementById("rec-height");
let recBtn = document.getElementById("rec-btn");

// Square Form and Button
let sqForm = document.getElementById("sq-form");
let sqLength = document.getElementById("sq-length");
let sqBtn = document.getElementById("sq-btn");

// Circle Form and Button
let cirForm = document.getElementById("cir-form");
let cirRadius = document.getElementById("cir-rad");
let cirBtn = document.getElementById("cir-btn");

// Isoceles Form and Button
let isoForm = document.getElementById("iso-form");
let isoHeight = document.getElementById("iso-height");
let isoBtn = document.getElementById("iso-btn");

// Random Number Generator for Randomly positioning elements in shape container
let randPos = Math.floor(Math.random() * 600 + 1);

// Creating Shape Class
class Shape {
  constructor() {
    this.newShape = document.createElement("div");
    shapeHolder.appendChild(this.newShape);
    this.build();
    this.newShape.addEventListener("click", () => this.describe());
    this.newShape.addEventListener("dblclick", (e) => this.eraser(e));
  }

  // Adding Method to Position Shape Randomly in container
  build() {
    this.newShape.style.position = "absolute";
    // The random positioner has to be redeclared for every position
    // to get a fresh number each time
    randPos = Math.floor(Math.random() * 500 + 1);
    this.newShape.style.top = `${randPos}px`;
    randPos = Math.floor(Math.random() * 500 + 1);
    this.newShape.style.left = `${randPos}px`;
    randPos = Math.floor(Math.random() * 500 + 1);
    this.newShape.style.right - `${randPos}px`;
    randPos = Math.floor(Math.random() * 500 + 1);
    this.newShape.style.bottom - `${randPos}px`;
  }

  //Creating Describe Method
  describe() {}

  eraser(e) {
    this.newShape.remove(e);
    shName.value = null;
    shArea.value = null;
    shRad.value = null;
    shWidth.value = null;
    shHeight.value = null;
    shPer.value = null;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    radius = `${cirRadius.value}`;
    this.radius = radius;
    this.circler();
    cirRadius.value = "";
  }

  describe() {
    shName.value = "Circle";
    shArea.value = `${Math.PI * this.radius ** 2}`;
    shRad.value = `${this.radius}`;
    shWidth.value = `N/A`;
    shHeight.value = `N/A`;
    shPer.value = `${Math.PI * (this.radius * 2)}`;
  }

  circler() {
    this.newShape.style.height = `${this.radius * 2}px`;
    this.newShape.style.width = `${this.radius * 2}px`;
    this.newShape.setAttribute("class", "circle");
  }
}

class Triangle extends Shape {
  constructor(height) {
    super();
    height = `${isoHeight.value}`;
    this.height = height;
    this.triangler();
    isoHeight.value = "";
  }

  describe() {
    shName.value = "Triangle";
    let triStateArea = this.height ** 2 / 2;
    shArea.value = `${triStateArea}`;
    shRad.value = `N/A`;
    shWidth.value = `${this.height}`;
    shHeight.value = `${this.height}`;
    // Calculating Hypotenuse and Then Adding to Height and Base to Find Perimeter
    let hypCal = this.height ** 2 + this.height ** 2;
    let hyp = Math.sqrt(hypCal);
    let perCal = this.height * 2 + hyp;
    shPer.value = `${perCal}`;
  }

  triangler() {
    this.newShape.style.height = `${this.height}px`;
    this.newShape.style.width = `${this.height}px`;
    this.newShape.setAttribute("class", "triangle");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    width = `${recWidth.value}`;
    height = `${recHeight.value}`;
    this.width = width;
    this.height = height;
    this.rectangler();
    recWidth.value = "";
    recHeight.value = "";
  }

  describe() {
    shName.value = "Rectangle";
    shArea.value = `${this.height * this.width}`;
    shRad.value = `N/A`;
    shWidth.value = `${this.height}`;
    shHeight.value = `${this.width}`;
    shPer.value = `${(this.height + this.width) * 2}`;
  }

  rectangler() {
    if (this.height == this.width) {
      alert("That is a square lol. Try again plz");
    } else {
      this.newShape.style.height = `${this.height}px`;
      this.newShape.style.width = `${this.width}px`;
      this.newShape.setAttribute("class", "rectangle");
    }
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    length = `${sqLength.value}`;
    this.length = length;
    this.squarer();
    sqLength.value = "";
  }

  describe() {
    shName.value = "Square";
    shArea.value = `${this.length ** 2}`;
    shRad.value = `N/A`;
    shWidth.value = `${this.length}`;
    shHeight.value = `${this.length}`;
    shPer.value = `${this.length * 4}`;
  }

  squarer() {
    this.newShape.style.height = `${this.length}px`;
    this.newShape.style.width = `${this.length}px`;
    this.newShape.setAttribute("class", "square");
  }
}

// Making Circle Button Create New Circles
cirBtn.addEventListener("click", () => {
  let newCircle = new Circle();
});

// Making Triangle Button Create New Triangles
isoBtn.addEventListener("click", () => {
  let newIso = new Triangle();
});

// Making Rectangle Button create New Rectangles
recBtn.addEventListener("click", () => {
  let newRec = new Rectangle();
});

// Making Square Button Create New Squares
sqBtn.addEventListener("click", () => {
  let newSq = new Square();
});
