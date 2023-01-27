import { User } from "@/models/users"

export interface IUserState {
   users: User[],
   //token: 

}

function state(): IUserState {
   return {
      users: [],
      //token:
   }
}

export default state;