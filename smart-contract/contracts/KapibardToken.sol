// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin 라이브러리에서 ERC-20 표준 계약을 가져옵니다.
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KapibardDevToken is ERC20 {
    // 이 계약을 배포한 사람의 주소
    address public owner;
    
    // 각 주소가 토큰을 받아갔는지 기록하는 장부
    mapping(address => bool) public hasClaimed;

    // 계약이 처음 생성(배포)될 때 실행되는 부분
    constructor() ERC20("Kapibard Dev Token", "KDT") {
        owner = msg.sender; // 배포자를 owner로 설정
        // 초기 발행량: 1,000,000개. (10**18은 소수점 자리수)
        // 이 토큰은 모두 owner의 지갑으로 들어갑니다.
        _mint(msg.sender, 1000000 * 10**18);
    }

    // 사용자가 토큰을 요청할 때 호출하는 함수
    function claim() public {
        // 이미 받아간 주소인지 확인하고, 받아갔으면 에러 발생
        require(!hasClaimed[msg.sender], "You have already claimed your tokens.");
        
        // 받아갔다고 장부에 기록
        hasClaimed[msg.sender] = true;
        
        // 함수를 호출한 사용자(msg.sender)에게 100개의 토큰을 새로 발행해서 줌
        _mint(msg.sender, 100 * 10**18);
    }
}