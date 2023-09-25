---
date: 2023-09-25 14:00
professor: Filippo Bergamasco
---

# GEOMETRIC AND 3D COMPUTER VISION

[[toc]]

## Syllabus

- Tensor: it is a generalization of a vector. It is a multidimensional array.

## Python

:::tip
We can use google colab to run python code.
:::

### Array vs List

List: Sequence of elements, can be of different types.
Array: Sequence of elements, all of the same type.

:::tip
Python has no array data type. That is why we need **Numpy**. Pytorch and Tensorflow are based on Numpy (we will use Numpy).
:::

### Numpy

Package that provide the ndarray data object representing a multidimensional array

#### Array Creation

```python
import numpy as np
shape=(8,3) # (2 dimensions) 8 rows, 3 columns
a = np.zeros(shape)

# some properties and methods
print(np.ndarray.shape.__doc__)
```

:::tip
Numpy can store
:::

- Order: row-major (C-style) or column-major (Fortran-style)
- a.stride: tuple of bytes to step in each dimension when traversing an array. In other words the size of the array in each dimension.

:::tip
There as operations that can be performed just modifying the stride.
i.e. Transpose a matrix without moving the data.
:::
:::tip
Every time a make an operation I am reating a new View. The data is not copied and are stiil the same!
:::

### Transpose

```python
B = A.T # B contains a view of A. The data is not copied. The reference is the same.
```

### How to create an array

I can create an array from any iterable.

```python
# fill from a list
a = np.array([1,2,3,4,5,6,7,8,9,10,11,12])
# fill with zeros
A = np.zeroes((2,4), dtype=float32)
# fill with ones
A = np.ones((2,4), dtype=float32)
# 
A = np.diag([1,3,3,5])
A = np.range(5, 20, 2, dtype.float32)
```

### Indexing and slicing

:::tip
**:** select all
**::n** select all and step by **n**.
ie A[:, ::2] selects all rows and step by 2 in the columns.

It uses the strides to give back the new view.
:::

### Fancy and boolean indexing

## Vectoring expressions and broadcasting

:::tip
This topic is very important
:::

A (3,7,9)
B (7,9) -> (1,7,9)

Yes. these two are broadcastable
