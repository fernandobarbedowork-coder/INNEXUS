
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
    const providerInfo = auth.currentUser?.providerData.map((provider: any) => ({
      providerId: provider.providerId,
      displayName: provider.displayName,
      email: provider.email,
      photoUrl: provider.photoURL
    })) || [];

    const errInfo: FirestoreErrorInfo = {
      error: error instanceof Error ? error.message : String(error),
      authInfo: {
        userId: auth.currentUser?.uid,
        email: auth.currentUser?.email,
        emailVerified: auth.currentUser?.emailVerified,
        isAnonymous: auth.currentUser?.isAnonymous,
        tenantId: auth.currentUser?.tenantId,
        providerInfo
      },
      operationType,
      path
    }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Quiero Invertir'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const path = 'leads';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-zinc-900 py-24 text-center">
        <CheckCircle size={64} className="text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold uppercase">¡Mensaje Enviado!</h2>
        <p className="text-gray-400 mt-2">Melissa se contactará contigo pronto.</p>
      </div>
    );
  }

  return (
    <section id="contacto" className="bg-zinc-900 py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-black uppercase tracking-tighter">¿Hablamos sobre tu próximo paso en <span className="gold-gradient-text">Paraguay?</span></h2>
          <p className="text-gray-400 mt-6 font-light">Especializados en asesoramiento personalizado.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 bg-black p-8 rounded-3xl space-y-4 border border-white/5">
          <input 
            required 
            type="text" 
            placeholder="Nombre completo" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-600 transition-colors" 
          />
          <input 
            required 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-600 transition-colors" 
          />
          <select 
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none"
          >
            <option>Quiero Invertir</option>
            <option>Quiero Mudarme</option>
            <option>Consultoría Empresarial</option>
          </select>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-yellow-600 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{loading ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}</span>
            {!loading && <Send size={16} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
