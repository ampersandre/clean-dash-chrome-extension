build:
	@echo "Building"
	rm -f clean-dashboard.zip
	zip -r clean-dashboard.zip . -x *.git* -x README.md -x Makefile -x .DS_Store