// get the iframe element
const iframe = document.getElementById('chat-iframe');

// listen for changes to the iframe's content
iframe.onload = function() {
  // get the iframe's window object
  const iframeWindow = iframe.contentWindow;

  // listen for changes to the iframe's height
  iframeWindow.onresize = function() {
    // set the iframe's height to its content's height
    iframe.style.height = iframeWindow.document.body.scrollHeight + 'px';
    window.scrollTo(0, document.body.scrollHeight);
  }
}
