// 工厂模式(Factory Pattern)
// 概括：使用工厂类的子类来创建对应的子类（同一抽象父类的不同分支子类）

namespace FactoryPattern {
  interface Shape {
    draw(): void
  }

  class Rectangle implements Shape {
    draw() {
      console.log("Inside Rectangle::draw() method.")
    }
  }
  
  class Square implements Shape {
    draw() {
      console.log("Inside Square::draw() method.")
    }
  }

  class Circle implements Shape {
    draw() {
      console.log("Inside Circle::draw() method.")
    }
  }

  class ShapeFactory {
    getShape(shapeType) {
      if (shapeType == null) {
        return null
      }
  
      if (shapeType === 'CIRCLE') {
        return new Circle()
      } else if (shapeType === 'SQUARE') {
        return new Square()
      } else if (shapeType === 'RECTANGLE') {
        return new Rectangle()
      }
      return null
    }
  }
  
  export class FactoryPatternDemo {
    main() {
      const shapeFactory = new ShapeFactory()
  
      // 获取 Circle 的对象，并调用它的 draw 方法
      const shape1 = shapeFactory.getShape('CIRCLE')
      shape1.draw()
  
      // 获取 Square 的对象，并调用它的 draw 方法
      const shape2 = shapeFactory.getShape('SQUARE')
      shape2.draw()
  
      // 获取 Rectangle 的对象，并调用它的 draw 方法
      const shape3 = shapeFactory.getShape('RECTANGLE')
      shape3.draw()
    }
  }
}

new FactoryPattern.FactoryPatternDemo().main()
