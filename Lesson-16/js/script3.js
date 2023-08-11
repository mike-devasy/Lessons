class Services{
	constructor(title, price, period){
		this.title = title
		this.price = price
		this.period = period
	}

	}
	class AddressOfBranch{
		constructor(country, town, street, numHouse){
			this.country = country
			this.town = town
			this.street = street
			this.numHouse = numHouse
		}

	}
 let  company = {
	title : 'Adidas',
	foundation : {
		year:1949,
		month :10
	},
	service_1 : new Services('garantee', 100, 'year'),
	service_2 : new Services('drop-shipping', 300, 'month'),
	service_3 : new Services('sales', 300, 'month'),
	branch_1 : new AddressOfBranch('UK', 'London', 'Backerstreet', '32-A'),
	branch_2 : new AddressOfBranch('France', 'Paris', 'Place Colette', '21'),
	branch_3 : new AddressOfBranch('USA', 'New York', '5-th avenu', '115'),
	branch_4 : new AddressOfBranch('USA', 'Sent Louis', 'Painstreet', '5'),
	branch_5 : new AddressOfBranch('USA', 'New York', '21-th avenu', '45'),
	getBranchesInTown : function(town){
		let branches = []
		for(let key in this){
			if(key.indexOf('branch_') === 0 && this[key].town === town)
			branches.push(this[key])
		}
		return branches
	},
getServicesForTime_Money : function (money, time) { 
	let services = []
		for(let key in this){
			if(key.indexOf('service_') === 0 && this[key].price === money && this[key].period === time)
			services.push(this[key].title)
		}
		return services
 },
getTotalYearOfCompany: function(){
	let currentYear = new Date().getFullYear()
	return currentYear - company.foundation.year
}
 }

	let x = company.getTotalYearOfCompany()
	console.log(x);
	let branchesInNewYork = company.getBranchesInTown('New York');
  console.log(branchesInNewYork);
	let servicesForMoney_Time = company.getServicesForTime_Money(300, 'month')
	console.log(servicesForMoney_Time);