# 【jQuery第7回】Ajaxを学ぶ


## 「Ajaxを使って住所検索サイトを作成する」

jQuery第7回になります。

今回は、jsonとAjaxについて勉強しましょう。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook95/202010301143180_jquery-logo.png)

## 1-1.jsonとは

まずは json について勉強しましょう。

`json`とは、JavaScript Object Notationの略で、「 **JavaScriptにおけるオブジェクトの表記法を応用したデータ形式** 」のことです。

すこし難しいので

1. JavaScriptにおけるオブジェクトの表示方法　<br />
2. データ形式

の2つに分けて考えていきます。

↓厚切りジェイソン
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook95/202010301143191_json.jpeg)

## 1-2. jsonの記述形式

まずは、1. JavaScriptにおけるオブジェクトの表記方法 についてです。

JavaScriptについてはweb基礎コースで全8回にわたって勉強してきました。 <br/>
その中でも、JavaScript第5回で習った`オブジェクト`について覚えているでしょうか。

オブジェクトは`{}(波かっこ）`を使って下記のように作成しました。

```JavaScript
var 変数名 = {
    プロパティ名1: データ,
    プロパティ名2: データ,
    プロパティ名3: データ
};
```

jsonは、このオブジェクトのデータ構造をしているのです。 <br />
jsonのサンプルで記述形式を見てみましょう。

```JavaScript
var user = {
    "FirstName": "鈴木",
    "LastName": "一郎",
    "age": 23
};
```

オブジェクトの書き方とほとんど同じです。

jsonでは、**"FirstName"** にあたる部分を`キー(key)`といい、**"鈴木"** にあたる部分を`値(value)`といいます。

```JavaScript
var user = {
    "キー(key)": "値(value)",
    "キー(key)": "値(value)",
    "キー(key)": "値(value)"
};
```
キーも値も文字列の場合は、`"(ダブルクオーテーション)`で囲む必要があります。整数または実数の場合はそのまま記述することができます。

また、キーと値のペアは`:(コロン)`を使って区切り、複数のキーと値を持つ場合は`,(カンマ)`によってペアを分けます。

<br />

## 1-3. jsonのデータ形式

今度は、2. データ形式について考えます。

`データ形式`とは、データフォーマットとも呼ばれ、「 **特定の形式（フォーマット）に当てはめられたデータ** 」のことです。

例えば、webページを作成するファイルは、HTMLという形式に従って記述していますね。同様に、データのやりとりをする場合に決められた形式のことを、データフォーマットというのです。

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328561.png" width="480px" />


**データのやりとりの形式を統一することで、誰もがわかりやすく、コンピュータに対しても伝達することができます。**

データフォーマットは、jsonの他にも「XML」や「CSV」があります。

今回制作する、住所検索サイトのデータのやりとりには**json**を使用します。

## 2. Ajaxとは

Aiaxについては、jQuery第1回で少しだけ触れました。

`Ajax`とは、「 **外部サーバと非同期通信を行う機能** 」ですね。
ブラウザとサーバの間で情報のやりとりを行い、webページを再読み込み（リロード）することなく、内容を更新することが出来る仕組みです。

外部サーバは、家庭や職場の外にあるサーバです。

第1回では具体的に説明していなかったので、ここではAjaxについて詳しく勉強していきます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook95/202010301145122_スライド2.JPG)

## 2-1. Ajaxの書き方

jQueryでAjaxを利用するためには、下記の記述が基本となります。

```JavaScript
$.ajax({
    // オプションの指定
})
.done(function(){
    // 通信に成功した場合の処理
})
.fail(function(){
    // 通信に失敗した場合の処理
})
```

具体的な記述方法は下記のようになります。

```html
<script>
$.ajax({
    type: "GET",
    url: "https://zipcloud.ibsnet.co.jp/api/search",
    data: {
        zipcode: postcode,
    },
    dataType: "jsonp",
})
</script>
```

<br />

## 2-2. $.ajaxのオプションの種類

$.ajaxメソッドにはいくつかのオプションが用意されています。

