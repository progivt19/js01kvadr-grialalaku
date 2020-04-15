function solve() {

	// напишите функции x1 и x2 и измените функцию solve, 
	// так, чтобы она показывала решения (решение) 
	// уравнения, введенного пользователем на странице 	

	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	// получаем числа из строк
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);
	// дальше вам надо заменить код, чтобы он показывал решения,
	// или строку "РЕШЕНИЙ НЕТ", если дискриминант уравнения < 0
	var D = b*b - 4*a*c;
	var x1 = (b+(Math.sqrt(D)))/(2*a);
	var x2 = (b-(Math.sqrt(D)))/(2*a);
	if (D<0) {
		alert("Нет решения");
	} else {
		document.getElementById('D').value = D;
		document.getElementById('x1').value = x1;
		document.getElementById('x2').value = x2;
	}
}