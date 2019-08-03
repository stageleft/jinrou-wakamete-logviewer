function extract_comments(arg) {
// input  : HTMLCollction
//          <table width="770" cellspacing="5"><tbody> ... </tbody></table>

  console.log(arg);
  var base_table   = arg.querySelector("table").querySelector("tbody");
  var base_tr_list = base_table.querySelectorAll("tr");
  for (var i = 1 ; i < base_tr_list.length ; i++) {
    if (base_tr_list.item(i-1).innerText.match("^◆ 出来事")) {
      return base_tr_list.item(i).querySelector("table").outerHTML;
    }
  }

  return "";
};

// ref. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
function recvLog(request, sender, sendResponse) {
// input  : JSON
//          style : { html_log: village_log_html, text_log: village_log_text, txtc_log: village_log_txtC }
//          see onLogLoad() in wakamete-plugins.js
// output : JSON (fixed value)
//          {response: "OK"}
  var parser = new DOMParser();
  var receivedLog = parser.parseFromString(request.html_log, "text/html");

  document.getElementById("information").innerHTML = extract_comments(receivedLog);

  sendResponse({response: "OK"});
};

// 性能チューニング：コールバック関数を追加はコードの最後の方で。
// 余計な addEventListener() コールを最小化したい。
browser.runtime.onMessage.addListener(recvLog);
