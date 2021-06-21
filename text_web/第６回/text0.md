# [CSS] CSS の基礎

CSS の書き方から基本となるプロパティ名を学びます。

## ゴール

### 今回作る Web サイト

このテキストを通して、画像のような Web サイトを作成していきます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021041311443838_goal.png)

## CSS について

### Web サイトをデザインするために利用される CSS

`CSS(Cascading Style Sheets)`は、HTML で作られたページの要素に効果や変化を与えて**デザインする**ために利用されます。文字の大きさや色などを変化させることができます。

HTML だけで作られたページはテキストやリンク、画像全てが左につめて表示されます。そこに CSS で効果を付け加えることで、見やすいページやデザイン性が優れたページを作ることができるのです。

以下は HTML のみで書いたボタンと、CSS で装飾済みのボタンです。

![](https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook67/202009300515560_css_comparison.png)

このように、CSS を使えば様々なデザインを加えることができます。

## CSS の書き方

では、実際に CSS の書き方について学んでいきましょう。CSS の書き方には大きく分けて三つあります。

その三つとは、`styleタグの中に書き込む方法`, `CSSファイルを作成して、htmlファイルと紐づける方法`, `style属性に書き込む方法` です。

### style タグの中に書き込む方法

１. HTML ファイルを作成し、`html:5` のテンプレートを入力します。

２. `headタグの最後` に `styleタグ`を作成します。

```html
<style></style>
```

３. style タグの中に CSS のコードを書く。

style タグと body タグの中身を以下のように変更し、ブラウザで開きます。

```html
<style>
  h1 {
    color: red;
  }
</style>
```

```html
<body>
  <h1>Hello, World</h1>
</body>
```

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202010241858511_css_ex.png)

このように文字の色が赤く変わっています。

後で学びますが、style タグの中に書いたコードが CSS のコードです。

### CSS ファイルを作成して、html ファイルと紐づける方法

このテキストでは利用しない方法ですが、この方法が一番一般的に利用されています。

１. 同一のフォルダに HTML ファイルと CSS ファイル(名前が`.css`で終わるファイル)を作成します。

２. HTML ファイルに html:5 のテンプレートを入力します。

３. CSS ファイルに CSS のコードを記入します。

```css
/* CSSファイルに書き込み */
h1 {
  color: red;
}
```

４. HTML ファイルの`headタグ`の最後に以下のような`linkタグ`を作成。

```html
<link rel="stylesheet" href="CSSファイルの名前" />
```

この link タグは HTML ファイルと CSS ファイルを紐付ける役割をしています。

ブラウザで確認すると h1 要素の文字が赤くなっていることがわかります。

### style 属性に書き込む方法

タグの style 属性に CSS のコードを書き込む方法があります。

上と同様に h1 タグの文字の色を変えたい場合は以下のように書きます。

```html
<h1 style="color: red;">Hello, World</h1>
```

## CSS の文法

CSS を記述するには, `セレクタ`, `プロパティ`, `値`と言うものが必要です。
以下で確認しましょう。

- **セレクタ** ... どの部分を装飾するかの指定をします。変更箇所の HTML タグの名前や、クラス、ID を書きます。h1 要素のスタイルを変更する場合は、 `h1`となります。

- **プロパティ** ... スタイルのうち、 何を変更するかを指定します。文字色を変更する color プロパティや、文字の大きさを変更する font-size プロパティなど、たくさんのプロパティが用意されています。

- **値** ... それぞれのプロパティにどのような値を指定するかを決めます。プロパティごとに決められた形式で記入しなければなりません。

基本的な文法は以下の通りです。

```css
セレクタ {
  プロパティ1: プロパティ1の値;
  プロパティ2: プロパティ2の値;
  ...;
}
```

例えば

```css
h1 {
  color: red;
}
```

と書くと、  
「**h1 要素**の, **color プロパティ**の値を**red**にする」  
と言うコードになります。

## 文字の大きさを変更　 font-size

### 文字の大きさの設定

文字の大きさを変更するには、`font-sizeプロパティ` というものを利用します。  
値は、数値に「px」や「rem」、「％」などの単位をつけて指定します。

#### px とは

`px`という単位は、ピクセル(画素)一つ分の一辺を`1px`とした単位です。  
ピクセル(画素)とはパソコンなどの端末のディスプレイ画面を構成している、小さな正方形のことです。  
このピクセルが縦横にたくさん並んで画面が構成されています。

