const REGISTER = (user) =>{
  return{
    type:"REGISTER",
    payload:user
  }
}

const LOGIN = (user) =>{
  return{
    type:"LOGIN",
    payload:user
  }
}

const LOGOUT = (user) =>{
  return{
    type:"LOGOUT",
    payload:user
  }
}
