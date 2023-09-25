
const autorizationKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExM2Y4ZDM3NTJhODAwMTQ1Njg3NjgiLCJpYXQiOjE2OTU2MjkxOTcsImV4cCI6MTY5NjgzODc5N30.cjS2lj2dGpKXZOkcOfOspnAB7GUlpm7GWoWWw3TSpuc"
const GET_PROFILE = "GET_PROFILE";



export const myProfilePage = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {headers {autorizationKey}})

}