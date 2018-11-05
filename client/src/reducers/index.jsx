import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import signup from "./reducer_signup"
import create_account from "./reducer_create_account"
import payment from "./reducer_payment"
import live from "./reducer_live"

const rootReducer = combineReducers({
  signup: signup,
  create_account: create_account,
  payment: payment,
  live: live
})

export default rootReducer
