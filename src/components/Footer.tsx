import { Github, Linkedin } from "lucide-react";

export default function Footer() {
	function getYear() {
		return new Date().getFullYear();
	}

	const iconClass = `
		cursor-pointer 
		text-grey 
		text-2xl 
		hover:scale-110 
		transition-all 
		duration-200
		hover:text-lightPurple
	`;

	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="flex flex-row items-center justify-center gap-5 w-full">
				<Github
					size={28}
					className={iconClass}
					onClick={() => window.open('https://github.com/Bruno2202')}
				/>
				<Linkedin
					size={28}
					className={iconClass}
					onClick={() => window.open('https://www.linkedin.com/in/bruno-terribile/')}
				/>
			</div>

			<div className="flex flex-col items-center justify-center opacity-50 w-full p-3 text-[0.7rem]">
				<p>© Bruno C. Terribile {getYear()}</p>
			</div>
		</div>
	);
}
