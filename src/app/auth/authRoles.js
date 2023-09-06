/**
 * Authorization Roles
 */
const authRoles = {
  //admin: ['admin', 'superadmin'],
  //staff: ['admin', 'staff'],
 // user: ['admin', 'staff', 'user'],
  //onlyGuest: [],
  estadistica : [ 'appsf', 'dashboards','logout','divider-1'],
  contenido : ['appsf','dashboards', 'clientsMetrics', 'competenciaReports', 'logout','divider-1'],
  datos:['appsf','uploads','dashboards', 'logout', 'divider-1'],
  usuario:[ 'appsf','clientsMetrics', 'competenciaReports', 'prizes', 'points','stocks','logout', 'divider-1'],

};

export default authRoles;
