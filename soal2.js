const gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA", "RUBY"]
function solution(gems) {
    let isRepeat = true;
    let maxValue = gems.length;
    let position = 0;
    let key = "";
    let res = [];
    let arrayResult = [];
    let allItem = [];

    for (let j = 0; j < gems.length; j++) {
        if (!allItem.includes(gems[j])) {
            allItem.push(gems[j]);
        }
    }

    while (isRepeat) {
        isRepeat = false;
        position++;
        for (let i = 0; i < gems.length; i++) {
            if (position - 2 >= maxValue) {
                isRepeat = false;
            } else {
                isRepeat = true;
                if (
                    arrayResult.findIndex((val) => val.name === gems[i]) < 0 &&
                    key !== gems[i] &&
                    position - 1 > i
                ) {
                    key = gems[i];
                    arrayResult.push({ name: gems[i], index: i + 1 });
                    res.push([{ name: gems[i], index: i + 1 }]);
                } else if (
                    arrayResult.findIndex((val) => val.name === gems[i]) > -1 &&
                    key === gems[i] &&
                    position - 1 > i
                ) {
                    let idx = arrayResult.findIndex((v) => v.name === gems[i]);
                    arrayResult[idx] = { name: gems[i], index: i + 1 };
                    key = gems[i];
                } else if (
                    arrayResult.findIndex((val) => val.name === gems[i]) > -1 &&
                    key !== gems[i] &&
                    position - 1 > i
                ) {
                    key = "";
                    res.push(arrayResult);
                    arrayResult = [];
                }
            }
        }
    }
    let filterData = res.filter((v) => v.length === allItem.length);
    if (filterData.length > 0) {
        let value = filterData[0].sort(function minXToMaxX(a, b) {
            return a.index - b.index;
        });
        return [value[0].index, value[value.length - 1].index];
    } else {
        return [1, gems.length];
    }
}

let res = solution(gems);
console.log(res);
