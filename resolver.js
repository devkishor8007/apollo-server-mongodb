const Todo = require("./model/todo-model");

const resolvers = {
  Query: {
    todos: async () => await Todo.find({}),
    todo: async (_, args) => await Todo.findById(args._id),
  },
  Mutation: {
    createTodo: async (_, args) =>
      Todo.create({
        title: args.input.title,
        desc: args.input.desc,
      }),

    deleteTodo: async (_, args) => {
      await Todo.findByIdAndDelete(args._id);
      return "delete";
    },
  },
};

module.exports = resolvers;
