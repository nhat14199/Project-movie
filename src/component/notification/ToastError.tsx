// ToastError.tsx
import React, { memo } from "react";
import { toast } from "react-toastify";

export const ToastError = ({ errorMessage }: { errorMessage: string }) => {
  toast.error(errorMessage);
  return null;
};

export default memo(ToastError);
