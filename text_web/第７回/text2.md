## メディアクエリ

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021060319133124_さしえ.jpg)

WEB ページはパソコンだけではなく、スマホや、タブレットでも閲覧されます。  
メディアクエリを利用するとデバイスの画面の大きさに合わせてデザインを変更することができます。

以下のようなコードを書いてみましょう。

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook68/2021060321364625_Videotogif.gif)

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
