import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  selectedBusiness: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedBusiness: action.business.selectedBusiness
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedBusiness: null
      };
    default:
      return state;
  }
}
