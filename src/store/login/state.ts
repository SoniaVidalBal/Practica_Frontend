import { User } from "@/models/users";


export interface IUsersState {
   token: string | null
   user: User | null
}

function state(): IUsersState {
  return {   
      token: null,
      user: null
   }
}

export default state;