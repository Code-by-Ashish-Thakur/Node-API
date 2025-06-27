const { log } = require("console");
const fs = require("fs");


// fs.writeFileSync("files/mango.txt", "This is a fruit")   // this use for create the file


// fs.unlinkSync("files/mango.txt");  //this is used for delete or unlink the file

// now to read the data

// const data = fs.readFileSync("files/banana.txt", "utf-8");

// console.log(data);

// now to append the data in exixt file


// fs.appendFileSync("files/apple.txt", "This is apple fruits which is present in summer");

// fs.appendFileSync("files/banana.txt", "This is banana fruit");




// ................NOw below coe for take the input from the console...................


//  console.log(process.argv[2]);


const operation = process.argv[2];

if (operation == 'write') {
    const name = process.argv[3];
    const content = process.argv[4];


    fs.writeFileSync("files/" + name + ".txt", content);
}

else if (operation == 'read') {
    const name = process.argv[3];

    const data = fs.readFileSync("files/" + name + ".txt", "utf-8");
    console.log(data);

}
else if (operation == "append") {
    const name = process.argv[3];
    const content = process.argv[4];

    fs.appendFileSync("files/" + name + ".txt", content);
}

else if (operation == "delete") {
    const name = process.argv[3];
    const content = process.argv[4];

    fs.unlinkSync("files/" + name + ".txt");

}
