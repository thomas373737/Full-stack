// 内置对象
(() => {
    /* 1. ECMAScript 的内置对象 */
    let b: Boolean = new Boolean(1)
    let n: Number = new Number(true)
    let s: String = new String('abc')
    let d: Date = new Date()
    let r: RegExp = /^1/
    let e: Error = new Error('error message')
    b = true
    // let bb: boolean = new Boolean(2)  // error
    // 后面new的啥前面最好写啥




    const div: HTMLElement = document.getElementById('test')
    const divs: NodeList = document.querySelectorAll('div')
    document.addEventListener('click', (event: MouseEvent) => {
        console.dir(event.target)
    })
    const fragment: DocumentFragment = document.createDocumentFragment()
})()