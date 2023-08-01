# Visitor

> Позволяет добавлять в программу новые операции, не изменяя классы
> объектов, над которыми эти операции могут выполняться.

- Type: Behavioral
- Complexity: ⭐⭐⭐

Пожалуйста, реализуйте класс `Visitor` с помощью к-го в классе `Comment`
появится возможность использовать метод `getSize`.

Метод `getSize` позволит рассчитать кол-во вложенных комментариев,
созданных с помощью класса `Comment`.

```js
const list = new Comment({
  id: "comment-1",
  content: "text content for comment-1",
  children: [
    new Comment({
      id: "comment-1.1",
      content: "text content for comment-1.1",
    }),
    new Comment({
      id: "comment-1.2",
      content: "text content for comment-1.2",
    })
  ]
});

list.accept(Visitor);
list.getSize(); // 3
```
