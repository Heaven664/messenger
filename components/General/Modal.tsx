import React, { useEffect, useRef } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import styles from "@/components/General/Modal.module.scss";

type ModalProps = {
  header: string;
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const ModalCustom: React.FC<ModalProps> = ({ header, children, onClose, isOpen }) => {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if clicked on outside of element
    const handleClickOutside = (event: MouseEvent) => {
      if (modalContainerRef.current && !modalContainerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div ref={modalContainerRef} className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <p>{header}</p>
              <div className={styles.modalCloseContainer} onClick={onClose}>
                <CloseIcon fontSize="inherit" />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCustom;
