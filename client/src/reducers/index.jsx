import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import payment from "./reducer_payment"
import payment from "./reducer_payment"
import live from "./reducer_live"
import create_account from "./reducer_create_account"

const rootReducer = combineReducers({
  payment: payment,
  payment: payment,
  live: live,
  create_account: create_account
})

export default rootReducer
