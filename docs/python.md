---
title: Python
---

- In python everything is an object, there are no primitive types. this means that numbers max out at way larger sizes and I think is part of the reason why there are many methods like len() that I expect use dot notation on an object but instead take in the object like a string/set/list as an argument.
- python uses input() for input
- Python has floor division operator ( // ) is basically "whole division," with a remainder and could be easily gotten with %
- For formatted strings f-strings, the syntax is f'Variable: `{my_variable}`'
- their are many format specific presentation types that can be used within an f-string replacement field, these include, **:s** (string - default presentation), **:,d** (decimal with commas (ints only)), **:03d** (leading 0 notation), :b (binary (ints only)), **:x** or **:x** (hexadecimal in lower or upper case, ints only), exponent ( e ), and fixed point ( :.2f )
- python has Lists which are the stand in for other language's Array. They are ordered and mutable, can contain duplicates, and use append(), pop(), remove(), and more methods very similar to arrays with slightly different names.
- python has `insert(index, ele)` method to insert an ele at index
- pytohn has tuples which are lists that are immutable and use parentheses for generation Ex. my_tuple = ('tuples', 'are', 'neat')
- namedtuples are tuples that allow programmers to use dot notation to access the immutable elements within (ie. Car.price) instead of accessing by indexes (ie. car\[2]). To use namedtuples they must be imported from collections, the syntax is " from collections import namedtuple ". They are declared with " Computer = namedtuple('Computer', \['price', 'model', 'manufacturer']) " and then created following that format like "home_pc = Computer(''500', 'Latitude 5490', 'Dell')"
- sets are **unordered** collections of elements, which use curly braces for creation `{}`. They cannot be indexed and no elements within a set can share the same value (duplicates will be removed upon creation/addition). sets still have add(), remove(), and pop() which just takes a random element out because they are unordered. they also have set1.update(set2) to add a second set into the first one, and .clear() to clear the set. Sets have more methods like .intersection, .union(), and .differences which take in sets as arguments and compare to the set being operated on.
- dictionaries in python use curly braces and store key value pairs ie. `{'Toyota Corolla': 24000}`. also dictionary types do not HAVE to match, you can associate a string with a number on one line and on the next asscoiate a string with an list. dictionaries use bracket notation to access (ie. cars\['Corolla']). You can add new entries if they don't already exist with bracket notation, modify existing entries, or use del dict\[k] to remove an entry.
- there are numeric types, sequence types, and mapping types in python. numeric types contain int and float types.
- Can explicitly convert types with int(), float(), and str(). conversion to int truncates decimal
- python has membership operators "is" and "is not" which can check if to objects have the same reference.
- float's can have imprecision that makes them harder to compare equality.
- code blocks in python are a series of statements grouped together, defined by indentation.
- Don't mix tabs and spaces in a python project, but if your text editor convert tabs to 4 spaces then you are great.
- python has conditional expressions which are like implicit returns and ternary operators in javascript. they follow the form " expr_when_true if condition else expr_when_false " and these expressions can be assigned to a variable like ternary operators.
- conditional expression  `my_var = expr1 if (condition) else expr2`  replaces:
if condition:
my_ var = expr1
else:
my_var = expr2
- once in a loop in python execution continues until the bodies end
- a sentinel refers to a value used to signal the end of a sequence, typically a loop
- python does not have i++
- python has for in loop, syntax: ==for my_element in my_iterable==
- python has an else statement proceeding loops that executes only if the loop terminates normally
- python has "unpacking" like object de-structuring or assigning multiple variables at once like in JavaScript. The syntax: Ex: `num1, num2 = [350, 400]` which is equivalent to `num1 = 350` and `num2 = 400`
- python has enumerate for loop `for (index, value) in enumerate(my_list):` which gives index and value for each loop iteration.
- variables in global scope can be accessed within functions in python
- polymorphism is an inherent part of python because of dynamic typing.
- programmers commonly using functional stubs, function definitions without having the function written to define the logic of the program before coding every function's statements. one way to do this is with the pass keyword inside the function (like break in a loop). mostly used because at least one statement required in a user defined function
- function stubs can also be done using print statement's with a FIXME message and return -1
- another way to implement function stubs is with `raise NotImplementedError`
- All Python code is compiled before execution by the interpreter. Statements entered in an interactive interpreter are compiled immediately, then executed. Modules are compiled when imported, and functions are compiled when the interpreter evaluates the function definition.
- functions in python are objects and can be assigned to variables
- to change a global variable within a python function you must use the global keyword before the variable name to allow modification, syntax: `global my_global_var`. the reason for this is scope resolution
- A good practice is to avoid manipulating global variables inside of a function.
- functions in python must be defined before being called in a file
- a namespace maps names to objects
- a python programmer can examine variables in the current global and local namespace by using the `locals()` and `globals()` built-in functions
- built-in scope is stuff like str(), int(), and input() that are built into python
- python finds variables by looking in local namespace, (then an outer function's local namespace if their are nested functions), then local namespace, then built-in namespace. This process is called scope resolution
- arguments to functions are passed by object reference, this concept is known is Python as pass-by-assignment. when the function is called new local variables are created tin the function's local namespace binding the names in the parameter list to the passed arguments.
- A function call creates new local variables that reference the existing argument objects.
- modifying an argument that is referenced somewhere else in the program may cause problems. Whether the modification of an argument depends on the mutability of that object. strings and ints are immutable, but lists are mutable when you "change" a string you are just changing the reference to a new string, but modifying a list will be seen in global scope
- to pass a copy of a list you can use syntax `my_list[:]`
- python supports keyword arguemtns that allow function arguments to be mapped based on name rather than order. ie for:
`def print_book_description(title, author, publisher, year, version, num_chapters, num_pages):`
use:
`print_book_description(title='The Lord of the Rings', publisher='George Allen & Unwin', year=1954, author='J. R. R. Tolkien', version=1.0, num_pages=456, num_chapters=22)``
- A good practice is to use keyword arguments for any function containing more than approximately four arguments
- keyword arguments can be mixed with positional arguments, in which case they must come last (after every positional argument)
- python supports default parameter values for the last arguments of a function, meaning that a function call can optionally omit an argument and the default parameter value will be used for that omited arguemnt. syntax: `def print_date(day, month=12, year=2000, style=0)`
- functions in python can collect optional positional parameters into an arbitrary argument list tuple be including `args` at the end of the argument list in the function definition. This tuple is accessed with `args`
- functions in python also support keyword arguments, implemented like `args` but use a `*kwargs` instead and create a `kwargs` dict where the keys are the parameter names specified in the function call
- `args` and `*kwargs` don't have to be named like that, the important part is the starting asteriscs, although names `args` and `kwargs` are standard practice
- To create a function with multiple outputs, you can return the multiple values in a tuple by seperating them with a comma ie. `return val1, val2`. Then you can unpack the tuple, syntax `val1, val2 = get_two_vals(my_arg)`. However a function cannot return multiple objects
- slice notation is done inside the brackets of a sequence type, syntax: `my_sequence_type[start:end]` in the brackets you choose the start and end (exclusive). this means end - start = num of elements sliced. slicing create a new object
- slicing past the end of the string has the same output as slicing just to the end
- slicing with an extra colon ie 1:5:2 let's you use a stride which is how much to increment the index after reading each element, like step, 1 if not specifyed
- formatted strings support "field width" inside the replacement fields which use `string:width_num` to pad the string with spaces to get things to line up well, the default is to left align strings and right align numbers. to change the align you can use `<`, `>`, or ^ before the width after the colon to align the string in towards where the arrow is pointing (left, right, or center). this is an alignment character
- in formatting a string you can include a char before the alignment character to pad a table with that value. The complete field with syntax without any omissions is `{my_string:_<5}`
- formatted floats with `:.2f` syntax are rounded, and floats can also use field width
- strings can be compared using equality operators, less than greater than operators (which compare ascii value starting at first char), and membership operators
- string methods:
    - replace(old, new) - replaces old substring with new substring, can include a count argument to only change up to count instances of old
    - find(x) - returns the index of the first occurrence of an item in the string. can include start argument (int) to specify the first index to start looking from, as well as end to indicate where to stop the search (exclusive). can use rfind(x) to search for the last occurrence
    - count(x) - returns the number of occurence of x in a string
    - isalnum() -- Returns True if all characters in the string are lowercase or uppercase letters, or the numbers 0-9. (is alphanumeric)
    - isdigit() -- Returns True if all characters are the numbers 0-9.
    - islower() -- Returns True if all cased characters are lowercase letters.
    - isupper() -- Returns True if all cased characters are uppercase letters.
    - isspace() -- Returns True if all characters are whitespace.
    - startswith(x) -- Returns True if the string starts with x.
    - endswith(x) -- Returns True if the string ends with x.
    - 
        - capitalize() -- Returns a copy of the string with the first character capitalized and the rest lowercased.
    - lower() -- Returns a copy of the string with all characters lowercased.
    - upper() -- Returns a copy of the string with all characters uppercased.
    - strip() -- Returns a copy of the string with leading and trailing whitespace removed.
    - title() -- Returns a copy of the string as a title, with first letters of words capitalized. first letters of each word capitalized
- python has split method just like JavaScript, where it returns a list of "tokens" where each "token" is a substring separated by the delimiter, default is space)
- python also has the join method which is called on the separator and takes the list to join together as the argument. join method concatenates the strings in the list with the separator.
- split and join commonly used together to process text and reformat it. ie. tsv to csv. using both together also lets you check each token
- Lists in python are mutable containers that store references to objects of various types. They can be created using the list() function which takes in a single iterable object argument, or with brackets \[] with values separated by commas. they can by sliced and concatenated like strings, but they also support in-place modification. You can change an element by using bracket notation to select the `ith` element and replace it's value (reference), or using del. The easiest way to create a copy of a list is with slice omitting starting and ending indices, `my_list[:]`
- Common list methods are `list.append(x), list.extend(\\[x]), list.indert(i, x), list.remove(x), list.pop(i), list.sort(), list.reverse(), list.index(x), list.count(x)`
- using `pop()` or `remove()` is good practice instead of `del`. Same goes for using `append()` and `extend()` instead of concatenation
- the enumerate() function lets you enumerate through a sequence type getting the position and object for each iteration, syntax: `for pos, token in enumerate(tokens):`
- built-in list methods like max(), min(), and sum() return explanatory values. all(list) and any(list) can be used to return whether all or any values in a list are truthy (same as JavaScript except None is falsy instead of undefined)
- putting a list inside another list is called list nesting, which uses normal nested list syntax, my_list\[0]\[0]
- slicing has the same semantics for most sequence-type objects
- when trying to modify list elements in an enumerate for loop or other loop, you must use index notation to modify an element's value, cannot do `num = my_new_num` where num is the enumerating value
- when removing or appending items to a list while iterating through it can mess up for loops to access the wrong index given the changes made. The easiest way to iterate over the same list without worrying about changes to the list mid iteration is iterate over a copy of the list still modifying the original
- Python supports creating new lists based on an existing list with a convenient list construction syntax known as list comprehension, syntax: `new_list = [expression for loop_variable_name in iterable]` Ex.`[(i + 5) for i in my_list]`
- List comprehension really good at doing simple list refactors and can replace some simple for loops. List comprehension creates a new list object and cannot be used to modify an existing loop like done with typical loops
- list comprehension can be extended with `if condition` clause to only return certain elements, syntax `new_list = [expression for name in iterable if condition]`
- Python has a helpful `.sort()` method which performs an in-pace sort of list elements (lowest to highest) based on numbers' values, strings' ASCII values, and nested lists' element-by-element. the `sorted()` method takes in a list and returns a new list sorted.
- sort and sorted take an optional key arguments which let's you perform an operation on each element before comparing the values (modification not returned in the list) ie. `key=str.lower` to make sure that values all using lowercase so 'Banana' comes after 'apple'
- sort and sorted also support a reverse argument which can be included with `reverse=True`
- python command line arguments are stored in sys.argv where the first element (index 0) is the name of the program executable. Ex. For a command line of `python myprog.py myfile1.txt`, argv has the contents `['myprog.py', 'myfile1.txt']`.
- When a program uses command-line arguments, a good practice is to always check the length or argv and make sure the user entered the correct number of arguments. Then if not it is best practice to print a usage method showing an example of the correct command-line argument format (using print()), EX. `Usage: python myprog.py name age`
- command line arguments can become complicated for large programs with many options, there exists many modules for argument parsing strategies including [argparse](http://docs.python.org/3/library/argparse.html#module-argparse) and [getopt](http://docs.python.org/3/library/getopt.html)
- The dict type in python implements dictionaries (key-value pairs), which maintain their insetion order. Dictionaries have dictionary comprehension similar to lists, but the people behind zyBooks are scared of me reaching my full potential and putting them all out of their job (it is not covered in the book). The basic syntax of dict comprehension is: `{key: value for item in iterable}` they seem more complex, an example finding the even values in an ASCII dictionary called numbers: `{key: value for key, value in numbers.items() if value % 2 == 0}`
- dicts can also be made using the dict() built-in function with key-value pairs ie. `John="Likes Lasagna", "Bob="Likes Pizza"` or tuple pairs ie. `[('John', 'Likes Lasagna'), ('Bob', 'Likes Pizza')]`
- In normal practice a programmer creates a dictionary and then adds entries
- dictionaries in python have methods which can perform useful operations like adding elements, removing elements, merging dicts, and more. `my_dict.clear()` clears all items, , `my_dict.update(my_dict2)` merges a secondary my_dict2 to my_dict overwritting any existing entries and adding non-existant entries, and `my_dict.get(key, default)` and `my_dict.pop(key, default)` get and pop entries with a default value returned
- Using useful dict methods `items()`, `keys()`, and `values()` produces a view object, which provides a read-only access to dictionary keys and values. A view object reflects any updates of the dictionary.
    - dict.items() – returns a view object that yields (key, value) tuples.
    - dict.keys() – returns a view object that yields dictionary keys.
    - dict.values() – returns a view object that yields dictionary values.
- view objects, (specifically the comonly used one created from `.items()` which containes tuple pairs) can be converted to a list with the `list()` method where you can use bracket notation and list methods on your dict entries. this list stops reflecting changes to the dict
- dictionaries can be nested to create a simple but powerful type of data-structure, including multiple levels of nesting
- Objects are higher-level groupings of lower-level variables and functions
- abstraction is when a user interacts with an object at a high level while keeping lower-level internal details hidden
- objects support abstraction by hiding groups of functions and variables while only exposing others to a user
- An abstract data type (ADT) is a data type whose creation and update are constrained to specific well-defined operations. A class can be used to implement an ADT.
- python uses `class ClassName:` to define a class, with indentation ofc, which create a user-defined type of object containing groups of related variables and functions. Good practice is to use initial capitalization for each word in a class name
- objects normally contain def `__init__(self):` method to instantiate an object
- An instantiation operation (defining a new object of a class) is done by "calling" the class, using parentheses like a function call
- An instantiation operation automatically calls the `__init__` method
- A method is a function defined within a class
- attributes of a class can be accessed with `.` notation (dot notation)
- always include `self` as the first parameter in a method
- special methods in python (like `__init__`) can be identified by the double underscores before and after an identifier (ie. the word `init`).
- classes support class attributes which are defined like variables inside the class. These are shared among all instances of that class. instance methods are functions that are class attributes. You can change class attributes on the class in a program
- instance attributes are defined on `self` using dot notation and apply to a unique instance
- both class attributes and instance attributes can be accessed on an instance using dot notation
- Good practice is to avoid name collisions between class and instance attributes
- A class interface consists of the methods that a programmer calls to create, modify, or access a class instance.
- When a programer creates a method for internal use inside a function (ie. only in class attribute functions), then it best best to prepend the class name with a single underscore so the class can be regognized as for internal use
- A class can be used to implement a concept known as an abstract data type (ADT), whose creation and update are confined to the class interface)
- A well-desgined class seperates its interface from its implementation. Seperating the interface and implementation allows for updating the implementation without requiring programs that use the class to be rewritten.
- python supports class customizations like the **str**(self) method which specifies how the program prints a default string for the class instance.
- class customizations can also change the function of comparisonof two class instances with less than equal,greater than, etc. these methods are lt (less than), le (less than or equal),  gt (greater than), ge (greater than or equal), eq (equal), ne (not equal). These follow a syntax of `__eq__(self, other)`.
- class customization can also change many more class operations like mod, attribute access, container emulation, type conversion, and more to lookup when needed
- isinstance() function can be used to check whether an object is the provided type (built in type like str or tuple or class like Time24 is the second argument)
- most common operator overloads are add, sub, mul, truediv, floordiv, mod, pow, and, or, abs, int, and float (int and float are for their conversion methods, abs is for the abs() function)
- memory allocation is the process of an application requesting and being granted memory
- python handles all memory allocation (asks and gets memory from the OS), the Python runtime allocates memory for lists and other objects as neccessay
- garbage collections is the process of memory deallocation (done by the Python runtime) which happens when a an object is no longer references/has a reference count of 0. When an object is no longer referenced Python’s garbage collector will deallocate it, also the time it takes to do so varies across different Python runtime implementations
- Python has inheritance in the form of derived classes, syntax:

```python
class Item:
    def __init__(self):
        self.name = ''
        self.quantity = 0
        
class Produce(Item):  # Derived from Item
    def __init__(self):
        Item.__init__(self)  # Call base class constructor
        self.expiration = ''
```

- derived classes inherit all class attributes from their base class
- In python all attributes are public which differs from languages like Java with a private keyword
- A class can be derived from multiple classes, ie. `class House(Dwelling, Property)`
- searching for class attributes goes up the inheritance tree starting at the derived class ending at the final base class.
- Adding a derived class doesn’t require changing a base class
- a method from the base class can be overridden by putting it in the derived class, this works becasue the tree works up and will see the derived class’ method first.
- To extend a method in python you can explicity call `BaseClass.my_method(self)` , then add any additional functionality
- Composition is different than but sometimes confused with inheritance. Composition is the idea that one object may be made of other objects, ie. a Mouth class contains a list of Teeth objects

### Composition

```python
class Child:
    def __init__(self):
        self.name = ''
        self.birthdate = ''
        self.schoolname = ''
    # ...

class Mother:
    def __init__(self):
        self.name = ''
        self.birthdate = ''
        self.spouse_name = ''
        self.children = []
    # ...
```

### Inheritance

```python
class Person:
    def __init__(self):
        self.name = ''
        self.birthdate = ''
    # ...

class Child(Person):
    def __init__(self):
        Person.__init__(self)
        self.schoolname = ''
    # ...

class Mother(Person):
    def __init__(self):
        Person.__init__(self)
        self.spousename = ''
        self.children = []
    # ...
```

- Inheritance is an “is-a” relationship, composition is a “has-a” relationship
- multiple inheritance is a concept where a class can inherit more than one base class. The derived class inherits all of the class attributes and methods of every base class. this is done in Python by specifying multiple base classes like: `class VampireBat(WingedAnimal, Mammal):`
- It is common to use multiple inheritance with **Mixin** classes.
- Mixins are classes that provide additional behavior, like FlyingMixin would add flying methods to a TransportVehicle like FlyingCar. Mixins are not meant to be instantiated

### Mixins

```python
class DrivingMixin:
    def drive(self, distance):
        # ...
    def change_tire(self):
        # ...
    def check_oil(self):
        # ...
        
class FlyingMixin:
    def fly(self, distance, altitude):
        # ...
    def roll(self):
        # ...
    def eject(self):
        # ...
        
class TransportMode:
    def __init__(self, name, speed):
        self.name = name
        self.speed = speed

    def display(self):
        print(f'{self.name} can go {self.speed} mph')

class SemiTruck(TransportMode, DrivingMixin):
    def __init__(self, name, speed, cargo):
        TransportMode.__init__(self, name, speed)
        self.cargo = cargo

    def go(self, distance):
        self.drive(distance)
        # ...

class FlyingCar(TransportMode, FlyingMixin, DrivingMixin):
    def __init__(self, name, speed, max_altitude):
        TransportMode.__init__(self, name, speed)
        self.max_altitude = max_altitude

    def go(self, distance):
        self.fly(distance / 2, self.max_altitude)
        # ...
        self.drive(distance / 2)

s = SemiTruck('MacTruck', 85, 'Frozen beans')
f = FlyingCar('Jetson35K', 325, 15000)
s.go(100)
f.go(100)
```

- **Test suite** - A set of repeatable tests that run after changing the source code of a program
- **Unit testing** - tests of individual components of a program, such as specific methods, classes, interfaces, or data structures.
- The Python standard library has a **`unittest`** module which implements unit testing functionality

### Unit testing with unittest module

```python
import unittest

# User-defined class
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def compute_area(self):
        return 3.14 * self.radius**2

# Class to test Circle
class TestCircle(unittest.TestCase):
    def test_compute_area(self):
        c = Circle(0)
        self.assertEqual(c.compute_area(), 0.0)

        c = Circle(5)
        self.assertEqual(c.compute_area(), 78.5)

    def test_will_fail(self):
        c = Circle(5)
        self.assertLess(c.compute_area(), 0)

if __name__ == "__main__":
    unittest.main()
```

```powershell
.F
======================================================================
FAIL: test_will_fail (__main__.TestCircle)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "area.py", line 23, in test_will_fail
    self.assertLess(c.compute_area(), 0)
AssertionError: 78.5 not less than 0

----------------------------------------------------------------------
Ran 2 tests in 0.000s

FAILED (failures=1)
```

- The above example implements a unit test for Circle.compute_area() method using the unittest module. TestCircle inherits unittest.TestCase. Methods within TestCircle that begin with “test_” are the unit tests to be run. a unit test performs **assertions** to check if a computer value meets certain requirements. There are many assertion functions that can be looked up at “https://docs.python.org/3/library/unittest.html#test-cases” which will help you assert if your test passes. If the assertion made does not pass an AssertionError will be raised. after all tests have completed, a report is automatically printed.
- Successful unit test might look like:

```powershell
..
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
```

- Python uses `try:` and `except:` to handle exceptions, like ValueError
- Common exception types to handle are: EOFError, KeyError, ZeroDivisionError, ValueError, and IndexError
- exception type can be specified after the word except before the colon to only except certain errors, ie. `except ValueError:` . you can use a tuple to except multiple types of errors in a single except block like: `except (ValueError, TypeError):`
- multiple except blocks can be used in a row to handle multiples types of exceptions. You are able to finish with an `except:` statement to catch any unspecified errors like an if-elif-else block, but it is best practice not to avoid the use of a catchall except clause
- Use of raise “Error” can help keep the flow of the code readable while an except block at the end handles the raised Error. This can also reduce redundant checking, along with the major improvement of better readability. When doing this use the most closely related error to raise.
- raise statements with an Error support adding a message to the error which can be used in the except block with the `as` keyword, which brings a name to the exception being handled.

`raise ValueError('Invalid weight.')`
`except ValueError as excpt`

- raising errors can be used within functions, where the handling is performed by the code that calls the function, this can help improve flow and readability inside a function. With this approach the function is immediately exited and there is no need for a try block within the function as the caller of the function has the responsibility for error handling
- A key goal of exception handling is to avoid polluting normal code with distracting error-handling code.
- after a try-except block, a Python programmer may choose to use a finally statement which will always execute to clean-up actions. Finally clauses can be very helpful
- The finally clause will always execute, if an unhandled exception occurs, then the finally clause executes and the exception is re-raised. If the try block is exited in any way the finally clause executes
- A programmer can raise a built-in error, or a custom exception type like LessThanZeroError (custom Errors should end with “Error”). To raise a custom Error a programmer must be define the Error as a class. This is typically done by inheriting the Exception type and specifying an `__init__` method:

```python
# Define a custom exception type
class LessThanZeroError(Exception):
    def __init__(self, value):
        self.value = value

my_num = int(input('Enter number: '))

if my_num < 0:
    raise LessThanZeroError('my_num must be greater than 0')
else:
    print(f'my_num: {my_num}')
```

- A python file is called a script, scripts can be imported as a module using an import statement. To import a module means to execute all the code contained by the module and make the definitions within that module available to the importing program.
- To import a module use `import file_name` , where the file name is the name of the script, not containing.py, and is case sensitive. A good practice is to place all import statements at the top of a file
- when a module is imported it is stored in **sys.modules** and all statements within the module’s code are executed and definitions (like functions and variables) are placed in the module’s namespace
- The order of events when a module is imported: sys.modules checks for my_module, Module object created, my_module added to sys.modules, my_module code executed, my_module added to importer’s namespace
- Definitions in an imported module are accessed using the `ModuleName.my_attribute`. Definitions can even be temporarily changed like so,`ModuleName.my_attribute = "New String!"` . These changes are temporary while the program is executing, they do not change the module for future use.
- it is important that module names don’t conflict with built-in modules pre-installed with Python. You can also specify PYTHONPATH at control panel or cmd prompt where you can load python modules from
- you can import only specific names from a module using `from module_name import name1, name2, ...` . importing this way adds the variable/definition into the importing module’s namespace, meaning that accessing it doesn’t use the module name followed by dot notation.
- To specify actions to be performed in a file if it is used as a script instead of a file, you can use:

```python
if __name__ == "__main__":
    # File executed as a script
```

- **name** is a global string variable automatically added to every module, the value of **name** for executing scripts is always set to “__main__”, so this if statement will only run if the program is being ran as a script and not when it is being imported.
- modules can be reloaded in place using the reload() function (which requires `from importlib import reload`) . The reload function modifies the module in-place as well as return the module. You can check if `os.path.getmtime(my_module.__file__)` is greater than the time the module was first imported (which is got after import statement with the `os.path.getmtime(my_module.__file__)`call). Modules imported with from cannot be reloaded.
- A pacakage is a directory that when imported, gives access to all of the modules stored within it. Large projects are often organized using packages to group related modules.
- packages must contain a `__init__.py` file which has all the import statements for modules and sub-packages within.

### Package Directory Structure

```
draw_scene.py            Script that imports ASCIIArt package
ASCIIArt\                     Top-level package
        __init__.py
        canvas.py
        figures\              Subpackage for figures art
               __init__.py
               man.py
               cow.py
               ...
        buildings\            Subpackage for buildings art
               __init__.py
               barn.py
               house.py
               ...
```

- A statement like `import ASCIIArt` imports the whole package, including any sub-pacakges, into the importing script. you could also use a statement like `import ASCIIArt.canvas` . With one of these two apporachs the full name of the module needs to be specified when using a reference within (ie. `ASCIIArt.canvas.draw_canvas()`). To import only a specific sub-package. You can also use a statement like `from ASCIIArt.figures import cow` to add cow to the global namespace. this can go further to only import a specific reference as well `from ASCIIArt.figures.cow import draw`.
- By default, Python includes a collection of modules known as the Python standard library. These include datetime, random, copy, time, math, os, sys, pdb, urllib, unittest, as well as many more.
- python has a file library built-in for opening and closing files with `open(my_file_name)` and `my_file.close()`. You can use methods read, readlines, and readline on file to read the whole file to a string, each line to a list, or 1 line (respectively). `file_name.read(num_bytes)` can be used to read a specified number of bytes from a file. `open(my_file_name)` supports a mode of r, w, and a, which stand for read, write, and append. This mode is defaulted to r. Wtih ‘w’ or ‘a’, a file will be created if it does not exist. With default mode ‘r’ an Error will be thrown if the file does not exist. Using mode ‘w’ will overwrite the file. If a programmer wishes to read and write to the file then adding ‘+’ to ‘r’, ‘w’, or ‘a’ (as in ‘w+’) will make this possible
- The open method supports a `buffering=num_bytes` optional argument to specify how often to write to the file
- Python’s OS module is critical for navigating file systems
- `with open(‘myfile.txt’, ‘r’) as myfile:` will automatically close the file at the end of the block and is recommended
- recursive functions can be hard to debug, a step for debuging is adding an `indent` argument to the function and then printing what the function is doing with a level of indentation for each level of recursion withing the program.

### Recursion Examples

```python
def compute_nth_fib(num):
	if num <= 1:
		return num
	else:
		return compute_nth_fib(num -1) + compute_nth_fib(num -2)	
```

```python
def gcd(n1, n2):
    if n1 == n2:   # Base case
        return n1
    elif n1 < n2:  # Recursive case
      return gcd(n1, n2 - n1)
    else:
      return gcd(n1 - n2, n2)
```

```python
def raise_to_power(base_val, exponent_val):
	if exponent_val == 0:
		result_val = 1
	else:
		result_val = base_val * raise_to_power(base_val, exponent_val - 1)
	return result_val
```

- Recursion is a powerful tool for exploring all possibilities. This includes all possible reorderings of a word’s letters, all items in a list, all subsets of items, all paths between cities, etc.
- Linear search requires approximately N comparisons
- binary sort takes at most log2 (N) + 1 to find an element in a list of N items. Binary search. Binary search is the fastest search algorithm on a sorted list
- Big O  notation is a mathematical way of describing how a function (runtime of an algorithm) behaves in relation to the input size. It is based on the highest order term of N, the growth rate. Functions with the same growth rate are considered equivalent in Big O. The constant preceding N in the highest term is dropped just leaving the N part (ie. log N or N^2)(this drops logarithm bases as well)
- selection sort has O(N^2), merge sort has O(N log N)
- algorithm analysis often focuses on finding worst-case runtime. sometimes best-case runtime is found but it is  less useful and rarer to see.
- composite functions which do include constants are sometimes used, which can then be simplified to big O notation. common summation of consecutive numbers can be simplified to the highest N term
- python has `sort()` and `sorted()` built-in, but it is still important to understand sorting algorithm’s for other languages, thinking algorithmically , and job interviews.

### Selection sort - O(N^2)

```python
def selection_sort(numbers):
    for i in range(len(numbers) - 1):
        # Find index of smallest remaining element
        index_smallest = i
        for j in range(i + 1, len(numbers)):
            if numbers[j] < numbers[index_smallest]:
                index_smallest = j

        # Swap numbers[i] and numbers[index_smallest]
        temp = numbers[i]
        numbers[i] = numbers[index_smallest]
        numbers[index_smallest] = temp
```

- Selection sort involves one nested loop where the smallest element is found after looking in through the whole list then put to the front. Then the list starting at 1 is searched for the 2nd smallest element, then the list starting at index 2, etc. It is easy to code but ineffiecient
- Big O - O(N^2).

### Insertion Sort - O(N^2)

```python
def insertion_sort(numbers):
    for i in range(1, len(numbers)):
        j = i
        # Insert numbers[i] into sorted part
        # stopping once numbers[i] in correct position
        while j > 0 and numbers[j] < numbers[j - 1]:
            # Swap numbers[j] and numbers[j - 1]
            temp = numbers[j]
            numbers[j] = numbers[j - 1]
            numbers[j - 1] = temp
            j = j - 1

```

- insertion sort moves to the right comparing each element to it’s left neighbor, and then switches it to the left until it is in the correct order. It keeps moving the the right where the left most part is sorted, it then **inserts** new elements into their correct gap between two elements.
- Insertion sort is good for mostly-sorted data, but is slowly than other sorting algorithms. The idea behind insertion sort is used faster in other algorithms
- in-place sorting algorithm, requires little space.
- Big O - O(N^2)

### Quicksort - O(N log N)

```python
def partition(numbers, i, k):
    #  Pick middle element as pivot
    midpoint = i + (k - i) // 2
    pivot = numbers[midpoint]

    #  Initialize variables
    done = False
    l = i
    h = k
    while not done:
        #  Increment l while numbers[l] < pivot
        while numbers[l] < pivot:
            l = l + 1
        #  Decrement h while pivot < numbers[h]
        while pivot < numbers[h]:
            h = h - 1
        """  If there are zero or one items remaining,
              all numbers are partitioned. Return h """
        if l >= h:
            done = True
        else:
            """  Swap numbers[l] and numbers[h],
                  update l and h """
            temp = numbers[l]
            numbers[l] = numbers[h]
            numbers[h] = temp
            l = l + 1
            h = h - 1
    return h

def quicksort(numbers, i, k):
    j = 0
    """  Base case: If there are one or zero entries to sort,
          partition is already sorted  """
    if i >= k:
        return
    """  Partition the data within the array. Value j returned
          from partitioning is location of last item in low partition. """
    j = partition(numbers, i, k)
    """  Recursively sort low partition (i to j) and
          high partition (j + 1 to k) """
    quicksort(numbers, i, j)
    quicksort(numbers, j + 1, k)
    return

```

- Quicksort takes a list and then uses a midpoint and a pivot value. The pivot is the element at the midpoint index. It compares all elements less than the pivot value to the low partition and the rest to the high partition. Then it repeats the process making smaller partitions until each partition contains at most one element and all the partitions are sorted. Then the partitions are put together to form the sorted list.
- The pivot gets placed in either the high or low partition depending values of h and l and how they line up against each other
- quicksort uses a pivot and then creates partitions around that pivot. It sorts the elements to the correct side of the pivot and then repeats the algorithm with sub-partition.
- Typically implemented as a recursive algorithm using calls to quicksort the low and high partitions. This process continues until a partition has one or zero elements, and thus is already sorted.
- requires log2 N partitioning levels
- Big O - O(N log N)

### Merge Sort - O(N log N)

```python
def merge(numbers, i, j, k):
    merged_size = k - i + 1   #  Size of merged partition
    merged_numbers = []        #  Temporary list for merged numbers
    for l in range(merged_size):
        merged_numbers.append(0)

    merge_pos = 0      #  Position to insert merged number

    left_pos = i       #  Initialize left partition position
    right_pos = j + 1  #  Initialize right partition position

    #  Add smallest element from left or right partition to merged numbers
    while left_pos <= j and right_pos <= k:
        if numbers[left_pos] < numbers[right_pos]:
            merged_numbers[merge_pos] = numbers[left_pos]
            left_pos = left_pos + 1
        else:
            merged_numbers[merge_pos] = numbers[right_pos]
            right_pos = right_pos + 1
        merge_pos = merge_pos + 1

    #  If left partition is not empty, add remaining elements to merged numbers
    while left_pos <= j:
        merged_numbers[merge_pos] = numbers[left_pos]
        left_pos = left_pos + 1
        merge_pos = merge_pos + 1

    #  If right partition is not empty, add remaining elements to merged numbers
    while right_pos <= k:
        merged_numbers[merge_pos] = numbers[right_pos]
        right_pos = right_pos + 1
        merge_pos = merge_pos + 1

    #  Copy merge number back to numbers
    merge_pos = 0
    while merge_pos < merged_size:
        numbers[i + merge_pos] = merged_numbers[merge_pos]
        merge_pos = merge_pos + 1

def merge_sort(numbers, i, k):
    j = 0
    if i < k:
        j = (i + k) // 2  #  Find the midpoint in the partition

        #  Recursively sort left and right partitions
        merge_sort(numbers, i, j)
        merge_sort(numbers, j + 1, k)

        #  Merge left and right partition in sorted order
        merge(numbers, i, j, k)
```

- merge sort splits a list into sub lists, and keeps splitting further until it each sub list is two or fewer elements. It will sort those lists, then it will merge them into the “parent” list by comparing the next left to the next right elements, adding whichever one is the smallest. it keeps doing this until the sub-lists get bigger, continuing to add them back to their “parent” list in order now. eventually with enough steps the elements will be put pack in order to the full list.
- requires O(N) additional memory elements for the temporary array of merged elements
- requires log2 N partitioning levels
- Big O - O(N log N)
- A string formatting expression allows a programmer to create a string with placeholders that are replaced by the values of variables. The placeholders used here are called conversion specifiers, which specify the type to format into the string. Type is automatically converted to the specifier. For example, if a `%d` conversion specifier is used to ass a float value of `5.5`, the number will be truncated and added as ‘5’. The syntax for this is `print('The couch is %d years old.' % couch_age)` . The print ‘%’ in a string formatting expression you must use %% (like `{{}}`).
- Conversion specifiers include, %d, %f, %s, (%x or %X), and (%e or %E). These specify an integer, float, string, lowercase hexadecimal, hexadecimal (lowercase or uppercase), and floating-point exponential format (with a lowercase or capital E) respectively.
- When their are two conversion specifiers they are bundled in a tuple in the order of the string, ie. `print('Savings after %d years is: %f' % (years, total_savings))`
- strings can also be formated using the `format()` method with arguments for the replacement values that will be placed at locations of ‘`{}`’ in the string. Inside the ‘`{}`’ parts of the string you can include the argument number, name, or nothing to go in order of arguments automatically. ie.  ‘`{0}`’ for `format(my_str)`, ‘`{name}`’ for `format(name=my_name)`, or ‘`{}`’ for `format(_mystr)`. “`{{}}`” used to put “`{}`” in a string. probably the best use of format is to create a template string where you can format using a tuple of values.
- inside of the brackets in format you can use format chars after `:` like s, d, b, x, e, f, .2f, and 03d to specify the formatting.
- You can also format strings using a dictionary and conversion specifiers with mapping keys, 
`'time: %(hour)d:%(min)02d:%(sec)f' % {'hour':11, 'min':2, 'sec':15.002}` which outputs “time: 11:02:15.002000”. This approach replaces using tuples where you could mess up the order of replacement fields.
- [TKinter](https://docs.python.org/3/library/tkinter.html) is s standard Python package for graphical application, it uses a Frame window object to display graphical objects like so:

```python
import tkinter as tk

class Application(tk.Frame):
   def __init__(self, master=None):
       super().__init__(master)
       self.master = master

       self.master.title('An Empty Frame') # Set the frame's title
       self.pack()

app_frame = tk.Tk()

app_frame.geometry('400x250')   # Set the frame's width (400) and height (250) in pixels

app = Application(master=app_frame)   # Make the frame visible to the user
app.mainloop()   #infinite loop to run the gui
```

- With TKinter you can create a Canvas object to draw with `Canvas` objects . The coordinate system in TKinter has 0, 0 at the top left corner.

```python
import tkinter as tk
from tkinter import Canvas, Frame, BOTH

class Application(tk.Frame):
   def __init__(self, master=None):
       super().__init__(master)
       self.master = master
       self.pack(fill=BOTH, expand=1)

       canvas = Canvas(self)
       # Write your drawing instructions

app_frame = tk.Tk()
app_frame.geometry('400x250')
app = Application(master=app_frame)
app.mainloop()
```

- You can use the `crete_rectangle()` method on your canvas with arguments x0, y0, (the top left corner of the rectangle) and x1, y1, (bottom right corner coordinates). you can also specify `fill=` and `outline=` with color names as strings to add color to your  drawing. for example, `canvas.create_ractangle(5, 5, 205, 205, *fill*="blue", *outline*="purple")` creates a blue rectangle with purple outline that is 200x200 starting 5 units from the lop left corner