const translateText = (text, targetText) => {
    // Lanjutin
    let stringToArray = text.split("");
    let isRepeat = true;
    let counter = 0;
    let index = -1;
    while (isRepeat) {
        isRepeat = false;
        for (let i = 0; i < stringToArray.length; i++) {
            if (stringToArray[i] === targetText && counter === 0 && index < 0) {
                index = i;
                counter++;
                isRepeat = true;
            } else if (
                stringToArray[i] === targetText &&
                counter > 0 &&
                index > -1
            ) {
                counter++;
                isRepeat = true;
            } else if (
                stringToArray[i] !== targetText &&
                counter > 0 &&
                index > -1
            ) {
                stringToArray.splice(index, counter, counter);
                index = -1;
                counter = 0;
                isRepeat = true;
                // console.log('index ', index)
                // console.log('counter ', counter)
                // console.log('stringToArray ', stringToArray)
            } else {
              console.log('is ,', stringToArray)
                isRepeat = false;
            }
        }
    }
    return stringToArray.join("");
};

const word = "Helloooo Woorld";
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
