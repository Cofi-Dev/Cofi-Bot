/**
 * This function checks the user permissions.
 *
 * @category Services
 * @param {Object} member Collection of all permissions in this Server.
 * @returns {String} Name or name collection of all permissions that the user has.
 */
export function checkUserPermission(permissions: any): String {
  return permissions.toArray().join(",\r\n").toLowerCase();
}
