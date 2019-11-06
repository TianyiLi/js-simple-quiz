const quests = [
  {
    quiz: `
const foo = function() {
  this.attr = 'this is foo';
  this.method = function() {
    return this.attr;
  };
};
const bar = function() {
  this.attr = 'this is bar';
};

const foo2 = new foo();

bar.prototype.method = foo2.method;

const bar2 = new bar();

console.log(bar2.method());
  `,
    answer: ['this is bar'],
    input: ''
  },
  {
    quiz: `
const obj = {
  foo: 'foo',
};

const obj2 = {
  foo: 'foo',
};

console.log(obj === obj2);
console.log(obj.foo === obj2.foo);
`,
    answer: ['false', 'true'],
    input: ''
  },
]
export {
  quests
}
