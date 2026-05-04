## Getting started

1. Create reat-ts project.

```
npm create vite@latest
```

2. Folder structure:

![Folder structure](./images/folder_struct.png)\

3. Creating interface for accepting fields of a certain type

```
export function Card({name, price, isSpecial=false} : CardProps) {}
```

4. useState()

```
const [count, setCount] = useState<number>(0)
```


### NOTES

# 1. .d.ts 

Type declarations files: 
Hints
Errors