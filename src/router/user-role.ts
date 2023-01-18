import { RouteLocation } from "vue-router";

const haveUserRole = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userRole = localStorage.getItem('UserRole');
    if(userRole) {
        next();
    } else {
        alert('Usuario no registrado')
        next({name: "home"});
    }
}

export default haveUserRole;