var collection = {
    2548: {
        alubm: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ] 
},
2468: {
    alubm: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
},
1245: {
    artist: "Robert Palmer",
    tracks: []
},
5439: {
    album: "ABBA Gold"
}
};
// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));
function updateRecord(object, id, prop, value) {
    // Only change code below this line
    if (prop === "tracks" && value !== ""){
        if(object[id].hasOwnProperty(prop)){
            object[id][prop].push(value);
        }else {
            object[id][prop] = [];
            object[id][prop].push(value);
        }
    } else{
        if (value === ""){
            delete object[id][prop];
        }else{
            object[id][prop] = value;
        }
    }
  
    return object;
  }
    // Only change code above this line



console.log(updateRecord(collection, 1245, "tracks", "Addicted to Love"));
module.exports = updateRecord;