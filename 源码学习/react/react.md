## 所谓一周学会react 源码详解

### 方法

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

### 认识monorepo与架构

monorepo 有别与常规项目结构，一个项目对应一个git仓库。它一个库里有多个子项目，是为了更方便进行 **版本管理，依赖管理**

方案：

- lerna
- pnpm workspaces
- turborepo

### JSX

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

### React 核心 API

- useState，是 useReducer 的封装 （语法糖）
- useReducer
- useCallback
- useMemo
- useRef
- createElement
  - ReactElement owner ---> Fiber 对应

### Reconciler

调和

早期版本叫栈调和，stack Reconciler







### React Fiber

Fiber

- Fiber Root

  ```typescript
  export function createContainer(
    containerInfo: Container,
    tag: RootTag,
    hydrationCallbacks: null | SuspenseHydrationCallbacks,
    isStrictMode: boolean,
    concurrentUpdatesByDefaultOverride: null | boolean,
    identifierPrefix: string,
    onRecoverableError: (error: mixed) => void,
    transitionCallbacks: null | TransitionTracingCallbacks,
  ): OpaqueRoot {
    const hydrate = false;
    const initialChildren = null;
    return createFiberRoot(
      containerInfo,
      tag,
      hydrate,
      initialChildren,
      hydrationCallbacks,
      isStrictMode,
      concurrentUpdatesByDefaultOverride,
      identifierPrefix,
      onRecoverableError,
      transitionCallbacks,
    );
  }
  ```

  

- RootFiber

- createContainer

  - 创建 rootFiber
  - 初始化更新队列  initializeUpdateQueue

- updateContainer 

  - 创建更新对象  createUpdate
  - 更新入队 const root = enqueueUpdate(current, update, lane);



### React Hook

### Scheduler

Scheduler -》Reconciler -》render

实现调度，requestIdealCallback，expirationTime



小跟堆-》miniHeap

```typescript
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

type Heap = Array<Node>;
type Node = {|
  id: number,
  sortIndex: number,
|};

export function push(heap: Heap, node: Node): void {
  const index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}

export function peek(heap: Heap): Node | null {
  return heap.length === 0 ? null : heap[0];
}

export function pop(heap: Heap): Node | null {
  if (heap.length === 0) {
    return null;
  }
  const first = heap[0];
  const last = heap.pop();
  if (last !== first) {
    heap[0] = last;
    siftDown(heap, last, 0);
  }
  return first;
}

function siftUp(heap, node, i) {
  let index = i;
  while (index > 0) {
    const parentIndex = (index - 1) >>> 1;
    const parent = heap[parentIndex];
    if (compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  let index = i;
  const length = heap.length;
  const halfLength = length >>> 1;
  while (index < halfLength) {
    const leftIndex = (index + 1) * 2 - 1;
    const left = heap[leftIndex];
    const rightIndex = leftIndex + 1;
    const right = heap[rightIndex];

    // If the left or right node is smaller, swap with the smaller of those.
    if (compare(left, node) < 0) {
      if (rightIndex < length && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (rightIndex < length && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  const diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

```

优先队列 -》

workLoop



### 简单手写实现



