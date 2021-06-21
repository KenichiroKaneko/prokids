# [CSS] セレクタの基礎

セレクタ指定による優先順位の決定など、セレクタに関する基礎を学びます。

## ゴール

### 今回作る Web サイト

スポーツニュースサイトを作成していきます。

【1 ページ目】  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041311550110_goal.png)

【2 ページ目】  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041311563911_goal2.png)

## 属性を利用した指定

今まではタグを指定してデザインを変更するやり方を学んできました。

しかし、同じタグが複数ある場合には、それらすべてにデザインが適応されてしまいます。  
実際に style タグと body タグに下記のコードを入力してみましょう。

```html
<style>
  div {
    color: Orange;
  }
</style>

<body>
  <div>オレンジ</div>
  <div>ピンク</div>
  <div>グリーン</div>
</body>
```

下の画像のように、div タグで囲んだすべての文字の色がオレンジに変わっていることがわかります。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041514125012_ex.png)

そこで、次からは特定の要素のみにデザインを加えることができる、**class 属性**と**id 属性**について学んでいきましょう。

## class 属性と id 属性

特定のセレクタに対してデザインを変更するためには**class 属性**と**id 属性**を使います。

この 2 つの属性には大きな違いがあります。

それは、**id 属性**は 1 ページ内で**一度しか**使うことができませんが、**class 属性**は**何度でも**利用することができます。

下記のコードを見てみましょう。

```html
<body>
  <h1 id="today">今日の天気予報</h1>
  <div class="tenki">晴れ</div>
  <div class="kion">22度</div>
  <h1 id="tomorrow">明日の天気</h1>
  <div class="tenki">曇り</div>
  <div class="kion">18度</div>
</body>
```

このように、`id="today"`や`id="tomorrow"`は 1 ページ内で重複して指定することができませんが、`class="tenki"`や`class="kion"`は複数指定することができます。

では、id 属性と class 属性の具体的な記述方法を学んでいきましょう。

## class を利用した指定

###class 属性

使用する手順は以下の通りです。

① デザインを追加したいタグに`クラス名`を追加

②style タグに`.クラス名`でデザインを追加

### 練習

では、今回は特定の要素のみ青色に文字色を変更していきます。

body タグに

```html
<p>何も指定しない</p>
<p class="blue">青を指定</p>
<p>何も指定しない</p>
<p class="blue">青を指定</p>
<p>何も指定しない</p>
```

style タグに

```css
.blue {
  color: blue;
}
```

と記入してみましょう。

このように、`class`を用いることで特定のセレクタにデザインを加えることができます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202010151634280_class_selecter.png)

## id を利用した指定

###id 属性

使用する手順は以下の通りです。

① デザインを追加したいタグに`id名`を追加

②style タグに`#id名`でデザインを追加

### 練習

では、実際に使ってみましょう。

body タグに

```html
<p>何も指定しない</p>
<p id="green">idを指定</p>
<p>何も指定しない</p>
<p>何も指定しない</p>
```

style タグに

```css
#green {
  color: green;
}
```

と記入します。すると、class 属性を使用した時と同じように、特定のセレクタのデザインだけ変更されていますね。

しかし、id は class と違い 1 ページ内で**1 度しか**使えないことに注意しましょう。

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook68/2020072016362912.png" width="480px" />

## 複数のセレクタを選択

### 複数の要素を選択

複数のタグについて同じデザインを適応させたいときに、複数のセレクタを選択することができます。

`,`で 2 つ以上のセレクタを区切ることで、複数のセレクタに同じデザインを適応させることができます。

例えば以下は`h1タグの要素`と`class名が'a'である要素`の文字色を赤色にする場合のコードです。

```css
h1,
.a {
  color: red;
}
```

### ユニバーサルセレクタ

さらにページ上の全要素を選択する方法もあります。

セレクタの部分に`*`と入力することで全要素を選択することができます。

`*` を`ユニバーサルセレクタ`と言います。

以下は全要素のコンテンツの配置を中央揃えにするコードです。

```css
* {
  text-align: center;
}
```

## :before, :after 擬似要素

`:before擬似要素`, `:after擬似要素`と`contentプロパティ`を用いて、要素の直前や直後にデザインされた文字などを挿入することができます。

### 準備

まず、準備として HTML ファイルに以下を記入してみましょう。

```html
<!-- bodyタグ -->
<div id="main">
  <p class="precaution">これは注意書きです。</p>
  <ul>
    <li class="new">新しいコンテンツ</li>
    <li>コンテンツ</li>
    <li>コンテンツ</li>
  </ul>
</div>
```

