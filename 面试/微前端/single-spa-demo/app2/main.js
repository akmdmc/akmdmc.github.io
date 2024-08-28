export const bootstrap = () => {
  console.log("app2 bootstrap");
  return Promise.resolve()
}
export const mount = () => { console.log("app2 mount"); return Promise.resolve() }
export const unmount = () => { console.log("app2 unmount"); return Promise.resolve() }

//