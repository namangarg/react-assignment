import { ADD_NAME_DESCRIPTION, OPEN_POPUP, SWITCH_TAB , CLOSE_POPUP} from "../constants/action-types";



export function addNameDescription(payload) {
    return { type: ADD_NAME_DESCRIPTION, payload };
}

export function openpopup(payload) {
    return { type: OPEN_POPUP, payload };
}

export function closepopup(payload) {
    return { type: CLOSE_POPUP, payload };
}

export function switchtab(payload) {
    return { type: SWITCH_TAB, payload };
}