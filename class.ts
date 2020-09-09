class Tamagotchi {
	// THIS IS THE MAIN ADDITION OF TS CLASSES OVER JS CLASSES
	name: String;
	weight: number;
	age: number;
	birthday: String;
	hungerLevel: number;
	happinessLevel: number;
	attentionLevel: number;
	lifeStage: String;
	isHungry: boolean;
	wantsToPlay: boolean;
	isHappy: boolean;
	needsAttention: boolean;

	constructor(
		name,
		weight,
		age,
		birthday,
		hungerLevel,
		happinessLevel,
		attentionLevel,
		lifeStage,
		isHungry,
		wantsToPlay,
		isHappy,
		needsAttention
	) {
		this.name = name;
		this.weight = weight;
		this.age = age;
		this.birthday = birthday;
		this.hungerLevel = hungerLevel;
		this.happinessLevel = happinessLevel;
		this.attentionLevel = attentionLevel;
		this.lifeStage = lifeStage;
		this.isHungry = isHungry;
		this.wantsToPlay = wantsToPlay;
		this.isHappy = isHappy;
		this.needsAttention = needsAttention;
	}

	eat(food: string) {
		console.log(`mmm ${food}`);
		switch (food) {
			case 'grass':
				this.hungerLevel -= 1;

				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
				break;
			case 'meat':
				this.hungerLevel -= 3;
				this.weight += 2;

				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
				break;
			case 'tofu':
				this.hungerLevel -= 2;
				this.weight += 1;

				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
				break;
			case 'bread':
				this.hungerLevel -= 1;
				this.weight += 2;

				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
				break;
			case 'candy':
				this.hungerLevel -= 1;
				this.weight += 3;
				this.happinessLevel += 1;

				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
				break;
			default:
				this.hungerLevel > 5 ? (this.isHungry = true) : (this.isHungry = false);
		}
	}

	description() {
		console.log(
			`A ${this.lifeStage} tamagotchi named ${this.name} born on ${this.birthday} weighing ${this.weight}`
		);
	}

	speak() {
		console.log(`Hi! I'm ${this.name}`);
		if (this.isHungry) {
			console.log('Feed me!');
		}
		if (!this.isHappy) {
			console.log("I'm sad :(. Give me candy!");
		}
		if (this.needsAttention || this.wantsToPlay) {
			console.log('Play with me!');
		}
		if (
			!this.isHungry &&
			!this.needsAttention &&
			!this.wantsToPlay &&
			this.isHappy
		) {
			console.log("I'm happy");
		}
	}

	play() {
		console.log('Yay! I love playing.');
		Math.random() > 0.5 ? this.weight-- : this.weight;
		this.happinessLevel++;
		this.attentionLevel++;

		this.attentionLevel > 5
			? (this.wantsToPlay = false)
			: (this.wantsToPlay = true);

		this.attentionLevel > 5
			? (this.needsAttention = false)
			: (this.needsAttention = true);
	}

	status() {
		console.log(
			`hungerLevel: ${this.hungerLevel}, weight: ${this.weight}, happinessLevel:${this.happinessLevel}, attention: ${this.attentionLevel}`
		);
	}
}

const Mametchi = new Tamagotchi(
	'Mametchi',
	1,
	0,
	'09/09/2020',
	4,
	5,
	6,
	'Baby',
	true,
	true,
	true,
	true
);

Mametchi.speak();
Mametchi.status();

for (let i = 0; i < 3; i++) {
	if (Mametchi.hungerLevel > 0) {
		Mametchi.eat('tofu');
	}
	if (Mametchi.weight > 2) {
		Mametchi.play();
	}

	Mametchi.status();
}

Mametchi.speak();
Mametchi.status();
