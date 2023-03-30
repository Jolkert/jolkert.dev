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

// TODO: this currently doesnt reset on page switch. figure that one out lol
let currentIndex = 4; // defaults to trans
let prideElement;

function randomizePride()
{
	prideElement = document.getElementById('pride');

	let newIndex = currentIndex;
	while (newIndex === currentIndex)
		newIndex = Math.trunc((Math.random() * (flags.length - 1)));
		
	currentIndex = newIndex;

	const colors = flags[newIndex];
	for (let i = 0; i < 6; i++)
	{
		if (i < colors.length)
		{
			document.documentElement.style.setProperty(`--pride-${i}`, `#${colors[i]}`);
			prideElement.children[i].style.setProperty('display', 'block');
		}
		else
			prideElement.children[i].style.setProperty('display', 'none');
	}	
}