// // 抽象工厂模式(Abstract Factory Pattern)
// // 概括：使用更高一级的超级工厂类来创建其他工厂

namespace AbstractFactoryPattern {
  // 为形状传建一个接口
  interface Shape {
    draw(): void
  }
  
  // 创建实现接口的实体类
  class Rectangle implements Shape {
    draw() {
      console.log('Inside Rectangle::draw() method.')
    }
  }
  class Square implements Shape {
    draw() {
      console.log('Inside Square::draw() method.')
    }
  }
  class Circle implements Shape {
    draw() {
      console.log('Inside Circle::draw() method.')
    }
  }
  
  // 为颜色创建一个接口
  interface Color {
    fill(): void
  }
  
  // 创建实现接口的实体类
  class Red implements Color {
    fill() {
      console.log('Inside Red::fill() method.')
    }
  }
  class Green implements Color {
    fill() {
      console.log('Inside Green::fill() method.')
    }
  }
  class Blue implements Color {
    fill() {
      console.log('Inside Blue::fill() method.')
    }
  }

  // 为 Color 和 Shape 创建抽象类来获取工厂
  abstract class AbstractFactory {
    abstract getColor(color: String): void
    abstract getShape(shape: String): void
  }
  
  // 创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。
  class ShapeFactory extends AbstractFactory {
    getShape(shapeType: String) {
      if (shapeType.toLocaleUpperCase() === null) {
        return null
      }
  
      if (shapeType.toLocaleUpperCase() === 'CIRCLE') {
        return new Circle()
      } else if (shapeType.toLocaleUpperCase() === 'RECTANGLE') {
        return new Rectangle()
      } else if (shapeType.toLocaleUpperCase() === 'SQUARE') {
        return new Square()
      }
      return null
    }

    getColor(color: String) {
      return null;
   }
  }
  class ColorFactory extends AbstractFactory {
    getShape(shapeType: String) {
      return null
    }

    getColor(color: String) {
      if (color === null) {
        return null
      }

      if (color.toLocaleUpperCase() === 'RED') {
        return new Red()
      } else if (color.toLocaleUpperCase() === 'GREEN') {
        return new Green()
      } else if (color.toLocaleUpperCase() === 'BLUE') {
        return new Blue()
      }
      return null
    }
  }

  // 创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。
  class FactoryProducer {
    static getFactory(choice: String) {
      if (choice.toLocaleUpperCase() === 'SHAPE') {
        return new ShapeFactory()
      } else if (choice.toLocaleUpperCase() === 'COLOR') {
        return new ColorFactory()
      }
      return null
    }
  }

  // 使用 FactoryProducer 来获取 AbstractFactory，通过传递类型信息来获取实体类的对象。
  export class AbstractFactoryPatternDemo {
    main(args: String[]) {

      // 获取形状工厂
      const shapeFactory = FactoryProducer.getFactory('SHAPE')

      // 获取形状为 Circle 的对象
      let shape1 = shapeFactory.getShape('Circle')
      shape1.draw()

      // 获取形状为 Rectangle 的对象
      let shape2 = shapeFactory.getShape('Rectangle')
      shape2.draw()

      // 获取形状为 Square 的对象
      let shape3 = shapeFactory.getShape('Square')
      shape3.draw()


      // 获取颜色工厂
      const colorFactory = FactoryProducer.getFactory('Color')

      // 获取颜色为 Red 的对象
      let color1 = colorFactory.getShape('Red')
      color1.draw()

      // 获取颜色为 Green 的对象
      let color2 = colorFactory.getShape('Green')
      color2.draw()

      // 获取颜色为 Blue 的对象
      let color3 = colorFactory.getShape('Blue')
      color3.draw()
    }
  }
}

new AbstractFactoryPattern.AbstractFactoryPatternDemo().main([])
