```javascript
// Option 1: Using $regex with case-insensitive flag
const query1 = { name: { $regex: 'John', $options: 'i' } };

// Option 2: Using lower case comparison for better performance
const query2 = { name: { $toLower: '$name' } }; 
const results2 = await collection.find( {name: {$eq: query2.name.toLowerCase() } } ).toArray();

//Choose option 1 or option 2 based on your requirement
//Option 1 is generally recommended
const result = await collection.find(query1).toArray();
```