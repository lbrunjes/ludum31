#build teh reciver app and coppies it into the correct directory?
VERSION="0.2"
echo "building fromfiles.txt"
echo "// built at "$(date +%c) > game-$VERSION.js
cd src

cat files.txt| while read line; do
	cat $line >> game-$VERSION.js
	echo "added $line"
done

cp game-$VERSION.js ../web/game.js

echo ""


echo "Finished: "$(date +%c)

cp ../web/* /c/inetpub/wwwroot/Stuff/ludum31

#chromium-browser http://127.0.0.1/web/tanks/receiver.html
#windows
