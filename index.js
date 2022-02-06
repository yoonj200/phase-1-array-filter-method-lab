// Code your solution here

//1) returns all drivers that match passed in name
//2) returns matching drivers if case does not match but letters do
//3) returns an empty array if there is no match
function findMatching(drivers, string) {
    let answer = drivers.filter(name => name === string ||name === string.toLowerCase());
    return answer;
}

//4) returns a driver if beginning provided letters match
//5) does not return drivers if only middle or ending letters match
//6) does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, string) {
    let answer = drivers.filter(name => name.startsWith(string));
    return answer;
}

//7) accesses data structure if name matches
function matchName(drivers, name) {
  let answer = drivers.filter(driver => driver.name === name);
  return answer;
}
/*
function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name
  })
}
*/