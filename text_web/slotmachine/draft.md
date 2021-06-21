### ゴール

作成したFirebaseプロジェクトと、ローカルのプロジェクトを紐付けし、Webサイトを公開します。  

### 流れ

#### 1. vscodeでプロジェクトフォルダを開く

準備で作成した`mywebsite`フォルダをvscodeで開きます。  

#### 2. コマンドラインツールを開き、ディレクトリを移動する

windowsの場合は、先ほどインストールしたNodePrompt、macの場合はターミナルを開きます。  

まずはターミナルで開いているディレクトリを`mywebsite`ディレクトリに移動します。  
mywebsiteの絶対パスをコピーし、以下のコマンドを実行します。  

```sh
% cd ここにmywebsiteの絶対パスを貼り付け
```
cdとは、change directoryの頭文字で、ディレクトリを移動するコマンドです。  

#### 3. firebaseコマンドでログイン

`firebase login`コマンドを実行します。  
```sh
% firebase login
```

製品改善のため、CLI使用状況とエラー報告を収集していいかどうかを聞かれるので、NまたはYで回答します。  
```sh
i  Firebase optionally collects CLI usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI usage and error reporting information?
```

ブラウザでGoogleアカウントのログイン画面が表示されるので、使用するアカウントを選択してログインします。  

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook328/2021020316595513_cli_login.png)

ターミナルで以下の表示があればログインに成功しました。  
```sh
✔  Success! Logged in as [Gmailアドレス]
```

#### 4. 初期化

つづいて、`firebase init`というコマンドを入力します。  
```sh
% firebase init
```

FIREBSEという文字が表示され、選択肢が選べるようになります。  
選択肢は`上下矢印`で移動し、`スペースキー`で選択し、`エンターキー`で確定することができます。  

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook328/2021020316595816_firebase_init.png)


選択は以下の通り行います

1. ?Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.

    → `Hosting: Configure and deploy Firebase Hosting sites`を選択します。

2. ? Please select an option:

    → `Use an existing project`を選択します。  

3. ? Select a default Firebase project for this directory:

    → `mywebsite-xxxx (mywebsite)`(Firebaseのサイトで作成したプロジェクト名)を選択します。

4. ? What do you want to use as your public directory?(public)

    → そのままエンターキーを押します

5. ? Configure as a single-page app (rewrite all urls to /index.html)?

    → `N`(No)を選択します。

6. ? Set up automatic builds and deploys with GitHub?

    → `N`(No)を選択します。

操作が完了すると、`mywebsite`フォルダに自動的にいくつかのファイルが追加されています。  

![](https://product-core.s3-ap-northeast-1.amazonaws.com/textbook328/2021020317001023_firebase_初期化完了.png)