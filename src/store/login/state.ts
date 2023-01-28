

export interface IUsersState {
   token: string | null
}

function state(): IUsersState {
  return {   
      token: null
   }
}

export default state;