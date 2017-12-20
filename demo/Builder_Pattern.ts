// 建造者模式(Builder Pattern)

namespace BuilderPattern {
  
  // 创建一个表示食物条目和食品包装的接口
  interface Item {
    name(): void
    packing(): Packing
    price(): number
  }
  interface Packing {
    pack(): void
  }

  // 创建实现 Packing 接口的实体类
  class Wrapper implements Packing {
    pack() {
      return 'Wrapper'
    }
  }
  class Bottle implements Packing {
    pack() {
      return 'Bottle'
    }
  }

  // 创建实现 Item 接口的抽象类，该类提供了默认的功能
  abstract class Burger implements Item {

    abstract name()

    packing() {
      return new Wrapper()
    }

    abstract price()
  }
  abstract class ColdDrink implements Item {

    abstract name()

    packing() {
      return new Bottle()
    }

    abstract price()
  }

  // 创建扩展了 Burger 和 ColdDrink 的实体类
  class VegBurger extends Burger {

    name() {
      return 'Veg Burger'
    }

    price() {
      return 22.0
    }
  }
  class ChickenBurger extends Burger {

    name() {
      return 'Chicken Burger'
    }
    price() {
      return 52.4
    }
  }
  class Coke extends ColdDrink {
    
    name() {
      return 'Coke'
    }
    price() {
      return 12.0
    }
  }
  class Pepsi extends ColdDrink {

    name() {
      return 'Pepsi'
    }
    price() {
      return 16.0
    }
  }

  // 创建一个 Meal 类，带有上面定义的 Item 对象
  class Meal {
    private items = new Array

    addItem(item: Item) {
      this.items.push(item)
    }

    getCost() {
      let cost = 0.0
      for (let i = 0; i < this.items.length; i += 1) {
        const v = this.items[i]
        cost += v.price()
      }
      return cost
    }

    showItems() {
      for (let i = 0; i < this.items.length; i += 1) {
        const v = this.items[i]
        console.log(`Item: [${v.name()}]`)
        console.log(` Packing : ${v.packing().pack()}`)
        console.log(` price   : ${v.price()}`)
      }
    }
  }

  // 创建一个 MealBuilder 类，实际的 builder 类负责创建 Meal 对象
  class MealBuilder {

    prepareVegMeal() {
      const meal = new Meal()
      meal.addItem(new VegBurger())
      meal.addItem(new Coke())
      return meal
    }

    prepareNonVegMeal() {
      const meal = new Meal()
      meal.addItem(new ChickenBurger())
      meal.addItem(new Pepsi())
      return meal
    }
  }

  // BuiderPatternDemo 使用 MealBuider 来演示建造者模式（Builder Pattern）。
  export class BuilderPatternDemo {
    main(args: String[]) {
      const mealBuilder = new MealBuilder()

      const vegMeal = mealBuilder.prepareVegMeal()
      console.log('Veg-Meal')
      vegMeal.showItems()
      console.log(`Total Cost: ${vegMeal.getCost()}\n`)

      const nonVegMeal = mealBuilder.prepareNonVegMeal()
      console.log('Non-Veg Meal')
      nonVegMeal.showItems()
      console.log(`Total Cost: ${nonVegMeal.getCost()}\n`)
    }
  }
}

new BuilderPattern.BuilderPatternDemo().main([])
