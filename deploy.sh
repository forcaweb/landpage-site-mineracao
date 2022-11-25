echo "build App..."
npm run build

echo "deployed files server..."
scp -r build/* root@191.101.78.222:/usr/share/nginx/html

echo "Done!"
