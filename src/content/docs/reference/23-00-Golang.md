---
title: Golang
description: Reference on the Go programming language
---

Go, often referred to as Golang, is a statically typed, compiled programming language known for its simplicity and efficiency. In this section, we'll explore the fundamental aspects of Go's syntax, including variables, data types, control structures, functions, and more.

## 1. Hello, World!
Let's start with a simple "Hello, World!" program in Go:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

- `package main`: Every Go program must start with a main package, and the main function is the entry point of the program.
- `import "fmt"`: We import the "fmt" package, which provides basic input/output functionality.
- `fmt.Println("Hello, World!")`: This line prints "Hello, World!" to the console.

## 2. Variables and Data Types
### Declaring Variables
In Go, you can declare variables using the var keyword:

```go
var age int
age = 30
```

Alternatively, you can use a short variable declaration:

```go
name := "Alice"
```

### Constants
Constants in Go are declared using the const keyword:

```go
const pi = 3.14159265359
```

### Basic Data Types
Go has several basic data types:

- **int:** Integer type (e.g., int, int8, int16, int32, int64)
- **float64:** Floating-point numbers
- **string:** String type
- **bool:** Boolean type
- **byte:** Alias for uint8
- **rune:** Alias for int32, representing a Unicode code point

## 3. Control Structures
### Conditional Statements (if, else, switch)
```go
if x > 10 {
    fmt.Println("x is greater than 10")
} else if x == 10 {
    fmt.Println("x is equal to 10")
} else {
    fmt.Println("x is less than 10")
}
```

