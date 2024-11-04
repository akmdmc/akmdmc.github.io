import { age, animal } from 'globalValue';

const a: string = '1';
const b = age;
console.log(a, b);

const qiQiCat: animal = {
  age: 1,
  kind: 'cat',
  makeNoise: () => {
    console.log('喵~');
  },
};

namespace Util {
  export function successMsg(msg) {
    console.log(msg);
  }
}

Util.successMsg('yes!');

console.log(qiQiCat);
