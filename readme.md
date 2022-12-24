# Youtube-Subscribers-Backend

The given problem statement was to create a Backend API to get YouTube Subscriber data for a Mongodb database, 

as per the problem statement we have to create a backend api which will send the response in form of JSON, by using modular coding approach which contains having different files for the api connection, the database should be handled by another file & all the route should be on app.js file

Furthermore addition to this we created the files for 3 different GET routes & for their Controller which will help in the scaling of this application to big scale

Routes ->>

✅GET [http://localhost:3000/subscribers] - Response with an array of subscribers(an Object)
✅GET [http://localhost:3000/subscribers/names] - Response with an array of subscribers(an Object with only two fields name and subscribedChannel)
✅GET [http://localhost:3000/subscribers/:id] - Response with a subscriber*(an object)* with given id

✅& Response with status code 400 and Error message({message: error.message}) if id does not match