```go
switch day {
case "Monday":
    fmt.Println("It's Monday")
case "Tuesday":
    fmt.Println("It's Tuesday")
default:
    fmt.Println("It's some other day")
}
```
### Loops (for)

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```
```go
names := []string{"Alice", "Bob", "Charlie"}
for _, name := range names {
    fmt.Println(name)
}
```

## 4. Functions
### Defining Functions
```go
func add(a, b int) int {
    return a + b
}
```

Function Arguments and Return Values
Go functions can take multiple arguments and return multiple values:

```go
func calculate(x, y int) (int, int) {
    sum := x + y
    diff := x - y
    return sum, diff
}
```
### Variadic Functions
A variadic function accepts a variable number of arguments:

```go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}
```

### Anonymous Functions (Closures)
You can define anonymous functions (closures) in Go:

```go
func main() {
    add := func(a, b int) int {
        return a + b
    }
    result := add(3, 5)
    fmt.Println(result)
}
```

## 5. Packages and Imports
### Creating Packages
Go programs are organized into packages. You can create your own packages by placing related Go files in the same directory.

### Importing Packages
You import packages at the beginning of your Go files to use their functionality:

```go
import "fmt"
import "math"
```
Or use parentheses to import multiple packages:

```go
import (
    "fmt"
    "math"
)
```

## 6. Structs and Methods
### Defining Structs
A struct is a composite data type that groups together variables under a single name:

```go
type Person struct {
    Name string
    Age  int
}
```

### Methods on Structs
You can define methods associated with structs:

```go
func (p Person) SayHello() {
    fmt.Printf("Hello, my name is %s and I'm %d years old.\n", p.Name, p.Age)
}
```

## 7. Pointers
### Declaring Pointers
You can declare pointers using the * symbol:

```go
var x int
var ptr *int
ptr = &x
```

### Using Pointers
Pointers allow you to modify the value at the memory address they point to:

```go
*ptr = 42 // x is now 42
```

## 8. Error Handling
Go encourages explicit error handling. Functions that may produce errors typically return two values: the result and an error.

```go
result, err := someFunction()
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Result:", result)
}
```

## 9. Concurrency
Go has built-in support for concurrency through goroutines and channels. Goroutines are lightweight threads of execution, and channels are used for communication between goroutines.

```go
go func() {
    // Code to run concurrently
}()
```

## 10. Defer, Panic, and Recover
- **defer:** Used to schedule a function call to be run after the current function returns.
- **panic:** Used to raise a runtime error.
- **recover:** Used to catch and handle panics.

## 11. Interfaces
Interfaces define behavior that types can implement. Go uses interfaces to achieve polymorphism.

```go
type Shape interface {
    Area() float64
    Perimeter() float64
}
```

## GO CLI

### 1. Installing Go
Before you can use Go CLI commands, you need to install the Go programming language on your system. You can download the official installer for your operating system from the Go Downloads page. Follow the installation instructions for your platform.

### 2. Understanding the GOPATH
Go uses a workspace directory called GOPATH to manage your Go projects and packages. It typically resides in your home directory. Make sure to set your GOPATH environment variable correctly.

```shell
export GOPATH=$HOME/go
```

### 3. Running Go Code
To run a Go program, use the go run command followed by the name of the Go source file:

```go
go run main.go
```
This command compiles and executes the Go code in the specified file.

4. Compiling Go Code
You can compile Go code using the go build command. It generates an executable file that you can run later.

```shell
go build main.go
```

This command creates an executable file with the same name as the package's directory or the specified output file.

```shell
./main
```
### 5. Managing Packages
Installing Packages
Go uses the go get command to download and install packages. Simply provide the import path of the package you want to install:

```shell
go get github.com/package-name
```

This command fetches the package from the repository and installs it in your workspace.

### Updating Packages
To update packages to their latest versions, use the go get -u command:

```shell
go get -u github.com/package-name
```

This command updates the specified package and its dependencies to their latest versions.

### Removing Packages
If you want to remove a package from your workspace, use the go clean command followed by the -i flag and the import path of the package:

```shell
go clean -i github.com/package-name
```

### Listing Installed Packages
To list all the installed packages in your workspace, use the go list command:

```shell
go list ...
```
The ... pattern lists all packages in your workspace.

### 6. Conclusion
Using Go CLI commands, you can easily run, compile, and manage packages in your Go projects. Understanding these commands is essential for developing and maintaining Go applications effectively. Explore Go's documentation for more advanced features and options.

## Go Tricks

### Arrays

| Tip | Purpose | Syntax | Example | Required Package |
| --- | ------- | ------ | ------- | ---------------- |
| 1   | Declare an array | `var arr [size]type` | `var numbers [5]int` | None |
| 2   | Initialize an array | `arr := [size]type{values}` | `arr := [3]int{1, 2, 3}` | None |
| 3   | Access an element | `arr[index]` | `value := arr[0]` | None |
| 4   | Update an element | `arr[index] = newValue` | `arr[1] = 42` | None |
| 5   | Get the length | `len(arr)` | `length := len(arr)` | None |
| 6   | Iterate using a loop | `for index, value := range arr { }` | `for i, v := range arr { }` | None |
| 7   | Slice an array | `arr[start:end]` | `subarr := arr[1:4]` | None |
| 8   | Append to a slice | `slice = append(slice, values...)` | `slice = append(slice, 4, 5)` | None |
| 9   | Copy slices | `copy(dest, source)` | `copy(newArr, arr)` | None |
| 10  | Check if an element exists | Iterate or use a map | Iterate or use a map | None |
| 11  | Find the maximum element | Iterate and compare | Iterate and compare | None |
| 12  | Find the minimum element | Iterate and compare | Iterate and compare | None |
| 13  | Sort in ascending order | `sort.Slice(arr, func(i, j int) bool { return arr[i] < arr[j] })` | `sort.Slice(arr, func(i, j int) bool { return arr[i] < arr[j] })` | `"sort"` |
| 14  | Sort in descending order | `sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })` | `sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })` | `"sort"` |
| 15  | Search for an element | Iterate or use a map | Iterate or use a map | None |
| 16  | Filter elements | Create a new slice | Create a new slice | None |
| 17  | Map elements | Create a new slice with mapped values | Create a new slice with mapped values | None |
| 18  | Reverse an array/slice | Iterate and swap elements | Iterate and swap elements | None |
| 19  | Convert array to slice | Use array as a slice | Use array as a slice | None |
| 20  | Convert slice to array | Use slicing or iterate | Use slicing or iterate | None |
| 21  | Compare arrays/slices | Iterate and compare elements | Iterate and compare elements | None |
| 22  | Initialize with zero values | Arrays are automatically zero-initialized | Arrays are automatically zero-initialized | None |
| 23  | Multidimensional arrays | `var arr [size1][size2]type` | `var matrix [3][3]int` | None |
| 24  | Compare equality of slices | Iterate and compare elements | Iterate and compare elements | None |
| 25  | Clear a slice | Create a new slice | Create a new slice | None |

## Working With Strings

| Tip | Purpose | Syntax | Example | Required Package |
| --- | ------- | ------ | ------- | ---------------- |
| 26  | Declare a string | `var str string` | `var message string` | None |
| 27  | Initialize a string | `str := "text"` | `name := "Alice"` | None |
| 28  | Concatenate strings | `result := str1 + str2` | `greeting := "Hello, " + name` | None |
| 29  | Find the length | `len(str)` | `length := len(str)` | None |
| 30  | Access a character | `char := str[index]` | `first := name[0]` | None |
| 31  | Iterate over characters | `for index, char := range str { }` | `for i, letter := range greeting { }` | None |
| 32  | Convert to uppercase | `strings.ToUpper(str)` | `upper := strings.ToUpper(name)` | `"strings"` |
| 33  | Convert to lowercase | `strings.ToLower(str)` | `lower := strings.ToLower(name)` | `"strings"` |
| 34  | Check if a substring exists | `strings.Contains(str, substr)` | `found := strings.Contains(text, "Go")` | `"strings"` |
| 35  | Count occurrences of a substring | `strings.Count(str, substr)` | `count := strings.Count(text, "is")` | `"strings"` |
| 36  | Replace substrings | `strings.Replace(str, old, new, n)` | `modified := strings.Replace(text, "Go", "Golang", -1)` | `"strings"` |
| 37  | Trim whitespace | `strings.TrimSpace(str)` | `trimmed := strings.TrimSpace("  Hello, Go  ")` | `"strings"` |
| 38  | Split into substrings | `strings.Split(str, sep)` | `parts := strings.Split(text, " ")` | `"strings"` |
| 39  | Join substrings | `strings.Join(slice, sep)` | `sentence := strings.Join(parts, " ")` | `"strings"` |
| 40  | Find the index of a substring | `strings.Index(str, substr)` | `index := strings.Index(text, "world")` | `"strings"` |
| 41  | Check if it starts with a prefix | `strings.HasPrefix(str, prefix)` | `startsWith := strings.HasPrefix(text, "Hello")` | `"strings"` |
| 42  | Check if it ends with a suffix | `strings.HasSuffix(str, suffix)` | `endsWith := strings.HasSuffix(text, "Go")` | `"strings"` |
| 43  | Convert to byte slice | `[]byte(str)` | `bytes := []byte("Hello, Go")` | None |
| 44  | Convert to rune slice | `[]rune(str)` | `runes := []rune("こんにちは")` | None |
| 45  | Compare strings | `strings.Compare(str1, str2)` | `result := strings.Compare(a, b)` | `"strings"` |
| 46  | Check if two strings are equal | `str1 == str2` | `isEqual := a == b` | None |
| 47  | Find and replace using regex | `regexp.ReplaceAllString(src, replacement)` | `result := regexp.ReplaceAllString(text, "\\w+", "X")` | `"regexp"` |
| 48  | Match using regex | `regexp.MatchString(pattern, str)` | `matched, _ := regexp.MatchString("G[o]+", text)` | `"regexp"` |
| 49  | Extract matched substrings | `regexp.FindAllString(src, -1)` | `matches := regexp.FindAllString(text, "\\w+")` | `"regexp"` |
| 50  | Validate email addresses | Use a regular expression | Use a regular expression | None |

### Other Tricks

| Tip | Purpose | Syntax | Example | Required Package |
| --- | ------- | ------ | ------- | ---------------- |
| 51  | Parse JSON to a struct | `json.Unmarshal(data, &structVar)` | `err := json.Unmarshal([]byte(jsonData), &user)` | `"encoding/json"` |
| 52  | Convert struct to JSON | `json.Marshal(structVar)` | `jsonStr, err := json.Marshal(user)` | `"encoding/json"` |
| 53  | Pretty-print JSON | `json.MarshalIndent(structVar, "", "  ")` | `jsonStr, err := json.MarshalIndent(user, "", "  ")` | `"encoding/json"` |
| 54  | Encode to Base64 | `base64.StdEncoding.EncodeToString([]byte(data))` | `encoded := base64.StdEncoding.EncodeToString([]byte("hello"))` | `"encoding/base64"` |
| 55  | Decode from Base64 | `base64.StdEncoding.DecodeString(encoded)` | `decoded, err := base64.StdEncoding.DecodeString(encoded)` | `"encoding/base64"` |
| 56  | Convert string to integer | `strconv.Atoi(str)` | `num, err := strconv.Atoi("42")` | `"strconv"` |
| 57  | Convert integer to string | `strconv.Itoa(int)` | `str := strconv.Itoa(42)` | `"strconv"` |
| 58  | Convert string to float64 | `strconv.ParseFloat(str, 64)` | `value, err := strconv.ParseFloat("3.14", 64)` | `"strconv"` |
| 59  | Convert float64 to string | `strconv.FormatFloat(flt, 'f', -1, 64)` | `str := strconv.FormatFloat(3.14, 'f', -1, 64)` | `"strconv"` |
| 60  | Check if a string is a number | Custom function | `isNum := isNumeric("123")` | None |
| 61  | Check if a string is a valid URL | Custom function | `isValid := isValidURL("https://example.com")` | None |
| 62  | Remove non-alphanumeric characters | Custom function | `cleaned := removeNonAlphaNumeric("Hello, $Go!")` | None |
| 63  | Convert string to bytes | `[]byte(str)` | `byteData := []byte("Hello")` | None |
| 64  | Convert bytes to string | `string(byteSlice)` | `text := string(byteData)` | None |
| 65  | Trim specific characters | `strings.Trim(str, cutset)` | `trimmed := strings.Trim("++Hello++", "+")` | `"strings"` |
| 66  | Remove duplicates from a string slice | Custom function | `unique := removeDuplicates([]string{"a", "b", "a", "c"})` | None |
| 67  | Reverse a string | Custom function | `reversed := reverseString("hello")` | None |
| 68  | Find the longest common prefix | Custom function | `prefix := longestCommonPrefix([]string{"abc", "ab", "abcd"})` | None |
| 69  | Find the shortest common suffix | Custom function | `suffix := shortestCommonSuffix([]string{"abc", "bc", "abcd"})` | None |
| 70  | Convert string to title case | Custom function | `title := toTitleCase("hello, world")` | None |
| 71  | Shuffle characters in a string | Custom function | `shuffled := shuffleString("abcde")` | None |
| 72  | Check if a string is palindrome | Custom function | `isPalin := isPalindrome("racecar")` | None |
| 73  | Extract email addresses | Custom function | `emails := extractEmails("Contact us at info@example.com")` | None |
| 74  | Remove HTML tags | Custom function | `plainText := removeHTMLTags("<p>Hello, <b>world</b>!</p>")` | None |
| 75  | Generate random strings | Custom function | `randomStr := generateRandomString(8)` | None |
