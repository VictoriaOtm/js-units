export const fakeOrders = [
	{
		id: 123,
		date: 1544356800000,
		shop: 'Ali Express',
		items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
	},
	{
		id: 124,
		date: 1552481120000,
		shop: 'Lamoda.ru',
		items: [
			'Жакет - BOREAL5',
			'Miss Gabby Костюм',
			'Ostin перчатки мужские',
			'Zara худи роз.',
		]
	},
	{
		id: 126,
		date: 1552585550000,
		shop: 'Эльдорадо',
		items: [
			'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
			'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
		]
	},
];

export const orderShopNullable = {
	id: 126,
	date: 1552585550000,
	shop: null,
	items: [
		'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
		'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
	]
};

export const orderShopEmpty = {
	id: 126,
	date: 1552585550000,
	shop: '',
	items: [
		'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
		'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
	]
};

export const orderDateNullable = {
	id: 126,
	date: null,
	shop: 'Эльдорадо',
	items: [
		'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
		'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
	]
};

export const orderItemsNullable = {
	id: 127,
	date: 1552481120000,
	shop: 'Mail.ru',
	items: []
};
