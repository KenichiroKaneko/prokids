# スロットマシーンを作ろう！

## 完成品を確認しよう

- スタートすると文字が切り替わり開始
- スロットのストップボタンは３個
- スロットのスタートボタンは１個
- ストップボタンを押すとスロット停止
- スロットの文字の種類は３種類
- 背景に画像を設定

<style type="text/css">
    #slotmachine {
        text-align: center;
    }

    .slot {
        font-size: 50px;
        color: white;
        padding: 7px;
        margin: 10px;
        background-color: powderblue;
        width: 100px;
        display: inline-block;
        border-radius: 15px;
    }

    .btnS {
        padding: 20px 50p;
        background-color: springgreen;
        color: white;
        padding: 7px;
        margin: 20px;
        width: 100px;
        box-shadow: 0 1px 0 lightgray;
        border-radius: 5px;
    }

    #startBtn {
        background-color: tomato;
    }
</style>
<div id="slotmachine">
    <div>
        <!-- スロット -->
        <div class="slot" id="slot1">a</div>
        <div class="slot" id="slot2">b</div>
        <div class="slot" id="slot3">c</div>
    </div>
    <div>
        <!-- ストップボタン -->
        <input class="btnS" type="button" value="stop1" onclick="stop(0);">
        <input class="btnS" type="button" value="stop2" onclick="stop(1);">
        <input class="btnS" type="button" value="stop3" onclick="stop(2);">
    </div>
    <div>
        <!-- スタートボタン -->
        <input class="btnS" id="startBtn" type="button" value="start" onclick="start();">
    </div>
</div>
<script type="text/javascript">
    var slotPic = ["a","b","c"];
    var timerList =[];
    var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");

    function start() {
        runSlot(0, slot1);
        runSlot(1, slot2);
        runSlot(2, slot3);
    }

    function runSlot(n, slot) {
        slot.textContent = slotPic[Math.floor(Math.random() * slotPic.length)];
        timerList[n] = setTimeout(function(){
            runSlot(n, slot),
            50
        });
    }

    function stop(n){
        clearTimeout(timerList[n]);
    }
</script>

完成品を確認したら、次はこのプログラムで使われている再帰処理を学んでいきましょう

## 準備 再帰処理

### 再帰処理とは

再帰処理というのは、**関数が自分自身を呼び出す処理**という意味です。  
無限に続くマトリョーシカのようなイメージです。

以下の関数を実行したらどうなるか考えてみましょう。

```js
function add(x) {
    console.log(x);
    add(x+1);
}
```

add()関数の中でadd()関数が呼び出されているのがわかります。  
関数が自分自身を呼び出しているので、これは**再帰処理**をしていると言えます。  
なので、一度実行したら無限に呼び出されてコンソールに無限に足し算の結果が表示されていきます。  
  
無限に立て続けに実行されてしまっては、制御できないので、 **setTimeout()** と組み合わせて、関数を再帰処理を中断したり、再帰処理が行われる時間の間隔を調整したりしてみます。  

以下のスタートボタンを押してみてください。

<button onclick="calc(0,1);">スタート</button>
<button onclick="stopCalc();">ストップ</button>
<div id="a"></div>
<script>
    var stopCalc;
    
    function calc(x, y) {
                    
        // HTMLを書き加える処理
        var a = document.getElementById("a");
        a.insertAdjacentHTML('afterbegin', `<div>${x}</div>`);

        // 一定時間後に再帰的にcalc()関数を呼び出している
        stopId = setTimeout(function(){calc(y, x+y);}, 500);

        // 上限
        if (x>100000){return;}
    }

    function stopCalc(){
        clearTimeout(stopId);
    }

</script>

このプログラムのコードは以下の通りです。  

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>フィボナッチ数列</title>
</head>
<body>
    <button onclick="calc(0,1);">スタート</button>
    <button onclick="stopCalc();">ストップ</button>
    <div id="a"></div>
    <script>
        var stopCalc;
        
        function calc(x, y) {
                        
            // HTMLを書き加える処理
            var a = document.getElementById("a");
            a.insertAdjacentHTML('afterbegin', `<div>${x}</div>`);

            // 一定時間後に再帰的にcalc()関数を呼び出している
            stopId = setTimeout(function(){calc(y, x+y);}, 500);

            // 上限
            if (x>100000){return;}
        }

        function stopCalc(){
            clearTimeout(stopId);
        }

    </script>
