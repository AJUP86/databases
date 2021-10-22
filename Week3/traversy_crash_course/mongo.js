db.posts.insertMany([
  {
    title: "Post two",
    body: "Body of post two",
    category: "Technology",
    date: Date(),
  },
  {
    title: "Post three",
    body: "Body of post three",
    category: "News",
    date: Date(),
  },
  {
    title: "Post Four",
    body: "Body of post Four",
    category: "Entertainment",
    date: Date(),
  },
]);

db.posts.update(
  { title: "Post One" },
  {
    $set: {
      comments: [
        { user: "Mary Williams", body: "Comment One", date: Date() },
        { user: "Harry White", body: "Comment two", date: Date() },
      ],
    },
  }
);
db.posts.find({
  comments: {
    $elemMatch: {
      user: "Mary Williams",
    },
  },
});
db.posts.createIndex({ title: "text" });

db.posts.find({
  $text: {
    $search: '"Post O"',
  },
});
db.posts.update({ title: "Post two" }, { $set: { views: 10 } });

db.posts.find({ views: { $gt: 3 } });
