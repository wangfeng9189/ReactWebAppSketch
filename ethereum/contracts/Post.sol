// SPDX-License-Identifier: GPL-3.0
contract PostFactory {
    address[] public deployedPosts;
    mapping(address => address[]) userPosts;
    mapping(uint => address[]) kittyPosts;
    uint public numberOfPosts = 0;

    function createPost(string memory postContent, uint postDay, uint postMonth, uint postYear, uint cryptoKittyID) public { // define storage type as memory
        Post newPost = new Post(postContent, postDay, postMonth, postYear, cryptoKittyID, numberOfPosts, msg.sender); // change address to Post
        deployedPosts.push(address(newPost)); // convert object to address type
        userPosts[msg.sender].push(address(newPost));
        kittyPosts[cryptoKittyID].push(address(newPost));
        numberOfPosts += 1;
    }

    function getDeployedPosts() public view returns (address[] memory) { // define return value's storage as memory
        return deployedPosts;
    }

    function getUserPosts(address user) public view returns (address[] memory) {
        return userPosts[user];
    }

    function getKittyPosts(uint KittyID) public view returns (address[] memory) {
        return kittyPosts[KittyID];
    }

}

contract Post {
    address public manager;
    uint day;
    uint month;
    uint year;
    string content;
    mapping(address => bool) public likes;
    uint public likesCount;
    uint kittyID;
    uint postID;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    constructor(string memory postContent, uint postDay, uint postMonth, uint postYear, uint cryptoKittyID, uint numberOfPosts, address creator) public {
        manager = creator;
        content = postContent;
        likesCount = 0;
        day = postDay;
        month = postMonth;
        year = postYear;
        kittyID = cryptoKittyID;
        postID = numberOfPosts;
    }

    function likePost() public {

        require(!likes[msg.sender]);

        likes[msg.sender] = true;
        likesCount++;
    }

    function getSummary() public view returns (string memory, uint, uint, uint, uint, uint, address) {
        return (
        content,
        day,
        month,
        year,
        likesCount,
        kittyID,
        manager
        );
    }
}