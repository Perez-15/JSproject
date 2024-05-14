// 1. Create a variable to hold NFTs (an array).
let nftCollection = [];

// 2. Define the mintNFT function to create and store NFTs.
function mintNFT(name, description, image) {
    // Create an object to hold metadata for the NFT
    let newNFT = {
        name: name,
        description: description,
        image: image
    };

    // Store the new NFT object in the collection
    nftCollection.push(newNFT);
}

// 3. Define the listNFTs function to print metadata of all NFTs.
function listNFTs() {
    // Iterate through the array of NFTs
    nftCollection.forEach(nft => {
        // Print metadata to the console
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
        console.log(""); // Empty line for readability
    });
}

// 4. Define the getTotalSupply function to return the total number of NFTs.
function getTotalSupply() {
    return nftCollection.length;
}

// Example usage
mintNFT("NFT 1", "Description of NFT 1", "image1.jpg");
mintNFT("NFT 2", "Description of NFT 2", "image2.jpg");
mintNFT("NFT 3", "Description of NFT 3", "image3.jpg");

listNFTs(); // Print all NFTs' metadata
console.log("Total number of NFTs: " + getTotalSupply()); // Print total number of NFTs
