// there's gotta be a better way about this but whatever

const flags = [
	['e50000', 'ff8d00', 'ffee00', '008121', '004cff', '760188'], // rainbow
	['d52d00', 'ff9a56', 'ffffff', 'd362a4', 'a30262'], // lesbian
	['078d70', '98e8c1', 'ffffff', '7bade2', '3d1a78'], // gay men (yall we *really* need a separate word for this lmao)
	['d60270', 'd60270', '9b4f96', '0038a8', '0038a8'], // bi
	['5bcffa', 'f5abb9', 'ffffff', 'f5abb9', '5bcffa'], // trans
	['000000', 'a3a3a3', 'ffffff', '800080'], // ace
	['3da542', 'a7d379', 'ffffff', 'a9a9a9', '000000'], // aro 
	['e28c00', 'eccd00', 'ffffff', '62aedc', '203856'], // aroace
	['ff218c', 'ffd800', '21b1ff'], // pan
	['fcf434', 'fcfcfc', '9c59d1', '2c2c2c'], // enby
	['ff76a4', 'ffffff', 'c011d7', '000000', '2f3cbe'] // genderfluid
];
const flagMap = {
	"rainbow": 0,
	"lesbian": 1,
	"gay_man": 2,
	"bi": 3,
	"trans": 4,
	"ace": 5,
	"aro": 6,
	"aroace": 7,
	"pan": 8,
	"enby": 9,
	"genderfluid": 10
};

let prideElements
let indexes;

function initPride()
{
	prideElements = document.getElementsByClassName('pride');
	indexes = [];
	for (let i = 0; i < prideElements.length; i++)
	{
		let element = prideElements[i];
		let initialFlag = element.getAttribute('initial-flag');
		let initialFlagIndex = initialFlag ? flagMap[initialFlag] : 4; // default to trans cause pog
	
		indexes.push(initialFlagIndex);
		setFlagColors(element, flags[initialFlagIndex]);
	}
}

function randomizePride()
{
	if (!prideElements)
		initPride();

	for (let i = 0; i < prideElements.length; i++)
	{
		let element = prideElements[i];

		let oldIndex = indexes[i];
		let newIndex = oldIndex;
		while (newIndex === oldIndex) 
			newIndex = Math.trunc((Math.random() * (flags.length - 1)));
		indexes[i] = newIndex;

		setFlagColors(element, flags[newIndex]);
	}
}

function setFlagColors(element, colors)
{
	for (let i = 0; i < element.children.length; i++)
	{
		if (i < colors.length)
		{
			document.documentElement.style.setProperty(`--pride-${i}`, `#${colors[i]}`);
			element.children[i].style.setProperty('display', 'block');
		}
		else
			element.children[i].style.setProperty('display', 'none')
	}
}