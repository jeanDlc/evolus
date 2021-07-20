//roles permitidos para requests
const permissions = {
  client: {
    rolesToGetAll: [1, 2, 3],
    rolesToGetOne: [1, 2, 3],
    rolesToPost: [1, 2],
    rolesToDelete: [1, 2],
    rolesToUpdate: [1, 2],
  },
  employee: {
    rolesToGetAll: [1, 2, 3],
    rolesToGetOne: [1, 2, 3, 4],
    rolesToPost: [1],
    rolesToDelete: [1],
    rolesToUpdate: [1],
  },
  project: {
    rolesToGetAll: [1, 2, 3, 4],
    rolesToGetOne: [1, 2, 3, 4],
    rolesToPost: [1, 2],
    rolesToDelete: [1, 2],
    rolesToUpdate: [1, 2],
    rolesToAddEmployeesTo: [1, 3],
  },
  task: {
    rolesToGetAll: [1, 2, 3, 4],
    rolesToGetOne: [1, 2, 3, 4],
    rolesToPost: [1, 3],
    rolesToDelete: [1],
    rolesToUpdate: [1],
    rolesToUpdateState: [1, 3, 4],
  },
};
export default permissions;
