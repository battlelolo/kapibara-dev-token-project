// app/page.tsx
import { KapibaraFaucet } from "./components/KapibaraFaucet";
import { FloatingKapibara } from "./components/FloatingKapibara";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <FloatingKapibara />
      <div className="p-8 bg-white rounded-xl shadow-lg text-center max-w-lg w-full">
        <h1 className="text-gray-500 text-4xl font-bold mb-2">
          Kapibara Dev Token
        </h1>
        <p className="text-gray-600 mb-8">
          A Web3 Token Faucet Project for Kapibara Dev App Users
        </p>
        <KapibaraFaucet />
      </div>
      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Built with Next.js, wagmi, and Hardhat</p>
        <p>
          Download the Kapibara Dev Travel Phrasebook (iOS){" "}
          <a
            href="https://apps.apple.com/us/developer/youla-lee/id1809617958"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            here
          </a>
        </p>
      </footer>
    </main>
  );
}
