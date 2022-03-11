import React, {useContext, useEffect, useState} from "react";


const ModalContext = React.createContext()


export const ModalProvider = ({children}) => {
    const [isModal, setIsModal] = useState(true)

    useEffect(() => {
        if (isModal) {
            document.body.style.overflow = 'hidden'
        } else if (!isModal) {
            document.body.style.overflow = 'auto'
        }
    }, [isModal])


    return (
        <ModalContext.Provider value={{
            isModal,
            setIsModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)