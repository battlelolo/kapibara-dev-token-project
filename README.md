# Kapibara Dev Token Faucet

A simple Web3 token faucet for KDT tokens on the Sepolia testnet, built with Next.js and Hardhat for my developer portfolio.

**[Live Demo](https://kapibara-dev-token-project.vercel.app/)**

---

### Tech Stack

-   **Frontend**: Next.js, TypeScript, wagmi, Tailwind CSS
-   **Backend**: Solidity, Hardhat, OpenZeppelin
-   **Deployment**: Vercel & Sepolia Testnet

---

### How to Run Locally

1.  **Clone & Install Dependencies:**
    ```sh
    git clone https://github.com/battlelolo/kapibara-dev-token-project.git
    cd kapibara-dev-token-project
    
    # Install backend dependencies
    cd smart-contract && npm install
    
    # Install frontend dependencies
    cd ../kapibara-dev-token && npm install
    ```

2.  **Set Up Environment:**
    -   In `smart-contract`, create a `.env` file with your `SEPOLIA_RPC_URL` and `PRIVATE_KEY`.
    -   Deploy the contract with `npx hardhat run scripts/deploy.ts --network sepolia` and copy the new contract address.
    -   In `kapibara-dev-token`, create a `.env.local` file and set `NEXT_PUBLIC_CONTRACT_ADDRESS` to the address you just copied.

3.  **Run the App:**
    ```sh
    # In the `kapibara-dev-token` directory
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Smart Contract

-   **Network**: Sepolia Testnet
-   **Address**: [`0xE70163a2F358fDE34D7d3C08A63b611E615322A2`](https://sepolia.etherscan.io/address/0xE70163a2F358fDE34D7d3C08A63b611E615322A2)
