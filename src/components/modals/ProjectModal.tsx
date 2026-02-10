import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Star, Layout } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from '../ImageWithFallback';
import type { ProjectModel } from '../../core/models/ProjectModel';

interface ProjectModalProps {
	project: ProjectModel | null;
	isOpen: boolean;
	onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => { document.body.style.overflow = 'unset'; };
	}, [isOpen]);

	if (!project) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
					/>

					<div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ type: 'spring', damping: 25, stiffness: 350 }}
							className="bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.3)] max-w-5xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative scrollbar-hide"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={onClose}
								className="cursor-pointer absolute top-6 right-6 z-50 p-3 bg-black/40 hover:bg-white/10 backdrop-blur-xl rounded-full transition-all border border-white/10 group"
							>
								<X size={20} className="text-white group-hover:rotate-90 transition-transform" />
							</button>

							<div className="relative h-80 md:h-[450px] w-full">
								{project.image ? (
									<>
										<ImageWithFallback
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
										<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/20 via-transparent to-transparent" />
									</>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-indigo-950/40 to-purple-950/40 flex items-center justify-center">
										<Layout size={80} className="text-white/10" />
									</div>
								)}

								<div className="absolute bottom-8 left-8 flex gap-3">
									{project.featured && (
										<span className="bg-indigo-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/40 flex items-center gap-2">
											<Star size={12} fill="currentColor" /> Destaque
										</span>
									)}
									<span className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
										{project.year || '2024'}
									</span>
								</div>
							</div>

							<div className="px-8 md:px-16 pb-16 relative z-10">
								<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
									<div className="lg:col-span-7 space-y-8">
										<div>
											<h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none italic">
												{project.title}
											</h2>
											<p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
												{project.longDescription || project.description}
											</p>
										</div>

										{project.highlights && (
											<div className="space-y-4">
												<h3 className="text-indigo-400 font-bold text-xs uppercase tracking-[0.3em]">Key Features</h3>
												<div className="grid grid-cols-1 gap-3">
													{project && project.highlights.map((h, i) => (
														<motion.div
															key={i}
															initial={{ opacity: 0, x: -10 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: i * 0.1 }}
															className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl group hover:bg-white/[0.05] transition-colors"
														>
															<div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
															<span className="text-gray-300 text-sm font-medium">{h}</span>
														</motion.div>
													))}
												</div>
											</div>
										)}
									</div>

									<div className="lg:col-span-5 space-y-10">
										<div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 space-y-6">
											<div>
												<h3 className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Technologies</h3>
												<div className="flex flex-wrap gap-2">
													{project.tags.map((tag: any) => (
														<span key={tag} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-wider">
															{tag}
														</span>
													))}
												</div>
											</div>

											<div className="flex flex-col gap-3 pt-4">
												{project.demo && (
													<a href={project.demo} target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all group">
														Live Demo <ExternalLink size={16} />
													</a>
												)}
												<a href={project.github} target="_blank" className="flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
													Source Code <Github size={16} />
												</a>
											</div>
										</div>

										{project.team && (
											<div className="px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-transparent border-l-2 border-indigo-500 rounded-r-2xl">
												<h4 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Collaboration</h4>
												<p className="text-white font-medium italic">{project.team}</p>
											</div>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}