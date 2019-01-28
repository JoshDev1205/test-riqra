import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const DELETE_COMMENT = gql`
  mutation($id: ID!) {
    deleteComment(id: $id)
  }
` 

const DeleteComment = ({ id, updateStoreAfterDelete }) => {
  return (
    <Mutation 
      mutation={DELETE_COMMENT}
      variables={{ id }}
      update={(store, { data: { deleteComment }} ) => {
        updateStoreAfterDelete(store, deleteComment, id)
      }}
      >
    {deleteComment => (
      <button onClick={deleteComment} className="bg-red text-white text-sm uppercase py-2 px-4 rounded-lg shadow-lg font-bold">
        Eliminar
      </button>
    )}
    </Mutation>
  );
}

export default DeleteComment;
