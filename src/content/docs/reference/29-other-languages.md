---
title: Other Language
description: Reference on Other Programming Languages
---

# Other Languages

## C
Purpose: C is a general-purpose, procedural programming language. It was developed to create system software, including operating systems and embedded systems. C is known for its low-level memory manipulation capabilities, making it suitable for tasks requiring precise control over hardware.

## C++
Purpose: C++ is an extension of the C programming language, adding object-oriented features. Its primary purpose is to facilitate the development of complex, high-performance applications. C++ is commonly used for game development, system programming, and large-scale software projects.

## Dart
Purpose: Dart is a client-side programming language developed by Google. Its primary role is in web and mobile app development. Dart is used for building applications with the Flutter framework, making it suitable for creating cross-platform mobile apps and web applications.

## OCaml
Purpose: OCaml is a functional and imperative programming language. Its purpose is to provide a strong type system and functional programming capabilities. OCaml is used in various domains, including scientific computing, theorem proving, and language development.

## Swift
Purpose: Swift is a modern, general-purpose programming language developed by Apple. It is primarily used for iOS, macOS, watchOS, and tvOS app development. Swift aims to provide a safer and more efficient alternative to Objective-C for building Apple ecosystem applications.

## Nim
Purpose: Nim is a statically typed, systems programming language. Its role is to provide high performance and expressiveness while maintaining ease of use. Nim is used for a wide range of applications, including game development, scripting, and server-side programming.

## Crystal
Purpose: Crystal is a compiled programming language known for its speed and type safety. Its primary role is in web development and building high-performance applications. Crystal combines the syntax of Ruby with the performance of C, making it suitable for writing web servers and APIs.

## Haskell
Purpose: Haskell is a purely functional programming language known for its strong type system and mathematical elegance. Its purpose is to facilitate functional programming paradigms and provide a platform for research in programming language design. Haskell is used in academia and for building reliable, high-assurance software.

## Erlang
Purpose: Erlang is a concurrent, functional programming language designed for building highly scalable and fault-tolerant systems. Its primary role is in telecommunication systems, real-time applications, and distributed systems where high availability and fault tolerance are critical.

## Elixir
Purpose: Elixir is a functional, concurrent programming language built on the Erlang virtual machine (BEAM). Its role is to leverage the scalability and fault tolerance of Erlang while providing a more readable and approachable syntax. Elixir is commonly used for building scalable web applications and distributed systems.

These programming languages serve various purposes and roles, catering to different application domains and development needs.

# Hello World

## C
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

Compile: `gcc hello.c -o hello`

Run: `./hello`

## C++
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Compile: `g++ hello.cpp -o hello`

Run: `./hello`

## Dart
```dart
void main() {
  print('Hello, World!');
}
```

Run: `dart hello.dart`

## OCaml
```ocaml
print_endline "Hello, World!"
```

Compile: There's no need to compile OCaml code separately; you can run it directly.

Run: `ocaml hello.ml`

## Swift
```swift
print("Hello, World!")
```

Compile and Run: Swift code is typically compiled and run using the swift command without the need for separate compilation steps.

Run: `swift hello.swift`

## Nim
```nim
echo "Hello, World!"
```
Compile: `nim c -r hello.nim`

Run: `./hello`

## Crystal
```crystal
puts "Hello, World!"
```

Compile: `crystal build hello.cr`

Run: `./hello`

## Haskell
```haskell
main :: IO ()
main = putStrLn "Hello, World!"
```

Compile: `ghc -o hello hello.hs`

Run: `./hello`

## Erlang
```erlang
-module(hello).
-export([world/0]).

world() ->
    io:format("Hello, World!~n").
```

Compile: Open an Erlang shell by running erl, then compile the module using `c(hello).`.

Run: After compiling, you can call the function by executing `hello:world().` in the Erlang shell.

## Elixir
```elixir
IO.puts "Hello, World!"
```

Run: elixir hello.exs


# Syntax Basics

