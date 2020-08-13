[TOC]

# 全栈开发之路 一

## 搭建一个基于 `koa2` 的服务器

> 这是一个基于 `koa2` 搭建的一个后端服务, 作为学习练手检测学习效果的项目.

## 安装依赖

> **Koa 结构** 

> 1. 安装 `koa-generator`
>
> ```js
> npm install -g koa-generator
> ```
>
> 2. 使用 `koa-generator` 生成 `koa2` 项目
>
> ```js
> koa2 base-koa-service
> ```
>
> 3. 进入项目目录, 安装依赖
>
> ```js
> cd base-koa-service
> npm install 
> ```
>
> 4. 运行项目
>
> ```js
> npm start
> ```

> **安装数据库**  
>
> 1. 安装 mysql 驱动插件
>
> ```js
> npm install sequelize mysql mysql2 --save
> 
> #注意 
> // 如果项目报错 sequelize.import is not a function ,那么要重新安装 sequelize@5 的低版本儿, 或者自行查看高版本 sequelize 怎么使用
> 
> npm install sequelize@^5.x.x --save
> ```

> **配置mysql 数据库** 



> ```js
> 
> ```
>
> 