let fs = require('fs');
let inputArray = process.argv.slice(2);
let optionArray = [];
let fileArray = [];
console.log(inputArray);
for(let i=0;i<inputArray.length;i++)
{
    let v = inputArray[i].charAt(0);
    if(v == '-')
    {
        optionArray.push(inputArray[i]);
    }
    else{
        fileArray.push(inputArray[i]);
    }
}
console.log(optionArray);
console.log(fileArray);
let content = "";
for(let i=0;i<fileArray.length;i++)
{
    let buffer = fs.readFileSync(fileArray[i]);
    content+=buffer+"\r\n";
}
console.log(content);
let contentArray = content.split("\r\n")
// console.log(contentArray)
//-s
let isPresent = optionArray.includes("-s");
if(isPresent == true){
    for(let i=1;i<contentArray.length;i++)
    {
        if(contentArray[i] == '' && contentArray[i-1] == "")
        {
            contentArray[i] = null;
        }
        else if(contentArray[i] == "" && contentArray[i-1] == null)
        {
            contentArray[i] = null;
        }
    }
    let tempArray =[];
    for(let i=0;i<contentArray.length;i++)
    {
        if(contentArray[i]!=null)
        {
            tempArray.push(contentArray[i]);
        }
    }   
    contentArray = tempArray;
    // console.log(contentArray.join("\n"));
}
let nPresent = optionArray.includes('-n');
if(nPresent == true)
{
    for(let i =0;i<contentArray.length;i++)
    {
        contentArray[i] = `${i+1} ${contentArray[i]}`
    }
    // console.log(contentArray.join("\n"));
}
let bPresent = optionArray.includes("-b");
let counter = 1;
for(let i=0;i<contentArray.length;i++)
{
    if(contentArray[i] != "")
    {
        contentArray[i] = `${counter} ${contentArray[i]}`;
        counter++;

    }
    console.log(contentArray.join("\n"));
}