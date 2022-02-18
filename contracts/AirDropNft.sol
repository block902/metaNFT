// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract AirdropNft {
    struct Airdrop {
        address nft;
        uint id;
    }
    uint public nextAirDropId;
    address public admin;
    mapping(uint => Airdrop) public airdrops;
    mapping(address => bool) public recipients;

    constructor () {
        admin = msg.sender;
    }

    function addAirdrops(Airdrop[] memory _airdrops) external {
        require(msg.sender == admin, 'only admin');
        uint _nextAirDropId = nextAirDropId;
        for(uint i=0; i<_airdrops.length; i++){
            airdrops[_nextAirDropId] = _airdrops[i];
            IERC721(_airdrops[i].nft).transferFrom(
                msg.sender,
                address(this),
                _airdrops[i].id
            );
            _nextAirDropId++;
        }
    }

    function addReceipients(address[] memory _recipients) external {
        require(msg.sender == admin, 'only admin');
        for(uint i=0; i<_recipients.length; i++){
            recipients[_recipients[i]] = true;
        }
    }

    function removeRecipients(address[] memory _recipients) external {
        require(msg.sender == admin, 'Only admin');
        for(uint i=0; i<_recipients.length; i++){
            recipients[_recipients[i]]=false;
        }
    }

    function claim() external {
        require(recipients[msg.sender] == true, 'recipient not registered');
        recipients[msg.sender] = false;
        Airdrop storage airdrop = airdrops[nextAirDropId];
        IERC721(airdrop.nft).transferFrom(address(this), msg.sender, airdrop.id);
        nextAirDropId++;
    }

}
