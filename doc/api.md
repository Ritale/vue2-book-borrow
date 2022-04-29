# 接口文档

## 目录1 用户前台
1). 登录
2). 登出
3). 获取图书列表
4). 根据图书id获取图书详细信息
5). 借书
6). 还书
7). 查看我借的图书
8). 注册？？
9).
10).
11).
12).
13).
14).


## 目录2 管理系统
1). 登录
2). 添加用户
3). 更新用户
4). 获取所有用户列表
5). 删除用户
6). 获取分类列表
7). 添加分类
8). 更新分类
9). 删除分类
10). 获取图书分页列表
11). 添加图书
12). 编辑图书
13). 删除图书
14).


## 接口定义1（目录1）

### 1、登录

#### 请求URL：
    http://localhost:3000/login

#### 请求方式：
    POST

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜username     ｜Y           ｜string      ｜用户名
    ｜password     ｜Y           ｜string      ｜密码

#### 返回示例：
    成功：
    {
        "status": 0,
        "data": {
            "_id": "5c3b297dea179b0",
            ...
        }
    }
    失败：
    {
        "status": 1,
        "msg": "用户名或密码不正确！"
    }

### 2、登出

#### 请求URL：
    http://localhost:3000/logout

#### 请求方式：
    POST

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ？？？

#### 返回示例：
    成功：
    {
        "status": 0,
        "msg": "登出成功！"
    }
    失败：
    {
        "status": 1,
        "msg": "登出失败，请稍后重试！"
    }

### 3、获取图书列表

#### 请求URL：
    http://localhost:3000/books?pageNo=1&pageSize=15&type=1

#### 请求方式：
    GET

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜pageNo       ｜Y           ｜number      ｜第几页
    ｜pageSize     ｜Y           ｜number      ｜每页数据条数
    ｜type         ｜N           ｜number      ｜分类

#### 返回示例：
    成功：
    {
        "status": 0,
        "data": [
            {
                id:1,
                title:'ES6标准入门（第3版）',
                type: 'JavaScript',
                total:6,
                borrowedNo:2,
                borrower:[{userId:1,name:'李可'},{userId:2,name:'马特尔'}],publishTime:'2017-09-01',
                ISBN:'9787121324758',
                pageNo:576,
                edition:3,
                publisher:'电子工业出版社',
                author:'阮一峰',
                desc: '剖析ES理解应用难题，横跨ES2015/2016/2017新标，抢占JavaScript制高点'
            },
            {
                id:2,
                title:'JavaScript高级程序设计（第4版）',
                type: 'JavaScript',
                total:3,
                borrowedNo:0,
                borrower:[],
                publishTime:'2020-09-01',
                ISBN:'9787115545381',
                pageNo:866,
                edition:4,
                publisher:'人民邮电出版社',
                author:'[美] 马特·弗里斯比（Matt Frisbie）',
                desc: `web前端开发教程，JS"红宝书"升级，入门+实战，涵盖ECMAScript，2019，提供教学视频+配套编程环境，可直接在线运行随书代码.web前端开发教程，JS"红宝书"升级，入门+实战，涵盖ECMAScript，2019，提供教学视频+配套编程环境，可直接在线运行随书代码`
            }
        ]
    }
    失败：
    {
        "status": 1,
        "msg": "程序出错，请稍后重试"
    }

### 4、根据图书id获取图书详细信息

#### 请求URL：
    http://localhost:3000/detail/:id

#### 请求方式：
    GET

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜id           ｜Y           ｜number      ｜图书id

#### 返回示例：
    成功：
    {
        "status": 0,
        "data": {
            id:1,
            title:'ES6标准入门（第3版）',
            type: 'JavaScript',
            total:6,
            borrowedNo:2,
            borrower:[{userId:1,name:'李可'},{userId:2,name:'马特尔'}],publishTime:'2017-09-01',
            ISBN:'9787121324758',
            pageNo:576,
            edition:3,
            publisher:'电子工业出版社',
            author:'阮一峰',
            desc: '剖析ES理解应用难题，横跨ES2015/2016/2017新标，抢占JavaScript制高点'
        }
    }
    失败：
    {
        "status": 1,
        "msg": "程序出错，请稍后重试"
    }

### 5、借书

#### 请求URL：
    http://localhost:3000/my/borrow

#### 请求方式：
    POST

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜id           ｜Y           ｜number      ｜图书id
    ｜bookNo       ｜Y           ｜number      ｜借阅数量

#### 返回示例：
    成功：
    {
        "status": 0,
        "msg": "借书成功！"
    }
    失败：
    {
        "status": 1,
        "msg": "借书失败！"
    }


## 接口定义2（目录2）

### 6、获取分类列表

#### 请求URL：
    http://localhost:3000/admin/types

#### 请求方式：
    GET

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    

#### 返回示例：
    成功：
    {
        "status": 0,
        "data": [
            {
                id:1,
                title:'前端',
            },
            {
                id:2,
                title:'后端',
            }
        ]
    }
    失败：
    {
        "status": 1,
        "msg": "程序出错，请稍后重试"
    }

### 7、添加分类

#### 请求URL：
    http://localhost:3000/admin/add_type

#### 请求方式：
    POST

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜title        ｜Y           ｜string      ｜分类名称

#### 返回示例：
    成功：
    {
        "status": 0,
        "data": {
            id: 6
        }
    }
    失败：
    {
        "status": 1,
        "msg": "添加失败！"
    }

### 11、添加图书

#### 请求URL：
    http://localhost:3000/admin/add_book

#### 请求方式：
    POST

#### 参数类型：
    ｜参数         ｜是否必选      ｜类型        ｜说明
    ｜id           ｜Y           ｜number      ｜图书id
    ｜title        ｜Y           ｜string      ｜图书标题
    ｜type         ｜Y           ｜number      ｜图书分类
    ｜total        ｜Y           ｜number      ｜图书数量
    ｜publishTime  ｜Y           ｜date        ｜图书出版日期
    ｜ISBN         ｜Y           ｜string      ｜图书isbn号
    ｜pageNum      ｜N           ｜number      ｜图书总页数
    ｜edition      ｜N           ｜number      ｜版本号
    ｜publisher    ｜Y           ｜string      ｜出版社
    ｜author       ｜Y           ｜string      ｜作者
    ｜desc         ｜N           ｜string      ｜图书简介
    ｜catalogue    ｜N           ｜string      ｜目录


#### 返回示例：
    成功：
    {
        "status": 0,
        "data": {
            id: 6
        }
    }
    失败：
    {
        "status": 1,
        "msg": "添加失败！"
    }