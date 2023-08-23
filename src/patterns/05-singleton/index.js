let instance;
export default class Singleton {
  constructor() {
    if(instance) {
      return instance
    }

    instance = this;
  }
}

// export default class Singleton {
//   static #instance;
//
//   constructor() {
//     if (Singleton.#instance) {
//       return Singleton.#instance;
//     }
//
//     Singleton.#instance = this;
//   }
// }