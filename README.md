# Innocent-Enums

This is a simple enum Object that allows you to easly do this:

```
const fileColumns = new Enumeration([ 'Index', 'FirstName', 'MiddleName', 'LastName' ])

console.log(`Get the index of the second column: ${fileColumns.FirstName}`);

console.log(`Get the name of the second column: ${fileColumns[1]}`);


````


COMING UP:

Doing this.

```javascript

const returnCodes = new Enumeration({
  'Ok': 200,
  'NotFound': 400,
  'Error': 500
  });

console.log(` enum value: ${returnCodes.Ok}`); // -> 200
console.log(` the key ${ returnCodes[ returnCodes.Ok ] }`); // -> 'Ok'
```
