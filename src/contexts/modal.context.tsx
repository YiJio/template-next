// packages
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

interface ModalContextType {
	openModal: (modalContent: React.ReactNode) => void;
	closeModal: () => void;
	modalProps: ModalProps;
}

const ModalContext = createContext<ModalContextType | null | undefined>(undefined);

export function useModal(): ModalContextType {
	const context = useContext(ModalContext);
	if (context === undefined || context === null) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
}

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);

	const openModal = (content: React.ReactNode) => {
		setModalContent(content);
		setIsOpen(true);
	}

	const closeModal = () => {
		setModalContent(null);
		setIsOpen(false);
	}

	const modalProps = { isOpen, onClose: closeModal, children: modalContent };

	return (
		<ModalContext.Provider value={{ openModal, closeModal, modalProps }}>
			{children}
			<ModalPortal />
		</ModalContext.Provider>
	);

}

const ModalPortal: React.FC = () => {
	const { modalProps } = useModal();
	//const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
			/*if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				modalProps.onClose();
			}*/
		}
		if(modalProps.isOpen) document.addEventListener('mousedown', handleOutsideClick);
		return () => { document.removeEventListener('mousedown', handleOutsideClick); }
	}, [modalProps.isOpen]);

	if (!modalProps.isOpen || !modalProps.children) return null;

	return (
		<dialog>
			<div /*ref={modalRef}*/>
				{modalProps.children}
			</div>
		</dialog>
	);
}