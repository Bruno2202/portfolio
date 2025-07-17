import { motion } from 'motion/react';
import type { Project } from '../../../types/Project';
import { useContext, useState } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { ProjectContext } from '../../../contexts/ProjectContext';
import { HeaderContext } from '../../../contexts/HeaderContext';

interface ProjectProps {
	project: Project;
}

export default function Project({ project }: ProjectProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { openModal } = useContext(ModalContext)!
	const { setProject } = useContext(ProjectContext)!
	const { setIsOpenHeader } = useContext(HeaderContext)!;

	function openDetail() {
		document.body.style.overflow = 'hidden';
		setIsOpenHeader(false);
		setProject(project);
		openModal("Detail");
		setIsOpen(!isOpen);
	}

	return (
		<motion.div
			className="text-center cursor-pointer"
			onClick={() => openDetail()}
			initial={{ y: 0 }}
			whileHover={{ y: -12 }}
			whileTap={{ scale: 0.9 }}
		>
			<img src={project.img} alt={project.name} className="mx-auto mb-4 md:max-w-68 rounded-2xl" draggable={false} />
			<p className="text-2xl font-sfpro-bold mb-2">{project.name}</p>
			<p className="text-gray-600">{project.description}</p>
		</motion.div>
	);
}
