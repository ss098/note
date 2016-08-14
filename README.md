在线 Demo：[https://ss098-note.daoapp.io/](https://ss098-note.daoapp.io/)

查看 Releases：[https://github.com/ss098/note/releases](https://github.com/ss098/note/releases)

Note 是一个功能简单的文章分享系统，可以为你提供的 Markdown 格式的文本生成一个唯一的 URL 分享到互联网上。

Note 使用 Node.js 编写，使用 Express，Less，Jade 作为辅助，用 marked 作为文章引擎，qr-image 生成二维码。

 - [x] 添加文章
 - [x] 生成文章
 - [x] 设置密码
 - [x] 生成二维码

## 安装

你需要有一个 MongoDB 数据库。

配置环境变量：

 - BASEURL 如 https://ss098-note.daoapp.io/
 - MONGO_CONNECT_STRING 如 mongodb://10.10.190.60/note

普通安装：

需要自行安装 Node.js

    git clone git@github.com:ss098/note.git
    cd note
    npm start

使用 Docker：

 - 方案一：使用 Dockerfile 自行生成 Docker 镜像安装。
 - 方案二：Fork 至自己的仓库，绑定 DaoCloud 并使用持续集成在线生成镜像，配置环境变量