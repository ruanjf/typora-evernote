//config.js

var text = `//<!-- typora-evernote start -->
if (window.evernoteMode && window.evernoteHandler) {
	message.handlerName = name;
	var handler = window.evernoteHandler[name];
	if (handler) {
		handler(message, _handleMessageFromObjC);
		return;
	} else {
		console.warn('evernote not support: ' + name);
	}
}
//<!-- typora-evernote end -->`;

module.exports = {
  from: /(function \_doSend\([\s\S]*?)(\s*if\(window.webkit\) \{)/,
  to: '$1\n'+text+'$2',
};
