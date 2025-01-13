import { AnimatePresence, motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import styles from './style.module.css'

import Header from '../../components/header';
import Footer from '../../components/footer';
import Topic from '../../components/cards/topic';
import Projects from '../../components/cards/projects';
import Contact from '../../components/contact';

export default function Home() {

	const viewportOptions = isMobile ? { once: true, amount: 0.1 } : { once: true, amount: 0.5 };

	return (
		<div id="container" className={styles.container}>
			<AnimatePresence>
				<>
					<Header />
					<div id="home" className={styles.home}>
						<div className={styles.salutation}>
							<motion.div
								className={styles.title}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.4,
									ease: "easeOut",
									duration: 1
								}}
							>
								<div className={styles.title_saluation}>
									<p className={styles.title_saluation_text}>Olá, meu nome é</p>
									<p className={styles.space}>&nbsp;</p>
									<p className={styles.title_saluation_contrast}>Bruno</p>
								</div >
								<motion.div
									className={styles.title}
									initial={{ opacity: 0, y: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										ease: "easeOut",
										delay: 1
									}}
								>
									<p className={styles.title_description}>Web & Mobile developer</p>
								</motion.div>
							</motion.div>
						</div>
						<div
							id="about"
							className={styles.about_container}
						>
							<motion.div
								className={styles.about}
								viewport={viewportOptions}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									ease: "easeInOut",
									duration: 0.6
								}}
							>
								<div className={styles.about_me}>
									<Topic
										title={"Sobre mim"}
										text={
											<>
												Meu nome é Bruno Terribile, tenho 19 anos e sou desenvolvedor Full Stack.
												<br /><br />Apaixonado por tecnologia e desenvolvimento, utilizo meus conhecimentos na área para criar aplicações web com diversos propósitos.
												<br /><br />Tenho experiência trabalhando com <strong>HTML, CSS, JavaScript, Typescript, MySQL, PostgreSQL, React, React Native, NodeJS, Git</strong> e <strong>Firebase</strong>.
												<br /><br />Estou sempre ansioso em aprender mais como desenvolver projetos incríveis e aprimorar meus conhecimentos na área.
											</>
										}

									>
										<img alt="Bruno" className={styles.about_pic_mobile} src={require('../../assets/img/Bruno.png')} />
									</Topic>
								</div>
								<img alt="Bruno" className={styles.about_pic} src={require('../../assets/img/Bruno.png')} />
							</motion.div>
						</div>
						<div
							id="projects"
							className={styles.projects_container}
						>
							<motion.div
								className={styles.projects_view}
								viewport={viewportOptions}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									ease: "easeInOut",
									duration: 0.5
								}}
							>
								<p className={styles.title_topic}>Meus projetos</p>
								<div className={styles.projects}>
									<Projects
										img={require('../../assets/img/projects/Sandbox.png')}
										name={"Sandbox"}
										description={"Minha rede social"}
										detailDescription={{
											text: "Rede social desenvolvida para dispositivos móveis, com suporte a autenticação via OAuth, e-mail e senha. Os usuários podem compartilhar textos e imagens na plataforma.",
											imgPreview: require('../../assets/img/projects/Sandbox.png'),
											viewMore: "https://github.com/Bruno2202/sandbox",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/Portfolio.png')}
										name={"Portfólio"}
										description={"Meu portfólio web"}
										detailDescription={{
											text: "Meu portfólio web: nele, você pode conhecer um pouco mais sobre mim e explorar os projetos que já desenvolvi.",
											imgPreview: require('../../assets/img/projects/Portfolio.png'),
											viewMore: "https://github.com/Bruno2202/portfolio",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/Notes.png')}
										name={"Notes"}
										description={"Aplicativo de bloco de notas"}
										detailDescription={{
											text: "Aplicativo móvel que permite ao usuário salvar suas anotações, desenvolvido para fins de estudo do React Native.",
											imgPreview: require('../../assets/img/projects/Notes.png'),
											viewMore: "https://github.com/Bruno2202/notes",
										}}
									/>
									<Projects
										img={require('../../assets/img/projects/Notes-api.png')}
										name={"Notes API"}
										description={"API do Notes"}
										detailDescription={{
											text: "Esta é a API do Notes, uma aplicação para gerenciar sua anotações. Ela fornece métodos de criação, visualização, atualização e exclusão de anotações, entre outras funcionalidades.",
											imgPreview: require('../../assets/img/projects/Notes-api.png'),
											viewMore: "https://github.com/Bruno2202/notes-api",
										}}
									/>
								</div>
							</motion.div>
						</div>
						<motion.div
							id="contact"
							className={styles.letsWork}
							viewport={viewportOptions}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								ease: "easeInOut",
								duration: 0.8
							}}
						>
							<p className={styles.letsWork_text}>Quer criar algo?</p>
							<p className={styles.letsWork_title}>Vamos desenvolver juntos!</p>
							<div className={styles.letsWork_contact}>
								<Contact />
							</div>
						</motion.div>
						<Footer />
					</div>
					<div className={styles.background_image} />
				</>
			</AnimatePresence >
		</div >
	)
}
