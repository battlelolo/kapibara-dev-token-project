import { ethers } from "hardhat";

async function main() {
  // 배포할 컨트랙트를 가져옵니다.
  const KapibardDevToken = await ethers.getContractFactory("KapibardDevToken");

  // 컨트랙트를 배포합니다.
  const kapibardDevToken = await KapibardDevToken.deploy();

  // 배포가 완료될 때까지 기다립니다.
  await kapibardDevToken.waitForDeployment();

  // 배포된 컨트랙트의 주소를 터미널에 출력합니다.
  console.log(
    `KapibardDevToken deployed to: ${kapibardDevToken.target}`
  );
}

// 스크립트를 실행하고 에러가 있으면 출력합니다.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});