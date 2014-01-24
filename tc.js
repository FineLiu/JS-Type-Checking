var type_checking = require('./type_checking.js');

var whichOne = process.argv[2];

var data;

switch (whichOne) {
  case '1' : data = type_checking.to();
  break;
  case '2' : data = type_checking.io();
  break;
  case '3' : data = type_checking.cons();
  break;
  case '4' : data = type_checking.opt();
  break;
  default : return false;
}

console.log(data);
