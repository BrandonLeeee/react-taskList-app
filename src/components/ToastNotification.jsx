import { ToastContainer, toast } from "react-toastify";

const ToastNotification = () => {
  return <ToastContainer position="top-center" autoClose={1500} />;
};

export const showToast = (type, message) => {
  switch (type) {
    case "warn":
      toast.warn(message);
      break;
    case "info":
      toast.info(message);
      break;
  }
};

export default ToastNotification;
