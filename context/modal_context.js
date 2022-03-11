import React, {useContext, useEffect, useState} from "react";


const ModalContext = React.createContext()


export const ModalProvider = ({children}) => {
    const [isModal, setIsModal] = useState(false)
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        if (isModal) {
            document.body.style.overflow = 'hidden'
        } else if (!isModal) {
            document.body.style.overflow = 'auto'
        }
    }, [isModal])


    function modalHandler(imageSrc) {

        setIsModal(true)
        setImageSrc(imageSrc)
    }


    return (
        <ModalContext.Provider value={{
            isModal,
            setIsModal,
            modalHandler,
            imageSrc
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)