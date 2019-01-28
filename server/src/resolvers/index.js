module.exports = {
  Query: {
    getAllComments: async (parent, args, { Comment }) => {
      return await Comment.findAll({
        where: {
          published: 1
        }
      })
    }
  },
  Mutation: {
    createComment: async (parent, { content }, { Comment }) => {
      try {
        const comment = await Comment.create({
          content: content
        })
        return comment
      } catch (e) {
        console.log(e)
      }
    },
    deleteComment: async (parent, { id }, { Comment }) => {
      try {
        const comment = await Comment.update({
          published: 0
        }, { 
          where: {
            id: id
          } 
        })
        return true
      } catch (error) {
        console.log(error)
      }
    }
  }

}