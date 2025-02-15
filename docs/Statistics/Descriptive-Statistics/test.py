import numpy as np
import time
a =  list(range(0,100000))
b = list(range(100000,200000))
c = []

start =  time.time()
for i in range(len(a)):
    c.append(a[i] + b[i])
end = time.time()

print(end-start)

