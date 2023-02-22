// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log("░▒▓███▓▒░");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("         ");
// console.log("░▒▓███▓▒░");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(" ░▒▓█▓▒░ ");
// console.log(
//   "000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566"
// );
let row;
let height = 20;
let intervals = 18;
let width = 162;
let pipeBod = " ░▒▓█▓▒░ ";
let pipeHead = "░▒▓███▓▒░";
let space = "         ";
// function draw() {}
function rand() {
  let min = 6;
  let max = 14;
  let rand = Math.round(Math.random() * (max - min) + min);
  //   console.log(rand);
  return rand;
}
// rand();
function start() {
  let positions = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
  curPos = 0;
  prog = 0;
  lines = "";
  while (prog < height) {
    // lines += draw();

    let line = "";
    let i = 0;
    let pipe = 0;
    while (i < intervals) {
      if (i % 3 == 0) {
        curPos = positions[pipe];
        if (prog < curPos) {
          line += pipeBod;
        } else if (prog == curPos) {
          line += pipeHead;
        } else if (prog > curPos && prog < curPos + 5) {
          line += space;
        } else if (prog == curPos + 5) {
          line += pipeHead;
        } else {
          line += pipeBod;
        }
        pipe++;
      } else {
        line += space;
      }

      //   position = rand();
      i++;
    }
    line += "\n";
    lines += line;
    prog++;
  }
  movebg(lines);
  //   console.log(lines);
}

function movebg(bg) {
  bgArr = bg.split("\n");
  let newArr = [];
  //   bgArr.forEach((line) => {

  //   });
  for (let line of bgArr) {
    newArr.push(line.slice(1));
  }
  bg = newArr.join("\n");
  //   console.log(bg);
  addBird(bg);
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function addBird(bg) {
  //   bg.charAt(width + 5);
  bg = setCharAt(bg, 10, "@@");
  console.log(bg);
  setTimeout(() => {
    movebg(bg);
  }, 400);
}

start();
