//微前端基座入口


import { registerApplication, start } from "single-spa"
import { bootstrap as bootstrap1, mount as mount1, unmount as unmount1 } from "./app1/main.js"
import { bootstrap as bootstrap2, mount as mount2, unmount as unmount2 } from "./app2/main.js"

//第一个应用
/**
 * 1.名称
 * 2.入口（入口协议）
 * 3.激活规则（路径匹配）路由逻辑，路由有时候可以辅佐来实现持久化的事情
 */
registerApplication({
  name: "app1",
  app: {
    bootstrap: bootstrap1,
    mount: mount1,
    unmount: unmount1
  },
  activeWhen: ["/app1"]
})

//第二个应用
registerApplication({
  name: "app2",
  app: {
    bootstrap: bootstrap2,
    mount: mount2,
    unmount: unmount2
  },
  activeWhen: ["/app2"]
})

start()