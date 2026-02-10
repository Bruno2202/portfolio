import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  isDark: boolean;
  colorLight?: string;
  colorDark?: string;
  speed?: number;
}

export function AnimatedBackground({ 
  isDark, 
  colorLight = 'rgba(79, 70, 229, 0.3)', 
  colorDark = 'rgba(79, 70, 229, 0.5)',  
  speed = 30 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logicalSize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let drops: number[] = [];
    
    const characters = '01xyzw<>[]();=+-*&|abcdefhijklmnopqrst';
    const fontSize = 14;

    const init = () => {
      const { clientWidth, clientHeight } = container;
      const dpr = window.devicePixelRatio || 1;

      logicalSize.current = { width: clientWidth, height: clientHeight };

      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;

      const columns = Math.ceil(clientWidth / fontSize);
      
      if (drops.length === 0 || drops.length !== columns) {
        const newDrops = [];
        for (let i = 0; i < columns; i++) {
          newDrops[i] = drops[i] !== undefined ? drops[i] : Math.random() * -100;
        }
        drops = newDrops;
      }
      
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      
      ctx.fillStyle = isDark ? '#000' : '#FFF';
      ctx.fillRect(0, 0, clientWidth, clientHeight);
    };

    let lastTime = 0;
    const fpsInterval = 1000 / speed;

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      ctx.fillStyle = isDark 
        ? 'rgba(0, 0, 0, 0.15)'
        : 'rgba(255, 255, 255, 0.18)'; 

      ctx.fillRect(0, 0, logicalSize.current.width, logicalSize.current.height);

      ctx.fillStyle = isDark ? colorDark : colorLight;
      ctx.font = `${fontSize}px monospace`; 
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > logicalSize.current.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    init();
    draw(0);

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark, colorLight, colorDark, speed]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ opacity: 0.4 }} 
      />
    </div>
  );
}