/* eslint-disable */
/*compiled by xtemplate#*/
import esDep3 from './b';
var ret = function a(undefined) {
  var t;
  var t0;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  var tpl = this;
  var root = tpl.root;
  var buffer = tpl.buffer;
  var scope = tpl.scope;
  var runtime = tpl.runtime;
  var name = tpl.name;
  var pos = tpl.pos;
  var data = scope.data;
  var affix = scope.affix;
  var nativeCommands = root.nativeCommands;
  var utils = root.utils;
  var callFnUtil = utils['callFn'];
  var callDataFnUtil = utils['callDataFn'];
  var callCommandUtil = utils['callCommand'];
  var rangeCommand = nativeCommands['range'];
  var voidCommand = nativeCommands['void'];
  var foreachCommand = nativeCommands['foreach'];
  var forinCommand = nativeCommands['forin'];
  var eachCommand = nativeCommands['each'];
  var withCommand = nativeCommands['with'];
  var ifCommand = nativeCommands['if'];
  var setCommand = nativeCommands['set'];
  var includeCommand = nativeCommands['include'];
  var includeOnceCommand = nativeCommands['includeOnce'];
  var parseCommand = nativeCommands['parse'];
  var extendCommand = nativeCommands['extend'];
  var blockCommand = nativeCommands['block'];
  var macroCommand = nativeCommands['macro'];
  var debuggerCommand = nativeCommands['debugger'];

  buffer.data += '';
  var id0 =
    (t = affix.x) !== undefined
      ? t
      : (t = data.x) !== undefined
      ? t
      : scope.resolveLooseUp(['x']);
  buffer = buffer.writeEscaped(id0);
  buffer.data += '';
  var callRet3;
  buffer = root.includeModule(scope, { params: [esDep3] }, buffer, tpl);
  var id1 = callRet3;
  buffer = buffer.writeEscaped(id1);
  return buffer;
};
ret.TPL_NAME = 'a.xtpl';
export default ret;
