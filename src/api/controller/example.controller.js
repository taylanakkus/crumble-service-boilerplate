const {findMany} = require('../data-access/index');

module.exports = {
  list: async (req, res) => {
    try {
      const exampleList = await findMany();

      res.status(200).json(exampleList);
    } catch (error) {
      console.log(error);
    }
  }
};
