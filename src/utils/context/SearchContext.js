import {createContext, useReducer} from 'react';

export const SearchContext = createContext(null);
export const SearchDispatchContext = createContext(null);

export const SearchProvider = ({children}) => {
    const [searchOpen, dispatch] = useReducer(searchReducer, false)

    return (
        <SearchContext.Provider value={searchOpen}>
            <SearchDispatchContext.Provider value={dispatch}>
                {children}
            </SearchDispatchContext.Provider>
        </SearchContext.Provider>
    )
}

const searchReducer = (searchOpen, action) => {
    switch (action.type) {
        case 'open':
            return true
        case 'close':
            return false
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}