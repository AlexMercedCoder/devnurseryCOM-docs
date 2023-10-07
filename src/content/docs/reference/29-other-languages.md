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
