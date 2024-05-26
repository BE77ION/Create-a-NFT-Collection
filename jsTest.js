/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nFt=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (movieName,genre,year,director,description) {
    const obj={
        movieName,
        genre,
        year,
        director,
        description
    }
nFt.push(obj);
console.log("minted :" + movieName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nFt.length;i++){
        console.log(nFt[i]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nFt.length;

}

// call your functions below this line
mintNFT("Amar Singh Chamkila","biography|drama|music",2024,"Imtiaz Ali","Follows the life of pop star duo Amar Singh Chamkila and Amarjot Kaur, whose songs that were social commentaries or devotionals became massive hits in the 80's.")
mintNFT("Crew","bcoamdy|drama|",2024,"Rajesh A Krishnan","Follows three hard-working women as their destinies lead to some unwarranted situations and they end up caught in a web of lies.")
mintNFT("Article 370","action|drama|thriller",2024,"Aditya Suhas Jambhale","After unrest in Kashmir in 2016, local agent Zooni Haksar is chosen for a secret mission by Rajeshwari Swaminathan to end terrorism and economy conflict by abrogating Article 370 without bloodshed.")
mintNFT("Kill","action|drama|crime",2023,"Follows a passenger on a train to New Delhi. The train soon becomes a combat battleground as a pair of commandos face an army of invading bandits.")

listNFTs(nFt);
console.log(getTotalSupply(nFt));
