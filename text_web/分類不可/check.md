# 【jQuery第4回】旅行サイトの作成 ①

旅行サイトのコース紹介ページを作成しましょう

## ゴール

今まで習ってきた知識を利用して本格的なサイトを作成しましょう。
今回作成するのは、旅行サイトのコース紹介ページです。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409031215_goal1.png)

<br>

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409033116_goal2.png)

ヘッダーのメニューを「海外旅行」切り替えると、写真と内容が切り替わります。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409063617_goal3.png)

<br>

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409070018_goal4.png)

そして写真にカーソルを当てると、説明文が現れます。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409173019_goal5.png)

## 準備

サイトを作成する上で必要な画像をダウンロードしましょう。

<a href="https://drive.google.com/drive/folders/1-BCRSfCQvfbOYYYBC9zNKMPlnlm1z1J7?usp=sharing">こちら</a>からフォルダをまるごとダウンロードするか、以下の画像を右クリックして「名前をつけて画像を保存」してください。

- logo.png

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409250220_logo.png)

- domestic.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409251821_image.jpg)

- abroad.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409253822_abroad.jpg)

- kyoto.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409260423_kyoto.jpg)

- okinawa.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409261924_okinawa.jpg)

- tokyo.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409263925_tokyo.jpg)

- hokkaido.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409265126_hokkaido.jpg)

- itally.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409270527_itally.jpg)

- china.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409273128_china.jpg)

- singapore.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409274329_singapore.jpg)

- la.jpg

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020121409275530_la.jpg)

## Mission1. ファイルの準備

【ゴール】

HTMLファイルを作成しましょう。
ファイル名は、**travel_cource.html**にします。
また、今回はHTMLファイルが長くなるので、CSSファイルも作成しましょう。
ファイル名は **style.css**にします。

【流れ】

1. HTMLファイルとCSSファイルを作成する

2. `html:5`のテンプレートを入力する

3. ページのタイトル部分を「 **旅行予約サイト** 」に書き換える

4. CSSファイルを読み込む

    ```html
    <link rel="stylesheet" href="style.css">
    ```



## Mission2. jQueryをインポート

jQueryを使用するので公式サイトからCDN形式でインポートしましょう。

<a href="https://code.jquery.com/">jQuery公式サイトのダウンロードページ</a>

## Mission3. ヘッダーの作成

サイトのヘッダー部分にはページのロゴ, メニューバーがあります。

### [HTML]

以下のコードを追加します。

```html
<header>
    <img src="img/logo.png" class="logo" alt="ロゴ">
    <div class="travel-menus">
        <button class="travel-menu" id="domestic">
            <p>国内旅行</p>
        </button>
        <button class="travel-menu" id="abroad">
            <p>海外旅行</p>
        </button>
    </div>
</header>
```

### [CSS]

1. 以下のデザインを追加します。

```css
body {
    font-family: serif;
}

header {
    padding-left: 15%;
}

.logo {
    height: 100px;
}

.travel-menus {
    height: 60px;
}

.travel-menu {
    background-color: white;
    width: 20%;
    padding: 0;
    text-align: center;
    margin: 0px;
    cursor: pointer;
    border: none;
    float: left;
    font-size: large;
    margin-bottom: 1px;
}
```

2. `div.travel-menu` の国内旅行の方に `selected` という `class属性` を追加します。そして以下のスタイルを追加します。

```css
.selected {
    border-bottom: 4px darkorange solid;
}
```

これにより、現在どちらのメニューが選択されている状態が分かりやすくなります。(デフォルトは国内旅行)

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122801072631_header.png)

ボタンが押されたときのデザインの切り替えは `jQuery` を利用します。

[jQuery]

`scriptタグ`の中にjQueryを記入していきます。

`.travel-menu` が `クリック` されたときの動作を追加します。(ヒント: onメソッド)。

このとき、押されたボタン(ヒント: this)が `selectedというクラス属性` を `持っていない` ときに(ヒント: if文, hasClassメソッド)、

押されたボタンから `selected` を外し、その `兄弟要素` に `selected` を付与します。(ヒント: addClassメソッド, removeClassメソッド, siblings())

ボタンを切り替えたときにデザインが入れ替わっていたら完成です。
図のように表示されているか確認しましょう。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122801075232_header_switched.png)

## Mission4. タイトル部分の作成

前の項で作ったボタンで切り替わるタイトル部分を作成していきます。

### 準備

以下のHTML, CSSのコードを記入しましょう。

```html
<!-- HTML -->
<div class="domestic-title">
    <img src="domestic.jpg" class="image" alt="国内旅行">
    <div class="menu-title">
        <h2>Japan</h2>
        <h3 class="big">国内旅行</h3>
    </div>
</div>

<div class="abroad-title">
    <img src="abroad.jpg" class="image" alt="海外旅行">
    <div class="menu-title">
        <h2>Overseas</h2>
        <h3 class="big">海外旅行</h3>
    </div>
</div>
```
```css
/* CSS */
.domestic-title,
.abroad-title {
    position: relative;
}

.menu-title {
    position: absolute;
    top: 100px;
    left: 30px;
    color: white;
}

h2 {
    font-size: 100px;
    font-style: italic;
    margin: 0;
}

.big {
    font-size: 40px;
}

.image {
    width: 100%;
    height: 500px;
    margin-bottom: 50px;
}
```

