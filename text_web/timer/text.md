# Date型を利用して時計を作ろう！

Dateオブジェクトを学び、時計を作ります。  
setInterval()や、イベントハンドラ(onload)の復習ができます。

## 準備

今回は以下のような時計を作成します。
その前にDateオブジェクトなどを学んでいきましょう。
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook74/202007211442454.png)

### 文字列の結合

二つの文字を合わせて表示するには「+」を利用します。 下記を実行するとアラートで「ここは日本です。」と表示されます。

文字列の結合例
```js
alert("ここは"+"日本です");
```

### Dateオブジェクト
Dateオブジェクトは日付や時刻を表示するために利用されます。 Dateオブジェクトを作成し、下記のメンバでその値を呼び出します。

| メンバ | 内容 | 
|:-----------|:------------| 
| getFullYear() | 年を取得 |
| getMonth() | 月(0-11)を取得　※1を加算すると月が表示 | 
| getDate() | 日(1-31)を取得 |
| getDay() | 曜日(0:日曜日-6:土曜日)を取得 |
| getHours() | 時(0-23)を取得 |
| getMinutes() | 分(0-59)を取得 |
| getSeconds() | 秒(0-59)を取得 |
  

  
以下の手順で利用します。  
  

1. オブジェクトを生成します。

    Dateオブジェクト生成 
    ```js
    var now = new Date();
    ```

2. 年や時間を取得  
    年を変数「year」に入力するのは下記の通りです。

    年を取得 
    ```js
    var now = new Date(); 
    var year = now.getFullYear();
    ```

    時を変数「hour」に入力するのは下記の通りです。

    時(0-23)を取得 
    ```js
    var now = new Date(); 
    var hour = now.getHours();
    ```

### onloadを使う

onloadとはイベントハンドラの一種です。  
これを利用することで、指定したリソース（ページや、画像、タグなど）が読み込まれたタイミングで特定の処理を実行することができます。  
以下のコードは、ページが読み込まれたタイミングでカウントアップするタイマーです。
```html
<script>
    // ページ読み込み時にsetIntervalを設定する
    window.onload = setInterval(UP, 1000);

    // timerの数字を＋１する
    function UP() {
        var timer = document.getElementById("timer");
        var numStr = timer.textContent;
        // ↓String型の数字をInt型の数字に変換する
        var numInt = parseInt(numStr);
        timer.textContent = numInt + 1;
    }
</script>
```
今回はこのonloadを利用して、画面が読み込まれたタイミングで時計が動き始めるようにします。  
次のページから、時計を作成していきましょう。

<!-- こたえ
```html
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>時計</title>
</head>
<style type="text/css">
    body {
        background: url(bg.jpg) no-repeat;
        background-size: 100%;
        color: orange;
    }

    #now {
        position: absolute;
        font-size: 80px;
        width: 100%;
        bottom: 30%;
        text-align: center;
        font-weight: bold;
    }
</style>

<body>
    <div id="now">
        <div id="greeting">Hello, Prokids!</div>
        <span id="hour"></span>
        :
        <span id="minute"></span>
        :
        <span id="second"></span>
    </div>
    <script>
        window.onload = setInterval(timeShow, 200);

        function timeShow() {
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();

            /*現在時刻の表示*/
            document.getElementById("hour").textContent = hour;
            document.getElementById("minute").textContent = minute;
            document.getElementById("second").textContent = second;

            var greeting = document.getElementById("greeting");
            if (hour<=10){
                greeting.textContent = "Good Morning, Prokids!";
            }else if(hour<=18){
                greeting.textContent = "Good Afternoon, Prokids!";
            }else{
                greeting.textContent = "Good Evening, Prokids!";
            }

        }
    </script>
</body>

</html>
``` -->
  
## STEP1 HTMLファイルの作成

