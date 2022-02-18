AirDrop NFT
MyNft.sol is a nft smart contract that mint the nft
I use an alchemy app to create an application and pinata is used to store the image url. 
In AirDropNFT.sol a struct is used to save the id and the address of the nft. 

An AirdropNft function is used to add the nft, the access of this function is to the admin. Only the admin calls this function. In the parameter, I pass an address of the airdrop structure with the detail of all the airdrops.  A for loop is used to add the address of the different nfts. In this function, we are also going to transfer nfts to our smart contract and grab the correct id for the nft at the correct position.

AddRecipient function is used to add the recipient. The owner passes the address of the recipient to add the recipient. For each of them, we populate the mapping of the recipient. And we are going to set it true for each of the addresses for verification purpose

RemoveRecipent is a function to remove the recipient. I just pass the address to the function a for loop is used to set the recipient value false so that it cannot come again to claim the asset.

Claim function is used to claim the nft. Firstly make sure the claim address is stored in the contract and then remove the address of the recipient. And a transferFrom function is used to transfer the nft to the recipient.