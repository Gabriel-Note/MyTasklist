"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
    const [mode, setMode] = useState("loggedOut")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const saved = localStorage.getItem("mode")
        if (saved) setMode(saved)
    }, [])

    function handleLogin() {
        if (username === "PRAG" && password === "PRAG") {
            setMode("loggedIn")
            localStorage.setItem("mode", "loggedIn")
        } else {
            alert("Fel användarnamn eller lösenord!")
        }
    }

    function handleLogout() {
        setMode("loggedOut")
        localStorage.removeItem("mode")
    }

    return (
        <nav className="w-full bg-white h-16">
            <div className="container mx-auto h-full flex items-center justify-between px-8">
                <img src="/todo-logo.png" alt="logga" className="h-16" />

                {mode === "loggedOut" && (
                    <button
                        onClick={() => setMode("loggingIn")}
                        className="bg-black text-white px-4 py-2 rounded-md"
                    >
                        Login
                    </button>
                )}

                {mode === "loggingIn" && (
                    <div className="flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Användarnamn"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border rounded px-2 py-1"
                        />
                        <input
                            type="password"
                            placeholder="Lösenord"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded px-2 py-1"
                        />
                        <button
                            onClick={handleLogin}
                            className="bg-black text-white px-4 py-2 rounded-md"
                        >
                            Logga in
                        </button>
                    </div>
                )}

                {mode === "loggedIn" && (
                    <div className="flex gap-6 items-center">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/my-lists" className="hover:underline">My Lists</a>
                        <a href="/reward" className="hover:underline">Rewards</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <button
                            onClick={handleLogout}
                            className="bg-black text-white px-4 py-2 rounded-md"
                        >
                            Logga ut
                        </button>
                    </div>
                )}

            </div>
        </nav>
    );
}