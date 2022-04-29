export const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCESS': {
      const {
        data: { comments }
      } = action
      const newState = {
        ...state,
        messages: comments
      }
      return newState
    }
    case 'ADD_NEW_MESSAGE': {
      const {
        data: { body, user }
      } = action

      const newArrayMessage = [
        ...state.messages,
        {
          body,
          user,
          id: state.messages
        }
      ]

      const newState = {
        ...state,
        messages: newArrayMessage
      }
      return newState
    }
    default: {
      return state
    }
  }
}
