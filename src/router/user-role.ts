import { RouteLocation } from "vue-router";

const haveUserRole = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userRole = localStorage.getItem('token');
    if(userRole) {
        next();
    } else {
        alert('Usuario no registrado')
        next({name: "home"});
    }
}

export default haveUserRole;