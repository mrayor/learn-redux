import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {}
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts]
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === payload.id
            ? (contact = payload)
            : contact
        )
      };
    default:
      return state;
  }
}
