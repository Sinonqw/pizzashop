// components/GuestLoginOrCheckoutForm.tsx
"use client";

import React, { useState } from "react";

interface GuestLoginOrCheckoutFormProps {
  onLoginSuccess: (userId: string, name: string, phone: string) => void;
}

export default function GuestLoginOrCheckoutForm({
  onLoginSuccess,
}: GuestLoginOrCheckoutFormProps) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!name.trim() || !phone.trim()) {
      setError("Пожалуйста, введите ваше имя и номер телефона.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/guest-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        const errorData: { message?: string } = await response.json();
        throw new Error(
          errorData.message || "Ошибка входа. Попробуйте еще раз."
        );
      }

      const result: { userId: string; name: string; phone: string } =
        await response.json();
      console.log("Успешный вход гостя:", result);

      onLoginSuccess(result.userId, result.name, result.phone);
    } catch (err: any) {
      setError(err.message || "Произошла непредвиденная ошибка.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl shadow-lg bg-gray-900
                 border border-gray-800 relative overflow-hidden"
    >
      {/* УДАЛЕНО: Декоративная полоска сверху была удалена */}

      <h2 className="text-2xl font-bold mb-6 text-white text-center pt-4">
        Добро пожаловать в PizzaHub!
      </h2>

      <p className="text-gray-300 mb-6 text-center text-sm">
        Для оформления заказа введите ваше имя и номер телефона.
      </p>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Ваше имя:
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm
                     bg-gray-800 text-white placeholder-gray-500
                     focus:ring-[var(--pizza-orange)] focus:border-[var(--pizza-orange)] transition-all duration-200"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
          placeholder="Например, Иван"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Номер телефона:
        </label>
        <input
          type="tel"
          id="phone"
          className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm
                     bg-gray-800 text-white placeholder-gray-500
                     focus:ring-[var(--pizza-orange)] focus:border-[var(--pizza-orange)] transition-all duration-200"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          placeholder="+380 (XX) XXX-XX-XX"
          required
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-[var(--pizza-orange)] text-white py-3 px-4 rounded-lg
                   font-semibold text-lg hover:bg-[var(--pizza-orange-dark)]
                   focus:outline-none focus:ring-2 focus:ring-[var(--pizza-orange)] focus:ring-offset-2
                   disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        disabled={loading}
      >
        {loading ? "Обработка..." : "Продолжить заказ"}
      </button>
    </form>
  );
}
