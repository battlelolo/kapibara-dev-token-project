import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"; // .env 파일을 사용하기 위해 추가

// .env 파일에서 환경 변수를 불러옵니다.
const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL || "";
const privateKey = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24", // 사용된 솔리디티 버전에 맞게 수정
  networks: {
    sepolia: { // sepolia 네트워크 설정 추가
      url: sepoliaRpcUrl,
      accounts: [privateKey],
    },
  },
};

export default config;