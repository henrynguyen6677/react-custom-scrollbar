.PHONY: publish
publish:
	echo "Building"
	npm run build
	npm publish
	echo "Published"
