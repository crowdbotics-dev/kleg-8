import axios from "axios"
const klegAPI = axios.create({
  baseURL: "https://kleg-8.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return klegAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return klegAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return klegAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vdd_list(payload) {
  return klegAPI.get(`/api/v1/vdd/`)
}
function api_v1_vdd_create(payload) {
  return klegAPI.post(`/api/v1/vdd/`, payload)
}
function api_v1_vdd_retrieve(payload) {
  return klegAPI.get(`/api/v1/vdd/${payload.id}/`)
}
function api_v1_vdd_update(payload) {
  return klegAPI.put(`/api/v1/vdd/${payload.id}/`, payload)
}
function api_v1_vdd_partial_update(payload) {
  return klegAPI.patch(`/api/v1/vdd/${payload.id}/`, payload)
}
function api_v1_vdd_destroy(payload) {
  return klegAPI.delete(`/api/v1/vdd/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return klegAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return klegAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return klegAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return klegAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return klegAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return klegAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return klegAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return klegAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return klegAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return klegAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return klegAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_vdd_list,
  api_v1_vdd_create,
  api_v1_vdd_retrieve,
  api_v1_vdd_update,
  api_v1_vdd_partial_update,
  api_v1_vdd_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
