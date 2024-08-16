const logOutButton = new LogoutButton();

logOutButton.action = function() {
	ApiConnector.logout(response => {
		if (response.success) {
			location.reload();
		}
	})
}

ApiConnector.current(response => {
	if (response.success) {
		ProfileWidget.showProfile(response.data)
	}
})

const ratesBoard = new RatesBoard();

let getStocks = () => {
	ApiConnector.getStocks(response => {
		if (response.success) {
			ratesBoard.clearTable();
			ratesBoard.fillTable(response.data)
		}
	})

}

setInterval(getStocks, 60000);

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = function(data) {
	ApiConnector.addMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(response.success, 'Баланс пополнен');
		} else {
			moneyManager.setMessage(response.success, response.error);

		}
	})
}


moneyManager.conversionMoneyCallback = function(data) {
	ApiConnector.convertMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(response.success, 'Валюта конвертирована');
		} else {
			moneyManager.setMessage(response.success, response.error);

		}
	})
}

moneyManager.sendMoneyCallback = function(data) {
	ApiConnector.transferMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(response.success, 'Перевод выполнен');
		} else {
			moneyManager.setMessage(response.success, response.error);

		}
	})
}

const favoritesWidget = new FavoritesWidget();

ApiConnector.getFavorites(response => {
	if (response) {
		favoritesWidget.clearTable();
		favoritesWidget.fillTable(response.data);
		moneyManager.updateUsersList(response.data);
	}
})

favoritesWidget.addUserCallback = function(data) {
	ApiConnector.addUserToFavorites(data, response => {
		if (response) {
			favoritesWidget.clearTable();
			favoritesWidget.fillTable(response.data);
			moneyManager.updateUsersList(response.data);
			favoritesWidget.setMessage(response.success, 'Пользователь добавлен');
		} else {
			favoritesWidget.setMessage(response.success, response.error);
		}
	})
}

favoritesWidget.removeUserCallback = function(data) {
	ApiConnector.removeUserFromFavorites(data, response => {
		if (response) {
			favoritesWidget.clearTable();
			favoritesWidget.fillTable(response.data);
			moneyManager.updateUsersList(response.data);
			favoritesWidget.setMessage(response.success, 'Пользователь удален');
		} else {
			favoritesWidget.setMessage(response.success, response.error);
		}
	})
}