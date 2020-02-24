import { ADD_NAME_DESCRIPTION, OPEN_POPUP, SWITCH_TAB,CLOSE_POPUP } from "../constants/action-types";
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';

const initialState = {
  applicationInfo: [{ imageSrc: image2, showPopup: false, name: "", description: "" },
  { imageSrc: image2, showPopup: false, name: "", description: "" }, { imageSrc: image3, showPopup: false, name: "", description: "" }, { imageSrc: image4, showPopup: false, name: "", description: "" }, { imageSrc: image5, showPopup: false, name: "", description: "" }, { imageSrc: image6, showPopup: false, name: "", description: "" }, { imageSrc: image8, showPopup: false, name: "", description: "" }, { imageSrc: image8, showPopup: false, name: "", description: "" }, { imageSrc: image9, showPopup: false, name: "", description: "" }, { imageSrc: image10, showPopup: false, name: "", description: "" }, { imageSrc: image2, showPopup: false, name: "", description: "" }, { imageSrc: image6, showPopup: false, name: "", description: "" }],
  activeTab: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_NAME_DESCRIPTION) {
    let id = action.payload.image.id;
    let nameValue = action.payload.image.name;
    let descriptionValue = action.payload.image.description;
    let obj = {};
    let applicationInfo = [...state.applicationInfo.slice(0, id), { ...state.applicationInfo[id], name: nameValue, description: descriptionValue }, ...state.applicationInfo.slice(id + 1)]
    obj.applicationInfo = applicationInfo;
    return Object.assign({}, state, obj);
  }

  if (action.type === OPEN_POPUP) {
    let id = action.payload;
    let value = false
    if (!state.activeTab) {
      value = true;
    }
    let obj = {};
    let applicationInfo = [...state.applicationInfo.slice(0, id), { ...state.applicationInfo[id], showPopup: value }, ...state.applicationInfo.slice(id + 1)]
    obj.applicationInfo = applicationInfo;
    return Object.assign({}, state, obj);
  }

  if (action.type === CLOSE_POPUP) {
    let id = action.payload;
    let value = false;
    let obj = {};
    let applicationInfo = [...state.applicationInfo.slice(0, id), { ...state.applicationInfo[id], showPopup: value }, ...state.applicationInfo.slice(id + 1)]
    obj.applicationInfo = applicationInfo;
    return Object.assign({}, state, obj);
  }

  if (action.type === SWITCH_TAB) {
    let obj = {};
    obj.activeTab = action.payload;
    return Object.assign({}, state, obj);
  }

  return state;
}

export default rootReducer;