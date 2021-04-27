export const quests3 = [
  {
    quiz: `
let a = 0;
if (a == true && a > 0 || a <= 2) {
  console.log(true);
} else {
  console.log(false);
}
  `,
    answer: ['false'],
  },
  {
    quiz: `
let a = 0;
if (a) {
  let a = 30;
  if (a) {
    a = 20;
  } else {
    a = 40;
  }
  console.log(a);
} else {
  let a = 20;
  if ((a = 0)) {
    a = 5;
  } else {
    a = 7;
  }
  console.log(a);
}
console.log(a);
    `,
    answer: ['7', '0'],
  },
  {
    quiz: `
function foo() {
  var x = 1;
  console.log(x);
}

function bar() {
  var x = 2;
  foo();
}

foo();
bar();`,
    answer: ['1', '1'],
  },
  {
    quiz: `
var b = 20;
(function bar2() {
  console.log(b);
  var b = 10;
  console.log(b);
})();`,
    answer: ['undefined', '10'],
  },
  {
    quiz: `
let a = 20;

(function foo2() {
  console.log(a);
  let a = 10;
  console.log(a);
})();`,
    answer: ['error'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`,
    answer: ['1', '2', '3', '4', '5', 'undefined'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5];
arr[6] = 6;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,
    answer: ['1', '2', '3', '4', '5', 'undefined', '6'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  if (i % 2) {
    continue;
  }
  console.log(arr[i]);
}`,
    answer: ['1', '3', '5'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5];
let c = -1;
while ((c = arr.pop())) {
  console.log(c);
}
console.log(arr);`,
    answer: ['5', '4', '3', '2', '1', '[]'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5];
let i = 0;
do {
  arr[i] += 1;
  console.log(arr[i]);
} while (((i += 1), arr[i]));`,
    answer: ['2', '3', '4', '5', '6'],
  },
  {
    quiz: `
let arr = [1, 2, 3, 4, 5];
while (true) {
  console.log(arr.pop());
  if (arr.length === 2) break;
}`,
    answer: ['5', '4', '3'],
  },
]