```css
/* styleタグ */
#main {
  margin: 50px 200px;
}

.precaution {
  font-size: 24px;
  margin-left: 40px;
}

li {
  font-size: 20px;
  margin-bottom: 12px;
}
```

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202012070516525_before.png)

ファイルを保存して確認してみましょう。

### 擬似セレクタ

`直前`に決まった文字などを挿入したい場合は`:before擬似セレクタ`, `直後`に挿入したい場合は`:after擬似セレクタ`を利用します。

今回は`.precaution要素`の直前に挿入するので, style タグに新しく、

```css
.precaution:before {
}
```

を作成します。

まず必須なのが、`contentプロパティ`です。ここには挿入する文字を入力します。

`""`で囲うのを忘れないようにしましょう。

```css
.precaution:before {
  content: "※";
}
```

これにより、`.precaution要素`の直前に`※`という文字が挿入されました。

この後は擬似要素として挿入する文字のスタイルを記入していきます。

```css
.precaution:before {
  content: "※";
  color: red;
  margin-right: 6px;
}
```

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041514330213_priority3.png)

※が.precaution クラスの直前に表示されるようになりました。

### 擬似セレクタを利用する利点

以上のようにコンテンツの直後にデザインされた文字などを追加するには、この方法だけでなく下のように`spanタグ`を利用する方法もあります。

```html
<!-- HTML -->
<li class="new">新しいコンテンツ<span>[NEW!!]</span></li>
```

```css
/* CSS */
span {
  font-size: 16px;
  color: orangered;
  margin-left: 4px;
}
```

しかし、これでは新しく要素を追加する場合も毎回 span タグを追加する必要があるという欠点があります。

そこで、`after擬似要素`を利用すれば、新しく追加する`liタグ`に`class="new"`をつけるだけでなので手間が省けます。

`after擬似要素`も直前か直後かの違いだけで書き方は全く一緒です。

### 練習問題

【流れ】

1. new クラスの直後に[NEW !!]と追加。
2. 文字の大きさは 16px、色は#FF4602 に設定。
3. 左側に`4px`の間隔を開けるように設定。

【ヒント】  
new クラスに:after を使用する。

【完成イメージ】  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202012070517136_after.png)

## 子孫セレクタ

### 入れ子構造

HTML を使う場合、`入れ子構造`はよく出てきます。

`入れ子構造`とは、以下のようにタグの中にタグが入っている構造。複数の要素をかたまりとして見て、わかりやすくするためにによく使われます。

```html
<div id="main">
  <p>Hello</p>
  <div class="item">
    <p>Hello</p>
  </div>
  <p>Hello</p>
</div>
<div id="sub">
  <p>Hello</p>
</div>
```

`子孫セレクタ`はこのような入れ子構造が出てきたときに便利です。

### 子孫セレクタ

入れ子構造において、あるタグの中に入っている要素を、そのタグにおける`子孫要素`と呼びます。  
例えば、上記のコードの場合`<p>Hello</p>`は div タグの中に入っているため、`divタグの子孫要素`です。  
そのような`子孫要素`をセレクタに指定することで、その要素だけにスタイルを適用することができます。  
例えば、上の例で`div#main`の子孫の`pタグ`を指定する場合は以下のように、`半角スペース`で区切ります。

```css
div#main p {
  color: red;
}
```

ブラウザを確認すると`div#main要素`の子孫要素の`p要素`のみにスタイルが適用されていて、`div#sub要素`の中の`p要素`には適用されていないのがわかります。  
さらに`div.item要素`の中の`p要素`にも別のスタイルを適用させてみましょう。

```css
div#main div.item p {
  color: green;
}
```

すると、`div.item要素`内の`p要素`のスタイルも変更されていることがわかります。

## スタイルの優先順位

スタイルを適用する時、実はある法則に沿って適用させる優先順位を決めています。

### セレクタの種類による優先順位

以下のような場合、優先順位をつけることでコーディングが楽になります。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202012070146283_priority1.png)

上のページのコードは以下です。

```css
/* styleタグ */
p {
  font-family: "ヒラギノ明朝 ProN";
  color: blue;
  margin: 32px;
  font-size: 24px;
}
```

```html
<!-- bodyタグ -->
<p>pタグ要素の文字や大きさ、間隔などのスタイルはこんな感じにしたい。</p>
<p>つまりほとんどのプロパティの値はこのままにしたいが...</p>
<p>この行の文字の色だけ赤色にしたい!!!</p>
```

つまり, color プロパティ以外の値を保持しつつ, 最後の p タグのみ color プロパティの値を変更したい場合です。

種類の異なるセレクタによって同じプロパティが指定された場合には以下のルールに従って優先順位が決定されます。

