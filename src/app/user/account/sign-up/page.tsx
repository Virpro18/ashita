'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signUp({

            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            setError(null);
            alert('Sign-up successful! Check your email for confirmation.');
            router.push('/login'); // Redirect to login page
        }
    };
    const handleOAuthSignup = async (provider: 'github' | 'discord') => {
        const { error } = await supabase.auth.signInWithOAuth({
          provider,
        });
      
        if (error) {
          setError(error.message);
        }
      };
      
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl mb-4">Sign Up</h1>
            <div className="w-80 p-8 rounded-lg shadow-lg bg-white">
            <form onSubmit={handleSignup} className="flex flex-col">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-4 p-2 text-lg rounded border border-gray-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-4 p-2 text-lg rounded border border-gray-300"
                />
                <button type="submit" className="p-2 text-lg rounded bg-blue-500 text-white hover:bg-blue-600">Sign Up</button>
            </form>
                <div className = "flex mt-5 justify-between">
                    <button onClick={() => handleOAuthSignup('github')}>
                        <Image src="/github-mark-white.png" alt="github" className="w-10 h-10 invert" width={20} height={20}/>
                    </button>
                    <button onClick={() => handleOAuthSignup('discord')}>
                        <Image src="/discord.svg" alt="github" className="w-10 h-10" width={20} height={20}/>
                    </button>

                </div>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
