function addBorders (picture: string[]): string[] {
    let wall = "*".repeat(picture[0].length + 2) // create wall with just *s'
    
    picture.unshift(wall); // adds wall at 0th index
    picture.push(wall); // pushes wall to the last index in the array

    for (let i = 1; i < picture.length ; i ++ ) { // building side wall in iteration
        picture[i] = "*".concat(picture[i], '*'); // adding *s' to the first and last places "abc" => "*abc*"
    }

    return picture;
}

console.log(addBorders(["abc", "efg"]));