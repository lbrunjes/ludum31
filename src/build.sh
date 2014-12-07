#build teh reciver app and coppies it into the correct directory?
VERSION="0.0.1"
echo "building fromfiles.txt"
echo "// built at "$(date +%c) > game-$VERSION.js
echo "var GAME_VERSION = '$VERSION';" >> game-$VERSION.js

cat files.txt| while read line; do
	cat $line >> game-$VERSION.js
	echo "added $line"
done

cp game-$VERSION.js ../web/game.js

echo ""


echo "Finished: "$(date +%c)

cp ../web/* /c/inetpub/wwwroot/Stuff/ludum31
cp ../web/media/* /c/inetpub/wwwroot/Stuff/ludum31/media
cp ../web/* /var/www/html/web/ludum31
cp ../web/media/* /var/www/html/web/ludum31/media

#chromium-browser http://127.0.0.1/web/tanks/receiver.html
#windows
