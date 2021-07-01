import React from "react";
import MuiModal, { ModalProps as MuiModalProps } from "@material-ui/core/Modal";

export interface ModalProps extends MuiModalProps {}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return <MuiModal {...props} />;
};

export default Modal;
