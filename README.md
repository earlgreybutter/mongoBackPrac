[mongoDB] <br/>
local mongoDB에 <br/>
DB: earlgrey <br/>
collection: books 생성 <br/>
mongoimport 명령어로 books에 comparision.csv import <br/>
(mongoimport 명령어 사용을 위해서는 mongoDB database tools 다운받아서 bin에 있는 모든 파일을 mongoDB의 bin에 넣어주어야 함) <br/>
명령어) mongoimport --type csv -d earlgrey -c books --headerline --drop comparison.csv <br/>

[실행방법]
1. npm i
2. npm run start 

# mongoBackPrac
