// Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. <br>
							// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був <br>
							// вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При <br>
							// натисканні на червону стрілку спортсмен переміщається у загальний список.
							function selectSportsman(btn, parent, btnTitle) { 
								let sportsmanChange = btn.closest('.sportsman')
								btn.innerText = btnTitle
                let sportsmanSelect = sportsmanChange.cloneNode(true)
								let parentSportsmanSelect = document.querySelector(parent)
								parentSportsmanSelect.append(sportsmanSelect)
								sportsmanChange.remove()
							 }
function changeList() {
	let arrButtons = document.querySelectorAll('.sportsman__button')
	for (const btn of arrButtons) {
		btn.onclick = function() {
			let parentElement = btn.closest('.sportsman__list')
			if(parentElement){
				selectSportsman(btn, '.sportsman__select_list', 'Видалити')
				changeList()
			}
			else {
				selectSportsman(btn, '.sportsman__list', 'Вибрати')
				changeList()
			}
		}
	}
  }
	changeList()

 
