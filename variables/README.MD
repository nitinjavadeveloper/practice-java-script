# JavaScript Variable Interview Questions

Below are 50 variable-related interview questions with simple answers, examples, and use cases:

1. **What is a variable in JavaScript?**  
   A container for storing data values.

   ```js
   let name = "Alice";
   ```

2. **How do you declare a variable in JavaScript?**  
   Using `var`, `let`, or `const`.

   ```js
   let age;
   ```

3. **What is the difference between `var`, `let`, and `const`?**  
   `var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.

   ```js
   var x = 1;
   let y = 2;
   const z = 3;
   ```

4. **What is variable hoisting?**  
   Variables declared with `var` are moved to the top of their scope.

   ```js
   console.log(a);
   var a = 5; // undefined
   ```

5. **How does hoisting differ between `var`, `let`, and `const`?**  
   `var` is hoisted and initialized as `undefined`, `let` and `const` are hoisted but not initialized.

   ```js
   console.log(b);
   let b = 2; // ReferenceError
   ```

6. **What is the scope of a variable?**  
   The region where the variable is accessible.

   ```js
   function foo() {
     let x = 1;
   }
   ```

7. **Explain the difference between global and local scope.**  
   Global: accessible everywhere. Local: accessible only within a function/block.

   ```js
   let globalVar = 1;
   function test() {
     let localVar = 2;
   }
   ```

8. **What is block scope?**  
   Variables declared inside `{}` are only accessible within that block.

   ```js
   if (true) {
     let x = 1;
   }
   ```

9. **What is function scope?**  
   Variables declared inside a function are only accessible within that function.

   ```js
   function foo() {
     var x = 1;
   }
   ```

10. **What is the Temporal Dead Zone (TDZ)?**  
    The time between entering scope and variable declaration where `let`/`const` cannot be accessed.

    ```js
    // console.log(a); let a = 3; // ReferenceError
    ```

11. **Can you reassign a `const` variable?**  
    No, but you can mutate its object properties.

    ```js
    const arr = [1];
    arr.push(2); // allowed
    ```

12. **Can you mutate the contents of a `const` object or array?**  
    Yes, the reference is constant, not the value.

    ```js
    const obj = {};
    obj.key = "value";
    ```

13. **What happens if you use a variable before declaring it?**  
    `var`: `undefined`; `let`/`const`: ReferenceError.

    ```js
    console.log(a);
    var a = 1; // undefined
    ```

14. **What is variable shadowing?**  
    A local variable with the same name as a global variable hides the global one.

    ```js
    let x = 1;
    function foo() {
      let x = 2;
    }
    ```

15. **How do closures relate to variable scope?**  
    Closures capture variables from their outer scope.

    ```js
    function outer() {
      let x = 1;
      return function () {
        return x;
      };
    }
    ```

16. **What is a closure?**  
    A function that remembers variables from its outer scope.

    ```js
    function makeCounter() {
      let count = 0;
      return () => ++count;
    }
    ```

17. **How do you create a global variable?**  
    Declare outside any function or use `window` in browsers.

    ```js
    var x = 1;
    window.y = 2;
    ```

18. **What are the risks of using global variables?**  
    Name collisions, hard to debug, accidental overwrites.

19. **How can you avoid polluting the global namespace?**  
    Use IIFE or modules.

    ```js
    (function () {
      let x = 1;
    })();
    ```

20. **What is destructuring assignment?**  
    Extracting values from arrays/objects into variables.

    ```js
    let [a, b] = [1, 2];
    let { x, y } = { x: 1, y: 2 };
    ```

21. **How do you destructure arrays and objects?**  
    Use `[a, b] = arr` for arrays, `{x, y} = obj` for objects.

22. **What is the default value of an uninitialized variable?**  
    `undefined`.

    ```js
    let a;
    console.log(a); // undefined
    ```

23. **What is the difference between `undefined` and `null`?**  
    `undefined`: not assigned; `null`: explicitly empty.

    ```js
    let a;
    let b = null;
    ```

24. **How do you check if a variable is defined?**  
    Use `typeof`.

    ```js
    if (typeof a !== "undefined") { ... }
    ```

25. **What is the difference between primitive and reference variables?**  
    Primitives store values; references store addresses to objects/arrays.

26. **How does assignment work for primitives vs. objects?**  
    Primitives are copied; objects are referenced.

    ```js
    let a = 1,
      b = a; // b is 1
    let obj1 = {},
      obj2 = obj1; // same object
    ```

27. **What is variable mutation?**  
    Changing the value of a variable.

    ```js
    let x = 1;
    x = 2;
    ```

28. **What is variable initialization?**  
    Assigning a value to a variable for the first time.

    ```js
    let x = 5;
    ```

29. **What is the difference between declaration and initialization?**  
    Declaration: creating variable; Initialization: assigning value.

    ```js
    let x; // declaration
    x = 1; // initialization
    ```

30. **What is an Immediately Invoked Function Expression (IIFE)?**  
    A function that runs as soon as it is defined.

    ```js
    (function () {
      console.log("run");
    })();
    ```

31. **How does an IIFE help with variable scope?**  
    Creates a private scope to avoid polluting global scope.

32. **What is the `window` object and how does it relate to variables?**  
    In browsers, global variables become properties of `window`.

    ```js
    var x = 1;
    console.log(window.x); // 1
    ```

33. **How do you create a constant in JavaScript?**  
    Use `const`.

    ```js
    const PI = 3.14;
    ```

34. **What is the difference between `const` and `Object.freeze()`?**  
    `const` prevents reassignment; `Object.freeze()` makes object immutable.

35. **How do you use template literals with variables?**  
    Use backticks and `${}`.

    ```js
    let name = "Bob";
    console.log(`Hello, ${name}`);
    ```

36. **How do you swap two variables in JavaScript?**  
    Using destructuring.

    ```js
    let a = 1,
      b = 2;
    [a, b] = [b, a];
    ```

37. **What is variable destructuring with default values?**  
    Assign default if value is `undefined`.

    ```js
    let [a = 1, b = 2] = [undefined, 3]; // a=1, b=3
    ```

38. **How do you rename variables during destructuring?**  
    Use `:` in object destructuring.

    ```js
    let { x: newX } = { x: 1 };
    ```

39. **What is rest syntax in variable declarations?**  
    Collects remaining elements into an array.

    ```js
    let [a, ...rest] = [1, 2, 3]; // rest=[2,3]
    ```

40. **What is spread syntax in variable assignments?**  
    Expands elements of an array/object.

    ```js
    let arr = [1, 2];
    let arr2 = [...arr, 3];
    ```

41. **How do you clone an object or array in JavaScript?**  
    Use spread or `Object.assign`.

    ```js
    let arr2 = [...arr];
    let obj2 = { ...obj };
    ```

42. **What is the difference between shallow and deep copy?**  
    Shallow: copies top-level; Deep: copies all nested levels.

43. **How do you check the type of a variable?**  
    Use `typeof`.

    ```js
    typeof 1; // "number"
    ```

44. **What is type coercion in JavaScript?**  
    Automatic conversion between types.

    ```js
    "5" + 1; // "51"
    ```

45. **How do you convert a variable from string to number and vice versa?**  
    Use `Number()`, `String()`, `parseInt()`.

    ```js
    Number("5");
    String(5);
    ```

46. **What is variable leakage?**  
    Accidentally creating global variables.

    ```js
    function foo() {
      x = 1;
    } // x becomes global
    ```

47. **How do you use variables in template strings?**  
    With `${}` inside backticks.

    ```js
    let n = "Sam";
    `Hi, ${n}`;
    ```

48. **What is the difference between `let` and `var` in loops?**  
    `let` creates a new binding per iteration; `var` does not.

    ```js
    for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0,1,2
    ```

49. **How do you declare multiple variables at once?**  
    Separate with commas.

    ```js
    let a = 1,
      b = 2,
      c = 3;
    ```

50. **What are best practices for naming variables?**  
    Use meaningful, camelCase names; avoid reserved
