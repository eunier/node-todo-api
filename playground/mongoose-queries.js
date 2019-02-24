const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// var id = '5c71c2b2a146f30f9fadc5ed';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => cosole.log(e));

var userID = '5c71d51b70491bd1f1e498e8';

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }

  console.log('User by id', user);
}).catch((e) => console.log(e));
