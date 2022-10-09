// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a>b)
    return a;
  else
    return b;
}


// Progression #2: The lengthy word
const words = ['George', 'Alice', 'Alex', 'Iohn', 'Infanta', 'Xavior', 'LourdhAntony'];
function findScaryWord(ans){
  ans=' '
  if(words.length==0){
    ans = null
  }
  for( var i of words){
      if(i.length>ans.length){
        ans = i;
      }
     
  }
  return ans
}



// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(arr){
let a=arr.reduce((x,y)=>{
  return x+y
})
return a
}

// Progression #3.1 (Bonus): A generic sum() function

function add(arr) {
  var sum = 0;
  for (i of arr) {
    if (typeof i === "string") sum += i.length;
    else if (i === true) sum += 1;
    else if (i === false) sum += 0;
    else sum += i;
  }
  return sum;
}

// Progression #4: Calculate the average


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr){
  let ans = 0
  if(arr.length==0){
    ans = null
    return ans
  }
  else{
    for(var i of arr){
      ans = ans+i
    }
    return ans/arr.length
  }
  
}



// Progression 4.2: Array of strings
const items= ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt'];

function averageWordLength(arr){
  let ans = 0
  if(arr.length==0)
    return null
  else
    ans = add(arr)
return parseFloat(ans/arr.length)
}

// Progression #4.3 (Bonus): A generic avg() function

function avg(arr){
  let ans = 0
  if(arr.length == 0){
    return null
  }
  else{
    ans = add(arr)
    return parseFloat((ans/arr.length).toFixed(2))
  }
}



// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];


function uniqueArray(arr) {
  let ans = []
  for (i of arr) {
    if (ans.includes(i));
    else ans.push(i);
  }
  return ans;
}



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr, word){
if (arr.includes(word)) 
return true
else
return false
}



// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(arr, word){
let ans = 0
  for (i of arr) {
    if (i === word) 
    ans++;
  }
  return ans;
}



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(arr){
  let prod = 1, ans = 1
  for(var i =0;i<arr.length;i++){
    for(var j = 0; j<arr.length;j++){
      prod *= arr[i][j]
      
    }
    if(prod>ans){
      ans = prod
    }
    prod = 1
  }
  return ans
}
