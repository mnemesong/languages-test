(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.fold = function(it,f,first) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		first = f(x1,first);
	}
	return first;
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_io_Output = function() { };
haxe_io_Output.__name__ = true;
var _$Sys_FileOutput = function(fd) {
	this.fd = fd;
};
_$Sys_FileOutput.__name__ = true;
_$Sys_FileOutput.__super__ = haxe_io_Output;
_$Sys_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		js_node_Fs.writeSync(this.fd,String.fromCodePoint(c));
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		return js_node_Fs.writeSync(this.fd,js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length),pos,len);
	}
	,writeString: function(s,encoding) {
		js_node_Fs.writeSync(this.fd,s);
	}
	,flush: function() {
		js_node_Fs.fsyncSync(this.fd);
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileOutput
});
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = true;
var _$Sys_FileInput = function(fd) {
	this.fd = fd;
};
_$Sys_FileInput.__name__ = true;
_$Sys_FileInput.__super__ = haxe_io_Input;
_$Sys_FileInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		var buf = js_node_buffer_Buffer.alloc(1);
		try {
			js_node_Fs.readSync(this.fd,buf,0,1,null);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
		return buf[0];
	}
	,readBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		try {
			return js_node_Fs.readSync(this.fd,buf,pos,len,null);
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			if(e.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(e));
			}
		}
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileInput
});
var ValueType = $hxEnums["ValueType"] = { __ename__:true,__constructs__:null
	,TNull: {_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:$estr}
	,TInt: {_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:$estr}
	,TFloat: {_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:$estr}
	,TBool: {_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:$estr}
	,TObject: {_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:$estr}
	,TFunction: {_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:$estr}
	,TClass: ($_=function(c) { return {_hx_index:6,c:c,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TClass",$_.__params__ = ["c"],$_)
	,TEnum: ($_=function(e) { return {_hx_index:7,e:e,__enum__:"ValueType",toString:$estr}; },$_._hx_name="TEnum",$_.__params__ = ["e"],$_)
	,TUnknown: {_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:$estr}
};
ValueType.__constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TClass,ValueType.TEnum,ValueType.TUnknown];
var Type = function() { };
Type.__name__ = true;
Type.typeof = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.TObject;
		}
		return ValueType.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.TInt;
		}
		return ValueType.TFloat;
	case "object":
		if(v == null) {
			return ValueType.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.TEnum($hxEnums[e]);
		}
		var c = js_Boot.getClass(v);
		if(c != null) {
			return ValueType.TClass(c);
		}
		return ValueType.TObject;
	case "string":
		return ValueType.TClass(String);
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var params = enm.__constructs__[e._hx_index].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var equals_Equal = function() { };
equals_Equal.__name__ = true;
equals_Equal.isNull = function(a) {
	if(Type.typeof(a)._hx_index == 0) {
		return true;
	} else {
		return false;
	}
};
equals_Equal.isFunction = function(a) {
	if(Type.typeof(a)._hx_index == 5) {
		return true;
	} else {
		return false;
	}
};
equals_Equal.equals = function(a,b) {
	if(a == b) {
		return true;
	}
	if(equals_Equal.isNull(a) || equals_Equal.isNull(b)) {
		return false;
	}
	var _g = Type.typeof(a);
	switch(_g._hx_index) {
	case 0:case 1:case 3:case 8:
		return a == b;
	case 2:
		if(isNaN(a)) {
			return isNaN(b);
		} else {
			return false;
		}
		break;
	case 4:
		break;
	case 5:
		return Reflect.compareMethods(a,b);
	case 6:
		var _g1 = _g.c;
		if(((a) instanceof Array)) {
			var a1 = js_Boot.__cast(a , Array);
			var b1 = js_Boot.__cast(b , Array);
			if(a1.length != b1.length) {
				return false;
			}
			var _g1 = 0;
			var _g2 = a1.length;
			while(_g1 < _g2) {
				var i = _g1++;
				if(!equals_Equal.equals(a1[i],b1[i])) {
					return false;
				}
			}
			return true;
		}
		if(js_Boot.__implements(a,haxe_IMap)) {
			var a1 = js_Boot.__cast(a , haxe_ds_StringMap);
			var b1 = js_Boot.__cast(b , haxe_ds_StringMap);
			var _g1 = [];
			var h = a1.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				_g1.push(key);
			}
			var a_keys = _g1;
			var _g1 = [];
			var h = b1.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				_g1.push(key);
			}
			var b_keys = _g1;
			if(!equals_Equal.equals(a_keys,b_keys)) {
				return false;
			}
			var _g1 = 0;
			while(_g1 < a_keys.length) {
				var key = a_keys[_g1];
				++_g1;
				if(!equals_Equal.equals(a1.h[key],b1.h[key])) {
					return false;
				}
			}
			return true;
		}
		if(((a) instanceof Date)) {
			return (js_Boot.__cast(a , Date)).getTime() == (js_Boot.__cast(b , Date)).getTime();
		}
		if(((a) instanceof haxe_io_Bytes)) {
			return equals_Equal.equals((js_Boot.__cast(a , haxe_io_Bytes)).b.bufferValue,(js_Boot.__cast(b , haxe_io_Bytes)).b.bufferValue);
		}
		break;
	case 7:
		var _g1 = _g.e;
		if(a._hx_index != b._hx_index) {
			return false;
		}
		var a_args = Type.enumParameters(a);
		var b_args = Type.enumParameters(b);
		return equals_Equal.equals(a_args,b_args);
	}
	var _g = 0;
	var _g1 = Reflect.fields(a);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var pa = Reflect.field(a,field);
		var pb = Reflect.field(b,field);
		if(equals_Equal.isFunction(pa)) {
			if(equals_Equal.isNull(pa) != equals_Equal.isNull(pb)) {
				return false;
			}
			continue;
		}
		if(!equals_Equal.equals(pa,pb)) {
			return false;
		}
	}
	return true;
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.prototype = {
	__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Eof = function() {
};
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var hx_src_ArrayExt = function() { };
hx_src_ArrayExt.__name__ = true;
hx_src_ArrayExt.last = function(a) {
	return a[a.length - 1];
};
hx_src_ArrayExt.updateLast = function(a,fn) {
	var arrFirst = a.slice(0,a.length - 1);
	var arrLast = a[a.length - 1];
	var arrLastModified = fn(arrLast);
	return arrFirst.concat([arrLastModified]);
};
var hx_src_Counter = function(el,c) {
	this.el = el;
	this.c = c;
};
hx_src_Counter.__name__ = true;
hx_src_Counter.prototype = {
	__class__: hx_src_Counter
};
var hx_src_Yandex1 = function() { };
hx_src_Yandex1.__name__ = true;
hx_src_Yandex1.cntr = function(el,arr,offset,c) {
	if(arr.indexOf(el,offset) == -1) {
		return c;
	} else {
		return hx_src_Yandex1.cntr(el,arr,arr.indexOf(el,offset) + 1,c + 1);
	}
};
hx_src_Yandex1.run = function(arr1,arr2) {
	var arr = Lambda.fold(arr1,function(i,acc) {
		if(acc.indexOf(i) == -1) {
			return acc.concat([i]);
		} else {
			return acc;
		}
	},[]);
	var _g = [];
	var _g1 = 0;
	var _g2 = arr;
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		if(arr2.indexOf(v) != -1) {
			_g.push(v);
		}
	}
	var _this = _g;
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		var it = _this[i];
		result[i] = { el : it, c : Math.min(hx_src_Yandex1.cntr(it,arr1,0,0),hx_src_Yandex1.cntr(it,arr2,0,0))};
	}
	var _this = result;
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		var it = _this[i];
		var _g2 = [];
		var _g3 = 0;
		var _g4 = js_Boot.__cast(it.c , Int);
		while(_g3 < _g4) {
			var i1 = _g3++;
			_g2.push(i1);
		}
		var _this1 = _g2;
		var result1 = new Array(_this1.length);
		var _g5 = 0;
		var _g6 = _this1.length;
		while(_g5 < _g6) {
			var i2 = _g5++;
			result1[i2] = it.el;
		}
		result[i] = result1;
	}
	var arr2 = result;
	var _g = [];
	var _g_current = 0;
	var _g_array = arr2;
	while(_g_current < _g_array.length) {
		var e = _g_array[_g_current++];
		var x = $getIterator(e);
		while(x.hasNext()) {
			var x1 = x.next();
			_g.push(x1);
		}
	}
	return _g;
};
hx_src_Yandex1.main = function() {
	var arr1 = [1,2,3,2,2,0];
	var arr2 = [5,1,2,7,3,2];
	var v = hx_src_Yandex1.run(arr1,arr2);
	process.stdout.write(Std.string(v));
	process.stdout.write("\n");
};
var hx_src_Yandex2 = function() { };
hx_src_Yandex2.__name__ = true;
hx_src_Yandex2.run = function(str1) {
	var symbols = str1.split("");
	var foldF = function(s,acc) {
		if(acc.length == 0) {
			return acc.concat([new hx_src_Counter(s,1)]);
		} else if(acc[acc.length - 1].el == s) {
			var arrFirst = acc.slice(0,acc.length - 1);
			var arrLast = acc[acc.length - 1];
			var arrLastModified = new hx_src_Counter(arrLast.el,arrLast.c + 1);
			return arrFirst.concat([arrLastModified]);
		} else {
			return acc.concat([new hx_src_Counter(s,1)]);
		}
	};
	var _this = Lambda.fold(symbols,foldF,[]);
	var result = new Array(_this.length);
	var _g = 0;
	var _g1 = _this.length;
	while(_g < _g1) {
		var i = _g++;
		var el = _this[i];
		result[i] = el.el + (el.c > 1 ? el.c == null ? "null" : "" + el.c : "");
	}
	var result1 = result;
	return Lambda.fold(result1,function(el,acc) {
		return acc + el;
	},"");
};
hx_src_Yandex2.main = function() {
	var str1 = "AAABBBCCXYZDDDDAAAABB";
	var v = hx_src_Yandex2.run(str1);
	process.stdout.write(Std.string(v));
	process.stdout.write("\n");
};
var hx_test_Run = function() { };
hx_test_Run.__name__ = true;
hx_test_Run.main = function() {
	hx_test_Yandex1.runAll();
	hx_test_Yandex2.runAll();
};
var hx_test_Yandex1 = function() { };
hx_test_Yandex1.__name__ = true;
hx_test_Yandex1.run = function() {
	process.stdout.write("Test run");
	process.stdout.write("\n");
	var arr1 = [1,2,3,2,2,0];
	var arr2 = [5,1,2,7,3,2];
	if(!equals_Equal.equals(hx_src_Yandex1.run(arr1,arr2),[1,2,2,3])) {
		throw haxe_Exception.thrown("FAIL: hx.src.Yandex1.run(arr1, arr2).equals([1, 2, 2, 3])");
	}
};
hx_test_Yandex1.cntr = function() {
	process.stdout.write("Test cntr");
	process.stdout.write("\n");
	var actual = hx_src_Yandex1.cntr(2,[1,2,2,3],0,0);
	var expected = 2;
	if(actual != expected) {
		throw haxe_Exception.thrown("FAIL: values are not equal (expected: " + expected + ", actual: " + actual + ")");
	}
	var actual = hx_src_Yandex1.cntr(2,[1,2,2,3,2],3,2);
	var expected = 3;
	if(actual != expected) {
		throw haxe_Exception.thrown("FAIL: values are not equal (expected: " + expected + ", actual: " + actual + ")");
	}
};
hx_test_Yandex1.runAll = function() {
	hx_test_Yandex1.run();
	hx_test_Yandex1.cntr();
};
var hx_test_Yandex2 = function() { };
hx_test_Yandex2.__name__ = true;
hx_test_Yandex2.run = function() {
	process.stdout.write("Test run");
	process.stdout.write("\n");
	var a = hx_src_Yandex2.run("AAABBBCCXYZDDDDAAAABB");
	process.stdout.write(Std.string(a));
	process.stdout.write("\n");
	var actual = a;
	var expected = "A3B3C2XYZD4A4B2";
	if(actual != expected) {
		throw haxe_Exception.thrown("FAIL: values are not equal (expected: " + expected + ", actual: " + actual + ")");
	}
};
hx_test_Yandex2.runAll = function() {
	hx_test_Yandex2.run();
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__implements = function(o,iface) {
	return js_Boot.__interfLoop(js_Boot.getClass(o),iface);
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_node_Fs = require("fs");
var js_node_KeyValue = {};
js_node_KeyValue.get_key = function(this1) {
	return this1[0];
};
js_node_KeyValue.get_value = function(this1) {
	return this1[1];
};
var js_node_buffer_Buffer = require("buffer").Buffer;
var js_node_stream_WritableNewOptionsAdapter = {};
js_node_stream_WritableNewOptionsAdapter.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url_URLSearchParamsEntry = {};
js_node_url_URLSearchParamsEntry._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url_URLSearchParamsEntry.get_name = function(this1) {
	return this1[0];
};
js_node_url_URLSearchParamsEntry.get_value = function(this1) {
	return this1[1];
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
js_Boot.__toStr = ({ }).toString;
hx_test_Run.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);