const employee = {
    name: "Justin",
    streetAddress: "13 Jomoko",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "Tom",
    "20 Makongeni",
);
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
    newEmployee[key] = value;
    return newEmployee;
}
const updatedNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    newEmployee,
    "Tom",
    "20 Makongeni",
);
function deleteFromEmployeeByKey(employee, key){
    const deleteEmpleoyee = {...employee};
    delete deleteEmpleoyee[key];
    return deleteEmpleoyee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}