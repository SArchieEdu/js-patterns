import { Comment, Visitor } from './index.js';

describe('patterns/visitor', () => {
  // It may be better to rename "nesting levels" to "the number of comments",
  // since the expected "nesting level" (3) is different from the actual
  // "nesting level" (2), please correct me if I'm wrong here, and the method
  // name says nothing about the nesting either.
  it('should be able to calculate nesting levels', () => {
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

    expect(list.getSize()).toBe(3);
  });
});
