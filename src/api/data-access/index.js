const ExampleModel = require('../model/example.model');

async function findMany(query, projection, options) {
  try {
    const examples = await ExampleModel.find();
    return examples;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = {findMany};
