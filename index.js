var Sentiment = require("sentiment");
var sentiment = new Sentiment();
// dataset can be found at kaggle datasets download -d kazanova/sentiment140


var csv_file_path=("https://f.playcode.io/p-897673/v-1/efb87e5d-95d7-4483-9f22-d4128590f9fb/sentimental-analysis.csv")


const data= [
  "Is not going to sleep tonite.",
  "too worried and tired to post tonight",
  "couldn\'t get shit done today \~ i\'m so screwed",
  "Job Interview in Cardiff today, wish me luck! Got about 3 hours sleep ",
  "@stustone Your show is whack. Way worse than whack, it's wiggety-whack.    :*(:*(:*(",
  "i hate to see the spartans so sad ",
  "My mind and body are severely protesting this &quot;getting up&quot;  thing. Had nightmares to boot",
  "@cheechbud i think ur right!! hahaha!! 4.5 hrs now!! ",
  "@eloquentembrace You're going to kill me, but I've not seen DS9. I've been waiting till I can do it in one solid week sitting.",
  "@DjAlizay I really don't think people choose to be that way. But I think he chose not to accept my family's help   He might be dead by now"];

for(var i =0; i < len(data); i++){
  console.log(sentiment.analyze("I do like this resturant"))
}
