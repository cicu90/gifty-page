export function saveUserData(id, token) {
  window.localStorage.setItem("userData", JSON.stringify({"id": id, "token": token}));
}