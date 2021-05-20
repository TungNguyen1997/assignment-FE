import { INIT_STATE } from "../../constant";
import { getPost, getType, hideModal, showModal } from "../action";
export default function modalReducer(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                showModal: true,
            }
        case getType(hideModal):
            return {
                showModal: false,
            }
        default:
            return state;
    }
}
