import React, { useState, useRef, useEffect, useReducer } from "react";
import { encontrarRespuesta } from "../api/respuestas";
import { useAuth } from "../context/AuthContext";
import { IoPerson } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

// Reducer para gestionar el estado del chat
const chatReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return [...state, action.message];
        case "RESET_MESSAGES":
            return [];
        default:
            return state;
    }
};

const ChatMessage = ({ message }) => (
    <div
        className={`flex flex-row mb-2 p-2 rounded-md ${message.role === "user"
            ? "self-end bg-blue-700 text-left"
            : "self-end bg-gray-800 text-right"
            }`}
    >
        {message.role === "user" ? (
            <>
                <div className="text-lg">
                    <IoPerson size={30} />
                </div>
                <div className="flex flex-col ml-2">
                    <span>{message.username}</span>
                    <p className="text-xl text-justify">{message.content}</p> {/* Texto justificado */}
                </div>
            </>
        ) : (
            <>
                <div className="flex items-end">
                    <div className="text-right">
                        <span>{message.username}</span>
                        <p className="text-xl text-justify">{message.content}</p> {/* Texto justificado */}
                    </div>
                    <div className="ml-2">
                        <FaRobot size={30} />
                    </div>
                </div>
            </>
        )}
    </div>
);

export default function Chat() {
    const { isAuthenticated, user } = useAuth();
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(chatReducer, []);
    const messagesEndRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = input.trim();

        const userMessage = {
            role: "user",
            content: input,
            username: isAuthenticated ? user.username : "Usuario Anónimo",
        };

        const response = encontrarRespuesta(question);

        const botMessage = {
            role: "bot",
            content: response || "Lo siento, no tengo respuesta para esa pregunta.",
        };

        dispatch({ type: "ADD_MESSAGE", message: userMessage });
        dispatch({ type: "ADD_MESSAGE", message: botMessage });
        setInput("");
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [state]);

    const backgroundStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    };


    return (
        <section className="flex justify-center items-center h-screen">
            <div style={backgroundStyle} className="bg-zinc-800 max-w-2xl p-10 rounded-md w-full">
                <h1 className="text-center text-4xl font-bold mb-4">SerenityNow</h1>
                <div className="text-white max-h-96 h-full overflow-y-auto">
                    {state.map((message, index) => (
                        <ChatMessage
                            key={index}
                            message={message}
                            isUser={message.role === "user"}
                        />
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center my-6">
                        <div className="flex items-center">
                            <IoPerson size={40} />
                            <span className="ml-2">
                                {isAuthenticated ? user.username : "Usuario Anónimo"}
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            disabled={!input}
                        >
                            Enviar
                        </button>
                    </div>

                    <textarea
                        rows={4}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}

                        className="text-white text-lg bg-black px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Escribe tu pregunta..."
                        autoFocus
                    />
                </form>
            </div>
        </section>
    );
}
