var arr1 =[1,2,3,4];
var arr2 =[5,6,7,8];
var arr3 =[10,11,12,13];
var arr4 =[14,15,16,17];

var arr = [];

arr.push(arr1);
arr.push(arr2);
arr.push(arr3);
arr.push(arr4);

for(i=0; i<arr.length; i++)
{
    var bag = '';
for(j=0; j<arr[0].length; j++)
{
    bag = bag + arr[i][j]+ " ";
}
console.log(bag);
}
