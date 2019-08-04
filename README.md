# about Jinrou-Wakamete-Log-Viewer

Support tool for online "Are You a Werewolf?" game in Wakamete Server ( http://jinrou.dip.jp/~jinrou/ ).
You get easier to read Chat Log.
It is Sidebar Plugins for Mozilla Firefox.

Firefoxのサイドバーを用いた、人狼ゲーム・わかめて鯖 http://jinrou.dip.jp/~jinrou/ 向けログ読み取り容易化ツール。

# Support Language

Japanese only, because Wakamete Server can support only Japanese.

わかめて鯖が日本語なので、日本語以外対応しません。あしからず。

# How to Install （どうやってインストールするの？）

1. 登録されている wakamete-log-viewer.xpi をダウンロードしてください。
1. https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Packaging_and_installation の、
「ディスクから読み込む」セクションに従ってインストールしてください。  
インストール完了後は、 about:debugging のページを閉じてしまってかまいません。  
なお、起動のたびにインストールする必要がありますので、 about:debugging をブックマークしておくことをお勧めします。

Note: 「パッケージ化してインストールする」での手順については、今後の検討課題とさせてください。   
 https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/Distribution を読んで考えます。。。

# How to Use （どうやって使うの？）

インストールを完了した直後、サイドバーが現れました。
サイドバーは、以下の３つの領域からなります。

* 人狼わかめて鯖へのリンク
* メモのエリア
* ログのエリア

1. 上記リンクを使って人狼わかめて鯖へログインし、村民登録を行います。  
   ログインから「観戦」、過去ログから「記録を見る」でも利用可能です。
1. 通常のゲームを進めます。ログのエリアに、現在表示されているログのコピーが表示されます。  
   「◆ 村人たち」や「◆ 行動設定」のエリアがない分だけ、ログを広く見ることができます。  
   （これは、「◆ 村人たち」のエリアが広い大人数村でより有利です）  
   一方で、「行動/更新」をクリックしてからこのエリアが更新されるまで、０．５～１秒程度の遅れが発生します。
1. メモのエリアは、ひとまず自由にお使いいただいて構いません。
1. ログのエリアに表示された、村人たちの発言をクリックします。  
   この発言が、メモのエリアに追記されます。  
   なお、村人たちの発言以外（システムメッセージ、投票結果）をクリックしても何も起こりません。

# Modification （改造してよい？）

Mozilla Public License Version 2.0 に従った範囲で、自由に改造して、どうぞ。

# Special Thanks

* ｢汝は人狼なりや？｣続わかめてエディション サーバー管理者およびWiki管理者各位  
  http://jinrou.dip.jp/~jinrou/
* 「わかめてモバマス人狼」GMおよび参加者各位  
  https://twitter.com/mobamasjinrou  
  https://wikiwiki.jp/cinderejinro/

