# Decorator

> С помощью "оберток" реализует динамическое расширение функциональности
> используя механизм агрегации или композиции.

- Type: Structural
- Complexity: ⭐

Необходимо реализовать декораторы `Milk` и `Sugar` к-е будут вносить
изменения в расчет стоимости кофе.

В каждом из классов `Milk` и `Sugar` необходимо объявить метод `getPrice`,
к-й внесет коррективы в итоговую стоимость напитка.

```js
const coffee = new Coffee();

coffee.getPrice(); // 5

const coffeeWithSugar = new Sugar(coffee);

coffeeWithSugar.getPrice(); // 6

const coffeeWithMilk = new Milk(new Coffee());

coffeeWithMilk.getPrice(); // 7
```
