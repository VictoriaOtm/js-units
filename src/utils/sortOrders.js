// Array sort doc
// @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description

export const sortTypes = {
	DATE: 'date',
	COUNT: 'count',
};

/**
 * Функция сортировки заказов
 * @param {Array} orders - массив заказов
 * @param {Function} sortFunction - функция сортировки
 */
export const sortOrders = (orders, sortFunction) => {
	if (!orders || !orders.length) {
		return;
	}

	if (!sortFunction || typeof sortFunction !== "function") {
		return;
	}

	orders.sort(sortFunction);
};

/**
 * Функция возвращает нужный колбэк
 * по переданному типу сортировки
 * @param sortType
 * @returns {sortByItemCount|sortByDate}
 */
export const getSortFunction = (sortType) => {
	switch(sortType) {
		case sortTypes.DATE:
			return sortByDate;
		case sortTypes.COUNT:
			return sortByItemCount;
	}
};

/**
 * Колбэк для сортировки массива заказов
 * Сравнивает 2 заказа по количеству товаров в заказе
 * по возрастанию
 * @param order1
 * @param order2
 */
export const sortByItemCount = (order1, order2) => {
	if (typeof order1 !== 'object' || typeof order2 !== 'object') {
		return 0;
	}

	if (!order1 || !order2) {
		return 0;
	}

	const {items: items1} = order1;
	const {items: items2} = order2;

	if (!items1 || !items2) {
		return 0;
	}

	switch (true) {
		case items1.length < items2.length:
			return -1;
		case items1.length === items2.length:
			return 0;
		default:
			return 1;
	}
};

/**
 * Колбэк для сортировки массива заказов
 * Сравнивает 2 заказа по дате
 * по убыванию (сначала новые заказы)
 * @param order1
 * @param order2
 */
export const sortByDate = (order1, order2) => {
	if (typeof order1 !== 'object' || typeof order2 !== 'object') {
		return 0;
	}

	if (!order1 || !order2) {
		return 0;
	}

	const {date: date1} = order1;
	const {date: date2} = order2;

	if (!date1 || !date2) {
		return 0;
	}

	switch (true) {
		case date1 < date2:
			return 1;
		case date1 > date2:
			return -1;
		default:
			return 0;
	}
};
