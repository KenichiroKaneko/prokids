## リセット CSS

各ブラウザには、それぞれデフォルトの CSS が設定されています。  
これが原因で以下のことが発生してしまいます。

1. 思った通りのデザインができない
2. ブラウザ事に見た目が変わってしまう

デフォルトの CSS の例を知るために、先ほどのヘッダーに背景色を設定してみましょう。

```css
header {
  background-color: #000000;
}
```

ブラウザで表示してみると以下のようになっていませんか。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook67/2021060409205639_さしえ.jpg)

これを解決するために、`リセットCSS`というものがあります。  
リセット CSS を利用することで、**意図しないを消す**ことと、**どのブラウザでも統一された見た目にする**ことができます。  
リセット CSS にはさまざまな種類があります。今回は２つの方法を紹介します。

#### 方法１　専用の CSS をダウンロードして使う

`Normalize.css`をダウンロードして使います。  
手順

1. [こちら](https://necolas.github.io/normalize.css/)からダウンロード
2. ダウンロードしたファイルを HTML ファイルと同じフォルダに移動
3. link タグを利用して、Normalize.css を読み込む

   ```html
   <link rel="stylesheet" href="normalize.css" />
   ```

   この時、後に書いた CSS ファイルが優先されてしまうため、Normalize.css は、自分で書いた CSS よりも先に書きましょう。

   例

   ```html
   <link rel="stylesheet" href="normalize.css" />
   <!--リセットCSS -->
   <link rel="stylesheet" href="style.css" />
   <!--自分で書いたCSS-->
   ```

#### 方法２　ユニバーサルセレクタを使う

最も簡易的な方法です。

※一部の表示が崩れてしまう可能性があります。

CSS の先頭に以下のコードをコピペしてください。

```CSS
* {
    margin:0;
    padding:0;
}
```

これでヘッダーを画面上部にピッタリ表示することができました。
