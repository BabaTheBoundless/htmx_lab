
const admin = require('firebase-admin');
const {onRequest} = require("firebase-functions/v2/https");
const functions = require('firebase-functions');
const axios = require('axios');
const logger = require("firebase-functions/logger");



const firebaseConfig = {

    apiKey: "AIzaSyChvh1AkzB0aLkE9t5yH4__odApZFGaVTY",
  
    authDomain: "connorsmyuniqueprojectname.firebaseapp.com",
  
    projectId: "connorsmyuniqueprojectname",
  
    storageBucket: "connorsmyuniqueprojectname.appspot.com",
  
    messagingSenderId: "427054301429",
  
    appId: "1:427054301429:web:88f79279b707425d25c5bc"
  
  };
  
admin.initializeApp();
const db = admin.firestore();
const docRef = db.collection('Weather').doc('temperature');
const labref = db.collection('lab').doc('test');
const api_key = '8d9db8e4bb0ce2768fc37dd27eb2be40';

exports.pubsub = functions
                    .runWith({timeoutSeconds: 60, memory: "1GB"})
                    .pubsub
                    .schedule('Every 12 hours')
                    .onRun(async context => {
                      await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Missoula&appid=8d9db8e4bb0ce2768fc37dd27eb2be40', {params})
                      .then(response => {
                        const apiResponse = response.data;
                        docRef.set({
                          current: apiResponse,
                        })
                      }).catch(error => {
                        console.log(error);
                      });
                    })
  exports.readLab2 = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10},
  (request, response) => {
    labref.get().then((doc) => {
      if (doc.exists){
        response.send(doc.data());
      } else {
        logger.info("Nothing was found.....", {structuredData: true});
      }
    })
  });



  exports.queryTest = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, (request, response) => {
    logger.info("Checking the logs.....", {structuredData: true});
    console.log(request.query)
    labref.set({
      current: request.query
    }).then(()=>{
      response.send("Query Test Received!")
    })
  });




  exports.flashBriefing = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, async (request, reponse) => {
    logger.info("Flash briefing has been called!!!!!", {structuredData: true});
  });


