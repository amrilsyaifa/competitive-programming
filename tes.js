const tes = [
    [
        { name: "DIA", index: 1 },
        { name: "RUBY", index: 2 },
    ],
    [
        { name: "RUBY", index: 2 },
        { name: "DIA", index: 4 },
    ],
    [
        { name: "RUBY", index: 3 },
        { name: "DIA", index: 4 },
    ],
    [
        { name: "RUBY", index: 3 },
        { name: "DIA", index: 4 },
        { name: "EMERALD", index: 6 },
    ],
    [
        { name: "RUBY", index: 3 },
        { name: "DIA", index: 4 },
        { name: "EMERALD", index: 6 },
        { name: "SAPPHIRE", index: 7 },
    ],
    [
        { name: "RUBY", index: 3 },
        { name: "DIA", index: 4 },
        { name: "EMERALD", index: 6 },
        { name: "SAPPHIRE", index: 7 },
    ],
];

function sorting(myarray) {
    let maxLength = 0;
    let newArray = [];

    for (i = 0; i < myarray.length; i++) {
        if (myarray[i].length > maxLength) {
            maxLength = myarray[i].length;
        }
    }

    for(let j = 0; j < myarray.length; j++) {
        if(myarray[j].length === maxLength) {
            newArray.push(myarray[j])
        }
    }
    return newArray
}

let res = sorting(tes);
console.log(res);
