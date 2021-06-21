### 5. アラートを表示させよう
いよいよ最後になりました！ナビゲーションバーの上にアラートを作っていきましょう。

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook88/202008071104065.png" width="480px" />

1. headerの中にdivを作り、テキストを記述、スタイリングする。

    ```html

    <header>
        <!-- 黄色のアラート alert-warning  -->
        <div class="alert alert-warning text-center">
        Open! Open! Open! Open! Open! Open!
        </div>

    </header>
    ```

2. 画像のように角が丸くなってしまっているので修正していきます。

    <img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook88/202008071104066.png" width="480px" />

    ```html
    <header>
        <!-- 角の余白を取る mb-0 -->
        <!-- 角丸を取る rounded-0 -->
        <div class="alert alert-warning text-center mb-0 rounded-0">
        Open! Open! Open! Open! Open! Open!
        </div>

    </header>
    ```

3. アラートを消すためのボタンを作成

    ```html
    <header>
        <!-- アラートを消すことができる alert-dismissible -->
        <!-- ふわっと消える fade show -->
        <div class="alert alert-warning text-center mb-0 rounded-0 alert-dismissible fade show">
            Open! Open! Open! Open! Open! Open!
            <!-- 消すためのボタンを作成 -->
            <button class="close" data-dismiss="alert">
                &times;
            </button>
        </div>

    </header>
    ```

右上のバツボタンを押して、アラートが消えれば完成です！

<img alt="タイトル" src="https://product-core-test.s3-ap-northeast-1.amazonaws.com/textbook88/202008071104065.png" width="480px" />