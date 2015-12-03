.PHONY: site clean

site: src/js/app.min.js

src/js/app.min.js: src/js/app.js
	browserify $^ -o $@

clean:
	rm -f src/js/app.min.js
