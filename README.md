# is-empty-typed

Simple JS library that checks if value is an empty object, collection, string. It also narrows types with typescript

# Installation

`npm i is-empty-typed --save`

# Examples

Objects are considered empty if they have no own enumerable string keyed properties.

```typescript
import isEmpty from 'is-empty-typed';

isEmpty({}) // true
isEmpty({name: 'John'}) // false
```

Array-like values such as arrays are considered empty if their length equals 0

```typescript
import isEmpty from 'is-empty-typed';

isEmpty([]) // true
isEmpty([1,2,3]) // false
```

Strings are considered empty if their length equals 0 or if they consist of just whitespaces

```typescript
import isEmpty from 'is-empty-typed';

isEmpty('John') // false
isEmpty(' ') // true
isEmpty('') // true
```

0, NaN, undefined, null are also considered empty.

```typescript
import isEmpty from 'is-empty-typed';

isEmpty(undefined) // true
isEmpty(null) // true
isEmpty(NaN) // true
```

It also supports Type Guards that allow you to narrow down the type of an object within a conditional block.

```typescript
import isEmpty from 'is-empty-typed';

function checkArray(items: any[] | null | undefined) {
  if (!isEmpty(items)) {
    items.map((item) => item); // Narrowed to 'any[]'. No compiler issues
  }
}

function checkObject(obj: { name } | null | undefined) {
  if (!isEmpty(obj)) {
    console.log(obj.name) // Narrowed to '{ name }'. No compiler issues
  }
}

function checkString(str: string | null | undefined) {
  if (!isEmpty(str)) {
    console.log(str.length); // Narrowed to 'string'. No compiler issues
  }
}

function checkNumber(value: number | null | undefined) {
  if (!isEmpty(value)) {
    console.log(value++); // Narrowed to 'number'. No compiler issues
  }
}
```
