"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { 
  Plus, Trash2, Shuffle, History, Download, Upload,
  X, Check, RotateCcw, Users, Trophy, Sparkles
} from "lucide-react";

interface PickHistory {
  name: string;
  timestamp: number;
  remainingCount: number;
}

export default function ToolComponent() {
  const [names, setNames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [pickedName, setPickedName] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState<number>(-1);
  const [history, setHistory] = useState<PickHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [removeAfterPick, setRemoveAfterPick] = useState(false);
  const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load from localStorage
  useEffect(() => {
    const savedNames = localStorage.getItem("namepicker_names");
    const savedHistory = localStorage.getItem("namepicker_history");
    const savedRemove = localStorage.getItem("namepicker_remove");
    
    if (savedNames) setNames(JSON.parse(savedNames));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedRemove) setRemoveAfterPick(JSON.parse(savedRemove));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("namepicker_names", JSON.stringify(names));
  }, [names]);

  useEffect(() => {
    localStorage.setItem("namepicker_history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("namepicker_remove", JSON.stringify(removeAfterPick));
  }, [removeAfterPick]);

  // Add name
  const addName = useCallback(() => {
    const trimmed = inputValue.trim();
    if (trimmed && !names.includes(trimmed)) {
      setNames(prev => [...prev, trimmed]);
      setInputValue("");
    }
  }, [inputValue, names]);

  // Add multiple names (paste)
  const addMultipleNames = useCallback((text: string) => {
    const newNames = text
      .split(/[\n,;]+/)
      .map(n => n.trim())
      .filter(n => n && !names.includes(n));
    
    if (newNames.length > 0) {
      setNames(prev => [...prev, ...newNames]);
    }
  }, [names]);

  // Remove name
  const removeName = useCallback((index: number) => {
    setNames(prev => prev.filter((_, i) => i !== index));
  }, []);

  // Clear all names
  const clearAllNames = useCallback(() => {
    setNames([]);
    setPickedName(null);
  }, []);


  // Pick random name with animation
  const pickRandom = useCallback(() => {
    if (names.length === 0 || isSpinning) return;

    setIsSpinning(true);
    setPickedName(null);

    let iterations = 0;
    const totalIterations = 20 + Math.floor(Math.random() * 10);
    const baseSpeed = 50;

    spinIntervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      setCurrentHighlight(randomIndex);
      iterations++;

      // Slow down towards the end
      if (iterations >= totalIterations) {
        if (spinIntervalRef.current) {
          clearInterval(spinIntervalRef.current);
        }

        // Final pick
        const finalIndex = Math.floor(Math.random() * names.length);
        const winner = names[finalIndex];
        
        setCurrentHighlight(finalIndex);
        setPickedName(winner);
        setIsSpinning(false);

        // Add to history
        const historyEntry: PickHistory = {
          name: winner,
          timestamp: Date.now(),
          remainingCount: removeAfterPick ? names.length - 1 : names.length
        };
        setHistory(prev => [historyEntry, ...prev.slice(0, 49)]);

        // Remove if option enabled
        if (removeAfterPick) {
          setNames(prev => prev.filter((_, i) => i !== finalIndex));
        }
      }
    }, baseSpeed + (iterations > totalIterations - 5 ? iterations * 20 : 0));
  }, [names, isSpinning, removeAfterPick]);

  // Reset picker
  const resetPicker = useCallback(() => {
    setPickedName(null);
    setCurrentHighlight(-1);
  }, []);

  // Clear history
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  // Export names
  const exportNames = useCallback(() => {
    const text = names.join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "names.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, [names]);

  // Import names
  const importNames = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      addMultipleNames(text);
    };
    reader.readAsText(file);
    e.target.value = "";
  }, [addMultipleNames]);

  // Handle paste
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text");
    if (text.includes("\n") || text.includes(",")) {
      e.preventDefault();
      addMultipleNames(text);
    }
  }, [addMultipleNames]);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addName();
    }
  }, [addName]);

  return (
    <div className="space-y-6">
      {/* Winner Display */}
      {pickedName && (
        <div className="card bg-gradient-to-r from-slate-600 to-gray-800 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-sm font-medium text-slate-300">Winner!</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            {pickedName}
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <button
            onClick={resetPicker}
            className="mt-4 text-sm text-slate-300 hover:text-white flex items-center gap-1 mx-auto"
          >
            <RotateCcw className="w-4 h-4" /> Pick Again
          </button>
        </div>
      )}

      {/* Name Input */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-gray-900">Add Names</h2>
          <span className="ml-auto text-sm text-gray-500">{names.length} names</span>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onPaste={handlePaste}
            placeholder="Enter a name or paste multiple..."
            className="input flex-1"
          />
          <button onClick={addName} className="btn-primary px-4" disabled={!inputValue.trim()}>
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Import/Export */}
        <div className="flex gap-2 mb-4">
          <label className="btn-secondary text-sm py-2 px-3 cursor-pointer flex items-center gap-1">
            <Upload className="w-4 h-4" /> Import
            <input type="file" accept=".txt" onChange={importNames} className="hidden" />
          </label>
          <button
            onClick={exportNames}
            disabled={names.length === 0}
            className="btn-secondary text-sm py-2 px-3 flex items-center gap-1"
          >
            <Download className="w-4 h-4" /> Export
          </button>
          <button
            onClick={clearAllNames}
            disabled={names.length === 0}
            className="btn-secondary text-sm py-2 px-3 flex items-center gap-1 text-red-600 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" /> Clear All
          </button>
        </div>

        {/* Names List */}
        <div className="max-h-64 overflow-y-auto space-y-2">
          {names.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No names added yet. Add names above to get started!
            </p>
          ) : (
            names.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-150 ${
                  currentHighlight === index
                    ? "bg-slate-600 text-white scale-105 shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className={`font-medium ${currentHighlight === index ? "text-white" : "text-gray-800"}`}>
                  {name}
                </span>
                <button
                  onClick={() => removeName(index)}
                  className={`p-1 rounded transition-colors ${
                    currentHighlight === index
                      ? "text-white/70 hover:text-white"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>


      {/* Pick Button & Options */}
      <div className="card">
        <button
          onClick={pickRandom}
          disabled={names.length === 0 || isSpinning}
          className={`w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 ${
            isSpinning ? "animate-pulse" : ""
          }`}
        >
          <Shuffle className={`w-6 h-6 ${isSpinning ? "animate-spin" : ""}`} />
          {isSpinning ? "Picking..." : "Pick Random Name"}
        </button>

        <label className="flex items-center gap-3 mt-4 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100">
          <input
            type="checkbox"
            checked={removeAfterPick}
            onChange={(e) => setRemoveAfterPick(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">Remove after picking</p>
            <p className="text-xs text-gray-500">Remove the picked name from the list</p>
          </div>
        </label>
      </div>

      {/* History */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-gray-900">Pick History</h2>
          </div>
          <div className="flex gap-2">
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-sm text-gray-500 hover:text-red-600"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="text-sm text-slate-600 hover:text-slate-700 font-medium"
            >
              {showHistory ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {showHistory && (
          <div className="space-y-2">
            {history.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No picks yet</p>
            ) : (
              history.map((item, index) => (
                <div
                  key={item.timestamp}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white text-xs rounded-full flex items-center justify-center">
                      {history.length - index}
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(item.timestamp).toLocaleString()} • {item.remainingCount} remaining
                      </p>
                    </div>
                  </div>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="card bg-slate-50 border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-2">Tips</h3>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>• Paste multiple names separated by commas or new lines</li>
          <li>• Import names from a text file</li>
          <li>• Enable &quot;Remove after picking&quot; for elimination rounds</li>
          <li>• Your names are saved locally in your browser</li>
        </ul>
      </div>
    </div>
  );
}