|  オプション |  説明 | 値　|
| :----- | :----- | :---- |
| type | HTTP通信の種類を設定する（何も設定しなければ「GET」になる）|GET または POST |
| url | リクエストを送信するURLの指定　|url |
| date | リクエスト先に送信するデータ |{プロパティ:値} |
| dateType |データの形式の指定 |text, html, json など |
| async | 非同期通信をするかどうかの設定。（何も指定しなければ「true」になす） |true または false | 
| success | 通信が成功した場合に呼び出されるメソッド　|function(){} |
| error | 通信エラーが発生した場合に呼び出されるメソッド |function(){} |

<br />

## 2-3. Ajaxの注意点

Ajaxを利用する時には、以下の2つの点に注意する必要があります。

1. 文字コードは「UTF-8」を使用する
2. 他のドメインのリソースへアクセスには制限がある

1つ目の文字コードはUTF-8を使用するのは、他のも文字コードを使用すると、ブラウザ上で表示する際に日本語では文字化けが発生するからです。

そのため、webサーバからテキスト形式でデータを受信する場合は、HTMLの文字コードに関係なく、受信するデータの文字コードを「**UTF-8**」に設定しましょう。

<br />

2つ目は、他ドメインのリソースへのアクセスには制限がかけられている場合があることです。

ドメインとは、「 **インターネット上に存在するコンピュータやネットワークを識別するための名前** 」です。

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328560.png" width="480px" />

ホームページのURLやメールアドレスでは、ドメインによって名前をつけて指定しています。

## 3. 住所検索サイトの作成

###  ゴール

Ajaxを利用して、郵便番号から住所を検索することができるWebサイトを作成しましょう。

郵便番号を入力してカーソルを離すと、自動的に検索結果を表示します。

【完成イメージ】

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328562.png" width="480px" />

## Mission1 「HTMLファイルの作成」

【ゴール】

HTMLファイルを作成しましょう。
ファイル名は、**search_postcode.html**にします。

【流れ】

1. HTMLファイルを作成する

2. HTMLのテンプレートを入力する

3. ページのタイトル部分を「 **郵便番号検索** 」に書き換える

4. 英語表記を日本語表記に変更する

<br />

## Mission2 「jQueryのインポート」

【ゴール】

jQueryを使用するために、それぞれのファイルを読み込みましょう。

【流れ】

1. CDN形式でjQueryをインポートする
<a href="https://code.jquery.com/">jQuery公式サイトのダウンロードページ</a>

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook95/202010301147213_スライド4.JPG)

## Mission3 「入力フォームと検索結果を表示する場所の作成」

【ゴール】

検索したい郵便番号を入力するフォームと、検索結果を表示する場所を作成しましょう。

【流れ】

1. 「郵便番号から住所検索」という見出しを作成する。

2.  郵便番号を入力するフォームを作成する。

3. 「ハイフンなしで入力してください。」という文章を作成する。

4. 「検索結果」という見出しを作成する。

5. 都道府県・市区町村・町域 の検索結果を表示する場所をそれぞれ作成する。

【該当部分】

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328563.png" width="480px" />

## Mission4 「マウスのカーソルが離れたときに結果を表示する」

Ajaxを用いて住所を取得する関数を実装するために、Mission4では、関数を実行するためのイベントを作成します。

住所を取得する関数が実行されるタイミングは、フォームからフォーカスが外れた時にします。

試しに以下のフォームに何か入力した後に、フォームの外をクリックしてフォーカスを外してみてください。

<input class="eventTest" type="text">
<input type="submit">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>
<script>
$(".eventTest").blur(function () { 
var postcode = $(this).val();
alert(postcode+'が入力されました、このタイミングで住所を取得する関数を実行！');
});
</script>
  
  
【ゴール】

inputタグからマウスのカーソルが離れると、コンソールに「xxxが入力されました、この中にAjaxの処理を記述する。」という文が表示される仕組みにしましょう。

【流れ】

