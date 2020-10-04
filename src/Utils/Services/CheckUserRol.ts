import { User, RoleManager } from "discord.js";

/**
 * This function checks the user roles.
 *
 * @category Services
 * @param {User} user - User to check roles.
 * @returns {String} Formatted date.
 */
export function checkUserRol(user: User) {
    if (user) {
        return user.roles;
    } else {
        console.warn('User Invalid');
    }
}
