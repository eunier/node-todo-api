// const MongoClient = require('mongodb').MongoClient;
// using object distruction
const {
  MongoClient,
  ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((results) => {
  //   console.log(results);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((results) => {
  //   console.log(results);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((results) => {
  //   console.log(results);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5c6f579a8639ef3f42125962")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  //client.close();
});