#### rem とは

html 要素に指定されたサイズを基準とした単位です。  
2rem と設定した場合、基準の 2 倍の大きさになります。

#### %とは

親要素のサイズを基準に割合で指定する単位です。

「px」は絶対値で、指定したサイズから変動することはありません。  
一方、「rem」や「%」は相対値で、基準となる要素のサイズによって大きさが変動します。

#### 大きさの変更を実践

body タグに

```html
<h1>Prokids</h1>
```

と入力しましょう。この`Prokids`という文字の大きさを変えていきます。

CSS 適応前と適応後の変化を見たいので、適応前をしっかり見ておきましょう。

次は style タグの中に

```html
h1 { font-size:50px; }
```

と入力し、変化を見てみましょう。
文字の大きさが変わっているが一目でわかると思います。

### 練習問題

【流れ】

1. h1 タグの下に、p タグで「文字の大きさを変更」と記述。

2. 文字の大きさを 2rem と指定するコードを、style タグの中に記述。

【完成イメージ】

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031510495412_font-size.png)

## 文字の色を変更　 color

文字の色を変更する方法を学びます。  
文字の色は `colorプロパティ`によって変更します。

色を指定する方法は 3 つあります。

#### カラーコードで指定

6 桁の 16 進数を利用してカラーコードを指定することができます。  
カラーコードは以下のサイトなどを利用して調べることができます。  
<a href="http://www.netyasun.com/home/color.html">カラーコード</a>  
記入するときにはカラーコードの前に`#` を忘れずに記入しましょう。

<記入例>

```css
p {
  color: #cc99cc;
}
```

#### RGB 値で指定

光の三原色である、Red、Green、Blue の 3 色を混ぜ合わせて色を指定する方法です。  
()内の数字の一つ目には赤の要素、二つ目には緑の要素、三つ目には青の要素をそれぞれ 0~255 のなかで指定します。  
0 に近づくほど白に近づきます。

<記入例>

```css
p {
  color: rgb(128, 0, 128);
}
```

#### 色の名前で指定

色を表す英単語を用いて指定する方法です。下記の色などを利用することができます。  
white, black, gray, silver, red, blue, yellow, green, purple, navy, olive など。

<記入例>

```css
p {
  color: gray;
}
```

#### 色の指定を実践

style タグの中の h1 タグに`color:#FF0000;`と追記します。

```
h1 {
      font-size: 50px;
      color:#FF0000;
    }
```

h1 タグに書かれている文字が赤色になった事を確認してみましょう。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031511253814_color.png)

### 練習問題

【流れ】  
2. p タグの中を「文字の色を変更」に修正。

1. p タグの色を青色に変更するコードを記述。

【ヒント】

青のカラーコードは、#0000FF です。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031511233213_color2.png)

## 要素の背景色を変更　 background-color

背景色の変更には`background-colorプロパティ`を利用します。  
値は、文字に色をつけるときと同じく、カラーコードや RGB 値、色の名前を書きます。

style タグの中の h1 タグに`background-color:#000000;`と追記します。  
画面を更新すると、背景が黒に変わっているのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031511360315_background-color.png)

### 練習問題

【流れ】

1. p タグの中を「背景の色を変更」に修正。

2. p タグの背景の色を水色に変更するコードを記述。

【ヒント】

水色のカラーコードは、#00FFFF です。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021032311412924_background-color2.png)

## コンテンツを中央揃えにする　 text-align

文字を揃えたい時は`text-alignプロパティ`を利用します。  
値は主に以下の 4 つを使用します。

| 値      | どこに文字が揃うか |
| ------- | ------------------ |
| left    | 左揃え             |
| right   | 右揃え             |
| center  | 中央揃え           |
| justify | 両端揃え           |

style タグの中の h1 タグに text-align: center;と追記します。  
画面を更新すると、「Prokids」の文字が中央に移動したのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031609210717_text-align.png)

### 練習問題

【流れ】

1. p タグの中を「文字の位置を変更」に修正。
2. p タグの位置を右揃えに変更するコードを記述。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021032311441825_texr-align2.png)

## 要素全体の透明度を変更する　 opacity

要素の透明度を変更するには`opacityプロパティ`を利用します。  
値は、0.0（完全に透明）～ 1.0（完全に不透明）の数値で指定します。

