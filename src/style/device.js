export const sizes = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopM: 1280,
	laptopL: 1440,
	desktop: 2560,
};

export const deviceSizes = {
	mobileS: `${sizes.mobileS}px`,
	mobileM: `${sizes.mobileM}px`,
	mobileL: `${sizes.mobileL}px`,
	tablet: `${sizes.tablet}px`,
	laptop: `${sizes.laptop}px`,
	laptopM: `${sizes.laptopM}px`,
	laptopL: `${sizes.laptopL}px`,
	desktop: `${sizes.desktop}px`,
};

export const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
	laptopM: `only screen and (max-width: ${deviceSizes.laptopM})`,
	laptopL: `only screen and (max-width: ${deviceSizes.laptopL})`,
	desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
	desktopL: `only screen and (max-width: ${deviceSizes.desktop})`,
};
