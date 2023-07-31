import { GreenColorsPalette, Notification, RedColorsPalette } from './index.js';

describe('patterns/bridge', () => {
  it('should be able to create "success" notification', () => {
    const successNotification = new Notification('success', new GreenColorsPalette());

    expect(successNotification.toString()).toBe("This is success notification with green colors palette");
  });

  it('should be able to create "error" notification', () => {
    const errorNotification = new Notification('error', new RedColorsPalette());

    expect(errorNotification.toString()).toBe("This is error notification with red colors palette");
  });
});
