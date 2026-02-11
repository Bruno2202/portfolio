export function getAge(): number {
	const birthDateStr = '22/02/2005';

	const [day, month, year] = birthDateStr.split('/').map(Number);

	const birthDate = new Date(year, month - 1, day);

	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();

	const monthDiff = today.getMonth() - birthDate.getMonth();
	const dayDiff = today.getDate() - birthDate.getDate();

	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		age--;
	}

	return age;
}
