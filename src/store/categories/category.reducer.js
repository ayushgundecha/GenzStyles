export const INITIAL_CATEGORIES_STATE={
    categoriesMap:{}
}

export const categoriesReducer= (state=INITIAL_CATEGORIES_STATE,action) => {
    const {type, payload}=action;

    switch(type){
        case 'SET_CATEGORIES_MAP':
            return {...state, categoriesMap:payload};
            default:
                return state;

    }

}