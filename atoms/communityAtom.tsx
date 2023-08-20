

import {atom} from 'recoil';

// INTERFACE FOR OUR COMMUNITY MODAL!
export interface CommunityAtom {
    view: 'create';
    open: boolean
}


// DEFAULT STATE
const defaultState:CommunityAtom = {
    view: 'create',
    open: false,
}


// CREATING STORE ATOM WITH RECOIL
export const CommunityState = atom<CommunityAtom>({
    key: 'communityState123456786',
    default: defaultState
}) 

