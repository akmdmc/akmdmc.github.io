let a: [string, number];
a = ["s", 1];

interface IApple {
  weight: number;
  color?: string;
  [propName: string]: any;
}

// Function

interface ISearchFunc {
  (key: string, value: string): boolean;
}

let mySearch: ISearchFunc;

mySearch = (a: string, b: string) => {
  return true;
};


