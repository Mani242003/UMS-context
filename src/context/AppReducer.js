const reducer=(state,action)=>{

    switch (action.type) {

        case "ADD_USER":
            return{
                users:[...state.users,action.user]
            }  

        case "DELETE_USER":
            const tempUsers=state.users.filter((user)=>{
                return user.id !== action.id;
            })
            return {
                users:tempUsers
            }


    
        default:
            return state;

}
}
export default reducer;