// Q  - Write the range function
// // Example
// range(3, 6); // [3, 4, 5, 6]
// range(3)(5); // [3, 4, 5]
// range(3)(0); // []
 
function range(start,end)
{
   
    if(end !== undefined)
    { 
        let result=[]
        for(let i=start;i<=end;i++)
        {
            // console.log(i);
            result.push(i)
        }
        return result;
    }
    
     return function inner(end)
        {
            let result=[]
            for(let i=start;i<=end;i++)
            {
                result.push(i);
                // console.log(i);
            }
            return result;
        }
    // console.log(result)
    
}

console.log(range(3,6))
console.log(range(3)(8))
console.log(range(3)(0))


// Que÷

// // Correct Infinite Currying Solution
// function sum(total=0)
// {
//     return function innner(...args)
//     {
//         if(args.length==0)
//         {
//             return total;

//         }
//        let currsum= args.reduce((acc,curr)=>{
//                 acc+=curr;
//                 return acc;
//         },0)

//         return sum(total+currsum);
//     }
// }

// console.log(sum(3,2)(5)(7)(9)());
// console.log(sum()(3)(2)(5)(7)(9)());
// console.log(sum()(6,-3,1)());
// console.log(sum(2)(4)(6)())



// Que÷

// Way 1 — pass expected count as first argument:

// function sum(n) {           // n = how many numbers to collect
//     let total = 0, count = 0;
//     return function inner(...args) {
//         args.forEach(a => { total += a; count++; });
//         if (count >= n) return total;
//         return inner;
//     }
// }

// console.log(sum(3)(2)(4)(6));           // 12 ✓
// console.log(sum(4)(4,5)(-10,-6));       // -3 ✓ (4 numbers)
// console.log(sum(5)(4,2)(-10,-6)(2));    // -8 ✓ (5 numbers)





// function toggle(...args) {
//     let index = -1;

//     return function() {
//         index = (index + 1) % args.length;  // cycles back to 0 after last
//         return args[index];
//     }
// }

// var hello = toggle("hello");
// var onOff = toggle("on", "off");
// var speed = toggle("slow", "medium", "fast");
 
// console.log(hello()); // "hello"
// hello(); // "hello"
 
// console.log(onOff()); // "on"
// console.log(onOff()); // "off"
// console.log(onOff()); // "on"
 
// console.log(speed()); // "slow"
// console.log(speed()); // "medium"
// console.log(speed()); // "fast"
// console.log(speed()); // "slow"