style タグの中の h1 タグに opacity:0.5;と追記します。
画面を更新すると、h1 タグの要素全体が薄くなっているのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031609415519_opacity.png)

数字の部分を色々変えて変化を見てみましょう。  
`opacityプロパティ` は`要素全体(文字や背景)` の透明度を変化させるので注意しましょう。

## 要素間の間隔を変更する　 margin

要素のまわりに余白を加えたいときは、`marginプロパティ` を使用します。  
主な値は、数値か auto です。  
数値は、「px」や「rem」、「％」などの単位をつけて余白の大きさを設定します。  
auto は、関連するプロパティ値によって余白が自動で設定されます。  
margin プロパティでは、要素の 4 辺全てに指定方法があり、どの位置に余白を作るのか指定することができます。

| margin プロパティ | 余白の位置 |
| ----------------- | ---------- |
| margin-top        | 上         |
| margin-bottom     | 下         |
| margin-left       | 左         |
| margin-right      | 右         |

style タグの中の h1 タグに`margin:50px;`と追記します。  
分かりづらいので、前回記述した`opacity:0.5;`は削除しておきましょう。

画面を更新すると、要素の外側に上下左右の余白ができたのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031618082220_margin.png)

margin プロパティのみの使用で、半角スペースで区切ることにより余白の位置を指定する方法もあります。

| 書き方             | 例                          | 説明                                           |
| ------------------ | --------------------------- | ---------------------------------------------- |
| margin:四辺全て;   | margin:10px;                | 四辺全てに 10px の余白を指定                   |
| margin:上下 左右;  | margin:10px 30px;           | 上下に 10px、左右に 30px の余白を指定          |
| margin:上 左右 下; | margin:10px 30px 20px;      | 上に 10px、左右に 30px、下に 20px の余白を指定 |
| magin:上 右 下 左  | margin:10px 30px 20px 10px; | 四辺全てに異なるサイズの余白を指定             |

## パディング幅の変更　 padding

margin プロパティと似たプロパティで`paddingプロパティ` というものがあります。

`marginプロパティ` は**要素間の間隔**を指定していたのに対し、`paddingプロパティ` は**要素の境界とコンテンツ部分(文字など)との間隔**を指定します。

わかりやすくするために下の例を見ましょう。

<p style="background-color: rgba(255, 0, 0, 0.4);margin: 30px;">margin: 30px</p>
<p style="background-color: rgba(255, 0, 0, 0.4);padding: 30px;">padding: 30px</p>
<p style="background-color: rgba(255, 0, 0, 0.4);margin: 30px;padding: 30px;">margin: 30px padding: 30px</p>

書き方は margin プロパティとほぼ同じです。

style タグの中の h1 タグに`padding:50px;`と追記します。  
画面を更新すると、要素の内側に余白ができています。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021031618192921_padding.png)

また、margin の時と同様に `padding-top`, `paddin-right`, `padding-bottom`, `padding-left` などのプロパティを使って間隔を挿入する方向を指定することもできます。

## 一部分にだけ CSS を適応する　 span

ここまで要素の全てを変更してきましたが、文章の一部だけにデザインを適応するやり方を学んでいきます。

まずはデザインを適応したい部分(今回は P)を span タグで囲んでいきます。

```html
<h1><span>P</span>rokids</h1>
```

次に、style タグの中に以下を追記します。

```css
span {
  color: #fff;
}
```

上記のように書いたら、変化を見てみましょう。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021032311161122_span.png)

Prokids の P の部分だけ白色になります。  
このように span で囲むことにより、その部分にだけデザインを適用することができます。

## マウスカーソルが当たった時に変化を加える　 hover,transition

下のボタンにマウスカーソルを当ててみてください。色が変わったことに気が付きましたか？  
このような変化を付け加えるときには :hover を使います。

<style>
button {
    background-color: white;
}
button:hover {
    background-color: yellow;
    transition: 1s;
}
</style>
<body>
<button>カーソルを当てる</button>
</body>

このような変化を付け加えるときには `:hover` をセレクタの最後につけます。

h1 要素にマウスカーソルが当たったら背景が青色に変化するように記述していきます。
style タグの中に以下を追記しましょう。

```css
h1:hover {
  background-color: #0000ff;
}
```

ファイルを保存したら、カーソルを当てた時に背景色が変化してる事を確認します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021032311224823_hover.png)

次は何秒かけて変化するのかを指定していきます。  
これには`transitionプロパティ`を利用します。値は`変化にかけたい秒数s`で決めます。下の場合は 5 秒で変化させる場合です。

