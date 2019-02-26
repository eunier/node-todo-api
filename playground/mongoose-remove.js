const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove
// Todo.findByIdAndRemove
//
//
// Todo.findOneAndRemove({_id :'5c71c2b2a146f30f9fadc5ed'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c71c2b2a146f30f9fadc5ed').then((todo) => {
  console.log(todo);
});
