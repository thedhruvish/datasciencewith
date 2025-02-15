---
title: Introduction of Numpy
sidebar_position: 1

description: Introduction into numpy library. what is use to the numpy library in the data science and machine learning.
keywords: [Statistics, mean, numpy,data-science,machine learning,math,functions]
slug: introduction-of-numpy

---

## What is Numpy ?

- **[Numpy](https://numpy.org)** is python library.
- It's work with **array**.
- Used for **numerical** and **scientific** computing.

### features of NumPy

- **N-dimensional** array
- In build **Mathematical functions**
- Broadcasting
- Performance Optimization

### Common use case of numpy

- `Data Analysis` and `Manipulation` -> cleaning, manipulating
- `Machine Learning` -> foundation of algorithms
- `scientifi computing` -> numerical simulations and calculations
- `Image Processing` -> manipulate image as multi-dimension Array

### Disadvantages to numpy

- all the element are the `same data type`.
- Once created, the total size of the array `can’t change`
- shape must be `rectangular`, not `jagged`

## How to Install numpy

1. open you `Command Prompt` or `terminal`
2. run this command

```bash
pip install numpy

# or

python -m pip install numpy
```

3. Your numpy was install.
4. if you use numpy than import numpy in below syntax

```python
import numpy as np
```

- in import numpy to import this library and as meaning assas

## How to Create a Numpy array

### np.array()

- Creates an array from python list,tuple or many array like objects

```py
arr = np.array([1,2,3,4]) 
```

### np.zeros

- this function are the create an array and Its all the element values are zero.

- In this function pass args is which type of array are the create like dimention of the array.

- this dimention are pass on the tuple .

```py
arr = np.zeros((3,4))
```

### np.ones

- ones function are same into zero. but this function are the create an array and Its all the element values are one.

```py
arr = np.zeros((3,4))
```

### np.empty

- This function are use to creata a array and all element values are empty(Contains uninitialized Values )

```py
arr = np.empty((2,2))
```

### np.arange

- Returns evenly spaced values within a specified interval.

```py
arr = np.arange(0,10,2)  
print(arr)  
# Output: [0, 2, 4, 6, 8]
```

### np.linspace

- Generates an array of evenly spaced numbers over a specified range.

```py
arr = np.linspace(0,10,2)  
print(arr)  
```

### np.random.rand()

- reates an array of random numbers uniformly distributed between 0 and 1.

```py
arr = np.random.rand(5)  
print(arr)  
```

## size & shape ,Reshape

### Size

- In Any Array are the give to how to find Total Number of Element to use `array.size`.

```py
arr = np.array([
    [1,2,3],[4,5,6]
])

print(arr.size) #output 6

```

### Shape

- find the number of dimensions in the Array use to shape

```py
arr = np.array([
    [1,2,3],[4,5,6]
])

print(arr.ndim)

```

### Reshape

- Any Give Array to change the dimension of Array to use the Reshape

```py
arr = np.array([1,2,3,4,5,6])

np.reshape(arr,shape=(2,3))
```

## Sort element

### sort function

- This function use to all the element are the sort in ascending order.
- If you are using multi-dimension array to specify the axis

```py
arr = np.array([1,3,2,6,3,6,3,7,4,5,6])
np.sort(arr)
```

## list vs python numpy

### List

``` py
import time

#python noraml list using 

a =  list(range(0,100000))
b = list(range(100000,200000))
c = []

start =  time.time()
for i in range(len(a)):
    c.append(a[i] + b[i])
end = time.time()

print(end-start)
```

### numpy

``` py
#numpy
import numpy as np
import time

a = np.arange(0,100000)
b = np.arange(100000,200000)

start = time.time()
c = a + b
end = time.time()
print(end-start)
```

## View code file

[![Open in Colab](https://datasciencewith.pages.dev/img/icon/colab.svg)](https://colab.research.google.com/)
