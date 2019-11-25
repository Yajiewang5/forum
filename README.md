
# forum

### project description
using node.js、express、mongoDB, allow users signup, login and post new topic

### technology
1. node.js
2. express
3. mongoDB
4. art-template
5. bootstrap
6. jquery



### 
|Path|method|GRT|POST|Login or not|note|
|--|--|--|--|--|--|
|/|GET||||Homepage|
|/register|GET||||register page|
|/register|POST||email nickname password||signup request|
|/login|GET||||login page|
|/login|POST||email password||login request|
|/logout|GET|||YEs|logout request|
|/publish|GET|||Yes|new topic page|
|/publish|POST||title content nickname|Yes|post new topic request|
|/userInfo|GET|||Yes|personal information page|
|/userInfo|POET||email nickname gender|Yes|change information request|

### How to use it 
1. MongoDB  
    * $ mongod
    * $ mongo
2. using nodemon or node run project
    * $ nodemon app.js / node app.js
3. localhost:3000 




