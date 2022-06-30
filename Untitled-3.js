const translateText = (text, targetText) => {
    // Lanjutin
    let resultString = ""
    let stringToArray = text.split("");
    console.log(stringToArray.length)
    let stringTarget = ""
    for (let i in stringToArray) {
        
        if (stringToArray[i] === targetText) {
            if(stringToArray.length === +i +1 && stringTarget.length === 0) {
                resultString = resultString + stringToArray[i].length
            }else if (stringToArray.length === +i +1 && stringTarget.length > 0) {
                resultString = resultString + (stringTarget.length +  stringToArray[i].length)
            }
            stringTarget = stringTarget + stringToArray[i]
        }else if(stringTarget.length > 0 && stringToArray[i] !== targetText) {
            resultString = resultString + stringTarget.length +  stringToArray[i]
            stringTarget = ""
        }else {
            resultString = resultString + stringToArray[i]
        }
    }
  return resultString
};

const word = "Hellooo Woorldoo";
const target = "o";

const response = translateText(word, target);

console.log(response);

/*
    Hello World
    Hell1 W1rld

    Helloo Wooorld
    Hell2 W3rld

    Hellooo Woorldoo
    Hell3 W2rld2
  */

Promise
const promiseA = new Promise((resolve) => setTimeout(() => resolve("a"), 1000));
const promiseB = new Promise((resolve, reject) =>
    setTimeout(() => reject("b"), 2000)
);
const promiseC = new Promise((resolve) => setTimeout(resolve, 3000, "c"));

const CustomPromise = async (arr) => {
    // Lanjutin
    let results = await Promise.all(
        arr.map(async (item) => {
            try {
                let data = await item;
                return { data: data, success: true };
            } catch (error) {
                return { data: error, success: false };
            }
        })
    );
    return results
};

(async () => {
    const response = await CustomPromise([promiseA, promiseB, promiseC]);
    console.log("result ", response);

    /* Expect
    response = [
      { data: 'a', success: true },
      { data: 'b', success: false },
      { data: 'c', success: true },
    ]
  */
})();
