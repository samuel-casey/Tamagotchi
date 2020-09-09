const tamagotchi = {
	name: 'Kuchipatchi',
	weight: 1,
	age: 0,
	birthday: '09/08/2020',
	hungerLevel: 10,
	happinessLevel: 10,
	attentionLevel: 4,
	lifeStage: 'Baby',
	description: () => {
		console.log(
			`A ${tamagotchi.lifeStage} tamagotchi named ${tamagotchi.name} born on ${tamagotchi.birthday} weighing ${tamagotchi.weight}`
		);
	},
	isHungry: true,
	wantsToPlay: true,
	isHappy: true,
	needsAttention: this.wantsToPlay,
	eat: (food) => {
		console.log(`mmm ${food}`);
		switch (food) {
			case 'grass':
				tamagotchi.hungerLevel -= 1;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
				break;
			case 'meat':
				tamagotchi.hungerLevel -= 3;
				tamagotchi.weight += 2;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
				break;
			case 'tofu':
				tamagotchi.hungerLevel -= 2;
				tamagotchi.weight += 1;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
				break;
			case 'bread':
				tamagotchi.hungerLevel -= 1;
				tamagotchi.weight += 2;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
				break;
			case 'candy':
				tamagotchi.hungerLevel -= 1;
				tamagotchi.weight += 3;
				tamagotchi.happinessLevel += 1;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
				break;
			default:
				tamagotchi.hunger = tamagotchi.hunger;

				tamagotchi.hungerLevel > 5
					? (tamagotchi.isHungry = true)
					: (tamagotchi.isHungry = false);
		}
	},
	speak: () => {
		console.log(`Hi! I'm ${tamagotchi.name}`);
		if (tamagotchi.isHungry) {
			console.log('Feed me!');
		}
		if (!tamagotchi.isHappy) {
			console.log("I'm sad :(. Give me candy!");
		}
		if (tamagotchi.needsAttention || tamagotchi.wantsToPlay) {
			console.log('Play with me!');
		}
		if (
			!tamagotchi.isHungry &&
			!tamagotchi.needsAttention &&
			!tamagotchi.wantsToPlay &&
			tamagotchi.isHappy
		) {
			console.log("I'm happy");
		}
	},
	play: () => {
		console.log('Yay! I love playing.');
		Math.random() > 0.5 ? tamagotchi.weight-- : tamagotchi.weight;
		tamagotchi.happinessLevel++;
		tamagotchi.attentionLevel++;

		tamagotchi.attentionLevel > 5
			? (tamagotchi.wantsToPlay = false)
			: (tamagotchi.wantsToPlay = true);

		tamagotchi.attentionLevel > 5
			? (tamagotchi.needsAttention = false)
			: (tamagotchi.needsAttention = true);
	},
	status: () => {
		console.log(
			`hungerLevel: ${tamagotchi.hungerLevel}, weight: ${tamagotchi.weight}, happinessLevel:${tamagotchi.happinessLevel}, attention: ${tamagotchi.attentionLevel}`
		);
	},
};

tamagotchi.speak();
tamagotchi.status();

for (let i = 0; i < 3; i++) {
	if (tamagotchi.hungerLevel > 0) {
		tamagotchi.eat('tofu');
	}
	if (tamagotchi.weight > 2) {
		tamagotchi.play();
	}

	tamagotchi.status();
}

tamagotchi.speak();
tamagotchi.status();
