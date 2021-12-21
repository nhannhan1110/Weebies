export const hideTextIdCard = (idCard: string) => {
	const hideIdCard = idCard.replace(/(\d{4})(\d{9})(\d{3})/, '$1*********$3');
	return hideIdCard;
};
