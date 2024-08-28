export const bootstrap = () => {
  console.log("app1 bootstrap");
  return Promise.resolve()
}
export const mount = () => { console.log("app1 mount"); return Promise.resolve() }
export const unmount = () => { console.log("app1 unmount"); return Promise.resolve() }

//