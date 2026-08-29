import { useState } from "react";
import { useRouter } from "next/router";
import { FaPlay, FaRegFolder } from "react-icons/fa";

const CodeEditor = () => {
  const router = useRouter();
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    // Simulate compilation/running time
    setTimeout(() => {
      setOutput("> Curious about technology, passionate about building.");
      // Redirect to About page after reading the output
      setTimeout(() => {
        router.push("/about");
      }, 1200);
    }, 200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto xl:mx-0 bg-[#121212]/35 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[13px] sm:text-sm">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a]/35 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-white/50 text-xs flex items-center gap-x-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span> Sohom's Syntax.py
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-6 text-left overflow-x-auto scrollbar-hide">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex flex-col text-white/20 text-right pr-4 select-none font-mono">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          {/* Code */}
          <div className="flex flex-col text-white/80 whitespace-pre font-mono">
            <span><span className="text-white/40">{"# Welcome to my workspace"}</span></span>
            <span><span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">SohomsSyntax</span>:</span>
            <span>    <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">__init__</span>(<span className="text-[#e06c75]">self</span>):</span>
            <span>        <span className="text-[#e06c75]">self</span>.name = <span className="text-[#98c379]">"Sohom Mallick"</span></span>
            <span></span>
            <span>    <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">print_vision</span>(<span className="text-[#e06c75]">self</span>):</span>
            <span>        <span className="text-[#61afef]">print</span>(<span className="text-[#98c379]">"Curious about technology, passionate about building."</span>)</span>
            <span></span>
            <span><span className="text-[#c678dd]">if</span> __name__ == <span className="text-[#98c379]">"__main__"</span>:</span>
            <span>    sohom = SohomsSyntax()</span>
            <span>    sohom.print_vision()</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-x-2 px-5 py-2 rounded border border-accent/70 text-accent hover:bg-accent/10 transition-all font-sans text-sm disabled:opacity-50"
          >
            <FaPlay className="text-xs" /> Run Profile
          </button>
          <a href="https://drive.google.com/file/d/1JPPsJwo6nZO2DGX9srjaK1nlXNJUNAvQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 px-5 py-2 rounded border border-[#c678dd]/70 text-[#c678dd] hover:bg-[#c678dd]/10 transition-all font-sans text-sm cursor-pointer">
            <FaRegFolder className="text-xs" /> View Resume
          </a>
        </div>

        {/* Terminal Output */}
        {isRunning && (
          <div className="mt-6 p-3 bg-[#0a0a0a] rounded border border-white/5 font-mono text-xs sm:text-sm text-green-400">
            {!output ? (
              <span className="animate-pulse">Running Sohom's Syntax.py...</span>
            ) : (
              <span>{output}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
