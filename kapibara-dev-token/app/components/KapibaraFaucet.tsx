// app/components/KapibaraFaucet.tsx
'use client';

import { useAccount, useConnect, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { parseAbi } from 'viem';

// Read the contract address from the environment variables
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

// Define the relevant parts of the smart contract's ABI
const contractAbi = parseAbi([
  'function claim() public',
]);

export function KapibaraFaucet() {
  // Hook to get the current wallet connection status
  const { address, isConnected } = useAccount();
  // Hook to handle wallet connection
  const { connect } = useConnect();
  // Hook to handle contract write operations (triggers transactions)
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  // Hook to wait for a transaction to be mined and get its receipt
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Function to be called when the 'Claim' button is clicked
  const handleClaim = () => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: 'claim',
    });
  };

  // If the wallet is not connected, show the connect button
  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: injected() })}
        className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
      >
        Connect MetaMask 🦊
      </button>
    );
  }

  // If the wallet is connected, show the faucet UI
  return (
    <div className="text-center">
      <p className="mb-4">Connected Wallet: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{address}</span></p>
      <button
        onClick={handleClaim}
        disabled={isPending || isConfirming}
        className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 disabled:bg-gray-400"
      >
        {isPending && 'Approving in wallet...'}
        {isConfirming && 'Processing transaction...'}
        {!isPending && !isConfirming && 'Get Kapibara Token 🐹'}
      </button>

      {hash && <p className="mt-4 break-all">✅ Transaction sent! Hash: <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{hash}</a></p>}
      {isConfirmed && <p className="mt-2 text-xl text-green-600 font-bold">🎉 Success! The tokens are in your wallet.</p>}
      {error && <p className="mt-4 text-red-500">Error: {(error as any).shortMessage || error.message}</p>}
    </div>
  );
}