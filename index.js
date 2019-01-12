const defaultConfig = {
	variable: 'eval',
};

const getStylesWithEval = variable => {
	const allStyles = [...document.styleSheets]
		.map(({ rules }) => rules)
		.reduce((cur, acc) => [...cur, ...acc], []);

	return allStyles.filter(
		s => s.style.getPropertyValue(`--${variable}`).length > 1
	);
};

const process = (stylesWithEval, variable) =>
	stylesWithEval.forEach(style => {
		try {
			const evalable = JSON.parse(
				style.style.getPropertyValue(`--${variable}`)
			);
			const fn = new Function([], evalable);
			[...document.querySelectorAll(style.selectorText)].forEach(el => {
				fn.bind(el)();
			});
		} catch (err) {
			console.error(err);
			console.error('Failed to parse CSS block:');
			console.error(style);
		}
	});

const init = userConfig => {
	const { variable } = { ...defaultConfig, ...userConfig };

	const stylesWithEval = getStylesWithEval(variable);
	process(stylesWithEval, variable);
};

export const runtime = {
	init,
};
