# Exercise 8

## Requirements

1. Create a new component named Car Edit Row. The Car Edit Row is similar to Car View Row except the columns for make, model, year, color and price are input fields. When the Car Edit Row is displayed, prepopulate the fields with the data of the car being edited. Do not make the Id an input field. In the last column, there should be two buttons: save and cancel. Do not implement the logic to do the save and cancel (that will be done in step 3), but display the buttons. The Car View Row is not a child component of the Car Edit Row. And, the Car Edit Row is not a child component of the Car View Row. Also, do not attempt to incorporate the `<form>` tag into the solution.

2. Add a button labeled Edit to the last column of the Car View Row component. When the button is clicked, the row on which it is clicked, changes to a Car Edit Row component. Only one row is editable at a time. Your data structure should only support editing one row at a time.

3. Implement save car and cancel car buttons. Be sure to perform your save operation with immutable programming techniques. When the cancel button is clicked, revert the changes back to the original.

Hint: To do the save, you can copy the array, next replace the item in the copy, then save the new array. A function such as `findIndex` can be used to find the index of an item.

4. If one of the table rows is being edited, the edit row should change to a view row after, a car is added, or a car is deleted, or a car is saved. Add or delete, the changes for the one being edited should not be saved.

5. Ensure it works!