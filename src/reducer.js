export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // remove after finished developing
    token: 'BQBMld44hTqnultncUgSfCv_kuTabFuuar56xwtweCA6jFgWJFB6z84mS3LoEpW3g50ZTg6p4n-5-7oT2rlgb4SephcajGhfe8n7C6G7ViFf5_Jl6Tka5EJP-un_qUab4-q2PtSNRgZahGhaLRmg-t_Nfp_eDEZw8P-c1HGKwGGF5XNTbtoRZNFxSV60vKvCbznRAnkBxRGaQaSnQXmJ',
};

const reducer = (state, action) => {
    console.log(action);
    console.log(state);
        switch(action.type) {
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                }
            
            case 'SET_USER':
                return {
                    ...state,
                    user: action.user,
                };
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                }
            default:
                return state;
        }


} 
export default reducer;