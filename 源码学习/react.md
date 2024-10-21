# react 源码详解

## 方法

- 下载源码
- 观察源码中 package.json ，主要使用的依赖，构建相关的脚本
- 根据核心 api 找寻对应的结构
  - packages/react
  - packages/react-dom
  - packages/react-reconciler
  - packages/scheduler
- 串联整个流程
  - react项目的初始化, ReactDOM.render、createRoot
  - 数据更新是怎么触发的,this.setState,const [,update] = useState(),
    - 基本 api 的使用方式
      - hooks,useState,useReducer,useId

## 认识monorepo与架构

monorepo 有别与常规项目结构，一个项目对应一个git仓库。它一个库里有多个子项目，是为了更方便进行 **版本管理，依赖管理**

方案：

- lerna
- pnpm workspaces
- turborepo

## JSX

```jsx
const element = (
	<div>hello</div>
)
```

通过 Babel进行编译，需要借助 @babel/plugin-transform-react-jsx

**输入**

JavaScript

```js
const profile = (
  <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(" ")}</h3>
  </div>
);
```

**输出**

JavaScript

```js
const profile = React.createElement(
  "div",
  null,
  React.createElement("img", { src: "avatar.png", className: "profile" }),
  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
);
```

## React 核心 API

- useState
- useReducer
- useCallback
- useMemo
- useRef