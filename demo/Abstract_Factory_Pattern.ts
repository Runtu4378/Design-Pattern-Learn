// // 抽象工厂模式(Abstract Factory Pattern)
// // 概括：使用更高一级的超级工厂类来创建其他工厂

// // 为形状传建一个接口
// interface Shape {
//   draw() : void
// }

// // 创建实现接口的实体类
// class Rectangle extends Shape {
//   draw() {
//     console.log('Inside Rectangle::draw() method.')
//   }
// }
// class Square extends Shape {
//   draw() {
//     console.log('Inside Square::draw() method.')
//   }
// }
// class Circle extends Shape {
//   draw() {
//     console.log('Inside Circle::draw() method.')
//   }
// }

// // 为颜色创建一个接口
// class Color {
//   fill() {}
// }

// // 创建实现接口的实体类
// class Red extends Color {
//   fill() {
//     console.log('Inside Red::fill() method.')
//   }
// }
// class Green extends Color {
//   fill() {
//     console.log('Inside Green::fill() method.')
//   }
// }
// class Blue extends Color {
//   fill() {
//     console.log('Inside Blue::fill() method.')
//   }
// }

// // 为 Color 和 Shape 创建抽象类来获取工厂
// class AbstractFactory {
//   getColor() {}
//   getShape() {}
// }

// class shapeFactory extends AbstractFactory {
//   getShape(shapeType) {
//     if (shapeType.toLocaleUpperCase() === null) {
//       return null
//     }

//     if (shapeType === 'CIRCLE') {
//       return new Circle()
//     } else if (shapeType === 'RECTANGLE') {
//       return new Rectangle()
//     }
//   }
// }