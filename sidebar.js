function copy_comment_to_memo_space(arg) {
  var v = document.getElementById("freememo").value;

  if (arg != null) {
    var o = arg.srcElement;
    while ( o.tagName.toLowerCase() != "tr" ) {
      o = o.parentElement;
    }

    if ( o.childElementCount == 2 ) { // if <tr><td>charecter</td><td>comment</td></tr> style
      v = v + "\n----------------\n" + o.innerText;
      document.getElementById("freememo").value = v;
    }
  }

  return v;
}

function extract_comments(arg) {
// input  : HTMLCollction
//          <table width="770" cellspacing="5"><tbody> ... </tbody></table>
  var re = new RegExp('^\.\/', '');

  var base_table   = arg.querySelector("table").querySelector("tbody");
  var base_tr_list = base_table.querySelectorAll("tr");
  for (var i = 1 ; i < base_tr_list.length ; i++) {
    if (base_tr_list.item(i-1).innerText.match("^◆ 出来事")) {
      var ret_table = base_tr_list.item(i).querySelector("table");

      var img_list = ret_table.querySelectorAll("img");
      for (var j = 0 ; j < img_list.length ; j++) {
        var img = img_list.item(j);
        img.setAttribute("src",
                         img.getAttribute("src").replace(re, "http://jinrou.dip.jp/~jinrou/"));
      }

      return ret_table.outerHTML;
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
document.getElementById("information").addEventListener("click", function(e){ window.top.copy_comment_to_memo_space(e); }, true);
