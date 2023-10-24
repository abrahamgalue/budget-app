// rrd imports
import { redirect } from "react-router-dom";

// Library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: 'userName'
  })

  toast.success('You\'ve deleted your account!')

  // return redirect
  return redirect('/')
}