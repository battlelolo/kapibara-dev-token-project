// components/FloatingKapibara.tsx
'use client';
export function FloatingKapibara() {
  return (
    <div className="mb-8 flex justify-center">
      <img 
        src="/kdt.png" 
        alt="Floating Kapybara"
        className="w-24 h-24 object-contain floating-kapybara"
      />
      
      <style jsx>{`
        .floating-kapybara {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}