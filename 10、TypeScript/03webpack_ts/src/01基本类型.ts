// 基础类型
;(() => {
  console.log("布尔类型   ==========>boolean")

  // 基本语法
  // let 变量名:数据类型 = 值
  let flag: boolean = true
  flag = false
  // flag=10 报错
  console.log(flag)

  console.log("数字类型   ==========>number")

  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4)

  console.log("字符串类型  ==========>string")

  let str: string = "床前明月光"
  console.log(str)
  console.log(`${str}`)

  // 字符传和数字之间能够一起拼接
  let str1: string = "我今年"
  let age: number = 24
  console.log(str1 + age)
  console.log(`${str1}${age}`)
  // 总结:ts中变量一开始是什么类型,那么后期赋值的时候,只能用这个类型的数据,是不允许用其他类型的数据赋值给当前的这个变量中
  // 如: let str: string ='真香' str=100 ,没有武德(不允许)

  console.log("==============> null underfined")

  let und: undefined = undefined
  let nll: null = null
  console.log(und)
  console.log(nll)
  // undefined和null 都可以作为其他类型的子类型,把undefined 和null赋值给其他类型的变量的,如: number类型的变量
  let num2: number = undefined
  console.log(num2) //undefined             //撤销严格模式
  let num3: number = null
  console.log(num3) //null           //撤销严格模式

  console.log("==============> 数组类型")
  // 数组定义方式一
  // 语法：let变量名:数据类型[]=[值1,值2,值3]
  let arr1: number[] = [1, 2, 4, 3]
  console.log(arr1)

  // 数组定义方式二 泛型写法
  // 语法:let变量名: Array<数据类型>=[值1,值2,值3]
  let arr2: Array<number> = [1, 2, 3, 4]
  console.log(arr2)
  // 注意问题;数组定义后,里面的数据的类型必须和定义数组的时候的类型是一致的,否则有错误提示信息,也不会编译通过的

  console.log("==============> 元组类型")
  // 元组类型:在定义数组的时候,类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ["车车", 24, true]
  console.log(arr3)
  // 注意问题:元组类型在使用的时候,数据的类型的位置和数据的个数应该和在定义元组的时候的数据类型及位置应该是一致的

  console.log("==============> 枚举类型")
  // 枚举类型,枚举里面的每个数据值都可以叫元素,每个元素都有自己的编号,编号是从0开始的,依次的递增加1
  enum Color {
    red,
    green,
    blue,
  }
  // 定义一个color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red
  console.log(color) //0
  console.log(Color.red, Color.green, Color.blue) //0 1 2

  console.log("==============> any类型")
  let bao: any = 111
  bao = "年少不知富婆好，错把少女当成宝"
  console.log(bao)
  // 当数组中存储多个数据，个数不确定，类型不确定，此时可以使用any类型定义数组
  let baobao: any[] = [24, "年少不知软饭香，错把青春倒插秧", true]
  console.log(baobao)
  // console.log(baobao[0].split());// 编译成功 但输出台报错 因为是number类型
  console.log(baobao[1].split(""))

  console.log("==============> void类型")
  // void类型,在函数声明的时候,小括号的后面使用:void,代表的是该函数没有任何的返回值
  function showMsg(): void {
    console.log("只要富婆把握住，连夜搬进大别墅")
  }
  console.log(showMsg()) //underfined

  console.log("==============> object类型")
  // 定义一个函数,参数是object类型,返回值也是object类型
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: "卡卡西",
      age: 24,
    }
  }
  console.log(getObj({ name: "鸣人", age: "男" }))
  // {name: '鸣人', age: '男'}
  // 01基本类型.ts?1c94:88 {name: '卡卡西', age: 24}

  console.log("==============> 联合类型   类型断言")
  // 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求 1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  function getString(str: number | string): string {
    return str.toString()
  }
  console.log(getString(123)) //123
  console.log(getString("123456")) //123456

  // 需求 2: 定义一个一个函数得到一个数字或字符串值的长度
  // 类型断言:告诉编译器,我知道我自己是什么类型,也知道自己在干什么
  // 类型断言的语法方式1:<类型>变量名
  // 类型断言的语法方式2:值 as 类型
  function getStrings(str: number | string): number {
    // return str.toString().length
    // 如果str.length本身就是string类型，那么是没有必要调用tostring方法
    if ((<string>str).length) {
      // str.length存在吗？如果存在也就是说明str是string类型
      // return (<string>str).length
      return (str as string).length
    } else {
      // 此时说明str是number类型
      return str.toString().length
    }
  }
  console.log(getStrings(123)) //3
  console.log(getStrings("123456")) //6

  console.log("==============> 类型推断")
  // TS 会在没有明确的指定类型的时候推测出一个类型
  let txt = 100 //number类型
  //txt = '车车' //报错
  console.log(txt)

  let txt2 // any类型
  txt2 = 100
  txt2 = "车车"
  console.log(txt2) //车车
})()
