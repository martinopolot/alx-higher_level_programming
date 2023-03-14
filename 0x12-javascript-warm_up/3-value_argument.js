#!/usr/bin/ env node
// displays the first arguments passed on it

if (process.argv[2] === undefined) {
    console.log('No argument');
} else {
    console.log(process.argv[2]);
}
