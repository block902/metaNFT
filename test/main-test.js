
/* test/sample-test.js */
describe("NFTAirDrop", function() {
    // beforeEach("setup", async function () {

    //     [
    //       this.deployer,
    //       this.account1,
    //       this.account2,
    //       this.account3,
    //       this.account4,
    //       this.account5,
    //       this.account6,
    //       this.account7
    //     ] = await ethers.getSigners();
    // const admin = this.deployer;
    // const recipient1 = this.account1;
    // const recipient2= this.account2
    // const recipient3 = this.account3;
    it("Should create NftAirDrop", async function() {
      /* deploy the NFTAirDrop */
      const airDropNft = await ethers.getContractFactory("AirdropNft")
      const deployedAirDropNft = await airDropNft.deploy()
      await deployedAirDropNft.deployed()
      const deployedAirDropNftAddress = deployedAirDropNft.address
  
      /* deploy the NFT contract */
      const MyNFT = await ethers.getContractFactory("MyNFT")
      const nft = await MyNFT.deploy()
      await nft.deployed()
      const nftContractAddress = nft.address
    });
});