```js
// 有任务队列
const taskQueue = []

// 需要通过 Fiber 存储一些信息， 根 Fiber
const rootFiber = null;

// 正在工作的 Fiber
const currentFiber = null

// 首先创建第一个 Fiber， 模拟 mount 的时候创建的 Fiber
function createFiber(element, parentFiber) {
  return {
    element,
    parent: parentFiber,
    child: null,
    sibling: null
  }
}

// 更新
function updateFiberTree() {
  if (!rootFiber) {
    rootFiber = createFiber('app', null)
    currentFiber = rootFiber
  }

  // 任务队列中有任务
  while (taskQueue.length > 0) {
    const task = taskQueue.shift()

    // 做对应的工作
  }
}

// 执行任务单元
function performUnitOfWork(fiber) {
  const elements = fiber.element;
  // 判断 elements 是否有子 Fiber
  if (elements && elements.length > 0) {
    let child = null;
    elements.forEach((element, index) => {
      const newFiber = createFiber(element, fiber)
      if (index === 0) {
        fiber.child = newFiber
      }
      else {
        child.sibling = newFiber
      }
      child = newFiber
    })
  }

  // 如果有子节点直接返回第一个子节点
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }

  return null
}

// 提交 Fiber 的改动
function commitRoot() {
  commitWorker(rootFiber.child)
  currentFiber = null
}

// 提交任务
function commitWorker(fiber) {
  if (!fiber) return

  // 渲染
  console.log(fiber.element);

  commitWorker(fiber.child)
  commitWorker(fiber.sibling)
}

// 将任务添加至任务队列
function schedule(task) {
  taskQueue.push(task)
}

// 模拟任务
const exampleTask = {
  element: ['div', 'p', 'span']
}

// 启动
schedule(exampleTask)
updateFiberTree()
```

### 数据结构

```typescript
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
  }
```

# 老老实实学React 源码

## 第一部分 React设计原理

### React源码中的几种关键数据结构

#### Element对象

jsx

_jsxs方法就是用来生成Element对象的, 它执行的结果才是Element对象

***Element对象是对UI的描述***

```js
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,// 元素类型

    // Built-in properties that belong on the element
    type: type,// ElementType (即html标签名)
    key: key, // for循环中的key，不加默认为index
    ref: ref,// 组件ref
    props: props,// 组件props (一些属性和子元素)

    // Record the component responsible for creating this element.
    _owner: owner,
  };
  return element;
};
```



#### fiber对象

**fiber对象是对React*执行过程中元素状态的描述*（打上一些标记等等）**

![image-20241024103813853](C:\Users\PalmPay\AppData\Roaming\Typora\typora-user-images\image-20241024103813853.png)

Element对象——>fiber对象

第一步生成的就是Element对象，

```js
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // Instance
  this.tag = tag;// 组件对象类型
  this.key = key;
  this.elementType = null;
  this.type = null; // 元素类型 div，span...
  this.stateNode = null;// 真实node

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps; // 组件初始props
  this.memoizedProps = null;// 更新后的props状态
  this.updateQueue = null;
  this.memoizedState = null;// 更新后的props状态
  this.dependencies = null;

  this.mode = mode;

  // Effects 副作用标记
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;// Fiber | null 连体婴儿   双缓存机制  
}
```

workTag是对元素类型的进一步抽象

```ts
export type WorkTag =
  | 0
  | 1
  | 2
  | 3
...

export const IndeterminateComponent = 2; // Before we know whether it is function or class
export const HostRoot = 3; // Root of a host tree. Could be nested inside another node. 根节点
export const HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
export const HostComponent = 5; //原生节点 div，span等
export const HostText = 6; //文本 
...
```

### 挂载流程

调用顺序

```js
ReactDOM.createRoot(root).render(App)
```

createRoot方法

```typescript
  // container是 根div id=root
export function createRoot(
  container: Element | Document | DocumentFragment,
  options?: CreateRootOptions,
): RootType {
	.............;

  let isStrictMode = false;
  let concurrentUpdatesByDefaultOverride = false;
  let identifierPrefix = '';
  let onRecoverableError = defaultOnRecoverableError;
  let transitionCallbacks = null;
    
   ............;

   // container是 根div id=root
  const root = createContainer(
    container,
    ConcurrentRoot,
    null,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onRecoverableError,
    transitionCallbacks,
  );
  markContainerAsRoot(root.current, container);

  const rootContainerElement: Document | Element | DocumentFragment =
    container.nodeType === COMMENT_NODE
      ? (container.parentNode: any)
      : container;
  listenToAllSupportedEvents(rootContainerElement);

  return new ReactDOMRoot(root);
}
```

createContainer方法

```

```

