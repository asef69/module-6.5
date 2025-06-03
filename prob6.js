const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function findLongestName(names) {
    let longest = "";
    for (const name of names) {
        if (name.length > longest.length) {
            longest = name;
        }
    }
    return longest;
}

console.log(findLongestName(friends)); 