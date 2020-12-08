/**
 * This function print the user permissions.
 *
 * @category Services
 * @param {Array<String>} permissions Collection of all permissions from the user.
 * @returns {String} Name or name collection of all permissions that the user has.
 */
export let checkUserPermission = (permissions: Array<String>): String => permissions.join(",\r\n").toLowerCase();
