Note 是一个功能简单的文章分享系统，可以为你提供的 Markdown 格式的文本生成一个唯一的 URL 分享到互联网上。

你可以为你分享的文章：

 - [x] 设置密码
 - [x] 生成二维码

## 安装

Note 需要 Node.js 运行环境，还需要一个 MongoDB 数据库。

配置环境变量：

 - BASEURL 如 https://note.example.com
 - MONGO_CONNECT_STRING 如 mongodb://127.0.0.1/note

普通安装：

    git clone https://github.com/ss098/note.git
    cd note
    npm install
    npm start

你也可以使用 Docker 来安装这个应用，项目已经包含有 Dockerfile。