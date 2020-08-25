const testVar = {}

function testFunc() {
    return "hi"
}

let superbowlWin = (record) => {
    let result = record.find(record => record.result === "W")
   
    if (result === "W") {
        return result.year;
    } else {
      
        return  undefined;
    }
}