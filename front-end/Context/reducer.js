const reducer=(state,action)=>{
    
    switch(action.type){
        
    case 'signin':
        return{
            ...state,
            token:action.token
        }
        case 'getnewCompany':
            return{
                ...state,
                newcompany:action.newcompany

               
            }
            case 'getcompany':
            return{
                ...state,
                
            }
         
        default:
            return state
        }

    }
    export  default reducer;