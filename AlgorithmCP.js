
//PROBLEM 1

function findSumOfDistinctElements(set1, set2) {
  const distinctElements = [];
  let sum = 0;

  for (const element of set1) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
    sum += element;
  }

  for (const element of set2) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
    sum += element;
  }
  return sum;
}


//PROBLEM 2

function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}