### ボタンによる切り替えの実装

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122801302133_title_j.png)

-  `.domestic-title` の方に `at` という `class属性` をつけます。
- `.domestic-title, .abroad-title` のスタイルの部分に `display: none;` を追加します。

- `.at` のスタイルに `display: block;` を追加します。これにより、`atクラス`が付与された要素のみが表示されます。
- 前のコードに `.at` を切り替えるコードを追加します。

    ``` javascript
    $('.travel-menu').on('click', function () {
        if (!$(this).hasClass('selected')) {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
            // ここに追加
        }
    });
    ```

- もし押されたボタンの `id` が `domestic` なら、 `.domestic-title` に `atクラス`を追加し、 `.abroad-title` から `atクラス` を外す。( ヒント: attrメソッド)
- それ以外の場合(idがabroad)は、`.domestic-title` から `atクラス`を外し、 `.abroad-title` に `atクラス` 追加する。

ヘッダーのボタンを切り替えた時に、写真の部分が切り替わっていれば成功です。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122801305234_title_a.png)

## Mission5. メイン部分の作成

サイトのメインコンテンツを含む部分を作成します。

こちらでもボタンによって内容物が切り替わります。

### 準備
まず以下のHTML, CSSを追加します。

```html
<div class="main-wrapper">
    <div class="domestic">
        <div class="menus" id="kyoto">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="kyoto.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">京都寺院巡りコース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">世界遺産にも指定されている歴史のある寺院を巡りましょう。夜はライトアップを見ながらのお食事も楽しめます。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="okinawa">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="okinawa.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">沖縄海水浴コース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">日本一綺麗な海で、海水浴やダイビングを楽しみましょう。珍しい魚達に会えるかも！沖縄ならではの料理もたくさんあります。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="tokyo">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="tokyo.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">東京大都会コース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">日本一の大都市・東京の文化を肌で感じましょう。最終日にはあの大人気テーマパークも楽しめちゃいます。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="hokkaido">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="hokkaido.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">北海道自然堪能コース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">数日かけて函館・小樽・札幌を巡り北海道の食と大自然を存分に堪能します。春夏秋冬いつでも楽しめます。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="abroad">
        <div class="menus" id="itally">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="itally.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">イタリア古都巡りコース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">イタリアの歴史ある街並みを楽しみましょう。本場のイタリアンや、サッカー観戦なども楽しめます。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="china">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="china.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">中国都市観光コース</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">脈々と受け継がれてきた歴史と近代文明が融合する国、中国はもちろん見所がたくさん！絶品の中華料理も是非体験して見ましょう。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="singapore">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="singapore.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">シンガポール</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">
                            アジア旅行の定番・シンガポールを優雅に旅しましょう。人気スポットから穴場まで、たっぷり堪能しましょう。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="menus" id="la">
            <div class="photo-wrapper">
                <div class="layer"></div>
                <img src="la.jpg" alt="" class="photo">
                <div class="text">
                    <h3 class="course-title">ロサンゼルス</h3>
                    <div class="text-wrapper">
                        <p class="text-contents">アメリカ最大級の都市・ロサンゼルス。テーマパークやアメリカ映画の"本場"、満足すること間違いなしです。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
```css
.menus {
    width: 45%;
    padding: 10px;
    display: inline-block;
    margin-bottom: auto;
}

.photo-wrapper {
    position: relative;
}

.travel-menus {
    height: 60px;
}

.layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
}

.layer:hover {
    opacity: 0.8;
}

.text {
    color: white;
    margin: 20px;
    position: absolute;
    bottom: 10px;
    text-align: left;
}

.domestic,
.abroad {
    display: none;
}

.photo {
    width: 100%;
    height: 100%;
}
```

この状態では `.domestic, .abroad` がどちらも `display: none;` になっているため何も表示されていないはずです。

### ボタンによる切り替えの実装

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122801524335_main.png)

- デフォルトでは `.domestic` の方を表示させたいので、そちらに `atクラス` を追加します。

- 前の項を参考にjQueryの部分は自分で実装してみる。

## Mission6. カーソルを合わせたときの動きを実装

`.menus要素` にカーソルを合わせたときに `.text-contents` が現れるように実装します。

1. `.text-contents` を `display: none;` にする。
2. jQueryで、 `.menus要素` に `カーソルを合わせた時`, `.menus内の.text-contents要素` を表示し、　`カーソルが外れた時` に隠すように実装する。(ヒント: hoverメソッド, findメソッド, showメソッド, hideメソッド)

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122802005236_hover_before.png)

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook115/2020122802011937_hover_after.png)

ここまでうまく行けば完成です。

