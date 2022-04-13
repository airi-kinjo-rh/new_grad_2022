
let names = [{
	name: "竹本 爽史",
	nickname: "そうし"
}, {
	name: "渕上 敬太",
	nickname: "ふっちー"
}, {
	name: "横浜 海斗",
	nickname: "かいと"
}, {
	name: "窪田 浩之",
	nickname: "窪田"
}, {
	name: "小西 洋太朗",
	nickname: "コニー"
}, {
	name: "COSTA HYGISON",
	nickname: "BOLA"
}, {
	name: "Nittayawan Sukhumpat",
	nickname: "ポー"
}, {
	name: "Onggo Barata",
	nickname: "Barata"
}, {
	name: "金城 愛梨",
	nickname: "アイリス"
}, {
	name: "久米 夏弥",
	nickname: "ナツ"
}, {
	name: "佐藤 貴子",
	nickname: "たかこ"
}, {
	name: "坂井田 逸斗",
	nickname: "坂井田"
}, {
	name: "長谷川 茉奈",
	nickname: "ハセ"
}];

export function getName(nickname){
	console.log(nickname);
	let hashtabelName = getHashtableName()
	return hashtabelName[nickname];
}

export function getHashtableName()  {
	let nameHash = {}
	for(let i = 0; i < names.length; i++) {
		nameHash[names[i]["nickname"]] = names[i]["name"]
	} 
	return nameHash;
}

export function searchName(pattern : string) : string[] {
	let result : string[]= [];
	names.forEach(value => {
		console.log(value["nickname"])
		if (value["nickname"].indexOf(pattern) > -1) {
			result.push(value["name"]);
		}
	  });
	return result;
}
