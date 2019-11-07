const quests = [
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
  {
    quiz: `
const foo = {
  result: 'this is foo';
}

const bar = foo;

foo.result = 'this is foo2';

console.log(foo.result);
console.log(bar.result);
`,
    answer: ['this is foo2', 'this is foo2'],
    input: ''
  },
  {
    quiz: `
const obj = {
  foo: {
    result: 'this is foo result',
  },
  bar: {
    result: 'this is bar result',
  },
  bar: {
    result: 'this is duplicated bar result',
  },
};
console.log(obj.bar);
    `,
    answer: ['this is duplicated bar result'],
    input: ''
  },
  {
    quiz: `
const obj = {
  foo: 'foo',
  method: function() {
    return this.foo;
  },
};

const obj2 = {
  foo: 'foo2',
  method: obj.method,
};

console.log(obj.method());
console.log(obj2.method());
    `,
    answer: ['foo', 'foo2'],
    input: ''
  },
  {
    quiz: `
const foo = function() {
  this.attr = 'test';
  this.method = function() {
    return 'this is method';
  };
};

const bar = new foo();

console.log(bar.attr);
console.log(bar.method());
  `,
    answer: ['test', 'this is method'],
    input: ''
  },
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
]

const phpQuiz = `
<?php
if (@$_GET['name']) {
  echo '{"message":"success"}';
} else if(@$_POST['name']) {
  echo '{"message":"get the name field: ' . $_POST['name'] . '" }';
} else {
  echo '{"message": "failed"}';
}
?>
`
export {
  quests,
  phpQuiz
}
