walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	v = v.replace(/\bMillenial\b/g, "Impostor");
	v = v.replace(/\bmillenial\b/g, "impostor");
	v = v.replace(/\bAdult\b/g, "Crewmate");
	v = v.replace(/\badult\b/g, "crewmate");
	v = v.replace(/\bsenators\b/g, "Sith");
	v = v.replace(/\bSenators\b/g, "Sith");
	v = v.replace(/\bsenator\b/g, "Sith");
	v = v.replace(/\bSenator\b/g, "Darth");
	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\bRussian\b/g, "Soviet");
	v = v.replace(/\bRussia\b/g, "The MOTHERLAND");
	v = v.replace(/\bOlympics\b/g, "Hunger Games");
	v = v.replace(/\bOlympic\b/g, "Evil");
	v = v.replace(/\bgovernment\b/g, "Empire");
	v = v.replace(/\bgovernment\b/g, "Empire");
	v = v.replace(/\bPolitician\b/g, "Criminal");
	v = v.replace(/\bpolitician\b/g, "criminal");
	v = v.replace(/\bUkrainian\b/g, "Underdarkish");
	v = v.replace(/\bUkraine\b/g, "The Underdark");
	v = v.replace(/\bAmerica\b/g, "Antarctica");
	v = v.replace(/\bUnited\b/g, "Untied");
	v = v.replace(/\bStates\b/g, "Snakes");
	v = v.replace(/\bunited\b/g, "untied");
	v = v.replace(/\bstates\b/g, "snakes");
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bQuantum\b/g, "Phallic");
	v = v.replace(/\bquantum\b/g, "phallic");
	v = v.replace(/\bDonkey\b/g, "Big butt");
	v = v.replace(/\bdonkey\b/g, "big butt");
	v = v.replace(/\bsaid\b/g, "screamed");
	v = v.replace(/\bSaid\b/g, "Screamed");
	v = v.replace(/\bpeople\b/g, "Jedi");
	v = v.replace(/\bPeople\b/g, "Jedi");
	v = v.replace(/\bGuys\b/g, "Squirrels");
	v = v.replace(/\bguys\b/g, "squirrels");
	v = v.replace(/\bwater\b/g, "vodka");
	v = v.replace(/\bWater\b/g, "Vodka");
	v = v.replace(/\boil\b/g, "whiskey");
	v = v.replace(/\bOil\b/g, "Whiskey");
	v = v.replace(/\bball\b/g, "testicle");
	v = v.replace(/\bBall\b/g, "Testicle");
	v = v.replace(/\bCitizen\b/g, "Video gamer");
	v = v.replace(/\bcitizen\b/g, "video gamer");
	v = v.replace(/\bdog\b/g, "inferior life form");
	v = v.replace(/\bDog\b/g, "Inferior life form");
	v = v.replace(/\bkitten\b/g, "god");
	v = v.replace(/\bKitten\b/g, "God");
	v = v.replace(/\bbird\b/g, "birb");
	v = v.replace(/\bBird\b/g, "Birb");
	v = v.replace(/\bScientist\b/g, "Redditer");
	v = v.replace(/\bscientist\b/g, "Redditer");
	v = v.replace(/\brecent studies\b/g, "Reddit posts");
	v = v.replace(/\bRecent studies\b/g, "Reddit posts");
	v = v.replace(/\brecent study\b/g, "Reddit post");
	v = v.replace(/\bRecent study\b/g, "Reddit post");
	v = v.replace(/\bBook\b/g, "Meme");
	v = v.replace(/\bbook\b/g, "meme");
	v = v.replace(/\bsustainable\b/g, "nuclear");
	v = v.replace(/\bSustainable\b/g, "Nuclear");
	v = v.replace(/\bsuspicious\b/g, "sus");
	v = v.replace(/\bSuspicious\b/g, "Sus");
	v = v.replace(/\bBatman\b/g, "A Man Dressed Like a Bat");
	v = v.replace(/\bKeyboard\b/g, "Leopard");
	v = v.replace(/\bkeyboard\b/g, "leopard");
	v = v.replace(/\btea\b/g, "pee");
	v = v.replace(/\bTea\b/g, "Pee");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\bRebuild\b/g, "Avenge");
	v = v.replace(/\brebuild\b/g, "avenge");
	v = v.replace(/\bSpace\b/g, "Spaaace");
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bPhone\b/g, "Pokedex");
	v = v.replace(/\bphone\b/g, "pokedex");
	v = v.replace(/\bForce\b/g, "Horse");
	v = v.replace(/\bforce\b/g, "horse");
	v = v.replace(/\bDebate\b/g, "Dance-off");
	v = v.replace(/\bdebate\b/g, "dance-off");
	v = v.replace(/\bPoll\b/g, "Psychic reading");
	v = v.replace(/\bpoll\b/g, "psychic reading");
	v = v.replace(/\bVows to\b/g, "Probably won't");
	v = v.replace(/\bvows to\b/g, "probably won't");
	v = v.replace(/\bSuccessfully\b/g, "Suddenly");
	v = v.replace(/\bsuccessfully\b/g, "suddenly");
	v = v.replace(/\bGlobal\b/g, "Spherical");
	v = v.replace(/\bglobal\b/g, "spherical");
	v = v.replace(/\bminute\b/g, "hour");
	v = v.replace(/\bMinute\b/g, "Hour");
	v = v.replace(/\bDay\b/g, "Week");
	v = v.replace(/\bday\b/g, "week");
	v = v.replace(/\bMonth\b/g, "Season");
	v = v.replace(/\bmonth\b/g, "season");
	v = v.replace(/\bYear\b/g, "Decade");
	v = v.replace(/\byear\b/g, "decade");
	v = v.replace(/\bcandidate\b/g, "convict");
	v = v.replace(/\bCandidate\b/g, "Convict");
	v = v.replace(/\bDrone\b/g, "Dolphin");
	v = v.replace(/\bdrone\b/g, "dolphin");
	
	textNode.nodeValue = v;
}


