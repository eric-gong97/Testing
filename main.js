var subjects = document.getElementsByClassName("subject");
var mainBlock = document.getElementById("main");
var navButtons = document.getElementById("navbar");
var mobileButtons = document.getElementsByClassName("mobile-menu")[0];
var resource = document.getElementsByClassName("resources")[0];
var icon = document.getElementsByClassName("icon")[0];
var test = "";
var selectedUnit = "";
var listOfCourses = ["k5box", "68box", "algebra", "algebra2", "geometry"];
var algebra = {
  0: "Unit 1 - The Building Blocks of Algebra",
  1: "Unit 2 - Linear Expressions, Equations, and Inequalities",
  2: "Unit 3 - Functions",
  3: "Unit 4 - Linear Functions and Arithmetic Sequences",
  4: "Unit 5 - Systems of Linear Equations and Inequalities",
  5: "Unit 6 - Exponents, Exponents, Exponents and More Exponents",
  6: "Unit 7 - Polynomials",
  7: "Unit 8 - Quadratic Functions and Their Algebra",
  8: "Unit 9 - Roots and Irrational Numbers",
  9: "Unit 10 - Statistics",
};

var algebra = {
  0: {
    "name": "Unit 1 - The Building Blocks of Algebra",
  },
  1: {
    "name": "Unit 2 - Linear Expressions, Equations, and Inequalities",
  },
  2: {
    "name": "Unit 3 - Functions",
  },
  3: {
    "name": "Unit 4 - Linear Functions and Arithmetic Sequences",
  },
  4: {
    "name": "Unit 5 - Systems of Linear Equations and Inequalities",
  },
  5: {
    "name": "Unit 6 - Exponents, Exponents, Exponents and More Exponents",
  },
  6: {
    "name": "Unit 7 - Polynomials",
  },
  7: {
    "name": "Unit 8 - Quadratic Functions and Their Algebra",
  },
  8: {
    "name": "Unit 10 - Statistics",
  }
}

var algebra2 = {
  0: {
    "name": "Unit 1 - Algebraic Essentials Review",
  },
  1: {
    "name": "Unit 2 - Functions as the Cornerstones of Algebra II",
  },
  2: {
    "name": "Unit 3 - Linear Functions, Equations, and Their Algebra",
  },
  3: {
    "name": "Unit 4 - Exponential and Logarithmic Functions",
  },
  4: {
    "name": "Unit 5 - Sequences and Series",
  },
  5: {
    "name": "Unit 6 - Quadratic Functions and Their Algebra",
  },
  6: {
    "name": "Unit 7 - Transformations of Functions",
  },
  7: {
    "name": "Unit 8 - Radicals and the Quadratic Formula",
  },
  8: {
    "name": "Unit 9 - Complex Numbers",
  },
  9: {
    "name": "Unit 10 - Polynomial and Rational Functions",
  },
  10: {
    "name": "Unit 11 - The Circular Functions",
  },
  11: {
    "name": "Unit 12 - Probability",
  },
  12: {
    "name": "Unit 13 - Statistics",
  },
}

var geometry = {
  0: {
    "name": "Unit 1 - Essential Geometric Tools and Concepts",
  },
  1: {
    "name": "Unit 2 - Transformations, Rigid Motions, and Congruence",
    "topics": {
      0: {
        "name": "Translations",
        "worksheets": {
          0: "https://drive.google.com/file/d/1G2nzFYZ7_sKhoxBWfulDxrcwChcNod-T/view?usp=sharing",
          1: "https://drive.google.com/file/d/1G2nzFYZ7_sKhoxBWfulDxrcwChcNod-T/view?usp=sharing",
        },
      },
      1: {
        "name": "Rotations",
        "worksheets": {0: "https://drive.google.com/file/d/1sHezKwqEpDNQDlCYt-YthknmHFfvdvqw/view?usp=share_link"},
      },
      2: {
        "name": "Reflections",
        "worksheets": [],
      },
      3: {
        "name": "Congruence",
        "worksheets": [],
      },
    }
  },
  2: {
    "name": "Unit 3 - Euclidean Triangle Proof",
  },
  3: {
    "name": "Unit 4 - Constructions",
  },
  4: {
    "name": "Unit 5 - The Tools of Coordinate Geometry",
  },
  5: {
    "name": "Unit 6 - Quadrilaterals",
  },
  6: {
    "name": "Unit 7 - Dilations and Similarity",
  },
  7: {
    "name": "Unit 8 - Right Triangle Trigonometry",
  },
  8: {
    "name": "Unit 9 - Circle Geometry",
  },
  9: {
    "name": "Unit 10 - Measurement and Modeling",
  },
}

