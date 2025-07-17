import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../../../types/Project';
import { SquareArrowOutUpRight, X } from 'lucide-react';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { ProjectContext } from '../../../contexts/ProjectContext';
import { HeaderContext } from '../../../contexts/HeaderContext';
import Button from '../../Button';

interface DetailProps {
    project: Project | null;
}

export default function Detail({ project }: DetailProps) {
    const { closeModal, isOpenModal } = useContext(ModalContext)!;
    const { setProject } = useContext(ProjectContext)!;
    const { setIsOpenHeader } = useContext(HeaderContext)!;

    function closeDetail() {
        document.body.style.overflow = 'auto';
        setIsOpenHeader(true);
        closeModal("Detail");
        setProject(null);
    }

    return (
        <AnimatePresence>
            {isOpenModal("Detail") && (
                <motion.div
                    onClick={() => closeDetail()}
                    className="flex items-center justify-center fixed h-screen w-screen z-20 p-4"
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                >
                    <motion.div
                        className='flex flex-col bg-black rounded-2xl w-full md:w-1/3 h-auto z-10'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className='flex w-full justify-end p-4'>
                            <X
                                className='cursor-pointer transition-colors hover:text-red-500'
                                onClick={() => closeDetail()}
                                size={28}
                            />
                        </span>
                        <div className='flex flex-col items-center px-8 pb-8 h-full'>
                            <div className='flex flex-col flex-1 text-left'>
                                <p className="font-sfpro-bold text-4xl">{project?.name}</p>
                                <p className="text-sm font-sfpro-bold text-lightPurple mb-8">{project?.description}</p>
                                <p className='mb-8 overflow-auto'>{project?.text}</p>
                                <div className='flex items-center justify-center'>
                                    <img
                                        className="w-full md:w-3/4 h-auto object-contain rounded-2xl mb-8"
                                        draggable={false}
                                        src={project?.img}
                                        alt={project?.name}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <Button
                                    icon={SquareArrowOutUpRight}
                                    onClick={() => window.open(project?.github)}
                                    text='Saiba mais'
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
}