```css
h1:hover {
  background-color: #0000ff;
  transition: 5s;
}
```

## 背景に画像を適応する background-image

背景に画像を適応していく方法を学んでいきます。

まずは下記の参考サイトをクリックし、そのサイトでお気に入りの画像を探してください。  
見つかったら、名前をつけてコードを書いているファイルと同じ位置に保存してください。  
今回は、`top.jpg`と名前をつけます。

<a href="https://www.pakutaso.com/bg/">参考サイト</a>

それができたら下準備完了です。

コードを書いていきましょう。
今回使うのは`background-imageプロパティ`です。

```css
body {
  background-image: url("top.jpg");
}
```

`url("")`内には先ほど保存した`画像のパス`を書き込みます。
そうすると以下のように表示されます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040112373126_background-image.png)

選んだ画像によっては、サイズが合わないため繰り返し表示されてしまいます。  
繰り返し表示を避けるためには`background-repeatプロパティ`を使います。値は`no-repeat`にします。  
さらに画像サイズをページの大きさに合わせるために、`background-sizeプロパティ`を利用します。値は`cover` とします。

```css
body {
  background-image: url("top.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
```

### 練習問題

【流れ】

1. p タグの中を「web 制作スタート!」に修正。
   ここからは、p タグの中を変更してください。
2. 文字の大きさを 0.8rem 変更。
3. 文字の色を白色に変更。
4. 背景の色をグレーに変更。
5. 背景の位置を中央に変更。

【ヒント】  
 白のカラーコードは、#FFFFFF です。  
グレーのカラーコードは#74747F です。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040112483727_background-image2.png)

## 透明度の指定　 rgba

opacity プロパティを利用して、要素の透明度を指定することができることは学習済みです。  
ただし、opacity プロパティで透明度を指定すると文字まで透明になります。  
そこで、色そのものにに透明度を付与するという方法をしばしば利用します。

`rgba`という色の指定法によって透明度を付与できます。  
()内には 4 つの数字を書き、3 つめまでは rgb 要素を、4 つめの数字は透明度を指定します。

opacity プロパティで指定した場合と比較しましょう。  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202010251000332_comparison_btn.png)  
rgba では背景のみの透明度が変わったことがわかります。

では、h1 タグの背景色に透明度を指定してみましょう。  
背景色を黒に指定した`background-color:#000000;`から`background-color:rgba(0,0,0,0.6);`に書き換えましょう。  
画面を更新すると、背景色が変化したことが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040113010428_rgba.png)

## 縦横の大きさの指定　 height,width

ブロック要素の縦横の大きさを指定する方法として、`heightプロパティ`、`widthプロパティ`があります。  
width は横幅、height は縦の長さを指定します。  
値は、数値に「px」や「rem」、「％」などの単位をつけて指定します。

では、実際に h1 タグの横幅を指定してみましょう。  
style タグの中の h1 タグに  `width:30%;`と追記します。  
「％」という単位は、h1 タグを囲っている親要素(今回は body タグ)の幅に対する比率で、幅が決まります。  
画面を更新すると、h1 タグが親要素に対して 30%の大きさで表示されているのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040113143729_width.png)

### 練習問題

【流れ】

1. p タグの横幅を 200px に指定するコードを記述。
2. p タグの要素の内側に、上下 10px、左右 0px の余白をつけるコードを記述。
3. p タグの周りに、左だけ 30%の余白をつけるコードを記述。

【ヒント】  
 要素の内側に余白をつけたいときは、`paddingプロパティ`を使用します。  
 要素のまわりに余白をつけたいときは`marginプロパティ`を使用します。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040114151830_width2.png)

## 要素を丸角に変更　 border-radius

下の 2 つのボタンを見比べてみてください。  
右のボタンのように角を丸くするには、`border-radiusプロパティ`を使用します。  
値は、数値に「px」や「em」、「％」などの単位をつけて指定します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202102190912534_btn_rad1.png)

値を大きくして行った方が角が丸くなっています。  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202102190913175_btn_rad2.png)

では、p タグの角を丸くしていきましょう。  
style タグの中の p タグに`border-radius:10px;`と追記します。
画面を更新すると、p タグの角が丸くなっているのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040114232432_border-radius.png)

## 影を追加　 box-shadow

