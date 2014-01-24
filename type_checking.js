var l;//undefined
var m = null;//null
var n = 12;//Number
var nn = new Number(12);//Number
var o = NaN;//NaN
var p = true;//Boolean
var pp = new Boolean(true);//Boolean
var q = 'bazz';//String
var qq = new String('bazz');//String
var r = {};//Object
var rr = new Object();//Object
var s = [1, 2, 3];//Array
var ss = new Array(1, 2, 3);//Array
var t = new Date();//Date
var u = function (foo) {return foo;}//Function
var uu = new Function('');//Function
var v = /abc/g;//RegExp
var vv = new RegExp('meow');//RegExp
var w = new Error();//Error

var list = [l, m, n, nn, o, p, pp, q, qq, r, rr, s, ss, t, u, uu, v, vv, w];

//typeof
module.exports.to =  function () {
  console.log('\033[31m typeof : \033[39m\n');
  list.forEach(function (element, index, array) {
      console.log('\033[36m typeof('+ element + ') : \033[39m' + typeof(element));
  })
  console.log('\n');
}

//instanceof
module.exports.io = function () {
  console.log('\033[31m instanceof : \033[39m\n');
  console.log(l);
  console.log(m);
  console.log('\033[36m' + n + ' === Number : \033[39m' +( n instanceof Number));
  console.log('\033[36m' + nn + ' === Number : \033[39m' +( nn instanceof Number));
  console.log(o);
  console.log('\033[36m' + p + ' === Boolean : \033[39m' +( p instanceof Boolean));
  console.log('\033[36m' + pp + ' === Boolean : \033[39m' +( pp instanceof Boolean));
  console.log('\033[36m' + q + ' === String : \033[39m' +( q instanceof String));
  console.log('\033[36m' + qq + ' === String : \033[39m' +( qq instanceof String));
  console.log('\033[36m' + r + ' === Object : \033[39m' +( r instanceof Object));
  console.log('\033[36m' + rr + ' === Object : \033[39m' +( rr instanceof Object));
  console.log('\033[36m' + s + ' === Array : \033[39m' +( s instanceof Array));
  console.log('\033[36m' + ss + ' === Array : \033[39m' +( ss instanceof Array));
  console.log('\033[36m' + t + ' === Date : \033[39m' +( t instanceof Date));
  console.log('\033[36m' + u + ' === Function : \033[39m' +( u instanceof Function));
  console.log('\033[36m' + uu + ' === Function : \033[39m' +( uu instanceof Function));
  console.log('\033[36m' + v + ' === RegExp : \033[39m' +( v instanceof RegExp));
  console.log('\033[36m' + vv + ' === RegExp : \033[39m' +( vv instanceof RegExp));
  console.log('\033[36m' + w + ' === Error : \033[39m' +( w instanceof Error));
  console.log('\n');
}

//constructor
module.exports.cons = function () {
  console.log('\033[31m constructor : \033[39m\n');
  console.log(l);
  console.log(m);
  console.log(n.constructor);
  console.log(nn.constructor);
  console.log(o.constructor);
  console.log(p.constructor);
  console.log(pp.constructor);
  console.log(q.constructor);
  console.log(qq.constructor);
  console.log(r.constructor);
  console.log(rr.constructor);
  console.log(s.constructor);
  console.log(ss.constructor);
  console.log(t.constructor);
  console.log(u.constructor);
  console.log(uu.constructor);
  console.log(v.constructor);
  console.log(vv.constructor);
  console.log(w.constructor);
  console.log('\n');
}

//Object.prototype.toString
module.exports.opt = function () {
  console.log('\033[31m Object.prototype.toString : \033[39m\n');
  list.forEach(function (element, index, array) {
    console.log('\033[36m Object.prototype.toString.call(' + element
      + ') : \033[39m' + Object.prototype.toString.call(element));
  })
}
