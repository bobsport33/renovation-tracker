import { colors } from "@/styles/variables";
import React from "react";
import styled from "styled-components";

const ModalCont = styled.div`
    padding: 20px;
    border-radius: 45px;
    background-color: ${colors.neutral200};
    box-shadow: 2px 4px 8px ${colors.neutral1000};
`;

interface ModalProps {
    children: React.ReactNode;
    className: string;
}

const Modal = ({ children, className }: ModalProps) => {
    return <ModalCont className={className}>{children}</ModalCont>;
};

export default Modal;