## C
```c
#include <stdio.h>

int main() {
    // Assign variables
    int x = 5;
    int y = 10;

    // Conditionals
    if (x < y) {
        printf("x is less than y\n");
    } else {
        printf("x is greater than or equal to y\n");
    }

    // Loops
    for (int i = 0; i < 5; i++) {
        printf("Iteration %d\n", i);
    }

    // Arrays
    int numbers[] = {1, 2, 3, 4, 5};

    // Key-Value Pairs (Not natively supported, C doesn't have built-in dictionaries)
    // You'd typically use arrays or structs to simulate key-value pairs.

    // Function
    int sum(int a, int b) {
        return a + b;
    }

    printf("Sum of x and y: %d\n", sum(x, y));

    return 0;
}
```

## C++
```cpp
#include <iostream>
#include <vector>
#include <map>

int main() {
    // Assign variables
    int x = 5;
    int y = 10;

    // Conditionals
    if (x < y) {
        std::cout << "x is less than y" << std::endl;
    } else {
        std::cout << "x is greater than or equal to y" << std::endl;
    }

    // Loops
    for (int i = 0; i < 5; i++) {
        std::cout << "Iteration " << i << std::endl;
    }

    // Arrays
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // Key-Value Pairs
    std::map<std::string, int> keyValuePairs;
    keyValuePairs["one"] = 1;
    keyValuePairs["two"] = 2;
    keyValuePairs["three"] = 3;

    // Function
    int sum(int a, int b) {
        return a + b;
    }

    std::cout << "Sum of x and y: " << sum(x, y) << std::endl;

    return 0;
}
```

## Dart
```dart
void main() {
  // Assign variables
  int x = 5;
  int y = 10;

  // Conditionals
  if (x < y) {
    print("x is less than y");
  } else {
    print("x is greater than or equal to y");
  }

  // Loops
  for (int i = 0; i < 5; i++) {
    print("Iteration $i");
  }

  // Arrays
  List<int> numbers = [1, 2, 3, 4, 5];

  // Key-Value Pairs (Dart uses Maps for key-value pairs)
  Map<String, int> keyValuePairs = {
    'one': 1,
    'two': 2,
    'three': 3,
  };

  // Function
  int sum(int a, int b) {
    return a + b;
  }

  print("Sum of x and y: ${sum(x, y)}");
}
```

## OCaml
```ocaml
let () =
  (* Assign variables *)
  let x = 5 in
  let y = 10 in

  (* Conditionals *)
  if x < y then
    print_endline "x is less than y"
  else
    print_endline "x is greater than or equal to y";

  (* Loops (OCaml typically uses recursion) *)
  let rec loop n =
    if n < 5 then (
      print_endline ("Iteration " ^ string_of_int n);
      loop (n + 1)
    ) in
  loop 0;

  (* Arrays (OCaml typically uses lists) *)
  let numbers = [1; 2; 3; 4; 5] in

  (* Key-Value Pairs (OCaml uses records for key-value pairs) *)
  type kv_pair = {key: string; value: int} in
  let pairs = [{key="one"; value=1}; {key="two"; value=2}; {key="three"; value=3}] in

  (* Function *)
  let sum a b = a + b in
  print_endline ("Sum of x and y: " ^ string_of_int (sum x y))
```

