# 1. Variables and Data Types:

name = "Barry"  # String
age = 25        # Integer
height = 5.9    # Float
is_student = True  # Boolean


# 2. Print Output:

print("Hello, World!")  # Output: Hello, World!
print(f"My name is {name} and I am {age} years old.")  # Using f-strings


# 3. Taking Input:

name = input("What is your name? ")
print(f"Hello, {name}!")


# 4. Conditionals:

age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")


# 5. Loops:

#For loops:
for i in range(5): # Loops from 0 to 4
    print("Iteration:", i)

#While Loops:
count = 0 
while count < 3: 
    print(f"Count is: {count}")
       count += 1


# 6. Functions (with parameters): 
def greet(name):
    return f"Hello, {name}!"

print(greet("Barry")) # Output: Hello, Barry!


# 7. Lists(Arrays):
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple

fruits.append("orange")  # Add an element
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']


# 8. Dictionaries(Key-Value-Pairs):
person = {"name": "Barry", "age": 25}
print(person["name"])  # Output: Barry

person["age"] = 26  # Update value


# 9. Loops with lists:

numbers = [1,2,3,4]
for num in numbers:
    print(num)  #Prints each number

# 10. Simple Logic

number = 4
if number % 2 == 0:
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")