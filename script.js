function toggleMode() {
	const html = document.documentElement

	html.classList.toggle('light')

	const img = document.querySelector('img')

	if (html.classList.contains('light')) {
		img.setAttribute('src', './assets/avatar.jpg')
		img.setAttribute('alt', 'Foto do Luciano Abreu oferecendo uma cerveja')
	} else {
		img.setAttribute('src', 'https://github.com/lzabreu.png')
		img.setAttribute('alt', 'Foto do Luciano Abreu com terno')
	}
}