【流れ】
1. 新しいHTMLファイル`clock.html`を作成
2. タイトルを時計に変更

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>時計</title>
</head>
<body>
</body>
</html>
```

## STEP2 現在時刻を表示する関数を作成
【ゴール】

現在時刻を表示する`timeShow()`関数を作成します。
本物の時計のように毎秒時間が進む処理は後ほど実装します。

【流れ】

1. 以下のHTMLをbodyタグ内に記述します。
    ```html
    <div id="now">
        <span id="hour"></span>
        : 
        <span id="minute"></span>
        : 
        <span id="second"></span>
    </div>
    ```

2. ３つのspanタグ内にそれぞれ、時、分、秒を表示する関数`timeShow()`を作成します。

    | id | 内容 | 
    |:-----------|:------------| 
    | hour | 時を表示 | 
    | minute | 分を表示 | 
    | second | 秒を表示 |

3. 関数の呼び出し
    
    関数を呼び出してうまく動くかテストしてみましょう。


<!-- 答え

    ```html
    <!DOCTYPE html>
    <html lang="ja">

    <head>
        <meta charset="UTF-8">
        <title>時計</title>
    </head>

    <body>
        <div id="now">
            <span id="hour"></span>
            : 
            <span id="minute"></span>
            : 
            <span id="second"></span>
        </div>
        <script> 
            function timeShow() {
                var now = new Date(); 
                var hour = now.getHours(); 
                var minute = now.getMinutes(); 
                var second = now.getSeconds();

                /*現在時刻の表示*/
                document.getElementById("hour").textContent = hour;
                document.getElementById("minute").textContent = minute;
                document.getElementById("second").textContent = second;
            }
            timeShow();
        </script>
    </body>
    </html>
``` -->

## STEP3 背景画像をダウンロード
【ゴール】  
背景画像をダウンロードし、背景に設定する

【流れ】  
1. [こちら](https://www.ramica.net/photo_landscape/landscape_004.html)から背景画像を決定します。

2. 右クリックで「名前をつけて画像を保存」を選択し、画像をダウンロードします。 ファイル名は、「bg.jpg」とします。 ※保存先は「clock.html」と同じフォルダにします。

3. 以下のCCSを記述し、背景に画像を設定します。
    ```CCS
    body {
        background: url(bg.jpg) no-repeat;
        background-size: 100%;
    }
    ```


## STEP4 文字を装飾

【ゴール】
背景の色を考慮して、見やすい文字のデザインに変更します。

【流れ】
1. 以下のようにCCSを記述します。好きな色や大きさに設定してください。

    ```ccs
    now {
        position: absolute;
        font-size: 120px;
        width: 100%;
        bottom: 20%;
        text-align: center;
        font-weight: bold;
    }
    ```


## STEP5 一定時間内に時計を更新
【ゴール】
0.2秒毎にtimeShow()を呼び出すことで、時計が動いているように見せます。

【流れ】
1. setInterval()を利用して、0.2秒毎にtimeShow()関数を実行するプログラムを記述します。

2. ページが読み込まれたタイミングでsetIntervalが実行されるプログラムを記述します。

<!-- こたえ
```js
window.onload = setInterval(timeShow, 200);
```
 -->

## STEP PLUS 挨拶をする

【ゴール】  
時間に応じた挨拶をします。

【流れ】
1. divタグを追加します。

    文字タグを追加
    ```html
    <div> Hello!! </div>
    ```

2. 挨拶「Hello」の後に自分の名前をつける

3. 時間によって、挨拶「Helloを変更」 

    | 時間 | 表示内容 | 
    |:-----------|:------------| 
    | 0-10 | 「Good Morning」を表示 | 
    | 10-18 | 「Good Afternoon」を表示 | 
    | 18-23 | 「Good Evening」を表示 |
    
<!-- こたえ
```js
var greeting = document.getElementById("greeting");
if (hour<=10){
    greeting.textContent = "Good Morning, Prokids!";
}else if(hour<=18){
    greeting.textContent = "Good Afternoon, Prokids!";
}else{
    greeting.textContent = "Good Evening, Prokids!";
}
``` 
-->