下の 2 つのボタンを見比べてみてください。  
右のボタンのように影をつけるには、`box-shadowプロパティ`を使用します。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202102190917226_box_shad.png)

```css
box-shadow: 横方向の位置 縦方向の位置 ぼかし 色;
```

のように記述します。

では、実際に影をつけていきましょう。  
style タグの中の p タグに  `box-shadow:3px 5px 5px #636363;`と追記します。  
画面を更新すると、p タグに影ができているのが確認できます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040114323133_shadow.png)

### 練習問題

【流れ】

1. p タグにマウスカーソルが当たったら背景色が黒になるように記述。
2. 2 秒かけて色が変化するように記述。

【ヒント】

黒のカラーコードは、#000000 です。  
 マウスカーソルが当たったら変化させるには、:hover をセレクタの後につけます。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040114403334_hover2.png)

## 表示方法の変更　 display

HTML 要素には、`ボックス要素`と`インライン要素`というものがあります。

- ボックス要素... div, p, h1~6 など。終了タグのところで改行される。
- インライン要素... span, input, img など。改行されない。

ここで`displayプロパティ`を利用すると、各要素を`ボックス要素`や`インライン要素`に変換することができます。

| display プロパティの値 |                     内容                     |
| :--------------------: | :------------------------------------------: |
|          box           |          ブロックボックスを生成する          |
|         inline         |         インラインボックスを生成する         |
|      inline-block      | インラインレベルのブロックコンテナを生成する |
|          none          |                 非表示にする                 |

では、実際に display プロパティを使用してみましょう。

まず、HTML の h1 タグの上に、以下のコードを追記してください。

```
<header>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</header>
```

黒くて見づらいですが、文字が箇条書きで表示されました。  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040116143335_display.png)

display プロパティを使用して、横並びで表示させていきましょう。
style タグの中に以下のコードを記述してください。

```
li{
      display: inline-block;
}
```

画面を更新すると、横並びで表示されているのが確認できます。  
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040116231636_display2.png)

インラインブロック要素に変更したことによって、横幅と高さの指定ができるようになりました。

### 練習問題

【流れ】

1. li タグの文字の色を白色にするコードを記述。
2. li タグの内側の余白を左右に 20px つけるコードを記述。
3. ul タグの周りに左だけ 75%の余白をつけるコードを記述。

【ヒント】

白のカラーコードは、#FFFFFF です。

【完成イメージ】
![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021040116233437_display3.png)

## リセット CSS

各ブラウザには、それぞれデフォルトの CSS が設定されています。  
これが原因で思ったようにデザインできない場合があります。

先ほどのヘッダーに背景色を設定してみましょう。

```css
header {
  background-color: #000000;
}
```

ブラウザで表示してみると以下のようになっていませんか。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021060409205639_さしえ.jpg)

ヘッダーは画面上部にピッタリとくっつけたいところですが、スキマがあいてしまいました。  
これは Chrome にデフォルトで設定されている CSS が原因です。

これを解決するために、`リセットCSS`というものがあります。  
リセット CSS にはさまざまな種類がありますが、最も簡単な方法は**ユニバーサルセレクタ**を利用した方法です。

CSS に以下のコードをコピペしてください。

```CSS
* {
    margin:0;
    padding:0;
}
```

これでヘッダーを画面上部にピッタリ表示することができました。

## コメント

CSS を記述している瞬間は覚えても、時間が経過すると忘れていきます。  
また、他の人のプログラムを見た時に、意図がわからない場合があります。

そんな時に下記のようにコメントを利用します。

```css
/*1行のコメント */

/*
複数行のコメント
*/
```

CSS のコメントは、`/*`と`*/`で囲みます。  
コメントを利用すると、ファイルには記述されますが、Web サイト上は表示されません。

<記述例>

```css
/* 紫色に変更 */
.p {
  color: purple;
}

/* 緑色に変更 */
#g {
  color: green;
}
```

```html
<p class="p">おはよう</p>
<p id="g">こんにちは</p>
<p class="p">こんばんは</p>
<p class="p">久しぶり</p>
```

上記の場合、画面表示は下記のようになり、画面上は何も表示されていません。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/202010151643091_comment_out.png)

### ショートカットキー

HTML の時と同様に, コメントアウトしたい部分を選択した状態で, `[commandキー]＋[/]`を押すと簡単に複数行でもコメントアウトできます.

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202102190928557_com_out.png)

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/202102190929168_com_out2.png)
