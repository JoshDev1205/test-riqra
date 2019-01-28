import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_COMMENT = gql`
  mutation($content: String!){
    createComment(content: $content) {
      id
      content
    }
  }
`
const GETALLCOMMENTS = gql`
  {
    getAllComments {
      id
      content
    }
  }
` 
class AddComment extends Component {
  state = {
    content: ''
  }

  render () {
    const { content } = this.state
    return (
      <div className="flex flex-wrap">
        <div className="w-full py-4 px-6">
          <textarea
          className="w-full h-24"
          value={content}
          placeholder="ingresa tu comentario"
          onChange={e => this.setState({ content: e.target.value })}
          ></textarea>
        </div>
        <div className="w-full py-4 px-6 flex justify-end">
          <Mutation 
            mutation={CREATE_COMMENT}
            onCompleted={() => this.setState({ content: ''})}
            variables={{ content }}
            update={(store, { data: { createComment }}) => {
              const data = store.readQuery({ query: GETALLCOMMENTS })
              data.getAllComments.push(createComment)
              store.writeQuery({
                query: GETALLCOMMENTS,
                data
              })
            }}
            >
            {createComment => 
              <button onClick={createComment} className="bg-blue text-white text-sm uppercase py-2 px-4 rounded-lg shadow-lg font-bold">
                Enviar comentario
              </button>}
          </Mutation>
        </div>
      </div>
    )
  }
}

export default AddComment
