## PREREQUISITES

-Node.js 18.18.0

## BACKEND

# install
-navigate to backend folder
-open your cli, in my case it was windows
-type in npm install and press enter
-after all node modules are installed, you can now type npm start
-when you see that ```LOG [NestApplication] Nest application successfully started +2ms```, backend is ready to go

# using backend
-open http://localhost:3000/graphql
-you now can fill database as needed with data following schema
-database is in memory so if you will drop application, data will be lost

## INSTALL & RUN FRONTEND

# install
-navigate to frontend folder
-open your cli
-type in npm install and press enter
-when all node modules are installed, run npm run codegen (requires backend to be up and running)
-when this too is finished, you can start frontend with npm run start command

# using frontend
Frontend capabilities are limited: Create and update are not possible in this version. Displaying list, displaying details and deleting products is possible. 
