/**
 * This function checks the user roles.
 *
 * @category Services
 * @param {Collection<String, Role>} guildRoles Collection of all roles in this Server.
 * @param {Array<String>} rolId ID of rol through which the name of the role will be obtained.
 * @returns {String} Name or name collection of all roles that the user has.
 */
export function checkUserRol(guildRoles: Array<String | Object | any>, rolId: Array<String>): String {
  let allUserRoles: Array<String> = []
  if (rolId.length === 0) return "This user does not have any role assigned."

  rolId.forEach((role) => {
    guildRoles.forEach((guildRole) => {
      guildRole.id === role && allUserRoles.push(guildRole.name)
    })
  })
  return allUserRoles.join(",\r\n")
}