1. id セレクタや class セレクタなどの具体的なセレクタは、ユニバーサルセレクタ(\*)のような全般的なセレクタより優先される

2. id セレクタは class セレクタより優先される

3. 要素を特定した id セレクタ・class セレクタは、要素を特定しない id セレクタ・class セレクタより優先される

4. 優先順位が同じになった場合は、最後に指定したスタイルが適用される

下の問題を見て、どのような優先順位で適用されるか考えながら学びましょう。

**【問題】** `何色になる？` の部分はブラウザ上で何色で表示されるでしょうか? 予想を立ててから答えを確認してください。

```css
/* styleタグ */
p#xyz {
  color: blue;
}

p.abc {
  color: yellow;
}

p {
  color: red;
}
```

```html
<!-- bodyタグ -->
<p class="abc" id="xyz">何色になる？</p>
```

**【解説 & 答え】**

まず、id や class を指定した`p#xyz`や`p.abc`は`p`より優先されます。

さらに、class より id を指定した方が優先されるので`p#xyz`の方が優先されます。

となり、最終的には`p#xyzセレクタ`が優先され、**青**が答えです。

<!-- ### 練習

では、最初に出てきた例を下の図のように最後のpタグだけ文字の色を変えてください。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202012070329124_priority2.png) -->

### 子孫セレクタの優先順位

前項で、子孫セレクタについて学びました。  
子孫セレクタにも優先順位があり、**より詳しく書いたもの**がより優先されて適用されます。

例えば、

```html
<div id="main">
  <p>Hello</p>
  <div class="item">
    <p>Hello</p>
  </div>
  <p>Hello</p>
</div>
```

という構造に対して、

```css
div#main p {
  margin-left: 10px;
}

div#main div.item p {
  margin-left: 25px;
}
```

というスタイルを書いたとします。

この場合、`div.item要素`の中にある`p要素`は、

- `div#main p`が含むスタイルの適用範囲
- `div#main div.item p`が含むスタイルの適用範囲

のどちらにも含まれますが、

`div#main div.item p`の方が階層構造をより詳しく書いているので、そちらの方が優先されて適応されます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202012211122497_prior.png)

## メディアクエリ

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021060319133124_さしえ.jpg)

WEB ページはパソコンだけではなく、スマホや、タブレットでも閲覧されます。  
メディアクエリを利用するとデバイスの画面の大きさに合わせてデザインを変更することができます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021060321364625_Videotogif.gif)

以下のようなコードを書いてみましょう。

HTML

```html
<h1>デバイスの大きさは</h1>
```

CSS

```CSS
@media screen and (max-width: 480px) {
    h1:after {
        content: "480px以下です。小さめです";
    }
}

@media screen and (min-width: 481px) and (max-width: 720px) {
    h1:after {
        content: "481px以上720px以下です。中くらいです。";
    }
}

@media screen and (min-width: 721px) {
    h1:after {
        content: "721px以上です。大きいです。";
    }
}
```

書き方は以下の通りです。

```css
@media screen and (画面サイズの条件) {
  /* 指定した画面サイズに適用するCCS */
}
```

画面サイズの条件には`max-width`、`min-width`で画面の最大・最小の幅の大きさを指定しましょう。

### 練習問題

display プロパティを用いれば画面サイズに応じて、表示するものをがらっと変えることもできます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021060408323528_2.gif)

これを作っていきましょう。

【流れ】

1. 以下のコードを body タグ内にコピペして HTML を作成する。

   ```html
   <header>
     <h1>メディアクエリ</h1>
     <nav class="pc_screen">
       <ul class="list_nav_header">
         <li>Home</li>
         <li>Product</li>
         <li>Contact</li>
       </ul>
     </nav>
     <nav class="mobile_screen">
       <ul class="list_nav_header">
         <li>≡</li>
       </ul>
     </nav>
   </header>
   ```

2. 以下のコードをコピペして CSS を作成する。

   ```css
   header {
     display: flex;
     justify-content: space-between;
     margin: 0 auto;
   }

   .list_nav_header {
     display: flex;
     list-style: none;
   }

   .list_nav_header li {
     margin-left: 36px;
   }

   /* この下に画面サイズが601px以上の時のCSSを書く */

   /* この下に画面サイズが600px以下の時のCSSを書く */
   ```

3. メディアクエリを利用して画面サイズに応じて表示の変更をする CSS を書く

   1. 画面サイズが 601px 以上の時は、`pc_screen`クラスを表示、`mobile_screen`クラスを非表示にしましょう。

      表示・非表示には、`display`プロパティを利用します。

   2. 画面サイズが 600px 以下の時は、`moblie_screen`クラスを表示、`pc_screen`クラスを非表示にしましょう。