1. 郵便番号を入力するinputタグから、カーソルが離れたときにblurイベントを発生させる。
2. **postcode**という変数に、フォームに入力された値を代入する。
2. コンソールに文字列を出力する記述をする。

【ヒント】

先ほどのフォームのソースコードは以下の通りです。こちらを参考にして、Mission4をやってみましょう。

```html
<input type="text">
<input type="submit">
<script>
    $(".eventTest").blur(function () {
        var postcode = $(this).val();
        alert(postcode + 'が入力されました、このタイミングで住所を取得する関数を実行！');
    });
</script>
```
## Mission5 「Ajaxを利用する」

【ゴール】

郵便番号API（アプリケーション・プログラミング・インターフェース）の<a href="http://zipcloud.ibsnet.co.jp/doc/api">zipcode</a>を利用したAjaxを記述する。

郵便番号APIは、郵便番号を送信すると該当する住所をJson形式で返信してくれるサービスです。

試しに[https://zipcloud.ibsnet.co.jp/api/search?zipcode=1310045](https://zipcloud.ibsnet.co.jp/api/search?zipcode=1310045)にアクセスしてみましょう。

上記のサイトからJson形式の住所が確認できたらMissionを進めていきましょう。

【流れ】

1. Mission4で作成したイベントの中に、postcodeという変数を作成し、

1. Ajaxの処理を記述しましょう。

    **type**は「GET」に、**url**は「https://zipcloud.ibsnet.co.jp/api/search」に、**datetype**は「json」に、**date**は「zipcode: postcode」に指定しましょう。

【ヒント】

Ajaxの基本的な書き方は以下の通りです。
```JavaScript
$.ajax({
    // オプションの指定
})
.done(function(){
    // 通信に成功した場合の処理
})
.fail(function(){
    // 通信に失敗した場合の処理
})
```


## Mission6 「Ajax通信に成功した場合の処理を記述する」

例えば、フォームに東京スカイツリーの住所である「1310045」が入力されれば、Ajax通信で住所のデータを取得することができますが、もし「123」や「おはよう」のようなでたらめな郵便番号が入力されたらどうなるでしょうか。

実は、APIには、正常に処理が完了したときや、無理な要求をされたとき、サーバーエラーが発生したときなどに応じて返却される**HTTPステータスコード**というものがあり、これを参照することで、正常時と異常時に実行されるプログラムをそれぞれ記述することができます。


【ゴール】

Ajax通信に成功した場合の処理を、if文を用いて正常時と異常時の２通り記述する。

【流れ】
1. 正常時かそうではないかをHTTPステータスコードで判別しif文で分岐する。

2. 正常時について

    1. データが正しく送信されたとき、変数**result**にデータを格納しましょう。

    2. 変数**address1**を作成し、都道府県名のデータを格納しましょう。

    3. 変数**address2**を作成し、市町村名のデータを格納しましょう。

    4. 変数**address3**を作成し、町域名のデータを格納しましょう。

3. 異常時について

    住所が取得できなかった場合に、「取得できませんでした」と表示しましょう。

4. それぞれのデータをブラウザ上に表示しましょう。

【ヒント】

1. 正常時と異常時の判別

    <a href="http://zipcloud.ibsnet.co.jp/doc/api">zipcode</a>の「レスポンスフィールド」を参考にしましょう。

2. HTTPステータスコードの参照

    `.done(function(data){})`というように、Ajax通信が成功した場合の関数の引数を`data`とすると、

    ```js
    data.status
    ```

    と記述すれば参照できます。


【該当部分】

1. 正常時

    <img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328574.png" width="480px" />

2. 異常時

    <img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook95/202008171328575.png" width="480px" />

## Mission7 「通信に失敗したときの処理を記述する」

パソコンがインターネット回線に接続されていなかった時などに、通信に失敗することがあります。

【ゴール】

通信に失敗したら、ダイアログで「通信に失敗しました」と表示する。


【流れ】

1. 通信に失敗した場合の処理を記述する。


これでjQuery第7回は終わりになります。
お疲れ様でした。

