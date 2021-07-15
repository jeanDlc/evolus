const validatePassFields = (fields) => {
  const { pass, newPass, confirmNewPass } = fields;
  let errors = {};
  if (!pass || typeof pass !== "string" || pass.trim() === "") {
    errors.pass = "Ingresa un valor válido";
  }
  if (!newPass || typeof newPass !== "string" || newPass.trim() === "") {
    errors.newPass = "No válido";
  }
  if (
    !confirmNewPass ||
    typeof confirmNewPass !== "string" ||
    confirmNewPass.trim() === "" ||
    confirmNewPass !== newPass
  ) {
    errors.confirmNewPass = "Los valores no coinciden";
  }
  return errors;
};
export default validatePassFields;