## Swift
```swift
import Foundation

func main() {
    // Assign variables
    let x = 5
    let y = 10

    // Conditionals
    if x < y {
        print("x is less than y")
    } else {
        print("x is greater than or equal to y")
    }

    // Loops
    for i in 0..<5 {
        print("Iteration \(i)")
    }

    // Arrays
    let numbers = [1, 2, 3, 4, 5]

    // Dictionaries for Key-Value Pairs
    let keyValuePairs = ["one": 1, "two": 2, "three": 3]

    // Function
    func sum(a: Int, b: Int) -> Int {
        return a + b
    }

    print("Sum of x and y: \(sum(a: x, b: y))")
}

main()
```
## Nim
```nim
proc main() =
  # Assign variables
  var x = 5
  var y = 10

  # Conditionals
  if x < y:
    echo "x is less than y"
  else:
    echo "x is greater than or equal to y"

  # Loops
  for i in 0..<5:
    echo "Iteration ", i

  # Arrays
  var numbers = @[1, 2, 3, 4, 5]

  # Key-Value Pairs (Nim uses built-in `Table` for key-value pairs)
  var keyValuePairs = initTable[string, int]()
  keyValuePairs["one"] = 1
  keyValuePairs["two"] = 2
  keyValuePairs["three"] = 3

  # Function
  proc sum(a, b: int): int =
    result = a + b

  echo "Sum of x and y: ", sum(x, y)

main()
```
## Crystal
```crystal
# Assign variables
x = 5
y = 10

# Conditionals
if x < y
  puts "x is less than y"
else
  puts "x is greater than or equal to y"
end

# Loops
(0..4).each do |i|
  puts "Iteration #{i}"
end

# Arrays
numbers = [1, 2, 3, 4, 5]

# Hashes for Key-Value Pairs
key_value_pairs = {"one" => 1, "two" => 2, "three" => 3}

# Function
def sum(a, b)
  a + b
end

puts "Sum of x and y: #{sum(x, y)}"
```

## Haskell
```haskell
main :: IO ()
main = do
  -- Assign variables
  let x = 5
  let y = 10

  -- Conditionals
  if x < y
    then putStrLn "x is less than y"
    else putStrLn "x is greater than or equal to y"

  -- Loops (Haskell typically uses recursion)
  let loop n
        | n < 5 = do
            putStrLn $ "Iteration " ++ show n
            loop (n + 1)
        | otherwise = return ()
  loop 0

  -- Lists (Haskell doesn't have traditional arrays)
  let numbers = [1, 2, 3, 4, 5]

  -- Tuples for Key-Value Pairs
  let keyValuePairs = [("one", 1), ("two", 2), ("three", 3)]

  -- Function
  let sum a b = a + b
  putStrLn $ "Sum of x and y: " ++ show (sum x y)
```

## Erlang
```erlang
-module(example).
-export([main/0]).

main() ->
    % Assign variables
    X = 5,
    Y = 10,

    % Conditionals
    if X < Y ->
        io:format("x is less than y~n");
    true ->
        io:format("x is greater than or equal to y~n")
    end,

    % Loops (Erlang typically uses recursion)
    loop(0).

loop(5) ->
    ok;
loop(N) ->
    io:format("Iteration ~w~n", [N]),
    loop(N + 1).

% Lists (Erlang doesn't have traditional arrays)
Numbers = [1, 2, 3, 4, 5],

% Key-Value Pairs (Erlang uses tuples or maps for key-value pairs)
KeyValuePairs = [{<<"one">>, 1}, {<<"two">>, 2}, {<<"three">>, 3}],

% Function
Sum = fun(A, B) -> A + B end,
io:format("Sum of x and y: ~w~n", [Sum(X, Y)]).
```

## Elixir
```elixir
defmodule Example do
  def main do
    # Assign variables
    x = 5
    y = 10

    # Conditionals
    if x < y do
      IO.puts "x is less than y"
    else
      IO.puts "x is greater than or equal to y"
    end

    # Loops (Elixir typically uses recursion)
    loop(0)

    # Lists (Elixir doesn't have traditional arrays)
    numbers = [1, 2, 3, 4, 5]

    # Key-Value Pairs (Elixir uses maps for key-value pairs)
    key_value_pairs = %{"one" => 1, "two" => 2, "three" => 3}

    # Function
    sum = fn a, b -> a + b end
    IO.puts "Sum of x and y: #{sum.(x, y)}"
  end

  defp loop(5), do: :ok
  defp loop(n) do
    IO.puts "Iteration #{n}"
    loop(n + 1)
  end
end

Example.main()
```

# Perl and Raku

## Perl:
### What is Perl?

Perl is a high-level, general-purpose programming language known for its text processing capabilities, regular expression support, and strong community.

