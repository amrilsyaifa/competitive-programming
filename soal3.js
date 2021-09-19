const array = [
    ["100", "spiderman", "music", "2"],
    ["200", "ironman", "math", "2"],
    ["300", "superman", "computer", "3"],
    ["400", "batman", "computer", "4"],
    ["500", "hulk", "music", "3"],
    ["600", "ironman", "music", "2"],
];

const key = ["Student number", "Name", "Major", "Grade"];

function solution(relation) {
    let isRepeat = true;
    let indexOfKey = 0;
    let keyStringArray = [];
    let arrayRelation = [];
    let isTrueArray = [];
    let newKeyArrayRelation = [];
    while (isRepeat) {
        isRepeat = false;
        for (let i = 0; i < relation.length; i++) {
            for (let j = 0; j < relation[i].length; j++) {
                isRepeat = true;
                if (
                    indexOfKey === j &&
                    !keyStringArray.includes(relation[i][j]) &&
                    relation[i][j].length > 1
                ) {
                    keyStringArray.push(relation[i][j]);
                    isTrueArray.push(true);
                } else if (
                    indexOfKey === j &&
                    keyStringArray.includes(relation[i][j]) &&
                    relation[i][j].length > 1
                ) {
                    isTrueArray.push(false);
                }
            }
        }
        if (isTrueArray.every((v) => v === true)) {
            arrayRelation.push(key[indexOfKey]);
            key[indexOfKey] = "";
        } else if (keyStringArray.length <= 0) {
            key[indexOfKey] = "";
        }
        keyStringArray = [];
        indexOfKey++;
        if (indexOfKey >= key.length) {
            isRepeat = false;
        }
    }

    let newArrayRelation = arrayRelation.filter((v) => v.length > 0);

    let newKey = key.filter((v) => v.length > 0);

    if (newArrayRelation.length > 0) {
        newKeyArrayRelation.push(newArrayRelation);
    } 

    if (newKey.length > 0) {
        newKeyArrayRelation.push(newKey);
    }

    return newKeyArrayRelation.length
}

let res = solution(array);
console.log(res);
