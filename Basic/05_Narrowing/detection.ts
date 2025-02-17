// studing  typeof 

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
        console.log(strs.length)
      }
    } else if (typeof strs === "string") {
      console.log(strs)
    }
  }




function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();

  } else {
    console.log(x);
    console.log(y);
  }
}

function multiplyAll(values: number[] | undefined,factor: number): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}


function multiplyAll2<T1,T2>(values:T1[],factor:T2):T2{
  if (!values) {
    return factor       
  } else {
    return factor
  }
}

const mynums:number[]=[1,2,3,4]
multiplyAll2(mynums,34)