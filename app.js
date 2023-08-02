const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')

const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')
const btnMltply = document.querySelector('#multiply')
const btnDivide = document.querySelector('#divide')
const result = document.querySelector('#result')
const btnSubmit = document.querySelector('#submit')

let currentAction = '+'

btnPlus.onclick = bindOperation('+')
btnMinus.onclick = bindOperation('-')
btnMltply.onclick = bindOperation('*')
btnDivide.onclick = bindOperation('/')

function bindOperation(action) {
	return function () {
		currentAction = action
	}
}

btnSubmit.onclick = () => {
	switch (currentAction) {
		case '+':
			result.textContent = Number(input1.value) + Number(input2.value)
			break
		case '-':
			result.textContent = Number(input1.value) - Number(input2.value)
			break
		case '*':
			result.textContent = Number(input1.value) * Number(input2.value)
			break
		case '/':
			result.textContent = Number(input1.value) / Number(input2.value)
			break
	}
}
