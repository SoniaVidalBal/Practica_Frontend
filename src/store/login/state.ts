import { User } from "@/models/users"

export interface IUserState {
   users: User[],
   isLoading: boolean;
   //email: string,
   //password: string,
   //token: 

}

function state(): IUserState {
   return {
      users: [],
      isLoading: false,
      //email: "",
      //password: "",
      //token:
   }
}

export default state;