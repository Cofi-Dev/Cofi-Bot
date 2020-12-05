/**
 * This function checks the user roles.
 *
 * @category Services
 * @param {Array} guildRoles Collection of all roles in this Server.
 * @param {String | Array} rolId ID of rol through which the name of the role will be obtained.
 * @returns {String} Name or name collection of all roles that the user has.
 */
export function checkUserRol(guildRoles: [], rolId: Array<String>): String {
  let allRoles: String[] = [];
  let allUserRoles = [];
  guildRoles.forEach((role) => (allRoles[role.id] = role.name));
  rolId.forEach((role) => {
    allUserRoles.push(allRoles[role]);
  });
  return allUserRoles.join("\r\n");
}
