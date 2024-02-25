
const largeName = (friendsName) => {
    let bigName = [];
    for (let friendName of friendsName) {
        let nameLength = friendName.length
        if (nameLength % 2 === 0) {
            bigName.push(friendName);
        }
    }
    return bigName;
}

const friends = ["dhruboo", "Hrid", "Ankon", "Riazhgjghjdjy", "Tarok", "Bashar", "Julkar", "Ananyo", "Pranto"];
const result = largeName(friends);
console.log(result);