// 单例模式(Singleton Pattern)

namespace SingletonPattern {

  class SingleObject {

    // 创建一个 SingleObject 的对象
    private static instance = new SingleObject()

    // 让构造函数为 private，这样类就不会被实例化
    private constructor() {}

    // 获取唯一可用的对象
    static getInstance() {
      return SingleObject.instance
    }

    showMessage() {
      console.log('Hello World!')
    }
  }

  export class SingletonPatternDemo{
    main(args: String[]) {

      // 不合法的构造函数
      // 编辑时错误：构造函数 SingleObject() 是不可见的
      // const object = new SingleObject()

      // 获取唯一可用的对象
      const object = SingleObject.getInstance()

      // 显示信息
      object.showMessage()
    }
  }
}

new SingletonPattern.SingletonPatternDemo().main([])
