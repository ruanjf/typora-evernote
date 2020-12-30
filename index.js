console.log('ok');

setTimeout(function(){
  console.log('init', File.language === 'zh-Hans', editor.getMarkdown());
  // File.reloadContent('#bbb\nbb\nccdd', !1, !0, !1, !0);
  // console.log('text', editor.getMarkdown());
  // editor.library.root = {}
  // editor.library.fileTree.render()
}, 2000)

Evernote = require('evernote')
console.log('ev', Evernote)


window.evernoteMode = false
window.evernoteHandler = {
  "controller.calcMountFolder": function(msg, callback) {
    // File.r
    // 文件目录
    console.log('hd', msg)
    callback(JSON.stringify({
      "responseId": msg.callbackId,
      "responseData":  'dev.yinxiang.com'
    }))
  },
  "controller.switchFolder": function(msg, callback) {
    console.log('hd', msg)
  },
  "controller.bindFolderMonitor": function(msg, callback) {
    console.log('hd', msg)
  },
  "library.listDocsUnder": function(msg, callback) {
    // 文件列表
    console.log('hd', msg)
    callback(JSON.stringify({
      "responseId": msg.callbackId,
      "responseData":  ff
    }))
  }
}


function tt() {
  var developerToken = "S=s1:U=1f2:E=175e37bd839:C=175bf6f5168:P=1cd:A=en-devtoken:V=2:H=e1e9cce57cdb3cdd83f099857ec1fad7";
  console.log(developerToken)
  var client = new Evernote.Client({token: developerToken, serviceHost: "sandbox.yinxiang.com"});
   
  // Set up the NoteStore client 
  var noteStore = client.getNoteStore();
   
  // Make API calls
  noteStore.listNotebooks().then(notebooks => {
    for(nb of notebooks) {
      console.log(nb)
    }
  })
}
// tt()


