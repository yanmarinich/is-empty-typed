# isempty

Simple JS library that checks if value is an empty object, collection, string.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arrays, strings are considered empty if their length equals 0

0, undefined, null are also considered empty.

It also supports Type Guards that allow you to narrow down the type of an object within a conditional block.

# Installation

`npm i yan.isempty --save`
