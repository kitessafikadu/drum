const mission = process.argv[2];

if(mission === 'learn'){
  console.log('It is time to write some Node code!');
} else{
  console.log(`Is ${mission} funny?`);
}