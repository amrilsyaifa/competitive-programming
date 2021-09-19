const space = [
    "□■□■□■□■",
    "□□□□□■□□",
    "■□■□□■□■",
    "□□□□□□□□",
    "□□□■□□□□",
    "□□□□□■□■",
    "□■□□□□□□",
    "□□□□■□■□",
];

function solution(space) {
    let resultIndex = [];
    let idx = [];
    let idxLength = 0;
    let idxKey = "";
    let maxValue = 0;
    let position = 0;
    let isPositionSet = false;

    let isRepeat = true;
    while (isRepeat) {
        isRepeat = false;
        isPositionSet = false;
        idx = [];
        for (let i = 0; i < space.length; i++) {
            let stringToArray = space[i].split("");
            maxValue = stringToArray.length * space.length;

            for (let j = 0; j < stringToArray.length; j++) {
                if (position >= maxValue && maxValue !== 0 && position !== 0) {
                    isRepeat = false;
                } else {
                    isRepeat = true;
                    if (
                        !isPositionSet &&
                        i * stringToArray.length + (j + 1) > position
                    ) {
                        if (
                            stringToArray[j] === "□" &&
                            stringToArray[j + 1] === "■" &&
                            !idx.includes(j)
                        ) {
                            position = i * stringToArray.length + (j + 1);
                            isPositionSet = true;
                            idx.push(j);
                        } else if (
                            stringToArray[j] === "■" &&
                            stringToArray[j + 1] === "□" &&
                            !idx.includes(j)
                        ) {
                            position = i * stringToArray.length + (j + 2);
                            isPositionSet = true;
                            idx.push(j + 1);
                        } else if (
                            stringToArray.every((v) => v === "□") &&
                            !idx.includes(j)
                        ) {
                            position = i * stringToArray.length + (j + 2);
                            isPositionSet = true;
                            idx.push(j);
                        }
                    } else if (
                        isPositionSet &&
                        i * stringToArray.length + (j + 1) > position
                    ) {
                        if (
                            stringToArray[j] === "□" &&
                            stringToArray[j + 1] === "■" &&
                            !idx.includes(j)
                        ) {
                            idx.push(j);
                        } else if (
                            stringToArray[j] === "■" &&
                            stringToArray[j + 1] === "□" &&
                            !idx.includes(j)
                        ) {
                            idx.push(j + 1);
                        } else if (
                            stringToArray.every((v) => v === "□") &&
                            !idx.includes(j)
                        ) {
                            idx.push(j);
                        }
                    }
                }
            }
            if (idx.length >= idxLength && idx.join("") !== idxKey) {
                resultIndex.push(idx.join(""));
                idxKey = idx.join("");
                idxLength = idx.length;
            }
        }
    }
    console.log("guslinger max ", idxLength);
    return resultIndex.filter((v) => v.length >= idxLength).length;
}

let res = solution(space);
console.log(res);
