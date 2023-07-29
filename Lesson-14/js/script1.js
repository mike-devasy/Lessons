// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//  * прізвище спонсора
// * ім’я  спонсора
// * сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
 let sites = [
	{
		projectTitle : 'Title_1'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_1'         ,
firstName :   'Viktor'      ,
depositAmount :  20000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  50000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  25000 ,
			},
	],
	productionYear :  1998  ,
	sitePrice :    95000   ,
		
	},
	{
		projectTitle: 'Title_2'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_4'         ,
firstName :   'Viktor'      ,
depositAmount :  10000 ,
			},
			{
surname :  'Sponsor_5'         ,
firstName :   'Viktor'      ,
depositAmount :  10000 ,
			},
			{
surname :  'Sponsor_6'         ,
firstName :   'Viktor'      ,
depositAmount :  25000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  15000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  5000 ,
			},
	],
	productionYear :  2001  ,
	sitePrice :    65000     ,
		
	},
	{
		projectTitle: 'Title_3'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_7'         ,
firstName :   'Viktor'      ,
depositAmount :  20000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  50000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  55000 ,
			},

		
	],
	productionYear :  2003  ,
	sitePrice :    125000     ,
		
	},
	{
		projectTitle : 'Title_4'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_1'         ,
firstName :   'Viktor'      ,
depositAmount :  30000 ,
			},
			{
surname :  'Sponsor_7'         ,
firstName :   'Viktor'      ,
depositAmount :  40000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  15000 ,
			},
			{
surname :  'Sponsor_9'         ,
firstName :   'Viktor'      ,
depositAmount :  5000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  25000 ,
			},

		
	],
	productionYear :  2005  ,
	sitePrice :    115000     ,
		
	},
	{
		projectTitle : 'Title_5'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_10'         ,
firstName :   'Viktor'      ,
depositAmount :  10000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  50000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  25000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  45000 ,
			},

		
	],
	productionYear :  2006  ,
	sitePrice :    105000     ,
		
	},
	{
		projectTitle : 'Title_6'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_7'         ,
firstName :   'Viktor'      ,
depositAmount :  20000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  50000 ,
			},
			{
surname :  'Sponsor_4'         ,
firstName :   'Viktor'      ,
depositAmount :  15000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  45000 ,
			},
			{
surname :  'Sponsor_9'         ,
firstName :   'Viktor'      ,
depositAmount :  5000 ,
			},

		
	],
	productionYear :  2008  ,
	sitePrice :    135000     ,
		
	},
	{
		projectTitle : 'Title_7'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_11'         ,
firstName :   'Viktor'      ,
depositAmount :  40000 ,
			},
			{
surname :  'Sponsor_12'         ,
firstName :   'Viktor'      ,
depositAmount :  10000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  35000 ,
			},
			{
surname :  'Sponsor_7'         ,
firstName :   'Viktor'      ,
depositAmount :  15000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  55000 ,
			},

		
	],
	productionYear :  2010  ,
	sitePrice :    155000     ,
		
	},
	{
		projectTitle : 'Title_8'    ,
		owner :   'Smyth'          ,
		sponsors : [
			{
surname :  'Sponsor_12'         ,
firstName :   'Viktor'      ,
depositAmount :  10000 ,
			},
			{
surname :  'Sponsor_2'         ,
firstName :   'Viktor'      ,
depositAmount :  50000 ,
			},
			{
surname :  'Sponsor_9'         ,
firstName :   'Viktor'      ,
depositAmount :  35000 ,
			},
			{
surname :  'Sponsor_4'         ,
firstName :   'Viktor'      ,
depositAmount :  5000 ,
			},
			{
surname :  'Sponsor_6'         ,
firstName :   'Viktor'      ,
depositAmount :  5000 ,
			},
			{
surname :  'Sponsor_3'         ,
firstName :   'Viktor'      ,
depositAmount :  20000 ,
			},
			{
surname :  'Sponsor_8'         ,
firstName :   'Viktor'      ,
depositAmount :  35000 ,
			},
	],
	productionYear :  2012  ,
	sitePrice :    160000     ,
		
	}
 ]
const totalPriceOfSites = sites.reduce((prevSum, site) => prevSum + site.sitePrice, 0)
document.write(`1) загальнa вартість усіх сайтів - ${totalPriceOfSites}<br>`)
const countSitesProd_2000_2009 = sites.reduce((prevCount, site) => site.productionYear > 2000 && site.productionYear < 2009 ? prevCount +1 : prevCount,0)
document.write(`2) кількість сайтів, що було зроблено між 2000 та 2009 рр.- ${countSitesProd_2000_2009}<br>`)
function getCountSitesTotalSponsorAmountMore100000(array){
prevCount = 0;
for (let i = 0; i < array.length; i++) {
	const totalSponsorAmountForSite = array[i].sponsors.reduce((prevSum, sponsor) => prevSum += sponsor.depositAmount, 0);
	totalSponsorAmountForSite > 100000 ? prevCount++ : prevCount;
}
return prevCount;
}
 document.write(`3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${getCountSitesTotalSponsorAmountMore100000(sites)}<br>`)
 let listOfSponsors = sites.reduce((acc, site) => {
	let sponsorsSurnames = site.sponsors.map(sponsor => sponsor.surname)
	return acc.concat(sponsorsSurnames)
 },[]);
 document.write(` 4) Загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив) - ${listOfSponsors}<br>`)
 function getSiteWithMaxPrice(array) {
	  let maxPrice = 0 ;
		let yearMaxSitePrice;
	for (let i = 0; i < array.length; i++) {
		if(array[i].sitePrice > maxPrice ) {
			maxPrice = array[i].sitePrice ;
			yearMaxSitePrice = array[i].productionYear}
	}
	return yearMaxSitePrice
   }
document.write(`5) знайти рік, коли прибуток був найбільшим - ${getSiteWithMaxPrice(sites)}<br>`)
const sortLessSites = sites.sort((a,b) => b.sitePrice - a.sitePrice)
document.write(`6) упорядкувати список за спаданням прибутку - ${JSON.stringify(sortLessSites)}`)
const sitesMore100000 = JSON.parse(JSON.stringify(sites.filter((site) => site.sitePrice > 100000)));
const sitesLess100000 = JSON.parse(JSON.stringify(sites.filter((site) => site.sitePrice < 100000)));
document.write(`Сайти,вартістю до 100000 : ${JSON.stringify(sitesLess100000)}<br><br><br><br>`)
document.write(`Сайти,вартістю більше  100000 : ${JSON.stringify(sitesMore100000)}<br><br><br><br>`)
