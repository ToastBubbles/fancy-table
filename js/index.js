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
//
function rand() {
  let min = 6;
  let max = 14;
  let rand = Math.round(Math.random() * (max - min) + min);
  //   console.log(rand);
  return rand;
}
// rand();
let lastCell = 2;
function addDraw(bg) {
  //   console.log("drawinf");
  let newbg = bg.split("\n");
  let newArr = [];
  let prog = 0;
  let pos = rand();
  // while(newbg.)
  if (lastCell > 0) {
    newbg.forEach((lin) => {
      newArr.push((lin += space));
    });
    lastCell -= 1;
  }
  //   else {
  //     if (lastCell > 0) {
  //       newbg.forEach((lin) => {
  //         newArr.push((lin += space));
  //       });
  //       lastCell -= 1;
  //     }
  else {
    newbg.forEach((lin) => {
      if (prog < pos) {
        newArr.push((lin += pipeBod));
      } else if (prog == pos) {
        newArr.push((lin += pipeHead));
      } else if (prog > pos && prog < pos + 5) {
        newArr.push((lin += space));
      } else if (prog == pos + 5) {
        newArr.push((lin += pipeHead));
      } else {
        newArr.push((lin += pipeBod));
      }
      lastCell = 2;
      prog++;
    });
  }
  //   console.log(lastCell);
  //   }
  return newArr.join("\n");
}
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
        lastCell = 2;
      } else {
        line += space;
        lastCell -= 1;
      }
      //   console.log(lastCell);

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
let sliced = 0;
function movebg(bg) {
  bgArr = bg.split("\n");
  let newArr = [];
  //   bgArr.forEach((line) => {

  //   });
  for (let line of bgArr) {
    newArr.push(line.slice(1));
  }
  sliced++;
  bg = newArr.join("\n");
  if (sliced < 9) {
    // sliced++;
  } else {
    sliced = 0;
    //add new cell
    // console.log("drawing");
    bg = addDraw(bg);
    // console.log("adding cell");
    // newArr.push(line.slice(1));
    // sliced++;
  }

  //   console.log(bg);
  addBird(bg);
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function addBird(bg) {
  //   bg.charAt(width + 5);
  `
     ,---.
    [   O '>
     """""
  `;
  //   bg = setCharAt(bg, 10, "@@");
  console.log(bg);
  setTimeout(() => {
    movebg(bg);
  }, 600);
}

start();