4. 【発展】ハンバーガーメニューが小さいので、画面サイズが 600px 以下の時に`font-size`が 30px になるようにしましょう
   <!-- こたえ -->
   <!--
   <!DOCTYPE html>
   <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        header {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
        }

        .list_nav_header {
            display: flex;
            list-style: none;
        }

        .list_nav_header li {
            margin-left: 36px;
        }

        @media screen and (min-width: 601px) {

            .mobile_screen {
                display: none;
            }

            .pc_screen {
                display: block;
            }

        }

        @media screen and (max-width: 600px) {

            .pc_screen {
                display: none;
            }

            .mobile_screen {
                display: block;
            }
        }
    </style>

</head>

<body>
    <header>
        <h1>メディアクエリ</h1>
        <nav class="pc_screen">
            <ul class="list_nav_header">
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
        </nav>
        <nav class="mobile_screen">
            <ul class="list_nav_header">
                <li>≡</li>
            </ul>
        </nav>
    </header>
</body>

</html>
 -->

## Mission1 擬似セレクタの利用

### ゴール

擬似セレクタを利用して、新しいニュースには NEW マークをつけます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041515452716_news2.png)

### 準備

1. ファイル名を`index.html`として、HTML ファイルを作成。
2. html:5 のテンプレートを入力。
3. ページのタイトル部分を`News`変更。
4. 英語表記を日本語表記に変更。
5. ファイル名を`style.css`として、CSS ファイルを作成。
6. head タグの中に、css と紐付ける以下のコードを記述。
   ```
   <link rel="stylesheet" href="style.css">
   ```
7. HTML, CSS をそれぞれ以下のように記述。

   ```html
   <article>
     <h1>SPORTS NEWS</h1>
     <div class="news_list">
       <ul>
         <li class="new">〇〇選手二連覇 4回転サルコウ成功</li>
         <li class="new">有馬記念 △△が勝利</li>
         <li class="new">××FC 天皇杯初優勝に王手</li>
         <li>○△選手が復活V 80分の熱戦</li>
         <li>△×選手 メジャー挑戦の意向</li>
         <a href="news.html">もっと見る</a>
       </ul>
     </div>
   </article>
   ```

   ```css
   h1 {
     font-style: italic;
     font-family: "Courier New", Courier, monospace;
     font-size: 50px;
     color: #f1a73a;
   }
   li {
     padding-bottom: 10px;
   }
   article {
     margin: 100px 0;
   }
   article h1 {
     margin-bottom: 30px;
     text-align: center;
   }
   .news_list {
     display: flex;
     justify-content: center;
   }
   ```

見た目は以下のようになります。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041515300315_news1.png)

### 流れ

1. ` class="new"`を追加した要素の直後に `NEW`という文字を追加。
2. 文字の大きさは`12px`、色は`#fff`、背景色は`#f1a73a`に設定。
3. 左側に`10px`のマージンを追加。
4. 上下に`6px`、左右に`12px`のパディングを追加。
5. 四隅に半径`10px`の丸みをつける

## Mission2 ボタンを作成

### ゴール

「もっと見る」の部分を下記のようなボタンに変更します。

【クリック前】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041515570017_news3.png)

【クリック後】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021041515570918_news4.png)

### 準備

CSS に以下のコードを記述。

```
   a {
        color: #000;
        display: inline-block;
        border-bottom: 1px solid #f1a73a; /*オレンジで細さ1pxの下線を作成*/
        transition: all 1s; /*ボタンの値全てを１秒間かけて変化させる*/
        margin-top: 20px;
        padding: 5px 15px;
        text-decoration: none; /*aタグについている下線を削除*/
      }
```

### 流れ

1. a タグをクリックしたら、文字の色を`#fff`に変わるように設定。
2. 背景の色を `#f1a73a`に変わるように設定。
3. `rgba(0, 0, 0, 0.5)`の黒い影を右下方向に追加。 横方向に 5px、縦方向に 5px、ぼかし距離を 5px に設定。

## Mission3 ヘッダーを作成

### ゴール

画像のようなヘッダーを作成します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021042212022919_Mission3.png)

### 準備

1. ヘッダーに使いたい画像を選んで、コードを書いているファイルと同じ位置に保存。  
   今回は、`background.jpg`と名前をつけます。  
   <a href="https://www.photo-ac.com/">参考サイト</a>

2. HTML の body タグの中の一番上に以下のコードを記述。

