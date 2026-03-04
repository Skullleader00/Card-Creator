import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [mode, setMode] = useState<"Template" | "Image">("Template");
  
  // Card state
  const [name, setName] = useState("Knight of the Realm");
  const [cost, setCost] = useState("3");
  const [level, setLevel] = useState("5");
  const [atk, setAtk] = useState("1500");
  const [text, setText] = useState("A brave knight who fights for honor and glory. Has the ability to protect allies from incoming attacks.");

  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900 flex flex-col">
      {/* Header */}
      <header className="bg-black text-white p-6 flex justify-start items-center shrink-0">
        <h1 className="text-4xl font-bold tracking-widest pl-4">Add</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-12 flex-1 items-start justify-center">
          
          {/* Left: Card Preview */}
          <div className="w-full lg:w-[450px] flex justify-center items-start shrink-0">
            <div className="relative w-full max-w-[420px] aspect-[2.5/3.5] bg-gradient-to-b from-stone-700 to-stone-900 rounded-[1.5rem] p-4 shadow-2xl border-4 border-amber-600/80 flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* Card Inner Frame */}
              <div className="border border-amber-500/50 rounded-xl p-3 flex-1 flex flex-col gap-3">
                {/* Card Header */}
                <div className="flex justify-between items-center bg-stone-800 p-2 rounded-lg border border-stone-600/50 shadow-sm relative">
                  <span className="font-bold text-white text-xl pl-2 truncate pr-10">{name || "Card Name"}</span>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-white shadow-lg border-2 border-stone-900 text-lg">
                    {cost || "0"}
                  </div>
                </div>

                {/* Card Image Area */}
                <div className="w-full flex-1 bg-stone-800 border-2 border-stone-600 rounded-lg overflow-hidden flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-700 via-stone-800 to-stone-900"></div>
                  <span className="text-stone-500 italic relative z-10 font-medium">Image Preview</span>
                </div>

                {/* Card Stats & Text */}
                <div className="bg-stone-100 p-4 rounded-lg border-2 border-stone-300 flex flex-col gap-2 min-h-[140px] shadow-inner">
                  <div className="flex justify-between text-sm font-black text-stone-800 border-b-2 border-stone-300 pb-2">
                    <span className="bg-stone-200 px-2 py-0.5 rounded border border-stone-300">Level {level || "0"}</span>
                    <span className="bg-stone-200 px-2 py-0.5 rounded border border-stone-300">ATK {atk || "0"}</span>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed overflow-hidden font-medium mt-1">
                    {text || "Card effect description..."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full max-w-[600px] flex flex-col gap-8">
            <div className="flex gap-2 p-1.5 bg-neutral-200 rounded-full w-fit mx-auto lg:mx-0 shadow-inner">
              <button
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === 'Template' ? 'bg-white shadow-md text-black scale-100' : 'text-neutral-500 hover:text-neutral-700 scale-95 hover:scale-100'}`}
                onClick={() => setMode('Template')}
              >
                Template
              </button>
              <button
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === 'Image' ? 'bg-white shadow-md text-black scale-100' : 'text-neutral-500 hover:text-neutral-700 scale-95 hover:scale-100'}`}
                onClick={() => setMode('Image')}
              >
                Image
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-neutral-700 font-bold text-base">Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} className="bg-neutral-50 border-neutral-300 focus-visible:ring-black h-12 text-lg" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="cost" className="text-neutral-700 font-bold text-base">Cost</Label>
                  <Input id="cost" type="number" value={cost} onChange={e => setCost(e.target.value)} className="bg-neutral-50 border-neutral-300 focus-visible:ring-black h-12 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="level" className="text-neutral-700 font-bold text-base">Level</Label>
                  <Input id="level" type="number" value={level} onChange={e => setLevel(e.target.value)} className="bg-neutral-50 border-neutral-300 focus-visible:ring-black h-12 text-lg" />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="atk" className="text-neutral-700 font-bold text-base">ATK</Label>
                <Input id="atk" type="number" value={atk} onChange={e => setAtk(e.target.value)} className="bg-neutral-50 border-neutral-300 focus-visible:ring-black h-12 text-lg" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="text" className="text-neutral-700 font-bold text-base">Text / Description</Label>
                <Textarea 
                  id="text" 
                  value={text} 
                  onChange={e => setText(e.target.value)} 
                  className="bg-neutral-50 border-neutral-300 focus-visible:ring-black resize-none h-40 text-base leading-relaxed" 
                />
              </div>
            </div>
            
            {/* Export Button moved inside the form column for better balance */}
            <div className="pt-4">
              <Button className="w-full h-16 text-xl font-bold bg-black hover:bg-neutral-800 text-white rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98]">
                Export
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
