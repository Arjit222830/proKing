import React, { useReducer } from 'react';
import _ from 'lodash';

export const Store = React.createContext();

const initialState = {
	mobileView: false,
	session: null,
	lands:null
};

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
	case "setMobileView":
		return {...state, mobileView: action.payload};
	case 'SET_SESSION':
		return { ...state, session: action.payload };
	case "fetchLands":
		return {...state, lands: _.mapKeys(action.payload,'_id')};
	case "fetchLand":
		return { ...state, lands: _.mapKeys(action.payload,'_id')};
	case "addLand":
		return {...state, lands:{...state.lands,[action.payload._id]: action.payload }};
	case "editLand":
		return { ...state, lands: {...state.lands,[action.payload._id]: action.payload}};
	case "deleteLand":
		return {...state, lands: _.omit(state.lands, action.payload)};
	default:
		return state;
	}
};

export function StoreProvider(props) {
	const [state, dispatch] = useReducer(globalReducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}