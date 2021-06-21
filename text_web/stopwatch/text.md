# JavaScriptで作るストップウォッチ



## setInterval()で一定時間ごとに特定の処理を行おう

一定時間ごとに表示される画像や文字が切り替わるWebページを見た事はないでしょうか。

ストップウォッチは、0.01秒(=10ミリ秒)ごとに表示する文字をパラパラ漫画のように切り替えることで作る事ができます。

これは **setInterval()** で実装する事ができます。

以下のコードを動かしてみて使い方を学びましょう。

```js
// 一定時間ごとに繰り返したい関数
var hello = function(){
    console.log("こんにちは");
}

// 第1引数に関数、第2引数に何ミリ秒ごとに繰り返すか指定
setInterval(hello, 3000);
```

ブラウザのコンソールに3秒ごとに「こんにちは」が表示されましたか

つぎは以下のコードを動かしてみましょう

```js
// 一定時間ごとに繰り返したい関数
var hello = function(name1){
    console.log(name1 + "こんにちは");
}

// 第3引数に実行したい関数の引数を指定
setInterval(hello, 3000, "一郎くん");
```

繰り返し実行したい関数に引数を渡したい場合は、第3引数以降に指定します。  
複数の引数を指定したい時は以下のように第3引数以降に指定します。

```js
// 一定時間ごとに繰り返したい関数
var hello = function(name1, name2, name3, name4){
    console.log(name1 + name2 + name3 + name4 + "こんにちは");
}

// 第3引数に実行したい関数の引数を指定
setInterval(hello, 3000, "一郎くん","花子さん","次郎くん","さくらさん");
```

繰り返しの処理を止めたい場合があります。 
そのような場合は **ckearInterval()** を利用します。 

以下のコードを動かしてみると、タイマーが取り消され、3秒経ってもなにも表示されません。

```js
// 一定時間ごとに繰り返したい関数
var hello = function(){
    console.log("こんにちは");
}

var timer = setInterval(hello, 3000);

// タイマーを取り消す
clearInterval(timer);
```

clearInterval()は、例えば以下のように実行された回数が5回をこえた時や、ボタンが押された時に実行するといいでしょう。

#### 5回実行されたら停止
```js
// 回数をカウントするための変数
var i = 0;

// 一定時間ごとに繰り返したい関数
var hello = function () {

    i++;

    console.log("こんにちは"+i);

    if (i >= 5) {
        // タイマーを取り消す
        console.log("タイマーを取り消します")
        clearInterval(timer);
    }

}
var timer = setInterval(hello, 1000);
```

#### ボタンが押されたら停止
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="stop()">ストップ</button>
    <script>
        var hello = function(){
            console.log("hello");
        }
        var timer = setInterval(hello, 3000);

        var stop = function(){
            console.log("タイマーを取り消します");
            clearInterval(timer);
        }
    </script>
</body>
</html>
```

## 完成品を確認しよう

スタートを押すと時間計測開始 ストップを押すと時間停止 リセットボタンを押すとタイマーがリセット

<body>
<h1>ストップウォッチ</h1>
時間を計測するためのページです。

<h2>タイム</h2>
<div id="timer">0.00</div>
<input type="button" value="スタート" onclick="start();">
<input type="button" value="ストップ" onclick="stop();">

<script>
    var startTime;
    var timerId;
    var text = document.getElementById("timer");

    function start() {
        var startDate = new Date();
        startTime = startDate.getTime();
        timerId = setInterval(update, 10);
    }

    function update() {
        var now = new Date();
        var updateTime = now.getTime();
        // ミリ秒を秒に直す
        var timer = (updateTime - startTime)/1000;
        text.textContent = timer.toFixed(2);
    }

    function stop(){
        clearInterval(timerId);
    }
    
</script>

</body>

このコードはこのように動いています。
1. スタートボタンが押されると、開始時刻を取得する
2. setInterval()で10ミリ秒ごとに(現在時刻-開始時刻)を計算し、表示する数字を更新する
3. ストップボタンが押されると、setInterval()を止める

![](../さしえ.jpg)


## Mission1 HTMLファイルの作成
【ゴール】

HTMLファイルを作成しましょう。 ファイル名は、travel_cource.htmlにします。

【流れ】

1. HTMLファイルを作成する

2. html:5のテンプレートを入力する

3. ページのタイトル部分を「 旅行予約サイト 」に書き換える

4. 以下のコードを書く

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ストップウォッチ</title>
    </head>
    <body>
        <h1>ストップウォッチ</h1>
        時間を計測するためのページです。

        <h2>タイム</h2>
        <div id="timer">0.00</div>
        <input type="button" value="スタート" onclick="">
        <input type="button" value="ストップ" onclick="">
        
    </body>
    </html>
    ````

## Mission2 スタートボタンを作成

【ゴール】

押すと時間の計測が始まるスタートボタンを作る


【流れ】

1. 関数「start」を作成 下記で現在時刻を取得
    
    ```js
    // どの関数でも呼び出せるように最初に宣言しておく
    var startTime;
    var timerId;

    function start() {
        // ↓時間を管理するDateオブジェクトを作成 
        var startDate = new Date();
        // ↓関数getで、日付/時刻の値を1970年1月1日0時0分0秒(UTC)を起点とした経過ミリ秒を取得
        startTime = startDate.getTime();
    } 
    ```

2. inputタグのonclick属性にて関数「start」を呼び出す

3. 10ミリ秒ごとに文字を切り替える関数「update」を作成

    ```js
    var timerText = document.getElementById("timer");

    function update() {
        // 現在時刻を取得
        var now = new Date();
        var updateTime = now.getTime();
        // ミリ秒を秒に直す
        var timer = (updateTime - startTime)/1000;
        timerText.textContent = timer;
    }
    ```
    

4. setIntervalで10ミリ秒ごとにupdate関数を呼び出す 

5. toFixedで桁数を指定
    今のままでは見た目が微妙なので、小数第2位まで表示するようにしましょう。  
    timerText.textContentに代入するものを以下のように変更してください。  
    timer.toFixed(2)


## STEP5　ストップボタンを作成
【流れ】
1. 関数「stop()」を作成

    clearInterval()を利用してタイマーをとめる

2. buttonタグにonclick属性で関数「stop()」を呼び出す