It was created by Larry Wall in the late 1980s and has since evolved into Perl 5, which is widely used for a range of applications, from web development to system administration.

### Printing to the Console in Perl:

In Perl, you can use the print function to output text to the console.
Here's how you print to the console in Perl:
```perl
print "Hello, Perl!\n"; # The "\n" represents a newline character for line breaks
```
### Declaring Variables in Perl:

Perl doesn't require explicit variable declarations. You can create variables by simply assigning values to them.

Variable names start with a sigil (a special character), such as $ for scalars (single values) and @ for arrays (ordered lists).

Here's an example of variable declaration in Perl:
```perl
my $name = "John"; # Scalar variable
my @numbers = (1, 2, 3, 4); # Array variable
```
## Raku (formerly known as Perl 6):
### What is Raku?

Raku is a modern programming language inspired by Perl and designed to be expressive, readable, and versatile.

It aims to combine the best features of Perl 5 with new and innovative language design concepts.

Raku offers powerful text manipulation capabilities, object-oriented programming, and a wide range of built-in data types.

### Printing to the Console in Raku:

In Raku, you can use the say function to print text to the console. say automatically appends a newline character, simplifying output.

```raku
say "Hello, Raku!";
```

### Declaring Variables in Raku:

Similar to Perl, Raku allows you to create variables without explicit declarations.
Raku introduces a more flexible sigil system. For scalars, you can use $, but it also supports sigils like @ for arrays and % for hashes (associative arrays).

```raku
my $name = "Jane"; # Scalar variable
my @numbers = 1, 2, 3, 4; # Array variable
my %data = "key" => "value"; # Hash variable
```

Raku has continued to evolve with a strong focus on modern software development practices, while Perl 5 remains a valuable choice for many legacy systems and projects. 

Both languages provide powerful text processing capabilities and flexible variable handling, making them versatile options for various programming tasks.

## Working with Strings:
### Perl:

Perl provides powerful string manipulation capabilities. You can concatenate strings using the . operator or use double-quoted strings for interpolation.
```perl
my $name = "John";
my $greeting = "Hello, " . $name; # Concatenation
my $message = "The value of \$name is: $name"; # Interpolation
```
### Raku:

Raku's string handling is more intuitive, with interpolation available by default in double-quoted strings. Raku also supports string interpolation using {}.
```raku
my $name = "Jane";
my $greeting = "Hello, $name"; # String interpolation
my $message = "The value of \$name is: {$name}"; # Interpolation with {}
```
## Working with Arrays:
### Perl:

Perl uses arrays and array functions for working with ordered lists of data. You can add elements using push, remove elements using pop, and access elements by index.
```perl
my @numbers = (1, 2, 3, 4);
push @numbers, 5; # Add an element
my $first = $numbers[0]; # Access element by index
```
### Raku:

Raku offers a more consistent and feature-rich array handling experience. You can use various array methods like push, pop, and shift.
```raku
my @numbers = 1, 2, 3, 4;
@numbers.push(5); # Add an element
my $first = @numbers[0]; # Access element by index
```
## Writing Functions:
### Perl:

In Perl, you define subroutines (functions) using the sub keyword. Arguments are accessed via the @_ array, and the return keyword is used to return values.
```perl
sub add_numbers {
    my ($x, $y) = @_;
    return $x + $y;
}
my $result = add_numbers(3, 4);
```
### Raku:

Raku simplifies function definition and parameter handling. You use sub to define a subroutine, and parameters are declared within parentheses.
```raku
sub add-numbers($x, $y) {
    return $x + $y;
}
my $result = add-numbers(3, 4);
```
Raku offers more consistent and readable syntax for function definitions and parameter handling. Both languages, however, allow you to define functions for modularizing code and performing reusable tasks effectively.

These examples demonstrate some of the similarities and differences between Perl and Raku in terms of string manipulation, working with arrays, and writing functions. Both languages have their strengths and unique features, making them valuable choices for various programming tasks.