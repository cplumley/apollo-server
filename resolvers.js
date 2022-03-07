const resolvers = {
  Query: {
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async links(root, args, { models }) {
      return models.Link.findAll();
    },
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug: slug || Math.random().toString(20).slice(2),
      });
    },
  },
};

module.exports = resolvers;