```
    <header>
      <div class="area_top_view" id="home">
        <div class="container">
          <h1 class="title">Prokids News</h1>
        </div>
      </div>
    </header>
```

### 流れ

1. `area_top_view`クラスに、画像の繰り返しを避けるコードを記述。
2. `area_top_view`クラスに、画像のサイズを画面に合わせるコードを記述。
3. `home`id に、高さが`60vh`になるように記述。
4. `home`id に、選んだ画像を表示させるコードを記述。  
   ここでは、繰り返し使うコードはクラスで設定しています。

## Mission4 フッターを作成

### ゴール

画像のようなフッターを作成します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021042212555520_Mission4.png)

### 準備

body タグを閉じる直前に以下のコードを記述。

```
    <footer>
        <div class="wrapper">
            <p><small>© 2021 Prokids</small></p>
        </div>
    </footer>
```

### 流れ

1. footer の背景色を好きな色に変更。画像は`#B1EDB0`を使用。
2. footer のテキストを中央にするコードを記述。
3. footer の padding を上下に`30px`追加するコードを記述。
4. footer の p タグを好きな色とサイズに変更。画像は色が`#777`、大きさが`1.2rem`。

これで、1 ページ目は完成です。

## Mission5 ニュースリストを作成

### ゴール

2 ページ目のヘッダーとフッターを作成します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021042213320622_Mission5.png)

### 準備

1. 新しく`news.html`という名前の HTML ファイルを作成。
2. html:5 のテンプレートを入力。
3. ページのタイトル部分を News 変更。
4. 英語表記を日本語表記に変更。
5. head タグの中に、css と紐付ける以下のコードを記述。

```
<link rel="stylesheet" href="style.css">
```

6. 1 ページ目とほとんど同じヘッダーとフッターを作成するので、以下のコードを記述してください。

```
<body>
    <header>
      <div class="area_top_view" id="news">
        <div class="container">
          <h1 class="title">Prokids News</h1>
        </div>
      </div>
    </header>

    <footer>
      <div class="wrapper">
        <p><small>© 2021 Prokids</small></p>
      </div>
    </footer>
  </body>
```

### 流れ

1. 2 ページ目のヘッダーに使いたい画像を選んで、コードを書いているファイルと同じ位置に保存。  
   今回は、`background2.jpg`と名前をつけます。  
   <a href="https://www.photo-ac.com/">参考サイト</a>
2. `news`id に選んだ画像を表示させるコードを記述。
3. 高さを`40vh`に設定。

CSS ファイルには、ここから 2 ページ目というコメントを残しておくと分かりやすいです。

## Missin6 ニュースリストの完成

### ゴール

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021042213485523_Mission6.png)

### 準備

1. HTML のヘッダーとフッターの間に以下のコードを記述。

```
    <article>
      <h1>SPORTS NEWS LIST</h1>
      <div class="news_table">
        <table>
          <tr class="news_article">
            <td><img class="sports_img" src="sports1.jpg" /></td>
            <td class="new">〇〇選手二連覇 4回転サルコウ成功</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports2.jpeg" /></td>
            <td class="new">有馬記念 △△が勝利</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports3.jpeg" /></td>
            <td class="new">××FC 天皇杯初優勝に王手</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports4.jpg" /></td>
            <td class="new">○△選手が復活V 80分の熱戦</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports5.jpg" /></td>
            <td class="new">△×選手 メジャー挑戦の意向</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports6.jpg" /></td>
            <td class="new">×△選手 プレーオフ制し2週連続優勝</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports7.jpg" /></td>
            <td class="new">陸上男子100M 10秒04で優勝</td>
          </tr>
          <tr class="news_article">
            <td><img class="sports_img" src="sports8.jpg" /></td>
            <td class="new">NBA ○×選手 自己最多の14得点</td>
          </tr>
          <tr class="return">
            <td><a href="index.html">戻る</a></td>
          </tr>
        </table>
      </div>
    </article>
```

2. ニュースリストで使用する画像を 8 枚、sports1~sports8 と名前をつけて保存。  
   <a href="https://www.photo-ac.com/">参考サイト</a>

3. CSS に以下のコードを記述。

```
  table{
    border-collapse: collapse;
    border-spacing: 0;
    margin:0 20%;
    width: 60%;
  }

  .news_article{
    border-bottom: solid 1px #eee;
    border-top: solid 1px #eee;
  }
```

### 流れ

1. news_article クラスに、カーソルが触れると背景色が好きな色に変わるように設定。
2. td タグが中央に来るように設定。
3. td タグの padding 幅を上下に`15px`追加。
4. sports_img クラスの横を`100px`、縦を`70px`に設定。

これで完成です。
