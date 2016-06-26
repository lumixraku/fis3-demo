;/*!/a.js*/

function print() {
  console.log.apply(this, arguments);
}

function Foo() {
  print("%s Hello, World", ':)');
}

Foo();

;/*!/b.js*/

function haha(text) {
  alert(text);
}

function Foo() {
  haha("hahahh");
}

Foo();
