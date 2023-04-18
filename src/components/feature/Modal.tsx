import { motion } from 'framer-motion'
import { FC } from 'react'

import { createPortal } from 'react-dom'
import usePortal from '../../hooks/usePortal'

const Modal: FC = ({ children }) => {
    const portal = usePortal()
    return portal
        ? createPortal(
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-zinc-700 bg-opacity-50"
              >
                  {children}
              </motion.div>,
              portal
          )
        : null
}

export default Modal
