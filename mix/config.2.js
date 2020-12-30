//config.js

var text = `<!-- typora-evernote start -->
<script src="./typora-evernote/typora-evernote.deps.js" aria-hidden="true"></script>
<script src="./typora-evernote/typora-evernote.min.js" aria-hidden="true"></script>
<!-- typora-evernote end -->`;

module.exports = {
  from: /(\s*<!-- \/script -->)/,
  to: '\n'+text+'$1',
};
