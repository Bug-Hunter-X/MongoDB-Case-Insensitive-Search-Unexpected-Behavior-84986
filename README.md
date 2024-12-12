# MongoDB Case-Insensitive Search Unexpected Behavior
This repository demonstrates a potential issue with case-insensitive searches in MongoDB using regular expressions.  Improper handling of case-insensitive queries can lead to performance bottlenecks or unexpected results.

The `bug.js` file shows an example of a case-insensitive query that may behave unexpectedly depending on the data. The `bugSolution.js` file shows improved ways to handle such queries.