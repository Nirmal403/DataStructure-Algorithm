

function fact(N)
{
if(N==0 || N==1)
{
    return 1;
}
return N*fact(N-1);
}
console.log(fact(5));
