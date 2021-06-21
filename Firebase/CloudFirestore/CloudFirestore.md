# Cloud Firestoreを使ってみよう

## Cloud Firestoreとは

## プロジェクトを作成する

Firebaseのプロジェクトを新しく作成しましょう。
作成したら、コンソールの左側の開発タブからCloud Firestoreをクリックしましょう。

![](images/image1.png)

次に**データベースの作成**をクリックします。

![](images/image3.png)

**テストモード**で開始するを選択してください。

![](images/image4.png)

ロケーションは今回は**asia-northeast1**を選択してください。

![](images/image5.png)

試しにデータを作成してみましょう。コレクションを開始をクリックしてください。

![](images/image6.png)

コレクションIDに**goods**と入力してください。

![](images/image7.png)

好きなようにデータを入力してみましょう。
これがCloudFirestoreでのデータの形になります。


![](images/image8.png)

では、ウェブアプリを追加しましょう。

![](images/image10.png)

アプリのニックネームには好きな名前を登録してください。
ここでは、POSと命名しました。

Firebase SDKの追加は後ほど説明するので、今は大丈夫です。

![](images/image12.png)

Firebase CLIのインストールを行います。
今後いくつかFirebaseのプロジェクトを作成していくと思うので、新しいフォルダを作成して、その中にインストールしてください。
テキストでは新しく**cloudfirestore_tutorial**というフォルダをパソコンに作成し、その中にインストールしました。

ターミナルで、作成したフォルダに移動し、以下のコマンドを実行すると、Firebase CLIがインストールされます。
```
npm install -g firebase-tools
```
以下の画面になったら、矢印キーとスペースキーを利用して**Firestore**と**Hosting**を選択し、Enterキーを入力してください。

![](images/image13.png)
![](images/image14.png)
![](images/image15.png)
![](images/image16.png)


