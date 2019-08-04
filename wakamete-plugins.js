function handleResponse(message){
  // nop.
}
function handleError(error){
  // nop.
}

function onLogLoad(event) {
  var target = document.getElementsByTagName("form").item(0);

  var village_log_txtC = JSON.parse(JSON.stringify(target.textContent));
  var village_log_text = JSON.parse(JSON.stringify(target.innerText));
  var village_log_html = JSON.parse(JSON.stringify(target.innerHTML));
  var village_msg = { html_log: village_log_html, text_log: village_log_text, txtc_log: village_log_txtC};
  var send_object = browser.runtime.sendMessage(village_msg);
  send_object.then(handleResponse, handleError);
}

setInterval(onLogLoad, 1000);

// NG case. EventListner方式
//   function onLogLoad(event) {
//     var village_log_txtC = JSON.parse(JSON.stringify(event.originalTarget.textContent));
//     var village_log_text = JSON.parse(JSON.stringify(event.originalTarget.innerText));
//     var village_log_html = JSON.parse(JSON.stringify(event.originalTarget.innerHTML));
//     var village_msg = { html_log: village_log_html, text_log: village_log_text, txtc_log: village_log_txtC};
//     var send_object = browser.runtime.sendMessage(village_msg);
//     send_object.then(handleResponse, handleError);
//   }
//   window.addEventListener("submit", onLogLoad, false);
//   データ送信そのものはうまくいく（唯一の）ケース。更新前のデータを用いるため、1手遅れる。
//
//   document.body.addEventListener("DOMSubtreeModified", onLogLoad, false);
//   理由は下記と同様であると推測される。
//   ref. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage

// NG case. MutationObserver 方式
//   わかめてサーバはおそらく、ウェブページ全体を書き換えている。
//   MutationObserver 方式の「DOM変更検知」はDOM変更時にイベント自体が吹き飛ばされている可能性が高い。
//   ref. https://developer.mozilla.org/ja/docs/Web/API/MutationObserver
