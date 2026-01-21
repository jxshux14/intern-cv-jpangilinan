document.addEventListener('DOMContentLoaded', function () {
		alert("Welcome to My Curriculum Vitae!");

	var themeToggle = document.getElementById('theme-toggle');
	var aboutToggle = document.getElementById('toggle-about');
	var aboutSection = document.getElementById('about-section');
	var clickBtn = document.getElementById('click-counter');
	var clickCountSpan = document.getElementById('click-count');

	var count = 0;

		if (themeToggle) {
			// dark/light mode 
			if (!document.body.classList.contains('dark') && !document.body.classList.contains('light')) {
				document.body.classList.add('dark');
				themeToggle.textContent = 'Light Mode';
			} else {
				themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
			}

			themeToggle.addEventListener('click', function () {
				var isDark = document.body.classList.contains('dark');
				if (isDark) {
					document.body.classList.remove('dark');
					document.body.classList.add('light');
					themeToggle.textContent = 'Dark Mode';
				} else {
					document.body.classList.remove('light');
					document.body.classList.add('dark');
					themeToggle.textContent = 'Light Mode';
				}
			});
		}

	if (aboutToggle && aboutSection) {
		aboutToggle.addEventListener('click', function () {
			aboutSection.classList.toggle('hidden');
			var hidden = aboutSection.classList.contains('hidden');
			aboutToggle.textContent = hidden ? 'Show About Me' : 'Hide About Me';
		});
	}

	if (clickBtn && clickCountSpan) {
		clickBtn.addEventListener('click', function () {
			count += 1;
			clickCountSpan.textContent = count;
			clickBtn.style.transform = 'scale(0.98)';
			setTimeout(function () { clickBtn.style.transform = ''; }, 120);
		});
	}

});

