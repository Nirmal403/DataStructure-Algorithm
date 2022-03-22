function fib(N)
{
    if(N==0||N==1)
    {
        return 1;
    }
    return fib(N-1)+fib(N-2)
}
console.log(fib(5))