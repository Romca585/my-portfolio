import React, { useEffect, useRef } from 'react';

function CgolWidget() {
  const outputRef = useRef(null);

  useEffect(() => {
    if (window._dynCgolLoaded) return;
    window._dynCgolLoaded = true;

    delete window.Module;

    window.Module = {
      preRun: [
        function () {
          window.Module.FS_createPreloadedFile(
            '/',
            'GosperGliderGun_11x160.seed',
            '/GosperGliderGun_11x160.seed',
            true,
            false
          );
        },
      ],
      print: function (text) {
        if (!outputRef.current) return;

        if (text.includes('[CLEAR_SCREEN]')) {
          outputRef.current.textContent = '';
        } else {
          outputRef.current.textContent += text + '\n';
        }
      },
      printErr: function (text) {
        if (outputRef.current) {
          outputRef.current.textContent += 'ERROR: ' + text + '\n';
        }
      },
    };

    const script = document.createElement('script');
    script.src = '/dynCGOL.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-[300px]">
      <pre
        ref={outputRef}
        className="absolute top-0 left-0 w-full h-full text-green-700 font-mono text-sm bg-black opacity-80 p-4 whitespace-pre overflow-hidden"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          whiteSpace: 'pre',
          overflow: 'hidden',
          wordBreak: 'break-word',
          fontSize: '20px',
        }}
      ></pre>
    </div>
  );
  
}

export default CgolWidget;