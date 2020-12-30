//config.js

var text = `
if (window.evernoteMode && window.evernoteHandler) {
	message.handlerName = name;
	var handler = window.evernoteHandler[name];
	if (handler) {
		handler(message, _handleMessageFromObjC);
		return;
	} else {
		console.warn('evernote not support: ' + name);
	}
}`;

module.exports = {
  from: /(function \_doSend\([\s\S]*?)(\s*if\(window.webkit\) \{)/g,
  to: '$1\n\n'+text+'\n$2',
};
