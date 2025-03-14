const AKKey = "ACCESS-TOKEN";

const getAK = () => {
	return window.localStorage.getItem(AKKey);
};

const setAK = (ak) => {
	return window.localStorage.setItem(AKKey, ak);
};

const rmAK = () => {
	window.localStorage.removeItem(AKKey);
};
export { getAK, setAK, rmAK };
