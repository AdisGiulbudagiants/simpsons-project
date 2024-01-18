import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Flip, ToastContainer, toast } from 'react-toastify'
import { selectErrorMessage, clearError } from '../../redux/slices/errorSlice'
import 'react-toastify/dist/ReactToastify.css'

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer position="top-right" transition={Flip} newestOnTop autoClose={2000} />
}

export default Error
