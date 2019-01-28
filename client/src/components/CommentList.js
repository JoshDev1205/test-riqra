import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CommentContent from './CommentContent';
import DeleteComment from './DeleteComment';

const GETALLCOMMENTS = gql`
  {
    getAllComments {
      id
      content
    }
  }
` 

class CommentList extends Component {
_updateCacheAfterDelete = (store, deleteComment, id) => {
  const data = store.readQuery({ query: GETALLCOMMENTS })
  const index = data.getAllComments.map(comment => comment.id ).indexOf(id)
  data.getAllComments.splice(index, 1)
  store.writeQuery({ query: GETALLCOMMENTS, data})
}
render() {
 return (
   <Query query={GETALLCOMMENTS}>
  {({data: { getAllComments = []} = {}, error, loading}) => {
    if (error) return 'Error'
    if (loading) return 'Cargando comentarios'

    return (
      <div className="flex flex-wrap">
        { 
          getAllComments.map(comment => (
          <div className="w-full py-4 px-6 flex justify-between" key={comment.id}>
            <CommentContent content={comment.content}/>
            <DeleteComment id={comment.id} updateStoreAfterDelete={this._updateCacheAfterDelete}/>
          </div>
        ))
        }
      </div>
    )
  }}
 </Query>
 )
}
}

export default CommentList
