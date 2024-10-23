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