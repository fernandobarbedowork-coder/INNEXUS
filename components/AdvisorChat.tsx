
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AdvisorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: '¡Hola! Soy tu Asesor AI de Innexus Real Estate. ¿En qué puedo ayudarte hoy sobre Paraguay?'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
            systemInstruction: "Eres un asesor experto para Innexus Real Estate en Paraguay. Fundadora: Melissa Rojas. Eres profesional, sofisticado y boutique. Tu objetivo es ayudar a inversores y personas que quieren mudarse a Paraguay con datos reales y honestos. Responde siempre en español."
        }
      });

      const text = response.text;
      setMessages(prev => [...prev, {role: 'bot', text: text || 'Lo siento, no pude procesar tu consulta. Por favor, intenta contactarnos por el formulario.'}]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {role: 'bot', text: 'Estamos experimentando una alta demanda. Por favor, intenta de nuevo en unos momentos.'}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-white/10 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-yellow-600 p-5 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <Bot size={22} />
              <span className="font-bold text-sm">Asesor AI Innexus</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-yellow-600 text-white' : 'bg-white/10 text-gray-200 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-yellow-500 animate-pulse">Analizando mercado...</div>}
          </div>
          <div className="p-4 bg-zinc-800 border-t border-white/5 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-600 transition-colors"
              placeholder="¿Cómo es el mercado en Asunción?"
            />
            <button onClick={handleSend} className="bg-yellow-600 p-3 rounded-xl hover:bg-yellow-500 transition-colors">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-yellow-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-black"
        >
          <Sparkles size={24} />
        </button>
      )}
    </div>
  );
};

export default AdvisorChat;