</body>
</html>
```

スロットマシーンはこの **setTimeout()** と**再帰処理**を組み合わせて作成していきます。  

### setTimeout()と再帰処理を組み合わせるメリット

setTimeout()では、並行して処理を行えるというメリットがあります。  
例えば、for文や、while文で無限ループを作成してスロットマシーンの文字の切り替えを実現しようとしたら、3つのスロットを同時動かしたり、バラバラに停止したりすることはできません。  
これは一口のガスコンロで料理をしているようなイメージです。  
ですが、setTimeout()だと三口のガスコンロで料理するように、並行して処理を行えるので、3つのスロットを操る事ができます。  

## Mission1 HTMLファイルの作成
1. visual studioを起動してファイルを作成

2. ファイル名を「slot.html」として保存

3. 「!」と入力してHTMLを自動入力

4. htmlタグのlangを「ja」に変更

5. タイトルを「スロットマシーン」に変更

## Mission2 スロットとボタンを配置
【ゴール】  
見た目を完成させる

【流れ】
1. spanタグ、divタグ、inputタグを使ってレイアウト

    ボタンに表示される名称はvalue属性について記述

    ```html
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>スロットマシーン</title>
    </head>
    <body>
        <div id="slotmachine">
            <div>
                <!-- スロット -->
                <div class="slot" id="slot1">a</div>
                <div class="slot" id="slot2">b</div>
                <div class="slot" id="slot3">c</div>
            </div>
            <div>
                <!-- ストップボタン -->
                <input class="btn" type="button" value="stop1">
                <input class="btn" type="button" value="stop2">
                <input class="btn" type="button" value="stop3">
            </div>
            <div>
                <!-- スタートボタン -->
                <input class="btn" id="startBtn" type="button" value="start" >
            </div>
        </div>
    </body>
    </html>
    ```
2. spanタグとbuttonタグに関連したCSSを記述デザイン
    ```css
    body{
        text-align: center;
    }
    .slot{
        font-size: 50px;
        color:white;
        background-color: powderblue;
        padding: 7px;
        margin: 10px;
        width: 100px;
        <!-- inline-blockで横並びに表示させる -->
        display: inline-block;
        border-radius: 15px;
    }
    .btn{
        color: white;
        background-color: springgreen;
        padding: 7px;
        margin: 20px;
        width: 100px;
        box-shadow: 0 1px 0 lightgray;
        border-radius: 5px;
    }
    #startBtn{
        background-color: tomato;
    }
    ```

## Mission3 スタートボタンの関数を作成
【ゴール】  
スタートボタンを押した時に文字がコロコロ切り替わるようにする

【流れ】
1. 変数を定義

    |変数名|用途|
    |:---|:---|
    |slotPic|Slotの文字一覧のリスト|
    |slot1~slot3|slotごとのタグ|
    |timerList|slotごとに使われるsetTimeoutの制御用のIDのリスト|
  

2. 関数を定義

    穴埋め形式で実装していきましょう。

    ```js
    // スロットをスタートする関数
    function start() {
        runSlot(0,slot1);
        runSlot(1,slot2);
        runSlot(2,slot3);
    }

    // 再帰的にスロットの文字をコロコロ切り替える関数
    function runSlot(n,slot) {
        slot.textContent = コード①;
        timerList[n] = setTimeout(コード②);
    }
    ```
    このコードでは以下の処理が行われています。
    1. start()関数を実行すると、runSlot()関数が実行されます。  
    2. runSlot()関数は実行されると、スロットの文字を一回切り替えた後、再び自分自身であるrunSlot()関数を呼び出します。(再帰処理)  
        したがって無限にrunSlot()関数が実行されることになるので、スロットの文字が無限にコロコロと切り替わるようになります。

    コード①には`slotPic`リストに格納されている文字から１つを**ランダムに**取り出す処理を書きます。  
    占いアプリで扱った **Math.random()** を利用して実装しましょう。
      
    コード②にはsetTimeout()と再帰処理を組み合わせた処理を書きます。

3. ボタンで関数を呼び出す  

    スタートボタンのonClick属性でstart()関数を呼び出しましょう。  
    ここも穴埋め形式でやってみましょう。  
    ```html
    <input class="btn" id="startBtn" type="button" value="start" コード③>
    ```
    コード③に記述してください。  

## Mission4 ストップボタンの関数を作成
【ゴール】  
ストップボタンを押すとそれぞれのスロットが停止するようにする。

【流れ】
1. stop()関数の定義  
    timerListにsetTimeout()を停止するためのIDを管理してあるので、それを利用して、スロットを停止する関数をつくります。  

    ```js
    function stop(n){
        コード①
    }
    ```
    コード①には、  
    スロット1のストップボタンが押されたら、clearTimeout(timerList[0])が実行され、  
    スロット2のストップボタンが押されたら、clearTimeout(timerList[1])が実行され、、、  
    というような処理を実装してください。  

    次の工程の「ボタンで関数を呼び出す」のコードも参考にして考えましょう。
    
2. ボタンで関数を呼び出す
    ```html
    <input class="btn" type="button" value="stop1" onClick="stop(0)">
    <input class="btn" type="button" value="stop2" onClick="stop(1)">
    <input class="btn" type="button" value="stop3" onClick="stop(2)">
    ```

これでスロットマシーンの完成です。  
Mission Plusにもチャレンジしてみましょう。

## Mission Plus
以下の機能を実装してみましょう。
- スタートボタンを連続で押す事を禁止する
- ストップボタンを連続で押す事を禁止する
- スロットの文字（a,b,c）を好きな画像に変更する