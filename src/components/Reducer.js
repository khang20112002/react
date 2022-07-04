export const initialState = {
    count: 100
};
export const Recuder = (state = initState, action) => {
    switch (action, type) {
        case "INCRE":
            return{
                count: state.count+1
            }
            break;
        case "DECRE":
            return {
                count: state.count-1
            }
        default:
            return state;
    }
};