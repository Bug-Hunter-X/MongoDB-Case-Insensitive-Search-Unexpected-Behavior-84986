```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will return documents where the 'name' field contains 'John', 'john', 'JOHN', etc.
const result = await collection.find(query).toArray();
```