function animateMain(course) {
  gsap.to("#main", {duration: 0.40, opacity: 0, ease: "expo.out"});
  toggleUnitMaterial();
  clearUnitFlex();
  // subject box disappears
  setTimeout(function () {
    for (let i = 0; i < subjects.length; i++) {
      subjects[i].style.display = "none";
    }
  }, 0.4 * 1000);

  if (course == "home") {
    resetToHome(course);
  }
  else {
    // change course material
    setTimeout(function() {
      test = eval(course);
      // remove children from list
      if (course != "home") {
        var child = resource.lastElementChild;
        while (child != null) {
          resource.removeChild(child);
          var child = resource.lastElementChild;
        }
      }

      for (let x = 0; x < Object.keys(test).length; x++) {
        let d = document.createElement("div");
        let t = document.createTextNode(test[x]["name"]);
        d.classList.add("unit");
        // click on unit
        d.addEventListener("click", (e) => {
          gsap.to("#main", {duration: 0.40, opacity: 0, ease: "expo.out"});
          selectedUnit = e.target.innerHTML;
          resource.style.display = "none";
          for (let z = 0; z < Object.keys(test[x]["topics"]).length; z++) {
            let t = document.createTextNode(test[x]["topics"][z]["name"]);
            for (let i = 0; i < Object.keys(test[x]["topics"][z]["worksheets"]).length; i++) {
              let a = document.createElement("a");
              let aText = document.createTextNode(i );
              a.href = test[x]["topics"][z]["worksheets"][i];
              a.appendChild(aText);
              document.getElementById("unit-flex").appendChild(a);
            }
            let d = document.createElement("div");
            d.classList.add("unit-flex-item");
            d.appendChild(t);
            document.getElementById("unit-flex").appendChild(d);


          }
          setTimeout(function() {
            document.getElementById("unit-material").style.display = "block";
            document.getElementById("unit-title").innerHTML = selectedUnit;
            gsap.to("#main", {duration: 0.40, opacity: 1, ease: "expo.out"});

            document.getElementById("unit-flex")
          }, 0.4 * 1000)
        });

        d.appendChild(t);
        resource.appendChild(d);
      }
      gsap.to("#main", {duration: 0.40, opacity: 1, ease: "expo.out"});
      gsap.to(".resources", {duration: 0.40, opacity: 1, ease: "expo.out"});
      document.getElementsByClassName("resources")[0].style.display = "block";
    }, 0.4 * 1000)

  }
}

function clearUnitFlex() {
  var child = document.getElementById("unit-flex").lastElementChild;
  while (child != null) {
    document.getElementById("unit-flex").removeChild(child);
    var child = document.getElementById("unit-flex").lastElementChild;
  }
}

function toggleUnitMaterial() {
  console.log(document.getElementById("unit-material"));
  if (document.getElementById("unit-material").style.display == "block") {
    document.getElementById("unit-material").style.display = "none";
    console.log("weq");
  }
  console.log(document.getElementById("unit-material").style.display);
}

function resetToHome(course) {
  gsap.to("#main", {duration: 0.40, opacity: 0, ease: "expo.out"});
  setTimeout(function () {
    gsap.to("#main", {duration: 0.40, opacity: 1, ease: "expo.out"});
    for (let i = 0; i < subjects.length; i++) {
      subjects[i].style.display = "flex";
    }
  }, 0.4 * 1000);
    // phase resources out
  gsap.to(".resources", {duration: 0.40, opacity: 1, ease: "expo.out"});
  document.getElementsByClassName("resources")[0].style.display = "none";
  }

for (let i = 0; i < navButtons.children.length - 1; i++) {
  navButtons.children[i].addEventListener("click", function() {animateMain(navButtons.children[i].className)});
}

for (let i = 0; i < mobileButtons.children.length; i++) {
  mobileButtons.children[i].addEventListener("click", function() {animateMain(mobileButtons.children[i].className)});
}

window.addEventListener("resize", function() {
  let v = document.getElementsByClassName("mobile-menu")[0];
  if (!window.matchMedia("(max-width: 600px)").matches) {
    v.style.display = "none";
  }
})


icon.addEventListener("click", function() {
  let v = document.getElementsByClassName("mobile-menu")[0];
  if (v.className == "mobile-menu") {
    v.style.display = "block";
    v.className += " responsive"
  }
  else {
    v.style.display = "none";
    v.className = "mobile-menu";
  }
});

for (let i = 0; i < subjects.length; i++) {
  subjects[i].addEventListener("click", function() {animateMain(subjects[i].classList.item(1))});
  console.log(subjects[i].classList.item(1));
}
